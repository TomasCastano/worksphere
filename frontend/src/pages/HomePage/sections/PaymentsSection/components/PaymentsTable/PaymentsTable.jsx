import PaymentRow from '../PaymentRow/PaymentRow'

const PaymentsTable = ({ payments }) => {
    return (
        <div className="relative overflow-x-auto rounded-md border border-gray-200">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-50 uppercase bg-gray-900">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID Pago</th>
                        <th scope="col" className="px-6 py-3">Monto</th>
                        <th scope="col" className="px-6 py-3">Metodo</th>
                        <th scope="col" className="px-6 py-3">Estado</th>
                        <th scope="col" className="px-6 py-3">Fecha</th>
                        <th scope="col" className="px-6 py-3 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {payments.map((payment) => (
                        <PaymentRow key={payment.id} payment={payment} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PaymentsTable