import {createRoot} from 'react-dom/client';
// importar el componente
import App from './App';




//Utilizar el componente

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(<App/>)