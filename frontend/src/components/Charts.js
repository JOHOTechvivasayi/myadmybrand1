import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const LineChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <Card className="bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          {/* Simple line chart using CSS */}
          <div className="flex items-end justify-between h-full space-x-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm mb-2 min-h-[4px] transition-all duration-500 hover:from-blue-600 hover:to-blue-400"
                  style={{ 
                    height: `${(item.value / maxValue) * 100}%`,
                    minHeight: '4px'
                  }}
                ></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">{item.name}</span>
                <span className="text-xs font-semibold text-gray-900 dark:text-white mt-1">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const PieChart = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  
  return (
    <Card className="bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const angle = (percentage / 100) * 360;
                const path = createArcPath(50, 50, 35, currentAngle, currentAngle + angle);
                currentAngle += angle;
                
                return (
                  <path
                    key={index}
                    d={path}
                    fill={item.color}
                    className="hover:brightness-110 transition-all duration-200"
                  />
                );
              })}
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const BarChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <Card className="bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-16 text-sm font-medium text-gray-900 dark:text-white">
                {item.name}
              </div>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 hover:from-purple-600 hover:to-pink-600"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <div className="w-10 text-sm font-semibold text-gray-900 dark:text-white text-right">
                {item.value}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to create SVG arc paths
function createArcPath(centerX, centerY, radius, startAngle, endAngle) {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
  return [
    "M", centerX, centerY,
    "L", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}