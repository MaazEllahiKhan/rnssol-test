import React, { createContext, useState, useEffect } from "react";


type ContextType = {
    userData: any,
    setUserData: (data: any) => void,
    setToken: (data: any) => void,
    token: string
}

export const CreateGlobalContext = createContext<ContextType>({
    userData: {},
    setUserData: Function,
    setToken: Function,
    token:  ""
});



const GlobalContext = (props: any) => {
    // const [state, setUserData] = useState("")
    const [userData, setUserData] = useState({})
    const [token, setToken] = useState("")

    return (
        <CreateGlobalContext.Provider
            value={{
                userData,
                setUserData,
                setToken,
                token
            }}
        >
            {props.children}
        </CreateGlobalContext.Provider>
    );
};

export default GlobalContext;