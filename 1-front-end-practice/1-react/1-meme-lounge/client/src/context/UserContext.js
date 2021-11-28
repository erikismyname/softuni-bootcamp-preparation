import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const addUser = (user) => setUser(user);

    const value = { userInfo, addUser };

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