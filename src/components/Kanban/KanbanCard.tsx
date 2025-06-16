import React from 'react';
import { Calendar, User, AlertCircle, Clock } from 'lucide-react';
import { Task } from '../../types';

interface KanbanCardProps {
  task: Task;
  onDragStart: () => void;
}

export function KanbanCard({ task, onDragStart }: KanbanCardProps) {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const isOverdue = new Date(task.dueDate) < new Date();
  const dueDate = new Date(task.dueDate).toLocaleDateString();

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 cursor-move hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{task.title}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>
      
      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}
      
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <span className={isOverdue ? 'text-red-600' : ''}>{dueDate}</span>
          </div>
          {isOverdue && <AlertCircle className="w-3 h-3 text-red-600" />}
        </div>
        
        {task.assignee && (
          <div className="flex items-center">
            <User className="w-3 h-3 mr-1" />
            <span>{task.assignee.split(' ')[0]}</span>
          </div>
        )}
      </div>
    </div>
  );
}