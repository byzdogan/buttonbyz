import React from 'react'
import { Button } from 'buttonbyz'
import 'buttonbyz/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
    </>
  )
}

export default App
