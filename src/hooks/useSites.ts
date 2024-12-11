import { useMemo } from 'react';
import { Site } from '../types/site';
import { mockSiteAndGroupData } from '../data/mockSiteAndGroupData';

export const useSites = () => {
  const sites = useMemo(() => {
    return mockSiteAndGroupData.map(item => ({
      id: item.site_id.toString(),
      name: item.site_name,
      address: item.site_address,
      businessGroupId: item.business_group_id.toString(),
      enabled: true
    }));
  }, []);

  const getSitesByBusinessGroup = (businessGroupId: string) => {
    return sites.filter(site => site.businessGroupId === businessGroupId);
  };

  return {
    sites,
    getSitesByBusinessGroup
  };
};