/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"
  
  export class MarketDataService {
      static remote = new Remote("https://5tvhojvc665dsy7cb6marzsdny0wtaaw.lambda-url.eu-central-1.on.aws/")
  
      static async getCoins() {
          return MarketDataService.remote.call("MarketDataService.getCoins")  
      }
      
      
  }
  
  export { Remote };
  