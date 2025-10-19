import React, { useState } from "react";
import UserContext from "./UserContext";

//children is a generic name, that whatever comes pass it on forwards
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (

        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

    )

}

export default UserContextProvider;