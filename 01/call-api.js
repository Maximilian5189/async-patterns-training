import superagent from 'superagent'
import { query } from './db.js'

const article = "1000363"

const getData = (article, cb) => {
    const url = `https://article-service.prod-eks.dbs.obi.solutions/api/articles/v1/de/de?articleNumbers=${article}`
    superagent.get(url).end((err, res) => {
        const articleData = res.body[0]
        if (err) {
          cb(err)
        } else {
            query(article, (err, data) => {
                if (err) {
                    cb(err)
                } else {
                    cb(null, {...articleData, ...data})
                }
            })
        }
    })
}

getData(article, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('it works:', data)
    }
})