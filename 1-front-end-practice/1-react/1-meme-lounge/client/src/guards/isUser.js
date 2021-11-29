import { useUser } from '../context/UserContext.js';

import { Redirect } from 'react-router-dom';

const isUser = (WrappedComponent) => {

    const ComponentWrapper = (props) => {

        const { user } = useUser();

        if (user.username) return <Redirect to="/all-memes" />;

        return <WrappedComponent {...props} />;

    };

    return ComponentWrapper;

};

export default isUser;