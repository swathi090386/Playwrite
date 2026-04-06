# 📁 Demo Folder - Complete Test Suite for VWO Login Page

## Project Summary

A comprehensive Playwright test automation suite for the **VWO (Visual Website Optimizer) Login Page** at **https://app.vwo.com/#/login**.

This includes test plans, detailed test cases, automated tests, and specific invalid login scenario testing.

---

## 📂 Files in Demo Folder

### 1. Test Planning & Documentation

#### `TEST_PLAN_LOGIN.md` 
- **Purpose:** Complete test plan for the login page feature
- **Contents:**
  - Project objectives and scope
  - Test strategy and approach
  - Test environment details
  - Entry and exit criteria
  - Risk assessment and mitigation strategies
  - 25 test cases summary table
  - Schedule and deliverables
  - Test execution instructions
  - Defect reporting format

#### `TEST_CASES_LOGIN.md`
- **Purpose:** Detailed test cases (all 25 cases)
- **Contents:**
  - 25 comprehensive test cases (TC_LOGIN_001 through TC_LOGIN_025)
  - Each case includes:
    - Test ID and title
    - Priority level (Critical, High, Medium, Low)
    - Category (Smoke, Functional, Negative, Security)
    - Preconditions
    - Step-by-step instructions
    - Expected results
    - Test data
    - Notes
  - Categories covered:
    - Smoke tests
    - Functional tests (valid login, form validation)
    - Negative tests (empty fields, invalid format)
    - Security tests (SQL injection, XSS, HTTPS)
    - Performance tests
    - Accessibility tests

---

### 2. Invalid Login Test Cases (Specialized)

#### `INVALID_LOGIN_TEST_CASES.md`
- **Purpose:** Detailed test cases for invalid login scenarios (5 key test cases)
- **Format:** Based on test_case_template provided
- **Test Cases:**
  1. **TC-LOGIN-INV-001:** Arabic characters in email
  2. **TC-LOGIN-INV-002:** Chinese characters in email
  3. **TC-LOGIN-INV-003:** SQL injection attempt (⚠️ Critical Security)
  4. **TC-LOGIN-INV-004:** Dummy/fake credentials
  5. **TC-LOGIN-INV-005:** Numeric email + special characters password

- **Each case includes:**
  - TC ID, Title, Priority
  - Preconditions
  - Detailed step-by-step procedure
  - Expected results
  - Test data
  - Notes and insights
  - Security considerations

#### `INVALID_LOGIN_QUICK_REFERENCE.md`
- **Purpose:** Quick reference guide for the 5 invalid login test cases
- **Contents:**
  - Summary table of all 5 test cases
  - Test execution commands
  - Detailed breakdown of each test case
  - Success criteria
  - Test coverage map
  - Key testing insights
  - Expected test results
  - Next steps for execution

---

### 3. Playwright Test Implementation

#### `login.spec.ts`
- **Purpose:** Automated test file for the main 25 login test cases
- **Technology:** Playwright with @playwright/test framework
- **Test Functions:** Automated implementations of TC_LOGIN_001 through TC_LOGIN_024
- **Coverage:**
  - Page element visibility
  - Form validation
  - Password visibility toggle
  - Remember me checkbox
  - Alternative login methods (Google, SSO, Passkey)
  - Security tests (SQL injection, XSS)
  - Responsive design testing
  - Keyboard navigation
  - Email format validation
  - HTTPS verification
- **Run Command:**
  ```bash
  npx playwright test login.spec.ts
  ```

#### `invalid-login.spec.ts`
- **Purpose:** Automated test file for the 5 invalid login scenarios
- **Technology:** Playwright with @playwright/test framework
- **Test Functions:**
  - TC-LOGIN-INV-001: Arabic character handling
  - TC-LOGIN-INV-002: Chinese character handling
  - TC-LOGIN-INV-003: SQL injection prevention
  - TC-LOGIN-INV-004: Dummy credentials error handling
  - TC-LOGIN-INV-005: Invalid format detection
  - VALIDATE: Sensitive info exposure check
- **Features:**
  - Internationalization testing
  - Security vulnerability testing
  - Detailed console logging
  - Error message validation
  - Page state verification
