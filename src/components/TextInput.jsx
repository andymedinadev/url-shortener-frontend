export function TextInput ({ placeholder, value, onChange, disabled }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className='flex h-10 w-full rounded-md border-none bg-transparent px-3 py-2 text-zinc-300 placeholder:text-zinc-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
    />
  )
}

export default TextInput
