import ReactEcharts, { EChartsOption } from 'echarts-for-react'
import { Loader2 } from 'lucide-react'

import { useCharts } from '@/hooks/useCharts'
import { formatDate } from '@/utils/formatDate'
import { formatNumber } from '@/utils/formatNumber'

export function Home() {
  const { data, isLoading } = useCharts()

  const option: EChartsOption = {
    dataZoom: [
      {
        type: 'slider',
        maxSpan: [20],
        start: 80,
        end: 100,
      },
    ],
    legend: {
      data: ['Degree Days', 'Precipitation', 'NDVI'],
    },
    series: [
      {
        type: 'bar',
        name: 'Degree Days',
        yAxisIndex: 0,
        data: data?.map((graph) => graph.degree_days),
        tooltip: {
          valueFormatter: (value: number) => `${formatNumber(value)} °C`,
        },
        barMaxWidth: 100,
        color: {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#0781f3e4',
            },
            {
              offset: 1,
              color: '#07b0f3',
            },
          ],
        },
      },
      {
        type: 'line',
        name: 'Precipitation',
        yAxisIndex: 1,
        data: data?.map((graph) => graph.precipitation),
        tooltip: {
          valueFormatter: (value: number) => `${formatNumber(value)} mm`,
        },
        symbol: 'none',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#00fc697d',
              },
              {
                offset: 1,
                color: '#00fc69',
              },
            ],
          },
        },
        lineStyle: { type: 'dashed', color: '#00fc69' },
      },
      {
        type: 'line',
        name: 'NDVI',
        yAxisIndex: 2,
        data: data?.map((graph) => graph.ndvi),
        smooth: true,
        showSymbol: false,
        lineStyle: { type: 'solid', color: '#f88d4e' },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#777',
        },
      },
    },
    xAxis: {
      type: 'category',
      data: data?.map((graph) => formatDate(graph.time)),
    },
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        position: 'left',
        axisLabel: {
          formatter: '{value} mm',
        },
        axisLine: {
          show: true,
        },
      },
      {
        type: 'value',
        name: 'Degree Days',
        position: 'right',
        axisLabel: {
          formatter: '{value} °C',
        },
        axisLine: {
          show: true,
        },
      },
      {
        type: 'value',
        name: 'NDVI',
        position: 'right',
        color: 'red',
        axisLine: {
          show: true,
          color: 'red',
        },
        offset: 70,
      },
    ],
  }

  return (
    <>
      <header className="flex justify-center py-4">
        <h1 className="text-2xl text-center">
          Desafio Front-End <strong className="font-bold text-[#F74D35]">FieldPRO</strong>
        </h1>
      </header>

      <main className="flex items-center justify-center flex-1 p-8 overflow-x-hidden">
        {isLoading && (
          <Loader2 className="w-full h-full min-w-6 min-h-6 max-w-12 max-h-12 animate-spin text-[#F74D35]" />
        )}
        {!isLoading && <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />}
      </main>
    </>
  )
}
