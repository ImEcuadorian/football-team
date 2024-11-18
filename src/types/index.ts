export type Team = {
    name: string
    country: string
    coach: Coach
    players: Player[]
}

export type Coach = {
    name: string
    age: number
    experience: number
    isNational: boolean
}

export type Player = {
    name: string
    position: 'Forward' | 'Defender' | 'Midfielder' | 'Goalkeeper'
    age: number
    headline: boolean
}

export type Goalkeeper = Player & {
    position: 'Goalkeeper'
    goalsReceived: number
}

export type Defender = Player & {
    position: 'Defender'
}

export type Midfielder = Player & {
    position: 'Midfielder'
    assists: number
}

export type Forward = Player & {
    position: 'Forward'
    goals: number
}
