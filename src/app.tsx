import { Route, Routes } from 'react-router'
import { Layout } from './components/layout/layout'
import { Home } from './pages/home'

function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
}

export default App
