/* Link Class */
class Link {
    constructor (name, path) {
        this.name = name;
        this.path = path;
    }
};

const HEADER_LINKS = [];

/* Add Links */
HEADER_LINKS.push(new Link('/', 'home'));
HEADER_LINKS.push(new Link('/shop', 'shop'));
HEADER_LINKS.push(new Link('/about', 'about'));
HEADER_LINKS.push(new Link('/gallery', 'gallery'));
HEADER_LINKS.push(new Link('/locations', 'locations'));
HEADER_LINKS.push(new Link('/journal', 'journal'));
HEADER_LINKS.push(new Link('/contact', 'contact'));

export const NAV_LINKS = {
    header: HEADER_LINKS,
}

