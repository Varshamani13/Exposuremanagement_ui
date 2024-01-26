import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Dropzone from 'react-dropzone'; // For handling file uploads
import './DataUpload';

const DataUploadPage = () => {
  const [file, setFile] = useState(null);
  const [sheets, setSheets] = useState([]);
  const [selectedSheet, setSelectedSheet] = useState('');
  const [selectedOption, setSelectedOption] = useState('rows');
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);

    // Assuming the uploaded file is an Excel file
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });

      // Extract sheet names
      const sheetNames = workbook.SheetNames;
      setSheets(sheetNames);
      setSelectedSheet(sheetNames[0]); // Default to the first sheet

      // Extract attributes (assuming they are in the first row of the selected sheet)
      const firstSheet = workbook.Sheets[sheetNames[0]];
      const attributeCells = Object.keys(firstSheet).filter((cell) => cell.match(/[A-Z]1/));
      const attributes = attributeCells.map((cell) => firstSheet[cell].v);
      setSelectedAttributes(attributes);
    };

    reader.readAsBinaryString(uploadedFile);
  };
  const handleSubmission = () => {
    // Add your submission logic here
    console.log('Submitting data:', {
      selectedSheet,
      selectedOption,
      selectedAttributes,
    });
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
            
            <div >
            <h1 class="text-4xl font-bold">Data Upload Page</h1>
            <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} style={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <p>Drag and Drop files here</p>
                </div>
                )}
            </Dropzone>

            {file && (
                <div>
                <p class="mt-3">Selected File: {file.name}</p>
                <label>
                    <h2 class="text-xl font-bold mt-4">Select Sheet:</h2>
                    <div  className='selectsheet'>
                    <select
                            value={selectedSheet}
                            onChange={(e) => setSelectedSheet(e.target.value)}
                            style={{
                                width: '169%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                outline: 'none',
                                fontSize: '14px',
                                marginBottom:'25px',
                            }}
                            >
                            {sheets.map((sheet) => (
                                <option key={sheet} value={sheet}>
                                {sheet}
                                </option>
                            ))}
                            </select>
                    </div>
                </label>

          <div>
            <label style={{ marginRight: '100px' }}>
              <h2 class="text-xl font-bold mt-3 mb-3">Select Option:</h2>
              <input
                type="radio"
                value="rows"
                checked={selectedOption === 'rows'}
                onChange={() => setSelectedOption('rows')}
              />
              Rows
            </label>
            <label>
              <input
                type="radio"
                value="columns"
                checked={selectedOption === 'columns'}
                onChange={() => setSelectedOption('columns')}
              />
              Columns
            </label>
          </div>

<label style={{ marginTop: '40px', display: 'block', color: '#333333' }}>
  <h2 class="text-xl font-bold mt-3 mb-3">Select Attributes:</h2>
  <select
    multiple
    value={selectedAttributes}
    onChange={(e) => setSelectedAttributes(Array.from(e.target.selectedOptions, (option) => option.value))}
    style={{
      width: '169%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
      fontSize: '14px',
      marginTop: '5px', // Adjust as needed
    }}
  >
    {selectedAttributes.map((attribute) => (
      <option
      key={attribute}
      value={attribute}
      style={{
        padding: '8px',
        fontSize: '14px',
        backgroundColor:'#ffffff' ,     }}
    >
      {attribute}
    </option>
    ))}
  </select>
</label>
<button
  style={{
    marginTop: '3rem', // Adjust the margin as needed
    backgroundColor: '#007bff', // Blue background color
    border: '1px solid #007bff',
    width: '169%', // Note: In CSS, this would typically be invalid, but you can adjust the width accordingly
    color: '#fff', // White text color
    fontWeight: 'bold', // Bold font weight
    padding: '0.5rem 1rem', // Adjust padding as needed
    cursor: 'pointer', // Show pointer cursor on hover
    transition: 'background-color 0.3s ease',
  }} onClick={handleSubmission}
> 
  Submit
</button>
        </div>
      )}
    </div>
   
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  width:'170%',
  height:'90px',
};

export default DataUploadPage;
