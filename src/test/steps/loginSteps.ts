import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber'
import { page } from '../../hooks/cucumberHooks.ts';
import LoginPage from '../../pages/loginPage.ts';
  setDefaultTimeout(60 * 1000);
 let login:LoginPage
Given('User navigate to the application', async () => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

Given('user enter the username {string}', async function (userName) {
  login=new LoginPage(page);
  await login.enterUserName(userName)
});


Given('user enter the password {string}', async function (password) {
 await  login.enterPassword(password)
});



When('user click the login button', async function () {
  await login.clickLogin()
});


Then('user successfully land to home screen', async function () {
  await page.getByAltText('profile picture').isVisible();
});


When('user should get error message', async function () {
    await login.verifyErrorMes('Invalid credentials')
});
