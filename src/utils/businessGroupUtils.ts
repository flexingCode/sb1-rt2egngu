import { BusinessGroup, SiteAndGroupData, BusinessGroupWithSites } from '../types/businessGroup';

export const extractUniqueBusinessGroups = (data: SiteAndGroupData[]): BusinessGroup[] => {
  const uniqueGroups = new Map<number, BusinessGroup>();
  
  data.forEach(item => {
    if (!uniqueGroups.has(item.business_group_id)) {
      uniqueGroups.set(item.business_group_id, {
        id: item.business_group_id.toString(),
        name: item.business_group_name,
        enabled: true
      });
    }
  });

  return Array.from(uniqueGroups.values());
};

export const mapBusinessGroupsToSites = (data: SiteAndGroupData[]): BusinessGroupWithSites[] => {
  const groupMap = new Map<number, BusinessGroupWithSites>();

  data.forEach(item => {
    const groupId = item.business_group_id;
    if (!groupMap.has(groupId)) {
      groupMap.set(groupId, {
        id: groupId.toString(),
        name: item.business_group_name,
        enabled: true,
        sites: []
      });
    }
    groupMap.get(groupId)?.sites.push(item.site_id.toString());
  });

  return Array.from(groupMap.values());
};

export const getSitesForBusinessGroup = (
  data: SiteAndGroupData[],
  businessGroupId: string
): SiteAndGroupData[] => {
  return data.filter(item => item.business_group_id.toString() === businessGroupId);
};