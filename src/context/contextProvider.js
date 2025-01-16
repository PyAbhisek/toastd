import { createContext,useState } from "react";

export const AppContext = createContext()

export const ContextProvider = ()=>{
    const [audioMute, setAudioMute] = useState(false)

}