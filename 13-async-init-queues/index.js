import { db } from './db.js'

db.connect()

async function updateLastAccess (queryNo) {
  await db.query(`INSERT (${Date.now()}) INTO "LastAccesses" // ${queryNo}`)
}

async function main() {
  await updateLastAccess(1) // Promise wird erst aufgelöst, sobald mit DB verbunden
  // updateLastAccess(1) // wenn wir den ersten Query nicht awaiten, werden beide Queries gequeued
  console.log("waited for first query")
  updateLastAccess(2)
}

main()