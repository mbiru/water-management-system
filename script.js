// Highlight active navbar link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add click event to dashboard cards
document.querySelectorAll('.dashboard-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const value = this.querySelector('.value').textContent;
        alert(`${title}: ${value}`);
    });
});

// Dashboard Quick Actions
const quickActionBtns = document.querySelectorAll('.quick-action-btn');
quickActionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent.includes('Add Meter')) {
      alert('Add Meter: This feature will allow you to add a new meter.');
    } else if (btn.textContent.includes('Generate Report')) {
      alert('Generate Report: This feature will generate a new report.');
    } else if (btn.textContent.includes('View Alerts')) {
      alert('View Alerts: This feature will show all current alerts.');
    }
  });
});

// Animate Chart Placeholder (simple bar animation)
const chartPlaceholder = document.querySelector('.chart-placeholder');
if (chartPlaceholder) {
  chartPlaceholder.innerHTML = '<div class="fake-chart"></div>';
  const chart = chartPlaceholder.querySelector('.fake-chart');
  chart.style.display = 'flex';
  chart.style.alignItems = 'flex-end';
  chart.style.height = '80px';
  chart.style.width = '100%';
  chart.style.gap = '6px';
  const values = [30, 60, 45, 80, 55, 70, 40];
  values.forEach((val, i) => {
    const bar = document.createElement('div');
    bar.style.height = val + 'px';
    bar.style.width = '18px';
    bar.style.background = 'linear-gradient(135deg, #42a5f5 60%, #1e88e5 100%)';
    bar.style.borderRadius = '6px 6px 0 0';
    bar.style.transition = 'height 0.7s cubic-bezier(.4,2,.6,1)';
    bar.style.opacity = '0.85';
    bar.style.boxShadow = '0 2px 8px rgba(30,60,120,0.07)';
    chart.appendChild(bar);
    setTimeout(() => {
      bar.style.height = (val + Math.floor(Math.random()*20)) + 'px';
    }, 400 + i*120);
  });
}

// Highlight the most recent activity
const activityList = document.querySelector('.activity-list');
if (activityList && activityList.firstElementChild) {
  activityList.firstElementChild.style.background = '#e3f2fd';
  activityList.firstElementChild.style.borderRadius = '6px';
  activityList.firstElementChild.style.fontWeight = '600';
}