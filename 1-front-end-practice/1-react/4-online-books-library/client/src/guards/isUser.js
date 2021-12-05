import { Redirect } from "react-router";

import useUser from "../hooks/useUser.js";

const isUser = (WrappedComponent) => {

    const WrapperComponent = (props) => {

        const { user } = useUser();

        return (
            !user
                ? <Redirect to="/login" />
                : <WrappedComponent {...props} />
        );

    };

    return WrapperComponent;

};

export default isUser;