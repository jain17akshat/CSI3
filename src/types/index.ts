// Core types for the admin dashboard
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  avatar?: string;
  status: 'active' | 'inactive';
  lastLogin: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: Date;
  createdAt: Date;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'meeting' | 'deadline' | 'event' | 'reminder';
  color: string;
  description?: string;
}

export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

export type Theme = 'light' | 'dark' | 'blue' | 'purple' | 'green';

export interface ThemeConfig {
  name: string;
  value: Theme;
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
}