- **Run Command:**
  ```bash
  npx playwright test invalid-login.spec.ts
  ```

---

### 4. Configuration Files

#### `playwright.config.ts`
- **Purpose:** Playwright configuration and setup
- **Includes:**
  - Project configuration for multiple browsers:
    - Chromium
    - Firefox
    - WebKit (Safari)
    - Mobile Chrome
    - Mobile Safari
  - Base URL configuration
  - Reporter settings (HTML)
  - Screenshot and video capture on failure
  - Trace recording on first retry
  - Timeout settings
  - Headless mode configuration

---

### 5. Guides & References

#### `README.md`
- **Purpose:** Complete getting-started guide
- **Contents:**
  - Quick start instructions
  - Installation steps
  - Test running commands
  - Test coverage summary (25 test cases)
  - Test ID reference list
  - Customization guide
  - Element selectors used
  - Troubleshooting section
  - Issue reporting format
  - Useful resources
  - Pre-submission checklist

#### `TEST_EXECUTION_GUIDE.md`
- **Purpose:** Quick reference for test execution
- **Contents:**
  - Quick commands for different scenarios
  - Browser-specific test commands
  - Report generation
  - Execution checklist (pre and post)
  - Test status matrix template
  - Exit criteria tracking
  - Performance baseline setup
  - Cross-browser results table
  - Common issues and solutions
  - Test run summary template

---

### 6. Visual Assets

#### `vwo_login_page_screenshot.png`
- **Purpose:** Screenshot of the VWO login page
- **Shows:** Current state of app.vwo.com/#/login with all UI elements
- **Use:** Reference for understanding page layout and test scenarios

---

## 🎯 Quick Stats

| Metric | Value |
|--------|-------|
| **Total Test Cases** | 25 (main) + 5 (invalid login) = **30 total** |
| **Test Files** | 2 (login.spec.ts, invalid-login.spec.ts) |
| **Documentation Files** | 7 markdown files |
| **Configuration Files** | 1 (playwright.config.ts) |
| **Visual Assets** | 1 screenshot |
| **Browsers Covered** | 5 (Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari) |
| **Test Categories** | Smoke, Functional, Negative, Security, Performance, Accessibility |
| **Security Tests** | 5 (including critical SQL injection) |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd Lecture_Playwright_MCP/demo
npm install @playwright/test@latest
npx playwright install
```

### 2. Run All Tests
```bash
npx playwright test
```

### 3. Run Specific Test Suites
```bash
# Main login tests
npx playwright test login.spec.ts

# Invalid login scenarios
npx playwright test invalid-login.spec.ts

