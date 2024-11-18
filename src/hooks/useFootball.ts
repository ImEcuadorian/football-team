import {useContext} from "react";
import {FootballContext} from "../context/FootballContext.tsx";

export const useFootball = () => {
    return useContext(FootballContext);
}
