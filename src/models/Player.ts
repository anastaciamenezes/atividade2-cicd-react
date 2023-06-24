export interface Player {
  first_name: string
  last_name: string
  position: string
  team_name: string
}


export const getPlayers = (jsonObj: any): Player[]  => {
  const players: Player[] = []

  const { data } = jsonObj
  data.forEach((p: any) => {
    const { first_name, last_name, position, team } = p
    const player: Player = {
      first_name,
      last_name,
      position,
      team_name: team.full_name
    }  

    players.push(player)
  })

  return players
}