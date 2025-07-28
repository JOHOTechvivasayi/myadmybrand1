import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import MetricCard from './MetricCard';
import { LineChart, BarChart, PieChart } from './Charts';
import DataTable from './DataTable';
import { metrics, revenueData, campaignData, deviceData, tableData } from '../data/mockData';
import { Calendar, TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    // Stagger animation delays for metric cards
    const timer = setTimeout(() => setAnimationDelay(100), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-950 min-h-full">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Welcome back, Sarah! 👋
            </h1>
           <p className="text-muted-foreground mt-1">
               Here&apos;s what&apos;s happening with your campaigns today.
            </p>

          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>Last updated: 2 minutes ago</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <MetricCard
            title="Revenue"
            value={metrics.revenue.value}
            change={metrics.revenue.change}
            trend={metrics.revenue.trend}
            period={metrics.revenue.period}
            icon={DollarSign}
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <MetricCard
            title="Users"
            value={metrics.users.value}
            change={metrics.users.change}
            trend={metrics.users.trend}
            period={metrics.users.period}
            icon={Users}
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <MetricCard
            title="Conversions"
            value={metrics.conversions.value}
            change={metrics.conversions.change}
            trend={metrics.conversions.trend}
            period={metrics.conversions.period}
            icon={Target}
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <MetricCard
            title="Growth Rate"
            value={metrics.growth.value}
            change={metrics.growth.change}
            trend={metrics.growth.trend}
            period={metrics.growth.period}
            icon={TrendingUp}
          />
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <LineChart data={revenueData} title="Revenue Trend (6 Months)" />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <PieChart data={campaignData} title="Campaign Performance" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <BarChart data={deviceData} title="Traffic by Device" />
        </div>
        <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <DataTable data={tableData} title="Campaign Performance" />
        </div>
      </div>

      {/* Quick Insights */}
      <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <span>Quick Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/70 dark:bg-gray-900/70 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold text-green-600 dark:text-green-400">📈 Top Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Summer Sale 2024 campaign is generating 28% more revenue than average
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-900/70 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">🎯 Optimization</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Mobile traffic increased by 15% - consider mobile-specific campaigns
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-900/70 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">⚡ Action Required</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  2 campaigns need budget reallocation to maximize ROI
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
