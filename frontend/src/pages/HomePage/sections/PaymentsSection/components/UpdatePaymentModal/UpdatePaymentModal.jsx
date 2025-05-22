import { useState } from "react"
import Modal from "../../../../../../components/Modal/Modal"

const UpdatePaymentModal = ({ open, setOpen, payment, paymentID, handleUpdatePayment }) => {
    const [paymentUpdate, setPaymentUpdate] = useState({
        reservation_id: payment.reservation_id,
        amount: payment.amount,
        payment_method: payment.payment_method,
        status: payment.status
    })
    
    const handleChange = (e) => {
        setPaymentUpdate({
            ...paymentUpdate,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedPayment = {
            ...paymentUpdate,
            reservation_id: Number(paymentUpdate.reservation_id),
            amount: parseFloat(paymentUpdate.amount) || 0
        }
        handleUpdatePayment(updatedPayment, paymentID)
        setOpen(false)
    }
    
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Editar pago</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="reservation_id" className="text-sm font-medium text-gray-700">ID Reserva</label>
                        <input
                            type="text"
                            name="reservation_id"
                            value={paymentUpdate.reservation_id}
                            placeholder="ID Reserva"
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="amount" className="text-sm font-medium text-gray-700">Monto</label>
                        <input
                            type="number"
                            name="amount"
                            value={paymentUpdate.amount}
                            placeholder="Monto"
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="payment_method" className="text-sm font-medium text-gray-700">Método de pago</label>
                        <select
                            name="payment_method"
                            value={paymentUpdate.payment_method}
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        >
                            <option value="">Seleccione un método</option>
                            <option value="Efectivo">Efectivo</option>
                            <option value="Tarjeta">Tarjeta</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="status" className="text-sm font-medium text-gray-700">Estado</label>
                        <select
                            name="status"
                            value={paymentUpdate.status}
                            onChange={handleChange}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        >
                            <option value="">Seleccione un estado</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Pagado">Pagado</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">Actualizar</button>
                </form>
            </div>
        </Modal>
    )
}

export default UpdatePaymentModal