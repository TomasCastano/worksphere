import React from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import CreateSpaceModal from '../CreateSpaceModal/CreateSpaceModal'

const CreateSpaceCard = ({ open, setOpen, handleCreateSpace }) => {
    return (
        <>
        <div
            className="border-[2px] border-dashed border-gray-200 rounded-md bg-white w-70 p-4 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(true)}
        >
            <AddCircleTwoToneIcon fontSize="large" className="text-gray-300" />
            <h3 className="text-gray-700 text-xl font-semibold">Agregar un espacio</h3>
        </div>
        <CreateSpaceModal open={open} setOpen={setOpen} handleCreateSpace={handleCreateSpace} />
        </>
    )
}

export default CreateSpaceCard