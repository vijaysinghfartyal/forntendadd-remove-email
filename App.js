import Header from './components/header';
import './App.css';

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [data,setData]=useState([]);


  const addData = () =>  {
    setData([...data,{name,email}])
    setName("");
    setEmail("");

  }
  const removeItom =(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr])
  }
  return (
    <div className="App">
      <Header/>
      {/* data */}
      <div className='form'>
      <Stack spacing={2} direction="row">
      <TextField
      value={name}
      onChange={(event)=> setName(event.target.value)}
        id="outlined-suffix-shrink"
        label="name"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
              </InputAdornment>
            ),
          },
        }}
        
      />
      
      <TextField
      value={email}
      onChange={(event)=>setEmail(event.target.value)}
        id="outlined-suffix-shrink"
        label="email"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
              </InputAdornment>
            ),
          },
        }}
        
      />
     <Button onClick={addData} variant="contained" color="success">
     add
    </Button>
    </Stack>
      </div>
     
      {/* data */}
      <div className='data'>
        
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>remove</h4>
        </div>
        {
          data.map((Element,index)=>{
            return(
              <div key={index}className='data_val'>
              <h4>{Element.name}</h4>
              <h4>{Element.email}</h4>
            <Stack>
            <Button onClick={()=> removeItom(index)} variant="contained" color="error">
            <DeleteIcon/>
            </Button>
            </Stack>
            </div>
            )
          })
        }

      
        </div>
    </div>
  );
}

export default App;
