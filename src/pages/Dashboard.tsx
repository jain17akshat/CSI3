import React from 'react';
import { Users, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import { StatCard } from '../components/Dashboard/StatCard';
import { BarChart } from '../components/Dashboard/BarChart';
import { PieChart } from '../components/Dashboard/PieChart';
import { salesData, userGrowthData } from '../data/mockData';

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="24,567"
          change="+12.5%"
          isPositive={true}
          icon={Users}
          color="bg-blue-500"
        />
        <StatCard
          title="Revenue"
          value="$45,234"
          change="+8.2%"
          isPositive={true}
          icon={DollarSign}
          color="bg-green-500"
        />
        <StatCard
          title="Orders"
          value="1,234"
          change="-2.4%"
          isPositive={false}
          icon={ShoppingCart}
          color="bg-orange-500"
        />
        <StatCard
          title="Growth"
          value="23.5%"
          change="+4.1%"
          isPositive={true}
          icon={TrendingUp}
          color="bg-purple-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart data={salesData} title="Monthly Sales" />
        <PieChart data={userGrowthData} title="User Distribution" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { action: 'New user registered', time: '2 minutes ago', type: 'user' },
              { action: 'Order #1234 completed', time: '5 minutes ago', type: 'order' },
              { action: 'System backup completed', time: '1 hour ago', type: 'system' },
              { action: 'New feature deployed', time: '2 hours ago', type: 'deployment' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'order' ? 'bg-green-500' :
                  activity.type === 'system' ? 'bg-yellow-500' : 'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}