# Mock Data Documentation

## Directory Structure
```
src/
└── data/
    ├── mockBusinessGroups.ts
    ├── mockFiles.ts
    ├── mockGroupTasks.ts
    ├── mockSiteTaskGroups.ts
    ├── mockSiteTasks.ts
    ├── mockSites.ts
    ├── mockTaskGroups.ts
    ├── mockUsers.ts
    └── tasks/
        ├── freedom-chevrolet.ts
        ├── premier-automotive.ts
        └── victory-auto.ts
```

## Data Sets

### Business Groups (`mockBusinessGroups.ts`)
Contains company/organization groups like:
- Onboardian
- Demo Group
- Performance Auto Group
- Premier Automotive
- Bob Rohrman Group
- etc.

Fields:
- id: string
- name: string
- enabled: boolean

### Sites (`mockSites.ts`)
Contains individual locations/dealerships like:
- Premier Nissan of Metairie
- Freedom Chevrolet
- Victory Ford
- etc.

Fields:
- id: string
- name: string
- businessGroupId: string
- address: string | null

### Users (`mockUsers.ts`)
Contains employee data including:
- Personal info
- Role assignments
- Contact details
- Site/group affiliations

Fields:
- id: string
- firstName: string
- lastName: string
- email: string
- title: string
- phone: string
- role: UserRole
- siteId: string
- groupId: string
- avatar?: string

### Task Groups (`mockTaskGroups.ts`)
Contains collections of related tasks like:
- Premier Corporate New Hire Phase 1
- Premier Video Certification
- JLR Boston Onboarding Tasks v1

Fields:
- id: string
- title: string
- objective: string
- numberOfTasks: number
- siteId: string
- groupId: string

### Site Task Groups (`mockSiteTaskGroups.ts`)
Contains site-specific task groups like:
- Dealership Onboarding Tasks
- Sales Department Tasks
- Service Department Tasks

Fields:
- id: string
- title: string
- objective: string
- numberOfTasks: number
- siteId: string
- groupId: string

### Group Tasks (`mockGroupTasks.ts`)
Contains group-wide tasks like:
- Employee Benefits Overview
- Career Growth Opportunities
- Core Values Training

Fields:
- id: string
- title: string
- description: string
- daysUntilDue: number
- sortOrder: number
- completionType: string
- hasDocument: boolean
- hasImage: boolean
- hasVideo: boolean
- hasAudio: boolean
- groupId: string
- status: 'active' | 'completed' | 'pending'

### Site Tasks (`mockSiteTasks.ts`)
Contains site-specific tasks like:
- Welcome to the Team
- Dealership Tour
- Department Walkthroughs

Fields:
- id: string
- title: string
- description: string
- daysUntilDue: number
- sortOrder: number
- completionType: string
- hasDocument: boolean
- hasImage: boolean
- hasVideo: boolean
- hasAudio: boolean
- siteId: string
- status: 'active' | 'completed' | 'pending'

### Files (`mockFiles.ts`)
Contains document and media files like:
- Employee Handbook
- Training Videos
- Office Layout Images

Fields:
- id: string
- title: string
- description: string
- type: 'documents' | 'audio' | 'image' | 'video'
- dateAdded: string

### Location-Specific Tasks
Located in `tasks/` directory:

#### freedom-chevrolet.ts
Tasks specific to Freedom Chevrolet dealerships

#### premier-automotive.ts
Tasks specific to Premier Automotive dealerships

#### victory-auto.ts
Tasks specific to Victory Auto dealerships

Each contains tasks with the same structure as group/site tasks but specific to their respective organizations.

## Relationships
- Business Groups contain multiple Sites
- Sites contain Users
- Task Groups contain Tasks
- Tasks can be assigned to Groups or Sites
- Users belong to both a Site and a Group
- Files can be associated with Tasks

## Usage
This mock data is used throughout the application to simulate real data that would typically come from an API. It's particularly useful for:
- Development and testing
- UI demonstrations
- Feature prototyping
- User flow validation