import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  Users,
  Sites,
  Enrollments,
  Files,
  FAQs,
  MapPins,
  OrgDevelopment,
  NewsFeeds,
  NotFound,
  PreBuiltPlans,
  PlanDetailsPage,
} from '../pages';
import { TaskGroupDetailsLayout } from '../pages/TaskGroupDetails/TaskGroupDetailsLayout';
import { TaskGroupLandingPage } from '../pages/TaskGroupDetails/TaskGroupLandingPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/enrollments" element={<Enrollments />} />
      <Route path="/files" element={<Files />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/map-pins" element={<MapPins />} />
      <Route path="/org-development" element={<OrgDevelopment />} />
      <Route path="/org-development/pre-built-plans" element={<PreBuiltPlans />} />
      <Route path="/org-development/pre-built-plans/:planId" element={<PlanDetailsPage />} />
      <Route path="/org-development/pre-built-plans/:planId/tasks" element={<TaskGroupLandingPage />} />
      <Route path="/task-group-details/:id" element={<TaskGroupDetailsLayout />} />
      <Route path="/news-feeds" element={<NewsFeeds />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};