import React from 'react'
import { Dialog } from '@mui/material'

const Modal = ({ children, open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            {children}
        </Dialog>
    )
}

export default Modal