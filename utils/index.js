export const checkImageURL = (url) => {
    if (!url) return false;
    else {
        return true;
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
}