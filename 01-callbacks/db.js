export const query = (article, cb) => {
    console.log(`Query ${article}`)
    setTimeout(() => {
        cb(null, {data: `additional data for article ${article}`})
    }, 500)
}
