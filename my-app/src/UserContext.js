import React from "react";
import { Children, createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
  
  const [users0, setUsers0] = useState("RED");

  const updateValue = (newValue) => {
    setUsers0(newValue);
  };

  return (
        <>
            <UserContext.Provider
                value={{
                users0,updateValue
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;