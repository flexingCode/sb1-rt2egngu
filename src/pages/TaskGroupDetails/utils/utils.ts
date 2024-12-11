/**
 * Formats a date string to a more readable format
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Calculates the completion percentage
 * @param completed - Number of completed tasks
 * @param total - Total number of tasks
 * @returns Completion percentage
 */
export const calculateCompletion = (completed: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

/**
 * Determines if a task is late based on its due date
 * @param dueDate - The due date of the task
 * @returns Boolean indicating if the task is late
 */
export const isTaskLate = (dueDate: string): boolean => {
  const now = new Date();
  const due = new Date(dueDate);
  return now > due;
};