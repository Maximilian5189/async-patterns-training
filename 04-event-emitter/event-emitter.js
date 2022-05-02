import EventEmitter from "events"

export class WebShop extends EventEmitter {
  numberOfArticlesBought = 0
  // constructor() {
  //     super();
  // }

  buyArticle(articleName) {
    this.numberOfArticlesBought++
    const currDate = new Date()
    const dateFormatted = `${currDate.getDate()}/${
      currDate.getMonth() + 1
    }/${currDate.getFullYear()}`

    this.emit("articleBought", articleName, dateFormatted, this.numberOfArticlesBought)
  }
}
