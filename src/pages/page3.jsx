import React from 'react'
import { Box,Button,Typography } from '@mui/material'
import FlexBetween from '../components/FlexBetween';
import { margin } from '@mui/system';

const ThirdP=() =>{
  return (
    <Box
    width={"75%"} 
    margin={'auto'}
    marginTop={10}
    alignContent={'center'}
    padding={8}

    justifyContent={'space-evenly'}
    sx={{backgroundColor:'#0C5BC6', borderRadius:'2.1875rem'}}
    >
        <Typography  margin={'auto'} maxWidth='65%' fontSize={'2rem'} fontWeight={600} color={'#FFF'}>Modernize Apps, Infrastructure with Cloud Native Tech for Resilience, Scalability.</Typography>
        <FlexBetween  height={'22.3125rem'} width={'60rem'} margin={'auto'}>
            <img width={'60%'} src='../assets/img4.png'/>
            <Box>
                <Typography color={'#FFF'} fontSize={'2.75rem'} fontWeight={600}>Real-Time Risk Monitoring</Typography>
                <Typography color={'#FFF'} fontSize={'1.25rem'} fontWeight={400}>Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.</Typography>
            </Box>
        </FlexBetween>
        <FlexBetween height={'22.3125rem'} width={'60rem'} margin={'auto'}>
            
            <Box >
                <Typography color={'#FFF'} fontSize={'2.75rem'} fontWeight={600}>Collaborative Workflows</Typography>
                <Typography color={'#FFF'} fontSize={'1.25rem'} fontWeight={400}>Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.</Typography>
            </Box>
            <img width={'60%'} height='100%' src='../assets/img5.png'/>
        </FlexBetween>
    </Box>
  )
}
export default ThirdP;
