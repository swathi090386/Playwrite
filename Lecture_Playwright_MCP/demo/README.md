# VWO Login Page - Automated Test Suite

This folder contains comprehensive automated tests for the VWO (Visual Website Optimizer) login page located at **https://app.vwo.com/#/login**.

## 📋 Contents

```
demo/
├── TEST_PLAN_LOGIN.md          # Complete test plan document
├── TEST_CASES_LOGIN.md         # Detailed test cases (25 test cases)
├── login.spec.ts               # Playwright automated test file
├── playwright.config.ts        # Playwright configuration
└── README.md                   # This file
```

## 🎯 Test Coverage

The test suite covers the following aspects of the login page:

### ✅ Functional Testing
- Page element visibility and layout
- Email and password input validation
- Form submission with valid credentials
- Password visibility toggle
- Remember me checkbox
- Forgot password navigation
- Alternative login methods (Google, SSO, Passkey)
- Free trial signup link

### 🔒 Security Testing
- SQL Injection prevention
- XSS (Cross-Site Scripting) prevention
- HTTPS verification
- Rate limiting on failed attempts
- Session timeout validation

### 📱 Cross-Platform Testing
- Desktop browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness (iPhone, Android)
- Tablet viewport testing

### ♿ Accessibility Testing
- Keyboard navigation (Tab order)
- Screen reader support
- Focus indicators
- Color contrast validation

### ⚡ Performance Testing
- Page load time measurement
- Resource loading verification

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 2. Installation

```bash
# Navigate to the demo folder
cd Lecture_Playwright_MCP/demo

# Install Playwright
npm install @playwright/test@latest

# Install browsers (required)
npx playwright install
```

### 3. Running Tests

#### Run all tests
```bash
npx playwright test login.spec.ts
```

#### Run specific test by ID
```bash
npx playwright test login.spec.ts -g "TC_LOGIN_001"
```

#### Run tests in a specific browser
```bash
# Chrome only
npx playwright test login.spec.ts --project=chromium

# Firefox only
npx playwright test login.spec.ts --project=firefox

# Safari only
npx playwright test login.spec.ts --project=webkit
```

#### Run tests with UI mode (recommended for development)
```bash
npx playwright test login.spec.ts --ui
```

#### Run with debug mode
```bash
npx playwright test login.spec.ts --debug
```

#### Generate HTML report
```bash
npx playwright test login.spec.ts
npx playwright show-report
```

## 📊 Test Execution Details

### Total Test Cases: 25

| Category | Count | Priority |
|----------|-------|----------|
| Smoke Tests | 1 | Critical |
| Functional Tests | 11 | Critical-Medium |
| Negative Tests | 6 | High-Medium |
| Security Tests | 4 | Critical |
| Accessibility Tests | 1 | Medium |
| Performance Tests | 1 | Low |
| Cross-browser Tests | 1 | Medium |

### Test IDs

```
TC_LOGIN_001  - Page elements display
TC_LOGIN_002  - Valid login
TC_LOGIN_003  - Invalid email format
TC_LOGIN_004  - Incorrect password
TC_LOGIN_005  - Empty email field
TC_LOGIN_006  - Empty password field
TC_LOGIN_007  - Password visibility toggle
TC_LOGIN_008  - Remember me checkbox
TC_LOGIN_009  - Forgot password link
TC_LOGIN_010  - Google sign-in
TC_LOGIN_011  - SSO sign-in
TC_LOGIN_012  - Passkey sign-in
TC_LOGIN_013  - Free trial signup
TC_LOGIN_014  - SQL injection prevention
TC_LOGIN_015  - XSS prevention
TC_LOGIN_016  - Mobile responsiveness
TC_LOGIN_017  - Keyboard navigation
TC_LOGIN_018  - Page load time
TC_LOGIN_019  - Session timeout
TC_LOGIN_020  - Concurrent login
TC_LOGIN_021  - Special characters
TC_LOGIN_022  - Email case sensitivity
TC_LOGIN_023  - Email whitespace trimming
TC_LOGIN_024  - HTTPS security
TC_LOGIN_025  - Rate limiting
```

## 📝 Test Case Documentation

For detailed test cases with step-by-step instructions, expected results, and manual testing procedures, see **TEST_CASES_LOGIN.md**.

Each test case includes:
- Test ID
- Priority level
- Preconditions
- Step-by-step execution steps
- Expected results
- Pass/Fail checkbox
- Notes section

## 🔧 Customization

### Changing Base URL
Edit `playwright.config.ts`:
```typescript
use: {
  baseURL: 'https://app.vwo.com',
  // ...
}
```

### Adding More Tests
Add new test cases to `login.spec.ts`:
```typescript
test('TC_LOGIN_XXX: Description', async ({ page }) => {
  // Your test code
});
```

### Adjusting Timeouts
Modify timeout in `playwright.config.ts`:
```typescript
expect.configure({ timeout: 5000 });
```

## 📋 Element Selectors Used

The tests use the following selector strategies:

```javascript
// Email input
page.locator('input[placeholder*="email" i]')

// Password input
page.locator('input[type="password"]')

// Buttons
page.locator('button:has-text("Sign in")')
page.locator('button:has-text("Google")')
page.locator('button:has-text("SSO")')
page.locator('button:has-text("Passkey")')

// Links
page.locator('a:has-text("Forgot Password")')

// Checkbox
page.locator('input[type="checkbox"]')
```

**Note:** These selectors may need adjustment if the VWO page structure changes.

## 🐛 Troubleshooting

### Tests fail to run
```bash
# Reinstall browsers
npx playwright install --with-deps
```

### Timeout errors
- Increase timeout in test or configuration
- Check internet connection
- Verify app.vwo.com is accessible

### Selector not found
- Update selectors based on page inspection
- Use Playwright Inspector: `npx playwright test --debug`

### Rate limiting errors
- Space out test runs
- Use different browsers/IPs
- Implement delays between failed login attempts

## 📧 Reporting Issues

When reporting test failures, include:
1. Test ID (e.g., TC_LOGIN_001)
2. Browser and OS
3. Error message/screenshot
4. Steps to reproduce
5. Expected vs actual result

## 🔗 Useful Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [VWO Application](https://app.vwo.com)
- [Best Practices](https://playwright.dev/docs/best-practices)

## ✅ Checklist Before Submission

- [ ] All tests run successfully
- [ ] No console errors
- [ ] HTML report generated
- [ ] Screenshots captured for failures
- [ ] Test cases documented
- [ ] Test plan reviewed
- [ ] Coverage goals met (90%+)

## 📞 Support

For questions or issues related to these tests, refer to:
1. TEST_PLAN_LOGIN.md - For planning and scope
2. TEST_CASES_LOGIN.md - For detailed test procedures
3. Playwright debug mode for troubleshooting
4. Browser DevTools for element inspection

---

**Last Updated:** March 25, 2026  
**Version:** 1.0  
**Status:** Ready for Testing
