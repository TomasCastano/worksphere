import React from 'react'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined'

const MainSection = () => {
    return (
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full flex-1">
            <h2 className="text-2xl font-bold">Realizar una reserva</h2>
            <button className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer">
                <AddCardOutlinedIcon fontSize="small" />
                Agregar reserva
            </button>
        </section>
    )
}

export default MainSection