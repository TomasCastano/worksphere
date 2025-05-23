import Modal from '../../../../../../components/Modal/Modal'
import React from 'react'

const UpdateBookingModal = ({ open, setOpen, booking, bookingID, handleUpdateBooking }) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Actualizar reserva</h3>
            </div>
        </Modal>
    )
}

export default UpdateBookingModal