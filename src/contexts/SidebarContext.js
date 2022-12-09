import { createContext, useState } from "react";

// create sidebar context
export const SideBarContext = createContext();

const SidebarProvider = ({ children }) => {
  // manage state
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SidebarProvider;
