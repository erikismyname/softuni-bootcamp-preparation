import { Redirect } from 'react-router';

import useUser from '../hooks/useUser.js';

const isGuest = (WrappedComponent) => {

    const ComponentWrapper = (props) => {

        const { user } = useUser();

        if (user?.email) return <Redirect to="/" />

        return <WrappedComponent {...props} />

    };

    return ComponentWrapper;

};

export default isGuest;