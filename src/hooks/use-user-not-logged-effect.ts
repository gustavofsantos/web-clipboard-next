import { useAuth } from 'contexts/auth-context'
import { useEffect } from 'react'

export function useUserNotLoggedEffect(onNotLogged?: () => void) {
  const { user } = useAuth()

  useEffect(() => {
    if ((!user) && typeof onNotLogged === 'function') {
      onNotLogged()
    }
  }, [user])
}
