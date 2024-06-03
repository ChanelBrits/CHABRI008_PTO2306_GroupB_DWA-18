import  { createStore }  from "./data/store/store"
import { useStore } from "zustand"
import { createApi } from "./components/api/createApi"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./SupaBase/pages/LoginPage"
import SuccessPage from "./SupaBase/pages/SuccessPage"
import { Landing } from "./components/Landing/Landing"
import { HomePage } from "./components/Home/HomePage"

const api = createApi();
console.log(api)
const store = createStore(api);

export const App = () => {
  const phase = useStore(store, (state) => state.phase)
  const previewData = useStore(store, (state) => state.list)

  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route 
        path='/home' 
        element={
        <HomePage
          phase={phase}
          list={previewData}
        />}/>
      </Routes>
    </Router>

    </div>
  )
}