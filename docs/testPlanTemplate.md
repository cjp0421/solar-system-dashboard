# [Feature Name] – Cypress Test Plan

## Design Reference

Wireframes for **Slice [#] – [Planet/Moon Name] View**

These wireframes illustrate the three main UI states for this feature:
1. **Success** – data loads correctly and displays [Planet/Moon Name] facts  
2. **Loading** – MUI Skeleton placeholders are visible while fetching data  
3. **Error** – user-friendly error message appears if data fails to load  

| State | Preview |
|-------|----------|
| **Success** | ![Slice [#] Wire Frame Success](./wireframes/[planet]-success.png) |
| **Loading** | ![Slice [#] Wire Frame Loading](./wireframes/[planet]-loading.png) |
| **Error** | ![Slice [#] Wire Frame Error](./wireframes/[planet]-error.png) |

> These wireframes are used to visually define the layout and component behavior for this slice.  
> Any Hero images, if applicable, should use free-to-use sources such as [Pixabay](https://pixabay.com).

---

## User Story
> **As a user**, I want to view data about **[Planet/Moon Name]** so that I can learn its key characteristics.

---

## Acceptance Criteria
1. Fetches `/rest/bodies/[planetID]`
2. Displays fields: name, gravity, mass, orbital period
3. Shows Skeleton loading and error states
4. Accessible heading and layout structure (`<main>`, `<section>`, proper headings)

---

## Test Cases
- **[PLANET]-000** – Displays Hero section (if applicable) and CTA behavior  
- **[PLANET]-001** – Displays data successfully  
- **[PLANET]-002** – Shows loading Skeletons while fetching  
- **[PLANET]-003** – Displays user-friendly error message on failure  
- **[PLANET]-004** – Uses accessible structure and aria attributes  

---

## Fixture
- `/cypress/fixtures/[planet].json`

*(Example structure — replace field values as needed)*

    {
      "id": "[planetID]",
      "englishName": "[Planet/Moon Name]",
      "isPlanet": true,
      "mass": {
        "massValue": [value],
        "massExponent": [exponent]
      },
      "gravity": [value],
      "sideralOrbit": [value]
    }

---

## Notes
- Images or design references should live in:  
  `docs/wireframes/[planet]-success.png`, `-loading.png`, `-error.png`
- All tests live in:  
  `cypress/e2e/[planet].cy.ts`
- Fixtures live in:  
  `cypress/fixtures/[planet].json`
