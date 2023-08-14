import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data.js';

function App() {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-slate-300 overflow-x-hidden overflow-y-auto'>
      <div className='flex flex-col justify-center items-center w-[95%]'>
        <div className='flex flex-col items-center mb-8'>
          <h1 className='font-bold text-3xl'>Our Testimonials</h1>
          <div className='h-1 w-[60%] text-center bg-purple-600'></div>
        </div>
        <Testimonial review={reviews} />
      </div>
    </div>
  );
}

export default App;
