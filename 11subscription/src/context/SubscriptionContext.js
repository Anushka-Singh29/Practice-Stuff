import React, { createContext, useState } from "react";

export const initialState = {
    step:1,
    planType:'',
    delivery:'',
    addOns:[],
    userInfo:{name:'', email:''}
}

export const SubscriptionContextProvider = ({children}) =>{

const [formData, setFormData] = useState(initialState);

return (
    <SubscriptionContext.Provider value={{formData, setFormData}}>
        {children}
    </SubscriptionContext.Provider>
)


}

const SubscriptionContext = React.createContext()

export default SubscriptionContext;