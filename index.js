require('dotenv').config();
const ccxt = require ('ccxt');

(async function () {
    let tokocrypto = new ccxt.tokocrypto({
        apiKey: process.env.API_KEY,
        secret: process.env.PRIVATE_KEY,
    })
    
    // console.log (tokocrypto.id, await tokocrypto.fetchBalance ())

    // CHECK PRICE
    // request =requests.get("https://www.tokocrypto.com/bapi/asset/v2/public/asset-service/product/get-product-by-symbol?symbol=" + os.getenv("ASSET") + "_USDT")
    // if request.status_code == 200:
    //    json = request.json()
    //     if 'data' in json and 'c' in json["data"]:
    //     print(json['data']['c'])

    // const order = await tokocrypto.createLimitBuyOrder('USDT/IDR', 14, 15500)

    // console.log(order)

    // const order = await tokocrypto.createLimitSellOrder('USDT/IDR', 14, 15501)

    // console.log(order)
}) ();