#  Playwright Form Automation Test

This project uses Playwright to automatically test form input fields on the [CloudQA Automation Practice Form](https://app.cloudqa.io/home/AutomationPracticeForm).

It simulates a real user by typing into the fields with visible delays.

---

##  What it Does

- Opens the practice form page
- Fills in three fields:
  - First Name
  - Last Name
  - Email
- Types each character with a short delay
- Verifies the values are correctly filled

---

##  Setup Instructions

Follow these steps to clone and run the test on any system:

### 1. Clone the Repository

### 2. In terminal, run the following commands
```
git clone https://github.com/DhairyaKaithwar/cloudQa-test.git
cd cloudQa-test
npm install
npx playwright install

-- to run tests--
npx playwright test --headed
OR
npx playwright test 
```

this would run the tests.....

