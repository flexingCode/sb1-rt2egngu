import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { GET_ONE } from 'react-admin';
import dataProvider from '../api/dataProvider';
// import { StreamChat } from 'stream-chat';

//Not happy with the localstorage use, but we don't have context here.
//Good enough for now.

const mediaRoot = process.env.REACT_APP_MEDIA_ROOT;
// const client = new StreamChat(process.env.REACT_APP_STREAMIO);

const login = params => {
    const {error, username, password} = params;

    if (params instanceof CognitoUser) {
        return params;
    }
      
    if (error) {
        return Promise.reject(error);
    }

    //At some point we'll need to check the expiry on access to fetch a new tokens
    return Auth.signIn(username, password)
        .then( auth => dataProvider(GET_ONE, 'authorize/media')
            .then( ({ internalAccess, privateAccess, trainingAccess }) => {
                localStorage.setItem('internalAccess', internalAccess);
                localStorage.setItem('privateAccess', privateAccess);
                localStorage.setItem('trainingAccess', trainingAccess);
            })
            .then( () => getProfileData().then(() => AuthProvider.getPermissions))
            .then(() => dataProvider(GET_ONE, 'sites', {id: localStorage.getItem('siteId')})).then( response => {
                localStorage.setItem('siteName', response.data.name);
            })
            .then(() =>
                dataProvider(GET_ONE, 'groups', {id: localStorage.getItem('groupId')})
                .then(response => localStorage.setItem('groupName', response.data.name))
            )
            .then(() => auth));
};

const logout = () => {
    return Auth.signOut({ global: true }).then(value =>{
        // localStorage.removeItem('roles');
        // localStorage.removeItem('profile');
        // localStorage.removeItem('siteId');
        // localStorage.removeItem('siteName');
        // localStorage.removeItem('groupName');
        return value;
    }).finally(() => {
        localStorage.clear();//Maybe this is all we need?
    });
};

//Provile and access data
const getProfileData = () => 
    dataProvider(GET_ONE, "my/profile").then(data => {
        let result = data.data;
        let { id, firstName, lastName, image, site:{id:siteId, group:{id:groupId}} } = result;

        let profile = {
            id,
            siteId,
            groupId,
            fullName: `${firstName} ${lastName}`,
            avatar: image ? `${mediaRoot}${image}` : null, //needs authorized token - Maybe figure out another method (lambda)
        }

        //These top ones are for current selection context - profile will store these for non-current reference (user's home base)
        localStorage.setItem('siteId', siteId);
        localStorage.setItem('groupId', groupId);
        localStorage.setItem('profile', JSON.stringify(profile));

        return profile;
    });

// const get

//TODO - Implement this in some way (custom login impl)
//const changePassword = params => Auth.completeNewPassword.bind(Auth)(params.cognitoUser, params.password);

const currentSession = () =>
  Auth.currentSession().then(session => {
    if (!session) {
      return Promise.reject('You need to sign in to access that page.');
    }
    return session;
  });

const AuthProvider = {
    login: login,
    logout: logout,
    checkAuth: currentSession,
    checkError: () => Promise.resolve(), // Errors should not log the user out.
    getPermissions: () => {
        let roles = JSON.parse(localStorage.getItem('roles'));
        
        if(roles !== null && roles !== undefined && roles.length > 0) {
            return Promise.resolve(roles);
        }

        return dataProvider(GET_ONE, "my/roles").then(data => {
            let roles = data.data;
            if(roles.length > 0) {
                localStorage.setItem('roles', JSON.stringify(roles));
                return roles;    
            }
            return logout(); //No roles, no access
        });
    },
    getIdentity: () => {
        let profile = localStorage.getItem('profile');

        if(profile) {
            return Promise.resolve(JSON.parse(profile));
        }

        return getProfileData();
    },
};

export default AuthProvider;