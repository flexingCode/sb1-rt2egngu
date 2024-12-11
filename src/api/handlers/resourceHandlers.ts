import { axiosInstance } from '../config';
import { API_RESOURCES } from '../constants';
import { toPageable, toPage } from '../utils/pagination';

export const handleGetList = async (resource: string, params: any) => {
  const siteId = localStorage.getItem('siteId');
  const groupId = localStorage.getItem('groupId');
  
  let endpoint = resource;
  let extraParams = '';

  switch (resource) {
    case API_RESOURCES.USERS:
      endpoint = params?.filter?.groupTask ? 
        `groups/${groupId}/users` : 
        `sites/${siteId}/${resource}`;
      break;
    case API_RESOURCES.SITES:
      endpoint = `groups/${groupId}/sites`;
      break;
    case API_RESOURCES.ENROLLMENTS:
      extraParams = `&siteId=${siteId}`;
      break;
    // Add other cases as needed
  }

  const pageable = toPageable(params);
  const { data } = await axiosInstance.get(`${endpoint}?${pageable}${extraParams}`);
  return toPage(data);
};

export const handleGetOne = async (resource: string, params: any) => {
  const siteId = localStorage.getItem('siteId');
  const groupId = localStorage.getItem('groupId');
  
  let endpoint = resource;
  const item = params?.id ? `/${params.id}` : '';

  // Map resource to endpoint
  switch (resource) {
    case API_RESOURCES.GROUP_DOCS:
      endpoint = `groups/${groupId}/documents`;
      break;
    case API_RESOURCES.SITE_DOCS:
      endpoint = `sites/${siteId}/documents`;
      break;
    // Add other cases
  }

  const { data } = await axiosInstance.get(`${endpoint}${item}`);
  return item ? data : data.data;
};

// Add other handler functions for CREATE, UPDATE, DELETE etc.