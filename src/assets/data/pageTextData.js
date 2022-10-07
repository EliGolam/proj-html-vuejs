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
import otherTextData from '@/assets/data/otherTextData.json'



export const PAGE_TEXT_DATA = {
    heroText: new InfoCard (...infoArticleData.heroArticle),
    heroInfo: otherTextData.heroInfo,
    ourProductsText: new InfoCard (...infoArticleData.ourProductsArticle),
}