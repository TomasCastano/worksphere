import { useState } from "react"
import Modal from "../../../../../components/Modal/Modal"

const CreateSpaceModal = ({ open, setOpen, handleCreateSpace }) => {

    const [space, setSpace] = useState({nombre: "", ubicacion: "", capacidad: 0, precio_por_hora: 0})

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreateSpace(space)
        setOpen(false)
        setSpace({nombre: "", ubicacion: "", capacidad: 0, precio_por_hora: 0})
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Agregar un espacio</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={space.nombre}
                            placeholder="Nombre"
                            onChange={(e) => setSpace({...space, nombre: e.target.value})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="ubicacion" className="text-sm font-medium text-gray-700">Ubicación</label>
                        <input
                            type="text"
                            name="ubicacion"
                            value={space.ubicacion}
                            placeholder="Ubicación"
                            onChange={(e) => setSpace({...space, ubicacion: e.target.value})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="capacidad" className="text-sm font-medium text-gray-700">Capacidad</label>
                        <input type="number" name="capacidad" value={space.capacidad} placeholder="Capacidad" onChange={(e) => setSpace({...space, capacidad: parseInt(e.target.value)})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="precio_por_hora" className="text-sm font-medium text-gray-700">Precio por hora</label>
                        <input
                            type="number"
                            name="precio_por_hora"
                            value={space.precio_por_hora}
                            placeholder="Precio por hora"
                            onChange={(e) => setSpace({...space, precio_por_hora: parseInt(e.target.value)})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">Crear</button>
                </form>
            </div>
        </Modal>
    )
}

export default CreateSpaceModal