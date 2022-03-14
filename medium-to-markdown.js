const mediumToMarkdown = require('medium-to-markdown');
let articlesPath = require('./helper.js');
const fs = require('fs');

const URL =
  'https://medium.com/@igorgiamoniano/sequelize-a-solu%C3%A7%C3%A3o-para-seus-relacionamentos-7d6756c81c17';
// Enter url here
mediumToMarkdown.convertFromUrl(URL).then(function (markdown) {
  // find title in text and replace spaces with underscores
  let title = markdown
    .substring(markdown.search('read') + 5, markdown.search('=='))
    .trim()
    .replace(/\s+/g, '_');

  // find body in text and remove unwanted text
  let body = markdown.substring(markdown.search('read') + 5).trim();

  // write markdown head
  let head = markdown.substring(0, markdown.search('read') + 5).trim();

  // write markdown body in file
  fs.appendFile(
    `${articlesPath.generalPath}/${title}.md`,
    body,
    function (err) {
      if (err) throw err;
      console.log('Saved!');
    }
  );
});
