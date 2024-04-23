import React from 'react'

export const ModalContext = React.createContext();

export default function Provider({ children }) {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </ModalContext.Provider>
    )
}
