import { createContext, useState } from 'react';

const UserContext = createContext();

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

export { UserContext, UserProvider };