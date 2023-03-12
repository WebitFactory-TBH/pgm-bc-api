/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"
  
  export class MailService {
      static remote = new Remote("http://127.0.0.1:8083/MailService")
  
      static async sendEmail(email, content) {
          return MailService.remote.call("MailService.sendEmail", email, content)  
      }
  
      
  }
  
  export { Remote };
  