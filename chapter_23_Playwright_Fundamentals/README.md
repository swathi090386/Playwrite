# Playwright Fundamentals

This chapter covers the fundamentals of Playwright for end-to-end testing.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests in headed mode (visible browser):
  ```bash
  npx playwright test --headed
  ```

- Run specific test file:
  ```bash
  npx playwright test tests/example.spec.ts
  ```

- Run tests in debug mode:
  ```bash
  npx playwright test --debug
  ```

## Configuration

The `playwright.config.ts` file contains the configuration for Playwright, including browser settings, test timeouts, and more.

## Test Structure

Tests are located in the `tests/` directory. Each test file should have a `.spec.ts` extension.

Example test structure:
```typescript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Reporting

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Key Concepts

- **Page**: Represents a single tab in a browser
- **Browser**: Browser instance (Chromium, Firefox, WebKit)
- **Context**: Isolated browser context for tests
- **Locator**: Way to find elements on the page
- **Actions**: Clicking, typing, navigating, etc.

## Best Practices

- Use descriptive test names
- Wait for elements before interacting
- Use assertions to verify expected behavior
- Keep tests independent
- Use page objects for complex scenarios