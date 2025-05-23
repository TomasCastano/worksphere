import { useState } from 'react'
import Modal from '../../../../../../components/Modal/Modal'

const CreateBookingModal = ({ open, setOpen, handleCreateBooking }) => {

    const [booking, setBooking] = useState({space: "", user: "", initDate: "", endDate: "", status: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreateBooking(booking)
        setOpen(false)
        setBooking({space: "", user: "", initDate: "", endDate: "", status: ""})
    }

    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Agregar una reserva</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    
                </form>
            </div>
        </Modal>
    )
}

export default CreateBookingModal