import { db } from "./db.js"

db.connect()

async function updateLastAccess(queryNo) {
  await db.query(`INSERT (${Date.now()}) INTO "LastAccesses" // ${queryNo}`)
}

async function main() {
  await updateLastAccess(1)
  console.log("waited for first query")
  updateLastAccess(2)
}

main()
