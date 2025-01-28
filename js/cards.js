
        
        let revenueChart = null;

        function initializeRevenueChart() {
            const ctx = document.getElementById('revenueCanvas').getContext('2d');
            revenueChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Income',
                            data: [150000, 130000, 160000, 170000, 190000, 180000],
                            backgroundColor: '#022c22',
                            barThickness: 20
                        },
                        {
                            label: 'Expenses',
                            data: [120000, 140000, 130000, 125000, 145000, 135000],
                            backgroundColor: '#86efac',
                            barThickness: 20
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: true,
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    barPercentage: 0.8,
                    categoryPercentage: 0.9
                }
            });
        }

        
        function collapseAll() {
            document.getElementById('revenueChart').classList.remove('expanded');
            document.getElementById('salesReport').classList.remove('expanded');
            
            if (revenueChart) {
                revenueChart.destroy();
                revenueChart = null;
            }
        }

        document.getElementById('netIncomeCard').addEventListener('click', function(e) {
            e.stopPropagation();
            const chartContainer = document.getElementById('revenueChart');
            
            if (!chartContainer.classList.contains('expanded')) {
                collapseAll();
            }
            
            chartContainer.classList.toggle('expanded');
            
            if (chartContainer.classList.contains('expanded')) {
                if (!revenueChart) {
                    setTimeout(initializeRevenueChart, 300);
                }
            } else {
                if (revenueChart) {
                    revenueChart.destroy();
                    revenueChart = null;
                }
            }
        });

        document.getElementById('totalReturnCard').addEventListener('click', function(e) {
            e.stopPropagation();
            const salesReport = document.getElementById('salesReport');
            
            if (!salesReport.classList.contains('expanded')) {
                collapseAll();
            }
            
            salesReport.classList.toggle('expanded');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.card')) {
                collapseAll();
            }
        });

        function setActive(element) {
            const items = document.querySelectorAll('.menu li');
            items.forEach(item => item.classList.remove('active'));
            element.classList.add('active');
          }