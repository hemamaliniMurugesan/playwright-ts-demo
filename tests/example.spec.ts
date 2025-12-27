import {test, expect} from '@playwright/test';

test('open google', async({page})=>
{
await page.goto('https://qa-in.skillup.online/artificial-intelligence-courses-and-programs/?utm_source=websiteinternal&utm_medium=megamenu&utm_campaign=NA');
await expect(page).toHaveTitle(/artificial-intelligence-courses-and-programs/);
});