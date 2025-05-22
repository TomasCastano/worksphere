import { useState } from 'react'
import Modal from '../../../../../../components/Modal/Modal'

const UpdateSpaceModal = ({ open, setOpen, space, spaceID, handleUpdateSpace }) => {
    const [spaceUpdate, setSpaceUpdate] = useState({
        nombre: space.nombre,
        ubicacion: space.ubicacion,
        capacidad: parseInt(space.capacidad) || 0,
        precio_por_hora: parseInt(space.precio_por_hora) || 0
    })
    
    const handleChange = (e) => {
        const value = e.target.type === 'number' 
            ? parseInt(e.target.value) || 0 
            : e.target.value
            
        setSpaceUpdate({
            ...spaceUpdate,
            [e.target.name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            nombre: spaceUpdate.nombre,
            ubicacion: spaceUpdate.ubicacion,
            capacidad: spaceUpdate.capacidad,
            precio_por_hora: spaceUpdate.precio_por_hora
        }
        handleUpdateSpace(payload, spaceID)
        setOpen(false)
    }
    
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Editar espacio</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={spaceUpdate.nombre}
                            placeholder="Nombre"
                            autoComplete="off"
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="ubicacion" className="text-sm font-medium text-gray-700">Ubicación</label>
                        <input
                            type="text"
                            name="ubicacion"
                            value={spaceUpdate.ubicacion}
                            placeholder="Ubicación"
                            autoComplete="off"
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="capacidad" className="text-sm font-medium text-gray-700">Capacidad</label>
                        <input type="number" name="capacidad" value={parseInt(spaceUpdate.capacidad)} placeholder="Capacidad" onChange={handleChange} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="precio_por_hora" className="text-sm font-medium text-gray-700">Precio por hora</label>
                        <input
                            type="number"
                            name="precio_por_hora"
                            value={parseInt(spaceUpdate.precio_por_hora)}
                            placeholder="Precio por hora"
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">Actualizar</button>
                </form>
            </div>
        </Modal>
    )
}

export default UpdateSpaceModal