import { useMemo } from 'react';
import { useApp } from '../contexts/AppContext';
import { mockSites } from '../data/mockSites';
import { mockUsers } from '../data/mockUsers';
import { mockGroupTasks } from '../data/mockGroupTasks';
import { mockTaskGroups } from '../data/mockTaskGroups';
import { mockSiteTasks } from '../data/mockSiteTasks';
import { mockSiteTaskGroups } from '../data/mockSiteTaskGroups';

export const useFilteredData = () => {
  const { activeBusinessGroup, activeSite } = useApp();

  const filteredSites = useMemo(() => {
    if (!activeBusinessGroup) return [];
    return mockSites.filter(site => site.businessGroupId === activeBusinessGroup.id);
  }, [activeBusinessGroup]);

  const filteredUsers = useMemo(() => {
    if (!activeSite) return [];
    return mockUsers.filter(user => user.siteId === activeSite.id);
  }, [activeSite]);

  const filteredTasks = useMemo(() => {
    if (!activeSite) return [];
    return mockSiteTasks.filter(task => task.siteId === activeSite.id);
  }, [activeSite]);

  const filteredTaskGroups = useMemo(() => {
    if (!activeSite) return [];
    return mockSiteTaskGroups.filter(group => group.siteId === activeSite.id);
  }, [activeSite]);

  const groupTasks = useMemo(() => {
    if (!activeBusinessGroup) return [];
    return mockGroupTasks.filter(task => task.groupId === activeBusinessGroup.id);
  }, [activeBusinessGroup]);

  const groupTaskGroups = useMemo(() => {
    if (!activeBusinessGroup) return [];
    return mockTaskGroups.filter(group => group.groupId === activeBusinessGroup.id);
  }, [activeBusinessGroup]);

  return {
    filteredSites,
    filteredUsers,
    filteredTasks,
    filteredTaskGroups,
    groupTasks,
    groupTaskGroups,
  };
};