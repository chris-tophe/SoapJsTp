import {init} from "./tinysoap_client_initializer.js"

export {CountryInfoSoapService}

class CountryInfoSoapService {

    async initialize (url){
        this.client = await init(url)
    }

    explore() { return this.client.describe() }

    getFullCountryInfo(sCountryISOCode) {
        return new Promise((resolve, reject) => {
            this.client.FullCountryInfo({ sCountryISOCode }, (err, result) => {
                if (err) return reject(err)
                resolve(result)
            })
        })
    }
}



