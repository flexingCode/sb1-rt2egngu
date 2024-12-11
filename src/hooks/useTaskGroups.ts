import { useMemo } from 'react';
import { useApp } from '../contexts/AppContext';
import { mockTaskGroups } from '../data/mockTaskGroups';
import { mockSiteTaskGroups } from '../data/mockSiteTaskGroups';
import { TaskGroup } from '../types/taskGroup';

export const useTaskGroups = () => {
  const { activeBusinessGroup, activeSite } = useApp();

  const groupTaskGroups = useMemo(() => {
    if (!activeBusinessGroup) return [];
    return mockTaskGroups.filter(group => group.groupId === activeBusinessGroup.id);
  }, [activeBusinessGroup]);

  const siteTaskGroups = useMemo(() => {
    if (!activeSite) return [];
    return mockSiteTaskGroups.filter(group => group.siteId === activeSite.id);
  }, [activeSite]);

  const allTaskGroups = useMemo(() => {
    const groups = [...groupTaskGroups];
    if (activeSite) {
      groups.push(...siteTaskGroups);
    }
    return groups;
  }, [groupTaskGroups, siteTaskGroups, activeSite]);

  return {
    groupTaskGroups,
    siteTaskGroups,
    allTaskGroups
  };
};