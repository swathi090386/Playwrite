# Test Cases: VWO Login Page
**Application:** app.vwo.com  
**Feature:** Login Page  
**Created:** March 25, 2026  
**Environment:** Production/Staging

---

## Test Case 1: Verify Login Page Elements Display Correctly
**Test ID:** TC_LOGIN_001  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions
- Browser is open
- User navigates to https://app.vwo.com/#/login

### Steps
1. Navigate to VWO login page
2. Verify all UI elements are visible and properly positioned

### Expected Results
- VWO logo is displayed
- Email ID input field is visible
- Password input field is visible
- "Forgot Password?" link is visible
- "Remember me" checkbox is visible
- "Sign in" button is visible
- "Sign in with Google" button is visible
- "Sign in using SSO" button is visible
- "Sign in with Passkey" button is visible
- "Start a FREE TRIAL" button is visible

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 2: Valid Login with Correct Credentials
**Test ID:** TC_LOGIN_002  
**Priority:** Critical  
**Type:** Functional Test

### Preconditions
- User is on VWO login page
- Valid user credentials are available

### Steps
1. Enter valid email ID in the email field
2. Enter valid password in the password field
3. Click "Sign in" button
4. Wait for page to load

### Expected Results
- User successfully logs in
- Redirected to VWO dashboard/home page
- Session is created

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 3: Login with Invalid Email Format
**Test ID:** TC_LOGIN_003  
**Priority:** High  
**Type:** Negative Test

### Preconditions
- User is on VWO login page

### Steps
1. Enter invalid email format (e.g., "invalidemail" without @)
2. Enter any password
3. Click "Sign in" button

### Expected Results
- Error message is displayed: "Invalid email format" or similar
- User is not logged in
- User remains on login page

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 4: Login with Incorrect Password
**Test ID:** TC_LOGIN_004  
**Priority:** Critical  
**Type:** Negative Test

### Preconditions
- User is on VWO login page
- Valid email exists, but password is incorrect

### Steps
1. Enter valid email ID
2. Enter incorrect password
3. Click "Sign in" button
4. Wait for response

### Expected Results
- Error message is displayed: "Invalid email or password" or similar
- User is not logged in
- User remains on login page
- Password field is cleared or highlighted

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 5: Login with Empty Email Field
**Test ID:** TC_LOGIN_005  
**Priority:** High  
**Type:** Negative Test

### Preconditions
- User is on VWO login page

### Steps
1. Leave email field empty
2. Enter password
3. Click "Sign in" button

### Expected Results
- Validation error is displayed: "Email is required" or similar
- User is not logged in
- User remains on login page

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 6: Login with Empty Password Field
**Test ID:** TC_LOGIN_006  
**Priority:** High  
**Type:** Negative Test

### Preconditions
- User is on VWO login page

### Steps
1. Enter valid email ID
2. Leave password field empty
3. Click "Sign in" button

### Expected Results
- Validation error is displayed: "Password is required" or similar
- User is not logged in
- User remains on login page

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 7: Show/Hide Password Functionality
**Test ID:** TC_LOGIN_007  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User is on VWO login page
- Password field contains characters

### Steps
1. Enter password in password field (e.g., "TestPassword123")
2. Verify password is masked (shown as dots/asterisks)
3. Click eye icon to show password
4. Verify password is now visible
5. Click eye icon again to hide password
6. Verify password is masked again

### Expected Results
- Password toggles between visible and masked state
- Eye icon changes appearance to indicate state
- Password value remains unchanged

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 8: Remember Me Checkbox Functionality
**Test ID:** TC_LOGIN_008  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User is on VWO login page

### Steps
1. Click "Remember me" checkbox to check it
2. Verify checkbox is checked (visual indicator)
3. Enter email and password
4. Click "Sign in" button
5. Log out from application
6. Return to login page
7. Verify email is pre-filled (if feature is enabled)

