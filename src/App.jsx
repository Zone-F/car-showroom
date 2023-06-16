import './App.css'
import useInit from './init';

function App() {
  useInit();
  return (
    <>
      <canvas id='webgl'></canvas>
    </>
  )
}

export default App
