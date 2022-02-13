<h1>Translation Caching</h1>
    <p>This is a project to design an API to translate text from one language to another language</p>
    <ul>
        <li>Tech Stack used: NodeJS,Express</li>
        <li>Azure Bing as an external service for actual translation</li>
        <li>node-cache package for caching</li>
        <li>Mocha chai to test the apis</li>
    </ul>
<h2>Task</h2>
    <ul>
        <li>Create a web server with a RESTful API to translate a text from one language to another</li>
        <li>For the actual translation, you can use an external service like Google Translate or Bing Translations. 
        The source and target language should be definable via the API</li>
        <li>In addition, we want to cache (store in Database) translations, in order to avoid repeated hits to the translation API. The 
        cache must be persistent!</li>
        <li>The server should have an extensible architecture. E.g. We may want to change our caching strategy or switch out our 
        translation service</li>
    </ul>
<h2>Usage</h2>
    <ul>
        <li>To use this repository in your local system write: git clone https://github.com/BhagavanMarpadaga/Hospital-api.git </li>
        <li>install dependencies using: npm install</li>
        <li>create a .env file add all security keys i.e.. PORT,SUBSCRIPTION_KEY,ENDPOINT,LOCATION,IP</li>
        <li>Run using command in terminal using npm start</li>
        <li>To translate and see output we can postman by hittling the url<br>EX: URL: http://localhost/8000 and by passing body (x-www-form-urlencoded)  </li>
        <li></li>
    </ul>


