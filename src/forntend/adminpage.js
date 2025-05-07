document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");

    const pages = {
        dashboard: `<h1>Welcome back, Admin!</h1>
                                                      <h1>Analytics</h1>
                                                      <div class="analytics-charts">
                                                          <div class="chart-container">
                                                              <h3>Total Sales</h3>
                                                              <canvas id="totalSalesChart"></canvas>
                                                          </div>
                                                          <div class="chart-container">
                                                              <h3>Previous Monthly Sales</h3>
                                                              <canvas id="previousSalesChart"></canvas>
                                                          </div>
                                                          <div class="chart-container">
                                                              <h3>Sales by Product</h3>
                                                              <canvas id="productSalesChart"></canvas>
                                                          </div>
                                                          <div class="chart-container">
                                                              <h3>Sales by Country</h3>
                                                              <canvas id="countrySalesChart"></canvas>
                                                          </div>
                                                      </div>
`,

        products: `<h1>Products</h1>
                   <div class="product-dashboard">
                       <button id="add-product-btn" class="add-product-btn">+ Add Product</button>

                       <table class="product-table">
                           <thead class="head-products">
                               <tr>
                                   <th>ID</th>
                                   <th>Name</th>
                                   <th>Stock</th>
                                   <th>Price</th>
                                   <th>Actions</th>
                               </tr>
                           </thead>
                           <tbody id="product-table-body"></tbody>
                       </table>
                   </div>`,

        orders: `<h1>Orders</h1>
                 <div class="order-dashboard">
                     <table class="order-table">
                         <thead class="head-orders">
                             <tr>
                                 <th>Order ID</th>
                                 <th>Customer</th>
                                 <th>Date</th>
                                 <th>Status</th>
                                 <th>Total</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>
                         <tbody id="order-table-body"></tbody>
                     </table>
                 </div>`,

        users: `<h1>Users</h1><div class="users-dashboard">
                                                   <table class="users-table">
                                                       <thead class="head-users">
                                                           <tr>
                                                               <th>User ID</th>
                                                               <th>Username</th>
                                                               <th>Date</th>
                                                               <th>Country</th>
                                                               <th>Actions</th>
                                                           </tr>
                                                       </thead>
                                                       <tbody id="user-table-body"></tbody>
                                                   </table>
                                               </div>`,
        analytics: `
            <h1>Analytics</h1>
            <div class="analytics-cards">
                <div class="card green">
                    <i class="fas fa-users icon"></i>
                    <div class="card-info">
                        <h3>83</h3>
                        <p>Registered Users</p>
                    </div>
                </div>
                <div class="card orange">
                    <i class="fas fa-eye icon"></i>
                    <div class="card-info">
                        <h3>135</h3>
                        <p>Daily Visitors</p>
                    </div>
                </div>
                <div class="card blue">
                    <i class="fas fa-envelope icon"></i>
                    <div class="card-info">
                        <h3>23</h3>
                        <p>New Messages</p>
                    </div>
                </div>
            </div>

            <div class="analytics-lower">
                <div class="table-section">
                    <h2>Recent Followers</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Project</th>
                                <th>Manager</th>
                                <th>Status</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>Facebook</td><td>Malorum</td><td>In Progress</td><td>80%</td></tr>
                            <tr><td>2</td><td>Twitter</td><td>Evan</td><td>Completed</td><td>100%</td></tr>
                            <tr><td>3</td><td>Google</td><td>John</td><td>In Progress</td><td>75%</td></tr>
                            <tr><td>4</td><td>LinkedIn</td><td>Danial</td><td>In Progress</td><td>85%</td></tr>
                            <tr><td>5</td><td>Tumblr</td><td>David</td><td>In Progress</td><td>90%</td></tr>
                            <tr><td>6</td><td>Tesla</td><td>Mickey</td><td>In Progress</td><td>95%</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="map-section">
                    <h2>World Market</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/BlankMap-World.svg/1024px-BlankMap-World.svg.png" alt="World Map" class="world-map" />
                </div>
            </div>

        `,
        settings: `<h1>Settings</h1><p>Change your dashboard settings.</p>`,
    };

    const productsData = [
        { id: 1, name: "T-Shirt", stock: 120, price: "$15.00" },
        { id: 2, name: "Jeans", stock: 45, price: "$40.00" },
        { id: 3, name: "Jacket", stock: 25, price: "$70.00" }
    ];

    const ordersData = [
        { id: 101, customer: "John Doe", date: "2025-05-01", status: "Pending", total: "$120.00" },
        { id: 102, customer: "Jane Smith", date: "2025-05-03", status: "Shipped", total: "$75.00" },
        { id: 103, customer: "Alice Johnson", date: "2025-05-06", status: "Delivered", total: "$200.00" },
    ];

    const usersData=[
    { id: 1, username: "admin1", signupDate: "2024-10-01", country: "USA" },
        { id: 2, username: "moderator2", signupDate: "2024-11-15", country: "UK" },
        { id: 3, username: "user3", signupDate: "2025-01-22", country: "Germany" },
    ];

    function renderProductTable() {
        const tableBody = document.getElementById("product-table-body");
        if (!tableBody) return;

        tableBody.innerHTML = "";
        productsData.forEach(product => {
            tableBody.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.stock}</td>
                    <td>${product.price}</td>
                    <td><button class="edit-product-btn">Edit</button>
                    <button class="delete-product-btn">Delete</button></td>
                </tr>`;
        });
    }

    function renderOrderTable() {
        const tableBody = document.getElementById("order-table-body");
        if (!tableBody) return;

        tableBody.innerHTML = "";
        ordersData.forEach(order => {
            tableBody.innerHTML += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>${order.date}</td>
                    <td>${order.status}</td>
                    <td>${order.total}</td>
                    <td><button class="view-btn">View</button>
                    <button class="update-btn">Update</button></td>
                </tr>`;
        });
    }

    function renderUserTable(){
        const tableBody=document.getElementById("user-table-body");
        if(!tableBody) return;

        tableBody.innerHTML="";
        usersData.forEach(user=>{
            tableBody.innerHTML += `
            <tr>
            <td>${user.id}</td>
             <td>${user.username}</td>
             <td>${user.signupDate}</td>
             <td>${user.country}</td>
                            <td>
                                <button class="edit-user-btn">Edit</button>
                                <button class="delete-user-btn">Delete</button>
                                <button class="reset-password-btn">Reset Password</button>
                            </td>
                            </tr>
            `;
        });
        }


    function loadPage(key) {
        content.innerHTML = pages[key] || "<h1>Page not found</h1>";
        if (key === "products") renderProductTable();
        if (key === "orders") renderOrderTable();
        if(key === "users") renderUserTable();
        if(key === "analytics") renderAnalytics();
        if(key ==="dashboard") renderStatistics();
    }

    // Navigation links
    ["dashboard", "products", "orders", "users", "analytics", "settings"].forEach(key => {
        const link = document.getElementById(`${key}-link`);
        if (link) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                loadPage(key);
            });
        }
    });

    // Add product button
    document.addEventListener("click", function (e) {
        if (e.target && e.target.id === "add-product-btn") {
            window.location.href = "products.html"; // Or handle modal/form SPA-style
        }
    });

    // Load initial view
    loadPage("dashboard");
});

