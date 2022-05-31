import { BASE_URL_API, RAPID_API_KEY } from 'utils/constants'

export default function getForecast() {
   const opts = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
         'X-RapidAPI-Key': RAPID_API_KEY
      }
   }
   return {
      forecast: async (location = 'Trujillo') => {
         const res = await fetch(
            `${BASE_URL_API}/forecast.json?q=${location}`,
            opts
         )
         const {
            forecast,
            current,
            location: locationApi
         } = await res.json().catch(e => console.log(e))

         const forecastDay = forecast.forecastday[0]

         return {
            shortDesc: current.condition.text,
            temp: {
               average: [forecastDay.day.avgtemp_c, forecastDay.day.avgtemp_f],
               min: [forecastDay.day.mintemp_c, forecastDay.day.mintemp_f],
               max: [forecastDay.day.maxtemp_c, forecastDay.day.maxtemp_f]
            },
            location: {
               name: locationApi.region,
               country: locationApi.country,
               city: locationApi.name
            },
            iconNumber: +current.condition.icon.match(/\d{3}/g),
            isDay: current.is_day === 1,
            currentDate: locationApi.localtime,
            uv: forecastDay.day.uv,
            humidity: forecastDay.day.avghumidity,
            wind: {
               velocity: forecastDay.day.maxwind_kph,
               direction: current.wind_dir
            },
            feelsLikeC: current.feelslike_c,
            visivility: forecastDay.day.avgvis_km,
            forecastHour: forecastDay.hour.map(item => ({
               temp: item.temp_c,
               hour: item.time_epoch * 1000,
               imgCode: +item.condition.icon.match(/\d{3}/g),
               isDay: item.is_day === 1
            }))
         }
      }
   }
}
