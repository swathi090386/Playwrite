# Test Plan: VWO Login Page

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Testing Team |
| **Date** | March 25, 2026 |
| **Environment** | Production (app.vwo.com) |
| **Browser** | Chrome, Firefox, Safari, Edge |

---

## 1. Introduction

This test plan describes the testing approach for the **VWO Login Page**. The login page is a critical component of the VWO (Visual Website Optimizer) application, ensuring secure user authentication and access to the platform. It outlines the scope, test strategy, resources, schedule, and deliverables for the testing effort.

## 2. Objectives

- Verify core login functionality works as expected
- Validate form validation and error handling
- Ensure alternative login methods (Google, SSO, Passkey) are functional
- Identify security vulnerabilities before production release
- Validate user experience and UI/UX compliance
- Ensure accessibility standards are met

## 3. Scope

### In Scope
- Email ID input field validation
- Password input field and visibility toggle
- Sign in button functionality
- Forgot Password link
- Remember Me checkbox functionality
- Alternative sign-in methods (Google, SSO, Passkey)
- Free Trial sign-up link
- Error messages and validation
- Security testing (SQL Injection, XSS)
- Rate limiting on failed login attempts
- Session management
- Responsive design testing (Desktop, Tablet, Mobile)
- Cross-browser compatibility
- Accessibility testing (WCAG 2.1 AA)
- HTTPS/SSL verification
- Page load performance

### Out of Scope
- Password reset email functionality (separate feature)
- Two-factor authentication (if not on login page)
- OAuth provider backend validation (only VWO end)
- Database testing
- API testing (covered separately)

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with @playwright/test
- **Test Type:** End-to-end functional, negative, security, and accessibility testing
- **Browser:** Chrome (primary), Firefox, Safari, Edge
- **Environment:** Production environment (app.vwo.com)
- **Test Level:** UI/E2E testing

### Test Levels
1. **Smoke Testing** (critical paths)
   - Login page loads
   - Basic form elements are visible
   
2. **Functional Testing** (all features)
   - Valid login flow
   - Form validation
   - Alternative login methods
   - Forgot password link
   - Remember me functionality
   
3. **Negative Testing** (invalid inputs, error handling)
   - Empty fields
   - Invalid email format
   - Incorrect password
   - Special characters
   
4. **Security Testing**
   - SQL Injection prevention
   - XSS prevention
   - HTTPS validation
   - Rate limiting
   - Session security
   
5. **Accessibility Testing**
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast
   - Focus indicators
   
6. **Cross-Browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://app.vwo.com/#/login |
| Browser | Chrome 120+, Firefox 121+, Safari 17+, Edge 120+ |
| OS | Windows 10+, macOS 12+, Linux |
| Framework | Playwright v1.40+ |
| Test Data | No test user accounts needed (validation only) |
| Reporter | HTML + JSON |

## 6. Entry Criteria

- [x] Application (app.vwo.com) is deployed and accessible
- [x] Test environment is configured and stable
- [x] Playwright is installed and configured
- [x] Browser drivers are downloaded
- [x] Test plan approved
- [x] Test cases are documented and reviewed

## 7. Exit Criteria

- [ ] All planned test cases executed (25 test cases)
- [ ] All critical/high priority defects resolved
- [ ] Test report generated and reviewed
- [ ] Code coverage >= 90% of login page elements
- [ ] No open blockers or showstoppers
- [ ] Performance benchmarks met (page load < 3s)

## 8. Test Cases Summary

