import React from 'react';
import { ChartData } from '../../types';

interface BarChartProps {
  data: ChartData[];
  title: string;
  height?: number;
}

export function BarChart({ data, title, height = 300 }: BarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      
      <div className="flex items-end justify-between space-x-2" style={{ height: `${height}px` }}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * (height - 60);
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer relative group"
                style={{ 
                  height: `${barHeight}px`,
                  backgroundColor: item.color,
                  minHeight: '4px'
                }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.value.toLocaleString()}
                </div>
              </div>
              <div className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}