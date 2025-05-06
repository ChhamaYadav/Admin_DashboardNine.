document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");

    const pages = {
        dashboard: `<h1>Welcome back, Admin!</h1><p>This is the dashboard overview.</p>`,

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

        users: `<h1>Users</h1><p>Manage user accounts.</p>`,
        analytics: `<h1>Analytics</h1><p>See your store analytics here.</p>`,
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

    function loadPage(key) {
        content.innerHTML = pages[key] || "<h1>Page not found</h1>";
        if (key === "products") renderProductTable();
        if (key === "orders") renderOrderTable();
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
