/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"
  
  export class pdfGeneratorService {
      static remote = new Remote("https://cdmujpyl5y5d3qirfa6ssap4n40fmhjw.lambda-url.eu-central-1.on.aws/")
  
      static async getPdf(data) {
          return pdfGeneratorService.remote.call("pdfGeneratorService.getPdf", data)  
      }
  
      
  }
  
  export { Remote };
  