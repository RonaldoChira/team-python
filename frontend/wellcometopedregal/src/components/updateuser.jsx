import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import  {DefaultParams}  from 'wouter'
import variables from "../config/variables";
export default function  UpdateUser({params}){

    const [user,setuser]=useState({});
    const  [status,setstatus]=useState('nada');


    const getuser=async(id)=>{
        
        const response=await axios.get(`${variables.server}${id}`)
        
        return  setuser(response.data);
      
    }





   const updateuser=async(e)=>{
     e.preventDefault();
     let id=params.id;
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
     
  let st=   await  axios.put(`${variables.server}${id}`,squema)
  if(st){
    setstatus(true)
  }else{
    setstatus(false)
  }
      }
   }
    useEffect(()=>{
       let id=params.id;
       if(id>0) {
         getuser(id);
       }
    },[])
    return(<div className="container">
    
        <br />
        <center>
            <h3>Actualizar Informacion de Usuario</h3>
        </center>
        <div className="alert alert-info" role="alert">
  <strong className='mr-2'>Alvertencia</strong>
 Si modifica los datos, se actualizara su información a lo reciente
</div>
    <form onSubmit={updateuser} className="needs-validation" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom01">Nombres</label>
          <input type="text" name='name'  className="form-control" id="validationCustom01" placeholder="Nombres" defaultValue={user.name} required />
          <div className="valid-feedback">
            Looks good!
          </div>
          <div className="invalid-feedback">
            Please enter your first name.
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom02">Apellidos</label>
          <input type="text" name='surname' className="form-control" id="validationCustom02" placeholder="Apellidos" defaultValue={user.surname} required />
          <div className="valid-feedback">
          Apellidos
          </div>
          <div className="invalid-feedback">
            Please enter your last name.
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustomUsername">Edad</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
            </div>
            <input type="number" name='age' className="form-control" id="validationCustomUsername" placeholder="Edad" defaultValue={user.age} aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom03">Fecha de Nacimiento</label>
          <input type="date" name='dateofbirth' className="form-control" id="validationCustom03" defaultValue={user.dateofbirth} placeholder="City" required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
       
       
      </div>
      
      <button className="btn btn-primary" type="submit">Actualizar información</button>
      <Link  className='btn btn-outline-secondary ml-2' to='/'>Retornar a la principal</Link>
      {
      (status==true)?
      <div className="alert alert-success" role="alert">
      <strong className='mr-2'>Actualizado Usuario</strong>
     Se actualizo
    </div>
    :(!status)?
    <div className="alert alert-danger" role="alert">
  <strong className='mr-2'>Error al actualizar Usuario</strong>
  Se produjo un error.
</div>
:  void 0
    }
    </form>
  </div> 
  )
}