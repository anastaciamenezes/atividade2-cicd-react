import axios, { AxiosInstance } from 'axios'
import { Player, getPlayers } from '../models/Player'

export class PlayersService {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: 'https://www.balldontlie.io/api/v1/players',
    })
  }

  async findPlayers(name: string): Promise<Player[]> {
    const response = await this._http.get(`?search=${name.trim()}`, {
      validateStatus: (status) => status < 500,
    })

    console.log(response.data)
    const result = getPlayers(response.data)
    return result
  }
}