import React from 'react'
import { useProductos } from '../Context/Contexto'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Crear = () => {
  const { codigo, setCodigo, descripcion, setDescripcion, existencia, setExistencia, 
    entradas, setEntradas, salidas,setSalidas,stock, setStock, datosProductos} = useProductos();
  const navigate = useNavigate()

  const crearProducto = async(e) =>{
    await datosProductos(e)
    navigate('/')
  }
  

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Agregar Nuevo Producto</h1>

                <form onSubmit={crearProducto}>
                    <div className='mb-3'>
                        <label className='form-label'>Codigo Producto</label>
                        <input
                            value={codigo}
                            onChange={ (e) => setCodigo(e.target.value)}
                            type='text'
                            className= 'form-control bg-dark'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Descripcion</label>
                        <input
                            value={descripcion}
                            onChange={ (e) => setDescripcion(e.target.value)}
                            type='text'
                            className= 'form-control bg-dark'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Existencias Iniciales</label>
                        <input
                            value={existencia}
                            onChange={ (e) => setExistencia(e.target.value)}
                            type='text'
                            className= 'form-control bg-dark'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            value={stock}
                            onChange={ (e) => setStock(e.target.value)}
                            type='text'
                            className= 'form-control bg-dark'
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>A??adir Nuevo Producto</button>
                    <Link to={"/"} className="btn btn-primary m-2"><i className="fa-solid fa-rotate-left">Volver</i></Link>
                    


                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Crear
