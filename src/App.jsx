import React from 'react'
// import Navbar from './components/Navbar'
// import Home from './components/Home'

// function App() {
//   return (
//     <div className='h-screen'>
//       <Navbar/>
//       <Home/>
//     </div>
//   )
// }

// export default App

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Header />

      <div style={{ display: "flex", minHeight: "90vh" }}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;