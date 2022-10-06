class ShopItem {
    constructor (name, category, priceSmall, priceBig) {
        this.name = name || 'Shop Item'; // String
        this.category = category || []; // Array
        this.priceSmall = priceSmall; // Number
        this.priceBig = priceBig; // Number
    }
}

const SHOP_DATA = [];

SHOP_DATA.push(new ShopItem (
    'Choco Chip Cookies',
    ['Cookies', 'Pastries'],
    19,
    39
))

SHOP_DATA.push(new ShopItem (

))