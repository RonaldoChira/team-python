import axios from "axios";
import { useState } from "react";
import { Link } from "wouter";
import variables from "../config/variables";

export default function  NewUser(){
  const  [status,setstatus]=useState('nada');



   const newuser=async(e)=>{
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
     
  let st=   await  axios.post(`${variables.server}newuser`,squema)
  if(st){
    setstatus(true)
  }else{
    setstatus(false)
  }
      }
   }

    return(<div className="container">
        <br />
      <center>
            <h3>Nuevo Usuario</h3>
        </center>
        <div className="alert alert-info" role="alert">
  <strong className='mr-2'>Alvertencia</strong>
  En esta apartado podra agregar o registrar nuestros usuarios
</div>
    <form  onSubmit={newuser} className="needs-validation" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom01">Nombres</label>
          <input type="text" required name='name' className="form-control" id="validationCustom01" placeholder="Nombres" defaultValue="" required />
          <div className="valid-feedback">
            Looks good!
          </div>
          <div className="invalid-feedback">
            Please enter your first name.
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom02">Apellidos</label>
          <input type="text"  name='surname' required className="form-control" id="validationCustom02" placeholder="Apellidos" defaultValue="" required />
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
            <input type="number" name='age' required className="form-control" id="validationCustomUsername" placeholder="Edad" aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom03">Fecha de Nacimiento</label>
          <input type="date" name='dateofbirth' required className="form-control" id="validationCustom03" placeholder="City" required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
       
       
      </div>
      
      <button className="btn btn-primary" type="submit">Nuevo Usuario</button>
      <button className="btn btn-light ml-2" type="reset">Limpiar</button>
      <Link  className='btn btn-outline-secondary ml-2' to='/'>Retornar a la principal</Link>
    <br />
    <br />
    {
      (status==true)?
      <div className="alert alert-success" role="alert">
      <strong className='mr-2'>Nuevo Usuario</strong>
      Registro satisfactorio, hay un nuevo usuario
    </div>
    :(!status)?
    <div className="alert alert-danger" role="alert">
  <strong className='mr-2'>Error al registrar Usuario</strong>
  Se produjo un error.
</div>
:  void 0
    }
   


    </form>

  </div> 
  )
}