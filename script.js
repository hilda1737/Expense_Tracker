     // Signup form handling
     document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
    


        // Save credentials to local storage
        const user = {
            username: username,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
    



        // Clear the form
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-password').value = '';
    



        // Show login form and hide signup form
        document.getElementById('signup-container').classList.add('hidden');
        document.getElementById('login-container').classList.remove('hidden');
    });



    
    // Login form handling
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    




        // Retrieve credentials from local storage
        const user = JSON.parse(localStorage.getItem('user'));
    
        // Check if credentials match
        if (user && user.username === username && user.password === password) {
            // Show dashboard and hide login form
            document.getElementById('login-container').classList.add('hidden');
            document.getElementById('dashboard-container').classList.remove('hidden');
        } else {
            alert('Invalid username or password');
        }
    });
    


    // Show login form
    function showLogin() {
        document.getElementById('signup-container').classList.add('hidden');
        document.getElementById('login-container').classList.remove('hidden');
    }




    
    // Show signup form
    function showSignup() {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('signup-container').classList.remove('hidden');
    }



    
    
    // Show and close form functions
    function showTransactionForm() {
        document.getElementById('transaction-form').classList.remove('hidden');
    }
    
    function closeForm(formId) {
        document.getElementById(formId).classList.add('hidden');
    }
    
    function showBudgetForm() {
        document.getElementById('budget-form').classList.remove('hidden');
    }
    
    // Add transaction function
    function addTransaction() {
        const title = document.getElementById('transaction-title').value;
        const value = document.getElementById('transaction-value').value;
        const date = document.getElementById('transaction-date').value;
        const installments = document.getElementById('transaction-installments').value;
        const type = document.getElementById('transaction-type').value;
    
        const tableBody = document.getElementById('transactions-table-body');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="py-2">${title}</td>
            <td class="py-2">${value}</td>
            <td class="py-2">${date}</td>
            <td class="py-2">${installments}</td>
            <td class="py-2">${type}</td>
            <td class="py-2"><button onclick="deleteRow(this)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button></td>
        `;
        tableBody.appendChild(newRow);
        closeForm('transaction-form');
    }
    
    // Add budget function
    function addBudget() {
        const transport = document.getElementById('budget-transport').value;
        const invoices = document.getElementById('budget-invoices').value;
        const shopping = document.getElementById('budget-shopping').value;
        const food = document.getElementById('budget-food').value;
    
        const budgetData = {
            transport: transport,
            invoices: invoices,
            shopping: shopping,
            food: food
        };
    
        // Retrieve existing budgets from localStorage
        let budgets = JSON.parse(localStorage.getItem("budgets")) || [];
    
        // Add new budget entry to the list
        budgets.push(budgetData);
    
        // Save updated budgets list to localStorage
        localStorage.setItem('budgets', JSON.stringify(budgets));
    
        // Clear the inputs
        document.getElementById('budget-transport').value = "";
        document.getElementById('budget-invoices').value = "";
        document.getElementById('budget-shopping').value = "";
        document.getElementById('budget-food').value = "";
    
        displayBudget();
    
        closeForm('budget-form');
    }
    
    // Display budget function
    function displayBudget() {
        const budgets = JSON.parse(localStorage.getItem("budgets")) || [];
        
        const budgetCards = document.getElementById('budget-cards');
        budgetCards.innerHTML = "";
    
        budgets.forEach((budget, index) => {
            budgetCards.innerHTML += `
                <div class="card bg-white p-4 rounded shadow">Transport: $${budget.transport}</div>
                <div class="card bg-white p-4 rounded shadow">Invoices: $${budget.invoices}</div>
                <div class="card bg-white p-4 rounded shadow">Shopping: $${budget.shopping}</div>
                <div class="card bg-white p-4 rounded shadow">Food: $${budget.food}</div>
            `;
        });
    }
    
    // Delete row function
    function deleteRow(button) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
    
    // Function to initialize and display the budget on page load
    function init() {
        displayBudget();
    }
    
    // Call the init function when the page loads
    window.onload = init;
    
    
            // // Login form handling
            // document.getElementById('login-form').addEventListener('submit', function(event) {
            //     event.preventDefault();
            //     document.getElementById('login-container').classList.add('hidden');
            //     document.getElementById('dashboard-container').classList.remove('hidden');
            // });
    
    
            // Show section function
    function showSection(sectionId) {
                const sections = document.querySelectorAll('.content');
                sections.forEach(section => section.classList.add('hidden'));
                document.getElementById(sectionId).classList.remove('hidden');
            }
           
    