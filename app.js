// === Media Kit Data ===
const PLACEMENTS = [
    {
        id: 'leaderboard',
        name: 'Leaderboard Banner',
        category: 'display',
        description: 'High-visibility 728x90 banner displayed at the top of all editorial pages. Excellent for brand awareness campaigns.',
        specs: { size: '728x90', impressions: '~50K/mo' },
        price: 1200,
        unit: 'month',
    },
    {
        id: 'sidebar',
        name: 'Sidebar Rectangle',
        category: 'display',
        description: 'Persistent 300x250 medium rectangle in the right sidebar. Visible across article pages and category listings.',
        specs: { size: '300x250', impressions: '~40K/mo' },
        price: 900,
        unit: 'month',
    },
    {
        id: 'inline',
        name: 'In-Article Banner',
        category: 'display',
        description: 'Native-style 728x90 banner placed between paragraphs within article content for high engagement.',
        specs: { size: '728x90', impressions: '~30K/mo' },
        price: 800,
        unit: 'month',
    },
    {
        id: 'sticky-footer',
        name: 'Sticky Footer Ad',
        category: 'display',
        description: 'Persistent banner anchored to the bottom of the viewport. High viewability and click-through rates.',
        specs: { size: '728x90', impressions: '~55K/mo' },
        price: 1400,
        unit: 'month',
    },
    {
        id: 'sponsored-article',
        name: 'Sponsored Article',
        category: 'sponsored',
        description: 'Custom-written article published in our editorial feed. Includes homepage feature placement for 48 hours and social promotion.',
        specs: { words: '800–1200', promotion: '48hr feature' },
        price: 2500,
        unit: 'article',
    },
    {
        id: 'sponsored-webinar',
        name: 'Sponsored Webinar',
        category: 'sponsored',
        description: 'Co-branded webinar hosted on our platform with registration page, email promotion, and on-demand replay.',
        specs: { duration: '45–60 min', leads: 'Registrant list' },
        price: 5000,
        unit: 'webinar',
    },
    {
        id: 'sponsored-whitepaper',
        name: 'White Paper Promotion',
        category: 'sponsored',
        description: 'Gated download of your white paper with dedicated landing page and lead capture. Includes email blast to relevant segments.',
        specs: { leads: 'Download list', promotion: 'Email blast' },
        price: 3500,
        unit: 'campaign',
    },
    {
        id: 'newsletter-banner',
        name: 'Newsletter Banner',
        category: 'newsletter',
        description: 'Featured 600x100 banner in our weekly industry newsletter. Sent to 25,000+ opted-in subscribers.',
        specs: { size: '600x100', subscribers: '25K+' },
        price: 700,
        unit: 'issue',
    },
    {
        id: 'newsletter-dedicated',
        name: 'Dedicated Email Send',
        category: 'newsletter',
        description: 'A standalone email blast sent exclusively featuring your message to our full subscriber list.',
        specs: { subscribers: '25K+', format: 'Your HTML or designed' },
        price: 3000,
        unit: 'send',
    },
    {
        id: 'newsletter-spotlight',
        name: 'Newsletter Spotlight',
        category: 'newsletter',
        description: 'Premium inline placement within the newsletter body — text + image block that feels native to readers.',
        specs: { format: 'Image + 100 words', subscribers: '25K+' },
        price: 1100,
        unit: 'issue',
    },
    {
        id: 'social-linkedin',
        name: 'LinkedIn Sponsored Post',
        category: 'social',
        description: 'Branded post published on our LinkedIn company page (45K followers). Includes engagement reporting.',
        specs: { followers: '45K', format: 'Image + copy' },
        price: 600,
        unit: 'post',
    },
    {
        id: 'social-twitter',
        name: 'X (Twitter) Promoted Post',
        category: 'social',
        description: 'Branded post on our X/Twitter account (30K followers). Pinned for 24 hours with engagement reporting.',
        specs: { followers: '30K', format: 'Image + copy' },
        price: 400,
        unit: 'post',
    },
];

// === State ===
let campaign = []; // Array of { placementId, quantity, startDate }

// === Initialization ===
document.addEventListener('DOMContentLoaded', () => {
    renderPlacements('all');
    setupFilterButtons();
    setupForm();
});

// === Render Placement Cards ===
function renderPlacements(filter) {
    const grid = document.getElementById('placementsGrid');
    const filtered = filter === 'all' ? PLACEMENTS : PLACEMENTS.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(p => {
        const inCampaign = campaign.some(c => c.placementId === p.id);
        const badgeClass = `badge-${p.category}`;
        const categoryLabel = p.category.charAt(0).toUpperCase() + p.category.slice(1);
        const specsHtml = Object.entries(p.specs)
            .map(([k, v]) => `<span><strong>${capitalize(k)}:</strong> ${escapeHtml(String(v))}</span>`)
            .join('');

        return `
            <div class="placement-card ${inCampaign ? 'added' : ''}" data-id="${p.id}">
                <span class="placement-badge ${badgeClass}">${escapeHtml(categoryLabel)}</span>
                <h3>${escapeHtml(p.name)}</h3>
                <p class="description">${escapeHtml(p.description)}</p>
                <div class="placement-specs">${specsHtml}</div>
                <div class="placement-price">$${p.price.toLocaleString()} <span class="unit">/ ${escapeHtml(p.unit)}</span></div>
                <button class="btn ${inCampaign ? 'btn-added' : 'btn-outline'}" onclick="togglePlacement('${p.id}')">
                    ${inCampaign ? 'Added to Campaign' : 'Add to Campaign'}
                </button>
            </div>
        `;
    }).join('');
}

