export const query = (param, cb) => {
    console.log(`Query ${param}`)
    setTimeout(() => {
        // cb("Error!", {data: "Hello World"})
        cb(null, {data: `additional data for article ${param}`})
    }, 500)
}
