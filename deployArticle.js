const axios = require('axios').default;
const fs = require('fs');
const helpers = require('./helper.js');

const path = helpers.pythonPath; // Path to directory with markdown files
const fileName = 'Iniciando_uma_aplicação_com_Django_Framework.md';
const userName = 'igorgbr';
const tituloArtigo = ''
const tags = ['nodejs', 'javascript', 'react', 'react-native', 'django', 'python'];

// Read Markdown file
const readFileSync = (filePath) => {
  try {
    const file = fs.readFileSync(filePath, 'utf8');
    return file;
  } catch (error) {
    console.log(error);
  }
};

const stringArticle = readFileSync(`./${fileName}`);

const sendPostRequest = async (stringArticle, userName, tituloArtigo, tags) => {
  try {
    // Send post request to API
    const body = {
      article: {
        title: tituloArtigo,
        published: true,
        body_markdown: stringArticle,
        tags,
      },
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key': helpers.APIKEY,
    };

    await axios.post(`https://dev.to/api/articles?username=${userName}`, body, {
      headers,
    });
  } catch (error) {
    console.log(error);
  }
};

sendPostRequest(stringArticle, userName, tituloArtigo, tags);
