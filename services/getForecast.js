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
      realTime: async (location = 'Trujillo') => {
         const res = await fetch(
            `${BASE_URL_API}/current.json?q=${location}`,
            opts
         )
         const data = await res.json().catch(e => console.log(e))

         return {
            shortDesc: data.current.condition.text,
            temp: [data.current.temp_c, data.current.temp_f],
            location: {
               name: data.location.region
            },
            iconNumber: +data.current.condition.icon.match(/\d{3}/g),
            isDay: data.current.is_day === 1
         }
      },
      getGeolocation: async ip => {
         if (!ip) throw Error('IP is required')
         const res = await fetch(`${BASE_URL_API}/ip.json?q=${ip}`, opts)
         const data = await res.json().catch(e => console.log(e))
         return data.city
      }
   }
}
