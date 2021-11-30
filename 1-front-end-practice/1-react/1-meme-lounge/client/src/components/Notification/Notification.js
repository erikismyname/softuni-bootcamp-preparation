const Notification = ({error}) => {

    return (
        <section id="notifications">
            <div id="errorBox" className="notification">
                <span>{error}</span>
            </div>
        </section>
    );

};

export default Notification;