import { useClipboardCreator } from 'hooks/use-clipboard-creator'
import { useEffect, useState } from 'react'

export function ClipboardCreateItem() {
  const [value, setValue] = useState('')
  const mutation = useClipboardCreator()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    mutation.mutate({ value })
  }

  useEffect(() => {
    if (mutation.isSuccess) {
      setValue('')
      mutation.reset()
    }
  }, [mutation.isSuccess])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <textarea
        id="create-item-input"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        className="w-full p-2 rounded border border-gray-200 dark:border-gray-800"
        rows={3}
      />

      <div className="pt-2 pb-2" />

      <button
        className="pt-2 pb-2 pr-4 pl-4 rounded text-bold text-white disabled:opacity-50 dark:text-blue-900 bg-blue-600 dark:bg-blue-300 "
        disabled={mutation.isLoading || !value.length}
      >
        {mutation.isLoading ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}
