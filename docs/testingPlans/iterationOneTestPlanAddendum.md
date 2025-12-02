# Addendum – Temporary Local JSON Data Source (Iteration 1A)

This addendum documents the temporary approach used in **Iteration 1A**, where the Moon Dashboard fetches **local JSON data** instead of calling the real external API. This allows the frontend to be fully implemented and tested without blocking on backend issues such as CORS or authentication.

---

## 1. Purpose

The real API (`https://api.le-systeme-solaire.net/rest/bodies/lune`) currently fails due to:

- ❌ CORS restrictions  
- ❌ Upcoming need for a Bearer token  
- ❌ Unreliable browser-side access

To keep Iteration 1 moving, we temporarily replace the external API fetch with a **local JSON fixture**.

This enables:

- React Query loading logic  
- MUI Skeleton loaders  
- Success state rendering  
- Stable Cypress tests  
- A complete vertical slice **before** introducing a backend  

This approach is standard in real-world product development where frontend and backend slices are developed incrementally.

---

## 2. Implementation Summary

A local data file is added:

```
src/data/moon.json
```

A “fake fetch” simulates a real network call with a small delay:

```ts
import moon from '../data/moon.json';

export const fetchMoon = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate request delay
  return moon;
};
```

### Why this works

- React Query immediately enters `isLoading: true` → Skeletons render  
- Data resolves after the delay → success state appears  
- The UI and formatting logic remain identical to how they will work later  
- Cypress can test loading and success states without external network calls  
- Swapping to a real backend later does **not** require UI changes  

---

## 3. Impact on Cypress Tests

### ✔️ MD-000 – Hero Section Test  
No changes. This test does not depend on data fetching.

### ✔️ MD-001 – Loading State Test  
Still valid. Since React Query begins in `isLoading`, Skeletons appear.

**No `cy.intercept()` is required yet** because no actual network request is made.

### ✔️ MD-002 – Success Data Test  
Still valid. The UI displays Moon data after the simulated delay.

### ⚠️ MD-003 – Error State Test  
Since no real network request exists, there is currently no way for the fetch to error.

**Status:**  
- Mark MD-003 as *“Deferred until backend is implemented.”*  
- The test file may include a `pending()` placeholder or TODO comment.

---

## 4. Updated Acceptance Criteria (Temporary Adjustment)

| Criterion | Original Intention | Slice 1A Temporary Behavior |
|----------|--------------------|-----------------------------|
| Automatic fetch | Real API | Local JSON via fake fetch |
| Loading state | React Query + Skeleton | Same (works identically) |
| Success state | Real data | JSON fixture with correct schema |
| Error state | Real API failure | **Deferred** |
| Accessibility | Same | Same |

The UI and structure remain unchanged; only the data transport layer is mocked.

---

## 5. How This Fits Into Later Slices

### Slice 2: Small Go Proxy Backend
A lightweight Go Lambda or microservice will:

- Handle the real API request  
- Add the required Authorization header  
- Provide CORS-safe responses to the frontend  

The frontend will then switch from:

```ts
import moon from '../data/moon.json';
```

to:

```ts
fetch('/api/moon');
```

### Slice 3: React Query + Real Network Layer
Only `fetchMoon` changes — the UI and tests remain the same.

### Slice 4: Re-enable MD-003 Error Test
With a real backend, network failures can be intercepted again:

```ts
cy.intercept('GET', '/api/moon', { statusCode: 500 });
```

---

## 6. Architectural Diagram

```
Current (Slice 1A – Local Fixture):

React Query
     ↓
fetchMoon()
     ↓
Local JSON (src/data/moon.json)

--------------------------------------------

Future (Slice 2+ – Real Backend Proxy):

React Query
     ↓
fetchMoon()
     ↓
Go Proxy Backend (/api/moon)
     ↓
External API (le-systeme-solaire)
```

This pattern mirrors professional workflows:  
**frontend builds first using contract fixtures → backend added later**.

---

## 7. Recommended Test File Header

Add this comment at the top of `moon.cy.ts`:

```ts
/**
 * NOTE: Slice 1A – Local JSON Mode
 * --------------------------------
 * - fetchMoon() uses src/data/moon.json instead of a real API call.
 * - MD-000, MD-001, and MD-002 are fully testable.
 * - MD-003 (error state) is deferred until backend proxy exists.
 * - No cy.intercept() is needed yet because fetchMoon does not perform network requests.
 */
```

---

## 8. Summary

This addendum documents the temporary use of a **local JSON fixture** for data retrieval in Iteration 1A. This enables:

- Skeleton loading states  
- Complete success rendering  
- Full Hero + Data slice  
- Cypress TDD flow  
- No backend dependency  

When the Go proxy backend is added, only the data-fetching function changes — all UI, React Query logic, wireframes, and Cypress tests remain valid.
