import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from 'axios';



export function Fotografo(){

  const [fotografo, setFotografo] = React.useState([]);

  React.useEffect(() => {
    async function carregaDados() {
      const response = await axios.get('http://localhost:8080/api/fotografo');
      setFotografo(response.data);
    }
    carregaDados();
  }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'nome',
          headerName: 'Nome',
          width: 150,
          editable: true,
        },

        {
          field: 'qrCode',
          headerName: 'Qr-Code',
          width: 150,
          type: 'number',
          editable: true,
        },
        {
          field: '',
          headerName: 'Faturado Mensal',
          width: 150,
          type: 'number',
          editable: true,
        },
        {
          field: '1',
          headerName: 'Faturado Diario',
          width: 150,
          type: 'number',
          editable: true,
        },
        {
          field: '2',
          headerName: 'Fotos',
          width: 150,
          type: 'number',
          editable: true,
        },
        {
          field: '3',
          headerName: 'Fotos Vendida',
          width: 150,
          type: 'number',
          editable: true,
        },
      
        
      ];

    
    return (
        <>
     
        <br />
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={fotografo}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                   
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    )
}
