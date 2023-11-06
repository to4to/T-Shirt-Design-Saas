import React from 'react'

import {state} from '../store'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
    headContainerAnimation,
    headTextAnimation,
    slideAnimation,
    headContentAnimation
} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state)
    return (
       <AnimatePresence>




        
       </AnimatePresence>
    )
}

export default Home