export const query = (param) => new Promise((resolve, reject) => {
    console.log(`Query ${param}`)
    setTimeout(() => {
        resolve({data: `additional data for article ${param}`})
    }, 500)
})
