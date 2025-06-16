import React, { useState } from 'react';
import { KanbanBoard } from '../components/Kanban/KanbanBoard';
import { Task } from '../types';
import { mockTasks } from '../data/mockData';

export function KanbanPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleTaskUpdate = (taskId: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  const handleTaskAdd = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: Math.random().toString(36).substr(2, 9)
    };
    setTasks(prev => [...prev, task]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project Management</h1>
      </div>

      <KanbanBoard 
        tasks={tasks} 
        onTaskUpdate={handleTaskUpdate}
        onTaskAdd={handleTaskAdd}
      />
    </div>
  );
}