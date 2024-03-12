import { useQuery } from '@tanstack/react-query'

import { ChartsService } from '@/services/ChartsService'

export function useCharts() {
  const { data, isLoading } = useQuery({
    queryKey: ['graphics'],
    queryFn: ChartsService.get,
  })

  return {
    data,
    isLoading,
  }
}
