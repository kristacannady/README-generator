// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License: ${data.license}
## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Testing](#Testing)
- [Contact Information](#contact-information)

## Description:
${data.why}

## Installation:
${data.install}

## Usage:
${data.usage}

## License: 
${data.description}

## Contribution:
${data.license}

## Testing:
${data.test}

## Contact Information:
- Email: [${data.email}](mailto:user@example.com)
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
