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
        <div>Home</div>
    )
}

export default Home