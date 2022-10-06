class InfoCard {
    constructor (title, content, cta) {
        this.title = title;
        this.content = content;
        this.cta = cta || '';
    }
}

const HERO_TEXT = new InfoCard (
    'The Perfect Fresh Bread',
    'Cras tempor sit amet tellus a tincidunt. Pellentesque in odio eget felis pellentesque laoreet tristique vitae dolor.',
    'Explore our products'
)

const HERO_INFO = 'Fresh & Tasty bakery every day';

const OUR_PRODUCTS_TEXT = new InfoCard (
    'Our Products',
    'All our delectable pastries are baked fresh in our kitchen every morning, and are made with all natural, all organic ingredients.',
    'Start Shopping'
)


export const PAGE_TEXT_DATA = {
    heroText: HERO_TEXT,
    heroInfo: HERO_INFO,
    ourProductsText: OUR_PRODUCTS_TEXT,
}