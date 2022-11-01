import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { Clock } from '../utils/clock'

const HomeView = () => {

    return (
        <div className='homeViewWrapper'>
            <Typography variant="h2" component="h2">
                HomeView
            </Typography>
            <TextField
                id="outlined-basic"
                label="Enter city name..."
                variant="outlined"
            /*error={true} helperText="No digits allowed"*/ />
            <Box sx={{ display: 'flex', border: 1, borderColor: 'primary.main', width: '250px', borderRadius: '10px', padding: '5px 10px' }}>
                <Typography variant="h6" component="h6">
                    weather
                </Typography>
                <Clock />
            </Box>
        </div>
    )
}

export default HomeView

