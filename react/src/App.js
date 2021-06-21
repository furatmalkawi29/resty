import Header from './components/header/header'
import Footer from './components/footer/footer.jsx'
import Main from './components/main/main.jsx'

import './design/design.scss'
function App() {
  return (
    <div className="app-style">
      <Header></Header>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;