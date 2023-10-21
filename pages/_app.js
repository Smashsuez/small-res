import Layout from '../components/Layout'
import '/styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from 'react-redux';
import store from '@/redux/storelatest';
import 'animate.css';

function App({ Component, pageProps }) {
  useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 800,
		});
   });
  useEffect(() => {
    AOS.refresh()
  }, [])
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}
export default App;