# Specific test case
npx playwright test login.spec.ts -g "TC_LOGIN_001"
```

### 4. Run with UI (Recommended)
```bash
npx playwright test --ui
```

### 5. View Results
```bash
npx playwright show-report
```

---

## 📋 Test Case Organization

### By Priority
| Priority | Count |
|----------|-------|
| **Critical** | 6 |
| **High** | 11 |
| **Medium** | 11 |
| **Low** | 2 |

### By Category
| Category | Count |
|----------|-------|
| **Functional** | 11 |
| **Negative** | 6 |
| **Security** | 5 |
| **Accessibility** | 2 |
| **Performance** | 1 |
| **Cross-Platform** | 5 |

### By Feature
| Feature | Test Cases |
|---------|-----------|
| **Form Fields** | TC_LOGIN_001-006, INV-001-005 |
| **Button Actions** | TC_LOGIN_010-013 |
| **Error Handling** | TC_LOGIN_003-006, INV-001-005 |
| **Security** | TC_LOGIN_014-015, 024-025, INV-003 |
| **Accessibility** | TC_LOGIN_017 |
| **Performance** | TC_LOGIN_018 |
| **Responsiveness** | TC_LOGIN_016 |

---

## 🔐 Security Test Coverage

These test cases specifically validate security:

| Test ID | Security Focus |
|---------|----------------|
| **TC_LOGIN_014** | SQL Injection Prevention |
| **TC_LOGIN_015** | XSS (Cross-Site Scripting) Prevention |
| **TC_LOGIN_024** | HTTPS/SSL Verification |
| **TC_LOGIN_025** | Rate Limiting on Failed Attempts |
| **TC-LOGIN-INV-003** | SQL Injection with Special Chars |

---

## ♿ Accessibility Coverage

Tests that verify accessibility standards:

| Test ID | Focus |
|---------|-------|
| **TC_LOGIN_017** | Keyboard Navigation (Tab Order) |
| **TC_LOGIN_016** | Mobile Responsiveness (Touch Targets) |
| Various | Color Contrast, Focus Indicators |

---

## 🌍 Internationalization Testing

Tests that validate international language support:

| Test ID | Language |
|---------|----------|
| **TC-LOGIN-INV-001** | Arabic (RTL text) |
| **TC-LOGIN-INV-002** | Chinese (Multi-byte characters) |

---

## 📊 Coverage Map

```
VWO LOGIN PAGE TEST SUITE
│
├─ MAIN TEST SUITE (25 cases)
│  ├─ Smoke Tests (1)
│  ├─ Functional Tests (11)
│  │  ├─ Valid/Invalid login
│  │  ├─ Form validation
│  │  ├─ Field interactions
│  │  └─ Alternative login methods
│  ├─ Negative Tests (6)
│  │  ├─ Empty fields
│  │  ├─ Invalid formats
│  │  └─ Wrong credentials
│  ├─ Security Tests (4)
│  │  ├─ SQL Injection
│  │  ├─ XSS
│  │  ├─ HTTPS
│  │  └─ Rate Limiting
│  ├─ Performance (1)
│  ├─ Accessibility (1)
│  └─ Cross-Platform (2)
│
└─ INVALID LOGIN SUITE (5+1 cases)
   ├─ International Characters (2)
   │  ├─ Arabic
   │  └─ Chinese
   ├─ Security Attacks (1)
   │  └─ SQL Injection
   ├─ User Errors (2)
   │  ├─ Fake Credentials
   │  └─ Invalid Format
   └─ Validation (1)
      └─ No Sensitive Info Exposed
```

---

## 📈 Expected Test Results

When executed successfully, you should see:

```
✓ TC_LOGIN_001 - Page elements display
✓ TC_LOGIN_002 - Valid login
✓ TC_LOGIN_003 - Invalid email format
✓ TC_LOGIN_004 - Incorrect password
✓ TC_LOGIN_005 - Empty email field
✓ TC_LOGIN_006 - Empty password field
✓ TC_LOGIN_007 - Password visibility toggle
✓ TC_LOGIN_008 - Remember me checkbox
✓ TC_LOGIN_009 - Forgot password link
✓ TC_LOGIN_010 - Google sign-in
✓ TC_LOGIN_011 - SSO sign-in
✓ TC_LOGIN_012 - Passkey sign-in
✓ TC_LOGIN_013 - Free trial signup
✓ TC_LOGIN_014 - SQL injection prevention
✓ TC_LOGIN_015 - XSS prevention
✓ TC_LOGIN_016 - Mobile responsiveness
✓ TC_LOGIN_017 - Keyboard navigation
✓ TC_LOGIN_018 - Page load performance
✓ TC_LOGIN_019 - Session timeout
✓ TC_LOGIN_020 - Concurrent login
✓ TC_LOGIN_021 - Special characters
✓ TC_LOGIN_022 - Email case sensitivity
✓ TC_LOGIN_023 - Email whitespace trimming
✓ TC_LOGIN_024 - HTTPS security
✓ TC_LOGIN_025 - Rate limiting
✓ TC-LOGIN-INV-001 - Arabic characters
✓ TC-LOGIN-INV-002 - Chinese characters
✓ TC-LOGIN-INV-003 - SQL injection
✓ TC-LOGIN-INV-004 - Fake credentials
✓ TC-LOGIN-INV-005 - Numeric email
✓ VALIDATE - No sensitive info exposed

