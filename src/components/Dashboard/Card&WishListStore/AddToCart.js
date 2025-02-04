const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('add-list');
    return storedCartStr ? JSON.parse(storedCartStr) : [];
};

const getStoredWish = () => {
    const storedWishStr = localStorage.getItem('add-wish');
    return storedWishStr ? JSON.parse(storedWishStr) : [];
};

const addToStoredCart = (product) => {
    const storedCart = getStoredCart();
    if (!storedCart.some((item) => item.product_id === product.product_id)) {
        storedCart.push(product);
        localStorage.setItem('add-list', JSON.stringify(storedCart));
    } else {
        console.log(product.product_id, 'already added');
    }
};

const addToStoredWish = (product) => {
    const storedWish = getStoredWish();
    if (!storedWish.some((item) => item.product_id === product.product_id)) {
        storedWish.push(product);
        localStorage.setItem('add-wish', JSON.stringify(storedWish));
    } else {
        console.log(product.product_id, 'already added');
    }
};

const removeFromStoredCart = (id) => {
    const storedCart = getStoredCart().filter(item => item.product_id !== id);
    localStorage.setItem('add-list', JSON.stringify(storedCart));
};

const removeFromStoredWish = (id) => {
    const storedWish = getStoredWish().filter(item => item.product_id !== id);
    localStorage.setItem('add-wish', JSON.stringify(storedWish));
};

export { addToStoredCart, getStoredWish, addToStoredWish, getStoredCart, removeFromStoredCart, removeFromStoredWish };
