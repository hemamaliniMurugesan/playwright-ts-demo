import {test, expect} from '@playwright/test';

test('open google', async({page})=>
{
await page.goto('https://qa-in.skillup.online/artificial-intelligence-courses-and-programs/?utm_source=websiteinternal&utm_medium=megamenu&utm_campaign=NA');
await expect(page).toHaveTitle(/Artificial Intelligence/);
await page.getByPlaceholder('Full Name').fill('hemamalini@skillup.tech');
await page.getByLabel('Email').fill('Test@123');
if(page.url().includes('-in.skillup.online'))
{
    await expect(page.getByText('Placement')).toBeVisible;
}
const locateButton = page.getByRole('button',{name : 'Subscribe'});
await locateButton.hover();
await locateButton.click();
});