/**
 * Represents a user profile with an image and name.
 */
export interface ProfileProps {
  imageSrc: string; // URL to the profile image.
  name: string; // Name of the person.
}

/**
 * Represents a task card with an image and title.
 */
export interface TaskCardProps {
  imageSrc: string; // URL to the task image.
  title: string; // Title of the task.
}

/**
 * Represents the progress bar component properties.
 */
export interface ProgressBarProps {
  percentage: number; // Completion percentage (0-100).
  isLate?: boolean; // Indicates if the task is overdue.
}

/**
 * Represents a row in the rankings table.
 */
export interface RankingRowProps {
  rank: number; // Rank of the individual.
  imageSrc: string; // URL to the profile image.
  name: string; // Name of the individual.
  completion: number; // Completion percentage (0-100).
  dueTasks: number; // Total number of tasks assigned.
  completed: number; // Number of tasks completed.
  isLate?: boolean; // Indicates if the individual is overdue.
}

/**
 * Represents a spotlight section, such as "On Time" or "Late" sections.
 */
export interface SpotlightSectionProps {
  title: string; // Title of the section.
  status: string; // Status of the spotlight (e.g., "On Time", "Late").
  profiles: ProfileProps[]; // Array of profiles displayed in the section.
}
