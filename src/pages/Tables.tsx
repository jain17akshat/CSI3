import React from 'react';
import { Badge, User, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { DataTable } from '../components/Tables/DataTable';
import { TableColumn } from '../types';
import { mockUsers } from '../data/mockData';

export function Tables() {
  const userColumns: TableColumn[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value) => (
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2 text-gray-400" />
          <span className="font-medium">{value}</span>
        </div>
      )
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
          value === 'manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
          'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value) => (
        <div className="flex items-center">
          {value === 'active' ? (
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          ) : (
            <XCircle className="w-4 h-4 text-red-500 mr-2" />
          )}
          <span className={value === 'active' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
            {value}
          </span>
        </div>
      )
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true,
      render: (value) => (
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
          <span>{new Date(value).toLocaleDateString()}</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Add New User
        </button>
      </div>

      <DataTable
        data={mockUsers}
        columns={userColumns}
        searchable={true}
        filterable={true}
        pageSize={10}
      />
    </div>
  );
}