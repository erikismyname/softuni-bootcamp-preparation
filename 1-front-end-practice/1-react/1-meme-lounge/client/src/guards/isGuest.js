import { useUser } from '../context/UserContext.js';

import { Redirect } from 'react-router-dom';

const isGuest = (WrappedComponent) => {

    const ComponentWrapper = (props) => {

        const { user } = useUser();

        if (!user.username) return <Redirect to="/login" />;

        return <WrappedComponent {...props} />

    };

    return ComponentWrapper;

};

export default isGuest;