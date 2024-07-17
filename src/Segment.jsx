import React from 'react'
import { useState } from 'react';


const Segment = () => {
    const [segmentName, setSegmentName] = useState('');
    const [schemas, setSchemas] = useState([]);
    const [selectedSchema, setSelectedSchema] = useState('');
  
    const schemaOptions = [
      { label: 'First Name', value: 'first_name' },
      { label: 'Last Name', value: 'last_name' },
      { label: 'Gender', value: 'gender' },
      { label: 'Age', value: 'age' },
      { label: 'Account Name', value: 'account_name' },
      { label: 'City', value: 'city' },
      { label: 'State', value: 'state' },
    ];
  
    const handleAddSchema = () => {
      if (selectedSchema && !schemas.includes(selectedSchema)) {
        setSchemas([...schemas, selectedSchema]);
        setSelectedSchema('');
      }
    };
  
    const handleSaveSegment = () => {
      const segmentData = {
        segmentName,
        schemas,
      };
      console.log(segmentData);
    };
  return (
    <div className="App">
      <button className='buttons' onClick={() => document.getElementById('popup').style.display = 'block'}>Save Segment</button>
      <div id="popup" style={{ display: 'none' }}>
        <h2>Saving Segment</h2>
        <input
          type="text"
          placeholder="Name of the segment"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
        <p>To save your segment, you need to add the schemas to build the querry</p>
        <div>
          {schemas.map((schema, index) => (
            <div key={index} id="add_new_segment">
              <select name="" >
              <option>{schemaOptions.find(option => option.value === schema).label}</option>
              </select>
            </div>
          ))}
          <select value={selectedSchema} onChange={(e) => setSelectedSchema(e.target.value)}>
            <option value="">Add schema to segment</option>
            {schemaOptions.filter(option => !schemas.includes(option.value)).map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
          <button className='buttons' onClick={handleAddSchema}>+ Add new schema</button>
        </div>
        <button className='buttons' onClick={handleSaveSegment}>Save the Segment</button>
        <button className='buttons' onClick={() => document.getElementById('popup').style.display = 'none'}>Cancel</button>
      </div>
    </div>
  )
}

export default Segment