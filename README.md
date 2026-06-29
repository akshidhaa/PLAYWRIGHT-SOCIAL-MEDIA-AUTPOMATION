This project demonstrated an end to end automation of a social media application uing playwright with javascript .Playwright a modern automation and testing tool covers user keyflows like login , post creation ,image handling 

TECH STACK 
Playwright
Node.js
VS code
Browsers : Chromium , firefox , WebKit
Automation framework : Page Object Model
#PROJECT STRUCTURE
#SOCIALMEDIA/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD integration
├── e2e/                             # Test Layer
│   ├── example.spec.js
│   └── social.spec.js               # End-to-end test cases
├── pages/                           # Page Object Model
│   ├── loginPage.js
│   ├── postPage.js
│   └── feedPage.js                  # Encapsulates UI actions
├── index.html                       # Sample application UI
├── playwright.config.js             # Framework configuration
├── package.json                     # Dependencies & scripts
└── .gitignore                       # Ignored files
to run these files 
in terminal type , npx playwright test e2e/social.spec.js --headed
