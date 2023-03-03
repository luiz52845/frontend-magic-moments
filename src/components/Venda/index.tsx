import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import Container from '@mui/material/Container';


import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';


export function Venda() {

    const [fotografo, setFotografo] = React.useState('');
    const [vendedor, setVendedor] = React.useState('');
    const [fotografoVinculado, setFotografoVinculado] = React.useState('');
    const [qualidade, setQualidade] = React.useState('');
    const [valor, setValor] = React.useState<number>();
    const [qtdFotos, setQtdFotos] = React.useState<number>();
    const [qtdFotosVendida, setQtdFotosVendida] = React.useState<number>();
    const [motivo, setMotivo] = React.useState('vendido');
    const [observacao, setObservacao] = React.useState('');
    const [dados, setDados] = React.useState<any>();

    const [vendedores, setVendedores] = useState([]);
    const [fotografos, setFotografos] = useState([]);

    const handleChangeFotografo = (event: SelectChangeEvent) => {
        setFotografo(event.target.value as string);
    };

    const handleChangeFotografoVinculado = (event: SelectChangeEvent) => {
        setFotografoVinculado(event.target.value as string);
    };

    const handleChangeVendedor = (event: SelectChangeEvent) => {
        setVendedor(event.target.value);
    };

    const handleChangeQualidade = (event: SelectChangeEvent) => {
        setQualidade(event.target.value as string);
    };

    const handleChangeValor = (event: ChangeEvent<HTMLInputElement>): void => {
        const valor = parseInt(event.target.value);
        if (!isNaN(valor)) {
            setValor(valor);
        }
    };

    const handleChangeQtdFotos = (event: ChangeEvent<HTMLInputElement>): void => {
        const qtdFotos = parseInt(event.target.value);
        if (!isNaN(qtdFotos)) {
            setQtdFotos(qtdFotos);
        }
    };

    const handleChangeQtdFotosVendida = (event: ChangeEvent<HTMLInputElement>): void => {
        const qtfFotosVendida = parseInt(event.target.value);
        if (!isNaN(qtfFotosVendida)) {
            setQtdFotosVendida(qtfFotosVendida);
        }
    };


    const handleChangeMotivo = (event: ChangeEvent<HTMLInputElement>) => {
        setMotivo(event.target.value as string)

    };

    const handleChangeObservacao = (event: ChangeEvent<HTMLInputElement>) => {
        setObservacao(event.target.value as string);
    };


    React.useEffect(() => {
        const fetchVendedores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/vendedor');
                setVendedores(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVendedores();
    }, []);

    React.useEffect(() => {
        const fetchFotografos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/fotografo');
                setFotografos(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFotografos();
    }, []);


    function handleEnviarForm(obj: any): boolean {


        setDados({
            fotografo,
            vendedor,
            fotografoVinculado,
            qualidade,
            qtdFotos,
            qtdFotosVendida,
            motivo,
            observacao,
            valor
        })
        console.log(obj);
        fazerRequisicaoPost(dados);
        clearObj();





        return true;

    }

    function clearObj() {
        setFotografo('')
        setVendedor('')
        setFotografoVinculado('')
        setQualidade('')
        setQtdFotos(0)
        setQtdFotosVendida(0)
        setMotivo('vendido')
        setObservacao('Observação')
        setValor(0)

    }

    const fazerRequisicaoPost = async (teste: any) => {

        const vinculo = fotografoVinculado.length === 0 ? 252 : fotografoVinculado;
        const isVinculado = fotografoVinculado.length === 0 ? false : true;

        const inputVenda =
        {
            "fotografo": {
                "id": fotografo
            },
            "fotografoVinculado": {
                "id": vinculo
            },
            "vendedor": {
                "id": vendedor
            },
            "qualidade": qualidade,
            "vinculado": isVinculado,
            "motivo": motivo,
            "valorVenda": valor,
            "fotos": qtdFotos,
            "fotosVendida": qtdFotosVendida
        }

        try {
            console.log(teste)
            const response = await axios.post('http://localhost:8080/api/venda', inputVenda);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <Container maxWidth="md">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '22ch' },
                    '& .MuiBox-root': { m: 1, width: '20ch' },
                    '& .MuiFormControl-root': { m: 1 },
                    // , width: '100ch'

                    // MuiInputBase-root MuiOutlinedInput-root
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <InputLabel id="vendedor-label">Vendedor</InputLabel>
                    <Select
                        labelId="vendedor-label-select"
                        id="vendedor-select"
                        value={vendedor}
                        label="Vendedor"
                        onChange={handleChangeVendedor}
                    >
                        {
                            vendedores.map((item) => (
                                //@ts-ignore
                                <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="fotografo-label">Fotografo</InputLabel>
                    <Select
                        labelId="fotografo-label-select"
                        id="fotografo-select"
                        value={fotografo}
                        label="fotografo"
                        onChange={handleChangeFotografo}
                    >
                        {
                            fotografos.map((item) => (
                                //@ts-ignore
                                <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="vinculado-label">Vinculado</InputLabel>
                    <Select
                        labelId="vinculado-label-select"
                        id="vinculado-select"
                        value={fotografoVinculado}
                        label="Vinculado"
                        onChange={handleChangeFotografoVinculado}
                    >  {
                            fotografos.map((item) => (
                                //@ts-ignore
                                <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>


                <FormControl fullWidth>
                    <InputLabel id="qualidade-label">Qualidade</InputLabel>
                    <Select
                        labelId="qualidade-label-select"
                        id="qualidade-select"
                        value={qualidade}
                        label="Qualidade"
                        onChange={handleChangeQualidade}
                    >
                        <MenuItem value={"Exelente"}>Exelente</MenuItem>
                        <MenuItem value={"Muito Boa"}>Muito Boa</MenuItem>
                        <MenuItem value={"Boa"}>Boa</MenuItem>
                        <MenuItem value={"Media"}>Media</MenuItem>
                        <MenuItem value={"Ruim"}>Ruim</MenuItem>
                        <MenuItem value={"Muito Ruim"}> Muito Ruim</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        label="Amount"
                        value={valor}
                        onChange={handleChangeValor}
                    />
                </FormControl>

                <TextField
                    id="qtd-fotos"
                    label="Qtd Fotos"
                    type="number"
                    value={qtdFotos}
                    onChange={handleChangeQtdFotos}
                />

                <TextField
                    id="qtd-vendida"
                    label="Qtd Vendida"
                    type="number"

                    value={qtdFotosVendida}
                    onChange={handleChangeQtdFotosVendida}
                />

                <TextField
                    id="motivo"
                    label="Motivo"
                    type="text"
                    value={motivo}
                    onChange={handleChangeMotivo}
                />

                <TextField
                    id="observação"
                    label="Observação"
                    type="text"
                    value={observacao}
                    onChange={handleChangeObservacao}
                />

                <div style={{ display: "flex", justifyContent: "center" }}>

                    <Button variant="contained" onClick={() => { handleEnviarForm("obj") }} >Confirmar</Button>
                </div>

            </Box>

        </Container>
    );
}