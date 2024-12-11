import { GET_LIST, GET_ONE, CREATE, UPDATE, DELETE, DELETE_MANY, GET_MANY, GET_MANY_REFERENCE } from 'react-admin';
import axios from 'axios';
import { Auth } from 'aws-amplify';

const SET_PASSWORD = 'setPassword';
const CHECK_STATUS = 'checkStatus';

const getAccessJwt = async () => {
    const session = await Auth.currentSession();
    return session.getAccessToken().getJwtToken();
}

//Base URL for API calls
axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;

// default header for all get request
axios.defaults.headers.get['Accept'] = 'application/json';

// default header for all POST request
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// default headers for all PUT request
axios.defaults.headers.put['Accept'] = 'application/json'; 
axios.defaults.headers.put['Content-Type'] = 'application/json';

//Attach access JWT to requests
axios.interceptors.request.use( async req => {
    const token = await getAccessJwt();
    req.headers.Authorization = `Bearer ${token}`;
    return req;
});

//Support Spring Boot's pageable
const toPageable = params => {
    let { page, perPage } = params.pagination;
    let { field, order} = params.sort;
    let { filter } = params;

    let filterValue = '';
    if( filter && Object.keys(filter).length > 0 ) {
        //Right now we're only supporting a single filter
        let key = Object.keys(filter)[0];
        filterValue = `&${key}=${filter[key]}`;
    }
    
    let filters = [];
    for(let f in params.filter) {
        filters.push(`${f}=${filter[f]}`);
    }

    //Off by one on page
    return `page=${page - 1}&size=${perPage}&sort=${field},${order}${filterValue}`;
}

//Convert From Spring Boot's page to one supported by this framework
const toPage = ( { content, totalElements }) => {
    return {
        data: content,
        total: totalElements
    };
}

