export const Login = {

    TestUrl: 'https://www.amazon.com/',
    SignInLink: './/a[@id=\'nav-link-accountList\']',
    SignInButton: './/span[@class=\'nav-line-3\']',
    EmailInput: './/input[@type=\'email\']',
    PasswordInput: './/input[@type=\'password\']',
    ContinueButton: './/input[@id=\'continue\']',
    LoginMail: './/span[contains(text(),\'buyer.nvg01@gmail.com\')]',
    SignInButton: './/input[@id=\'signInSubmit\']',
    AuthenRequiredText: './/h1[contains(text(), \'Authentication required\')]',
    OTPInput: './/input[@required]',
    OTPSubmitButton: './/input[@type=\'submit\']',
    LoginSuccessMsg: './/span[contains(text(),\'Hello, Anh\')]',
    SignOutLink: './/span[contains(text(),\'Sign Out\')]',
}
export const InvalidLogin = {
    InvalidEmailMsg: './/span[contains(text(),\'We cannot find an account with that email address\')]',
    InvalidPasswordMsg: './/span[contains(text(),\'Your password is incorrect\')]',
    BlankEmailMsg: './/div[contains(text(),\'Enter your email or mobile phone number\')]',
    GoBackToPreviousPageButton: './/span[contains(text(),\'Go back to previous page\')]',
}
export const ValidLoginData = {
    EmailAddress: 'buyer.nvg01@gmail.com',
    Password: 'Nvg@2020'
}
export const InvalidEmailData = {
    1: 'buyer1.nvg01@gmail.com',
    2: 'test@', 
    3: '~!@#$%^&*()',
}
export const InvalidPasswordData = {
    1: '134566',
    2: 'qwert',
    3: '~~!@#$%^'
}