| Test Case ID | Description | Priority | Status |
|--------------|-------------|----------|--------|
| TC_LOGIN_001 | Page elements display correctly | Critical | Not Started |
| TC_LOGIN_002 | Valid login with correct credentials | Critical | Not Started |
| TC_LOGIN_003 | Invalid email format handling | High | Not Started |
| TC_LOGIN_004 | Incorrect password handling | Critical | Not Started |
| TC_LOGIN_005 | Empty email field validation | High | Not Started |
| TC_LOGIN_006 | Empty password field validation | High | Not Started |
| TC_LOGIN_007 | Show/hide password toggle | Medium | Not Started |
| TC_LOGIN_008 | Remember me checkbox | Medium | Not Started |
| TC_LOGIN_009 | Forgot password link | High | Not Started |
| TC_LOGIN_010 | Google sign-in button | High | Not Started |
| TC_LOGIN_011 | SSO sign-in button | High | Not Started |
| TC_LOGIN_012 | Passkey sign-in button | Medium | Not Started |
| TC_LOGIN_013 | Free trial button | Medium | Not Started |
| TC_LOGIN_014 | SQL injection prevention | Critical | Not Started |
| TC_LOGIN_015 | XSS prevention | Critical | Not Started |
| TC_LOGIN_016 | Mobile responsiveness | Medium | Not Started |
| TC_LOGIN_017 | Keyboard navigation | Medium | Not Started |
| TC_LOGIN_018 | Page load performance | Low | Not Started |
| TC_LOGIN_019 | Session timeout handling | Medium | Not Started |
| TC_LOGIN_020 | Concurrent login attempts | Medium | Not Started |
| TC_LOGIN_021 | Special characters in password | Medium | Not Started |
| TC_LOGIN_022 | Email case sensitivity | Low | Not Started |
| TC_LOGIN_023 | Email whitespace trimming | Low | Not Started |
| TC_LOGIN_024 | HTTPS security check | Critical | Not Started |
| TC_LOGIN_025 | Rate limiting on failed attempts | High | Not Started |

**Total Test Cases:** 25

## 9. Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| Application downtime during testing | High | Low | Use stable test environment, schedule testing during off-peak hours |
| Flaky tests | Medium | Medium | Implement proper waits, use explicit waits instead of sleeps |
| Rate limiting blocks testing | Medium | High | Use different IPs/browsers, implement delays between attempts |
| Browser compatibility issues | Medium | Medium | Test across all major browsers, use Playwright's cross-browser feature |
| Test data contamination | Low | Low | Use isolated test environment, clean up after each test |
| OAuth provider unavailability | Medium | Low | Mock OAuth for testing, monitor provider status |

## 10. Schedule

| Phase | Duration | Start Date | End Date |
|-------|----------|-----------|----------|
| Test Planning | 1 day | Mar 25, 2026 | Mar 25, 2026 |
| Test Case Design | 1 day | Mar 26, 2026 | Mar 26, 2026 |
| Test Automation | 2 days | Mar 27, 2026 | Mar 28, 2026 |
| Test Execution | 1 day | Mar 29, 2026 | Mar 29, 2026 |
| Defect Reporting | Ongoing | Mar 25, 2026 | Mar 30, 2026 |
| Test Closure | 1 day | Mar 31, 2026 | Mar 31, 2026 |

**Total Duration:** 7 days

## 11. Deliverables

- [x] Test Plan (this document)
- [x] Test Cases Document (TEST_CASES_LOGIN.md)
- [x] Playwright Test Suite (login.spec.ts)
- [ ] Test Execution Report (HTML)
- [ ] Defect Reports (if any)
- [ ] Test Summary Report
- [ ] Final QA Sign-off

## 12. Test Execution

### Prerequisites
```bash
npm install @playwright/test
npm install --save-dev @playwright/test
```

### Run All Tests
```bash
npx playwright test login.spec.ts
```

### Run Specific Test
```bash
npx playwright test login.spec.ts -g "TC_LOGIN_001"
```

### Run with UI Mode
```bash
npx playwright test login.spec.ts --ui
```

### Generate Report
```bash
npx playwright show-report
```

## 13. Defect Reporting

All defects should be reported in the following format:

- **Title:** Clear, concise description
- **Test Case ID:** Which test case failed
- **Environment:** Browser, OS, app version
- **Steps to Reproduce:** Detailed steps
- **Expected Result:** What should happen
- **Actual Result:** What actually happened
- **Severity:** Critical/High/Medium/Low
- **Screenshots/Logs:** If applicable
- **Status:** Open/In Progress/Fixed/Closed

## 14. Success Criteria

- ✓ 100% of critical test cases pass
- ✓ >= 90% of high priority test cases pass
- ✓ No security vulnerabilities detected
- ✓ Page load time < 3 seconds consistently
- ✓ Responsive design works on all breakpoints
- ✓ WCAG 2.1 AA accessibility standards met
- ✓ No console errors during test execution

## 15. Notes

- Test cases are designed to cover happy path, negative scenarios, and security concerns
- All tests use Playwright's best practices for reliability
- Tests are designed to be maintainable and scalable
- No actual user accounts are needed; tests focus on UI behavior and validation
- OAuth/SSO flows are tested for navigation, not full authentication
- Performance baselines should be established on first run
