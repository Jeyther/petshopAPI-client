import './App.css';
import Layout from './layout/Layout';
import Theme from './theme/Theme';
import HomePage from './page/HomePage/Home';

function App() {

  return (
      <Theme>
        <Layout>
          <HomePage/>
        </Layout>
      </Theme>
  );
}

export default App;
