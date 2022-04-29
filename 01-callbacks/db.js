export const query = (article, cb) => {
    console.log(`Query ${article}`)
    setTimeout(() => {
        cb(null, {data: `data from db for ${article}`})
    }, 500)
}
