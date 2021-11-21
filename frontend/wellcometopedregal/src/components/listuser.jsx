import axios from 'axios';
import { useEffect, useState } from 'react'
import  {Link} from 'wouter'
import variables from '../config/variables';

export default function  ListUser(){
    const [users,setusers]=useState([]);
    const getusers=async()=>{
        const response=await axios.get(variables.server)
          return  setusers(response.data);
    }

    const removeuser=async(id)=>{
        await await axios.delete(`${variables.server}${id}`)
          await getusers();
    }


    useEffect(()=>{
      getusers();
    },[])
    return(<main className="container pt-5">
<Link to='/newuser' className="btn btn-primary float-right mb-1" type="submit">Nuevo Usuario</Link>
    <table className="table table-bordered table-definition mb-5">
      <thead className="table-info ">
        <tr>
          {/* <th /> */}
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Edad</th>
          <th>Fecha de Nacimiento</th>
          <th>Procesos</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((e)=>(
                <tr key={e.id}>
         
          <td>{e.name}</td>
          <td>{e.surname}</td>
          <td>{e.age}</td>
          <td>{e.dateofbirth}</td>
          <td>
          <Link to={`/viewinfouser/${e.id}`} className='btn btn-outline-primary btn-sm mr-1' >
          Ver </Link>
          <Link to={`/updateinfouser/${e.id}`} className='btn btn-outline-primary btn-sm' >
          Modificar </Link>
          <button onClick={()=>removeuser(e.id)} className='ml-1 btn btn-outline-danger btn-sm' >
          eliminar </button>
          </td>
        </tr>
            ))
        }
        </tbody>
    </table>
  </main>
  )
}