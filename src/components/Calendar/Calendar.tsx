import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { CalendarEvent } from '../../types';

interface CalendarProps {
  events: CalendarEvent[];
  onEventAdd?: (event: Omit<CalendarEvent, 'id'>) => void;
}

export function Calendar({ events, onEventAdd }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);

  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = 42; // 6 weeks × 7 days

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></div>
      );
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dayEvents = getEventsForDate(date);

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 dark:border-gray-700 p-1 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
            isToday(date) ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-white dark:bg-gray-800'
          } ${isSelected(date) ? 'ring-2 ring-blue-500' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`text-sm font-medium mb-1 ${
            isToday(date) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
          }`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className="text-xs px-2 py-1 rounded text-white truncate"
                style={{ backgroundColor: event.color }}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 dark:text-gray-400 px-2">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    // Fill remaining cells
    const remainingCells = totalCells - (firstDayOfWeek + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
      days.push(
        <div key={`empty-end-${i}`} className="h-24 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setShowEventForm(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-0 mb-2">
          {dayNames.map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-0 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Selected date events */}
      {selectedDate && (
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Events for {selectedDate.toLocaleDateString()}
          </h3>
          {getEventsForDate(selectedDate).length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No events scheduled for this date.</p>
          ) : (
            <div className="space-y-2">
              {getEventsForDate(selectedDate).map((event) => (
                <div
                  key={event.id}
                  className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: event.color }}
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{event.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    {event.description && (
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{event.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}