// Chart 1: Borrower Risk Stratification (Doughnut Chart)
const ctxRisk = document.getElementById('riskTierChart').getContext('2d');
const riskTierChart = new Chart(ctxRisk, {
    type: 'doughnut',
    data: {
        labels: ['Low Risk', 'Medium Risk', 'High Risk'],
        datasets: [{
            data: [61.5, 24.3, 14.2], // Mock distribution representing a realistic portfolio
            backgroundColor: [
                '#10b981', // Green for Low
                '#f59e0b', // Yellow for Medium
                '#ef4444'  // Red for High
            ],
            borderWidth: 0,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        cutout: '65%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 20 }
            }
        }
    }
});

// Chart 2: Default Rate by Recent Inquiries (Bar Chart)
const ctxInquiry = document.getElementById('inquiryDefaultChart').getContext('2d');
const inquiryDefaultChart = new Chart(ctxInquiry, {
    type: 'bar',
    data: {
        labels: ['0 Inquiries', '1 Inquiry', '2 Inquiries', '3+ Inquiries'],
        datasets: [{
            label: 'Historical Default Rate (%)',
            data: [4.2, 5.8, 8.1, 19.5], // Illustrates the 2.4x jump at 3+ inquiries
            backgroundColor: [
                '#3b82f6',
                '#3b82f6',
                '#3b82f6',
                '#ef4444' // Highlight the dangerous tier in red
            ],
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Default Rate (%)' }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + '% Default Rate';
                    }
                }
            }
        }
    }
});
