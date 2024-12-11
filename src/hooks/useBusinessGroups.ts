import { useMemo } from 'react';
import { BusinessGroup, BusinessGroupWithSites } from '../types/businessGroup';
import { mockSiteAndGroupData } from '../data/mockSiteAndGroupData';
import { extractUniqueBusinessGroups, mapBusinessGroupsToSites } from '../utils/businessGroupUtils';

export const useBusinessGroups = () => {
  const businessGroups = useMemo(() => 
    extractUniqueBusinessGroups(mockSiteAndGroupData),
  []);

  const businessGroupsWithSites = useMemo(() =>
    mapBusinessGroupsToSites(mockSiteAndGroupData),
  []);

  const getBusinessGroupById = (id: string): BusinessGroup | undefined => 
    businessGroups.find(group => group.id === id);

  const getBusinessGroupWithSites = (id: string): BusinessGroupWithSites | undefined =>
    businessGroupsWithSites.find(group => group.id === id);

  return {
    businessGroups,
    businessGroupsWithSites,
    getBusinessGroupById,
    getBusinessGroupWithSites,
  };
};