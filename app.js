/* ═══════════════════════════════════════════
   app.js — Interactive Logic
═══════════════════════════════════════════ */

const MINISTERS = [
  {
    id: 1,
    name: "Balendra Shah",
    shortName: "Balen Shah",
    role: "PM & Defence",
    emoji: "🏛️",
    color: ["#dc2626", "#991b1b"],
    status: "detailed",
    pillTags: ["💰 NPR 1.46Cr", "🏡 Land", "💍 190 Tolas Gold"],
    numericAssets: { cash: 14600000, goldTola: 190, propertyValueApprox: 0, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Bank & Income",
        items: [
          { icon: "🏦", label: "Bank/Cash", value: "NPR 14.6 million", highlight: true },
          { icon: "📱", label: "Income", value: "Social media income" },
        ]
      },
      {
        type: "section",
        title: "Properties",
        items: [
          { icon: "🏡", label: "Land", value: "Family land in Kathmandu, Dhanusha, Mahottari" },
        ]
      },
      {
        type: "section",
        title: "Spouse & Inherited",
        items: [
          { icon: "💍", label: "Gold", value: "190 tola (spouse, inherited)", highlight: true },
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Dr. Swarnim Wagle",
    shortName: "Swarnim Wagle",
    role: "Finance",
    emoji: "💹",
    color: ["#1e40af", "#1e3a8a"],
    status: "detailed",
    pillTags: ["🏠 NPR 12.75Cr", "🏦 NPR 1.9Cr", "🥇 45 Tolas Gold"],
    numericAssets: { cash: 19000000, goldTola: 45, propertyValueApprox: 127500000, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Properties",
        items: [
          { icon: "🏢", label: "Apartments/house", value: "NPR 12.75 crore total", highlight: true },
        ]
      },
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "🏦", label: "Bank/Cash", value: "NPR 1.9 crore" },
          { icon: "📈", label: "Shares", value: "Hydropower/bank shares" },
          { icon: "🥇", label: "Gold", value: "45 tola", highlight: true },
        ]
      },
      {
        type: "section",
        title: "Other & Liabilities",
        items: [
          { icon: "🚗", label: "Vehicle", value: "NPR 9.4 million" },
          { icon: "💳", label: "Loans", value: "NPR 3.55 crore" },
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Sudan Gurung",
    shortName: "Sudan Gurung",
    role: "Home Affairs",
    emoji: "🛡️",
    color: ["#7c3aed", "#6d28d9"],
    status: "detailed",
    pillTags: ["📈 NPR 4.31Cr", "🥇 89 Tolas Gold", "🌾 Land"],
    numericAssets: { cash: 0, goldTola: 89, propertyValueApprox: 0, sharesVal: 43100000 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "📈", label: "Stocks", value: "NPR 4.31 crore (various companies)", highlight: true },
          { icon: "🥇", label: "Gold", value: "89 tola", highlight: true },
        ]
      },
      {
        type: "section",
        title: "Properties",
        items: [
          { icon: "🏡", label: "Land", value: "Dhankuta, Chitwan, Gorkha" },
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Sasmit Pokharel",
    shortName: "Sasmit Pokharel",
    role: "Education",
    emoji: "📚",
    color: ["#db2777", "#be185d"],
    status: "detailed",
    pillTags: ["🏡 NPR 20.5Cr", "🥇 25 Tolas Gold", "💵 NPR 4.5L"],
    numericAssets: { cash: 450000, goldTola: 25, propertyValueApprox: 205000000, sharesVal: 3000000 },
    assets: [
      {
        type: "section",
        title: "Properties",
        items: [
          { icon: "🏡", label: "Properties", value: "NPR 20.5 crore (Kathmandu/Morang)", highlight: true }
        ]
      },
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 450,000" },
          { icon: "📈", label: "Shares", value: "NPR 3 million" },
          { icon: "🥇", label: "Gold", value: "25 tola", highlight: true },
        ]
      },
      {
        type: "section",
        title: "Liabilities",
        items: [
          { icon: "💳", label: "Loans", value: "NPR 7.5 million" }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Gauri Kumari Yadav",
    shortName: "Gauri Yadav",
    role: "Industry",
    emoji: "🏭",
    color: ["#0284c7", "#0369a1"],
    status: "detailed",
    pillTags: ["📈 NPR 3.38Cr", "🥇 180 Tolas Gold", "🏡 House/Land"],
    numericAssets: { cash: 0, goldTola: 180, propertyValueApprox: 0, sharesVal: 33840000 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "📈", label: "Shares", value: "NPR 3.38 crore", highlight: true },
          { icon: "🥇", label: "Gold", value: "180 tola", highlight: true },
          { icon: "🥈", label: "Silver", value: "2 kg" },
        ]
      },
      {
        type: "section",
        title: "Properties & Income",
        items: [
          { icon: "🏡", label: "House/Land", value: "Declared" },
          { icon: "💵", label: "Rental Income", value: "NPR 90k/month" },
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Shishir Khanal",
    shortName: "Shishir Khanal",
    role: "Foreign Affairs",
    emoji: "🌐",
    color: ["#0891b2", "#0e7490"],
    status: "detailed",
    pillTags: ["💵 NPR 1.3M", "🥇 22 Tolas Gold", "🏡 Land"],
    numericAssets: { cash: 1300000, goldTola: 22, propertyValueApprox: 0, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 1.3 million", highlight: true },
          { icon: "🥇", label: "Gold", value: "22 tola", highlight: true },
          { icon: "📈", label: "Shares", value: "Company shares" }
        ]
      },
      {
        type: "section",
        title: "Properties",
        items: [
          { icon: "🏡", label: "House/Land", value: "Family house/land in Kathmandu, Tanahun, Nepalgunj" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Biraj Bhakta Shrestha",
    shortName: "Biraj Shrestha",
    role: "Energy",
    emoji: "⚡",
    color: ["#16a34a", "#15803d"],
    status: "detailed",
    pillTags: ["💵 NPR 6.4M", "🥇 15 Tolas Gold", "📈 NPR 1.45Cr"],
    numericAssets: { cash: 6400000, goldTola: 15, propertyValueApprox: 0, sharesVal: 14500000 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 6.4 million", highlight: true },
          { icon: "📈", label: "Shares", value: "NPR 1.45 crore", highlight: true },
          { icon: "🥇", label: "Gold", value: "15 tola" },
        ]
      },
      {
        type: "section",
        title: "Vehicles",
        items: [
          { icon: "🚗", label: "Vehicles", value: "Car, scooter, EV" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Sobita Gautam",
    shortName: "Sobita Gautam",
    role: "Law",
    emoji: "⚖️",
    color: ["#9333ea", "#7e22ce"],
    status: "detailed",
    pillTags: ["💵 NPR 1.05M", "🥇 15 Tolas Gold", "🏡 Houses"],
    numericAssets: { cash: 1050000, goldTola: 15, propertyValueApprox: 0, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Financial & Jewels",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 1.05 million", highlight: true },
          { icon: "🥇", label: "Gold", value: "15 tola", highlight: true },
          { icon: "🥈", label: "Silver & Diamond", value: "Silver 9 tola, diamond 1 tola" }
        ]
      },
      {
        type: "section",
        title: "Properties & Liabilities",
        items: [
          { icon: "🏡", label: "Houses", value: "Kathmandu/Chitwan (family)" },
          { icon: "💳", label: "Loans", value: "Loans for vehicles" }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Sita Badi",
    shortName: "Sita Badi",
    role: "Women & Seniors",
    emoji: "👩‍👧",
    color: ["#e11d48", "#be123c"],
    status: "detailed",
    pillTags: ["💵 NPR 1.55M", "🥇 18 Tolas Gold", "🐔 Livestock"],
    numericAssets: { cash: 1550000, goldTola: 18, propertyValueApprox: 0, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 1.55 million (joint)", highlight: true },
          { icon: "🥇", label: "Gold", value: "18 tola", highlight: true }
        ]
      },
      {
        type: "section",
        title: "Properties & Others",
        items: [
          { icon: "🏡", label: "Land", value: "Land in Surkhet" },
          { icon: "🛵", label: "Vehicles/Electronics", value: "Scooter, laptops" },
          { icon: "🐔", label: "Livestock/Pets", value: "20 chickens, dog" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Sunil Lamsal",
    shortName: "Sunil Lamsal",
    role: "Infrastructure",
    emoji: "🏗️",
    color: ["#d97706", "#b45309"],
    status: "detailed",
    pillTags: ["💵 NPR 9M Cash", "🥇 30 Tolas Gold", "🏡 Houses/Land"],
    numericAssets: { cash: 9000000, goldTola: 30, propertyValueApprox: 0, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 9 million", highlight: true },
          { icon: "🥇", label: "Gold", value: "30 tola", highlight: true },
          { icon: "🥈", label: "Silver", value: "50 tola" }
        ]
      },
      {
        type: "section",
        title: "Properties",
        items: [
          { icon: "🏡", label: "Land & Houses", value: "Rupandehi, Nawalparasi, Syangja" }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "Pratibha Rawal",
    shortName: "Pratibha Rawal",
    role: "Federal Affairs",
    emoji: "📋",
    color: ["#10b981", "#059669"],
    status: "detailed",
    pillTags: ["💵 NPR 2.4M", "🥇 25 Tolas Gold", "🏡 NPR 1.2Cr Land"],
    numericAssets: { cash: 2400000, goldTola: 25, propertyValueApprox: 12000000, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Financial Assets",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 2.4 million", highlight: true },
          { icon: "🥇", label: "Gold", value: "25 tola", highlight: true }
        ]
      },
      {
        type: "section",
        title: "Properties & Vehicles",
        items: [
          { icon: "🏡", label: "Land", value: "Budhanilkantha Rs 7M, Bara Rs 5M", highlight: true },
          { icon: "🚗", label: "Vehicles", value: "Car Rs 4.4M" }
        ]
      },
      {
        type: "section",
        title: "Liabilities",
        items: [
          { icon: "💳", label: "Loans", value: "NPR 2 million" }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "Gita Chaudhary",
    shortName: "Gita Chaudhary",
    role: "Agriculture",
    emoji: "🌿",
    color: ["#84cc16", "#65a30d"],
    status: "detailed",
    pillTags: ["💵 NPR 1.26L", "🥇 5 Tolas Gold", "🥈 100 Tolas Silver"],
    numericAssets: { cash: 126000, goldTola: 5, propertyValueApprox: 0, sharesVal: 0 },
    assets: [
      {
        type: "section",
        title: "Financial & Jewels",
        items: [
          { icon: "💵", label: "Bank/Cash", value: "NPR 126,000", highlight: true },
          { icon: "🥇", label: "Gold", value: "5 tola", highlight: true },
          { icon: "🥈", label: "Silver", value: "100 tola" }
        ]
      },
      {
        type: "section",
        title: "Other Assets",
        items: [
          { icon: "🛵", label: "Vehicles & Tech", value: "Scooters, watch, phone, laptop" },
          { icon: "🐐", label: "Livestock", value: "2 goats, 10 chickens" }
        ]
      }
    ]
  }
];

// Add remaining pending ministers
[
  { name: "Nisha Mehta", role: "Health & Population", emoji: "🏥" },
  { name: "Dr. Bikram Timilsina", role: "Communications & Tech", emoji: "📡" },
  { name: "Ganesh Poudel", role: "Culture & Tourism", emoji: "✈️" },
  { name: "Ramjee Yadav", role: "Labour & Employment", emoji: "🤝" }
].forEach((m, idx) => {
  MINISTERS.push({
    id: 20 + idx,
    name: m.name,
    shortName: m.name,
    role: m.role,
    emoji: m.emoji,
    color: ["#475569", "#334155"],
    status: "pending",
    pillTags: ["📋 Disclosed"],
    numericAssets: { cash: 0, goldTola: 0, propertyValueApprox: 0, sharesVal: 0 },
    assets: []
  });
});

// Calculate approximations
const TOLA_PRICE = 130000;
MINISTERS.forEach(m => {
  m.totalNprValue = (m.numericAssets.cash || 0) +
    (m.numericAssets.goldTola * TOLA_PRICE) +
    (m.numericAssets.propertyValueApprox || 0) +
    (m.numericAssets.sharesVal || 0);
});

// DOM
const grid = document.getElementById("ministerGrid");
const dashboardView = document.getElementById("dashboardView");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const resultsCount = document.getElementById("resultsCount");
const chips = document.querySelectorAll(".chip");

const viewGridBtn = document.getElementById("viewGrid");
const viewListBtn = document.getElementById("viewList");
const viewDashBtn = document.getElementById("viewDashboard");

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalAvatar = document.getElementById("modalAvatar");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalStatus = document.getElementById("modalStatusBadge");
const modalBody = document.getElementById("modalBody");

// State
let currentFilter = "all";
let currentSearch = "";

function escHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function getFilteredData() {
  return MINISTERS.filter(m => {
    const sMatch = currentSearch ? (m.name.toLowerCase().includes(currentSearch.toLowerCase()) || m.role.toLowerCase().includes(currentSearch.toLowerCase())) : true;
    const fMatch = currentFilter === "all" ? true : m.status === currentFilter;
    return sMatch && fMatch;
  });
}

function renderGrid() {
  const data = getFilteredData();
  grid.innerHTML = "";

  if (data.length === 0) {
    emptyState.hidden = false;
    resultsCount.textContent = "0 records";
    return;
  }

  emptyState.hidden = true;
  resultsCount.textContent = `Showing ${data.length} records`;

  data.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = "minister-card";
    card.style.animationDelay = `${i * 0.05}s`;

    const statusLabel = m.status === "detailed" ? "Full Details" : "Disclosed";
    const pillsHtml = m.pillTags.map(p => `<span class="asset-pill">${p}</span>`).join("");

    card.innerHTML = `
      <div class="card-accent" style="background:linear-gradient(90deg,${m.color[0]},${m.color[1]})"></div>
      <div class="card-body">
        <div class="card-avatar" style="background:linear-gradient(135deg,${m.color[0]},${m.color[1]})">${m.emoji}</div>
        <div class="card-info">
          <div class="card-name">${escHtml(m.shortName)}</div>
          <div class="card-role">${escHtml(m.role)}</div>
          <span class="card-status ${m.status}">${statusLabel}</span>
        </div>
      </div>
      <div class="card-assets">${pillsHtml}</div>
    `;

    card.addEventListener("click", () => openModal(m));
    grid.appendChild(card);
  });
}

function openModal(m) {
  modalAvatar.textContent = m.emoji;
  modalAvatar.style.background = `linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})`;
  modalName.textContent = m.name;
  modalRole.textContent = m.role;

  const isDetailed = m.status === "detailed";
  modalStatus.textContent = isDetailed ? "✅ Details Available" : "🕐 Details Pending";
  modalStatus.className = `modal-status-badge ${m.status}`;

  if (isDetailed) {
    modalBody.innerHTML = m.assets.map(sec => `
      <div class="modal-section">
        <div class="modal-section-title">${escHtml(sec.title)}</div>
        ${sec.items.map(item => `
          <div class="asset-item">
            <span class="asset-icon">${item.icon}</span>
            <div class="asset-content">
              <div class="asset-label">${escHtml(item.label)}</div>
              <div class="asset-value ${item.highlight ? 'highlight' : ''}">${escHtml(item.value)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");
  } else {
    modalBody.innerHTML = `
      <div class="pending-box">
        <div class="pending-icon">📋</div>
        <div class="pending-title">Publicly Disclosed on April 12, 2026</div>
        <div class="pending-desc">Detailed figures from the official disclosure are not yet fully available in public reports.</div>
      </div>
    `;
  }

  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal() });

/* Search / Filters */
searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value;
  searchClear.hidden = !currentSearch;
  if (dashboardView.hidden) renderGrid();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  searchClear.hidden = true;
  if (dashboardView.hidden) renderGrid();
});

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
    if (dashboardView.hidden) renderGrid();
  });
});

/* Dashboard Logic */
let barChart = null;
let pieChart = null;

function formatNpr(num) {
  if (num >= 10000000) return "NPR " + (num / 10000000).toFixed(2) + " Crore";
  if (num >= 100000) return "NPR " + (num / 100000).toFixed(2) + " Lakh";
  return "NPR " + num.toLocaleString();
}

function renderDashboard() {
  const sorted = [...MINISTERS].filter(m => m.totalNprValue > 0).sort((a, b) => b.totalNprValue - a.totalNprValue);

  document.getElementById("topRankList").innerHTML = sorted.map((m, idx) => `
    <div class="leaderboard-item">
      <div class="lb-rank">#${idx + 1}</div>
      <div class="lb-avatar" style="background:linear-gradient(135deg,${m.color[0]},${m.color[1]})">${m.emoji}</div>
      <div class="lb-info">
        <div class="lb-name">${escHtml(m.shortName)}</div>
        <div class="lb-role">${escHtml(m.role)}</div>
      </div>
      <div class="lb-value">${formatNpr(m.totalNprValue)}</div>
    </div>
  `).join("");

  const totalNPR = sorted.reduce((sum, m) => sum + m.totalNprValue, 0);
  const totalCash = sorted.reduce((sum, m) => sum + m.numericAssets.cash, 0);
  const totalGold = sorted.reduce((sum, m) => sum + m.numericAssets.goldTola, 0);

  document.getElementById("dashTotalWealth").textContent = formatNpr(totalNPR);
  document.getElementById("dashTotalCash").textContent = formatNpr(totalCash);
  document.getElementById("dashTotalGold").textContent = totalGold + " Tolas";

  const ctxPie = document.getElementById('wealthPieChart');
  const ctxBar = document.getElementById('wealthBarChart');

  if (pieChart) pieChart.destroy();
  if (barChart) barChart.destroy();

  Chart.defaults.color = "#94a3b8";
  Chart.defaults.font.family = "'Inter', sans-serif";

  // --- PIE CHART ---
  if (ctxPie) {
    const pieLabels = sorted.slice(0, 6).map(m => m.shortName);
    const pieData = sorted.slice(0, 6).map(m => m.totalNprValue);
    const pieColors = sorted.slice(0, 6).map(m => m.color[0]);

    if (sorted.length > 6) {
      pieLabels.push("Others");
      pieData.push(sorted.slice(6).reduce((s, m) => s + m.totalNprValue, 0));
      pieColors.push("#475569");
    }

    pieChart = new Chart(ctxPie, {
      type: 'doughnut',
      data: {
        labels: pieLabels,
        datasets: [{ data: pieData, backgroundColor: pieColors, borderWidth: 0, hoverOffset: 10 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '70%',
        plugins: {
          legend: { position: 'right', labels: { boxWidth: 12, padding: 15 } },
          tooltip: { callbacks: { label: function (c) { return ' ' + formatNpr(c.raw); } } }
        }
      }
    });
  }

  // --- BAR CHART ---
  if (ctxBar) {
    const labels = sorted.map(m => m.shortName);
    const data = sorted.map(m => m.totalNprValue);
    const bgColors = sorted.map(m => m.color[0]);

    barChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Est. Net Worth (NPR)',
          data: data,
          backgroundColor: bgColors,
          borderWidth: 0,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: function (c) { return ' ' + formatNpr(c.raw); } } }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#64748b', font: { family: "'Inter', sans-serif" } },
            grid: { color: 'rgba(255,255,255,0.05)' }
          },
          x: {
            ticks: { color: '#94a3b8', font: { family: "'Inter', sans-serif" } },
            grid: { display: false }
          }
        }
      }
    });
  }
}

