# CelestialBody Slice Contract
**Applies to all Planetary & Moon Detail Pages**

---

## Purpose

This document defines the **shared expectations** for any celestial body detail page (planet or moon) added to the Solar System Dashboard.

It ensures:
- consistent UI behavior
- predictable test coverage
- scalable addition of new bodies
- minimal documentation overhead

This contract replaces the need for individual test plans per body.

---

## Scope

This contract applies to:
- all planet detail pages (e.g., Earth, Mars)
- all moon detail pages (e.g., Moon, Io, Phobos)

Unless explicitly stated otherwise, **all new celestial bodies must conform to this contract**.

---

## Design Reference

All celestial body pages **reuse the same layout and wireframes** established in the initial Moon slice.

- No new wireframes are created per body
- Visual differences are limited to:
  - name
  - data values
  - imagery / texture

UI states are consistent across all bodies:
1. Loading
2. Success
3. Error

---

## User Story (Shared)

> As a user,  
> I want to view data about a celestial body  
> so that I can learn its key characteristics in a consistent, readable format.

---

## Shared Acceptance Criteria

Every celestial body page must meet the following criteria:

1. Renders within the global layout (NavBar + footer).
2. Displays a visible page heading identifying the body.
3. Fetches and displays data for exactly one celestial body.
4. Shows Skeleton loaders while data is being fetched.
5. Displays a user-friendly error message on failure.
6. Uses accessible semantic structure and headings.

---

## Required UI Structure

Each page must include:

- Global layout elements:
  - `<header>` (NavBar)
  - footer
- Page content wrapped in:
  - `<main>`
- A primary heading (`h1`) naming the celestial body
- Logical heading hierarchy (`h1` → `h2`)

---

## Required UI States

### Loading State
- MUI Skeleton components are visible
- Real data is not yet displayed
- `aria-busy="true"` is applied appropriately

### Success State
- Skeletons are removed
- Data fields render with labels and units
- Formatting matches shared rules

### Error State
- A clear, user-friendly error message is shown
- No Skeletons or partial data are displayed

---

## Data Contract (Shared)

Each celestial body must provide data conforming to the same logical structure (fields may vary slightly depending on availability).

Commonly rendered fields include:
- Name
- Body type (planet or moon)
- Parent body (if applicable)
- Mass (value + exponent)
- Mean radius
- Gravity
- Orbital period

Tests validate:
- presence of labeled fields
- correct formatting and units

Tests **do not** validate scientific accuracy of values.

---

## Test Requirements (Per Body)

Each celestial body must have a Cypress spec file following this pattern:

```
cypress/e2e/<body>.cy.ts
```

Each spec includes the following required tests:

| ID | Description |
|----|------------|
| XXX-000 | Page renders with layout and heading |
| XXX-001 | Shows loading Skeletons |
| XXX-002 | Displays data on success |
| XXX-003 | Displays error message on failure (or deferred) |
| XXX-004 | Accessibility structure |

Where `XXX` is a short body-specific prefix (e.g., MOON, IO, PHO).

---

## Fixtures & Data Sources

Each body uses one of the following data sources:

- Cypress fixture (`<body>.json`), or
- Temporary local JSON fetch (pre-backend mode)

Fixtures live in:
```
cypress/fixtures/
```

---

## Explicit Non-Goals

Celestial body pages do **not**:
- re-test global navigation
- introduce new layouts or wireframes
- add charts or animations by default
- enforce scientific correctness in tests
- require a standalone test plan document

---

## Documentation Expectations

For new bodies:
- No new test plan is required
- No new wireframes are required

Optional documentation (1–3 lines max) may be added to a README if the body deviates from the standard contract.

---

## Definition of Done (Per Body)

A celestial body slice is considered complete when:
- All required Cypress tests pass
- The page conforms to this contract
- No contract violations are introduced

---

## Summary

This contract establishes a **repeatable, scalable pattern** for adding planets and moons to the Solar System Dashboard.

It enables:
- rapid addition of new bodies
- consistent UX and accessibility
- minimal documentation overhead
- clear test expectations
