# stock-price-monitor
Technical Assessment For GIC

# Tech Stack Used:  
FE: React.js  
BE: Nodejs  
DB: MongoDB  

# To Start BE:
1. create env variables(For testing can use the public db below):  
  - PORT: 5000
  - CONNECTION_URL: mongodb+srv://DEMO_TEST:D3m0T3St@cluster0.4vgkpmv.mongodb.net/?retryWrites=true&w=majority   
2. run npm run start-demo - This will seed the db with test data and clear previous data inserted - starts with fresh db  

# To Start FE:
1. run npm start

# Unit Tests:  
WIP  

## Additional Notes:  
Price update simulation will be triggered on Search, updates will come in 5 seconds after search, upon which refresh button will display to the user to fetch updated prices.  
