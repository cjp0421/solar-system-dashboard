import { type CelestialBody } from '../../types/celestialBody';

type FactRow = {
    label: string;
    value: string | number | null;
    unit?: string;
    explanation?: string;
}

export const buildFactRows = (body: CelestialBody | undefined): FactRow[] => {
    if (!body) return [];

    return [
        {
            label: "Name",
            value: body.englishName,
            explanation: "This is the commonly used name for the object."
        },
        {
            label: "Type",
            value: body.bodyType,
            explanation: "This tells what kind of object it is, such as a planet or a moon."
        },
        {
            label: "Orbits",
            value: body.isPlanet
                ? "The Sun"
                : capitalize(body.aroundPlanet?.planet ?? ""),
            explanation: "This shows what larger object it travels around in space."
        },
        {
            label: "Mass",
            value: `${body.mass.massValue} × 10^${body.mass.massExponent}`,
            unit: "kg",
            explanation: "Mass is the amount of matter that makes up the object."
        },
        {
            label: "Gravity",
            value: body.gravity,
            unit: "m/s²",
            explanation: "Gravity describes how strongly the object pulls things toward its surface."
        },
        {
            label: "Density",
            value: body.density,
            unit: "g/cm³",
            explanation: "Density tells how tightly packed the material inside the object is."
        },
        {
            label: "Mean Radius",
            value: body.meanRadius,
            unit: "km",
            explanation: "Mean radius is the average distance from the center of the object to its surface."
        },
        {
            label: "Orbital Period",
            value: body.sideralOrbit.toFixed(2),
            unit: "days",
            explanation: "The orbital period is how long it takes the object to complete one trip around what it orbits."
        },
        {
            label: "Rotation Period",
            value: body.sideralRotation,
            unit: "hours",
            explanation: "The rotation period is how long it takes the object to spin once on its axis."
        },
        {
            label: "Escape Velocity",
            value: body.escape,
            unit: "m/s",
            explanation: "Escape velocity is the speed needed to completely break free from the object’s gravity."
        }
    ];
};

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
