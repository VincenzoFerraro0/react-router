import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Posts from './pages/Posts/Posts'

// LAYOUTS
import DefaultLayout from './layout/DefaultLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App