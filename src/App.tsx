import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from "@/components/button"


function App() {

  return (
    <>
      <Button variant="destructive">shadcn</Button>

        <h1 className="text-red-500 font-bold underline">
          Hello world!
        </h1>
    </>
  )
}

export default App
