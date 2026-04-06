# VWO Login Page - Test Execution Guide

## Quick Commands

### Initial Setup
```bash
npm install @playwright/test@latest
npx playwright install
```

### Run Tests

| Command | Purpose |
|---------|---------|
| `npx playwright test login.spec.ts` | Run all tests (headless) |
| `npx playwright test login.spec.ts --ui` | Run with UI mode (interactive) |
| `npx playwright test login.spec.ts --debug` | Run with debugger |
| `npx playwright test login.spec.ts --headed` | Run with visible browser |
| `npx playwright test login.spec.ts -g "TC_LOGIN_001"` | Run specific test case |

### Browser Specific Tests

```bash
npx playwright test login.spec.ts --project=chromium
npx playwright test login.spec.ts --project=firefox
npx playwright test login.spec.ts --project=webkit
npx playwright test login.spec.ts --project='Mobile Chrome'
npx playwright test login.spec.ts --project='Mobile Safari'
```

### Generate Reports

```bash
npx playwright show-report
```

---

## Test Execution Checklist

### Pre-Execution
- [ ] Playwright and browsers installed
- [ ] Internet connection verified
- [ ] app.vwo.com is accessible
- [ ] No VPN/proxy issues
- [ ] System time is correct

### Smoke Test (2 minutes)
```bash
npx playwright test login.spec.ts -g "TC_LOGIN_001"
```
- [ ] Page loads successfully
- [ ] All elements are visible

### Functional Tests (10 minutes)
```bash
npx playwright test login.spec.ts -g "TC_LOGIN_00[2-9]|TC_LOGIN_01[0-3]"
```
Expected: All 12 tests pass

### Security Tests (5 minutes)
```bash
npx playwright test login.spec.ts -g "TC_LOGIN_01[4-5]|TC_LOGIN_024|TC_LOGIN_025"
```
Expected: All 4 security tests pass

### Responsive Tests (5 minutes)
```bash
npx playwright test login.spec.ts -g "TC_LOGIN_016"
npx playwright test login.spec.ts --project='Mobile Chrome'
npx playwright test login.spec.ts --project='Mobile Safari'
```
Expected: All responsive tests pass

### Full Test Run (15-20 minutes)
```bash
npx playwright test login.spec.ts
npx playwright show-report
```

---

## Test Status Matrix

Copy this and update after each test run:

```
Test ID          | Status | Browser | Notes
-----------------|--------|---------|-------
TC_LOGIN_001     | [ ]    |         |
TC_LOGIN_002     | [ ]    |         |
TC_LOGIN_003     | [ ]    |         |
TC_LOGIN_004     | [ ]    |         |
TC_LOGIN_005     | [ ]    |         |
TC_LOGIN_006     | [ ]    |         |
TC_LOGIN_007     | [ ]    |         |
TC_LOGIN_008     | [ ]    |         |
TC_LOGIN_009     | [ ]    |         |
TC_LOGIN_010     | [ ]    |         |
TC_LOGIN_011     | [ ]    |         |
TC_LOGIN_012     | [ ]    |         |
TC_LOGIN_013     | [ ]    |         |
TC_LOGIN_014     | [ ]    |         |
TC_LOGIN_015     | [ ]    |         |
TC_LOGIN_016     | [ ]    |         |
TC_LOGIN_017     | [ ]    |         |
TC_LOGIN_018     | [ ]    |         |
TC_LOGIN_019     | [ ]    |         |
TC_LOGIN_020     | [ ]    |         |
TC_LOGIN_021     | [ ]    |         |
TC_LOGIN_022     | [ ]    |         |
TC_LOGIN_023     | [ ]    |         |
TC_LOGIN_024     | [ ]    |         |
TC_LOGIN_025     | [ ]    |         |
```

Legend: ✅ Pass | ❌ Fail | ⏭️ Skip | 🔄 In Progress

---

## Exit Criteria Tracking

| Criteria | Status | Evidence |
|----------|--------|----------|
| 100% of critical tests pass | [ ] | ___ |
| >= 90% of high priority tests pass | [ ] | ___ |
| No security vulnerabilities | [ ] | ___ |
| Page load < 3 seconds | [ ] | ___ |
| Responsive design valid | [ ] | ___ |
| No console errors | [ ] | ___ |
| Accessibility pass | [ ] | ___ |

---

## Common Issues & Solutions

### Issue: Timeout Errors
**Solution:** Increase timeout or check internet
```bash
npx playwright test login.spec.ts --timeout=30000
```

### Issue: Element Not Found
**Solution:** Inspect page and update selector
```bash
npx playwright test login.spec.ts --debug
```

### Issue: Browser Not Installed
**Solution:** Install missing browsers
```bash
npx playwright install --with-deps
```

### Issue: Rate Limited
**Solution:** Wait before rerunning failed login tests
```bash
# Add delay between test attempts
sleep 60
npx playwright test login.spec.ts
```

### Issue: Authentication Errors in Alternative Login
**Solution:** These are expected - tests verify navigation only
- Google OAuth success depends on actual credentials
- SSO requires organization setup
- Passkey requires device setup

---

## Performance Baseline

Run once to establish baseline:

```bash
npx playwright test login.spec.ts -g "TC_LOGIN_018"
```

| Browser | Load Time | Status |
|---------|-----------|--------|
| Chrome | ___ ms | [ ] |
| Firefox | ___ ms | [ ] |
| Safari | ___ ms | [ ] |

**Target:** < 3000 ms (3 seconds)

---

## Cross-Browser Results

After running full test suite on all browsers:

| Test | Chrome | Firefox | Safari | Mobile |
|------|--------|---------|--------|--------|
| TC_LOGIN_001 | [ ] | [ ] | [ ] | [ ] |
| TC_LOGIN_002 | [ ] | [ ] | [ ] | [ ] |
| TC_LOGIN_003 | [ ] | [ ] | [ ] | [ ] |
| ... | | | | |

**Target:** All tests pass on all browsers

---

## Test Run Summary Template

```
=================================
VWO Login Page Test Execution Report
=================================

Date: _______________
Tester: _______________
Browser: _______________
Environment: app.vwo.com (Production)

SUMMARY
-------
Total Tests: 25
Passed: ___ (--%)
Failed: ___ (--%)
Skipped: ___

CRITICAL TESTS
--------------
[ ] TC_LOGIN_001 - Elements display
[ ] TC_LOGIN_002 - Valid login
[ ] TC_LOGIN_014 - SQL injection
[ ] TC_LOGIN_015 - XSS prevention
[ ] TC_LOGIN_024 - HTTPS security

HIGH PRIORITY TESTS
-------------------
[ ] TC_LOGIN_003 - Invalid email
[ ] TC_LOGIN_004 - Wrong password
[ ] TC_LOGIN_005 - Empty email
[ ] TC_LOGIN_006 - Empty password
[ ] TC_LOGIN_009 - Forgot password
[ ] TC_LOGIN_010 - Google sign-in
[ ] TC_LOGIN_011 - SSO sign-in
[ ] TC_LOGIN_025 - Rate limiting

DEFECTS FOUND
-------------
1. ________________________________
2. ________________________________
3. ________________________________

NOTES
-----
_________________________________
_________________________________

Sign-off: _________________ Date: _________
```

---

## Next Steps After Testing

1. Generate HTML report: `npx playwright show-report`
2. Document any defects found
3. Create tickets for failing tests
4. Update test cases if page structure changed
5. Archive test results
6. Communicate results to team

---

**Quick Reference Version:** 1.0
