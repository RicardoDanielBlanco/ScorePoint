import './App.css'
import ScoreSection from './screens/Score-table'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ScoreEdit from './screens/Score-table-edit';
import ScoreProvider from './context/ScoreContext';
import ScoreAdd from './screens/ScoreAdd';


function App() {

  return (
    <>
    <BrowserRouter>
      <ScoreProvider>
        <Routes>
          <Route>
            <Route path='/' element={<ScoreSection />}/>       
            <Route path='/edit' element={<ScoreEdit />}/>      
            <Route path='/add' element={<ScoreAdd />}/>      
          </Route>
        </Routes>
      </ScoreProvider>
    </BrowserRouter>
    </>
  )
}

export default App
