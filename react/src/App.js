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

/* - HTTP headers let the client and the server
 pass additional information with an HTTP request or response.
 // Request headers 
 // Response headers
 
 Content-Type header : string
 has type of data passed in request or received in response
 Example// text/css, text/html , video/mp4 , application/json 
 
 */
