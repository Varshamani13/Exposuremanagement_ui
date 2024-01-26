import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Analytics = () => {
  // Sample data for the charts
  const barChartData = [
    { name: 'January', value: 65 },
    { name: 'February', value: 59 },
    { name: 'March', value: 80 },
    { name: 'April', value: 81 },
    { name: 'May', value: 56 },
  ];

  const lineChartData = [
    { name: 'January', value: 65 },
    { name: 'February', value: 59 },
    { name: 'March', value: 80 },
    { name: 'April', value: 81 },
    { name: 'May', value: 56 },
  ];

  return (
    <div className="workspaces-container">
    <aside id="default-sidebar" aria-label="Sidebar">
      <div>
      <div style={{ display: 'flex', alignItems: 'center' ,marginTop: '60px'}}>
      <img src='/genpactlogo.png' alt='Genpact Logo' className='genpactlogo' style={{ width: '50px', height: '50px',marginLeft:'70px'}} />
      <h1 class="text-4xl font-bold mt-4">Genpact</h1>
      </div>
        <ul className="space-y-2 font-medium">
            <li className="flex-grow">
            <a href="workspace">
            <img
                src="/noun-workspace-1748365.svg"
                alt="Workspace Icon"
                style={{ width: '30px', height: '30px', marginRight: '15px' }} // Adjust the styles as needed
                />
                <span className="text-xl ms-7">Workspace</span>
            </a>
            </li>
            <li className="flex-grow">
            <a href="dataupload" className="flex">
                <img
                src="/noun-upload-data-2840284.svg"
                alt="Data Upload Icon"
                style={{ width: '30px', height: '30px', marginRight: '15px' }} // Adjust the styles as needed
                />
                <span className="text-xl ms-7">Data Upload</span>
            </a>
            </li>
            <li className="flex-grow">
            <a href="updatedata" className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img
                src="/noun-file-processing-2706290.svg"
                alt="Data Upload Icon"
                style={{ width: '30px', height: '30px', marginRight: '15px' }} // Adjust the styles as needed
                />
                <span className="text-xl ms-7">Update Data</span>
            </a>
            </li>
            <li className="flex-grow">
            <a href="analytics" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img
                src="/noun-analytics-6472745.svg"
                alt="Data Upload Icon"
                style={{ width: '30px', height: '30px', marginRight: '15px' }} // Adjust the styles as needed
                />
                <span className="text-xl ms-7">Analytics</span>
            </a>
            </li>
            </ul>
            </div>

            </aside>
    <div>
      <h1 class="text-2xl font-bold">Analytics Page</h1>

      {/* Bar Chart */}
      <div>
        <h2 class="text-xl font-bold mb-6">Bar Chart</h2>
        <BarChart width={700} height={300} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Line Chart */}
      <div>
        <h2 class="text-xl font-bold mb-6">Line Chart</h2>
        <LineChart width={700} height={300} data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
    </div>
  );
};

export default Analytics;
