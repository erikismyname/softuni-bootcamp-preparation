import { Redirect } from 'react-router';

import useUser from '../hooks/useUser.js';

const isGuest = (WrappedComponent) => {

    const WrapperComponent = (props) => {

        const { user } = useUser();

        return (
            user
                ? <Redirect to="/catalog" />
                : <WrappedComponent {...props} />
        );

    };

    return WrapperComponent;

};

export default isGuest;