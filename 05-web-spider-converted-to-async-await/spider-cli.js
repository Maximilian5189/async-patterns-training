import { spider } from './spider.js'

// const url = process.argv[2]
const url = 'https://loige.co'

await spider(url)

// spider(url)
//   .then(() => console.log('Download complete'))
//   .catch(err => console.error(err))
