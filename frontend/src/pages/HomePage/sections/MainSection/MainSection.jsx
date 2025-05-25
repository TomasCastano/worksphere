import React from 'react'
import { useAuth } from '../../../../providers/AuthProvider'

const MainSection = () => {
    const { user } = useAuth()
    return (
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full flex-1">
            <h2 className="text-2xl font-bold">¡Bienvenido de nuevo <span className="text-gray-900">{user?.nombre}</span>!</h2>
            <p className="text-gray-600 font-medium text-base">En esta sección puedes realizar una reserva</p>
        </section>
    )
}

export default MainSection