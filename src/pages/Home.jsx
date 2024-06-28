import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';


const Home = () => {
  const snap = useSnapshot(state);
  state.intro = false;
  return (
    <AnimatePresence>

      <motion.section className="home" {...slideAnimation('down')}>
      </motion.section>

    </AnimatePresence>
  )
}

export default Home