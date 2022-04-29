import EventEmitter from "events";

export class WebShop extends EventEmitter {
    numberOfArticlesBought = 0
    // constructor() {
    //     super();
    // }
    
    buyArticle(articleName) {
        this.numberOfArticlesBought++
        const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        this.emit("articleBought", articleName, date, this.numberOfArticlesBought)
    }
}
