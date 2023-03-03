
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import React, { useState, useEffect } from 'react';
import axios from 'axios';




import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export function Home() {

  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vendedor');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //@ts-ignore
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('sua-url-da-api', {
        selectedOption,
      });
      console.log(response.data);
    } catch (error) { 
      console.error(error);
    }
  };


  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="my-combo-box-label">Vendedor</InputLabel>
        <Select
          labelId="label"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {data.map((option) => (
            //@ts-ignore
            <MenuItem key={option.id} value={option.nome}>{option.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  )
}
