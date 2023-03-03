import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Fotografo } from './components/Fotografo'
import { DefaltLayout } from './layouts/DefaultLayout/index'
import { Venda } from './components/Venda'
import { Relatorio } from './components/Relatorio'
import { Favorito } from './components/Favorito'
import { Vendedor } from './components/Vendendor'
export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaltLayout></DefaltLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Venda' element={<Venda></Venda>}></Route>
            <Route path='/Relatorio' element={<Relatorio></Relatorio>}></Route>
            <Route path='/Favorito' element={<Favorito></Favorito>}></Route>
            <Route path='/Fotografo' element={<Fotografo></Fotografo>}></Route>
            <Route path='/Vendedor' element={<Vendedor></Vendedor>}></Route>
            </Route>
        </Routes>
    )
}