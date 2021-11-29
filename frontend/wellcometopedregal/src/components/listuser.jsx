import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'wouter'
import variables from '../config/variables';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Avatar, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';




// import Link from '@mui/material/Link';
export default function ListUser() {

  const [users, setusers] = useState([]);
  const [statusupdate, setstatusupdate] = useState(false);


  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      headerAlign: 'center',
      align: 'center'
    },
    
    {
      field: 'fullname',
      headerName: 'Nombre Completo',
      width: 250,
      valueGetter: (params) => {
        return `${params.getValue(params.id, 'name') || ''} 
       ${params.getValue(params.id, 'surname') || ''}`
      },
      headerAlign: 'center',
      align: 'center'

    },
    {
      field: 'age',
      headerName: 'Edad',
      width: 130,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'dateofbirth',
      headerName: 'Fecha de Nacimiento',
      width: 200,
      headerAlign: 'center',
      align: 'center'
    },
    {

      headerName: 'Procesos',
      width:150,
      field: 'Procesos',
      renderCell: (params) => (
        <Fragment>
           {/* proceso para eliminar */}
          <IconButton onClick={() => {
      var status=window.confirm('¿Estas seguro que deseas eliminar a '+params.getValue(params.id,'name')+'?');
         if(status){
           removeuser(params.id);
         }
          }} aria-label="delete">
            <DeleteIcon />
          </IconButton>


          <Link  to={`/user?id=${params.getValue(params.id,'id')}&name=${params.getValue(params.id,'name')}&surname=${params.getValue(params.id,'surname')}&age=${params.getValue(params.id,'age')}&dateofbirth=${params.getValue(params.id,'dateofbirth')}`}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          </Link>

          <Link  to={`/viewinfouser/${params.getValue(params.id,'id')}`}>
          <IconButton aria-label="listar">
            <ViewQuiltIcon />
          </IconButton>
          </Link>
          

        </Fragment>
      )

    }
  ];

  const getusers = async () => {
    const response = await axios.get(variables.server)
    return setusers(response.data);
  }

  let removeuser = async (id) => {
    await await axios.delete(`${variables.server}${id}`)
    await getusers();
  }


  useEffect(() => {
    getusers();
  }, [])
  return (<main className="container pt-5">

    {/* <Button className='float-right mb-1' variant="contained">Nuevo Usuario</Button> */}

    {/* <Link className="btn btn-primary float-right mb-1"  href="/newuser">Nuevo Usuario</Link> */}
    <Link to='/user' className="btn btn-primary float-right mb-1" type="submit">Nuevo Usuario</Link>
    <br />
    <br />
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      // checkboxSelection
      // onRowDoubleClick={(params: GridCellParams, event: MuiEvent<React.MouseEvent>) => {
      //   event.defaultMuiPrevented = true;
      //   window.alert('hola')

      // }}


    />
    <br />
    <br />
  </main>
  )
}