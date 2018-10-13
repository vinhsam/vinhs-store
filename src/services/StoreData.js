import storeData from 'fakeData';

export function getProducts() {
    return storeData.products;
}

export function getFeaturedProduct() {
    const products = getProducts();
    const index = parseInt(Math.random() * products.length, 10);

    return products[index];
}

export function getProductById(id) {
    const products = getProducts();
    return products.find(product => product.id === id);
}

export function getCategories() {
    return storeData.categories;
}
