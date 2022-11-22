import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { NextApiRequest, NextApiResponse } from 'next'

const productSheet = process.env.GOOGLE_SPREADSHEET_ID_PRODUCT!
const email = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL!
const privatKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
  /\\n/gm,
  '\n',
)
export default async function getCategories(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const doc = new GoogleSpreadsheet(productSheet)
  await doc.useServiceAccountAuth({
    client_email: email,
    private_key: privatKey,
  })
  await doc.loadInfo() // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0] // use doc.sheetsById[id]
  // console.log(sheet)
  // read rows
  const rows = await sheet.getRows()

  const categories = rows?.map(({ id, category }) => ({
    id,
    category,
  }))
  console.log(categories)
  const arr = Array.from(new Set(categories.map((item: any) => item.category)))
  console.log(arr)
  res.status(200).json(JSON.parse(JSON.stringify(arr)))

  return categories
}
