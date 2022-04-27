import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename } from './utils.js'

export function spider (url, cb) {
  const filename = urlToFilename(url)
  fs.access(filename, err => { // prüfen ob URL schon runtergeladen wurde
    if (err && err.code === 'ENOENT') { // wenn ENOENT, dann wurde URL noch nicht runtergeladen
      console.log(`Downloading ${url} into ${filename}`)
      superagent.get(url).end((err, res) => { // Download
        if (err) {
          cb(err)
        } else {
          const filePath = path.dirname(filename)
          mkdirp(filePath, err => { // Ordner erstellen
            if (err) {
              cb(err)
            } else {
              fs.writeFile(filename, res.text, err => { // File schreiben
                if (err) {
                  cb(err)
                } else {
                  cb(null, filename, true)
                }
              })
            }
          })
        }
      })
    } else {
      cb(null, filename, false)
    }
  })

}
