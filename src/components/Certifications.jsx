import React from 'react'
import { CERTIFICATIONS } from '../constants'
import { motion } from 'framer-motion'
export default function Certifications() {
    return (
        <>
            <div className='pb-4'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='my-20 text-center text-4xl'>
                    Certifications
                </motion.h2>
                <div>
                    {CERTIFICATIONS.map((license, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/4'>
                                <p className='mb-2 text-sm text-stone-400'>{license.certificate}</p>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='w-full max-w-xl lg:w-3/4'>
                                <h3 className='mb-2 font-semibold'>{license.school} - {''}
                                    <span className='text-sm text-stone-500'>{license.authority}</span>
                                </h3>
                                <p className='mb-4 text-stone-400'>{license.location}</p>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                            >
                                {license.credential && (
                                    <a href={license.credential}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-stone-500 hover:bg-stone-400 rounded-full p-2 text-sm text-stone-800 mb-1'>
                                        Credential
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
