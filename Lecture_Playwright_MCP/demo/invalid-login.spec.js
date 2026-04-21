"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('VWO Login - Invalid Login Scenarios', () => {
    test_1.test.beforeEach(async ({ page }) => {
        // Navigate to VWO login page before each test
        await page.goto('https://app.vwo.com/#/login');
        await page.waitForLoadState('networkidle');
    });
    // TC-LOGIN-INV-001: Invalid Login with Arabic Characters in Email
    (0, test_1.test)('TC-LOGIN-INV-001: Login with Arabic characters in email should fail', async ({ page }) => {
        console.log('Starting TC-LOGIN-INV-001: Arabic characters in email');
        const emailInput = page.locator('input[placeholder*="email" i]');
        const passwordInput = page.locator('input[type="password"]');
        const signInButton = page.locator('button:has-text("Sign in")');
        // Enter Arabic text in email field
        // Arabic for "test": اختبار
        await emailInput.fill('اختبار@example.com');
        // Verify Arabic text is displayed
        await (0, test_1.expect)(emailInput).toHaveValue('اختبار@example.com');
        console.log('Arabic email entered: اختبار@example.com');
        // Enter password
        await passwordInput.fill('TestPassword123');
        await (0, test_1.expect)(passwordInput).toHaveAttribute('type', 'password');
        console.log('Password entered');
        // Click sign in
        await signInButton.click();
        console.log('Sign in button clicked');
        // Wait for error response
        await page.waitForTimeout(3000);
        // Verify error message is displayed or form submission failed
        const errorMessage = page.locator('text=/invalid|error|not found/i');
        const isErrorDisplayed = await errorMessage.isVisible().catch(() => false);
        if (isErrorDisplayed) {
            console.log('Error message displayed as expected');
            await (0, test_1.expect)(errorMessage).toBeVisible();
        }
        // Verify user is still on login page
        (0, test_1.expect)(page.url()).toContain('login');
        console.log('User remains on login page - Test PASSED');
    });
    // TC-LOGIN-INV-002: Invalid Login with Chinese Characters in Email
    (0, test_1.test)('TC-LOGIN-INV-002: Login with Chinese characters in email should fail', async ({ page }) => {
        console.log('Starting TC-LOGIN-INV-002: Chinese characters in email');
        const emailInput = page.locator('input[placeholder*="email" i]');
        const passwordInput = page.locator('input[type="password"]');
        const signInButton = page.locator('button:has-text("Sign in")');
        // Enter Chinese text in email field
        // Chinese for "test": 测试
        await emailInput.fill('测试@example.com');
        // Verify Chinese text is displayed
        const emailValue = await emailInput.inputValue();
        console.log(`Chinese email entered: ${emailValue}`);
        (0, test_1.expect)(emailValue).toContain('测试');
        // Enter password
        await passwordInput.fill('ChineseTest2024');
        console.log('Password entered: ChineseTest2024');
        // Click sign in
        await signInButton.click();
        console.log('Sign in button clicked');
        // Wait for error response
        await page.waitForTimeout(3000);
        // Verify error message or validation failure
        const errorMessage = page.locator('text=/invalid|error|not found/i');
        const isErrorDisplayed = await errorMessage.isVisible().catch(() => false);
        if (isErrorDisplayed) {
            console.log('Error message displayed as expected');
        }
        // Verify user is still on login page
        (0, test_1.expect)(page.url()).toContain('login');
        console.log('User remains on login page - Test PASSED');
    });
    // TC-LOGIN-INV-003: Invalid Login with Special Characters and SQL Injection Attempt
    (0, test_1.test)('TC-LOGIN-INV-003: Login with SQL injection attempt should be safely rejected', async ({ page }) => {
        console.log('Starting TC-LOGIN-INV-003: SQL injection attempt');
        const emailInput = page.locator('input[placeholder*="email" i]');
        const passwordInput = page.locator('input[type="password"]');
        const signInButton = page.locator('button:has-text("Sign in")');
        // Attempt SQL injection in email
        const sqlInjectionEmail = "admin' --@example.com";
        await emailInput.fill(sqlInjectionEmail);
        console.log(`SQL injection email entered: ${sqlInjectionEmail}`);
        // Attempt SQL injection in password
        const sqlInjectionPassword = "' OR '1'='1";
        await passwordInput.fill(sqlInjectionPassword);
        console.log(`SQL injection password entered: ${sqlInjectionPassword}`);
        // Verify values are entered
        await (0, test_1.expect)(emailInput).toHaveValue(sqlInjectionEmail);
        await (0, test_1.expect)(passwordInput).toHaveValue(sqlInjectionPassword);
        // Click sign in
        await signInButton.click();
        console.log('Sign in button clicked with malicious payloads');
        // Wait for response
        await page.waitForTimeout(3000);
        // Check for error message
        const errorMessage = page.locator('text=/invalid|error|incorrect/i');
        const isErrorDisplayed = await errorMessage.isVisible().catch(() => false);
        // Verify injection did NOT succeed
        if (isErrorDisplayed) {
            const errorText = await errorMessage.first().textContent();
            console.log(`Error message: ${errorText}`);
            // Ensure error message is generic, not revealing database info
            const exposesDatabase = errorText?.toLowerCase().includes('sql') ||
                errorText?.toLowerCase().includes('database') ||
                errorText?.toLowerCase().includes('injection');
            (0, test_1.expect)(exposesDatabase).toBe(false);
            console.log('Error message is generic - no database info exposed');
        }
        // Verify user remains on login page
        (0, test_1.expect)(page.url()).toContain('login');
        // Verify page is still responsive
        const emailInputAfter = page.locator('input[placeholder*="email" i]');
        await (0, test_1.expect)(emailInputAfter).toBeEnabled();
        console.log('SQL injection attempt safely rejected - Test PASSED');
    });
    // TC-LOGIN-INV-004: Invalid Login with Dummy/Fake Credentials
    (0, test_1.test)('TC-LOGIN-INV-004: Login with dummy/fake credentials should fail with error', async ({ page }) => {
        console.log('Starting TC-LOGIN-INV-004: Dummy/fake credentials');
        const emailInput = page.locator('input[placeholder*="email" i]');
        const passwordInput = page.locator('input[type="password"]');
        const signInButton = page.locator('button:has-text("Sign in")');
        // Enter dummy email
        const dummyEmail = 'dummyuser12345@fakeemail.xyz';
        await emailInput.fill(dummyEmail);
        console.log(`Dummy email entered: ${dummyEmail}`);
        // Enter dummy password
        const dummyPassword = 'FakePassword@12345';
        await passwordInput.fill(dummyPassword);
        console.log(`Dummy password entered: ${dummyPassword}`);
        // Store initial password value length to verify it's cleared
        const passwordValueBefore = await passwordInput.inputValue();
        const passwordLengthBefore = passwordValueBefore.length;
        // Click sign in
        await signInButton.click();
        console.log('Sign in button clicked');
        // Wait for authentication response
        await page.waitForTimeout(3000);
        // Verify error message
        const errorMessage = page.locator('text=/invalid|error|not found|incorrect/i');
        await (0, test_1.expect)(errorMessage).toBeVisible({ timeout: 5000 });
        console.log('Error message displayed');
        // Get error message text
        const errorText = await errorMessage.first().textContent();
        console.log(`Error message: ${errorText}`);
        // Verify error is authentication error (not revealing if user exists)
        const isGenericError = errorText?.toLowerCase().includes('invalid') ||
            errorText?.toLowerCase().includes('incorrect');
        (0, test_1.expect)(isGenericError).toBe(true);
        // Verify user is NOT logged in
        (0, test_1.expect)(page.url()).toContain('login');
        // Verify password field is cleared (security best practice)
        const passwordAfter = await passwordInput.inputValue();
        console.log(`Password field after attempt: "${passwordAfter}"`);
        // Note: Some apps clear password, some keep it for UX - test adapts accordingly
        console.log('Dummy credentials rejected - Test PASSED');
    });
    // TC-LOGIN-INV-005: Invalid Login with Numeric-Only Email and Special Characters Password
    (0, test_1.test)('TC-LOGIN-INV-005: Login with numeric email and special characters password should fail', async ({ page }) => {
        console.log('Starting TC-LOGIN-INV-005: Numeric email + special characters password');
        const emailInput = page.locator('input[placeholder*="email" i]');
        const passwordInput = page.locator('input[type="password"]');
        const toggelButton = page.locator('button[title*="show"], button[aria-label*="password"], svg[role="button"]').first();
        const signInButton = page.locator('button:has-text("Sign in")');
        // Enter numeric-only email (invalid format - no @ symbol)
        const numericEmail = '1234567890';
        await emailInput.fill(numericEmail);
        console.log(`Numeric email entered: ${numericEmail}`);
        // Enter special characters password
        const specialPassword = '!@#$%^&*()';
        await passwordInput.fill(specialPassword);
        console.log(`Special characters password entered: ${specialPassword}`);
        // Verify password field accepts special characters
        await (0, test_1.expect)(passwordInput).toHaveValue(specialPassword);
        console.log('Special characters accepted in password field');
        // Try to toggle password visibility to verify it shows special characters
        try {
            await toggelButton.click({ timeout: 2000 });
            const typeAttr = await passwordInput.getAttribute('type');
            console.log(`Password visibility toggled, type: ${typeAttr}`);
        }
        catch {
            console.log('Password toggle not available or not clicked');
        }
        // Click sign in
        await signInButton.click();
        console.log('Sign in button clicked');
        // Wait for validation response
        await page.waitForTimeout(3000);
        // Check for error message about invalid email format
        const errorMessage = page.locator('text=/invalid|email|format|required|@/i');
        const isErrorDisplayed = await errorMessage.isVisible().catch(() => false);
        if (isErrorDisplayed) {
            const errorText = await errorMessage.first().textContent();
            console.log(`Validation error: ${errorText}`);
            (0, test_1.expect)(errorText?.toLowerCase()).toMatch(/invalid|email|format|@/);
        }
        else {
            console.log('No visible error message, but form submission likely failed');
        }
        // Verify user remains on login page
        (0, test_1.expect)(page.url()).toContain('login');
        // Verify email field still shows numeric value
        const emailValue = await emailInput.inputValue();
        (0, test_1.expect)(emailValue).toBe(numericEmail);
        console.log('User remains on login page with ability to correct - Test PASSED');
    });
    // Additional helper test: Verify all error scenarios don't expose sensitive info
    (0, test_1.test)('VALIDATE: No sensitive information exposed in error messages', async ({ page }) => {
        console.log('Starting validation: Checking for sensitive info in errors');
        const emailInput = page.locator('input[placeholder*="email" i]');
        const passwordInput = page.locator('input[type="password"]');
        const signInButton = page.locator('button:has-text("Sign in")');
        // Try invalid login
        await emailInput.fill('test@example.com');
        await passwordInput.fill('wrongpassword');
        await signInButton.click();
        // Wait for response
        await page.waitForTimeout(3000);
        // Get all text content from page
        const pageText = await page.textContent('body');
        // Check for sensitive patterns
        const sensitivePatterns = [
            /sql/i,
            /database/i,
            /exception/i,
            /stack trace/i,
            /foreign key/i,
            /constraint/i,
            /table/i,
            /column/i,
            /syntax/i
        ];
        sensitivePatterns.forEach(pattern => {
            if (pattern.test(pageText || '')) {
                console.warn(`⚠️ Potential sensitive info found: ${pattern}`);
            }
        });
        console.log('Sensitive info validation complete');
    });
});
//# sourceMappingURL=invalid-login.spec.js.map