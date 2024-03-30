import * as soap from "tinysoap"

export const init = (url) => {
    return new Promise((resolve, reject) => {
        soap.createClient(url, (err, client) => {
            if (err) return reject(err)
            resolve(client)
        })
    })
}