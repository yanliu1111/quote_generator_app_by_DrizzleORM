'use client';

import { Poppins, Roboto } from 'next/font/google';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Quote(randomQuote: Quote) {
  const router = useRouter();
  const [fade, setFade] = useState(false); // fadein and out in css

  return (
    <section className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
    </section>
  )
}
