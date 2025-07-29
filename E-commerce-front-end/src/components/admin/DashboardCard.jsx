import React from 'react';
import Card from '../common/Card.jsx';

function DashboardCard({ title, value, icon }) {
  return (
    <Card className="flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </Card>
  );
}

export default DashboardCard;