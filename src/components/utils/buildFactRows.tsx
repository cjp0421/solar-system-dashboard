import { type CelestialBody } from '../../types/celestialBody';

type FactRow = {
    label: string;
    value: string | number | null;
    unit?: string;
    explanation?: string;
}

export const buildMoonFactRows = (body: CelestialBody | undefined): FactRow[] => {
    if (!body) return [];

    return [
        {
            label: "Name",
            value: body.englishName,
        },
        {
            label: "Type",
            value: body.bodyType,
        },
        {
            label: "Orbits",
            value: body.isPlanet
                ? null
                : capitalize(body.aroundPlanet?.planet ?? ""),
            explanation: "The Moon orbits around Earth.",
        },
        {
            label: "Mass",
            value: `${body.mass.massValue} × 10^${body.mass.massExponent}`,
            unit: "kg",
            explanation: "Mass is the amount of matter in the Moon.",
        },
        {
            label: "Gravity",
            value: body.gravity,
            unit: "m/s²",
            explanation: "Gravity is the acceleration due to gravity on the Moon’s surface.",
        },
        {
            label: "Density",
            value: body.density,
            unit: "g/cm³",
            explanation: "Density measures how compact the Moon’s material is.",
        },
        {
            label: "Mean Radius",
            value: body.meanRadius,
            unit: "km",
            explanation: "Mean radius is the average distance from the Moon’s surface to its center.",
        },
        {
            label: "Orbital Period",
            value: body.sideralOrbit.toFixed(2),
            unit: "days",
        },
        {
            label: "Rotation Period",
            value: body.sideralRotation,
            unit: "hours",
        },
        {
            label: "Escape Velocity",
            value: body.escape,
            unit: "m/s",
            explanation: "Escape velocity is the speed needed to break free from the Moon’s gravity.",
        },
    ];
};

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
