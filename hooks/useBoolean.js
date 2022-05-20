import { useState, useRef } from 'react'

export default function useBoolean(init = false) {
   const [state, setState] = useState(init)
   const objRef = useRef({
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState(prev => !prev)
   })
   return [state, objRef.current]
}
