export default function getIpClient(req) {
   if (process.env.NODE_ENV !== 'production') return '181.66.142.244'
   const ip = req?.headers['x-forwarded-for'] || req?.headers['x-real-ip']
   return ip?.includes('::ffff:') ? ip.slice(7) : ip
}
