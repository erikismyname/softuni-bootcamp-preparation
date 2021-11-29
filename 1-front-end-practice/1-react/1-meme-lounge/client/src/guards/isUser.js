import { useUser } from '../context/UserContext.js';

import { Redirect } from 'react-router-dom';

const isUser = (WrappedComponent) => {

    const ComponentWrapper = (props) => {

        const { user } = useUser();

        if (!Object.keys(user).length) return <Redirect to="/" />;

        return <WrappedComponent {...props} />;

    };

    return ComponentWrapper;

};

export default isUser;