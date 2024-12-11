import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlanDetails } from './components/PlanDetails';
import { TaskGroupLandingPage } from './TaskGroupLandingPage';

const mockPlanDetails = {
  id: '1',
  title: 'New Hire Onboarding',
  description: 'A new hire onboarding plan is a structured roadmap designed to integrate new employees into an organization.',
  imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  badge: 'Roadmap',
  tasks: [
    { id: '1', title: 'Office Mgr. Paperwork' },
    { id: '2', title: 'Sign Pay Plan' },
    { id: '3', title: 'Clock In/Out Process' },
    { id: '4', title: 'Your Work Area' },
    { id: '5', title: 'Meet the Team' },
    { id: '6', title: 'Job Overview' },
    { id: '7', title: 'Job Expectations' },
    { id: '8', title: 'Non-negotiables' },
    { id: '9', title: 'Lot Layout Walk' },
    { id: '10', title: 'What is Success' },
    { id: '11', title: 'How we measure performance' },
    { id: '12', title: 'Intro to Training' },
  ],
};

export const PlanDetailsPage: React.FC = () => {
  const { planId } = useParams<{ planId: string }>();
  const [showTaskGroup, setShowTaskGroup] = React.useState(false);

  const handleUsePlan = () => {
    setShowTaskGroup(true);
  };

  if (showTaskGroup) {
    return <TaskGroupLandingPage planId={planId} />;
  }

  return <PlanDetails {...mockPlanDetails} onUsePlan={handleUsePlan} />;
};