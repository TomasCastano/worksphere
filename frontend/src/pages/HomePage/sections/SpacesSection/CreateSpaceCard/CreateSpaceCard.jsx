import React from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const CreateSpaceCard = () => {
    return (
        <div className="border-[2px] border-dashed border-gray-200 rounded-md bg-white w-80 p-4 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors">
            <AddCircleTwoToneIcon fontSize="large" className="text-gray-300" />
            <h3 className="text-gray-700 text-xl font-semibold">Agregar un espacio</h3>
        </div>
    )
}

export default CreateSpaceCard