import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  }
  return date.toLocaleDateString('es-ES', options)
}

const formatTime = (dateString) => {
  const date = new Date(dateString)
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }
  return date.toLocaleTimeString('es-ES', options)
}

const BookingCard = ({ space, user, email, initDate, endDate, status }) => {
    return (
        <div className="border border-gray-200 rounded-md bg-white w-80 shadow-xs p-4">
            <header className="pb-2 flex flex-col gap-2 ">
                <div className='flex justify-between items-center'>
                    <span className='text-gray-600 text-sm flex items-center gap-1'><InsertInvitationOutlinedIcon fontSize='small' className="text-gray-500" />{formatDate(initDate)}</span>
                    <p className='text-xs bg-gray-900 text-white px-2 py-1 rounded-xl'>{status}</p>
                </div>
                <h3 className='font-medium text-lg'>{space}</h3>
            </header>
            <div className="py-4 pt-2 flex flex-col gap-2">
                <div className='flex gap-2'>
                    <QueryBuilderOutlinedIcon fontSize='small' className="text-gray-500" />
                    <div className='flex flex-col items-start justify-start'>
                        <p className='font-medium text-sm'>Horario:</p>
                        <div className='flex flex-col'>
                            <span className='text-gray-600 text-sm'>{formatTime(initDate)} - {formatTime(endDate)}</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <PersonOutlineOutlinedIcon fontSize='small' className="text-gray-500" />
                    <div>
                        <p className='font-medium text-sm'>{user}</p>
                        <p className='text-gray-600 text-sm'>{email}</p>
                    </div>
                </div>
            </div>
            <footer className="flex items-center gap-2 border-t border-gray-200 pt-4">
                <button
                    className="bg-gray-900 font-medium text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-1 text-xs cursor-pointer"
                    // onClick={() => setOpen(true)}
                >
                    <EditNoteOutlinedIcon fontSize='small' className="text-gray-200" />Editar
                </button>
                <button
                    className="bg-red-500 font-medium text-white px-3 py-2 rounded hover:bg-red-400 w-fit flex items-center gap-1 text-xs cursor-pointer"
                    // onClick={() => deleteSpace(id)}
                >
                    <DeleteOutlineIcon fontSize='small' className="text-gray-200" />Eliminar
                </button>
            </footer>
        </div>
    )
}

export default BookingCard