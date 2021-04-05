import PricePage from './components/PricePage';
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

dotenv.config();

function App() {
  return (
    <Container>
      <PricePage/>
    </Container>
    
  );
}

export default App;
