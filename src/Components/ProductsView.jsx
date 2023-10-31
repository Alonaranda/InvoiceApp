import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';

export const ProductsView = ({title, items}) => {

    return (
        <>
            <h2>{title}</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th> PRODUCT </th>
                        <th> PRICE </th>
                        <th> QUANTIFY </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ product, price, quantify }, idx) => {
                        return (
                            <RowItemView
                                key={idx}
                                product={product}
                                price={price}
                                quantify={quantify}
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
    items: PropTypes.array.isRequired
};