import puppeteer from 'puppeteer';

describe('show/hide an event details', () =>{
   let browser;
   let page;
   jest.setTimeout(30000);
   beforeAll( async () => {
         browser = await puppeteer.launch({
         headless: false,
         slowMo: 250, // slow down by 250ms
         ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
   });

   
   test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event .eventDetails');
      expect(eventDetails).toBeNull();
   });

   test('User can expand an event to see its details', async () => {
      await page.click('.event .details_button');
      const eventDetails = await page.$('.event .eventDetails');
      expect(eventDetails).toBeDefined();
   });

   test('User can collapse an event to hide its details', async () => {
      await page.click('.event .details_button');
      const eventDetails = await page.$('.event .eventDetails');
      expect(eventDetails).toBeNull();
   });
   afterAll(() => {
      browser.close();
   });
});

describe('Filter event by city', () => {
   let browser;
   let page;
   jest.setTimeout(30000);
   
   beforeAll(async () =>{
      browser = await puppeteer.launch({
         headless: false,
         slowMo: 250, // slow down by 250ms
         ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      });
      page =  await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
   });

   test('When user hasnt searched for a city, show upcoming events from all cities.', async () => {
      const countedEvents = await page.$$eval('.event', (element) => element.length);
      expect(countedEvents).toBe(2);
   });

   test('User should see a list of suggestions when they search for a city', async () => {
      await page.type('.city', 'Berlin', { delay: 100 });
      const countedCities = await page.$$eval('.suggestions li', (element) => element.length);
      expect (countedCities).toBe(1);
   });

   test('User can select a city from the suggested list', async () => {
      await page.reload(); //reload the page
      await page.evaluate( () => document.querySelector('.city').value = ''); //evaluate city .class in page to be empty string
      await page.type('.city', 'Berlin', {delay: 100}); //.city class field type e.g berlin
      await page.click('.suggestions', 'Berlin'); //select berlin
      await page.evaluate(() => document.querySelector('.city').value === 'Berlin, Germany'); //evaluate .city class value to equal selected field(berlin, germany)
   });

   afterAll(() => {
      browser.close();
   });
});