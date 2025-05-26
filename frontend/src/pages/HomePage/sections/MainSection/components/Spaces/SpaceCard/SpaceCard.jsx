import React from 'react'
import workspaceImage from '../../../../../../../assets/images/workspace.webp'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'

const SpaceCard = ({ name, location, capacity, price }) => {
    return (
        <>
        <div className="border border-gray-200 rounded-md bg-white w-80 shadow-xs hover:shadow-md transition-shadow">
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
            </div>
        </div>
        </>
    )
}

export default SpaceCard