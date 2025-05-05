document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");

    const pages = {
        dashboard: `<h1>Welcome back, Admin!</h1><p>This is the dashboard overview.</p>`,
        products: `<h1>Products</h1>
                       <div class="product-dashboard">
                           <button class="add-product-btn">+ Add Product</button>
                           <button class="edit-product-btn">Edit Product</button>
                           <table class="product-table">
                               <thead>
                                   <tr>
                                       <th>ID</th>
                                       <th>Name</th>
                                       <th>Stock</th>
                                       <th>Price</th>
                                       <th>Actions</th>
                                   </tr>
                               </thead>
                               <tbody id="product-table-body">
                                   <!-- Dynamic product rows will go here -->
                               </tbody>
                           </table>
                       </div>
                   </p>`,
        orders: `<h1>Orders</h1><p>View and manage customer orders.</p>`,
        users: `<h1>Users</h1><p>Manage user accounts.</p>`,
        analytics: `<h1>Analytics</h1><p>See your store analytics here.</p>`,
        settings: `<h1>Settings</h1><p>Change your dashboard settings.</p>`,
    };

    const loadPage = (key) => {
        content.innerHTML = pages[key] || "<h1>Page not found</h1>";
    };

    document.getElementById("dashboard-link").addEventListener("click", () => loadPage("dashboard"));
    document.getElementById("products-link").addEventListener("click", () => loadPage("products"));
    document.getElementById("orders-link").addEventListener("click", () => loadPage("orders"));
    document.getElementById("users-link").addEventListener("click", () => loadPage("users"));
    document.getElementById("analytics-link").addEventListener("click", () => loadPage("analytics"));
    document.getElementById("settings-link").addEventListener("click", () => loadPage("settings"));
});

const productsData = [
    { id: 1, name: "T-Shirt", stock: 120, price: "$15.00" },
    { id: 2, name: "Jeans", stock: 45, price: "$40.00" },
    { id: 3, name: "Jacket", stock: 25, price: "$70.00" }
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
                <td><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>
            </tr>
        `;
    });
}

// Hook into product page load
const loadPage = (key) => {
    content.innerHTML = pages[key] || "<h1>Page not found</h1>";
    if (key === "products") renderProductTable();
};


