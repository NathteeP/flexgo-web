import React from 'react';
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const chartData = [
  { x: 1, y: 20000, color: '#95A4FC' },
  { x: 2, y: 10000, color: '#BAEDBD' },
  { x: 3, y: 40000, color: '#FFF4E8' },
  { x: 4, y: 60000, color: '#B1E3FF' },
  { x: 5, y: 34567, color: '#A8C5DA' },
  { x: 6, y: 12123, color: '#A1E3CB' },
  { x: 7, y: 4000, color: '#EBFFFB' },
];

const CustomLabel = (props) => {
  const { x, y, value } = props;

  return (
    <text
      x={x}
      y={y}
      dx={'1%'}
      dy={'-4%'}
      fontSize='11'
      fontWeight=''
      fill={'#808080'}
      textAnchor='left'
    >
      {value}
    </text>
  );
};

const daysOfWeek = {
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
  7: 'Sun',
};

const formatYAxis = (tick) => {
  if (tick === 0) return '0';
  return `${(tick / 1000).toFixed(1)}k`;
};

const BarChartComponent = () => (
  <ResponsiveContainer width='95%' height='95%' className='translate-y-4'>
    <BarChart data={chartData} margin={{ top: 50, right: 30, left: 20 }}>
      <XAxis
        tick={{ fontSize: 12 }}
        dataKey='x'
        type='number'
        domain={[0.5, 7]}
        ticks={[1, 2, 3, 4, 5, 6, 7]}
        tickFormatter={(tick) => daysOfWeek[tick] || tick}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={formatYAxis}
        tick={{ fontSize: 12 }}
      />
      <Bar
        dataKey='y'
        label={<CustomLabel />}
        radius={[10, 10, 10, 10]}
        barSize={32}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
