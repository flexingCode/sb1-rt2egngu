import React from 'react';
import { Box, Typography, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { PlanSection } from './components/PlanSection';
import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';
import { roadmapPlans, implementationPlans } from './data/plans';

export const PreBuiltPlans: React.FC = () => {
  const { setBreadcrumbs } = useBreadcrumbs();
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Org Development', 'Pre-Built Action Plans']);
  }, [setBreadcrumbs]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: 600,
            color: '#262626',
          }}
        >
          Pre-Built Action Plans
        </Typography>
        <TextField
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: '300px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#F5F8F9',
              '& fieldset': {
                border: '1px solid #E0E0E0',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9E9E9E' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <PlanSection
        title="Roadmaps"
        plans={roadmapPlans.filter(plan => 
          plan.title.toLowerCase().includes(searchQuery.toLowerCase())
        )}
      />

      <Box sx={{ mt: 6 }}>
        <PlanSection
          title="Implementation"
          plans={implementationPlans.filter(plan =>
            plan.title.toLowerCase().includes(searchQuery.toLowerCase())
          )}
        />
      </Box>
    </Box>
  );
};