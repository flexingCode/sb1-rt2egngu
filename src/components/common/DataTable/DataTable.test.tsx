import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable } from './DataTable';
import type { Column } from './DataTable';

describe('DataTable Component', () => {
  const mockColumns: Column[] = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
  ];

  const mockData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  it('renders table with data', () => {
    render(
      <DataTable
        title="Test Table"
        columns={mockColumns}
        data={mockData}
      />
    );

    expect(screen.getByText('Test Table')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('handles search input', () => {
    const onSearch = vi.fn();
    render(
      <DataTable
        title="Test Table"
        columns={mockColumns}
        data={mockData}
        onSearch={onSearch}
      />
    );

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    expect(onSearch).toHaveBeenCalledWith('John');
  });

  it('renders action buttons when provided', () => {
    const onCreate = vi.fn();
    const onExport = vi.fn();

    render(
      <DataTable
        title="Test Table"
        columns={mockColumns}
        data={mockData}
        onCreate={onCreate}
        onExport={onExport}
      />
    );

    expect(screen.getByText('Create')).toBeInTheDocument();
    expect(screen.getByText('Export')).toBeInTheDocument();
  });
});