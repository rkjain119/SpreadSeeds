## SpreadSeeds

SpreadSeeds is an e-commerce platform for buying plants and pots online. It is built using Next.js, React, and Tailwind CSS, and it uses TypeScript for type checking. The project also uses LocalForage for storing data locally, HeadlessUI for providing a consistent UI across different components, and a Google Spreadsheet for storing and displaying products and orders.

## Tech stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- LocalForage
- HeadlessUI
- Google Spreadsheet

## Features

- User-friendly interface for browsing and purchasing plants and pots
- Responsive design for optimal viewing on any device
- Use HeadlessUI for a consistent UI across different components.
- View and track orders in a separate Google Spreadsheet.
- Store data locally using LocalForage for a faster and offline-friendly experience.
- Serverless API routes for placing orders and storing product information in Google Spreadsheets
- ~~Secure payment processing through Razorpay~~ (WIP)
- ~~AUTH~~(WIP2)

## Data

One of the key features of SpreadSeeds is the use of google-spreadsheet to store and display our products and orders. By visiting /store, customers can browse our selection of plants and pots, and on placing an order, our serverless API routes '`/API/orders`' are used to send the order information to a separate google spreadsheet for easy tracking and management.

### Installation and Google Sheets Setup

To install and run SpreadSeeds locally, follow these steps:

First, enable the sheets' API
- Go to the Google Developers Console
- Select your project or create a new one (and then select it)
- Enable the Sheets API for your project: _ In the sidebar on the left, select APIs Services > Library _ Search for "sheets" _ Click on "Google Sheets API" _ Click the "Enable" button

Then create Credentials

- In the sidebar on the left, select APIs & Services > Credentials Click blue "+ CREATE CREDENTIALS" and select the "Service account" option Enter your name, and description, and click "CREATE"
- Skip permissions, click "CONTINUE"
- Click the "+ CREATE KEY" button
- Select the "JSON" key type option
- Click the "Create" button your JSON key file is generated and downloaded to your machine (it is the only copy!)
- note your service account's email address for `GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL` 
- similarly `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (also available in the JSON key file)

Create two Google Spreadsheets as products and orders Give those column headers as given in the sample sheets, for the products sheet:
https://docs.google.com/spreadsheets/d/13gGg9I-T1uA_060j2JpMgxrDgWJWbTykYovsxD_g3dk/edit?usp=sharing
this is the spreadsheet from where the products at https://spreadseeds.rushab.in/store are loaded
note the id of the spreadsheet between `/d/` and `/edit?usp=sharing` this is your `GOOGLE_SPREADSHEET_ID_PRODUCT`

Similarly for orders
https://docs.google.com/spreadsheets/d/1tPPenQwJnVotEg0A-Td2A4dJlhPyh_7vVXh2LyhWxqc/edit?usp=sharing
this is the sample spreadsheet where all the successfully placed orders go

Clone the repository:

```
git clone https://github.com/rkjain119/spreadseeds.git
```

Navigate to the project directory: `cd spreadsheets Install the dependencies:` npm install`or`yarn install`

Set up the required environment variables. Create a file named .env.local in the root directory of the project and add the following variables:

- GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=<YOUR_GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL>
- GOOGLE_SPREADSHEET_ID_ORDER=<YOUR_GOOGLE_SPREADSHEET_ID_ORDER>
- GOOGLE_SPREADSHEET_ID_PRODUCT=<YOUR_GOOGLE_SPREADSHEET_ID_PRODUCT>
- GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="<YOUR_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY>"

Start the development server:
`npm run dev ` or `yarn dev`
The development server will start at http://localhost:3000.

- Thank you for using SpreadSeeds! hope you enjoy the `code` and also shopping for plants and pots on our platform.

![spreadseed_ight](https://user-images.githubusercontent.com/13982751/209011348-8fc48c15-3e7c-48f8-9036-d54a73b4c923.png)
![spreadseeds_dark](https://user-images.githubusercontent.com/13982751/209011631-aa33da90-300c-4aee-80b7-14f606cc99b7.png)
