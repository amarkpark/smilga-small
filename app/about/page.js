// import React from 'react'

import Link from "next/link"

const AboutPage = () => {
  return (
    <div>
      <Link href="/" class="text-3xl">Home</Link>
      <hr />
      <h1 class="text-6xl">AboutPage</h1>
      <div class="px-10 py-10">
        <Link href="/about/info" class="text-3xl">Info</Link>
      </div>
    </div>
  )
}

export default AboutPage