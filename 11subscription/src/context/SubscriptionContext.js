import React, { createContext, useState } from "react";

export const initialState = {
    step:1,
    planType:'',
    delivery:'',
    addOns:[],
    userInfo:{name:'', email:''}
}

const SubscriptionContextProvider = ({children}) =>{
    
const [formData, setFormData] = useState(initialState);


}
export default SubscriptionContextProvider;

const SubscriptionContext = React.createContext()

export default SubscriptionContext;