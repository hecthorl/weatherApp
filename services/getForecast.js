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
      ipLocation: async (ip = '181.66.142.244') => {
         const res = await fetch(`${BASE_URL_API}/ip.json?q=${ip}`, opts)
         const data = await res.json().catch(e => console.log(e))
         return data
      },
      realTime: async (location = 'london') => {
         const res = await fetch(
            `${BASE_URL_API}/current.json?q=${location}`,
            opts
         )
         const data = await res.json().catch(e => console.log(e))
         return {
            shortDesc: data.current.condition.text,
            temp: [data.current.temp_c, data.current.temp_f],
            location: {
               name: data.location.name
            }
         }
      }
   }
}