### Expected Results
- Checkbox can be checked/unchecked
- User credentials are remembered (email field pre-populated on next visit)
- Checkbox state is persisted in browser

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 9: Forgot Password Link Functionality
**Test ID:** TC_LOGIN_009  
**Priority:** High  
**Type:** Functional Test

### Preconditions
- User is on VWO login page

### Steps
1. Click "Forgot Password?" link
2. Wait for page/modal to load

### Expected Results
- User is redirected to password reset page/modal
- Password reset form is displayed
- Return to login option is available

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 10: Sign in with Google Button
**Test ID:** TC_LOGIN_010  
**Priority:** High  
**Type:** Functional Test

### Preconditions
- User is on VWO login page

### Steps
1. Click "Sign in with Google" button
2. Wait for Google OAuth popup/redirect

### Expected Results
- Google sign-in window/popup appears
- User can authenticate with Google account
- Upon successful auth, user is logged into VWO

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 11: Sign in using SSO Button
**Test ID:** TC_LOGIN_011  
**Priority:** High  
**Type:** Functional Test

### Preconditions
- User is on VWO login page

### Steps
1. Click "Sign in using SSO" button
2. Wait for SSO page/redirect

### Expected Results
- SSO authentication page is displayed
- User can proceed with SSO login
- Upon successful auth, user is logged into VWO

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 12: Sign in with Passkey Button
**Test ID:** TC_LOGIN_012  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User is on VWO login page

### Steps
1. Click "Sign in with Passkey" button
2. Wait for passkey authentication

### Expected Results
- Passkey authentication dialog/window appears
- User can log in using registered passkey
- Upon successful auth, user is logged into VWO

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 13: Start a FREE TRIAL Button
**Test ID:** TC_LOGIN_013  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User is on VWO login page

### Steps
1. Click "Start a FREE TRIAL" button
2. Wait for page/form to load

### Expected Results
- User is redirected to free trial signup page
- Trial signup form is displayed with email field, etc.
- User can proceed to create a free trial account

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 14: SQL Injection Attack - Email Field
**Test ID:** TC_LOGIN_014  
**Priority:** Critical  
**Type:** Security Test

### Preconditions
- User is on VWO login page

### Steps
1. Enter SQL injection payload in email field: `' OR '1'='1`
2. Enter any password
3. Click "Sign in" button

### Expected Results
- Login fails
- User is not authenticated
- No error messages expose database structure
- Error message is generic

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 15: XSS Attack - Email Field
**Test ID:** TC_LOGIN_015  
**Priority:** Critical  
**Type:** Security Test

### Preconditions
- User is on VWO login page

### Steps
1. Enter XSS payload in email field: `<script>alert('XSS')</script>`
2. Enter any password
3. Click "Sign in" button or Tab out of field

### Expected Results
- No JavaScript alert pops up
- Input is properly escaped
- User is not logged in
- Page remains functional

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 16: Login Page Responsiveness - Mobile View
**Test ID:** TC_LOGIN_016  
**Priority:** Medium  
**Type:** Cross-Browser Test

### Preconditions
- Browser developer tools are open
- User is on VWO login page

### Steps
1. Set viewport to mobile size (375x667)
2. Verify all elements are visible and accessible
3. Verify buttons are clickable
4. Perform a complete login flow

### Expected Results
- All elements are properly displayed on mobile
- No elements are cut off or overlapped
- Touch targets are adequate (minimum 44x44 px)
- Login workflow functions correctly

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 17: Login Page Accessibility - Tab Navigation
**Test ID:** TC_LOGIN_017  
**Priority:** Medium  
**Type:** Accessibility Test

### Preconditions
- User is on VWO login page

### Steps
1. Press Tab key repeatedly
2. Verify focus order is logical
3. Verify all interactive elements are reachable via keyboard
4. Verify focus indicators are visible

