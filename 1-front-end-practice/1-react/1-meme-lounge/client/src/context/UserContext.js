import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const addUser = (user) => setUser(user);

    const value = { user, addUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );

};

export {
    useUser,
    UserProvider,
};