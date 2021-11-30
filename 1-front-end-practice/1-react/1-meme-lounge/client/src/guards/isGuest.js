import { useUser } from '../context/UserContext.js';

import { Redirect } from 'react-router-dom';

const isGuest = (WrappedComponent) => {

    const ComponentWrapper = (props) => {

        const { user } = useUser();

        console.log(user);

        if (Object.keys(user).length) return <Redirect to="/all-memes" />;

        return <WrappedComponent {...props} />

    };

    return ComponentWrapper;

};

export default isGuest;