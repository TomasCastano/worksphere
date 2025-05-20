import React from 'react'
import { Dialog } from '@mui/material'

const modal = ({ children, open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            {children}
        </Dialog>
    )
}

export default modal