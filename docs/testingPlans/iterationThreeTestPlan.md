# 🌍 Slice 3 – Earth Navigation + Earth View – Cypress Test Plan

## Design Reference

The Earth page reuses the exact same layout and component structure as the Moon page (Slice 1).
No new wireframes are required for this slice.

- Earth-specific differences are limited to:

- Hero text and CTA (config-driven)

- Hero animation/image

- Fetched data values

### Refer to the following Moon wireframes for layout and state behavior:

`docs/wireframes/iteration2/moon-success.png`

`docs/wireframes/iteration2/moon-loading.png`

`docs/wireframes/moon-error.png`

> Hero should use the new **data-driven Hero configuration** rather than Moon-specific elements.  
> Images should come from free sources such as [Pixabay](https://pixabay.com).

---

## 1. Overview

Slice 3 introduces the **Earth feature**.  
This requires:

### **A. Navigation updates** (new global behavior)
- Earth appears on the Landing Page as a selectable celestial body.
- Clicking Earth navigates to `/earth` using client-side routing.

### **B. Earth Page feature slice**
- Dynamic Hero driven by Earth-specific configuration.
- Fetching Earth data via the backend proxy (`/proxy?id=earth` or `/proxy?id=terre`).
- Loading Skeleton UI.
- Success state formatting.
- Error state.
- Accessibility-appropriate layouts.

All Earth tests are new for this slice.

---

## 2. User Story

> **As a user**,  
> I want to navigate to and view data about **Earth**,  
> **so that** I can learn its key characteristics in a layout consistent with the Moon page.

---

## 3. Acceptance Criteria

### Navigation
1. Earth appears under the “Planets” section on the Landing Page.  
2. Clicking Earth navigates to `/earth` without a full page reload.  
3. NavBar and Footer remain visible across routes.

### Earth Page Feature
4. Fetches Earth data through the proxy using `/proxy?id=earth`.  
5. Displays core fields:
   - English name  
   - Gravity  
   - Mass (value × 10^exponent)  
   - Orbital period (`sideralOrbit`)
6. Shows Skeleton loading state before data resolves.  
7. Displays a user-friendly error message on request failure.  
8. Uses the new flexible Hero (config-driven text, CTA, and animation selection).  
9. Uses accessible HTML structure (`<main>`, `<section>`, semantic headings, `aria-busy`).

---

## 4. Test Cases

---

## **A. Navigation Tests (Earth-specific)**

### **NAV-EARTH-001 – Landing Page displays Earth navigation option and clicking “Earth” navigates to `/earth`**

**Steps**
1. Visit `/`.  
2. Assert NavBar is visible.  
3. Assert the **Planets** section is visible.  
4. Assert **Earth** card/button appears under the Planets category.  
5. Assert that Moon and other items still appear.  
6. Assert no Earth data UI appears on the Landing Page.
7. Click on the Earth navigation element.  
8. Assert URL becomes `/earth`.  
9. Assert NavBar remains visible.  
10. Assert placeholder Earth heading renders (prior to Earth feature slice implementation).  

**Expected Result**  
Earth is visible as a new navigable option from the Landing Page. Navigation to `/earth` works with client-side routing and global layout remains intact.

---

## **B. Earth Page Feature Slice Tests**

### **EARTH-000 – Displays Hero section and CTA behavior**

**Steps**
1. Visit `/earth`.  
2. Assert Hero heading matches Earth config (e.g. “Learn More / About Earth”).  
3. Assert Earth-specific animation or image is visible.  
4. Assert CTA button has Earth’s label (config-driven).  
5. Assert CTA target points to `#earth-facts`.  
6. Click CTA.  
7. Assert viewport scrolls or jumps to Earth facts section.

**Expected Result**  
Dynamic Earth Hero renders correctly using configuration, and the CTA behaves as expected.

---

### **EARTH-001 – Displays Earth data successfully**

**Steps**
1. `cy.intercept('GET', '**/proxy?id=earth*', { fixture: 'earth.json' }).as('getEarth')`  
2. Visit `/earth`.  
3. Wait for `@getEarth`.  
4. Assert “Facts About Earth” heading is visible.  
5. Assert Earth data fields show correctly formatted values:
   - Mass  
   - Gravity  
   - Orbital period  
   - English name  
6. Assert no Skeletons remain.  
7. Assert no error message appears.

**Expected Result**  
Earth success state displays accurate values from the fixture.

---

### **EARTH-002 – Shows loading Skeletons while fetching**

**Steps**
1. Intercept with delay (e.g. 1500ms).  
2. Visit `/earth`.  
3. Immediately assert Skeletons are visible.  
4. Assert Earth fields are *not* visible yet.  
5. After request finishes, assert Skeletons disappear and data appears.

**Expected Result**  
Loading state shows Skeletons correctly before success rendering.

---

### **EARTH-003 – Displays user-friendly error message on failure**

**Steps**
1. `cy.intercept('GET', '**/proxy?id=earth*', { statusCode: 500 }).as('getEarthError')`  
2. Visit `/earth`.  
3. Assert visible error message (e.g., “Unable to load data.”)  
4. Assert no Skeletons are present.  
5. Assert no Earth fields are rendered.

**Expected Result**  
Earth error UI displays gracefully.

---

### **EARTH-004 – Uses accessible structure and aria attributes**

**Steps**
1. Stub success fixture.  
2. Visit `/earth`.  
3. Assert `<main>` wraps core Earth content.  
4. Assert `<section>` wraps Earth facts.  
5. Assert Hero uses `h1`; facts section uses `h2`.  
6. During loading, assert `aria-busy="true"`.  
7. After success, assert `aria-busy` is removed.

**Expected Result**  
Earth page uses semantic HTML and follows accessibility best practices.

---

## 5. Fixture

Location:  
`/cypress/fixtures/earth.json`

Example:

```json
{
  "id": "terre",
  "englishName": "Earth",
  "isPlanet": true,
  "mass": {
    "massValue": 5.97237,
    "massExponent": 24
  },
  "gravity": 9.807,
  "sideralOrbit": 365.25
}
```

---

## 6. Notes

- Navigation tests go in:  
  `cypress/e2e/navigation.cy.ts`  
  (append NAV-EARTH-001 and NAV-EARTH-002)
- Earth slice tests go in:  
  `cypress/e2e/earth.cy.ts`
- Dynamic Hero configuration for Earth should be tested through behavior, not implementation detail.

---

## ✔️ Slice 3 Completion Criteria

The slice is complete when:

### Navigation:
- Earth appears on Landing Page  
- Clicking Earth navigates to `/earth` correctly  

### Earth Page:
- Hero renders Earth configuration  
- Loading → success → error tests pass  
- Accessibility structure validated