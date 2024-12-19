import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVidoes from './RecommendedVideos'
import './App.css'
function App() {
  return (

    <div className="app">
        <Header/>
        
        <div className="app_page">
          <Sidebar />
          <RecommendedVidoes/>
        </div>

    </div>
  )
}

export default App;
