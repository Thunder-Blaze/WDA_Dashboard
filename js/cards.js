
        
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
    



        function createMobileToggle() {
            const toggle = document.createElement('button');
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1001;
                background: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                display: none;
                cursor: pointer;
            `;
            document.body.appendChild(toggle);

            const mediaQuery = window.matchMedia('(max-width: 768px)');
            function handleMobileChange(e) {
                toggle.style.display = e.matches ? 'block' : 'none';
            }
            mediaQuery.addListener(handleMobileChange);
            handleMobileChange(mediaQuery);

            toggle.addEventListener('click', () => {
                document.getElementById('sidebar').classList.toggle('active');
            });
        }

        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuItems.forEach(menuItem => menuItem.classList.remove('active'));
                item.classList.add('active');
            });
        });

        createMobileToggle();
