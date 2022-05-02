import * as fs from "fs"

const updateFile = async () => {
  let data = await fs.promises.readFile("data.json")

  data = JSON.parse(data)

  data.datapoint = "four"

  await fs.promises.writeFile("data.json", JSON.stringify(data))
}

try {
  updateFile()
} catch (err) {
  console.log(err)
}
