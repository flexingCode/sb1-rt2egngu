import { useState, useCallback, useEffect } from 'react';
import { mockGroups } from '../data/mockGroups';
import { Group } from '../types/group';

export const useGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    setGroups(mockGroups);
  }, []);

  const addGroup = useCallback((group: Group) => {
    setGroups(prev => [...prev, group]);
  }, []);

  const updateGroup = useCallback((updatedGroup: Group) => {
    setGroups(prev => prev.map(group => 
      group.id === updatedGroup.id ? updatedGroup : group
    ));
  }, []);

  const deleteGroup = useCallback((groupId: string) => {
    setGroups(prev => prev.filter(group => group.id !== groupId));
  }, []);

  return {
    groups,
    addGroup,
    updateGroup,
    deleteGroup,
  };
};