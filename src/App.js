import './App.css';
import { FormStateProvider } from './Context/FormContext';
import FormPage from './pages/FormPage';
function App() {
  return (
    <div className='h-screen bg-lightgray font-ubuntu'>
      <FormStateProvider>
        <FormPage />
      </FormStateProvider>
    </div>
  );
}

export default App;