### Expected Results
- Tab focuses the email field first
- Tab navigates through: email → password → forgot password link → remember me → sign in button → alternatives
- All interactive elements are keyboard accessible
- Focus indicators are clearly visible

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 18: Page Load Time Test
**Test ID:** TC_LOGIN_018  
**Priority:** Low  
**Type:** Performance Test

### Preconditions
- User has good internet connection
- Browser cache is cleared

### Steps
1. Navigate to VWO login page https://app.vwo.com/#/login
2. Measure page load time using browser dev tools
3. Verify all resources are loaded

### Expected Results
- Page loads in less than 3 seconds
- All elements are rendered and interactive
- No console errors

### Actual Results
- [ ] Pass
- [ ] Fail

**Page Load Time:** _____ seconds

**Notes:** 

---

## Test Case 19: Session Timeout Test
**Test ID:** TC_LOGIN_019  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User is logged into VWO
- Idle timeout policy is configured (typically 30 minutes)

### Steps
1. Log in with valid credentials
2. Leave the browser idle for the configured timeout period
3. Try to perform an action (navigate, refresh)

### Expected Results
- Session expires after timeout period
- User is redirected to login page
- Previous data is not accessible
- User receives a session expired message

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 20: Concurrent Login Attempt
**Test ID:** TC_LOGIN_020  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User account allows only one concurrent session

### Steps
1. Log in to VWO from Browser 1 with valid credentials
2. Log in to VWO from Browser 2 with same credentials
3. Check Browser 1 for any session changes

### Expected Results
- Second login is allowed OR
- First session is terminated with a notification in Browser 1
- Application behavior is consistent with policy

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 21: Login with Special Characters in Password
**Test ID:** TC_LOGIN_021  
**Priority:** Medium  
**Type:** Functional Test

### Preconditions
- User has account with special characters in password
- User is on login page

### Steps
1. Enter email
2. Enter password with special characters: !@#$%^&*(
3. Click "Sign in"

### Expected Results
- User logs in successfully
- Special characters are handled correctly
- No encoding/decoding issues

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 22: Case Sensitivity of Email
**Test ID:** TC_LOGIN_022  
**Priority:** Low  
**Type:** Functional Test

### Preconditions
- User account email: test@example.com
- User is on login page

### Steps
1. Enter email in uppercase: TEST@EXAMPLE.COM
2. Enter correct password
3. Click "Sign in"

### Expected Results
- User logs in successfully
- Email is case-insensitive
- Login is not affected by email case

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 23: Login with Spaces in Email
**Test ID:** TC_LOGIN_023  
**Priority:** Low  
**Type:** Functional Test

### Preconditions
- User is on login page

### Steps
1. Enter email with leading/trailing spaces: " test@example.com "
2. Enter password
3. Click "Sign in"

### Expected Results
- Spaces are automatically trimmed
- Login succeeds if credentials are valid
- User is not rejected due to whitespace

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 24: HTTPS Security Check
**Test ID:** TC_LOGIN_024  
**Priority:** Critical  
**Type:** Security Test

### Preconditions
- Browser is open
- User navigates to login page

### Steps
1. Navigate to VWO login page
2. Check URL bar for security indicators
3. Verify HTTPS protocol is used
4. Check SSL certificate

### Expected Results
- URL starts with https://
- Green padlock icon is displayed
- SSL certificate is valid
- No browser security warnings

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---

## Test Case 25: Rate Limiting on Failed Login Attempts
**Test ID:** TC_LOGIN_025  
**Priority:** High  
**Type:** Security Test

### Preconditions
- User is on login page

### Steps
1. Attempt login with invalid password 5+ times
2. On 6th attempt, try to login again
3. Wait and observe response

### Expected Results
- After 5 failed attempts, login is blocked
- Error message: "Too many failed attempts. Try again later." or similar
- User is temporarily locked out
- After timeout period (5-15 minutes), user can try again

### Actual Results
- [ ] Pass
- [ ] Fail

**Notes:** 

---
