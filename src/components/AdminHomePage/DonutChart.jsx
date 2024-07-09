import React from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1 Bedroom', value: 1000, fill: '#E1C7A5' },
  { name: '2 Bedroom', value: 300, fill: '#B1E3FF' },
  { name: '3 Bedroom', value: 300, fill: '#BAEDBD' },
  { name: 'Others', value: 200, fill: '#A8C5DA' },
];

const renderColorfulLegendText = (value) => {
  return (
    <span
      style={{
        color: '#596579',
        fontWeight: 300,
        padding: '10px',
        marginBottom: '8px',
      }}
    >
      {value}
    </span>
  );
};

const DonutChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Legend
          iconType='circle'
          layout='vertical'
          verticalAlign='middle'
          align='right'
          iconSize={10}
          formatter={renderColorfulLegendText}
        />
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius='40%'
          outerRadius='60%'
          fill='#8884d8'
          paddingAngle={2}
          dataKey='value'
          cornerRadius={4}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
