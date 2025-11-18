import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./Layouts/DefaultLayout"
import HomePage from "./Pages/HomePage"
import ProductsPage from "./Pages/ProductsPage"
import AboutUsPage from "./Pages/AboutUsPage"
import ProductPage from "./Pages/ProductPage"
import NotFound from "./Pages/NotFound"
import BudgetContext from "./contexts/BudgetContext"





function App() {

  const [budgetMode, setBudgetMode] = useState(false)





  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Products" element={<ProductsPage />} />
              <Route path="/Products/:id" element={<ProductPage />} />
              <Route path="/AboutUs" element={<AboutUsPage />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
