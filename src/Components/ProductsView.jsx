import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';

export const ProductsView = ({title, items, handlerDelete}) => {

    return (
        <>
            <h2>{title}</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th> PRODUCT </th>
                        <th> PRICE </th>
                        <th> QUANTIFY </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantify }, idx) => {
                        return (
                            <RowItemView
                                key={idx}
                                id={id}
                                product={product}
                                price={price}
                                quantify={quantify}
                                handlerDelete={handlerDelete}
                            />
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

ProductsView.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    handlerDelete: PropTypes.func.isRequired
};