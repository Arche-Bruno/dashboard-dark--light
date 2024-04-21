import { useState } from "react"
import { DashboardContext } from "./DashboardContext"




export const DashboardProvider = ({children})=>{

 const [showMenu, setShowMenu] = useState(false);
 const [modeDark,setModeDark]= useState(false);


    return (
        <DashboardContext.Provider
        value={{
            showMenu,
            setShowMenu,
            modeDark,
            setModeDark
        }}
        >

            {children}
        </DashboardContext.Provider>
    )
}