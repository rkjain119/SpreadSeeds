import { GoogleSpreadsheet } from 'google-spreadsheet'

const productSheet = process.env.GOOGLE_SPREADSHEET_ID_PRODUCT!
const email = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL!
const privatKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
  /\\n/gm,
  '\n'
)
export default async function getProducts(filter = {}) {
  const doc = new GoogleSpreadsheet(productSheet)
  await doc.useServiceAccountAuth({
    client_email: email,
    private_key: privatKey,
  })
  await doc.loadInfo() // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0] // use doc.sheetsById[id]
  // read rows
  const rows = await sheet.getRows() // TODO : pass in { limit, offset }

  // apply filters
  // const filteredRows = rows.filter((row) => {
  //   for (const [key, value] of Object.entries(filter)) {
  //     if (row[key] !== value) {
  //       return false
  //     }
  //   }
  //   return true
  // })

  const productsData = rows?.map(
    ({ _sheet, _rowNumber, _rawData, ...fields }) => ({
      ...fields,
    })
  )

  const categoriesData = [
    ...new Set(productsData.map((product) => product.category)),
  ]
  const catagories = {
    id: 'category',
    name: 'category',
    options: categoriesData?.map((catagories) => ({
      value: catagories,
      label: catagories,
    })),
  }

  const stock = [...new Set(productsData.map((product) => product.stock))]
  const locationsData = [
    ...new Set(productsData.map((product) => product.location)),
  ]
  console.log(locationsData)
  const location = {
    id: 'location',
    name: 'location',
    options: locationsData?.map((location) => ({
      value: location,
      label: location,
    })),
  }
  const sizeData = [...new Set(productsData.map((product) => product.size))]
  const size = {
    id: 'size',
    name: 'size',
    options: sizeData?.map((size) => ({
      value: size,
      label: size,
    })),
  }
  // console.log('FIlTers', 'NOT store', location, stock)
  const filters = [catagories, location, size]

  return { filters, productsData }
}
