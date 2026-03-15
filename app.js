document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCharts();
    populateRTM();
    populateDefects();
});

// Navigation Logic
function initNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    const pageTitle = document.getElementById('page-title');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-section');

            // Update buttons
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update sections
            sections.forEach(s => s.classList.remove('visible'));
            document.getElementById(target).classList.add('visible');

            // Update Header
            pageTitle.innerText = btn.innerText.replace(/[^\w\s]/gi, '').trim();
        });
    });
}

// Charts Logic
function initCharts() {
    // 1. Overview Pass Chart
    const ctxOverview = document.getElementById('mainPassChart').getContext('2d');
    new Chart(ctxOverview, {
        type: 'doughnut',
        data: {
            labels: ['Passed', 'Failed', 'Blocked'],
            datasets: [{
                data: [232, 14, 4],
                backgroundColor: ['#238636', '#f85149', '#8b949e'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            cutout: '80%'
        }
    });

    // 2. Risk Matrix Chart (Scatter Plot)
    const ctxRisk = document.getElementById('riskGridChart').getContext('2d');
    new Chart(ctxRisk, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Critical',
                    data: [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 4 }],
                    backgroundColor: '#f85149',
                    pointRadius: 10
                },
                {
                    label: 'High',
                    data: [{ x: 3, y: 5 }, { x: 2, y: 5 }],
                    backgroundColor: '#d29922',
                    pointRadius: 8
                },
                {
                    label: 'Medium',
                    data: [{ x: 3, y: 3 }, { x: 4, y: 2 }],
                    backgroundColor: '#bc8cff',
                    pointRadius: 6
                }
            ]
        },
        options: {
            scales: {
                x: { min: 0, max: 6, title: { display: true, text: 'Probability', color: '#8b949e' } },
                y: { min: 0, max: 6, title: { display: true, text: 'Impact', color: '#8b949e' } }
            },
            plugins: { legend: { labels: { color: '#8b949e' } } }
        }
    });

    // 3. TSR Pie Chart (White Background version)
    const ctxTSRPie = document.getElementById('tsrPieChart').getContext('2d');
    new Chart(ctxTSRPie, {
        type: 'pie',
        data: {
            labels: ['Passed', 'Failed'],
            datasets: [{
                data: [92.8, 7.2],
                backgroundColor: ['#2ecc71', '#e74c3c']
            }]
        }
    });

    // 4. TSR Bar Chart (Bugs)
    const ctxTSRBar = document.getElementById('tsrBarChart').getContext('2d');
    new Chart(ctxTSRBar, {
        type: 'bar',
        data: {
            labels: ['Critical', 'High', 'Medium', 'Low'],
            datasets: [{
                label: 'Bug Count',
                data: [0, 0, 1, 3],
                backgroundColor: ['#c0392b', '#e67e22', '#f1c40f', '#95a5a6']
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, max: 5 } }
        }
    });
}

// Data Population
function populateRTM() {
    const rtmData = [
        { id: 'BR-01', mod: 'Onboarding', req: 'SSN/TIN for KYC validation', tc: 'TC-ONB-01', status: '✅ Pass' },
        { id: 'BR-05', mod: 'Accounts', req: 'Daily withdrawal limit $5,000', tc: 'TC-ACC-01', status: '✅ Pass' },
        { id: 'BR-08', mod: 'Accounts', req: 'Interest calc for Leap Year', tc: 'TC-ACC-04', status: '✅ Pass' },
        { id: 'BR-14', mod: 'Security', req: 'Multi-Factor Auth (MFA)', tc: 'TC-SEC-01', status: '✅ Pass' },
        { id: 'BR-51', mod: 'Integrity', req: 'Database Atomic transactions', tc: 'TC-INT-01', status: '✅ Pass' },
        { id: 'BR-11', mod: 'Payments', req: 'Swift International transfers', tc: 'TC-PAY-03', status: '⚠️ Fail' }
    ];

    const tableBody = document.querySelector('#rtm-table tbody');
    tableBody.innerHTML = rtmData.map(row => `
        <tr>
            <td><strong>${row.id}</strong></td>
            <td>${row.mod}</td>
            <td>${row.req}</td>
            <td><code>${row.tc}</code></td>
            <td class="status-check">${row.status}</td>
        </tr>
    `).join('');
}

function populateDefects() {
    const defects = [
        { id: 'BUG-101', title: 'MFA code SMS delay', sev: 'High', status: 'Fixed', class: 'sev-high' },
        { id: 'BUG-103', title: 'DB Deadlock during Swift', sev: 'Critical', status: 'Fixed', class: 'sev-critical' },
        { id: 'BUG-112', title: 'UI alignment on iPhone SE', sev: 'Low', status: 'Open', class: 'sev-low' },
        { id: 'BUG-110', title: 'Healthcare copay logic error', sev: 'High', status: 'Hotfix', class: 'sev-high' }
    ];

    const container = document.getElementById('defect-list');
    container.innerHTML = defects.map(bug => `
        <div class="defect-card">
            <div class="defect-header">
                <span class="bug-id">${bug.id}</span>
                <span class="severity-tag ${bug.class}">${bug.sev}</span>
            </div>
            <h4>${bug.title}</h4>
            <div class="defect-footer">
                <span class="badge ${bug.status === 'Fixed' ? 'success' : ''}">${bug.status}</span>
            </div>
        </div>
    `).join('');
}
