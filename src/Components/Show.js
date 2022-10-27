import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
import { useProductos } from '../Context/Contexto'
const MySwal = withReactContent(Swal)

const Show = () => {
    const {productos, confirDelete} = useProductos();

    return (
        <>
            <div className='container bg-dark'>
                <div className='row'>
                    <div className='col'>
                        <div className="d-flex justify-content-center">
                            <Link to="/crear" className='btn btn-secondary mt-2 mb-2 m-2'>Añadir Nuevo Producto</Link>
                            <Link to="/entradas" className='btn btn-secondary mt-2 mb-2 m-2'>Ver Entradas</Link>
                            <Link to="/salidas" className='btn btn-secondary mt-2 mb-2 m-2'>Ver Salidas</Link>
                        </div>
                        <table className='table table-dark table-hover'>
                            <thead>
                                <tr>
                                    <th>Codigo Producto</th>
                                    <th>Descripción</th>
                                    <th>Existencias Iniciales</th>
                                    <th>Entradas</th>
                                    <th>Salidas</th>
                                    <th>Stock</th>
                                    <th>Opcion</th>
                                </tr>
                            </thead>

                            <tbody>
                                {productos.map((producto) => (
                                    <tr key={producto.id}>
                                        <td>{producto.codigoProd}</td>
                                        <td>{producto.descripcionProd}</td>
                                        <td>{producto.existenciaProd}</td>
                                        <td>{producto.entradasProd}</td>
                                        <td>{producto.salidasProd}</td>
                                        <td>{producto.stockProd}</td>
                                        <td>
                                            <Link to={`/editar/${producto.id}`} className="btn btn-light"><i className="fa-regular fa-pen-to-square"></i></Link>
                                            <button onClick={() => {confirDelete(producto.id)}}className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show