import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Main from './Youtube/main'
// import Project from './Spotify/Spotify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Main/>
  {/* <Project/> */}
  </StrictMode>
)
