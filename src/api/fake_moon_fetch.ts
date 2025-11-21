import moon from '../data/moon.json'
import { type CelestialBody } from '../types/celestialBody'

export const fetchMoon = async (): Promise<CelestialBody> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return moon as CelestialBody
}
