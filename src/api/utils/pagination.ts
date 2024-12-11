interface PaginationParams {
  page: number;
  perPage: number;
  sort: {
    field: string;
    order: string;
  };
  filter?: Record<string, any>;
}

export const toPageable = (params: PaginationParams): string => {
  const { page, perPage, sort: { field, order }, filter } = params;
  
  const filters = filter ? 
    Object.entries(filter)
      .map(([key, value]) => `${key}=${value}`)
      .join('&') : '';

  return `page=${page - 1}&size=${perPage}&sort=${field},${order}${filters ? `&${filters}` : ''}`;
};

export const toPage = <T>({ content, totalElements }: { content: T[], totalElements: number }) => ({
  data: content,
  total: totalElements
});