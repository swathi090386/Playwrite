# Test Cases: VWO Login Page - Invalid Login Scenarios

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Testing Team |
| **Date** | March 25, 2026 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-LOGIN-INV-001, TC-LOGIN-INV-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file (invalid-login.spec.ts) |

---

## Test Cases

### Test Case 1: Invalid Login with Arabic Characters in Email

| Field | Details |
|-------|---------|
| **TC ID** | TC-LOGIN-INV-001 |
| **Title** | Login with Arabic characters in email field should fail with validation error |
| **Priority** | High |
| **Category** | Negative / Internationalization |
| **Spec File** | invalid-login.spec.ts |
| **Preconditions** | <ul><li>Browser is open</li><li>User navigates to https://app.vwo.com/#/login</li><li>VWO login page is fully loaded</li><li>User can input text in email field</li></ul> |
| **Steps** | <ol><li>Open VWO login page at https://app.vwo.com/#/login</li><li>Click on the email input field (placeholder: "Enter email ID")</li><li>Enter Arabic text: "اختبار@example.com" (meaning "test" in Arabic)</li><li>Click on the password field</li><li>Enter any password text: "TestPassword123"</li><li>Verify that email field contains the Arabic text</li><li>Click the "Sign in" button</li><li>Wait 3-5 seconds for server response</li><li>Observe the error message displayed</li></ol> |
| **Expected Result** | <ul><li>Arabic characters are accepted in the email field (field accepts input)</li><li>Login attempt is submitted to server</li><li>Server responds with error message: "Invalid email format" or "Invalid credentials"</li><li>User is NOT authenticated/logged in</li><li>User remains on the login page (URL still contains #/login)</li><li>Email field value may be cleared or retained</li><li>No console JavaScript errors occur</li><li>Page remains fully functional</li></ul> |
| **Test Data** | Email: اختبار@example.com | Password: TestPassword123 |
| **Expected Behavior** | Error due to invalid email format, not crash/hang |
| **Notes** | <ul><li>This tests internationalization support and proper error handling</li><li>Arabic text should be properly handled by browser and sanitized by server</li><li>Focus is on graceful error handling, not authentication success</li><li>Backend should validate email format strictly</li></ul> |

---

### Test Case 2: Invalid Login with Chinese Characters in Email

| Field | Details |
|-------|---------|
| **TC ID** | TC-LOGIN-INV-002 |
| **Title** | Login with Chinese characters in email field should fail with validation error |
| **Priority** | High |
| **Category** | Negative / Internationalization |
| **Spec File** | invalid-login.spec.ts |
| **Preconditions** | <ul><li>Browser is open</li><li>User navigates to https://app.vwo.com/#/login</li><li>VWO login page is fully loaded</li><li>User can input text in email field</li><li>Browser supports Unicode input</li></ul> |
| **Steps** | <ol><li>Open VWO login page at https://app.vwo.com/#/login</li><li>Click on the email input field</li><li>Enter Chinese text: "测试@example.com" (meaning "test" in Chinese)</li><li>Click on the password field</li><li>Enter password: "ChineseTest2024"</li><li>Verify email field shows the Chinese characters correctly</li><li>Click the "Sign in" button</li><li>Wait 3-5 seconds for server response</li><li>Check for error message or validation feedback</li></ol> |
| **Expected Result** | <ul><li>Chinese characters are accepted and displayed in the email field</li><li>Form submission occurs without freezing or hanging</li><li>Server responds with error message: "Invalid email format" or "Invalid credentials"</li><li>User is NOT logged in</li><li>User remains on login page (URL unchanged)</li><li>Error message is clearly visible and user-friendly</li><li>No browser console errors</li><li>Page functionality remains intact</li></ul> |
| **Test Data** | Email: 测试@example.com | Password: ChineseTest2024 |
| **Expected Behavior** | Server should reject invalid email format gracefully |
| **Notes** | <ul><li>Tests application's ability to handle non-Latin character input</li><li>Ensures proper encoding/decoding of Unicode characters</li><li>Server-side validation should catch invalid email format</li><li>Important for applications with global user base</li></ul> |

---

### Test Case 3: Invalid Login with Special Characters and SQL Injection Attempt

| Field | Details |
|-------|---------|
| **TC ID** | TC-LOGIN-INV-003 |
| **Title** | Login with special characters and SQL injection attempt should be safely rejected |
| **Priority** | Critical |
| **Category** | Negative / Security |
| **Spec File** | invalid-login.spec.ts |
| **Preconditions** | <ul><li>Browser is open</li><li>User navigates to https://app.vwo.com/#/login</li><li>VWO login page is fully loaded</li><li>Security validations are in place</li></ul> |
| **Steps** | <ol><li>Navigate to VWO login page: https://app.vwo.com/#/login</li><li>Click on the email input field</li><li>Enter malicious payload: "admin' --@example.com" (SQL injection attempt)</li><li>Click on the password field</li><li>Enter payload: "' OR '1'='1" (SQL injection in password)</li><li>Verify both fields display the entered values</li><li>Click the "Sign in" button</li><li>Wait 3-5 seconds for response</li><li>Check browser console for any JavaScript errors</li><li>Observe the error message</li></ol> |
| **Expected Result** | <ul><li>Malicious input is NOT executed</li><li>Form does not crash or behave unexpectedly</li><li>Server responds with generic error message: "Invalid email or password"</li><li>No database-specific error messages are exposed</li><li>No success or partial authentication occurs</li><li>User remains on login page</li><li>Browser console shows no errors</li><li>Page is fully responsive and usable</li><li>No suspicious database activity is triggered</li></ul> |
| **Test Data** | Email: admin' --@example.com | Password: ' OR '1'='1 |
| **Expected Behavior** | SQL injection is prevented, generic error shown |
| **Critical Notes** | <ul><li>Security test - CRITICAL priority</li><li>Validates server-side input sanitization</li><li>Tests parameterized queries or ORM usage</li><li>Error message should NOT reveal database structure</li><li>Application should log suspicious activity</li></ul> |

---

### Test Case 4: Invalid Login with Dummy/Fake Credentials

| Field | Details |
|-------|---------|
| **TC ID** | TC-LOGIN-INV-004 |
| **Title** | Login with dummy/fake credentials should fail with authentication error |
| **Priority** | High |
| **Category** | Negative / Functional |
| **Spec File** | invalid-login.spec.ts |
| **Preconditions** | <ul><li>Browser is open</li><li>User navigates to https://app.vwo.com/#/login</li><li>VWO login page is fully loaded</li><li>No valid account with these credentials exists</li></ul> |
| **Steps** | <ol><li>Navigate to VWO login page: https://app.vwo.com/#/login</li><li>Click on the email input field</li><li>Enter dummy email: "dummyuser12345@fakeemail.xyz"</li><li>Click on the password field</li><li>Enter dummy password: "FakePassword@12345"</li><li>Verify both fields contain the entered values</li><li>Click the "Sign in" button</li><li>Wait 3-5 seconds for server authentication response</li><li>Observe the error message displayed to user</li><li>Check if email/password fields are cleared or retained</li></ol> |
| **Expected Result** | <ul><li>Form is properly submitted to server</li><li>Server responds with authentication error message</li><li>Error message indicates: "Invalid email or password" or "User not found"</li><li>Password field is cleared (security best practice)</li><li>Email field may or may not be cleared (depending on UX design)</li><li>User is NOT logged in or authenticated</li><li>User remains on login page</li><li>No sensitive information is revealed in error message</li><li>Page remains functional for retry</li></ul> |
| **Test Data** | Email: dummyuser12345@fakeemail.xyz | Password: FakePassword@12345 |
| **Expected Behavior** | Authentication fails gracefully with clear error message |
| **Notes** | <ul><li>Tests normal invalid credential scenario</li><li>Validates error message UX</li><li>Ensures user can retry login</li><li>Password field should be cleared for security</li><li>Error message should not reveal if email exists in system</li></ul> |

---

### Test Case 5: Invalid Login with Numeric-Only Email and Special Characters Password

| Field | Details |
|-------|---------|
| **TC ID** | TC-LOGIN-INV-005 |
| **Title** | Login with numeric-only email and special characters password should fail |
| **Priority** | Medium |
| **Category** | Negative / Format Validation |
| **Spec File** | invalid-login.spec.ts |
| **Preconditions** | <ul><li>Browser is open</li><li>User navigates to https://app.vwo.com/#/login</li><li>VWO login page is fully loaded</li><li>Email format validation is enforced</li></ul> |
| **Steps** | <ol><li>Navigate to VWO login page: https://app.vwo.com/#/login</li><li>Click on the email input field</li><li>Enter numeric-only values: "1234567890"</li><li>Click on the password field</li><li>Enter special characters: "!@#$%^&*()"</li><li>Verify email field shows numbers: 1234567890</li><li>Verify password field shows masked special characters</li><li>Click the eye icon to verify password shows: !@#$%^&*()</li><li>Click the eye icon again to mask password (security)</li><li>Click the "Sign in" button</li><li>Wait 3-5 seconds for validation response</li></ol> |
| **Expected Result** | <ul><li>Email field accepts numeric input (temporarily)</li><li>Password field accepts special characters</li><li>Form submission attempt is made</li><li>Server responds with validation error: "Invalid email format" (since no @ symbol)</li><li>OR client-side validation catches invalid format before submission</li><li>User receives clear feedback about email format requirement</li><li>User is NOT logged in</li><li>User remains on login page with ability to correct input</li><li>Error message explains what email format is required (e.g., "user@domain.com")</li><li>Focus returns to email field for correction</li></ul> |
| **Test Data** | Email: 1234567890 | Password: !@#$%^&*() |
| **Expected Behavior** | Invalid email format caught by validation |
| **Notes** | <ul><li>Tests email format validation</li><li>Validates special character handling in password</li><li>May trigger client-side or server-side validation</li><li>Error message should guide user on valid email format</li><li>Important to test @ symbol requirement</li><li>Tests password field's ability to handle special characters</li></ul> |

---

## Summary

| Priority | Count |
|----------|-------|
| Critical | 1 |
| High | 3 |
| Medium | 1 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Negative | 5 |
| Internationalization | 2 |
| Security | 1 |
| Format Validation | 1 |
| Functional | 1 |

---

## Test Coverage Map

```
┌─────────────────────────────────────────────────────────────┐
│         VWO LOGIN - INVALID LOGIN TEST SCENARIOS             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  TC-LOGIN-INV-001 ─── Arabic Characters in Email            │
│  TC-LOGIN-INV-002 ─── Chinese Characters in Email           │
│  TC-LOGIN-INV-003 ─── SQL Injection Attack (SECURITY)       │
│  TC-LOGIN-INV-004 ─── Dummy/Fake Credentials                │
│  TC-LOGIN-INV-005 ─── Numeric Email + Special Chars         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Execution Notes

### Common Expected Behaviors Across All Tests

1. **Form Submission**: Form should always submit (no client-side blocking due to input type)
2. **Server Response**: Server should respond with error message within 5 seconds
3. **User Feedback**: Clear, non-revealing error message displayed
4. **Page State**: User remains on login page, able to retry
5. **Security**: No sensitive info exposed, no database details leaked
6. **Accessibility**: Error messages are accessible to screen readers

### Playwright Execution

Run these test cases with:
```bash
npx playwright test invalid-login.spec.ts
```

Run specific test:
```bash
npx playwright test invalid-login.spec.ts -g "TC-LOGIN-INV-001"
```

Run with UI debugger:
```bash
npx playwright test invalid-login.spec.ts --ui
```

---

## Related Test Cases

- TC_LOGIN_003: Invalid email format (basic)
- TC_LOGIN_004: Incorrect password
- TC_LOGIN_005: Empty email field
- TC_LOGIN_014: SQL injection prevention
- TC_LOGIN_015: XSS prevention

---

**Document Version:** 1.0  
**Last Updated:** March 25, 2026  
**Status:** Ready for Automation
