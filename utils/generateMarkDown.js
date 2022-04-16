function generateMarkDown(data) {
    return `
<font color='#34ebeb'><h1 align="center">${data.projectTitle}</h1></font>

[![License Badge]${badge(data.license)}

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

# <font color='red'>Installation</font>

# Usage

${data.usage}

# Contribution

${data.contribution}

# Test

${data.test}

# Questions

---
<font color='#7657ff'><h1 align="center">Contact Me</h1></font>
  
* 👤GitHub Profile: [${data.github_user}](https://github.com/${data.github_user})
* <h4>Have a question? Feel free to drop me an email.
* 📧email: [${data.email}](mailto:${data.email})
---

# License

#### Copyright© [${data.github_user}](https://github.com/${data.github_user}). All rights reserved.
#### License under <font color='#def531'>*${data.license}*</font>

---
    `
}

function badge(data) {

    let url = '';

    switch (data) {
        case 'Mozilla Public License 2.0':
            url = '(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'GNU GPL v3':
            url = '(https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'The MIT License':
            url = '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'The Perl License':
            url = '(https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            break;
        case 'IBM Public License Version 1.0':
            url = '(https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            break;
        default:
            break;
    }
    return url;
}

module.exports = generateMarkDown;