// get products by category
import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { NextApiRequest, NextApiResponse } from 'next'

const productSheet = process.env.GOOGLE_SPREADSHEET_ID_PRODUCT!
const email = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL!
const privatKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
  /\\n/gm,
  '\n',
)
export default async function getProductsByCategories(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { category } = req.query
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
  console.log(category)
  const products = rows
    ?.filter((row) => row.category === category)
    .map(({ _sheet, _rowNumber, _rawData, ...fields }) => ({
      ...fields,
    }))
  res.status(200).json(JSON.parse(JSON.stringify(products)))
}
