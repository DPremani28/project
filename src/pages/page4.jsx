import { Box } from '@mui/system';
import React from 'react'
import FlexBetween from '../components/FlexBetween';
import { Typography } from '@mui/material';

const FourthP=()=> {
  return (
    <Box  width={'80%'} margin={'auto'}>
        <Typography marginTop={20} fontWeight={600} fontSize={'2.2rem'} color={'#242331'} >The Xerocodee way </Typography>
        <Box marginTop={10} >
            <Typography marginBottom={5} fontWeight={600} fontSize={'2.2rem'} color={'#242331'}>01</Typography>
            <Typography fontWeight={600} fontSize={'1.5rem'} color={'#332C5C'}>Self Serve Infrastructure</Typography>
            <Typography fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Accelerate by self-serving production-ready infrastructure and customize as you scale.</Typography>
            <FlexBetween marginTop={9}>
                <Box width={'70%'} >
                    <FlexBetween gap={4}>
                        <Typography fontWeight={700} fontSize={'0.75rem'} color={'#494369'}>Your Cloud</Typography>
                        <Typography fontWeight={700} fontSize={'0.75rem'} color={'#494369'}>Intra Components</Typography>
                        <Typography fontWeight={700} fontSize={'0.75rem'} color={'#494369'}>Self-Hosted Apps</Typography>
                    </FlexBetween>
                    <img width={'70%'} src='../assets/img6.png'/>
                </Box>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>In your Cloud</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon)</Typography>
                </Box>
            </FlexBetween>
        </Box>
        <Box marginTop={10} >
            <Typography marginBottom={5} fontWeight={600} fontSize={'2.2rem'} color={'#242331'}>02</Typography>
            <Typography fontWeight={600} fontSize={'1.5rem'} color={'#332C5C'}>Deploy applications, fast!</Typography>
            <Typography fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.</Typography>
            <FlexBetween marginTop={9}>
                <Box width={'100%'}>
                    
                    <img src='../assets/img7.png'/>
                </Box>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Configurable Build and Deploy pipelines</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.</Typography>
                </Box>
            </FlexBetween>
            <FlexBetween marginTop={9}>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Push to Deploy</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.</Typography>
                </Box>
                <Box width={'130%'}>
                    
                    <img src='../assets/img8.png'/>
                </Box>
                
            </FlexBetween>
            <FlexBetween marginTop={9}>
                <Box width={'140%'}>
                    
                    <img src='../assets/img9.png'/>
                </Box>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Multiple Runtimes</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.</Typography>
                </Box>
            </FlexBetween>
            <FlexBetween marginTop={9}>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Scale Infinitely</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.</Typography>
                </Box>
                <Box width={'150%'}>
                    
                    <img src='../assets/img10.png'/>
                </Box>
                
            </FlexBetween>
        </Box>
        <Box marginTop={10} >
            <Typography marginBottom={5} fontWeight={600} fontSize={'2.2rem'} color={'#242331'}>03</Typography>
            <Typography fontWeight={600} fontSize={'1.5rem'} color={'#332C5C'}>Visibility into Costs and Metrics</Typography>
            <Typography fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.</Typography>
            <FlexBetween marginTop={9}>
                <Box width={'100%'}>
                    
                    <img src='../assets/img11.png'/>
                </Box>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Customizable Cost Dashboards and Reports</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.</Typography>
                </Box>
            </FlexBetween>
            <FlexBetween marginTop={9}>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Preview Infra Costs</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.</Typography>
                </Box>
                <Box width={'130%'}>
                    
                    <img src='../assets/img12.png'/>
                </Box>
                
            </FlexBetween>
            <FlexBetween marginTop={9}>
                <Box width={'140%'}>
                    
                    <img src='../assets/img13.png'/>
                </Box>
                <Box >
                    <Typography  marginBottom={4} textAlign={'left'} fontWeight={600} fontSize={'1.2rem'} color={'#332C5C'}>Observability from Day One</Typography>
                    <Typography textAlign={'left'} fontWeight={400} fontSize={'1rem'} color={'#5E587A'}>Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.</Typography>
                </Box>
            </FlexBetween>
            
        </Box>
    </Box>
  )
}
export default FourthP;
