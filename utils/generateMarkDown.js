function generateMarkDown(data) {

    return `

<h1 align="center">${data.projectTitle}</h1>

![License Badge](https://img.shields.io/github/license/${data.githubUser}/${data.repoName}})

---

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


<h4>Check out my Github for more projects</h4>

[![](https://img.shields.io/badge/github-blue?style=for-the-badge)](https://github.com/${data.githubUser})

<h4>Have a question? Feel free to drop me an email.

📧[${data.email}](mailto:${data.email})

---

# License

#### Copyright© [${data.githubUser}](https://github.com/${data.githubUser}). All rights reserved.
#### Licensed under *${data.license}*

---
    `
}

// function badge(data) {

//     let url = '';

//     switch (data) {
//         case 'Mozilla Public License 2.0':
//             url = '(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
//             break;
//         case 'GNU GPL v3':
//             url = '(https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//             break;
//         case 'The MIT License':
//             url = '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//             break;
//         case 'The Perl License':
//             url = '(https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
//             break;
//         case 'IBM Public License Version 1.0':
//             url = '(https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
//             break;
//         default:
//             break;
//     }
//     return url;
// }

module.exports = generateMarkDown;