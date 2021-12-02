import { Redirect } from "react-router";

import useUser from '../hooks/useUser.js';

const isUser = (WrappedComponent) => {

    const ComponentWrapper = (props) => {

        const { user } = useUser();

        if (!user?.email) return <Redirect to="/login" />;

        return <WrappedComponent {...props} />

    };

    return ComponentWrapper;

};

export default isUser;