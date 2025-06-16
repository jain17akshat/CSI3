import React from 'react';
import { Task } from '../../types';
import { KanbanCard } from './KanbanCard';

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  onDragStart: (task: Task) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  className?: string;
}

export function KanbanColumn({ title, tasks, onDragStart, onDragOver, onDrop, className }: KanbanColumnProps) {
  return (
    <div
      className={`rounded-lg p-4 min-h-[500px] ${className}`}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <KanbanCard
            key={task.id}
            task={task}
            onDragStart={() => onDragStart(task)}
          />
        ))}
      </div>
    </div>
  );
}