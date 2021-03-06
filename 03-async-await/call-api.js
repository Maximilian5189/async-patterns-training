import superagent from "superagent"
import { query } from "./db.js"
// import { query } from "./db-with-err.js" // use this query to test failing test case

const article = "1000363"

const getData = async (article) => {
  const url = `https://article-service.prod-eks.dbs.obi.solutions/api/articles/v1/de/de?articleNumbers=${article}`
  const res = await superagent.get(url)
  const articleData = res.body[0]
  const data = await query(article)
  return { ...articleData, ...data }
}

// top-level await needs Node Version >= 17
try {
  console.log("it works:", await getData(article))
} catch (err) {
  console.log("error encountered:", err)
}
