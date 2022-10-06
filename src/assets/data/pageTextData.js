// Classes
class InfoCard {
    constructor (title, content, cta, ctaPath) {
        this.title = title;
        this.content = content;
        this.cta = cta || '';
        this.ctaPath = ctaPath || '#'
    }
}

// Import String Data
import {heroArticle, ourProductsArticle } from '@/assets/data/infoArticleData.json'
import { heroInfo } from '@/assets/data/otherTextData.json'



export const PAGE_TEXT_DATA = {
    heroText: new InfoCard (...heroArticle),
    heroInfo: heroInfo,
    ourProductsText: new InfoCard (...ourProductsArticle),
}