import React from 'react'
import FlexBetween from '../components/FlexBetween'
import { Box,Button,Typography } from '@mui/material'

const NavBar=() =>{
  return (
    <FlexBetween 
    width="70%" 
    margin={'auto'}
    borderRadius={2}
    alignSelf={"center"}
    gap={30}
    padding="1rem 8%"
    boxShadow={2}>
      <img src="../assets/xocode.png" />
      <FlexBetween gap={5}>
        <Typography>Home</Typography>
        <Typography>Team</Typography>
        <Typography>Contact</Typography>
        <Typography>Careers</Typography>
      </FlexBetween>
      <Button variant='outlined'>Sign In</Button>
    </FlexBetween>
  )
}
export default NavBar;