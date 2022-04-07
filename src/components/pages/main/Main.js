import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Buy from '../partials/Buy';
import Info from '../partials/Info';
import NotFound from '../partials/NotFound';

import './main-style.css';


const memBlock = <iframe id="mem" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

function Main() {
  return (
    <main>
      <Router>
          <Routes>
              <Route path="/" element={<Buy />}/>
              <Route path="/vedro" element={<Buy />}/>
              <Route path="/info" element={<Info />}/>
              <Route path="/vedro/info" element={<Info />}/>
              <Route path="/buy" element={memBlock}/>
              <Route path="/vedro/buy" element={memBlock}/>
              <Route exect path="*" element={<NotFound />}/>
          </Routes>
      </Router>
    </main>
  );
}

export default Main;