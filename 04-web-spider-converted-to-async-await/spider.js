import { promises as fsPromises } from 'fs'
import { dirname } from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename } from './utils.js'

async function download (url, filename) {
  console.log(`Downloading ${url}`)
  let content
  const res = await superagent.get(url)
  content = res.text
  await mkdirp(dirname(filename))
  await fsPromises.writeFile(filename, content)
  console.log(`Downloaded and saved: ${url}`)
  return content
}

export async function spider (url) {
  const filename = urlToFilename(url)
  try {
    await fsPromises.access(filename)
  } catch (err) {
    console.log(err)
    if (err.code !== 'ENOENT') {
      throw err
    }
    return await download(url, filename)
  }
}