/* View Togglers */
function switchView(view) {
  viewGridBtn.classList.remove("active");
  viewListBtn.classList.remove("active");
  viewDashBtn.classList.remove("active");

  if (view === "grid" || view === "list") {
    grid.hidden = false;
    dashboardView.hidden = true;
    grid.classList.toggle("list-view", view === "list");
    view === "grid" ? viewGridBtn.classList.add("active") : viewListBtn.classList.add("active");
    renderGrid();
  } else {
    grid.hidden = true;
    emptyState.hidden = true;
    dashboardView.hidden = false;
    viewDashBtn.classList.add("active");
    renderDashboard();
  }
}

viewGridBtn.addEventListener("click", () => switchView("grid"));
viewListBtn.addEventListener("click", () => switchView("list"));
viewDashBtn.addEventListener("click", () => switchView("dashboard"));

/* Theme Togglers */
const themeBtns = document.querySelectorAll(".theme-btn");
function initTheme() {
  const savedTheme = localStorage.getItem("nepal-cabinet-theme") || "dark";
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === savedTheme);
  });
}
themeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("nepal-cabinet-theme", theme);
    themeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
initTheme();

/* Particles */
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  const colors = ["rgba(220,38,38,0.4)", "rgba(59,130,246,0.3)", "rgba(245,158,11,0.35)"];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 5 + 2;
    p.style.cssText = `width:${size}px; height:${size}px; left:${Math.random() * 100}%; background:${colors[Math.floor(Math.random() * colors.length)]}; animation-duration:${Math.random() * 18 + 10}s; animation-delay:-${Math.random() * 20}s;`;
    container.appendChild(p);
  }
}

/* Init */
initParticles();
renderGrid();
