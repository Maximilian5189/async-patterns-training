import * as fs from 'fs'

const updateFile = (cb) => {
    fs.readFile('data.json', function (err, data) {
        if (err) return cb(err)

        data = JSON.parse(data)
        
        data.datapoint = 'three'
        
        if (true) {
            fs.writeFile('data.json', JSON.stringify(data), (err) => {
                if (err) return cb(err)
            })
        }
    })
}

updateFile((err) => {
    if (err) return console.error(err)
    console.log('Updated data.json')
})