import './layout/app.css';
import PageLayout from './layout/page-layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route index element={'Login'} />
        <Route path="/dashboard" element={'Dashboard'} />
      </Routes>
    </PageLayout>
  );
}

export default App;
