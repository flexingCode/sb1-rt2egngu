import { TaskGroup } from '../types/taskGroup';

export const mockSiteTaskGroups: TaskGroup[] = [
  {
    id: '1',
    title: 'Dealership Onboarding Tasks',
    objective: 'Complete initial onboarding process for new employees',
    numberOfTasks: 12,
    siteId: '36', // Premier Nissan of Metairie
    groupId: '9'
  },
  {
    id: '4',
    title: 'Dealership Onboarding Tasks',
    objective: 'Dealership Phase 01',
    numberOfTasks: 15,
    siteId: '16', // Freedom Chevrolet
    groupId: '9'
  },
  {
    id: '5',
    title: 'Onboarding Tasks',
    objective: 'Dealership Phase 01',
    numberOfTasks: 10,
    siteId: '50', // Premier Mall of Georgia
    groupId: '9'
  }
];