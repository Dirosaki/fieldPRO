import { httpClient } from './httpClient'

interface IChart {
  degree_days: number
  time: number
  precipitation: number
  ndvi: number
}

export class ChartsService {
  static async get() {
    const { data } = await httpClient.get<IChart[]>('')

    return data
  }
}
