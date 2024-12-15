// import './App.css';
// import LandingPage from './landingPage';
// import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import FAQs from './mainview/FAQs/FAQs';
// import StepOne from "./loan/stepone/stepone"
// import Loans from './loan/loans/loans';
// import Setting from './settings/setting';
// import Profile from './profile/profile';
// import Layout from './components/layout';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">



//         <Routes>

//           <Route path='/' element={<LandingPage />} />
//           <Route path='/FAQs' element={<FAQs />} />
//           <Route path='/stepone' element={<StepOne />} />
//           <Route path='/loans' element={<Loans />} />
//           <Route path='/setting' element={<Setting />} />
//           <Route path='/profile' element={<Profile />} />
//           <Route path='/details' element={<Layout />} />



//         </Routes>




//       </div>

//     </BrowserRouter>













//   );
// }

// export default App;



import './App.css'
import PageRouter from './router'

function App() {

  return     <PageRouter />

  
}

export default App