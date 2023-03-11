/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"
  
  export class CoinGeko {
      static remote = new Remote("https://wofcjrs3awye7quugzjzqhxthe0nyozg.lambda-url.eu-central-1.on.aws/")
  
      static async getCoinData(coin) {
          return CoinGeko.remote.call("CoinGeko.getCoinData", coin)  
      }
  
      static async getCoins() {
          return CoinGeko.remote.call("CoinGeko.getCoins")  
      }
      
      
  }
  
  export { Remote };
  