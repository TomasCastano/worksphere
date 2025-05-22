import { createContext, useState, useEffect, useContext } from "react"
import { getPayments as getPaymentsRequest, getPaymentById as getPaymentByIdRequest, createPayment as createPaymentRequest, updatePayment as updatePaymentRequest, deletePayment as deletePaymentRequest } from "../api/paymentsService"
import Cookies from "js-cookie"

const PaymentsContext = createContext()

export const PaymentsProvider = ({ children }) => {
    const [payments, setPayments] = useState([])
    const [token, setToken] = useState(Cookies.get("token") || null)

    useEffect(() => {
        if (token) {
            getPaymentsRequest().then((data) => {
                setPayments(data)
            })
        } else {
            setPayments([])
        }
    }, [token])

    const getPayments = () => {
        if (token) {
            getPaymentsRequest().then((data) => {
                setPayments(data)
            })
        } else {
            setPayments([])
        }
    }

    const getPaymentById = (id) => {
        return payments.find((payment) => payment.id === id)
    }

    const createPayment = (payment) => {
        createPaymentRequest(payment).then((data) => {
            setPayments([...payments, data])
        })
    }

    const updatePaymentData = (payment, id) => {
        updatePaymentRequest(id, payment).then((data) => {
            setPayments(payments.map(p => p.id === id ? data : p))
        })
    }

    const deletePayment = (id) => {
        deletePaymentRequest(id).then(() => {
            setPayments(payments.filter((payment) => payment.id !== id))
        })
    }

    return (
        <PaymentsContext.Provider value={{
            payments,
            token,
            setPayments,
            getPayments,
            getPaymentById,
            createPayment,
            updatePayment: updatePaymentData,
            deletePayment
        }}>
            {children}
        </PaymentsContext.Provider>
    )
}

export const usePayments = () => useContext(PaymentsContext)