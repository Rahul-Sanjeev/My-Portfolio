import React from 'react'
import { BiLogoDjango, BiLogoPython, BiLogoPostgresql } from 'react-icons/bi'
import { RiReactjsLine, RiGithubFill } from 'react-icons/ri'
import { SiMysql, SiSqlite } from 'react-icons/si'
import { DiJavascript, DiCss3, DiHtml5 } from 'react-icons/di'
import { motion } from 'framer-motion'




export default function Technologies() {
    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    })
    return (
        <>
            <div className='pb-24'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='my-20 text-center text-4xl'>
                    Technologies
                </motion.h2>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className='flex flex-wrap items-center justify-center gap-4'>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        className='text-7xl text-cyan-400'>
                        <RiReactjsLine />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(3)}
                        className='p-4 text-7xl  text-green-600'>
                        <BiLogoDjango />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(5)}
                        className='p-4 text-7xl  text-yellow-300'>
                        <BiLogoPython />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        className='p-4 text-7xl  text-blue-400'>
                        <SiSqlite />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(6)}
                        className='p-4 text-7xl  text-sky-700'>
                        <BiLogoPostgresql />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(4)}
                        className='p-4 text-7xl  text-sky-600'>
                        <SiMysql />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        className='p-4 text-7xl  text-red-600'>
                        <DiHtml5 />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(5)}
                        className='p-4 text-7xl  text-blue-500'>
                        <DiCss3 />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(3)}
                        className='p-4 text-7xl  text-yellow-500'>
                        <DiJavascript />
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(1.5)}
                        className='p-4 text-7xl'>
                        <RiGithubFill />
                    </motion.div>

                </motion.div>
            </div>
        </>
    )
}
