import PropTypes from 'prop-types';

export const Header = ({title}) => {
    return (
        <>
            <div className="card-header">
                <h1>{title}</h1>
            </div>
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}