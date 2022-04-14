function generateMarkDown(data) {
    return `
    # ${data.projectTitle}
    ![License Badge]()
    
    ## Description
    ${data.description}

    ## Table of Contents
    [Title](#${data.projecTitle})
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contribution](#contribution)
    [Test](#test)
    [Questions](#questions)

    ## Installation
    ${data.install}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contribution
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Questions
    `
}

module.exports = generateMarkDown;