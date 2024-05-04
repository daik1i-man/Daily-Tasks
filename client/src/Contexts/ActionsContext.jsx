import React from "react";
// in this context we will save states of other functions like setting Modal, Dialog, Loading etc
export const ModalContext = React.createContext();
export const LogoutModalContext = React.createContext();
export const openAddSpecialDayModalContext = React.createContext();

export default function ActionsProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [openAddSpecialDayModal, setOpenAddSpecialDayModal] = React.useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      <openAddSpecialDayModalContext.Provider value={{ openAddSpecialDayModal, setOpenAddSpecialDayModal }}>
        {children}
      </openAddSpecialDayModalContext.Provider>
    </ModalContext.Provider>
  );
}
