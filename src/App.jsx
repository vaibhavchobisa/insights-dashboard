import './App.css';
import Sidebar from './components/sidebar/sidebar.component';
import Main from './components/main/main.component';


const App = () => {

  return (
    <div className='app'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='main-container'>
        <Main />
      </div>
    </div>
  )
}

export default App
