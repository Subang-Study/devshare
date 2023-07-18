'use client'

import Btn from '@/components/client/Btn'

export default function Example() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Btn className="w-48" shape="basic" onClick={() => console.log('click')}>
        button
      </Btn>
      <Btn className="w-48" shape="border" onClick={() => console.log('click')}>
        button
      </Btn>
      <Btn className="w-48" shape="negative" onClick={() => console.log('click')}>
        button
      </Btn>
    </div>
  )
}
