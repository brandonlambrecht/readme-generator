//Return license badge from ${license} input
function renderLicenseBadge(license) {
  return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
}

// Returns link to license selected
function renderLicenseLink(license) {
  return `[${renderLicenseBadge(license)}](LICENSE)`

}

// Creates a readme template based off 8 questions from questionArr

function generateMarkdown(data) {
  return `
  # ${data.title}
   ${renderLicenseLink(data.license)}

  ## Description
  
  ${data.description}

  ## License
  
  ${data.license}
  
  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [Contribution](#contribution)

  [Tests](#tests)

  [Questions](#questions)
  
  ## Installation

  To install necessary dependencies, run the following command:
  
  ${data.install}
  
  ## Usage

  To use the application type the following into the terminal
  
  ${data.usage}

  ## Contributing
  
  ${data.contribute}
  
  ## Tests
  
  To run test, run the following command:
  
  ${data.test}
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me at ${data.email}. You can find more of my work at[${data.username}](https//github.com/${data.username}/).
    `
}

module.exports = generateMarkdown;
