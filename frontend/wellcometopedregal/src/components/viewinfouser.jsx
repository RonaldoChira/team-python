import { Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "wouter";
import variables from "../config/variables";

import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CakeIcon from '@mui/icons-material/Cake';
export default  function Viewinfouser({params}){
    const [user,setuser]=useState({});
    
    const getuser=async(id)=>{
        
        const response=await axios.get(`${variables.server}${id}`)
        console.log(response.data.name);
          return  setuser(response.data);
    }
    useEffect(()=>{
       let id=params.id;
       if(id>0) {
           getuser(id);
       }
    },[])
    return(
      <Fragment>
      <Card sx={{ display: 'flex',flexDirection:'row' ,alignItems:'center',justifyContent:'center' }}>
      
      
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
        <PersonIcon/>    {user.name} {user.surname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <ContactPageIcon/>  {user.age}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
         <CakeIcon />  {user.dateofbirth}
          </Typography>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('../assets/animal.png').default}
        alt="Live from space album cover"
      />
      
    </Card>

    <br>
    </br>
   <center>
   <Link  to='/'>Regresar a la principal</Link>
   </center>
    </Fragment>
    )
}