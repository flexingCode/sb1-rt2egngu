import React, { createContext, useContext, useState } from 'react';
import { mockBusinessGroups } from '../data/mockBusinessGroups';
import { mockSites } from '../data/mockSites';
import type { BusinessGroup } from '../types/businessGroup';
import type { Site } from '../types/site';

interface AppContextType {
  activeBusinessGroup: BusinessGroup | null;
  setActiveBusinessGroup: (group: BusinessGroup | null) => void;
  activeSite: Site | null;
  setActiveSite: (site: Site | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with Premier Automotive
  const initialGroup = mockBusinessGroups.find(group => group.id === '9');
  // Initialize with Premier Nissan of Metairie
  const initialSite = mockSites.find(site => site.id === '36');

  const [activeBusinessGroup, setActiveBusinessGroup] = useState<BusinessGroup | null>(initialGroup || null);
  const [activeSite, setActiveSite] = useState<Site | null>(initialSite || null);

  return (
    <AppContext.Provider
      value={{
        activeBusinessGroup,
        setActiveBusinessGroup,
        activeSite,
        setActiveSite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};