Total: 31 tests, ~31 passed ✓
```

---

## 🔧 Customization Guide

### Update Base URL
Edit `playwright.config.ts`:
```typescript
use: {
  baseURL: 'https://your-app.com',
}
```

### Add New Test Case
Add to `login.spec.ts` or create new file:
```typescript
test('TC_LOGIN_XXX: Description', async ({ page }) => {
  // Your test code
});
```

### Change Timeout
In `playwright.config.ts`:
```typescript
webServer: {
  timeout: 30000, // 30 seconds
}
```

### Add Custom Reporter
In `playwright.config.ts`:
```typescript
reporter: [
  ['html'],
  ['json', { outputFile: 'results.json' }],
]
```

---

## 🐛 Debugging & Troubleshooting

### Run in Debug Mode
```bash
npx playwright test --debug
```

### Run with Headed Browser
```bash
npx playwright test --headed
```

### Inspector Mode
```bash
npx playwright test --ui
```

### View Network Requests
Tests use `trace: 'on-first-retry'` - traces saved in `trace.zip`

---

## 📞 Support & Resources

### Playwright Docs
- [Official Playwright Docs](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-test)
- [Best Practices](https://playwright.dev/docs/best-practices)

### VWO Resources
- [VWO Application](https://app.vwo.com)
- [VWO Documentation](https://vwo.com)

### In This Suite
- See `README.md` for setup guide
- See `TEST_EXECUTION_GUIDE.md` for running tests
- See `INVALID_LOGIN_QUICK_REFERENCE.md` for invalid login scenarios

---

## ✅ Verification Checklist

Before running tests in production:

- [ ] Playwright and browsers installed
- [ ] Base URL pointing to correct environment
- [ ] Internet connection verified
- [ ] No VPN/proxy blocking
- [ ] All selectors validated on target site
- [ ] Test data prepared (if needed)
- [ ] Execution environment documented
- [ ] README reviewed
- [ ] Security tests understood (especially INV-003)
- [ ] Exit criteria defined

---

## 📝 Document Purposes

| Document | Primary Use | Audience |
|----------|------------|----------|
| TEST_PLAN_LOGIN.md | Test strategy & planning | QA Lead, Manager |
| TEST_CASES_LOGIN.md | Test case library | QA Engineer, BA |
| INVALID_LOGIN_TEST_CASES.md | Invalid scenarios | QA Engineer, Dev |
| login.spec.ts | Test automation | QA Automation |
| invalid-login.spec.ts | Test automation | QA Automation |
| README.md | Getting started | All stakeholders |
| TEST_EXECUTION_GUIDE.md | Daily testing | QA Engineer |
| playwright.config.ts | Test configuration | QA Automation |

---

## 🎓 Learning Resources

This test suite demonstrates:
- ✓ Playwright best practices
- ✓ Test case design patterns
- ✓ BDD-style test naming
- ✓ International language testing
- ✓ Security testing techniques
- ✓ Accessibility testing
- ✓ Performance testing
- ✓ Test documentation standards

---

## 📦 Package Structure

```
demo/
├── TEST_PLAN_LOGIN.md                 # Test plan
├── TEST_CASES_LOGIN.md                # All 25 main test cases
├── INVALID_LOGIN_TEST_CASES.md        # 5 invalid login cases
├── INVALID_LOGIN_QUICK_REFERENCE.md   # Quick reference
├── login.spec.ts                      # Main test automation
├── invalid-login.spec.ts              # Invalid login automation
├── playwright.config.ts               # Config
├── README.md                          # Setup guide
├── TEST_EXECUTION_GUIDE.md            # Execution guide
├── vwo_login_page_screenshot.png      # UI screenshot
└── INDEX_AND_SUMMARY.md               # This file
```

---

## 🚀 Next Steps

1. **Setup:** Follow README.md for installation
2. **Understand:** Read TEST_PLAN_LOGIN.md
3. **Learn:** Review TEST_CASES_LOGIN.md and INVALID_LOGIN_TEST_CASES.md
4. **Execute:** Use TEST_EXECUTION_GUIDE.md to run tests
5. **Debug:** Use Playwright Inspector for troubleshooting
6. **Report:** Analyze HTML reports and document findings
7. **Improve:** Update tests as application changes

---

**Complete Test Suite Created:** March 25, 2026  
**Total Files:** 10 (4 docs + 2 test files + 1 config + screenshots + guides)  
**Test Coverage:** 30+ automated test cases  
**Status:** ✅ Ready for Execution
