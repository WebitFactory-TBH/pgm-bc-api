/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"
  
  export class pdfGeneratorService {
      static remote = new Remote("http://127.0.0.1:8083/pdfGeneratorService")
  
      static async getPdf(data) {
          return pdfGeneratorService.remote.call("pdfGeneratorService.getPdf", data)  
      }
  
      
  }
  
  export { Remote };
  