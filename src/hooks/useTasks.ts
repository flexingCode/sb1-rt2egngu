import { useMemo } from 'react';
import { useApp } from '../contexts/AppContext';
import { mockGroupTasks } from '../data/mockGroupTasks';
import { mockSiteTasks } from '../data/mockSiteTasks';
import { Task } from '../types/task';

export const useTasks = () => {
  const { activeBusinessGroup, activeSite } = useApp();

  const groupTasks = useMemo(() => {
    if (!activeBusinessGroup) return [];
    return mockGroupTasks.filter(task => task.groupId === activeBusinessGroup.id);
  }, [activeBusinessGroup]);

  const siteTasks = useMemo(() => {
    if (!activeSite) return [];
    return mockSiteTasks.filter(task => task.siteId === activeSite.id);
  }, [activeSite]);

  const allTasks = useMemo(() => {
    const tasks = [...groupTasks];
    if (activeSite) {
      tasks.push(...siteTasks);
    }
    return tasks.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }, [groupTasks, siteTasks, activeSite]);

  return {
    groupTasks,
    siteTasks,
    allTasks
  };
};