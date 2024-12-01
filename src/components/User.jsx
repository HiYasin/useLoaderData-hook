import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, email, phone} = user;
    return (
        <div className="border border-red-400 rounded-md">
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
        </div>
    );
};



export default User;
User.propTypes = {
    user: PropTypes.object.isRequired,
};