//Analytics page
function renderAnalytics() {
    const totalSales = ordersData.reduce((acc, order) => acc + parseFloat(order.total.replace("$", "")), 0);
    const totalOrders = ordersData.length;
    const totalUsers = usersData.length;

    // Optionally display these somewhere in the DOM
    const salesEl = document.getElementById("total-sales");
    const ordersEl = document.getElementById("total-orders");
    const usersEl = document.getElementById("total-users");

    if (salesEl) salesEl.textContent = `$${totalSales.toFixed(2)}`;
    if (ordersEl) ordersEl.textContent = totalOrders;
    if (usersEl) usersEl.textContent = totalUsers;

    // Render chart using Chart.js
    const ctxElement = document.getElementById("salesChart");
    if (typeof Chart !== "undefined" && ctxElement) {
        const ctx = ctxElement.getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ordersData.map(order => order.date),
                datasets: [{
                    label: "Order Value ($)",
                    data: ordersData.map(order => parseFloat(order.total.replace("$", ""))),
                    backgroundColor: "#4A90E2"
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

function renderStatistics() {
    // Total Sales (Line)
    new Chart(document.getElementById("totalSalesChart"), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Total Sales',
                data: [1200, 1500, 1800, 2000, 2200],
                borderColor: '#2196F3',
                backgroundColor: 'rgba(33,150,243,0.1)',
                tension: 0.4,
                fill: true
            }]
        }
    });

    // Previous Sales (Bar)
    new Chart(document.getElementById("previousSalesChart"), {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sales',
                data: [300, 400, 500, 600],
                backgroundColor: '#FF9800'
            }]
        }
    });

    // Sales by Product (Pie)
    new Chart(document.getElementById("productSalesChart"), {
        type: 'pie',
        data: {
            labels: ['Dresses', 'Tops', 'Bottoms', 'Accessories'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#E91E63', '#9C27B0', '#3F51B5', '#009688']
            }]
        }
    });

    // Sales by Country (Doughnut)
    new Chart(document.getElementById("countrySalesChart"), {
        type: 'doughnut',
        data: {
            labels: ['India', 'Thailand', 'USA', 'UK'],
            datasets: [{
                data: [50, 20, 15, 15],
                backgroundColor: ['#4CAF50', '#FFC107', '#03A9F4', '#F44336']
            }]
        }
    });
}


