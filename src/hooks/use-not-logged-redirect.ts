import { useRouter } from 'next/router'
import { useUserNotLoggedEffect } from 'hooks/use-user-not-logged-effect'

export function useNotLoggedRedirect() {
  const router = useRouter()

  useUserNotLoggedEffect(() => {
    router.push('/')
  })
}