import React from 'react'
import FlexBetween from '../components/FlexBetween'
import { Box,Button,Card,CardContent,CardMedia,Typography } from '@mui/material'

const SecondP=() =>{
  return (
    <FlexBetween alignContent={'center'} flexDirection={'column'} gap={8}>
        <img width={"50%"} src='../assets/img1.png' alt='pic2'/>
        <Button sx={{border:1,color:"#0C5BC6", borderRadius:"2.43rem", backgroundColor:"rgba(65, 146, 255, 0.30)"}}>Features</Button>
        <Typography variant='h4'>Save 1000s of expensive coder hours</Typography>
        <Typography color={"#494369"} variant='subtitle1'>With cloud native Technologies,we assist in modernising infrastructure and applications for resilience and scalability.</Typography>
        <FlexBetween width="70%" 
        margin={'auto'}
        marginTop={5}
        alignSelf={"center"}
        gap={10}
        padding="1rem 8%" >
            <Typography fontWeight={700} fontSize={"0.75rem"} sx={{textDecoration:'underline'}}>Apps</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>App Configs</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>Pipelines</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>Infra Creations</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>Cost</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>Add-Ons</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>Monitoring</Typography>
            <Typography fontWeight={700} fontSize={"0.75rem"}>Connecions</Typography>
        </FlexBetween>
        <img width={"75%"} src='../assets/pic2.png' alt='pic2'/>
        <FlexBetween
        margin={'auto'}
        alignSelf={"center"}
        padding="1rem 8%"
        gap={80}>
            <Typography fontWeight={700} fontSize={"1rem"}>Without Xerocode</Typography>
            <Typography fontWeight={700} fontSize={"1rem"}>With Xerocode</Typography>
        </FlexBetween>
        <FlexBetween
        margin={'auto'}
        marginBottom={5}
        alignSelf={"center"}
        padding="1rem 8%"
        gap={65}>
            <img src='../assets/img2.png' alt='img2'/>
            <img src='../assets/img3.png' alt='img3'/>
        </FlexBetween>
        <Typography variant='h4' width={"51%"}>Self serve infrastructure platform for scaling teams</Typography>
        <FlexBetween flexWrap={'wrap'} gap={30} borderColor={'white'}>
            <Card sx={{display:'flex', boxSizing:'30%'}}>
               
                <Box boxShadow={2}>
                    <img src='https://www.figma.com/file/6BVZ2gaWWRcOwe18Twcsum/image/0a813765446331231ea21efab1ef43b068745f6e'/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize={"1.5rem"} fontWeight={600} color={"#332C5C"}>
                        Infrastructure
                    </Typography>
                    <Typography variant="body2" color="#5E587A" fontWeight={400} fontSize={"1rem"}>
                        Automated Cloud Infrastructure Workflow
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{display:'flex', boxSizing:'30%'}}>
                
                <Box boxShadow={2}>
                    <img src='https://www.figma.com/file/6BVZ2gaWWRcOwe18Twcsum/image/e97e13a0d87cb84f94d817ae10152aed4771ee9d'/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize={"1.5rem"} fontWeight={600} color={"#332C5C"}>
                        Security
                    </Typography>
                    <Typography variant="body2" color="#5E587A" fontWeight={400} fontSize={"1rem"}>
                        Modern Secure Infrastructure Approach
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{display:'flex', boxSizing:'30%'}}>
                <Box boxShadow={2}>
                    <img src='https://www.figma.com/file/6BVZ2gaWWRcOwe18Twcsum/image/7d4c728fc6ec9e15cd7a2620fb88cad7853591a4?fuid=1300649679531948350'/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize={"1.5rem"} fontWeight={600} color={"#332C5C"}>
                        Networking
                    </Typography>
                    <Typography variant="body2" color="#5E587A" fontWeight={400} fontSize={"1rem"}>
                        Flexible Secure Application Connectivity
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{display:'flex', boxSizing:'30%'}}>
                <Box boxShadow={2}>
                    <img src='https://www.figma.com/file/6BVZ2gaWWRcOwe18Twcsum/image/99edd9b040913ae41ae783cb6ab099edc8b5b4f9    '/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize={"1.5rem"} fontWeight={600} color={"#332C5C"}>
                        Applications
                    </Typography>
                    <Typography variant="body2" color="#5E587A" fontWeight={400} fontSize={"1rem"}>
                        Automate Application Deployment for Agility
                    </Typography>
                </CardContent>
            </Card>
        </FlexBetween>
    </FlexBetween>
  )
}

export default SecondP;