// === Filter Buttons ===
function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPlacements(btn.dataset.filter);
        });
    });
}

// === Add / Remove Placement ===
function togglePlacement(placementId) {
    const index = campaign.findIndex(c => c.placementId === placementId);
    if (index >= 0) {
        campaign.splice(index, 1);
    } else {
        const today = new Date();
        const startDate = today.toISOString().split('T')[0];
        campaign.push({ placementId, quantity: 1, startDate });
    }
    refreshAll();
}

function removePlacement(placementId) {
    campaign = campaign.filter(c => c.placementId !== placementId);
    refreshAll();
}

function refreshAll() {
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    renderPlacements(activeFilter);
    renderCampaignItems();
    renderSummary();
    updateSubmitButton();
}

// === Render Campaign Items ===
function renderCampaignItems() {
    const container = document.getElementById('campaignItems');
    const emptyState = document.getElementById('emptyState');

    if (campaign.length === 0) {
        emptyState.style.display = 'block';
        container.innerHTML = '';
        return;
    }

    emptyState.style.display = 'none';

    container.innerHTML = campaign.map((item, idx) => {
        const p = PLACEMENTS.find(pl => pl.id === item.placementId);
        if (!p) return '';
        const subtotal = p.price * item.quantity;
        const badgeClass = `badge-${p.category}`;
        const categoryLabel = p.category.charAt(0).toUpperCase() + p.category.slice(1);

        return `
            <div class="campaign-item">
                <div>
                    <div class="campaign-item-header">
                        <span class="placement-badge ${badgeClass}">${escapeHtml(categoryLabel)}</span>
                        <h4>${escapeHtml(p.name)}</h4>
                    </div>
                    <div class="campaign-item-controls">
                        <div>
                            <label>Quantity (${escapeHtml(p.unit)}s)</label>
                            <input type="number" min="1" max="24" value="${item.quantity}"
                                onchange="updateQuantity(${idx}, this.value)">
                        </div>
                        <div>
                            <label>Start Date</label>
                            <input type="date" value="${item.startDate}"
                                onchange="updateStartDate(${idx}, this.value)">
                        </div>
                    </div>
                </div>
                <div class="campaign-item-subtotal">
                    <div class="amount">$${subtotal.toLocaleString()}</div>
                    <button class="btn btn-danger btn-sm remove-btn" onclick="removePlacement('${p.id}')">Remove</button>
                </div>
            </div>
        `;
    }).join('');
}

// === Update Campaign Item Fields ===
function updateQuantity(index, value) {
    const qty = Math.max(1, Math.min(24, parseInt(value, 10) || 1));
    campaign[index].quantity = qty;
    refreshAll();
}

function updateStartDate(index, value) {
    campaign[index].startDate = value;
    renderSummary();
}

// === Render Summary ===
function renderSummary() {
    const summaryEmpty = document.getElementById('summaryEmpty');
    const summaryContent = document.getElementById('summaryContent');
    const summaryBody = document.getElementById('summaryBody');
    const totalCost = document.getElementById('totalCost');

    if (campaign.length === 0) {
        summaryEmpty.style.display = 'block';
        summaryContent.style.display = 'none';
        return;
    }

    summaryEmpty.style.display = 'none';
    summaryContent.style.display = 'block';

    let total = 0;
    summaryBody.innerHTML = campaign.map(item => {
        const p = PLACEMENTS.find(pl => pl.id === item.placementId);
        if (!p) return '';
        const subtotal = p.price * item.quantity;
        total += subtotal;
        return `
            <tr>
                <td>${escapeHtml(p.name)}</td>
                <td>${escapeHtml(item.startDate)}</td>
                <td>${item.quantity} ${escapeHtml(p.unit)}${item.quantity > 1 ? 's' : ''}</td>
                <td class="text-right">$${subtotal.toLocaleString()}</td>
            </tr>
        `;
    }).join('');

    totalCost.textContent = '$' + total.toLocaleString();
}

// === Form Handling ===
function setupForm() {
    document.getElementById('submitForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (campaign.length === 0) return;

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();

        // Build the campaign data payload
        const payload = {
            contact: {
                name,
                email,
                company: document.getElementById('contactCompany').value.trim(),
                phone: document.getElementById('contactPhone').value.trim(),
                notes: document.getElementById('contactNotes').value.trim(),
            },
            items: campaign.map(item => {
                const p = PLACEMENTS.find(pl => pl.id === item.placementId);
                return {
                    placement: p.name,
                    category: p.category,
                    quantity: item.quantity,
                    unit: p.unit,
                    unitPrice: p.price,
                    subtotal: p.price * item.quantity,
                    startDate: item.startDate,
                };
            }),
            totalEstimate: campaign.reduce((sum, item) => {
                const p = PLACEMENTS.find(pl => pl.id === item.placementId);
                return sum + (p ? p.price * item.quantity : 0);
            }, 0),
            submittedAt: new Date().toISOString(),
        };

        // Log payload (in production, this would POST to an API)
        console.log('Campaign submitted:', JSON.stringify(payload, null, 2));

        // Show confirmation
        document.getElementById('confirmName').textContent = name;
        document.getElementById('confirmEmail').textContent = email;
        document.getElementById('confirmationModal').classList.add('visible');
    });
}

function updateSubmitButton() {
    document.getElementById('submitBtn').disabled = campaign.length === 0;
}

function closeModal() {
    document.getElementById('confirmationModal').classList.remove('visible');
    // Reset
    campaign = [];
    document.getElementById('submitForm').reset();
    refreshAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === Helpers ===
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
