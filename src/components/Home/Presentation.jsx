import '../../styles/Presentation.css'

import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Presentation() {

    const sentence = 'CODE MATCH'.split("")

    return (
        <main>
            <div className="img">
                <Spline async scene="https://prod.spline.design/mp0OPL9un8qFXsi4/scene.splinecode" />
            </div>
            <div className="text">
                <span>SOMOS</span>
                <h1>
                    {sentence.map((letter, index) => {
                        return (
                            <motion.span whileHover={{ scale: 1.2, color: '#5CD2C6', cursor: 'pointer' }} key={index}>
                                {letter}
                            </motion.span>
                        )
                    })}
                </h1>
                <h3>DONDE ENCONTRARÁS A TU</h3>
                <h2>WEBSITE DEVELOPER</h2>
            </div>
        </main>
    )
}

export default Presentation