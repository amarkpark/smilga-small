import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Link href="/about" class="text-3xl">About</Link>
      <h1 class="text-7xl">HomePage</h1>
    </div>
  )
}

export default HomePage
