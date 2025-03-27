import { useState } from 'react'

import TextInput from './components/TextInput'

function App () {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:3000/urlSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: '67cde72219ef75edee676660',
          longUrl
        })
      })

      const data = await response.json()

      if (data.status) {
        setShortUrl(data.shortUrl)
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (err) {
      console.error(err)
      setError('Error connecting to server')
    } finally {
      setLoading(false)
    }
  }

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
          <TextInput placeholder='Long URL here' value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
        </div>

        {/* Action Button */}
        <button onClick={handleSubmit} className='mb-8 rounded-lg bg-[#27272a] px-6 py-2 text-zinc-300 hover:cursor-pointer hover:bg-zinc-600'>
          {loading ? 'Shortening...' : 'Shorten'}
        </button>

        {/* Short URL Result */}
        {shortUrl && (
          <div className='flex h-16 w-full items-center justify-between rounded-lg bg-amber-900/80 p-3'>
            <p className='mx-auto truncate text-amber-200'>{shortUrl || '••••'}</p>
          </div>
        )}

        {/* ERROR */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </div>
    </div>
  )
}

export default App
