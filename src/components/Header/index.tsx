import * as React from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export function Header() {

    const [page, setPage] = React.useState('Venda');

    return (
        <>

            <Container maxWidth="md" >
                <Stack direction="row" spacing={2}>

                    <Button variant="contained" endIcon={<MonetizationOnIcon />} onClick={() => { setPage('Venda') }} >
                        <Link style={{ color: 'white' }} to="/venda">Lançar Venda</Link>
                    </Button>
                    <Button variant="contained" endIcon={<RestoreIcon />} onClick={() => { setPage('Relatorio de Vendas') }}>
                        <Link style={{ color: 'white' }} to="/relatorio"> Relatorio</Link>
                    </Button>
                    <Button variant="contained" endIcon={<FavoriteIcon />} onClick={() => { setPage('Favorito') }}>
                        <Link style={{ color: 'white' }} to="/favorito">   Favorito</Link>
                    </Button>
                    <Button variant="contained" startIcon={<PhotoCameraIcon />} onClick={() => { setPage('Fotografo') }}>
                        <Link style={{ color: 'white' }} to="/fotografo">   Fotografo</Link>
                    </Button>
                    <Button variant="contained" endIcon={<StoreIcon />} onClick={() => { setPage('Vendedor') }}>
                        <Link style={{ color: 'white' }} to="/vendedor">  Vendedor</Link>
                    </Button>
                </Stack>

            </Container>
            <br />
            <div style={{ justifyContent: 'center', textAlign: 'center' }}> <h1>{page}</h1></div>


        </>
    )
}