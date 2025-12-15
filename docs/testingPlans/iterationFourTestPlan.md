# Slice 4 – Io Detail Page
## Cypress Test Plan

---

## Design Reference

This slice reuses the **existing Moon wireframes and layout patterns**.

- No new wireframes are created
- Io follows the same UI states as the Moon page:
  - Data section
  - Loading Skeletons
  - Error state
  - Accessible semantic structure

Any differences are content-only (text, images, data), not design changes.

---

## Overview

**Feature:** Io (Moon of Jupiter) detail page  
**Route:** `/io`  
**Iteration:** Slice 4

**Goal:**  
Demonstrate that the Moon page architecture can be reused for additional celestial bodies without new design or structural changes.

---

## User Story

> As a user,  
> I want to view data about **Io**  
> so that I can learn its key physical and orbital characteristics.

---

## Acceptance Criteria

1. Visiting `/io` renders the global layout.
2. The Io page displays a visible heading identifying the body.
3. Io data is rendered using the same formatting rules as the Moon page.
4. Loading Skeletons appear while data is being fetched.
5. A user-friendly error message appears on failure.
6. The page uses accessible semantic structure and headings.

---

## In Scope

- Io detail page UI
- Loading, success, and error states
- Data rendering and formatting
- Accessibility structure
- Cypress end-to-end coverage

---

## Out of Scope

- Global navigation behavior
- New wireframes or layouts
- Animations or charts
- Backend proxy changes

---

## Test Strategy

- Tests live in: `cypress/e2e/io.cy.ts`
- Data source:
  - Cypress fixture: `io.json`
  - OR temporary local JSON fetch (same approach as Moon Slice 1A)
- Tests focus on **behavioral consistency**, not unique Io facts.

---

## Test Cases

### IO-000 – Page renders with layout and heading

**Steps**
1. Visit `/io`.
2. Assert NavBar is visible.
3. Assert a visible heading identifying Io.
4. Assert a `<main>` region exists.

**Expected Result**  
Io page renders correctly within the global layout.

---

### IO-001 – Shows Skeleton loaders while data is fetching

**Steps**
1. Stub Io data request with a delay.
2. Visit `/io`.
3. Assert Skeleton components are visible.
4. Assert Io data is not yet visible.
5. Wait for data to resolve.

**Expected Result**  
Skeletons appear during loading and disappear once data loads.

---

### IO-002 – Displays Io data after successful load

**Steps**
1. Stub Io data request to return `io.json`.
2. Visit `/io`.
3. Wait for data load to complete.
4. Assert labeled data fields are visible.
5. Assert values are formatted with correct units.
6. Assert no Skeletons or error messages are visible.

**Expected Result**  
Io data renders correctly and consistently.

---

### IO-003 – Displays error message on failure

**Steps**
1. Stub Io data request with an error response.
2. Visit `/io`.
3. Assert a visible, user-friendly error message.
4. Assert no Skeletons or partial data are shown.

**Expected Result**  
Io page handles errors gracefully.

**Note:**  
If Io uses a temporary local JSON fetch, this test may be marked *Deferred*.

---

### IO-004 – Accessibility structure

**Steps**
1. Visit `/io` with a successful data response.
2. Assert presence of `<header>` and `<main>`.
3. Assert logical heading order.
4. During loading, assert `aria-busy="true"`.

**Expected Result**  
Io page meets the same accessibility standards as the Moon page.

---

## Fixture – `io.json`

```json
{
  "id": "io",
  "englishName": "Io",
  "isPlanet": false,
  "bodyType": "Moon",
  "aroundPlanet": {
    "planet": "jupiter"
  },
  "mass": {
    "massValue": 8.93,
    "massExponent": 22
  },
  "meanRadius": 1821.6,
  "gravity": 1.796,
  "sideralOrbit": 1.769
}
```

---

## Notes

- Io intentionally inherits the Moon slice structure.
- Any deviations should be documented explicitly.
- This slice validates scalability without redesign.

---

## Summary

Slice 4 confirms the Solar System Dashboard can scale to additional celestial bodies by reusing layout, behavior, and test coverage without unnecessary duplication.