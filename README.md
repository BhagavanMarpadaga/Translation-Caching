<h1>Translation Caching</h1>
    <p>This is a project to design an API to translate text from one language to another language</p>
    <ul>
        <li>Tech Stack used: NodeJS,Express</li>
        <li>Azure Bing as an external service for actual translation</li>
        <li>node-cache package for caching</li>
        <li>Mocha chai to test the apis</li>
    </ul>
<h1>Task</h1>
    <ul>
        <li>Create a web server with a RESTful API to translate a text from one language to another</li>
        <li>For the actual translation, you can use an external service like Google Translate or Bing Translations. 
        The source and target language should be definable via the API</li>
        <li>In addition, we want to cache (store in Database) translations, in order to avoid repeated hits to the translation API. The 
        cache must be persistent!</li>
        <li>The server should have an extensible architecture. E.g. We may want to change our caching strategy or switch out our 
        translation service</li>
    </ul>
    <h1>Git Clone</h1>
    <p>To use this repository in your local system-</p>
    <p>git clone https://github.com/BhagavanMarpadaga/Hospital-api.git</p>
