# ded-test-task

## Task

Port three basic end-to-end tests for the Demilitarise Education (dED) website from one Javascript testing framework ([Cypress](https://www.cypress.io/)) to another ([Playwright](https://playwright.dev/)).

Specific requirements are as follows:

-   It must be possible to configure the frameworks to run the same tests on different base URLs for different instances:
    -   [The dED staging site](https://staging.ded1.co/)
    -   [The dED production site](https://ded1.co/)
    -   A local instance, eg. http://localhost:8000 (Not relevant for your tasks, but necessary later)
-   Add simple notes to this README, to show how to run the Playwright tests:
    -   In a GUI
    -   from the command line
    -   for different root URLs (eg. staging or production site)


## Playwright

It is not necessary for candidates to have previous knowledge of either Playwright or Cypress. With a firm grasp of ES6 in general the tests should be comprehensible.

Candidates are expected to refer to the excellent [Playwright documentation](https://playwright.dev/docs/intro) to familiarise themselves with the basics. This documentation should be more than sufficient to complete these tasks.


## Prerequisites

-   A command line application, such as the Linux or OSX terminal, or the Windows Subsystem for Linux.
-   [Git](https://git-scm.com/) installed
-   [Node Package Manager](https://docs.npmjs.com/) installed
-   Basic fluency with the command line, Git and ES6


## Tests

The following tests are conducted by the Cypress test files, and candidates are expected to produce Playwright tests which do the same:

-   Test the home page (`cypress/cypress/e2e/home.cy.ts`):
    -   Visit the site root (`<BASE_URL>/`)
    -   Ensure there are no Javascript errors in the console
    -   Ensure the element `p.ded-total-investment` is present
    -   Ensure it contains an value, higher than 1bn, beginning with a pound sign (`£`)
-   Test basic navigation (`cypress/cypress/e2e/treaty.cy.ts`):
    -   Visit the site root (`<BASE_URL>/`)
    -   Find a link `<a>` with href `/how-we-do-it`, and click it
    -   Find a heading `<h2>` with text “treaty”, and click it
    -   Ensure there is a heading with the text “The Demilitarise Education Treaty”
    -   Ensure the URL is `<BASE_URL>/how-we-do-it/treaty`
-   Test university search (`cypress/cypress/e2e/university-search.cy.ts`):
    -   Visit the site root (`<BASE_URL>/`)
    -   Find the element `input.ded-input-search-university`, and enter the string `bri`
    -   Ensure an element appears with text “University of the West of England, Bristol”, and click it
    -   Ensure the page contains a heading with text “University of the West of England, Bristol”
    -   Ensure the breadcrumbs contain “University of the West of England, Bristol”
    -   Ensure there are links containing text:
        -   “policies”
        -   “financial partnerships”
        -   “research partnerships”
        -   “academic partnerships”
        -   “FOI requests”
        -   “actions”


## Instructions to run Cypress tests

Beginning in the directory `cypress`:

Install dependencies:

```
npm ci
```

Run all tests on staging server/production server (see `package.json` scripts):

```
npm run cypress:staging run
npm run cypress:production run
```

Run a specific test on staging server server, eg. `university-search`:

```
npm run cypress:staging run -- --spec 'cypress/e2e/university-search.cy.ts'
```

Run all tests on staging server with GUI:

```
npm run cypress:staging open
```

At the GUI

-   Click “E2E Testing”
-   Choose a browser, eg. Chrome
-   Click “Start E2E Testing in ...”
-   Click any test to run it, eg. “home.cy.ts”


## Instructions to run Playwright tests

Beginning in the directory `playwright`:

Install dependencies:

```
npm ci
```

Run all tests on staging server/production server from the command line (see `package.json` scripts):

```
npm run playwright:staging run
npm run playwright:production run
```

Run all tests on staging/production in GUI mode

```
npm run playwright:ui:staging
npm run playwright:ui:production
```

Run a specific test on staging server server, eg. `university-search`:

```
npm run playwright:staging -- tests/university-search.spec.ts
```

Run a specific test on staging server server in GUI mode, eg. `university-search`:

```
npm run playwright:ui:staging -- tests/university-search.spec.ts
```

Run all tests in headed mode (the browser is visible):

```
npm run playwright:staging -- --headed
npm run playwright:production -- --headed
```