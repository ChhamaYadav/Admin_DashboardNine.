document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");
    const pages = {
        dashboard: `<h1>Welcome back, Admin!</h1>
        <div class="dashboard-statstics-cards">
            <div class="stats-card">
                <h4>Total Orders</h4>

                <p>1,245
                 <div class="card-change positive">
                    <span>↑ 23.5%</span> from last week
                 </div>
                 <span class="status pending">• 43 Pending</span></p>
            </div>
            <div class="stats-card">
                <h4>Total Sales</h4>
                <p>$87,400</p>
                <div class="card-change positive">
                    <span>↑ 12.5%</span> from last week
                  </div>
            </div>
            <div class="stats-card">
                <h4>Products Sold</h4>
                <p>3,120</p>
                 <div class="card-change positive">
                 <span>↑ 13.5%</span> from last week
                 </div>
            </div>
            <div class="stats-card">
                <h4>Countries Reached</h4>
                <p>27</p>
            </div>
        </div>
                <!-- Charts Layout (same as before) -->
                                                      <div class="analytics-charts">
                                                      <div class="chart-row large">
                                                       <div class="chart-container">
                                                                                                                    <h3>Total Sales</h3>
                                                                                                                    <canvas id="totalSalesChart"></canvas>
                                                                                                                </div>
                                                      </div>
                                                        <div class="chart-row small">
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
                   </div>
                   <div id="add-product-modal" class="modal hidden">
                       <div class="modal-content">
                           <span class="close-btn" id="close-modal">&times;</span>
                            <form id="productForm">
                                   <h2>Add / Edit Product</h2>

                                   <!-- Product Image Preview -->
                                   <div class="image-preview">
                                       <img id="previewImage" src="#" alt="Product Image" style="display:none;">
                                   </div>

                                   <!-- Image Upload -->
                                   <label for="images">Upload Product Images (min 4):</label>
                                   <input type="file" id="images" name="images" accept="image/*" multiple required>
                                   <div id="previewContainer"></div>

                                   <!-- Product Name -->
                                   <label>Product Name</label>
                                   <input type="text" id="name" placeholder="e.g. Leather Tote Bag" required>

                                   <!-- Price -->
                                   <label>Price (₹)</label>
                                   <input type="number" id="price" placeholder="e.g. 3499" required>

                                   <!-- Colors -->
                                   <label>Available Colors</label>
                                   <div class="color-options">
                                       <input type="color" value="#000000">
                                       <input type="color" value="#5C4033">
                                       <input type="color" value="#B2C1A2">
                                       <input type="color" value="#B2C1A2">
                                       <input type="color" value="#B2C1A2">
                                   </div>

                                   <!-- Description -->
                                   <label>Description</label>
                                   <textarea id="description" placeholder="e.g. A stylish leather tote bag with ample storage..." required></textarea>

                                   <label>In Stock</label>
                                   <input type="number" id="quantity" placeholder="e.g. 10" required>

                                   <!-- Status -->
                                   <label>Status</label>
                                   <select id="status">
                                       <option value="active">Active</option>
                                       <option value="inactive">Inactive</option>
                                   </select>

                                   <!-- Buttons -->
                                   <div class="form-buttons">
                                       <button type="submit" class="add-btn">Add Product</button>
                                       <button type="button" class="cancel-btn" onclick="closeModal()">Cancel</button>
                                   </div>
                               </form>
                       </div>
                   </div>`,

        orders: `<h1>Orders</h1>
                 <div class="order-dashboard">
                 <div class="dashboard-orders-cards">
                             <div class="orders-card-pending">
                              <i class="fas fa-hourglass-half icon"></i>
                              <div class="card-info">
                                 <h4>Orders Pending</h4>
                                    <p>450
                                  </p></div>
                             </div>
                             <div class="orders-card-shipped">
                             <i class="fas fa-truck icon"></i>
                             <div class="card-info">
                                 <h4>Orders Shipped</h4>
                                 <p>120</p>
                             </div>
                             </div>
                             <div class="orders-card-delivered">
                             <i class="fas fa-box-open icon"></i>
                             <div class="card-info">
                                 <h4>Orders Delivered</h4>
                                 <p>356</p></div>
                                  </div>
                     <table class="order-table">
                         <thead class="head-orders">
                             <tr>
                                <th>Status</th>
                                 <th>Order ID</th>
                                 <th>Customer</th>
                                 <th>Date</th>
                                <th>Total</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>
                         <tbody>
                         <tr class="order-now">
                         </tbody>
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

    const ordersData = [
        { status: "Pending",id: 101, customer: "John Doe", date: "2025-05-01",  total: "$120.00" },
        { status: "Shipped",id: 102, customer: "Jane Smith", date: "2025-05-03",  total: "$75.00" },
        { status: "Delivered",id: 103, customer: "Alice Johnson", date: "2025-05-06",  total: "$200.00" },
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

    document.addEventListener("change",function(e){
        if(e.target.classList.contains("status-dropdown")){
        const dropdown = e.target;

                // Remove any previously applied status class
                dropdown.classList.remove("status-pending", "status-shipped", "status-delivered");

                // Get new selected value
                const newStatus = dropdown.value.toLowerCase();

                // Add the new status class
                dropdown.classList.add(`status-${newStatus}`);
        }
    });

    function renderOrderTable() {
        const tableBody = document.getElementById("order-table-body");
        if (!tableBody) return;

        tableBody.innerHTML = "";
        ordersData.forEach(order => {
        const statusClass=`status-${order.status.toLowerCase()}`;//fetching status in dropdown
            tableBody.innerHTML += `
                <tr>
                <td><select class="status-dropdown ${statusClass}">
                                                <option value="pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
                                                <option value="shipped" ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
                                                <option value="delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
                                            </select></td>
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>${order.date}</td>
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
   // Show/hide modal
   document.addEventListener("click", function (e) {
       if (e.target && e.target.id === "add-product-btn") {
           document.getElementById("add-product-modal").classList.remove("hidden");
       }
       if (e.target && e.target.id === "close-modal") {
           document.getElementById("add-product-modal").classList.add("hidden");
       }
   });

   // Handle Add Product form submission
   document.addEventListener("submit", async function (e) {
       if (e.target && e.target.id === "productForm") {
           e.preventDefault();

           const name = document.getElementById("name").value.trim();
           const price = parseFloat(document.getElementById("price").value);
           const description = document.getElementById("description").value.trim();
           const quantity = parseInt(document.getElementById("quantity").value);
           const status = document.getElementById("status").value;

           // Extract color values from color pickers
           const colorInputs = document.querySelectorAll(".color-options input[type=color]");
           const colors = Array.from(colorInputs).map(input => input.value);

//           // Extract image URLs from preview images
//           const imageElements = document.querySelectorAll("#previewContainer img");
//           const imageURLs = Array.from(imageElements).map(img => img.src);  // These are base64 or URLs


//const name = "Test Product";
//const price = 99.99;
//const description = "This is a test product description.";
//const colors = ["Teal", "Brown", "Black"];
//const quantity = 10;
//const status = "Available";
 // red, green, blue
//const imageURLs = [
//    "https://via.placeholder.com/150",
//    "https://via.placeholder.com/150",
//    "https://via.placeholder.com/150",
//    "https://via.placeholder.com/150"
//];

//           if (!name || isNaN(price) || isNaN(quantity) || colors.length < 1 || imageURLs.length < 4) {
//               alert("Please fill all fields and add at least 4 images.");
//               return;
//           }

           const productData = {
               productName: name,
               productPrice: price,
               description: description,
               productColors: colors,
               productQuantity: quantity,
               productStatus: status,
               productimage_URL: imageURLs
           };

           try {
               const response = await fetch("http://localhost:8080/api/products/save", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify(productData)
               });

               if (!response.ok) throw new Error("Failed to save product");

               const savedProduct = await response.json();
               alert("Product added to database!");
               console.log("Raw backend response :",savedProduct);

               productsData.push({
                   id: savedProduct.productId,
                   name: savedProduct.productName,
                   stock: savedProduct.productQuantity,
                   price: `$${savedProduct.productPrice.toFixed(2)}`
               });

               renderProductTable();
               document.getElementById("productForm").reset();
               document.getElementById("images").value = null;
               document.getElementById("previewContainer").innerHTML = "";
               document.getElementById("add-product-modal").classList.add("hidden");
           } catch (err) {
               console.error(err);
               alert("Error saving product. Check console.");
           }
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
                borderColor: '#CBB89D',
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
                backgroundColor: '#A49382'
            }]
        }
    });

    // Sales by Product (Pie)
    new Chart(document.getElementById("productSalesChart"), {
        type: 'pie',
        data: {
            labels: ['Tote', 'Bagpacks', 'Slings', 'Wallets','Clutches','Duffel'],
            datasets: [{
                data: [40, 25, 20, 15,12,14],
                backgroundColor: ['#D7CCC8', '#CBB89D', '#D8A48F', '#8E735B','#4B3B2A','#FAF4ED']
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
                backgroundColor: ['#D7CCC8', '#CBB89D', '#D8A48F', '#8E735B','#4B3B2A','#FAF4ED']
            }]
        }
    });
}

// Simulated values for demo
const newUsers = 73;
const pendingOrders = 450;

document.getElementById('user-badge').textContent = newUsers;
document.getElementById('order-badge').textContent = pendingOrders;

//for adding minimum add four pictures
document.getElementById('images').addEventListener('change', function () {
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = ""; // Clear previous previews

  const files = this.files;

  if (files.length < 4) {
    alert("Please upload at least 4 images.");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')) continue;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.margin = "5px";
      img.style.objectFit = "cover";
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});


