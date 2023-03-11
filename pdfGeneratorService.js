import { pipe, gotenberg, convert, html, please } from 'gotenberg-js-client'
import * as fs  from "fs";
import { GOTENBERG_URL } from "./config.js";

export class pdfGeneratorService {

    async getPdf(data) {
        let html = await this.#getHtml();
        
        html = html.replace('{identifier}', data.identifier || '-');
        html = html.replace('{created_at}', data.created_at || '-');
        html = html.replace('{due_date}', data.due_date || '-');
        html = html.replace('{from_name}', data.from_name || '-');
        html = html.replace('{from_address}', data.from_address || '-');
        html = html.replace('{from_wallet_address}', data.from_wallet_address || '-');
        html = html.replace('{bc_name}', data.bc_name || '-');
        html = html.replace('{payment_amount}', data.payment_amount || '-');
        html = html.replace('{coin_symbol}', data.coin_symbol || '-');
        html = html.replace('{receivers}',await this.#getReceiversHtml(data.receivers, data.coin_symbol));

        return await this.#convertToBase64(await this.#fromHtml(html));
    }

    async #fromHtml(source) {
        let stream = await pipe(
            gotenberg(GOTENBERG_URL),
            convert,
            html,
            please
        )(source)

        return this.#streamToString(stream);
    }

    async #streamToString (stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
          stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          stream.on('error', (err) => reject(err));
          stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        })
    }

    async #convertToBase64(string){
        return Buffer.from(string, 'utf8').toString('base64')  
    }

    async #getHtml(){
         return fs.readFileSync('./html-template.html').toString()
    }

    async #getReceiversHtml(receivers, coin_symbol){
        if(typeof receivers == 'undefined') return '';

        let receiversHtml = '';

        for(var i = 0; i < receivers.length; i++){
            receiversHtml += `
            <tr class="item">
                <td>${receivers[i].address}</td>
                <td>${receivers[i].amount} ${coin_symbol}</td>
            </tr>
            `; 
        }

        return receiversHtml;
    }
}
