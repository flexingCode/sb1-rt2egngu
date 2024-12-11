import { axiosInstance } from '../config/axios';
import { getActiveIds } from '../utils/storage';
import type { PaginationParams, PageResponse } from '../types';

export const userEndpoints = {
  getList: async (params: PaginationParams) => {
    const { siteId, groupId } = getActiveIds();
    const endpoint = params?.filter?.groupTask ? 
      `groups/${groupId}/users` : 
      `sites/${siteId}/users`;
      
    const { data } = await axiosInstance.get(endpoint, { params });
    return data;
  },

  getOne: async (id: string) => {
    const { siteId } = getActiveIds();
    const { data } = await axiosInstance.get(`sites/${siteId}/users/${id}`);
    return data;
  },

  create: async (userData: any) => {
    const { siteId } = getActiveIds();
    const { data } = await axiosInstance.post(`sites/${siteId}/users`, userData);
    return data;
  },

  update: async (id: string, userData: any) => {
    const { siteId } = getActiveIds();
    const { data } = await axiosInstance.put(`sites/${siteId}/users/${id}`, userData);
    return data;
  },

  delete: async (id: string) => {
    const { siteId } = getActiveIds();
    await axiosInstance.delete(`sites/${siteId}/users/${id}`);
  }
};