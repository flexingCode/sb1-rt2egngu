import { userEndpoints } from './endpoints/users';
import { siteEndpoints } from './endpoints/sites';
import { API_ACTIONS, API_RESOURCES } from './constants';
import type { ApiResponse } from './types';

const dataProvider = async (type: string, resource: string, params: any): Promise<ApiResponse<any>> => {
  try {
    switch (resource) {
      case API_RESOURCES.USERS:
        return handleUserResource(type, params);
      case API_RESOURCES.SITES:
        return handleSiteResource(type, params);
      default:
        throw new Error(`Unsupported resource: ${resource}`);
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const handleUserResource = async (type: string, params: any) => {
  switch (type) {
    case API_ACTIONS.GET_LIST:
      return userEndpoints.getList(params);
    case API_ACTIONS.GET_ONE:
      return userEndpoints.getOne(params.id);
    case API_ACTIONS.CREATE:
      return userEndpoints.create(params.data);
    case API_ACTIONS.UPDATE:
      return userEndpoints.update(params.id, params.data);
    case API_ACTIONS.DELETE:
      return userEndpoints.delete(params.id);
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

const handleSiteResource = async (type: string, params: any) => {
  switch (type) {
    case API_ACTIONS.GET_LIST:
      return siteEndpoints.getList(params);
    case API_ACTIONS.GET_ONE:
      return siteEndpoints.getOne(params.id);
    case API_ACTIONS.UPDATE:
      return siteEndpoints.update(params.id, params.data);
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export default dataProvider;