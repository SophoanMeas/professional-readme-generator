function generateMarkDown(data) {
    return `

<h1 align="center">${data.projectTitle}</h1>

---

![License Badge](https://img.shields.io/github/license/sophoanMeas/professional-readme-generator?&logo=GNU)

[![GitHub version](https://badge.fury.io/gh/sophoanMeas%2Fprofessional-readme-generator.svg)](https://badge.fury.io/gh/sophoanMeas%2Fprofessional-readme-generator)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

# Description

${data.description}

# Table of Contents

[Installation](#installation)

[Usage](#usage)

[Contribution](#contribution)

[Tests](#test)

[Questions](#questions)

[License](#license)

# Installation

${data.installation}
 
# Usage

${data.usage}

# Contribution

${data.contribution}

# Test

${data.test}

# Questions

---

<h1 align="center">Contact Me</h1>


Check out my Github for more projects

[![](https://img.shields.io/badge/github-blue?style=for-the-badge)](https://github.com/${data.githubUser})

Have a question? Feel free to drop me an email.

📧[${data.email}](mailto:${data.email})

---

# License

#### Copyright© [${data.githubUser}](https://github.com/${data.githubUser}). All rights reserved.
#### Licensed under *${data.license}*

---
    `
}

module.exports = generateMarkDown;