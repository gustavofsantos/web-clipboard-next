import { useAuth } from 'contexts/auth-context'
import { useMutation, useQueryClient } from 'react-query'
import { ClipboardItem } from 'types/clipboard'

export function useClipboardCreator() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  return useMutation(
    'clipboardItemCreator',
    (payload: Required<Pick<ClipboardItem, 'value'>>): Promise<ClipboardItem> =>
      fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-userid': user.uid
        },
        body: JSON.stringify(payload)
      }).then((res) => res.json()),
      {
        onSuccess: () => {
          queryClient.invalidateQueries('clipboardItems')
        }
      }
  )
}
