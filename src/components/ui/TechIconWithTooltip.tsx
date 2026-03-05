import React from 'react'

import type { Tech } from '../../data/project'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './Tooltip'

type Props = {
  tech: Tech
}

const TechIconWithTooltip: React.FC<Props> = ({ tech }) => {

  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="group flex items-center gap-2 p-2 w-50 rounded-md bg-card/20 cursor-pointer hover:bg-card/40 transition-colors">
        <span className="group inline-flex items-center justify-center w-8 h-8 rounded bg-card-border">
          <img src={tech.icon} alt={tech.name} className="w-5 h-5"></img>
        </span>
        <div className="flex flex-col text-sm">
          <span className="text-white font-medium">{tech.name}</span>
          <span className="text-gray-300 text-xs"></span>
        </div>
      </div>
      </TooltipTrigger>
      <TooltipContent>
        <div className="text-left">
      <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
      <p className="text-gray-200 text-xs mb-2">{tech.reason}</p>
      <div className="bg-gray-800 bg-opacity-50 rounded px-2 py-1 text-xs text-gray-300 border-l-2 border-gray-500">
        <code className="text-xs">{tech.snippet}</code>
      </div>
    </div>
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>

    
  )
}

export default TechIconWithTooltip
