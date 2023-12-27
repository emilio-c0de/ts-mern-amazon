import React, { FC } from 'react'
import { Alert } from 'react-bootstrap'

type MessageBoxProps = {
    variant?: string
    children: React.ReactNode
}
const MessageBox: FC<MessageBoxProps> = ({ variant = 'info', children }) => {
    return (
        <Alert variant={variant || 'info'}>
            {children}
        </Alert>
    )
}

export default MessageBox