import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from 'axios';

// interface Dado {
//   id: number;
//   fotografo: {
//     nome: string;
//   };
// }

// interface Venda {
//   id: number,
//   fotografo: {
//     id: number,
//     nome: string,
//     nomeCompleto: string,
//     sobreNome: string,
//     qrCode: string
//   },
//   qualidade: string,
//   vinculado: boolean,
//   motivo: string,
//   valorVenda: 100.00,
//   fotografoVinculado: {
//     id: number,
//     nome: string,
//     nomeCompleto: string,
//     sobreNome: string,
//     qrCode: string
//   },
//   fotos: number,
//   fotosVendidas: number,
//   vendedor: {
//     id: number,
//     nome: string,
//     nomeCompleto: string,
//     sobreNome: string,
//     nrCaixa: number
//   },
//   dataVenda: Date,
//   observacao: string
// }

export function Relatorio() {

  const [dadosVenda, setDadosVenda] = React.useState([]);

  React.useEffect(() => {
    async function carregaDados() {
      const response = await axios.get('http://localhost:8080/api/venda');
      setDadosVenda(response.data);
    }
    carregaDados();
  }, []);

  <h1>Relatorio</h1>

  const columns: GridColDef[] = [
    {
      field: 'vendedor',
      headerName: 'Vendedor',
      width: 100,
      editable: false,
    },
    {
      field: 'nome',
      headerName: 'Fotógrafo',
      width: 100,
      editable: false,
    },

    {
      field: 'qualidade',
      headerName: 'Qualidade',
      width: 100,
      editable: false,
    },
    {
      field: 'fotos',
      headerName: 'Fotos',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'fotosVendidas',
      headerName: 'Vendida',
      type: 'number',
      width: 100,
      editable: false,
    },
    {
      field: 'vinculado',
      headerName: 'Vinculado',
      type: 'number',
      width: 100,
      editable: false,
    },

    {
      field: 'valorVenda',
      headerName: 'Valor',
      type: 'currency',
      width: 80,
      editable: false,
    },
    {
      field: 'dataVenda',
      headerName: 'Data',
      type: 'number',
      width: 110,
      editable: false,
    },

    {
      field: 'motivo',
      headerName: 'Motivo',
      width: 80,

    },
    {
      field: 'qrCode',
      headerName: 'Qr-Code',
      width: 100,

    },
    {
      field: 'observacao',
      headerName: 'Observacao',
      type: 'text',
      width: 110,
      editable: false,
    },
  ];

  const rows2 = [
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



  // const rows = dadosVenda.map((dado: Dado) => {
  //   return {
  //     id: dado.id,
  //     fotografoNome: dado.fotografo,
  //   };
  // });

  // setTimeout(() => {
  //   const valorTotal = dadosVenda.reduce((total, dado) => total + dado.valorVenda, 0);
  // }, "5000")


  

  console.log(dadosVenda)

 // const total = dadosVenda.reduce((acc, curr) => acc + curr.valorVenda, 0) as number;

  //console.log(total); // Output: 60
 // console.log("aqui", total)

  return (
    <>

      <br />
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={dadosVenda}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}

          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <p>Total venda: { "10000"}</p>
    </>
  )
}
