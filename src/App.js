import './App.css';
import { FormStateProvider } from './Context/FormContext';
import FormPage from './pages/FormPage';
function App() {
  return (
    <div className='h-screen flex bg-lightgray font-ubuntu'>
      <div className='w-full sm:mx-auto sm:my-auto'>
        <FormStateProvider>
          <FormPage />
        </FormStateProvider>
      </div>
    </div>
  );
}

export default App;
