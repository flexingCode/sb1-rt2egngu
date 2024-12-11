export interface PaginationParams {
  page: number;
  perPage: number;
  sort: {
    field: string;
    order: string;
  };
  filter?: Record<string, any>;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}