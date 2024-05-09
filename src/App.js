import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Workouts from './components/Workouts';
import Meals from './components/Meals';
import FullBodyWorkouts from './components/FullBodyWorkouts';
import UpperBodyWorkouts from './components/UpperBodyWorkouts';
import LegsAndGlutesWorkouts from './components/LegsAndGlutesWorkouts';
import CardioAndCoreWorkouts from './components/CardioAndCoreWorkouts';
import BackButton from './components/BackButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/fullBodyWorkouts' element={<FullBodyWorkouts />} />
          <Route path='/upperBodyWorkouts' element={<UpperBodyWorkouts />} />
          <Route path='/legsAndGlutesWorkouts' element={<LegsAndGlutesWorkouts />} />
          <Route path='/cardioAndCoreWorkouts' element={<CardioAndCoreWorkouts />} />
        </Routes>
        <BackButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
