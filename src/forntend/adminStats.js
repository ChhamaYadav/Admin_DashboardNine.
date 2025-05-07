
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

