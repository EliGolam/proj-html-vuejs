class InfoCard {
    constructor (title, content, cta) {
        this.title = title;
        this.content = content;
        this.cta = cta || '';
    }
}

const HERO_TEXT = new InfoCard (
    'Fresh & Tasty Bakery Every Day',
    'Cras tempor sit amet tellus a tincidunt. Pellentesque in odio eget felis pellentesque laoreet tristique vitae dolor.',
    'Explore our products'
)


export const PAGE_TEXT_DATA = {
    heroText: HERO_TEXT,
}