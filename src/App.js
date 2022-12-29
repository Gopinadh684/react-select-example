import React, { useState } from 'react';
import StyledSelection from './StyledSelection';
import './style.css';

function App() {
  const data = [
    { value: 'mangoes', label: 'Mangoes' },
    { value: 'bananas', label: 'Bananas' },
    { value: 'apples', label: 'Apples' },
  ];
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = (e) => {
    setSelectedValue(e);
  };
  return (
    <div>
      <h1>Select Example</h1>
      <StyledSelection
        value={selectedValue}
        placeholder="Choose your selection"
        label="Fruit name"
        options={data}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {/* {selectedValue && <h1>{selectedValue.value}</h1>} */}
    </div>
  );
}

export default App;
