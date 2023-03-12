/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
   
  import { Remote } from "./remote.js"
  
  export class MailService {
      static remote = new Remote("https://3sa4tfqdw3uzj3xnbnokjbib7y0vfrii.lambda-url.eu-central-1.on.aws/")
  
      static async sendEmail(email, content) {
          return MailService.remote.call("MailService.sendEmail", email, content)  
      }
  
      
  }
  
  export { Remote };
  