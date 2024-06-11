import  { createStore, storeInstance }  from "./data/store/store"
import { useStore } from "zustand"
import { createApi } from "./components/api/createApi"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import LoginPage from "./SupaBase/pages/LoginPage"
import SuccessPage from "./SupaBase/pages/SuccessPage"
import { Landing } from "./components/Landing/Landing"
import { HomePage } from "./components/Home/HomePage"
import { ListView } from "./components/ListView/ListView"
import { ShowView } from "./components/Home/ShowView"

const api = createApi();
const store = createStore(api);

export const App = () => {
  const [selectedAudio, setSelectedAudio] = useState();
  const [selectedEpisode, setSelectedEpisode] = useState();
  const phase = useStore(store, (state) => state.phase)
  const previewData = useStore(store, (state) => state.list)
  const {  show, showPhase } = useStore(storeInstance);

  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route 
          path='/home/*' 
          element={
          <HomePage
            phase={phase}
            list={previewData}
            selectedAudio={selectedAudio}
            setSelectedAudio={setSelectedAudio}
            selectedEpisode={selectedEpisode}
            setSelectedEpisode={setSelectedEpisode}
          />}
        >
          <Route 
            path="show-view" 
            element={
                <ShowView 
                showData={showPhase === "LOADED" ? show : null}
                selectedAudio={selectedAudio}
                setSelectedAudio={setSelectedAudio}
                />
            } 
            />
            <Route 
            path="list-view" 
            element={
                <ListView
                phase={phase}
                list={previewData}
                />
            }
            />
        </Route>
        
      </Routes>
    </Router>

    </>
  )
}