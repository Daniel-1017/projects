import React from 'react'
import { Routes, Route } from 'react-router-dom'

import StackOverviewPage from "./pages/StackOverviewPage"
import StockDetailsPage from "./pages/StockDetailsPage"

const App = () => {
  return (
    <main className='container'>
      <Routes>
        <Route path="/" element={<StackOverviewPage />} />
        <Route path="/detail/:symbol" element={<StockDetailsPage />} />
      </Routes>
    </main>
  )
}

export default App