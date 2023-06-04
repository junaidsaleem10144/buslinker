import * as seedData from "./seed-data"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.city.createMany({
    data: seedData.cities.slice(0, 20),
  })

  const cities = await prisma.city.findMany()

  const trips = await prisma.trip.createMany({
    data: seedData.getFakeTrips({ cities }),
  })

  console.log({ cities, trips })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
