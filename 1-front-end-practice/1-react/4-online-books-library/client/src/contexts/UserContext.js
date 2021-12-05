import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const addUser = (user) => setUser(user);

    return (
        <UserContext.Provider value={user, addUser}>
            {children}
        </UserContext.Provider>
    );

};

export { UserContext, userProvider };