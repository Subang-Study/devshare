'use client'

import Btn from '@/components/client/Btn'

export default function Example() {
  return (
    <div className="flex flex-col justify-center w-3/4 gap-4 p-4 mx-auto">
      <div>
        <span className="mb-2 font-bold">Button Components</span>
        <div className="flex justify-between w-full">
          <Btn className="w-48" shape="basic" onClick={() => console.log('click')}>
            basic
          </Btn>
          <Btn className="w-48" shape="border" onClick={() => console.log('click')}>
            border
          </Btn>
          <Btn className="w-48" shape="negative" onClick={() => console.log('click')}>
            negative
          </Btn>
        </div>
      </div>
    </div>
  )
}
