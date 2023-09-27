import React, { useState } from 'react'
import { Box, Container, TextField, Grid, IconButton, Tooltip } from '@mui/material';
import { AddButton } from '../assets/customizeStyles/Button';
import { Delete, Edit } from '@mui/icons-material';

const Home = () => {
    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to add a task im to the list
    const addTask = () => {
        if (inputValue.trim() !== '') {
            if (editingIndex !== null) {
                // If editing existing task, update it
                const updatedItems = [...task];
                updatedItems[editingIndex] = inputValue;
                setTask(updatedItems);
                setEditingIndex(null);
            } else {
                // If creating a new task, add it to the list
                setTask([...task, inputValue]);
            }
        setInputValue('');
        }
    };

    // Function to edit task
    const editTask = (index) => {
        setInputValue(task[index]);
        setEditingIndex(index);
    };

    // Function to delete task
    const deleteTask = (index) => {
        const updatedItems = [...task];
        updatedItems.splice(index, 1);
        setTask(updatedItems);
    };

    // Function to filter the task based on the search query
    const filteredItems = task.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box width="100%" height="100%">
            <Container maxWidth="md" sx={{zIndex: 999}}>
                <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: '24px', mt:'24px', zIndex: 999}}>
                    <Box sx={{p:'16px', background:'#FFFFFF', display: 'flex', flexDirection: 'column', gap: '24px', borderRadius:'6px', boxShadow: '0px 2px 4px 0px rgba(61, 119, 233, 0.08), 0px 0px 6px 0px rgba(61, 119, 233, 0.06)'}}>
                        <Box sx={{fontSize: '30px', fontWeight: 600}}>Task Management System</Box>
                        {
                            filteredItems.length > 0 && (
                                <Grid container spacing={2}>
                                    <Grid  item lg={4} md={3} xs={12}>
                                        <TextField label="Search" type="search" fullWidth value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                                    </Grid>
                                </Grid>
                            )
                        }
                        <Grid container spacing={2}>
                            <Grid  item lg={9} md={12} xs={12}>
                                <TextField label={editingIndex !== null ? 'Update Task' : 'Add Task'} variant="outlined" fullWidth   value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                            </Grid>
                            <Grid item lg={3} md={12} xs={12}>
                                <AddButton variant="contained" size="large" onClick={addTask}>{editingIndex !== null ? 'Update Task' : 'Add Task'}</AddButton>
                            </Grid>
                        </Grid>
                    </Box>  
                    <Box > 
                        {
                            filteredItems.length > 0 ?
                            (
                                filteredItems.map((value, index) => (
                                    <Box key={index} sx={{background: '#FFFFFF', height:'68px', px:'16px', borderRadius:'6px', boxShadow: '0px 2px 4px 0px rgba(61, 119, 233, 0.08)', mb: 2, cursor:'pointer', display:'flex', justifyContent: 'center'}}>
                                        <Box sx={{display:'flex', justifyContent: 'space-between', alignItems:'center', width:'100%'}}>
                                            <Box>{value}</Box>
                                            <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                <Tooltip title="Edit" placement="top-start" arrow>
                                                    <IconButton sx={{borderRadius: '6px', p: '4px'}} onClick={() => editTask(index)}><Edit sx={{color:'#3D77E9'}}/></IconButton>
                                                </Tooltip>
                                                <Tooltip title="Remove" placement="top-start" arrow>
                                                    <IconButton sx={{borderRadius: '6px', p: '4px'}} onClick={() => deleteTask(index)}><Delete sx={{color:'#FA3E3E'}}/></IconButton>
                                                </Tooltip>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            )
                            :
                            <Box sx={{textAlign:'center'}}>
                                You don't have any added Task yet.
                            </Box>
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Home