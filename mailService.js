import { MAIL_AUTH_EMAIL, MAIL_AUTH_PASSWORD, MAIL_FROM_NAME, MAIL_FROM_EMAIL } from "./config.js";
import nodemailer from 'nodemailer';

export class MailService {
    async sendEmail(email, content){
        return await this.#send(email, content);
    }

    async #send(email, content){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: MAIL_AUTH_EMAIL,
              pass: MAIL_AUTH_PASSWORD
            }
        });
          
        const mailOptions = {
            from: {
                name: MAIL_FROM_NAME,
                address: MAIL_FROM_EMAIL
            },
            to: email,
            subject: 'New Payment Link Created',
            text: content
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                return error;
            } else {
                return true;
            }
        });
    }
}
