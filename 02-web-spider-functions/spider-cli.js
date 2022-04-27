import { spider } from './spider.js'

const url = 'https://nodejs.org/api/fs.html'
// const url = process.argv[2]

spider(url, (err, filename, downloaded) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  if (downloaded) {
    console.log(`Completed the download of "${filename}"`)
  } else {
    console.log(`"${filename}" was already downloaded`)
  }
})
