import React, { useState, useEffect } from 'react';
import './UpdateData.css'
const UpdateDataPage = () => {
  const [editableData, setEditableData] = useState([]);
  const [lookupTableData, setLookupTableData] = useState([]);

  useEffect(() => {
    // Fetch or set your initial data
    const fetchData = async () => {
      // Example API call or data initialization
      // const editableDataResponse = await fetch('/api/editableData');
      // const lookupTableDataResponse = await fetch('/api/lookupTableData');

      // const editableData = await editableDataResponse.json();
      // const lookupTableData = await lookupTableDataResponse.json();

      // Example data structure for dynamic columns
      const editableData = [
        { id: 1, column1: 'Data 1-1', column2: 'Data 1-2', column3: 'Data 1-3' },
        { id: 2, column1: 'Data 2-1', column2: 'Data 2-2', column3: 'Data 2-3' },
        // Add more rows as needed
      ];

      const lookupTableData = [
        { id: 1, lookupColumn1: 'Lookup 1-1', lookupColumn2: 'Lookup 1-2' },
        { id: 2, lookupColumn1: 'Lookup 2-1', lookupColumn2: 'Lookup 2-2' },
        // Add more rows as needed
      ];

      setEditableData(editableData);
      setLookupTableData(lookupTableData);
    };

    fetchData();
  }, []); // Run only once on component mount

  const handleEdit = (index, column, value) => {
    setEditableData((prevData) => {
      const newData = [...prevData];
      newData[index][column] = value;
      return newData;
    });
  };

  const handleDownload = () => {
    // Logic to convert editableData to Excel and trigger download
    // You may use a library like exceljs or xlsx for this purpose
    // Example: convertToExcelAndDownload(editableData);
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
    <div>
      <h1 class="text-3xl font-bold">Update Data Page</h1>

      {/* Editable Data Frame */}
      <table border="1">
        <thead>
          <tr>
            {Object.keys(editableData[0] || {}).map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {editableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((column, colIndex) => (
                <td key={colIndex} contentEditable onBlur={(e) => handleEdit(rowIndex, column, e.target.innerText)}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download Button */}
      <button onClick={handleDownload}>Download Excel</button>

      {/* Lookup Table */}
      <h1 class="text-2xl font-bold">Lookup Table</h1>
      <table border="1">
        <thead>
          <tr>
            {Object.keys(lookupTableData[0] || {}).map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lookupTableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UpdateDataPage;
