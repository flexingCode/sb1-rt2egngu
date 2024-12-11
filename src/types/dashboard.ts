export interface StatData {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  percentageChange: number;
  period?: string;
}

export interface StatCardProps extends StatData {
  className?: string;
}