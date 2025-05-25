import { useNavigate } from 'react-router-dom'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='px-10 py-15 flex flex-col items-center gap-3 max-w-[1000px] w-full bg-teal-600 border border-gray-200 rounded-md shadow-xs hover:shadow-md transition-shadow'>
            <h2 className="text-3xl font-bold text-center text-white">¿Listo para reservar tu espacio ideal?</h2>
            <p className="text-teal-100 text-lg text-center font-medium w-full">Únete a cientos de profesionales que ya confían en Worksphere para sus reuniones y eventos.</p>
            <button className="mt-5 bg-white w-fit text-teal-600 px-3 py-2 rounded hover:bg-gray-200 flex justify-center items-center gap-2 text-lg font-medium cursor-pointer transition-colors"
                onClick={() => navigate('/home/bookings')}>
                <EventOutlinedIcon fontSize="small" />
                Reservar ahora
                <KeyboardArrowRightOutlinedIcon fontSize="small" />
            </button>
        </div>
    )
}

export default Footer