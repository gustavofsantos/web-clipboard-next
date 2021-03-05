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
    <form onSubmit={handleSubmit}>
      <div>
        <label>item</label>
        <input value={value} onChange={(ev) => setValue(ev.target.value)} />
      </div>

      <button>Create</button>
    </form>
  )
}
