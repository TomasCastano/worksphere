import { useState } from 'react'
import { usePayments } from '../../../../providers/PaymentsProvider'
import PaymentsTable from './components/PaymentsTable/PaymentsTable'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined'
import CreatePaymentModal from './components/CreatePaymentModal/CreatePaymentModal'

const PaymentsSection = () => {
    const { payments, createPayment } = usePayments()
    const [open, setOpen] = useState(false)

    const handleCreatePayment = (payment) => {
        createPayment(payment)
        setOpen(false)
    }

    return (
        <>
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full flex-1">
            <h2 className="text-2xl font-bold">Administración de pagos</h2>
            <div className="flex justify-end items-center gap-2">
                <button
                    className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <AddCardOutlinedIcon fontSize="small" />
                    Agregar pago
                </button>
            </div>
            <div className="p-5 bg-white rounded-md border border-gray-200 shadow-xs w-full overflow-x-auto">
                <PaymentsTable payments={payments} />
            </div>
        </section>
        <CreatePaymentModal open={open} setOpen={setOpen} handleCreatePayment={handleCreatePayment} />
        </>
    )
}

export default PaymentsSection