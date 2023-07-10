# React-OpenAI-API-Telecom-Assistant-Prototype
### Requirements:
 * Basic understanding of GitHub and OpenAI API documentation  
 * Visual Studio Code or preffered IDE/Programming Tool
 * Powershell or preffered CLI Terminal
 * OpenAI API Account to Generate API Key ($1-5 USD for Usage/Billing)

### Resources:
OpenAI API Documentation
https://platform.openai.com/docs

### Setup

1. Clone Repository to Local environment.

2. Open the cloned application in Visual Studio Code.

3. Within Powershell terminal, we need to create a new file to store our environment variable to connect OPENAI API. 
   Navigate to the project's root directory. In terminal type and enter:
   New-Item .env
   
4. If you have an OpenAI API account already, generate an API key, at the following link:
   https://platform.openai.com/account/api-keys
   
5. Open our new .env file, replacing the text value with your generated key, type and enter:
   `REACT_APP_CHATGPT_API_KEY=yourSecretOpenAIAPIKey`   
   
6. We need to build dependencies via 'npm install' both in the (Backend) project root and (Frontend) '\csi-chat-gpt-app' directories. Type and enter:

   *Frontend* 
   `cd \csi-chat-gpt-app`
   `npm install`
   
   *Backend*     
   `cd \React-OpenAI-API-Telecom-Assistant-Prototype`
   `npm install`
   

8. Within the CLI terminal, in root directory (Backend), type and enter:
   `node server.js`
   
   This will start the server for API calls to be made.

10. To start the Frontend application, within the respective directory, in the CLI, type and enter:
   `npm start`

   This will start our React application.
