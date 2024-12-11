import { GET_LIST, GET_ONE, CREATE, UPDATE, DELETE } from 'react-admin';

export const API_ACTIONS = {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  SET_PASSWORD: 'setPassword',
  CHECK_STATUS: 'checkStatus'
} as const;

export const API_RESOURCES = {
  USERS: 'users',
  SITES: 'sites',
  ENROLLMENTS: 'enrollments',
  GROUP_DOCS: 'groupDocs',
  SITE_DOCS: 'siteDocs',
  SITE_ASSET: 'siteAsset',
  GROUP_ASSET: 'groupAsset',
  SITE_TASK: 'siteTask',
  GROUP_TASK: 'groupTask',
  SITE_TASK_GROUP: 'siteTaskGroup',
  GROUP_TASK_GROUP: 'groupTaskGroup',
  SITE_FAQ: 'siteFaq',
  GROUP_FAQ: 'groupFaq',
  MAP_PINS: 'mapPins',
  ROLES: 'roles',
  ADDRESS: 'address'
} as const;