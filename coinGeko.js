import axios from 'axios';

export class CoinGeko {
    async getCoinData(coin) {
        var endpoint = `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&community_data=false&developer_data=false`;

        try {
            const {data} = await axios.get(endpoint);
            let obj = {
                current_price: data.market_data.current_price.usd,
                price_change_percentage_24h: data.market_data.price_change_percentage_24h
            }

            return obj
        } catch (error) {
            return error;
        }
    }

    async getCoins(){
        var coins = {
            "elrond-erd-2": "egld", 
            "ethereum": "eth"
        };
        var data = [];

        for(var coinId in coins){
            console.log(coinId);
            let obj = await this.getCoinData(coinId);
            obj.symbol = coins[coinId];
            
            data.push(obj);
        }

        return {coins: data};
    }
}
