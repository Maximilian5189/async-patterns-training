import superagent from "superagent"
import { query } from "./db.js"
// import { query } from "./db-with-err.js" // use this query to test failing test case

const article = "6717516"

const getData = (article) => {
  const url = `https://article-service.dev-eks.dbs.obi.solutions/api/articles/v1/de/de?articleNumbers=${article}`
  let articleData // damit wir articleData nutzen könnten, müssten wir die Variable hier bereits definieren
  return superagent
    .get(url)
    .then((res) => {
      articleData = res.body[0]
      return query(article)
    })
    .then((data) => {
      return { ...articleData, ...data }
    })
}

getData(article)
  .then((data) => console.log("it works:", data))
  .catch((err) => console.log("error encountered:", err))
