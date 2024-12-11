import { useMemo } from 'react';
import { useApp } from '../../../../contexts/AppContext';
import { mockGroupTasks } from '../../../../data/mockGroupTasks';
import { mockSiteTasks } from '../../../../data/mockSiteTasks';

export const useTasksByType = (type: 'group' | 'site') => {
  const { activeBusinessGroup, activeSite } = useApp();

  return useMemo(() => {
    if (type === 'group' && activeBusinessGroup) {
      return mockGroupTasks.filter(task => task.groupId === activeBusinessGroup.id);
    }
    if (type === 'site' && activeSite) {
      return mockSiteTasks.filter(task => task.siteId === activeSite.id);
    }
    return [];
  }, [type, activeBusinessGroup, activeSite]);
};