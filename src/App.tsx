import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from "@/components/button"


function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-secondary">
      <Button variant="destructive">shadcn</Button>

        <h1 className="bg-background font-bold underline">
          Hello world!
        </h1>
    </div>
  )
}

export default App
