import React from 'react'
import type { SoftSkillProps } from '@/data/skill'; 
import {motion} from 'framer-motion'
import { softSkills } from '@/data/skill';


const SoftSkillCard: React.FC<SoftSkillProps> = ({ icon, title, desc, gradient, delay }) => (

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 backdrop-blur-lg text-center hover:scale-105 transition-transform cursor-default`}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shadow-inner">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
  </motion.div>
);

const SoftSkils = () => {
  return (
    <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-300">
              🧠 Soft Skills
            </h2>
            <p className="text-white/60">Personal attributes that enhance teamwork and leadership</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {
              softSkills.map((item:any, index:number)=>(
                <SoftSkillCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                gradient={item.gradient}
                delay={item.delay}
                />
              ))
            }
          </div>
        </section>
  )
}

export default SoftSkils