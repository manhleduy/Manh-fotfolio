import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { tools } from '../data/skill'

const Tools: React.FC = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Tools & Technologies
        </h2>

        {/* Git & Docker Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.slice(0, 2).map((tool) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <img
                      src={`/${tool.icon}`}
                      alt={tool.name}
                      className="w-10 h-10 object-contain drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                </div>

                {/* Git Commands */}
                {tool.gitCommands && (
                  <div className="space-y-3">
                    {tool.gitCommands.map((cmd, idx) => (
                      <motion.div
                        key={cmd.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-orange-400/30"
                      >
                        <span className="text-2xl flex-shrink-0">{cmd.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white text-sm">{cmd.name}</p>
                          <p className="text-xs text-white/60 mt-1">{cmd.description}</p>
                          <code className="text-[10px] text-orange-400 font-mono mt-2 block break-words">
                            {cmd.command}
                          </code>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Docker Services */}
                {tool.dockerServices && (
                  <div>
                    <p className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wide">
                      Container Architecture
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {tool.dockerServices.map((service, idx) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20 border border-white/20 hover:border-white/40 transition-all group/service hover:scale-110`}
                        >
                          <img
                            src={`/${service.icon}`}
                            alt={service.name}
                            className="w-8 h-8 object-contain mb-2"
                          />
                          <p className="text-xs font-semibold text-white text-center">
                            {service.name}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sentry & VS Code Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {tools.slice(2).map((tool) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setExpandedTool(tool.name)}
              onMouseLeave={() => setExpandedTool(null)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {tool.name === 'Visual Studio Code' ? (
                      <span className="text-3xl">⚙️</span>
                    ) : (
                      <img
                        src={`/${tool.icon}`}
                        alt={tool.name}
                        className="w-10 h-10 object-contain drop-shadow-lg"
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                </div>

                {/* Advantages Grid */}
                {tool.advantages && (
                  <div className="space-y-2">
                    {tool.advantages.map((advantage, idx) => (
                      <motion.div
                        key={advantage.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-purple-400/30 group/advantage"
                      >
                        <span className="text-2xl flex-shrink-0 group-hover/advantage:scale-125 transition-transform">
                          {advantage.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white text-sm">
                            {advantage.title}
                          </p>
                          <p className="text-xs text-white/60 mt-1">
                            {advantage.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: expandedTool === tool.name ? 1 : 0,
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
