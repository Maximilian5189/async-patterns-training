import { WebShop } from "./event-emitter.js"

const webShop = new WebShop()

webShop.on("articleBought", (articleName, date, numberOfArticlesBought) => {
  console.log(
    `Article ${articleName} was bought at ${date}. Number of articles bought in total: ${numberOfArticlesBought}`
  )
})

webShop.once("articleBought", () => console.log("article bought"))

webShop.buyArticle("Article 1")
webShop.buyArticle("Article 2")
webShop.buyArticle("Article 1")
console.log("this is the last executed function (events are synchronous")
