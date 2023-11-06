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
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>

            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>

                    <motion.header {...slideAnimation('down')}>

                        <img src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>


                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'> Let's <br className='xl:block hidden ' /> Do it</h1>
                        </motion.div >


                        <motion.div {...headContentAnimation} className='flex flex-col gap-5' >
                            <p className='max-wd-md font-normal text-gray-500 text-base'> Create your Unique And Exclusive
                                Shirt ith our Brand New 3D custimization tool. <strong>Unleash Your Imagination
                                    {" "}and define your own style</strong>
                            </p>
                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />

                        </motion.div>

                    </motion.div>


                </motion.section>
            )}



        </AnimatePresence>
    )
}

export default Home