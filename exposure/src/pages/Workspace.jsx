import React, { useState } from 'react';
import './workspace.css';

const Workspaces = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [selectedHistory, setSelectedHistory] = useState('');
  const [selectedTable, setSelectedTable] = useState('');

  const handleWorkspaceNameChange = (e) => {
    setWorkspaceName(e.target.value);
  };

  const handleHistoryChange = (e) => {
    setSelectedHistory(e.target.value);
  };

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleCreateWorkspace = () => {
    // You can perform actions here when the "Create Workspace" button is clicked
    // For example, you can log the selected values or make an API call to create a workspace
    console.log('Creating workspace with the following data:', {
      workspaceName,
      selectedHistory,
      selectedTable,
    });

    // If you want to clear the form after creating the workspace, reset the state
    setWorkspaceName('');
    setSelectedHistory('');
    setSelectedTable('');
  };

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
  
            <div className="main-content">
                <h1 class="text-4xl font-bold">Create Workspaces</h1>
      <div>
        <div className="workspace-name">
          <label>
            Workspace Name
          </label>
          <input
            type="text"
            id="workspace-name"
            className="workspace-name"
            value={workspaceName}
            onChange={handleWorkspaceNameChange}
          />
        </div>

        <div>
          <label className="header">
            Select History
          </label>
          <select
            id="history-dropdown"
            className="input-field"
            value={selectedHistory}
            onChange={handleHistoryChange}
          >

          </select>
        </div>

        <div className="mb-20">
          <label htmlFor="table-dropdown" className="header">
            Select Table
          </label>
          <select
            id="table-dropdown"
            className="input-field"
            value={selectedTable}
            onChange={handleTableChange}
          >

          </select>

          <button className="custom-button" onClick={handleCreateWorkspace}>
    Create Workspace
  </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Workspaces;
