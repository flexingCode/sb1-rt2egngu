import { TaskGroup } from '../types/taskGroup';

export const mockTaskGroups: TaskGroup[] = [
  {
    id: '1',
    title: 'Premier Corporate New Hire Phase 1',
    objective: 'This is the first phase of the corporate-wide task groups.',
    numberOfTasks: 20,
    siteId: '14', // Premier Corporate
    groupId: '9' // Premier Automotive
  },
  {
    id: '5',
    title: 'Premier Video Certification',
    objective: 'Welcome to the Automotive Video Certification Excellence (AVCE) Task Group, your gateway to mastering video communication in the automotive industry.',
    numberOfTasks: 5,
    siteId: '14',
    groupId: '9'
  },
  {
    id: '6',
    title: 'JLR Boston Onboarding Tasks v1',
    objective: 'JLR Boston Onboarding Tasks v1',
    numberOfTasks: 8,
    siteId: '53', // Herb Chambers Land Rover Boston
    groupId: '11' // Herb Chambers
  }
];