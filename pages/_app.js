import '../styles/globals.css';

// componets 
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion';0


function MyApp({ Component, pageProps }) {
  const router = useRouter(); 
  return(
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'></motion.div>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout> 
);
}

export default MyApp;
