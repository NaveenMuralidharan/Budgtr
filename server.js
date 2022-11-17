const express = require("express");

const app = express();

const PORT = 3001;

const budgets = require("./models/budget");

const bankAccount = 3000;

app.use(express.urlencoded( {extended: true} ))

// ROUTES - INDUCES

// INDEX route
app.get('/budgets', (req, res)=>{

    // find balance in bank acc
        // map all amounts into own array
        let amounts = budgets.map((budget)=>{
            return budget.amount;
        })
        // find sum of all amounts
        let bankSum = amounts.reduce((a, b)=>a+b, 0)
        console.log(bankSum)

    res.render('index.ejs', {budgets: budgets, bankSum: bankSum})
})

// NEW ROUTE
app.get('/budgets/new', (req, res)=>{
    res.render('new.ejs')
})

// CREATE ROUTE
app.post('/budgets', (req, res)=>{
    
    let tags = req.body.tags.split(" ");
    req.body.tags = tags;
    budgets.push(req.body);
    res.redirect('/budgets')
})


// SHOW route
app.get('/budgets/:indexOfBudget', (req, res)=>{
    res.render('show.ejs', { budget: budgets[req.params.indexOfBudget] })
})

// listen
app.listen(PORT, ()=>{
    console.log('App is running on port '+PORT)
})