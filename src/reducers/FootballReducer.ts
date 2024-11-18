import {Coach, Defender, Forward, Goalkeeper, Midfielder, Player, Team} from "../types";

export type FootballReducer = {
    type: 'ADD_TEAM'
    payload: {
        team: Team
    }

} | {
    type: 'ADD_PLAYER'
    payload: {
        player: Player
    }

} | {
    type: 'ADD_GOALKEEPER'
    payload: {
        goalkeeper: Goalkeeper
    }

} | {
    type: 'ADD_DEFENDER'
    payload: {
        defender: Defender
    }

} | {
    type: 'ADD_MIDFIELDER'
    payload: {
        midfielder: Midfielder
    }

} | {
    type: 'ADD_FORWARD'
    payload: {
        forward: Forward
    }

} | {
    type: 'ADD_COACH'
    payload: {
        coach: Coach
    }
}

export const initialState = {
    name: '',
    country: '',
    coach: {
        name: '',
        age: 0,
        experience: 0,
        isNational: false
    },
    players: []
}

export const footballReducer = (state: Team , action: FootballReducer) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return {
                ...state,
                name: action.payload.team.name,
                country: action.payload.team.country,
                coach: action.payload.team.coach,
                players: action.payload.team.players
            }
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.payload.player]
            }
        case 'ADD_GOALKEEPER':
            return {
                ...state,
                players: [...state.players, action.payload.goalkeeper]
            }
        case 'ADD_DEFENDER':
            return {
                ...state,
                players: [...state.players, action.payload.defender]
            }
        case 'ADD_MIDFIELDER':
            return {
                ...state,
                players: [...state.players, action.payload.midfielder]
            }
        case 'ADD_FORWARD':
            return {
                ...state,
                players: [...state.players, action.payload.forward]
            }
        case 'ADD_COACH':
            return {
                ...state,
                coach: action.payload.coach
            }
        default:
            return state
    }
}
