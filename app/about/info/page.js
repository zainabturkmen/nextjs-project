import Link from 'next/link'
import React from 'react'

const InfoPage = () => {
  return (
    <div>
      <h1>InfoPage</h1>
      <Link href="/about">About</Link>
    </div>
  );
}

export default InfoPage