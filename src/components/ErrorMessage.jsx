export function ErrorMessage ({ error }) {
  return (
    <div
      role='alert'
      aria-live='assertive'
      className='relative flex h-16 w-full items-center justify-center rounded-lg bg-[#801c1c]/80 p-3 text-white '
    >
      <p>{error}</p>
    </div>
  )
}
