export default function getIpClient(req) {
   const secret = process.env.TRIPLE_K
   if (process.env.NODE_ENV !== 'production') return secret
   const ip = req?.headers['x-forwarded-for'] || req?.headers['x-real-ip']
   return ip?.includes('::ffff:') ? ip.slice(7) : ip
}
