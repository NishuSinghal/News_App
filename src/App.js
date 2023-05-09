// import logo from './logo.svg'; 
import './App.css';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// npm install react-router-dom@6.3.0 
import {
  // BrowserRouter as Router,
  // BrowserRouter as Router,
  Route,
  Routes,
  //  NavLink, 
  BrowserRouter
} from 'react-router-dom'


const App = ()=>{
  //  g='radha'
  const pageSize=5
  const apiKey=process.env.REACT_APP_NEWS_API
 
  const [progress, setProgress] = useState(0)

  

    // console.log(apiKey);
    return (
      <div>
        
        {/* {g} krishna. */}
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar />
          <Routes>
            {/* <Route  path="/"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="general" country="in" category='general' />}> */}
              {/* <News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} category={'science'}/> */}
            {/* </Route> */}
            <Route  path="/science"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="science" country="in" category='science' />}></Route>
            <Route  path="/general"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="general" country="in" category='general' />}></Route>
            <Route  path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="entertainment" country="in" category='entertainment' />}>
            </Route>
            <Route  path="/health"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="health" country="in" category='health' />}>
            </Route>
            <Route  path="/sports"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="sports" country="in" category='sports' />}>
            </Route>
            <Route  path="/technology"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="technology" country="in" category='technology' />}>
            </Route>
            <Route  path="/business"  element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="business" country="in" category='business' />}>
            </Route>

              
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App