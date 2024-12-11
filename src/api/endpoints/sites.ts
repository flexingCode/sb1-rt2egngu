import { axiosInstance } from '../config/axios';
import { getActiveIds } from '../utils/storage';
import type { PaginationParams, PageResponse } from '../types';

export const siteEndpoints = {
  getList: async (params: PaginationParams) => {
    const { groupId } = getActiveIds();
    const { data } = await axiosInstance.get(`groups/${groupId}/sites`, { params });
    return data;
  },

  getOne: async (id: string) => {
    const { groupId } = getActiveIds();
    const { data } = await axiosInstance.get(`groups/${groupId}/sites/${id}`);
    return data;
  },

  update: async (id: string, siteData: any) => {
    const { groupId } = getActiveIds();
    const { data } = await axiosInstance.put(`groups/${groupId}/sites/${id}`, siteData);
    return data;
  }
};