import React, { PureComponent } from 'react';
import useChartData from '../../hooks/useChartData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie } from 'recharts';

const Charts = () => {
    const [chartData, setChartData] = useChartData();
    // console.log(chartData);
    return (
        <div className='my-16 xl:my-24'>
            <div className='flex justify-center items-center gap-12 lg:gap-16 2xl:gap-24 flex-wrap'>
                <div className=''>
                    <h2 className='text-blue-700 font-semibold uppercase text-xl mb-10 text-center'>Month Wise Sell</h2>
                    <LineChart width={350} height={300} data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <Line type="monotone" dataKey={'sell'} stroke="#8884d8"></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <Legend verticalAlign="bottom" height={36} />
                        <YAxis></YAxis>
                    </LineChart>
                </div>
                <div className=''>
                    <h2 className='text-blue-700 font-semibold uppercase text-xl mb-10 text-center'>Investment VS Revenue</h2>
                    <AreaChart width={350} height={300} data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div className=''>
                    <h2 className='text-blue-700 font-semibold uppercase text-xl mb-10 text-center'>Investment VS Revenue</h2>
                    <BarChart width={350} height={300} data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Charts;