import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL!
const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
  /\\n/gm,
  '\n'
)
const orderSheet = process.env.GOOGLE_SPREADSHEET_ID_ORDER

export default async function createOrder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const doc = new GoogleSpreadsheet(orderSheet)
  await doc.useServiceAccountAuth({
    client_email: serviceEmail,
    private_key: privateKey,
  })
  await doc.loadInfo() // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0] // or use doc.sheetsById[id]

  const {
    email,
    phone,
    address,
    firstName,
    lastName,
    cart,
    city,
    state,
    zip,
    country,
    raw,
  } = req.body
  const order = {
    Item_Name: cart?.map((item: { name: string }) => item.name).join(', '),
    Item_Cost: cart?.map((item: { price: number }) => item.price).join(', '),
    Item_Quantity: cart
      ?.map((item: { quantity: number }) => item.quantity)
      .join(', '),
    Total_Cart_Value: cart?.reduce(
      (acc: number, item: { price: number; quantity: number }) =>
        acc + item.price * item.quantity,
      0
    ),
    Order_Date: new Date().toLocaleString(),
    First_Name: firstName,
    Last_Name: lastName,
    Email: email,
    Phone: phone,
    Address: address,
    City: city,
    State: state,
    Zip: zip,
    Country: country,
    raw: JSON.stringify(raw),
  }

  //  append row
  const row = await sheet.addRow(order)
  // console.log(row);
  res.status(200).json({ status: 200, message: 'Order created successfully' })
}

export interface products {
  id: string
  name: string
  image: string
  description: string
  price: string
  manufacturer: string
  type: string
  quantity: string
  dosage: string
  substance: string
}
