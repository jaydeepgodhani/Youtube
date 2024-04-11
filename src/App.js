
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import { Provider } from 'react-redux';
import store from './utils/store';

const routerr = createBrowserRouter([
  {
    path: "/",
    component: <Body />,
  },
  {
    path: "/watch",
    component: <VideoContainer />,
  },
]);

function App() {
  return (
    <Provider store={store} >
      <Body />
    </Provider>
  );
}

export default App;
