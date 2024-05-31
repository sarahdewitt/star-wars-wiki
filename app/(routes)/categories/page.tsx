'use client'
import React from 'react'
import Color from 'color-thief-react'

export default function page({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Color src="/images/planets/Tatooine.jpg" crossOrigin="anonymous" format="hex">
       {
        ({data}) => {
          return (
            <div className={`bg-[${data}]`}>Predominant color: {data}
            {children}
            </div>
          )
        }
       }
       </Color>
    </div>
  )
}
