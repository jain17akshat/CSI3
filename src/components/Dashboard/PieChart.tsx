import React from 'react';
import { ChartData } from '../../types';

interface PieChartProps {
  data: ChartData[];
  title: string;
  size?: number;
}

export function PieChart({ data, title, size = 200 }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const createSlicePath = (value: number) => {
    const percentage = (value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = startAngle + angle;
    
    currentAngle = endAngle;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const radius = size / 2 - 10;
    const centerX = size / 2;
    const centerY = size / 2;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArc = angle > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      
      <div className="flex items-center justify-between">
        <svg width={size} height={size} className="transform -rotate-90">
          {data.map((item, index) => (
            <path
              key={index}
              d={createSlicePath(item.value)}
              fill={item.color}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              style={{ transformOrigin: `${size/2}px ${size/2}px` }}
            />
          ))}
        </svg>
        
        <div className="flex flex-col space-y-2 ml-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">{item.label}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {((item.value / total) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}