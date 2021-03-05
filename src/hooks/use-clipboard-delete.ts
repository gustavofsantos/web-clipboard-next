import { useAuth } from 'contexts/auth-context'
import { useMutation, useQueryClient } from 'react-query'
import { ClipboardItem } from 'types/clipboard'

export function useClipboardDelete() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  return useMutation(
    'clipboardItemDelete',
    (payload: Required<Pick<ClipboardItem, '_id'>>) =>
      fetch('/api/delete/' + payload._id, {
        headers: {
          'Content-Type': 'application/json',
          'x-userid': user.uid
        }
      }).then((res) => res.json()),
      {
        onSuccess: () => {
          queryClient.invalidateQueries('clipboardItems')
        }
      }
  )
}
