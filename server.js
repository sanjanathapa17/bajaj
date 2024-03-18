fetch("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount",{
  "method":"POST",
  "headers":{
    "Content-Type":"application/json"
  },
  "body":JSON.stringify({
    "name": "Sanjana",
    "email": "sanjana1167.be21@chitkarauniversity.edu.in",
    "rollNumber": 2111981167,
    "phone": 8360627819 
  })
}).then(response=>response.json()).then(data=>{
  fetch("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks",{
    "method":"POST",
    "header":{
      "content-type": "application/json",
      "bfhl-auth":data.rollNumber 
    },
    "body":JSON.stringify({
      "company": "Bajaj",
      "currentPrice":1507.70,
      "accountNumber":data.accountNumber,
      "githubRepoLink" : " https://github.com/"
    })
  })
})
