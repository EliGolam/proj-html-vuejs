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
import infoArticleData from '@/assets/data/infoArticleData.json'



export const PAGE_TEXT_DATA = {
    heroText: new InfoCard (...infoArticleData.heroArticle),
    ourProductsText: new InfoCard (...infoArticleData.ourProductsArticle),
    shopPreviewText: new InfoCard (...infoArticleData.shopPreviewArticle), 
    ctaSectionText: new InfoCard (...infoArticleData.ctaSectionArticle),
    socialSectionText: new InfoCard (...infoArticleData.socialSectionArticle)
}