import { User, Task, CalendarEvent, ChartData } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'admin',
    status: 'active',
    lastLogin: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'manager',
    status: 'active',
    lastLogin: new Date('2024-01-15T08:45:00Z')
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    role: 'user',
    status: 'inactive',
    lastLogin: new Date('2024-01-12T14:20:00Z')
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@company.com',
    role: 'manager',
    status: 'active',
    lastLogin: new Date('2024-01-15T09:15:00Z')
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2024-01-14T16:30:00Z')
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new dashboard layout',
    description: 'Create wireframes and mockups for the new admin dashboard',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Sarah Johnson',
    dueDate: new Date('2024-01-20T00:00:00Z'),
    createdAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: '2',
    title: 'Implement user authentication',
    description: 'Add login and signup functionality with JWT tokens',
    status: 'todo',
    priority: 'high',
    assignee: 'Michael Chen',
    dueDate: new Date('2024-01-25T00:00:00Z'),
    createdAt: new Date('2024-01-12T00:00:00Z')
  },
  {
    id: '3',
    title: 'Write API documentation',
    description: 'Document all REST API endpoints and their usage',
    status: 'review',
    priority: 'medium',
    assignee: 'Emily Rodriguez',
    dueDate: new Date('2024-01-18T00:00:00Z'),
    createdAt: new Date('2024-01-08T00:00:00Z')
  },
  {
    id: '4',
    title: 'Setup CI/CD pipeline',
    description: 'Configure automated testing and deployment pipeline',
    status: 'done',
    priority: 'medium',
    assignee: 'David Kim',
    dueDate: new Date('2024-01-15T00:00:00Z'),
    createdAt: new Date('2024-01-05T00:00:00Z')
  }
];

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Standup',
    date: new Date('2024-01-16T09:00:00Z'),
    type: 'meeting',
    color: '#3B82F6',
    description: 'Daily team standup meeting'
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: new Date('2024-01-20T23:59:00Z'),
    type: 'deadline',
    color: '#EF4444',
    description: 'Final submission for Q1 project'
  },
  {
    id: '3',
    title: 'Client Presentation',
    date: new Date('2024-01-18T14:00:00Z'),
    type: 'meeting',
    color: '#8B5CF6',
    description: 'Present new features to client'
  },
  {
    id: '4',
    title: 'Team Building Event',
    date: new Date('2024-01-22T18:00:00Z'),
    type: 'event',
    color: '#10B981',
    description: 'Monthly team building activity'
  }
];

export const salesData: ChartData[] = [
  { label: 'Jan', value: 4000, color: '#3B82F6' },
  { label: 'Feb', value: 3000, color: '#8B5CF6' },
  { label: 'Mar', value: 5000, color: '#10B981' },
  { label: 'Apr', value: 4500, color: '#F59E0B' },
  { label: 'May', value: 6000, color: '#EF4444' },
  { label: 'Jun', value: 5500, color: '#06B6D4' }
];

export const userGrowthData: ChartData[] = [
  { label: 'New Users', value: 1200, color: '#10B981' },
  { label: 'Returning Users', value: 800, color: '#3B82F6' },
  { label: 'Inactive Users', value: 200, color: '#EF4444' }
];