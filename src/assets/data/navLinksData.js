/* Link Class */
class Link {
    constructor (path, name) {
        this.path = path;
        this.name = name;   
    }
}

const HEADER_LINKS = [];

/* Add Links */
HEADER_LINKS.push(new Link('/', 'home'));
HEADER_LINKS.push(new Link('/shop', 'shop'));
HEADER_LINKS.push(new Link('/about', 'about'));
HEADER_LINKS.push(new Link('/gallery', 'gallery'));
HEADER_LINKS.push(new Link('/locations', 'locations'));
HEADER_LINKS.push(new Link('/journal', 'journal'));
HEADER_LINKS.push(new Link('/contact', 'contact'));

const FOOTER_LINKS = [...HEADER_LINKS];
FOOTER_LINKS.shift();

export const NAV_LINKS = {
    header: HEADER_LINKS,
    footer: FOOTER_LINKS
}

