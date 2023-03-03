import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from 'axios';

export function Favorito(){

  const [favorito, setFavorito] = React.useState([]);

  React.useEffect(() => {
    async function carregaDados() {
      const response = await axios.get('http://localhost:8080/api/favorito');
      setFavorito(response.data);
    }
    carregaDados();
  }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'id',
          headerName: 'Qr-Code',
          width: 150,
          editable: true,
        },
        {
          field: 'fotografo',
          headerName: 'Fotografo',
          width: 150,
          editable: true,
          valueGetter: (params: GridValueGetterParams) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
          sortable: false,
        },     
      ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    return (
        <>
     
        <br />
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={favorito}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    )
}

