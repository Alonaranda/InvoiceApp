import PropTypes from 'prop-types';

export const RowItemView = ({product, price, quantify}) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantify}</td>
            </tr>
        </>
    );
}

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantify: PropTypes.number.isRequired
}