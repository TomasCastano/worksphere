import workspaceImage from '../../../../../../assets/images/workspace.webp'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSpaces } from '../../../../../../providers/SpacesProvider'
import UpdateSpaceModal from '../UpdateSpaceModal/UpdateSpaceModal';
import { useState } from 'react';

const SpacesCard = ({ name, location, capacity, price, id }) => {

    const { deleteSpace, updateSpace } = useSpaces()
    const [open, setOpen] = useState(false)
    const [spaceID, setSpaceID] = useState(id)
    const [space, setSpace] = useState({
        nombre: name,
        ubicacion: location,
        capacidad: capacity,
        precio_por_hora: price
    })

    const handleUpdateSpace = (space, id) => {
        updateSpace(space, id)
        setOpen(false)
    }

    return (
        <>
        <div className="border border-gray-200 rounded-md bg-white w-70 shadow-xs">
            <header className="relative">
                <img src={workspaceImage} alt="workspace image" className="w-full h-auto object-cover rounded-t-md" />
                <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full font-medium z-1">
                    {price === 0 ? 'Gratis' : `$${price}`}
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-t-md bg-black/30 z-0" />
            </header>
            <div className="p-4 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <div className="flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-gray-700 text-sm"><LocationOnOutlinedIcon fontSize="small" className="text-gray-600" /><span className="font-medium">Ubicación:</span> {location}</p>
                    <p className="flex items-center gap-2 text-gray-700 text-sm"><GroupsOutlinedIcon fontSize="small" className="text-gray-600" /><span className="font-medium">Capacidad:</span> {capacity} personas</p>
                    <p className="flex items-center gap-2 text-gray-700 text-sm"><PaymentsOutlinedIcon fontSize="small" className="text-gray-600" /><span className="font-medium">Precio por hora:</span> ${price}</p>
                </div>
                <footer className="flex items-center gap-2 border-t border-gray-200 pt-4">
                    <button
                        className="bg-gray-900 font-medium text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-1 text-xs cursor-pointer"
                        onClick={() => setOpen(true)}
                    >
                        <EditNoteOutlinedIcon fontSize='small' className="text-gray-200" />Editar
                    </button>
                    <button
                        className="bg-red-500 font-medium text-white px-3 py-2 rounded hover:bg-red-400 w-fit flex items-center gap-1 text-xs cursor-pointer"
                        onClick={() => deleteSpace(id)}
                    >
                        <DeleteOutlineIcon fontSize='small' className="text-gray-200" />Eliminar
                    </button>
                </footer>
            </div>
        </div>
        <UpdateSpaceModal
            open={open}
            setOpen={setOpen}
            space={space}
            spaceID={spaceID}
            handleUpdateSpace={handleUpdateSpace}
        />
        </>
    )
}

export default SpacesCard
