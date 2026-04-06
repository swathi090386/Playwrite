# Invalid Login Test Cases - Quick Reference

## 5 Test Cases Overview

This document provides a quick reference for the 5 invalid login test cases created for the VWO login page testing.

---

## 📋 Test Case Summary Table

| TC ID | Title | Input Type | Expected Outcome | Priority |
|-------|-------|-----------|------------------|----------|
| **TC-LOGIN-INV-001** | Arabic Characters in Email | Email: اختبار@example.com | Login fails with error | High |
| **TC-LOGIN-INV-002** | Chinese Characters in Email | Email: 测试@example.com | Login fails with error | High |
| **TC-LOGIN-INV-003** | SQL Injection Attempt | Email: admin' -- Password: ' OR '1'='1 | Safely rejected, no info leaked | **Critical** |
| **TC-LOGIN-INV-004** | Dummy/Fake Credentials | Email: dummyuser12345@fakeemail.xyz | Generic error message | High |
| **TC-LOGIN-INV-005** | Numeric Email + Special Chars | Email: 1234567890 Password: !@#$%^&*() | Invalid format error | Medium |

---

## 🎯 Test Execution Guide

### Run All Invalid Login Tests
```bash
npx playwright test invalid-login.spec.ts
```

### Run Specific Test Case
```bash
# TC-LOGIN-INV-001
npx playwright test invalid-login.spec.ts -g "TC-LOGIN-INV-001"

# TC-LOGIN-INV-003 (Critical security test)
npx playwright test invalid-login.spec.ts -g "TC-LOGIN-INV-003"
```

### Run with UI Mode (Recommended for Learning)
```bash
npx playwright test invalid-login.spec.ts --ui
```

### Run with Debug Mode
```bash
npx playwright test invalid-login.spec.ts --debug
```

---

## 🔍 Test Case Details

### TC-LOGIN-INV-001: Arabic Characters in Email
**What it tests:** International character support and error handling
```
Email: اختبار@example.com (Arabic for "test")
Password: TestPassword123
Expected: "Invalid email format" error
Why: Email format validation should reject non-ASCII chars without @
```

### TC-LOGIN-INV-002: Chinese Characters in Email
**What it tests:** Unicode support and internationalization
```
Email: 测试@example.com (Chinese for "test")
Password: ChineseTest2024
Expected: "Invalid email format" error
Why: Validates proper encoding/decoding of multibyte characters
```

### TC-LOGIN-INV-003: SQL Injection Attempt ⚠️ CRITICAL
**What it tests:** Security vulnerability prevention
```
Email: admin' --@example.com
Password: ' OR '1'='1
Expected: Generic error, no database info exposed
Why: CRITICAL - Tests if application is vulnerable to SQL injection
```

### TC-LOGIN-INV-004: Dummy/Fake Credentials
**What it tests:** Normal invalid login error handling
```
Email: dummyuser12345@fakeemail.xyz
Password: FakePassword@12345
Expected: "Invalid email or password" error
Why: User experience for incorrect credentials
```

### TC-LOGIN-INV-005: Numeric Email + Special Chars
**What it tests:** Email format validation and special char handling
```
Email: 1234567890 (no @ symbol)
Password: !@#$%^&*()
Expected: Invalid email format error
Why: Email must contain @ symbol; password should allow special chars
```

---

## ✅ Success Criteria

All test cases should meet these criteria:

| Criterion | Expected |
|-----------|----------|
| Form submission works | ✓ Forms submit without hanging |
| Error messages appear | ✓ User receives feedback |
| Error messages are generic | ✓ No database/system info leaked |
| User stays on login page | ✓ URL still contains /login |
| Page remains functional | ✓ Can retry login |
| No console JavaScript errors | ✓ Browser console is clean |

---

## 📊 Test Coverage Map

