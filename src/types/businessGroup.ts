export interface BusinessGroup {
  id: string;
  name: string;
  enabled: boolean;
}

export interface SiteAndGroupData {
  site_id: number;
  site_name: string;
  business_group_id: number;
  business_group_name: string;
  site_address: string;
}

export interface BusinessGroupWithSites extends BusinessGroup {
  sites: string[];
}