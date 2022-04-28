export const query = (article, cb) => {
    console.log(`Query ${article}`)
    setTimeout(() => {
        cb("Error!", null)
    }, 500)
}
