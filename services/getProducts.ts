import { GoogleSpreadsheet } from 'google-spreadsheet'

const productSheet = process.env.GOOGLE_SPREADSHEET_ID_PRODUCT!
const email = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL!
const privatKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
  /\\n/gm,
  '\n'
)
export default async function getProducts() {
  const doc = new GoogleSpreadsheet(productSheet)
  await doc.useServiceAccountAuth({
    client_email: email,
    private_key: privatKey,
  })
  await doc.loadInfo() // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0] // use doc.sheetsById[id]
  // console.log(sheet)
  // read rows
  const rows = await sheet.getRows() // TODO : pass in { limit, offset }

  const products = rows?.map(({ _sheet, _rowNumber, _rawData, ...fields }) => ({
    ...fields,
  }))

  // return unique cataegories
  // const categories = products
  //   ?.map((product) => product.category)
  //   .filter((category, index, self) => self.indexOf(category) === index)

  // const products = rows
  // ?.filter((row) => row.category === category)
  // .map(({ _sheet, _rowNumber, _rawData, ...fields }) => ({
  //   ...fields,
  // }))

  const id = [...new Set(products.map((product) => product.id))]
  const categories = [...new Set(products.map((product) => product.category))]
  const type = [...new Set(products.map((product) => product.type))]
  const stock = [...new Set(products.map((product) => product.stock))]
  const size = [...new Set(products.map((product) => product.size))]
  console.log('id', id)
  console.log('categories', categories)
  console.log('type', type)
  console.log('stock', stock)
  console.log('size', size)

  return { categories, products }
}
