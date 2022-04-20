import { db } from './db.js'

db.connect()

async function updateLastAccess (queryNo) {
  await db.query(`INSERT (${Date.now()}) INTO "LastAccesses" // ${queryNo}`)
}

async function main() {
  await updateLastAccess(1) // Promise wird erst aufgelöst, sobald mit DB verbunden
  console.log("waited for first query")
  setTimeout(() => {
    updateLastAccess(2)
  }, 600)
}

main()