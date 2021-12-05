import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext.js';

const useUser = () => useContext(UserContext);

export default useUser;