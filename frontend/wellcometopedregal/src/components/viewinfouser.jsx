import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import variables from "../config/variables";
export default  function Viewinfouser({params}){
    const [user,setuser]=useState({});
    const getuser=async(id)=>{
        
        const response=await axios.get(`${variables.server}${id}`)
          return  setuser(response.data);
    }
    useEffect(()=>{
       let id=params.id;
       if(id>0) {
           getuser(id);
       }
    },[])
    return(
        <div className="main-content">
  <div className="container mt-7">
    {/* Table */}
    
    <div className="row">
      <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
        <div className="card card-profile shadow">
          <div className="row justify-content-center">
            <div className="col-lg-3 order-lg-2">
              <div className="card-profile-image">
           
                  <img  src="data:image/png;base64,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" className="rounded-circle" />
              
              </div>
            </div>
          </div>
         
          <div className="card-body pt-0 pt-md-4">
            
            <div className="text-center">
              <h3>
               {user.name} {user.surname}<span className="font-weight-light"></span>
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />{user.age}
              </div>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                {user.dateofbirth}
              </div>

              <hr className="my-4" />
             <Link to='/' target="_blank">Regresar a la Principal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}