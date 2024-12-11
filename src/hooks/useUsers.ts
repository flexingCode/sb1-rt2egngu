import { useState, useCallback } from 'react';
import { mockUsers } from '../data/mockUsers';
import { User } from '../types/user';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const addUser = useCallback((user: User) => {
    setUsers(prev => [...prev, user]);
  }, []);

  const updateUser = useCallback((updatedUser: User) => {
    setUsers(prev => prev.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
  }, []);

  const deleteUser = useCallback((userId: string) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  }, []);

  const getUsersBySite = useCallback((siteId: string) => {
    return users.filter(user => user.siteId === siteId);
  }, [users]);

  const getUsersByGroup = useCallback((groupId: string) => {
    return users.filter(user => user.groupId === groupId);
  }, [users]);

  return {
    users,
    addUser,
    updateUser,
    deleteUser,
    getUsersBySite,
    getUsersByGroup,
  };
};