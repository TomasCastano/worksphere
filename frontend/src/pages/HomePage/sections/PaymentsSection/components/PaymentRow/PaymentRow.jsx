import { usePayments } from "../../../../../../providers/PaymentsProvider"
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }
    return date.toLocaleDateString('es-ES', options).replace(/(\d+) de (\w+) de (\d+), (\d+):(\d+)/, '$1 de $2 de $3, $4:$5')
}

const PaymentRow = ({ payment }) => {
    const { deletePayment, updatePaymentData } = usePayments()

    return (
        <>
        <tr className="bg-white border-b border-gray-200 text-gray-600 hover:bg-gray-50">
            <td className='px-6 py-4 font-medium'>#{payment.reservation_id}</td>
            <td className='px-6 py-4'>${payment.amount}</td>
            <td className='px-6 py-4'>{payment.payment_method}</td>
            <td className='px-6 py-4'>
                <p className={`px-2 py-1 rounded-full text-gray-900 text-xs text-center ${payment.status === 'Pagado' ? 'bg-green-200' : 'bg-red-200'}`}>{payment.status}</p>
            </td>
            <td className='px-6 py-4'>{formatDate(payment.created_at)}</td>
            <td className='px-6 py-4 flex gap-2 justify-center items-center'>
                <button
                    // onClick={() => setOpen(true)}
                    className="bg-gray-900 font-medium text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-1 text-xs cursor-pointer"
                >
                    <EditNoteOutlinedIcon fontSize='small' />Editar
                </button>
                <button 
                    onClick={() => deletePayment(payment.id)} 
                    className="bg-red-500 font-medium text-white px-3 py-2 rounded hover:bg-red-400 w-fit flex items-center gap-1 text-xs cursor-pointer"
                >
                    <DeleteOutlineIcon fontSize='small' />Eliminar
                </button>
            </td>
        </tr>
        </>
    )
}

export default PaymentRow