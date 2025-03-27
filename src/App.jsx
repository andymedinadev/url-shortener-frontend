function App () {
  return (
    <div className='flex flex-col items-center bg-zinc-900'>
      <div className='flex min-h-screen w-full max-w-md flex-col items-center justify-start bg-zinc-900 px-4 pt-32'>
        {/* Logo */}
        <div className='mb-8 flex items-center'>
          <h1 className='text-5xl font-bold text-zinc-400'>Short</h1>
          <h1 className='text-5xl font-bold text-zinc-400'>🔥</h1>
          <h1 className='text-5xl font-bold text-zinc-400'>Links</h1>
        </div>

        {/* Input URL */}
        <div className='mb-8 w-full rounded-lg bg-zinc-800 p-3'>
          <input className='flex h-10 w-full rounded-md border-none bg-transparent px-3 py-2 text-zinc-300 placeholder:text-zinc-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50' />
        </div>

        {/* Action Button */}
        <button className='mb-8 rounded-lg bg-[#27272a] px-6 py-2 text-zinc-300 hover:cursor-pointer hover:bg-zinc-600'>
          Shorten
        </button>

        {/* Short URL Result */}
        <div className='flex h-16 w-full items-center justify-between rounded-lg bg-amber-900/80 p-3'>
          <p className='mx-auto truncate text-amber-200'>••••</p>
        </div>

      </div>
    </div>
  )
}

export default App
