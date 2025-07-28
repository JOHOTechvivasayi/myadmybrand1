import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const MetricCard = ({ title, value, change, trend, period, icon: Icon }) => {
  const isPositive = trend === 'up';
  
  return (
    <Card className="bg-white dark:bg-gray-900 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && (
          <div className="h-4 w-4 text-muted-foreground">
            <Icon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <div className={`flex items-center ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isPositive ? (
              <ArrowUpIcon className="h-3 w-3" />
            ) : (
              <ArrowDownIcon className="h-3 w-3" />
            )}
            <span className="font-medium">{change}</span>
          </div>
          <span>{period}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;