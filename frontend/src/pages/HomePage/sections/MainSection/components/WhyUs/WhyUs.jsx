import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined'
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined'
import HotelClassOutlinedIcon from '@mui/icons-material/HotelClassOutlined'

const WhyUs = () => {
    return (
        <div className='px-10 py-15 flex flex-col items-center gap-10 max-w-[1000px] w-full bg-white border border-gray-200 rounded-md shadow-xs hover:shadow-md transition-shadow'>
            <h2 className="text-3xl font-bold text-center text-gray-900">¿Por qué elegir a WorkSphere?</h2>
            <div className='flex sm:flex-row flex-col sm:gap-4 gap-8 sm:items-start items-center justify-between w-full'>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <div className='bg-teal-100 rounded-full p-3'>
                            <ElectricBoltOutlinedIcon className='text-teal-900' />
                        </div>
                        <p className='font-medium'>Reserva Instantánea</p>
                        <p className='text-gray-600 text-sm'>Reserva tu espacio en segundos, sin complicaciones ni esperas</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <div className='bg-teal-100 rounded-full p-3'>
                            <UpdateOutlinedIcon className='text-teal-900' />
                        </div>
                        <p className='font-medium'>Flexibilidad Total</p>
                        <p className='text-gray-600 text-sm'>Horarios flexibles que se adaptan a tu agenda y necesidades</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <div className='bg-teal-100 rounded-full p-3'>
                            <HotelClassOutlinedIcon className='text-teal-900' />
                        </div>
                        <p className='font-medium'>Calidad Premium</p>
                        <p className='text-gray-600 text-sm'>Espacios modernos con la mejor tecnología y comodidades</p>
                    </div>
                </div>
        </div>
    )
}

export default WhyUs