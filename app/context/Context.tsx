'use client'

import { createContext ,ReactNode, useState} from "react"
type ModalContextType = {
    initialRender: boolean;
    setInitialRender: React.Dispatch<React.SetStateAction<boolean>>; // Correctly typing the setter function
  };
  

export const ModalContext = createContext<ModalContextType | any>(false);

export const ContextProvider =({children}:any) =>{
    const [initialRender,setInitialRender] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={{initialRender,setInitialRender}}>
            {children}
        </ModalContext.Provider>
    )
}