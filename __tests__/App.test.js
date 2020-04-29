const puppeteer = require('puppeteer');

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 25,
      }
    )  
    page = await browser.newPage()
})
  
it('Sign in with invalid credentials', async () => {
    await page.goto('http://localhost:3001')
    await page.type('input[placeholder="Username"]', "mdp");
    await page.type('input[placeholder="Password"]', "testun");
    await page.click('button');
    await page.waitForNavigation();
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Connected as mdp');
  });
  
  afterAll(() => {
    browser.close()
  })
  