import { useSpaces } from "../../../../providers/SpacesProvider"
import SpacesCard from "./SpacesCard/SpacesCard"
import CreateSpaceCard from "./CreateSpaceCard/CreateSpaceCard"

const SpacesSection = () => {
    const { spaces } = useSpaces()
    return (
        <section className="p-10 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Administración de espacios</h2>
            <div className="flex flex-wrap gap-5">
                {spaces.map((space) => (
                    <SpacesCard
                        key={space.id}
                        name={space.nombre}
                        location={space.ubicacion}
                        capacity={space.capacidad}
                        price={space.precio_por_hora}
                    />
                ))}
                <CreateSpaceCard />
            </div>
        </section>
    )
}

export default SpacesSection
