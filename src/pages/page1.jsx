import React from 'react'

import { Box,Button,Typography } from '@mui/material'

const FirstP=() =>{
  return (
    <Box
    width={"80%"} 
    margin={'auto'}
    marginTop={10}
    alignContent={'center'}
    >
        <Box width={"80%"} alignContent={'center'} marginLeft={20} marginBottom={10}>
            <Typography variant='h2' >Build your audience and grow your brand</Typography>
            <Typography  padding={1} my={3} variant='h6' color="#797979">no more, no less. Deploy from our single pane of glass,manage them with ease and scale up as fast as your workload grows</Typography>
            <Button variant='contained'>Get Started Now</Button>
            <img src='../assets/pic1.png' alt='pic1'/>
        </Box>
        {/* <img width={"70%"} src='../assets/img1.png'/> */}
    </Box>
  )
}

export default FirstP;