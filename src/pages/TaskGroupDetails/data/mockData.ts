import { TaskCardProps, ProfileProps, RankingRowProps } from '../types';

export const taskCards: TaskCardProps[] = [
  {
    imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&q=80",
    title: "Office Mgr. Paperwork"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=300&q=80",
    title: "Sign Pay Plan"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1554224155-1d873f3491c4?auto=format&fit=crop&w=300&q=80",
    title: "Clock In/Out Process"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=300&q=80",
    title: "Your Work Area"
  }
];

export const spotlightProfiles: ProfileProps[] = [
  {
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    name: "Sarah Wilson"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    name: "Michael Chen"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    name: "Emily Davis"
  }
];

export const holdAccountableProfiles: ProfileProps[] = [
  {
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    name: "James Rodriguez"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    name: "Anna Kim"
  }
];

export const rankingData: RankingRowProps[] = [
  {
    rank: 1,
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    name: "Sarah Wilson",
    completion: 95,
    dueTasks: 20,
    completed: 19
  },
  {
    rank: 2,
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    name: "Michael Chen",
    completion: 85,
    dueTasks: 20,
    completed: 17
  },
  {
    rank: 3,
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    name: "Emily Davis",
    completion: 75,
    dueTasks: 20,
    completed: 15,
    isLate: true
  }
];