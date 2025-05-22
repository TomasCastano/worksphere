import Modal from "../../../../../../components/Modal/Modal"
import { useState } from "react"

const CreatePaymentModal = ({ open, setOpen, handleCreatePayment }) => {
    const [payment, setPayment] = useState({ reservation_id: "", amount: "", payment_method: "", status: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        const paymentWithDate = {
            ...payment,
            reservation_id: Number(payment.reservation_id),
            amount: parseFloat(payment.amount) || 0,
            created_at: new Date().toISOString()
        }
        handleCreatePayment(paymentWithDate)
        setOpen(false)
        setPayment({reservation_id: "", amount: "", payment_method: "", status: ""})
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Agregar pago</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="reservation_id" className="text-sm font-medium text-gray-700">ID Reserva</label>
                        <input
                            type="text"
                            name="reservation_id"
                            value={payment.reservation_id}
                            placeholder="ID Reserva"
                            onChange={(e) => setPayment({...payment, reservation_id: e.target.value})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="amount" className="text-sm font-medium text-gray-700">Monto</label>
                        <input
                            type="number"
                            name="amount"
                            value={payment.amount} 
                            placeholder="Monto"
                            onChange={(e) => setPayment({...payment, amount: parseFloat(e.target.value) || 0})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="payment_method" className="text-sm font-medium text-gray-700">Método de pago</label>
                        <select
                            name="payment_method"
                            value={payment.payment_method}
                            onChange={(e) => setPayment({...payment, payment_method: e.target.value})}
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
                            value={payment.status}
                            onChange={(e) => setPayment({...payment, status: e.target.value})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        >
                            <option value="">Seleccione un estado</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Pagado">Pagado</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">Crear</button>
                </form>
            </div>
        </Modal>
    )
}

export default CreatePaymentModal
