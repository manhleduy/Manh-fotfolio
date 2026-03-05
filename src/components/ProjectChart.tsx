import React, { useEffect, useRef } from 'react'
import { BarElement, CategoryScale, LinearScale, Tooltip as ChartTooltip, Legend } from 'chart.js'
import {Chart} from 'chart.js/auto'
import type { Project } from '../data/project'
import { LinkIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from './ui/Tooltip'

Chart.register(BarElement, CategoryScale, LinearScale, ChartTooltip, Legend)

type Props = { project: Project }

const colors = [
  '#EC4899',
  '#A855F7',
  '#8B5CF6',
  '#6366F1'
]

const ProjectChart: React.FC<Props> = ({ project }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const chartRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const sorted = [...project.languages].sort((a, b) => b.value - a.value)
    const labels = sorted.map(t => t.name)
    const dataValues = sorted.map(t => t.value)

    const backgroundColor = dataValues.map((_, i) => colors[i % colors.length])

    if (chartRef.current) chartRef.current.destroy()

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: 'Ngôn ngữ sử dụng%',
            data: dataValues,
            backgroundColor: backgroundColor,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            borderRadius: 4,
            borderSkipped: false,
            barThickness: 'flex',
            minBarLength: 2
          }
        ]
      },
      options: {
        indexAxis: 'y' as const,
        responsive: true,
        plugins: {
          legend: { 
            display: true,
            position: 'bottom' as const,
            labels: {
              color: 'rgba(255,255,255,0.8)',
              usePointStyle: true,
              padding: 15
            }
          },
          tooltip: { 
            enabled: true,
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 8,
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(255,255,255,0.2)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)',
              font: { size: 12 } as any
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            } as any
          },
          y: {
            ticks: {
              color: 'rgba(255, 255, 255, 0.8)',
              font: { size: 12, weight: 500 } as any
            },
            grid: {
              display: false,
              drawBorder: false
            } as any
          }
        },
        maintainAspectRatio: false
      }
    })

    return () => chartRef.current?.destroy()
  }, [project])

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full h-64 md:h-80">
        <canvas ref={canvasRef} />
      </div>
      
      {project.links?.livedemo ?  (
        <a
          href={project.links.livedemo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
        >
          <LinkIcon className="w-4 h-4" />
          live demo
        </a>
      ):
      
    <TooltipProvider >
      <Tooltip>
        <TooltipTrigger>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-800 to-purple-900 text-white font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm">
          <LinkIcon className="w-4 h-4" />
          live demo
        </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon...</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
 

     
    }
    </div>
  )
}

export default ProjectChart
