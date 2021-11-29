import  AccountCircle from "@mui/icons-material/AccountCircle";
import { Alert, Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import obj from "../config/auxiliares";
import variables from "../config/variables";



export default function  CU_user(props){
  const  [status,setstatus]=useState({});

  let init={
    id:obj.getParameterByName('id') || 0,
    name:obj.getParameterByName('name'),
    surname:obj.getParameterByName('surname'),
    age:obj.getParameterByName('age'),
    dateofbirth:obj.getParameterByName('dateofbirth'),

  }



   const newuser_or_updateuser=async(e)=>{
     e.preventDefault();
    
     if(e.target.name.value.length>=3  && 
      e.target.surname.value.length>=3 &&
      e.target.age.value.length>0 &&
      e.target.dateofbirth.value.length>0 ){
     let squema={
     name:e.target.name.value,
     surname:e.target.surname.value,
     age:e.target.age.value,
     dateofbirth:e.target.dateofbirth.value,
     }
    //  validamos que tipo de operacion es:
    if(init.id>0){
    // proceso para actualizar nuevo usuario
    let st=   await  axios.put(`${variables.server}${init.id}`,squema)
    if(st){
      setstatus({number:1,severity:'success',message:'Usuario Actualizado Correctamente'})
    }else{
      setstatus({number:1,severity:'error',message:'Error,  no se pudo actualizar usuario'})
    }
    }else{
    // proceso para crear un nuevo usuario 
  let st=   await  axios.post(`${variables.server}newuser`,squema)
  if(st){
    setstatus({number:1,severity:'success',message:'El usuario se registro correctamente'})
  }else{
    setstatus({number:1,severity:'error',message:'Error,El usuario no se registro correctamente'})
  }
}
      }
   }

   useEffect(()=>{
    
   },[])
    return( <Box
    
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      // noValidate
      autoComplete="off"
      onSubmit={newuser_or_updateuser}
      
    >
      <div>
        <center><h1>Usuario</h1><p>{(init.id>0)?'Actualizar informacion':'Proceso de Registro'}</p></center>
      </div>
      <br/>
      <div>
        <TextField
          required
          name='name'
          id="name-required"
          label="Nombres"
          
          defaultValue={init.name}
          helperText="Por favor Ingrese tu nombre"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="surname"
          name='surname'
          label="Apellidos"
          defaultValue={init.surname}
          helperText="Ingresa tus apellidos"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
        <TextField
          id="age"
          label="Edad"
          type="number"
          name='age'
          defaultValue={init.age}
          helperText="Ingresa tu edad"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        id="dateofbrith"
        name='dateofbirth'
        defaultValue={init.dateofbirth}
        label="Fecha de Nacimiento"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        autoComplete=""
        helperText="Ingresa tu fecha de nacimiento"
      />
       
      </div>
    <div>
    <Button  type='submit' color='info' variant="outlined">{
      (init.id>0)? 'Actualizar el usuario':'Agregar Nuevo Usuario'

    }</Button>
    </div>
    <div>
       {
        //  number, class, message
         (status.number>0)?
         <Alert severity={status.class}>{status.message}</Alert>
         :  void 0
                
            
       }
    </div>
    <br/>
    <div>
      <Link  to='/'>Regresar a la principal</Link>
    </div>
     
    </Box>
  )
}