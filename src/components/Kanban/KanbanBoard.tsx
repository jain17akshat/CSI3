import React, { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { Task } from '../../types';
import { KanbanColumn } from './KanbanColumn';

interface KanbanBoardProps {
  tasks: Task[];
  onTaskUpdate?: (taskId: string, updates: Partial<Task>) => void;
  onTaskAdd?: (task: Omit<Task, 'id'>) => void;
}

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100 dark:bg-gray-700' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900/30' },
  { id: 'review', title: 'Review', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
  { id: 'done', title: 'Done', color: 'bg-green-100 dark:bg-green-900/30' }
];

export function KanbanBoard({ tasks, onTaskUpdate, onTaskAdd }: KanbanBoardProps) {
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== newStatus) {
      onTaskUpdate?.(draggedTask.id, { status: newStatus as Task['status'] });
    }
    setDraggedTask(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Kanban Board</h2>
          <button
            onClick={() => onTaskAdd?.({
              title: 'New Task',
              description: '',
              status: 'todo',
              priority: 'medium',
              assignee: '',
              dueDate: new Date(),
              createdAt: new Date()
            })}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              title={column.title}
              tasks={getTasksByStatus(column.id)}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.id)}
              className={column.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}