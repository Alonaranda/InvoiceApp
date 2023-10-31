import PropTypes from 'prop-types';


export const ClientView = ({client, title}) => {
    const {name, lastName, address:{city, country, street}} = client;

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item">Name: {name} </li>
                <li className="list-group-item">Last name: {lastName} </li>
                <li className="list-group-item">City/Country: {city}/{country} </li>
                <li className="list-group-item">Street: {street} </li>
            </ul>
        </>
    )
}

ClientView.propTypes = {
    client: PropTypes.object.isRequired,
    title: PropTypes.string
};

