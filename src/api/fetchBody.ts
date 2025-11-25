import type { CelestialBody } from "../types/celestialBody";

const BASE_URL = import.meta.env.VITE_PROXY_URL;

export async function fetchBody(id: string): Promise<CelestialBody> {
    const url = `${BASE_URL}?id=${id}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch celestial body.");
    }

    return res.json() as Promise<CelestialBody>;
}