```
INVALID LOGIN SCENARIOS
│
├─ INTERNATIONAL CHARACTERS
│  ├─ TC-LOGIN-INV-001: Arabic (right-to-left)
│  └─ TC-LOGIN-INV-002: Chinese (multi-byte)
│
├─ SECURITY ATTACKS
│  └─ TC-LOGIN-INV-003: SQL Injection ⚠️ CRITICAL
│
├─ USER ERRORS
│  ├─ TC-LOGIN-INV-004: Fake credentials
│  └─ TC-LOGIN-INV-005: Invalid format
│
└─ VALIDATION: No sensitive info exposed (all tests)
```

---

## 🛠️ Files Created

1. **INVALID_LOGIN_TEST_CASES.md** - Complete detailed test cases using test_case_template format
2. **invalid-login.spec.ts** - Playwright automated test implementation
3. **vwo_login_page_screenshot.png** - Screenshot of the login page
4. **INVALID_LOGIN_QUICK_REFERENCE.md** - This document

---

## 💡 Key Testing Insights

### Why These 5 Cases Matter:

1. **Arabic & Chinese (INV-001, INV-002)**: Tests international user support
   - Many apps fail with non-Latin characters
   - Important for global applications

2. **SQL Injection (INV-003)**: Security critical test
   - One of OWASP Top 10 vulnerabilities
   - Must prevent malicious input from accessing database

3. **Fake Credentials (INV-004)**: UX and security
   - User-friendly error message
   - Should not reveal if account exists (prevents user enumeration)

4. **Invalid Format (INV-005)**: Data validation
   - Email must have specific format
   - Special characters in password must be supported

---

## 📈 Expected Test Results

When you run these tests, expect:

```
TC-LOGIN-INV-001 ......... PASS (error on international char)
TC-LOGIN-INV-002 ......... PASS (error on international char)
TC-LOGIN-INV-003 ......... PASS (SQL injection safely rejected)
TC-LOGIN-INV-004 ......... PASS (generic error on fake credentials)
TC-LOGIN-INV-005 ......... PASS (invalid format error)
VALIDATE: No sensitive info. PASS (no database info exposed)

Total: 6 tests, 6 passed
```

---

## 🚀 Next Steps

1. **Run the tests:**
   ```bash
   npx playwright test invalid-login.spec.ts
   ```

2. **Review the HTML report:**
   ```bash
   npx playwright show-report
   ```

3. **If tests fail:**
   - Run in debug mode: `npx playwright test --debug`
   - Check error messages
   - Verify selectors match your page structure
   - Update selectors if page HTML changed

4. **Document defects:**
   - If error messages expose sensitive info → Security issue
   - If page crashes → Critical issue
   - If behavior differs from expected → Document and report

---

## 📚 Related Documentation

- [INVALID_LOGIN_TEST_CASES.md](INVALID_LOGIN_TEST_CASES.md) - Full test case details
- [TEST_PLAN_LOGIN.md](TEST_PLAN_LOGIN.md) - Overall test plan
- [TEST_CASES_LOGIN.md](TEST_CASES_LOGIN.md) - All 25 login test cases
- [README.md](README.md) - Quick start guide

---

## 🔗 Test Mapping

```
test_case_template.md          invalid-login.spec.ts
       ↓                                ↓
TC-LOGIN-INV-001 ━━━━━━━━━━ test('TC-LOGIN-INV-001:...')
TC-LOGIN-INV-002 ━━━━━━━━━━ test('TC-LOGIN-INV-002:...')
TC-LOGIN-INV-003 ━━━━━━━━━━ test('TC-LOGIN-INV-003:...')
TC-LOGIN-INV-004 ━━━━━━━━━━ test('TC-LOGIN-INV-004:...')
TC-LOGIN-INV-005 ━━━━━━━━━━ test('TC-LOGIN-INV-005:...')
Validation       ━━━━━━━━━━ test('VALIDATE:...')
```

---

**Created:** March 25, 2026  
**Version:** 1.0  
**Status:** Ready for Testing  
**Last Updated:** March 25, 2026
