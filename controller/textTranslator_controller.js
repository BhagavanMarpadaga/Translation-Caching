const dotenv = require('dotenv').config();
const axios = require('axios').default;//to send asynchronous http req to rest endPoints
const { v4: uuidv4 } = require('uuid');
const NodeCache = require("node-cache");// for caching requested data
const myCache = new NodeCache({ stdTTL: 100000 });//keeping caching time to be 100sec

//function to translate code
module.exports.translateText = function (req, res) {

   
    //get information from req.body
    const text = req.body.translateText;
    const from = req.body.translatefrom;
    const to = req.body.translateTo;
    
    //return 400 if requested information is invalid
    if(!text||!from||!to)
    {
        return res.status(400).json({
            message:"Invalid input"
        })
    }
   
    //if requested information is already present return it 
    if (myCache.has(text)) {
        let getCache = myCache.get(text).to;
  
        let reqText = getCache.filter((item) => {
            if (item.to === to) {
                return item.text;
            }
        })
       
        return res.status(200).json({
            message: "success",
            text: reqText[0]
        })
        
    } //else make an api call to get information
    else {
        const subscriptionKey = process.env.SUBSCRIPTION_KEY;
        const endpoint = process.env.ENDPOINT;
        const location = process.env.LOCATION;

        //make a call to rest end point 
        //requesting text translation to hindi,kannada,tamil ,telugu apart from
        //requested language and storing it in cache
        axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            params: {
                'api-version': '3.0',
                'from': from,
                'to': [to,'hi','kn','ta','te']
            },
            data: [{
                'text': text
            }],
            responseType: 'json'
        }).then(function (response) {
            
            let translatedText = { to: response.data[0].translations }
           
            //store it in cache
            myCache.set(text, translatedText);

            //return only the requested language translation
            return res.status(200).json({
                message: "success",
                text: response.data[0].translations
            })

        }).catch(err => {
            console.log('error while translating code', err);
            return res.status(500).json({
                message:"internal server error"
            });
        })

    }
}
