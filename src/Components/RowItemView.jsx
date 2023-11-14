import PropTypes from 'prop-types';

export const RowItemView = ({id, product, price, quantify, handlerDelete}) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantify}</td>
                <td><button className='btn btn-danger' onClick={() => {handlerDelete(id)}}>X</button></td>
            </tr>
        </>
    );
}

RowItemView.propTypes = {
    id: PropTypes.any,
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantify: PropTypes.number.isRequired,
    handlerDelete: PropTypes.func.isRequired
}