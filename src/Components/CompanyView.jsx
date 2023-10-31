import PropTypes from 'prop-types';

export const CompanyView = ({company, title}) => {
    const {name, fiscalNumber} = company;
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item">Name: {name} </li>
                <li className="list-group-item">FiscalNbr: {fiscalNumber} </li>
            </ul>
        </>
    )
};

CompanyView.propTypes = {
    company: PropTypes.object.isRequired,
    title: PropTypes.string
}

