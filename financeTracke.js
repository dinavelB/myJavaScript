    //initiate DOMs
    const transactionList = document.querySelector("#js-transactionList");
    const expenses = document.querySelector("#expense");
    const income = document.querySelector("#income");
    const balance = document.querySelector("#balance");


    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    //set local storage
    function saveTransactions(){
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }
    //

    function updateTotals(){
        let totalIncome = 0;
        let totalExpenses = 0;
        let totalBalance;

        transactions.forEach(transaction =>{
            if(transaction.amount > 0){
                totalIncome += transaction.amount;
            } else{
                totalExpenses += transaction.amount
            }
        })

        totalBalance = totalIncome + totalExpenses;

        //total income is positive, expenses is negative, opposite sign means minus, so we add them
        //if u changed to plus it will add.

        expenses.textContent = `$${Math.abs(totalExpenses)}`;
        income.textContent = `$${totalIncome}`;
        balance.textContent = `$${totalBalance}`;
    }

    

    function displayProduct (){
        transactionList.innerHTML = '';

        //loop an array
        transactions.forEach(transaction => {

            const li = document.createElement("li")
            
            //create a className of li
            li.className = transaction.amount > 0 ? "income" : "expense";
            li.innerHTML = 


            `${transaction.description}

            //amount
             <span>
            ${transaction.amount >0 ? "+" : " "} $ ${transaction.amount}
            </span> 

            //button
           <button onclick = "deleteTransaction(${transaction.id})"> X </button>

            `;

            transactionList.appendChild(li);
            
        })

        updateTotals();
        saveTransactions()

    }
    function deleteTransaction(id) {

        //the index holds the array index or the inner object of the array.
        const index = transactions.findIndex(t => t.id === id);
        if (index !== -1) {
            //splice method removes an index in the array.
            transactions.splice(index, 1);
            displayProduct();
        }
        
    }
    

    function Addproduct(description, amount, id){
        
        if (typeof description !== 'string'){
            throw new Error ("Invalid name of product")
        }
        if(typeof  amount !== 'number' || amount ===0 || !Number.isInteger(amount)){

            //!Number.isInteger() method is not allowing decimals.
            throw new Error ("Amount must be non zero-integer")
        }
        
        
        this.description = description;
        this.amount = amount;
        this.id = Math.floor(Math.random() * 10000);
        //this.id = crypto.randomUUID(); //method that is truly randomize id.
        //push to the array
        transactions.push(this)
    }

    function createProduct(description, amount, id){
        try{
            const product = new Addproduct(description, amount)
            console.log("Product created successfully");
            return product
        } catch (error){
            console.log("error: ",  error.message)
            return;
        }
    }
    
        //creates product
        //demo 
        if(transactions.length === 0){
            const product1 = createProduct("Job", 5000 );
            const product2 = createProduct("Phone", -1000 );
        }

        displayProduct();
        console.log(transactions)