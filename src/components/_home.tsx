import { Header } from './_header';
import { AboutMe } from './_aboutme';
import { MyStack } from './_mystack';
import { Contact } from './_contact';
import styles from '@/styles/index.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpYou } from './_helpyou';
import Loader from './Loader';

export const Home = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.5  // This threshold can be adjusted based on when you want the animation to start
  });

  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  const { ref: myStackRef, inView: myStackInView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  const { ref: helpYouRef, inView: helpYouInView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });
  return (
    <AnimatePresence>
      {/* <motion.div className={styles.section}><Loader /></motion.div> */}
      <motion.div
        variants={{
          hidden: { opacity: 1, y: -75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        transition={{ duration: 0.2, delay: 0 }}
        ref={headerRef}
        className={styles.section}>
        <Header />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 1, x: -75 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={aboutMeInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        ref={aboutMeRef}
        className={styles.section}>
        <AboutMe />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 1, x: 0 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={helpYouInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={helpYouRef}
        className={styles.section}>
        <HelpYou />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 1, x: 0 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={myStackInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={myStackRef}
        className={styles.section}>
        <MyStack />
      </motion.div>


      <motion.div className={styles.section}><Contact /></motion.div>
    </AnimatePresence>
  );
}