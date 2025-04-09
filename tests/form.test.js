import { test, expect } from '@playwright/test';
//target webpage
test('fill and verify three fields with slow typing and delay', async ({ page }) => {

  await page.goto('https://app.cloudqa.io/home/AutomationPracticeForm');

  // fill out first name
  const firstNameInput = page.getByLabel('First name');
  await firstNameInput.type('Dhairya', { delay: 200 }); 
  await expect(firstNameInput).toHaveValue('Dhairya');

  await page.waitForTimeout(1000); 

  // fill out second name
  const lastNameInput = page.getByLabel('Last name');
  await lastNameInput.type('Kaithwar', { delay: 200 });
  await expect(lastNameInput).toHaveValue('Kaithwar');

  await page.waitForTimeout(1000);

  // fill email
  const emailInput = page.getByLabel('Email');
  await emailInput.type('dhairya9d@gmail.com', { delay: 200 });
  await expect(emailInput).toHaveValue('dhairya9d@gmail.com');
});
