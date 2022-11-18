import { Layout } from 'antd';
import { FC } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App: FC = () => {
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
