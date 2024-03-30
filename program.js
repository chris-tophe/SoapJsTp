import { CountryInfoSoapService } from "./modules/country_info_soap_service.js"

export default async function program() {
    console.log('Start')
    const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL'

    const service = new CountryInfoSoapService()
    await service.initialize(url)
    var infos = await service.getFullCountryInfo('FR')
    console.log(infos)
}