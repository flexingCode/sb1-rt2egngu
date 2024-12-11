export const getStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const getActiveIds = () => ({
  siteId: getStorageItem('siteId'),
  groupId: getStorageItem('groupId')
});