//All API calls
//Looks like this is legacy way? Good enough
let dataProvider = (type, resource, params) => {
    // console.log('DATAPROVIDER:', type, resource, JSON.stringify(params));
    //Type is one of the constants from the above.

    
    let siteId = localStorage.getItem('siteId');
    let groupId = localStorage.getItem('groupId');
    
    switch(type) {
        case GET_LIST: 
            let pageable = toPageable(params);
            let extraParams = '';
            let postProcessor;
            
            if(resource === 'users') { 
                if(params?.filter?.groupTask) { //GroupTask user lookup - need to look at all
                    resource = `groups/${groupId}/users`;
                    delete params.filter.groupTask;
                    pageable = toPageable(params);
                } else { //default
                    resource = `sites/${siteId}/${resource}`;
                }
            } else if(resource === "sites") {
                resource = `groups/${groupId}/sites`;
            } else if(resource === 'enrollments') {
                //force site use of site id
                //probably a better way other than this, but good enough for v1
                extraParams = `&siteId=${siteId}`;
            } else if(resource === 'groupDocs') {
                resource = `groups/${groupId}/documents`;
            } else if(resource === 'siteDocs') {
                resource = `sites/${siteId}/documents`;
            } else if(resource === 'siteAsset') {
                //We need to support accessing another site's data for group admins to update site image
                let { filter } = params;
                if(!filter.siteId) {
                    resource = `sites/${siteId}/media`;    
                } else {
                    resource = `sites/${filter.siteId}/media`;
                }
            } else if(resource === 'groupAsset') {
                resource = `groups/${groupId}/media`;
            } else if(resource === 'siteTask') {
                resource = `sites/${siteId}/tasks`;
            } else if(resource === 'groupTask') {
                resource = `groups/${groupId}/tasks`;
            } else if (resource === 'siteTaskGroup') {
                resource = `sites/${siteId}/taskGroups`;
            } else if (resource === 'groupTaskGroup') {
                resource = `groups/${groupId}/taskGroups`;
            } else if (resource === 'siteFaq') {
                resource = `sites/${siteId}/faqs`;
            } else if (resource === 'groupFaq') {
                resource = `groups/${groupId}/faqs`;
            } else if (resource === 'mapPins') {
                resource = `sites/${siteId}/mapPins`;
            } else if (resource === 'roles') {
                // let { filter } = params;
                // if(filter.showSuperRole === true) {
                //     postProcessor = (input) => {
                //         input.data.filter(role => role.name == '')
                //         console.log('filter');
                //         console.log(input);
                //         return input;
                //     }
                // }
            }

            return axios.get(`${resource}?${pageable}${extraParams}`)
                .then( ({ data }) => toPage(data) )
                .then( page => {
                    if(typeof postProcessor === 'function') {
                        return postProcessor(page);
                    }
                    return page;
                });
        case GET_ONE:   
            let item = params?.id !== undefined ? `/${params.id}` : '';

            if(resource === 'groupDocs') {
                resource = `groups/${groupId}/documents`;
            } else if(resource === 'siteDocs') {
                resource = `sites/${siteId}/documents`;
            } else if(resource === 'siteAsset') {
                resource = `sites/${siteId}/media`;
            } else if(resource === 'groupAsset') {
                resource = `groups/${groupId}/media`;
            } else if(resource === 'siteTask') {
                resource = `sites/${siteId}/tasks`;
            } else if(resource === 'groupTask') {
                resource = `groups/${groupId}/tasks`;
            } else if (resource === 'siteTaskGroup') {
                resource = `sites/${siteId}/taskGroups`;
            } else if (resource === 'groupTaskGroup') {
                resource = `groups/${groupId}/taskGroups`;
            } else if (resource === 'siteFaq') {
                resource = `sites/${siteId}/faqs`;
            } else if (resource === 'groupFaq') {
                resource = `groups/${groupId}/faqs`;
            } else if (resource === 'mapPins') {
                resource = `sites/${siteId}/mapPins`;
            } else if (resource === 'address') {
                //For some reason item parsing above does not work right
                console.log(item);
                item = '';
                resource = `sites/${siteId}/address`;
            }

            return axios.get(`${resource}${item}`).then( data => {
                //console.log(data); 
                return item !== '' || item !== undefined ? data : data.data; //Unwrap if we didn't include id - little nuance
                //return data;
            });
        case CREATE: 
            if(resource === 'groupDocs') {
                resource = `groups/${groupId}/documents`;

                let info = new Blob([JSON.stringify(
                    {
                        "title": params.data.title,
                        "description": params.data.description,
                        "documentType": params.data.documentType
                    })],
                    {
                    type: 'application/json'
                    });


                //Create multipart post here
                let multipart = new FormData();
                multipart.append('file', params.data.file.rawFile)
                multipart.append('documentUploadDto', info);
                return axios.post(`${resource}`, multipart, {headers:{'Content-Type':'multipart/form-data'}});
            } else if(resource === 'siteDocs') {
                resource = `sites/${siteId}/documents`;

                let info = new Blob([JSON.stringify(
                    {
                        "title": params.data.title,
                        "description": params.data.description,
                        "documentType": params.data.documentType
                    })],
                    {
                    type: 'application/json'
                    });


                //Create multipart post here
                let multipart = new FormData();
                multipart.append('file', params.data.file.rawFile)
                multipart.append('documentUploadDto', info);
                return axios.post(`${resource}`, multipart, {headers:{'Content-Type':'multipart/form-data'}});
            } else if(resource === 'siteAsset') {
                resource = `sites/${siteId}/media`;

                let request = {
                    title: params.data.title,
                    fileName : params.data.file.title
                }
                return axios.post(`${resource}/request`, request)
                .then(response => response.data)
                .then(data => {
                    let options = {
                        headers: {
                          'Content-Type': params.data.file.rawFile.type,
                        },
                      };

                      let aws = axios.create();
                      return aws.put(data.uploadUrl, params.data.file.rawFile, options)
                      .then(result => {
                        request.fileName = data.fileName;
                        return axios.post(`${resource}/complete`, request);
                      });
                });
            } else if(resource === 'groupAsset') {
                resource = `groups/${groupId}/media`;
                let request = {
                    title: params.data.title,
                    fileName : params.data.file.title
                }
                return axios.post(`${resource}/request`, request)
                .then(response => response.data)
                .then(data => {
                    let options = {
                        headers: {
                          'Content-Type': params.data.file.rawFile.type
                        }
                      };
                
                      let aws = axios.create();
                      return aws.put(data.uploadUrl, params.data.file.rawFile, options)
                      .then(result => {
                        request.fileName = data.fileName;
                        return axios.post(`${resource}/complete`, request);
                      });
                });
            } else if(resource === 'siteTask') {
                resource = `sites/${siteId}/tasks`;
            } else if(resource === 'groupTask') {
                resource = `groups/${groupId}/tasks`;
            } else if (resource === 'siteTaskGroup') {
                resource = `sites/${siteId}/taskGroups`;
            } else if (resource === 'groupTaskGroup') {
                resource = `groups/${groupId}/taskGroups`;
            } else if (resource === 'assignGroupTaskGroup') {
                params.data['ownerEntityId'] = Number(groupId);
                resource = '/groupTaskGroup/assign/bulk';
            } else if (resource === 'assignSiteTaskGroup') {
                params.data['ownerEntityId'] = Number(siteId);
                resource = '/siteTaskGroup/assign/bulk';
            } else if (resource === 'siteFaq') {
                resource = `sites/${siteId}/faqs`;
            } else if (resource === 'groupFaq') {
                resource = `groups/${groupId}/faqs`;
            } else if (resource === 'mapPins') {
                resource = `sites/${siteId}/mapPins`;
            }

            return axios.post(`${resource}`, params.data).then(result => {
                //Special handler for accepted results
                //Right now just for task assignment

                if(result.data === '' && result.status === 202 ) {
                    result.data = {id:0};
                }

                return result;
            });
        case UPDATE:
            let ignoreId = false;

            if(resource === 'siteTask') {
                resource = `sites/${siteId}/tasks`;
            } else if(resource === 'groupTask') {
                resource = `groups/${groupId}/tasks`;
            } else if(resource === 'groupDocs') {
                resource = `groups/${groupId}/documents`;
            } else if(resource === 'siteDocs') {
                resource = `sites/${siteId}/documents`;
            } else if(resource === 'siteAsset') {
                resource = `sites/${siteId}/media`;
            } else if (resource === 'siteTaskGroup') {
                resource = `sites/${siteId}/taskGroups`;
            } else if (resource === 'groupTaskGroup') {
                resource = `groups/${groupId}/taskGroups`;
            } else if (resource === 'siteFaq') {
                resource = `sites/${siteId}/faqs`;
            } else if (resource === 'groupFaq') {
                resource = `groups/${groupId}/faqs`;
            } else if (resource === 'mapPins') {
                resource = `sites/${siteId}/mapPins`;
            } else if(resource === 'groupAsset') {
                resource = `groups/${groupId}/media`;
            }  else if (resource === 'address') {
                ignoreId = true;
                resource = `sites/${siteId}/address`;
            }

            let resourceEnd = ignoreId ? '' : `/${params.data.id}`;

            return axios.put(`${resource}${resourceEnd}`, params.data);

        case DELETE: 
            //only support users delete right now
            if(resource === 'users' ){
            } else if(resource === 'siteTask') {
                resource = `sites/${siteId}/tasks`;
            } else if(resource === 'groupTask') {
                resource = `groups/${groupId}/tasks`;
            } else if(resource === 'groupDocs') {
                resource = `groups/${groupId}/documents`;
            } else if(resource === 'siteDocs') {
                resource = `sites/${siteId}/documents`;
            } else if(resource === 'siteAsset') {
                resource = `sites/${siteId}/media`;
            } else if (resource === 'siteTaskGroup') {
                resource = `sites/${siteId}/taskGroups`;
            } else if (resource === 'groupTaskGroup') {
                resource = `groups/${groupId}/taskGroups`;
            } else if (resource === 'siteFaq') {
                resource = `sites/${siteId}/faqs`;
            } else if (resource === 'groupFaq') {
                resource = `groups/${groupId}/faqs`;
            } else if (resource === 'mapPins') {
                resource = `sites/${siteId}/mapPins`;
            } else if(resource === 'groupAsset') {
                resource = `groups/${groupId}/media`;
            } else {
                return Promise.reject(`Delete not implemented for resource: ${resource}.`);
            } 

            return axios.delete(`${resource}/${params.id}`);    
        case DELETE_MANY: 
            if(params.ids.length === 1 ){ //Proxy for single
                return dataProvider(DELETE, resource, params.ids[0]);
            }
            //Only support one at a time for now
            return Promise.reject("Must delete one at a time...");
        case GET_MANY:  //By ID array
            if(resource === "users") {
                resource = `sites/${siteId}/${resource}`;
            } else if(resource === 'siteDocs') {
                resource = `sites/${siteId}/documents`;
            } else if(resource === 'siteAsset') {
                resource = `sites/${siteId}/media`;
            } else if(resource === 'groupDocs') {
                resource = `groups/${groupId}/documents`;
            } else if(resource === 'groupAsset') {
                resource = `groups/${groupId}/media`;
            } else if(resource === 'siteTask') {
                resource = `sites/${siteId}/tasks`;
            } else if(resource === 'groupTask') {
                resource = `groups/${groupId}/tasks`;
            } else if (resource === 'siteTaskGroup') {
                resource = `sites/${siteId}/taskGroups`;
            } else if (resource === 'groupTaskGroup') {
                resource = `groups/${groupId}/taskGroups`;
            } else if(resource === "sites") {
                resource = `groups/${groupId}/sites`;
            }

            return axios.get(`${resource}?ids=${params.ids}`).then(({ data }) => toPage(data) );
        case GET_MANY_REFERENCE: 
            console.log('Get Many Reference');
            return Promise.reject('Not Implemented');
        case SET_PASSWORD:
            return axios.post(`users/${params.userId}/password`, params.password);
        case CHECK_STATUS:
            console.log(resource, params);
            return axios.get(`${resource}?userId=${params.userId}&taskGroupId=${params.taskGroupId}`);
        default: return Promise.reject();
    }
}

export default dataProvider;