import { useNavigate } from 'react-router-dom'
import { useSpaces } from '../../../../../../providers/SpacesProvider'
import SpaceCard from './SpaceCard/SpaceCard'

const Spaces = () => {
    const navigate = useNavigate()
    const { spaces } = useSpaces()
    return (
        <div className='flex flex-col items-center gap-8 max-w-[1000px] w-full'>
            <h2 className="text-3xl font-bold text-center text-gray-900">Nuestros espacios</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center w-full">
                {spaces.slice(0, 3).map((space) => (
                    <SpaceCard
                        key={space.id}
                        name={space.nombre}
                        location={space.ubicacion}
                        capacity={space.capacidad}
                        price={space.precio_por_hora}
                    />
                ))}
            </div>
            <button className="bg-teal-600 text-white px-3 py-2 rounded hover:bg-teal-700 flex justify-center items-center gap-2 text-md font-medium cursor-pointer transition-colors"
                onClick={() => navigate('/home/spaces')}
            >
                Ver todos los espacios
            </button>
        </div>
    )
}

export default Spaces