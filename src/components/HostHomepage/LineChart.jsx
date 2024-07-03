import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jun',
    2023: 2000,
    2024: 2400,
  },
  {
    name: 'Jul',
    2023: 3000,
    2024: 1398,
  },
  {
    name: 'Aug',
    2023: 2000,
    2024: 9800,
  },
  {
    name: 'Sep',
    2023: 2780,
    2024: 3908,
  },
  {
    name: 'Oct',
    2023: 1890,
    2024: 4800,
  },
  {
    name: 'Nov',
    2023: 2390,
    2024: 3800,
  },
  {
    name: 'Dec',
    2023: 3490,
    2024: 4300,
  },
];

const LineChartComponent = () => (
  <ResponsiveContainer width='90%' height='90%' className='translate-y-5'>
    <RechartsLineChart
      data={data}
      margin={{
        top: 40,
        right: 4,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' vertical={false} />{' '}
      {/* เอาเส้นแนวตั้งออก */}
      <XAxis
        dataKey='name'
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12 }}
      />
      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
      <Tooltip />
      <Legend
        verticalAlign='bottom'
        align='center'
        iconType='line'
        className='pl-5'
      />
      <Line type='linear' dataKey='2023' stroke='#EAB875' />
      <Line type='linear' dataKey='2024' stroke='#7BC5C1' />
    </RechartsLineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
