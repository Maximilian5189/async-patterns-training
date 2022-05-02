export const query = (param) =>
  new Promise((resolve, reject) => {
    console.log(`Query ${param}`)
    setTimeout(() => {
      resolve({ data: `data from db for ${article}` })
    }, 500)
  })
