import PropTypes from 'prop-types';

export const InvoiceView = ({id, name, title}) => {

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Name: {name}</li>
            </ul>
        </>
    );
}



InvoiceView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string
};
