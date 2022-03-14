const axios = require('axios').default;
const fs = require('fs');
const helpers = require('./helper.js');
const prompt = require('prompt-sync')();

const fileName = prompt('Digite o nome do arquivo: ');
const userName = prompt('Digite o nome do usuário: ');
const title = prompt('Digite o título do artigo: ');
const tags = prompt('Digite as tags separadas por espaço: ').split(' ');

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

const sendPostRequest = async (stringArticle, userName, title, tags) => {
  try {
    // Send post request to API
    const body = {
      article: {
        title,
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

sendPostRequest(stringArticle, userName, title, tags);
