import React, { useState } from 'react';
import { Calendar } from '../components/Calendar/Calendar';
import { CalendarEvent } from '../types';
import { mockEvents } from '../data/mockData';

export function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>(mockEvents);

  const handleEventAdd = (newEvent: Omit<CalendarEvent, 'id'>) => {
    const event: CalendarEvent = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9)
    };
    setEvents(prev => [...prev, event]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
      </div>

      <Calendar events={events} onEventAdd={handleEventAdd} />
    </div>
  );
}