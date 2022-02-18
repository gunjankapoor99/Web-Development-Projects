import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Button, FormLabel, TextField, Box, FormControlLabel, Checkbox } from '@mui/material';

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const [checked, setChecked] = useState(false);
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async() => {
      await axios.get(`http://localhost:5000/books/${id}`).then((res)=>res.data).then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
  }))
  }
  console.log(inputs);

  return (
    <div>
      ( inputs && (
        <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection='column' justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={8}>
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type={"number"} margin='normal' fullWidth variant='outlined' name='price' />
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
        <Button type='submit' variant='contained'>Update Book</Button>
        </Box>
    </form>
    ))
    </div>
  )
}

export default BookDetail