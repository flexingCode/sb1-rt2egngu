export interface Plan {
  id: string;
  title: string;
  badge: string;
  imageUrl: string;
}

export interface PlanDetails extends Plan {
  description: string;
  tasks: {
    id: string;
    title: string;
  }[];
}