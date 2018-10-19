import { getProducts, getCategories } from 'services/StoreData';

export function getCategoryFilters() {
    return getCategories();
}

export function getPriceFilters() {
    return [
        {
            id: '0-99.99',
            name: 'Under $100',
        },
        {
            id: '100-249.99',
            name: '$100 - $249',
        },
        {
            id: '250-499.99',
            name: '$250 - $499',
        },
        {
            id: '500-999.99',
            name: '$500 - $999',
        },
        {
            id: '999.99',
            name: 'Over $999',
        },
    ];
}

export function getFilterNameFromId(id) {
    let possibleCategory = getCategoryFilters().filter(category => category.id === id);
    let possiblePrice = getPriceFilters().filter(price => price.id === id);
    if (possibleCategory.length) {
        return possibleCategory[0].name;
    }
    else if (possiblePrice.length) {
        return possiblePrice[0].name;
    }
    else {
        return '';
    }
}

export function getProductsFiltered(type, filterId) {
    switch (type) {
        case 'category':
            return getProductsFilteredByCategory(filterId);
        case 'price':
            return getProductsFilteredByPrice(filterId);
        case 'query':
            return filterProductsByQuery(filterId);
        default:
            throw new Error('Invalid filter type.');
    }
}

export function getProductsFilteredByPrice(filterId) {
    const products = getProducts();

    let [min, max] = filterId.split('-');
    if (max === undefined) max = 10 ** 9;
    min = parseFloat(min);
    max = parseFloat(max);

    return products.filter(product => product.price >= min && product.price <= max);
}

export function getProductsFilteredByCategory(filterId) {
    const products = getProducts();

    return products.filter(product => product.category === filterId);
}

export function filterProductsByQuery(query) {
    const products = getProducts();

    if (query === '') return products;

    return products.filter(product => product.name.toLowerCase().indexOf(query) !== -1);
}
