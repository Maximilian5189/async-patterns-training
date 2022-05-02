export const query = (article) =>
  new Promise((resolve, reject) => {
    console.log(`Query ${article}`)
    setTimeout(() => {
      reject("err from db")
    }, 500)
  })
