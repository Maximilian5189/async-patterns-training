import superagent from 'superagent'
// import { query } from './db.js'
import { query } from './db-with-err.js'

const getData = (article, cb) => {
    const url = `https://article-service.prod-eks.dbs.obi.solutions/api/articles/v1/de/de?articleNumbers=${article}`
    superagent.get(url).end((err, res) => { // end sendet Request
        const articleData = res.body[0]
        if (err) {
          cb(err)
        } else {
            query(article, (err, data) => {
                console.log('query response')
                if (err) {
                    cb(err)
                } else {
                    cb(null, {...articleData, ...data})
                }
            })
        }
    })
}

getData("1000363", (err, data) => {
    if (err) {
        console.log('received an error:', err)
    } else {
        console.log('it works:', data)
    }
})