import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../contexts/BreadcrumbContext';
import { menuItems } from '../components/layout/sidebar/sidebarConfig';

export const useBreadcrumbUpdate = () => {
  const location = useLocation();
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    const path = location.pathname;
    const breadcrumbs = ['Dashboard'];

    if (path !== '/') {
      const pathSegments = path.split('/').filter(Boolean);
      const matchedItems = pathSegments.map(segment => {
        const matchedItem = menuItems.find(item => item.path === `/${segment}`);
        return matchedItem?.label || segment.charAt(0).toUpperCase() + segment.slice(1);
      });
      breadcrumbs.push(...matchedItems);
    }

    setBreadcrumbs(breadcrumbs);
  }, [location, setBreadcrumbs]);
};