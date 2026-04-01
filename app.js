// =============================================================
// Photonics Media — 2026 Self-Service Campaign Builder
// All data sourced from the 2026 Multimedia Planner (Media Kit)
// =============================================================

const PLACEMENTS = [
    // ── PHOTONICS SPECTRA (Print) ──
    {
        id: 'ps-full',
        name: 'Photonics Spectra — Full Page',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'Full-page ad in the industry\'s flagship publication. 100,000 subscribers, 12 issues/year. Covering lasers, optics, spectroscopy, imaging, and more. Full-page advertisers are listed as issue sponsors in the digital edition email.',
        specs: { Subscribers: '100,000', Frequency: '12×/yr', Size: '7" × 9.93"' },
        pricing: { '1x': 9950, '3x': 7960, '6x': 6965, '9x': 5970, '12x': 4975 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'ps-half-island',
        name: 'Photonics Spectra — 1/2 Island',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'Half-island ad placement in Photonics Spectra. Premium positioning with strong visual impact.',
        specs: { Subscribers: '100,000', Size: '4.58" × 7.47"' },
        pricing: { '1x': 8760, '3x': 7010, '6x': 6130, '9x': 5255, '12x': 4380 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'ps-half',
        name: 'Photonics Spectra — 1/2 Page',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'Half-page horizontal or vertical ad in Photonics Spectra. Cost-effective visibility in the industry\'s largest publication.',
        specs: { Subscribers: '100,000', Size: '7" × 4.81" or 3.38" × 9.93"' },
        pricing: { '1x': 7970, '3x': 6375, '6x': 5580, '9x': 4780, '12x': 3985 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'ps-third',
        name: 'Photonics Spectra — 1/3 Page',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'One-third page ad in Photonics Spectra. Vertical or square format available.',
        specs: { Subscribers: '100,000', Size: '2.17" × 9.93" or 4.58" × 4.81"' },
        pricing: { '1x': 6610, '3x': 5290, '6x': 4625, '9x': 3965, '12x': 3305 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'ps-quarter',
        name: 'Photonics Spectra — 1/4 Page',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'Quarter-page ad in Photonics Spectra. Affordable entry point into the industry\'s premier publication.',
        specs: { Subscribers: '100,000', Size: '3.38" × 4.81"' },
        pricing: { '1x': 3985, '3x': 3190, '6x': 2790, '9x': 2390, '12x': 1995 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'ps-cover2',
        name: 'Photonics Spectra — Cover 2 (Inside Front)',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'Premium inside front cover position. Must be at least a 6× advertiser. Maximum 3 cover positions per advertiser.',
        specs: { Subscribers: '100,000', Position: 'Inside Front Cover' },
        pricing: { '1x': 8705 },
        unit: 'insertion',
        hasFrequency: false,
    },
    {
        id: 'ps-cover4',
        name: 'Photonics Spectra — Cover 4 (Back Cover)',
        category: 'print-ps',
        categoryLabel: 'Photonics Spectra',
        description: 'The most prestigious ad position — back cover of Photonics Spectra. Must be at least a 6× advertiser.',
        specs: { Subscribers: '100,000', Position: 'Back Cover' },
        pricing: { '1x': 9055 },
        unit: 'insertion',
        hasFrequency: false,
    },

    // ── BIOPHOTONICS (Print) ──
    {
        id: 'bp-full',
        name: 'BioPhotonics — Full Page',
        category: 'print-bp',
        categoryLabel: 'BioPhotonics',
        description: 'Full-page ad in the industry\'s only stand-alone publication covering light in the life sciences. 27,500 subscribers, 6 issues/year.',
        specs: { Subscribers: '27,500', Frequency: '6×/yr', Size: '7" × 9.93"' },
        pricing: { '1x': 4585, '3x': 4130, '6x': 3675, '12x': 3205 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'bp-half',
        name: 'BioPhotonics — 1/2 Page',
        category: 'print-bp',
        categoryLabel: 'BioPhotonics',
        description: 'Half-page ad in BioPhotonics. Reach manufacturers, researchers, and scientists in the life sciences.',
        specs: { Subscribers: '27,500', Size: '7" × 4.81"' },
        pricing: { '1x': 3810, '3x': 3430, '6x': 3050, '12x': 2670 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'bp-quarter',
        name: 'BioPhotonics — 1/4 Page',
        category: 'print-bp',
        categoryLabel: 'BioPhotonics',
        description: 'Quarter-page ad in BioPhotonics. Affordable entry into the biophotonics market.',
        specs: { Subscribers: '27,500', Size: '3.38" × 4.81"' },
        pricing: { '1x': 1930, '3x': 1735, '6x': 1535, '12x': 1350 },
        unit: 'insertion',
        hasFrequency: true,
    },

    // ── VISION SPECTRA (Print) ──
    {
        id: 'vs-full',
        name: 'Vision Spectra — Full Page',
        category: 'print-vs',
        categoryLabel: 'Vision Spectra',
        description: 'Full-page ad in the machine vision community\'s publication. 32,000 subscribers, 4 issues/year. Targeting systems integrators, designers, and end users.',
        specs: { Subscribers: '32,000', Frequency: '4×/yr', Size: '7" × 9.93"' },
        pricing: { '1x': 4475, '2x': 4030, '4x': 3580, '8x': 3130 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'vs-half',
        name: 'Vision Spectra — 1/2 Page',
        category: 'print-vs',
        categoryLabel: 'Vision Spectra',
        description: 'Half-page ad in Vision Spectra. Reach the machine vision, embedded vision, and Industry 4.0 audience.',
        specs: { Subscribers: '32,000', Size: '7" × 4.81"' },
        pricing: { '1x': 3715, '2x': 3350, '4x': 2975, '8x': 2605 },
        unit: 'insertion',
        hasFrequency: true,
    },

    // ── NEWSLETTERS ──
    {
        id: 'nl-featured-product',
        name: 'Newsletter — Featured Product',
        category: 'newsletter',
        categoryLabel: 'Newsletter',
        description: 'Featured product listing in one of our 4 newsletters: Photonics Spectra Weekly (23K), PS Monthly (23.8K), BioPhotonics Monthly (18.3K), or Vision Spectra Bimonthly (20K). Also appears on Photonics.com for 6 months.',
        specs: { Reach: 'Up to 23,853', Duration: '1 week in newsletter + 6 months on site' },
        pricing: { '1x': 2320, '3x': 2205, '6x': 2090, '9x': 1970, '12x': 1855 },
        unit: 'insertion',
        hasFrequency: true,
    },
    {
        id: 'nl-leaderboard-addon',
        name: 'Newsletter — Add Leaderboard Banner',
        category: 'newsletter',
        categoryLabel: 'Newsletter',
        description: 'Add a 728×90 leaderboard banner to your newsletter placement. Runs for the full month in the weekly newsletter.',
        specs: { Size: '728 × 90', Duration: 'Full month' },
        pricing: { '1x': 1240, '3x': 1180, '6x': 1115, '9x': 1055, '12x': 990 },
        unit: 'month',
        hasFrequency: true,
    },
    {
        id: 'nl-medrect-addon',
        name: 'Newsletter — Add Medium Rectangle',
        category: 'newsletter',
        categoryLabel: 'Newsletter',
        description: 'Add a 300×250 medium rectangle banner to your newsletter placement. Runs for the full month.',
        specs: { Size: '300 × 250', Duration: 'Full month' },
        pricing: { '1x': 975, '3x': 925, '6x': 880, '9x': 830, '12x': 780 },
        unit: 'month',
        hasFrequency: true,
    },
    {
        id: 'nl-featured-video',
        name: 'Newsletter — Featured Video',
        category: 'newsletter',
        categoryLabel: 'Newsletter',
        description: 'Featured video placement in newsletter. Also appears on Photonics.com for 6 months and in the weekly newsletter for one week.',
        specs: { Duration: '1 week in newsletter + 6 months on site' },
        pricing: { '1x': 2790, '3x': 2650, '6x': 2510, '9x': 2370, '12x': 2230 },
        unit: 'insertion',
        hasFrequency: true,
    },

    // ── DIGITAL / WEBSITE ──
    {
        id: 'web-fullspectrum',
        name: 'Photonics.com — Full-Spectrum Campaign',
        category: 'digital',
        categoryLabel: 'Digital',
        description: 'Premium placement on the homepage and throughout Photonics.com. Includes leaderboard, medium rectangle, and 1/2-page banner sizes plus targeted keyword campaign. 2.3M page views/year, 76,768 avg monthly users.',
        specs: { 'Page Views': '2.3M/yr', Users: '76,768/mo', Format: 'Leaderboard + MedRect + 1/2 Page' },
        pricing: { '1x': 3290, '3x': 3125, '6x': 2960, '9x': 2795, '12x': 2630 },
        unit: 'month',
        hasFrequency: true,
    },

    // ── WEBINARS ──
    {
        id: 'webinar-editorial',
        name: 'Editorial Webinar Sponsorship',
        category: 'webinar',
        categoryLabel: 'Webinar',
        description: 'Sponsor an editorial webinar with speaker selected by Photonics Media. Includes 3 targeted promotional emails, contact info for all registrants, and logo on website. Average 253 leads per event.',
        specs: { 'Avg Leads': '253', Emails: '3 promos', Questions: '1 custom' },
        pricing: { '1x': 5990 },
        unit: 'webinar',
        hasFrequency: false,
    },
    {
        id: 'webinar-custom',
        name: 'Custom Webinar Promotion Package',
        category: 'webinar',
        categoryLabel: 'Webinar',
        description: 'Full custom webinar where you select the speaker and topic. Includes 3 targeted promotional emails, 3 custom registration questions, full registrant list, and logo placement. Average 220 leads.',
        specs: { 'Avg Leads': '220', Emails: '3 promos', Questions: '3 custom' },
        pricing: { '1x': 10060 },
        unit: 'webinar',
        hasFrequency: false,
    },

    // ── VIRTUAL EVENTS ──
    {
        id: 'event-track',
        name: 'Virtual Summit — Track Sponsorship',
        category: 'event',
        categoryLabel: 'Virtual Event',
        description: 'Sponsor a track at one of our 17 virtual summits in 2026 (Optical Fabrication, Raman Spectroscopy, Ultrafast Lasers, Quantum, and more). Includes full registrant contact info, logo placement, featured content, and social promotion. Avg 545 registrants/event.',
        specs: { 'Avg Registrants': '545', Includes: 'Full lead access + logo + social' },
        pricing: { '1x': 7510 },
        unit: 'sponsorship',
        hasFrequency: false,
    },
    {
        id: 'event-summit',
        name: 'Virtual Summit — Summit Sponsorship',
        category: 'event',
        categoryLabel: 'Virtual Event',
        description: 'Full summit-level sponsorship at one of our 17 virtual summits. Maximum visibility with logo on all event pages, promotional emails, social media, and featured sponsor profile. Avg 545 registrants/event.',
        specs: { 'Avg Registrants': '545', Includes: 'Full lead access + logo + social + featured profile' },
        pricing: { '1x': 7510 },
        unit: 'sponsorship',
        hasFrequency: false,
    },

    // ── TRADE SHOW SNEAK PREVIEWS ──
    {
        id: 'sneak-leaderboard',
        name: 'Trade Show Sneak Preview — Leaderboard & Third Unit',
        category: 'event',
        categoryLabel: 'Virtual Event',
        description: 'Top-tier ad in our Trade Show Sneak Preview newsletters (SPIE Photonics West, CLEO, OFC, VISION, and more). 40,000 circulation. Drive traffic to your booth before major trade shows.',
        specs: { Circulation: '40,000', Shows: '8 events in 2026' },
        pricing: { '1x': 3885 },
        unit: 'newsletter',
        hasFrequency: false,
    },
    {
        id: 'sneak-standard',
        name: 'Trade Show Sneak Preview — Standard Unit',
        category: 'event',
        categoryLabel: 'Virtual Event',
        description: 'Standard exhibitor listing in our Trade Show Sneak Preview newsletters. Promote your booth presence to 40,000 targeted professionals before major shows.',
        specs: { Circulation: '40,000', Shows: '8 events in 2026' },
        pricing: { '1x': 2685 },
        unit: 'newsletter',
        hasFrequency: false,
    },

    // ── PODCAST ──
    {
        id: 'podcast-intro',
        name: '"All Things Photonics" Podcast — Intro Commercial',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: 'A 20-second introduction commercial on the award-winning "All Things Photonics" podcast for 3 months (1 quarter). Your company name and web address listed in episode descriptions and new episode email alerts to 20,000 people. Limited to 4 sponsors/quarter.',
        specs: { Duration: '3 months (1 quarter)', 'Email Reach': '20,000', Spots: '4 per quarter' },
        pricing: { '1x': 6500 },
        unit: 'quarter',
        hasFrequency: false,
    },
    {
        id: 'podcast-midroll',
        name: '"All Things Photonics" Podcast — Midroll Commercial',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: 'Midroll commercial placement on the "All Things Photonics" podcast for 3 months. Includes listing in episode descriptions and email alerts. Limited to 4 sponsors/quarter.',
        specs: { Duration: '3 months (1 quarter)', 'Email Reach': '20,000' },
        pricing: { '1x': 4875 },
        unit: 'quarter',
        hasFrequency: false,
    },

    // ── WHITE PAPERS ──
    {
        id: 'wp-20k',
        name: 'White Paper / App Note — 20K Email Blast',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: 'Publish your white paper, application note, or data sheet. Featured for 3 months in our library and pushed via a dedicated email to 20,000 qualified readers targeted by technology. Generates full-contact leads. Requires print ad.',
        specs: { 'Email Blast': '20,000', Duration: '3 months in library', Leads: 'Full contact info' },
        pricing: { '1x': 8140 },
        unit: 'campaign',
        hasFrequency: false,
    },
    {
        id: 'wp-10k',
        name: 'White Paper / App Note — 10K Email Blast',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: 'White paper or application note with a 10,000-recipient targeted email blast. Featured for 3 months in the white paper library. Requires print ad in Photonics Spectra, BioPhotonics, or Vision Spectra.',
        specs: { 'Email Blast': '10,000', Duration: '3 months in library' },
        pricing: { '1x': 4475 },
        unit: 'campaign',
        hasFrequency: false,
    },
    {
        id: 'wp-5k',
        name: 'White Paper / App Note — 5K Email Blast',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: 'White paper or application note with a 5,000-recipient targeted email blast. Featured for 3 months. Requires print ad.',
        specs: { 'Email Blast': '5,000', Duration: '3 months in library' },
        pricing: { '1x': 2465 },
        unit: 'campaign',
        hasFrequency: false,
    },

    // ── VIDEO ──
    {
        id: 'video-newscast',
        name: 'Photonics Spectra Now — Video Sponsorship',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: 'Sponsor the weekly Photonics Spectra Now newscast for 1 month. Includes pre-roll acknowledgment, logo throughout the newscast, and social media promotion. Limited to 3 sponsors/month.',
        specs: { Duration: '1 month', Includes: 'Pre-roll + logo + social', Spots: '3 per month' },
        pricing: { '1x': 2800 },
        unit: 'month',
        hasFrequency: false,
    },
    {
        id: 'video-tradeshow',
        name: 'Trade Show Video Production',
        category: 'content',
        categoryLabel: 'Content & Video',
        description: '2-minute professional product demo video with voice-over, interview sound bites, and professional editing. Distributed on Photonics.com, social media, YouTube, and featured in the Trade Show Recap Newsletter.',
        specs: { Length: '2 min', Includes: 'Editing + distribution + social' },
        pricing: { '1x': 4400 },
        unit: 'video',
        hasFrequency: false,
    },

    // ── PHOTONICS MARKETPLACE ──
    {
        id: 'mp-premium',
        name: 'Photonics Marketplace — Premium Package',
        category: 'marketplace',
        categoryLabel: 'Marketplace',
        description: 'Premium exhibitor package with 30 SEO keywords, 40 product uploads, 2 premier products, 20 technical papers/videos, 5 job postings, 30 Buyers\' Guide categories, 3 premier categories, full-page print ad, and social media integration. 270,000 annual visitors.',
        specs: { Keywords: '30', Products: '40', 'Print Ad': 'Full Page', Visitors: '270K/yr' },
        pricing: { '1x': 10975 },
        unit: 'year',
        hasFrequency: false,
    },
    {
        id: 'mp-plus',
        name: 'Photonics Marketplace — Plus Package',
        category: 'marketplace',
        categoryLabel: 'Marketplace',
        description: 'Plus exhibitor package with 20 SEO keywords, 30 product uploads, 1 premier product, 15 technical papers/videos, 3 job postings, 20 Buyers\' Guide categories, 2 premier categories, and 1/2 page print ad.',
        specs: { Keywords: '20', Products: '30', 'Print Ad': '1/2 Page', Visitors: '270K/yr' },
        pricing: { '1x': 8905 },
        unit: 'year',
        hasFrequency: false,
    },
    {
        id: 'mp-base',
        name: 'Photonics Marketplace — Base Package',
        category: 'marketplace',
        categoryLabel: 'Marketplace',
        description: 'Base exhibitor package with 20 SEO keywords, 20 product uploads, 10 technical papers/videos, 2 job postings, 20 Buyers\' Guide categories, 1 premier category, and 1/3 page print ad.',
        specs: { Keywords: '20', Products: '20', 'Print Ad': '1/3 Page', Visitors: '270K/yr' },
        pricing: { '1x': 7645 },
        unit: 'year',
        hasFrequency: false,
    },
];

// === State ===
let campaign = []; // { placementId, quantity, frequency, startDate }

// === Init ===
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

        const specsHtml = Object.entries(p.specs)
            .map(([k, v]) => `<span><strong>${escapeHtml(k)}:</strong> ${escapeHtml(String(v))}</span>`)
            .join('');

        // Show price range or single price
        const prices = Object.values(p.pricing);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        let priceHtml;
        if (prices.length > 1) {
            priceHtml = `<span class="from-label">From </span>$${minPrice.toLocaleString()} <span class="unit">/ ${escapeHtml(p.unit)}</span>`;
        } else {
            priceHtml = `$${maxPrice.toLocaleString()} <span class="unit">/ ${escapeHtml(p.unit)}</span>`;
        }

        return `
            <div class="placement-card ${inCampaign ? 'added' : ''}" data-id="${p.id}">
                <span class="placement-badge ${badgeClass}">${escapeHtml(p.categoryLabel)}</span>
                <h3>${escapeHtml(p.name)}</h3>
                <p class="description">${escapeHtml(p.description)}</p>
                <div class="placement-specs">${specsHtml}</div>
                <div class="placement-price">${priceHtml}</div>
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

// === Toggle Placement ===
function togglePlacement(placementId) {
    const index = campaign.findIndex(c => c.placementId === placementId);
    if (index >= 0) {
        campaign.splice(index, 1);
    } else {
        const p = PLACEMENTS.find(pl => pl.id === placementId);
        const freqKeys = Object.keys(p.pricing);
        campaign.push({
            placementId,
            quantity: 1,
            frequency: freqKeys[0], // default to first (cheapest frequency or only option)
        });
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

// === Get price for a campaign item ===
function getItemPrice(p, item) {
    return p.pricing[item.frequency] || Object.values(p.pricing)[0];
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
        const unitPrice = getItemPrice(p, item);
        const subtotal = unitPrice * item.quantity;
        const badgeClass = `badge-${p.category}`;

        // Frequency selector (only for items with multiple pricing tiers)
        let frequencyHtml = '';
        const freqKeys = Object.keys(p.pricing);
        if (p.hasFrequency && freqKeys.length > 1) {
            const options = freqKeys.map(k =>
                `<option value="${k}" ${item.frequency === k ? 'selected' : ''}>${k} ($${p.pricing[k].toLocaleString()}/${escapeHtml(p.unit)})</option>`
            ).join('');
            frequencyHtml = `
                <div>
                    <label>Frequency</label>
                    <select onchange="updateFrequency(${idx}, this.value)">${options}</select>
                </div>
            `;
        }

        return `
            <div class="campaign-item">
                <div>
                    <div class="campaign-item-header">
                        <span class="placement-badge ${badgeClass}">${escapeHtml(p.categoryLabel)}</span>
                        <h4>${escapeHtml(p.name)}</h4>
                    </div>
                    <div class="campaign-item-controls">
                        ${frequencyHtml}
                        <div>
                            <label>Quantity</label>
                            <input type="number" min="1" max="24" value="${item.quantity}"
                                onchange="updateQuantity(${idx}, this.value)">
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

// === Update Handlers ===
function updateQuantity(index, value) {
    const qty = Math.max(1, Math.min(24, parseInt(value, 10) || 1));
    campaign[index].quantity = qty;
    refreshAll();
}

function updateFrequency(index, value) {
    campaign[index].frequency = value;
    refreshAll();
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
        const unitPrice = getItemPrice(p, item);
        const subtotal = unitPrice * item.quantity;
        total += subtotal;
        const freqLabel = p.hasFrequency ? item.frequency : '—';
        return `
            <tr>
                <td>${escapeHtml(p.name)}</td>
                <td>${freqLabel}</td>
                <td>${item.quantity}</td>
                <td class="text-right">$${subtotal.toLocaleString()}</td>
            </tr>
        `;
    }).join('');

    totalCost.textContent = '$' + total.toLocaleString();
}

// === Form ===
function setupForm() {
    document.getElementById('submitForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (campaign.length === 0) return;

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();

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
                const unitPrice = getItemPrice(p, item);
                return {
                    placement: p.name,
                    category: p.categoryLabel,
                    frequency: item.frequency,
                    quantity: item.quantity,
                    unit: p.unit,
                    unitPrice,
                    subtotal: unitPrice * item.quantity,
                };
            }),
            totalEstimate: campaign.reduce((sum, item) => {
                const p = PLACEMENTS.find(pl => pl.id === item.placementId);
                return sum + (p ? getItemPrice(p, item) * item.quantity : 0);
            }, 0),
            submittedAt: new Date().toISOString(),
        };

        console.log('Campaign submitted:', JSON.stringify(payload, null, 2));

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
    campaign = [];
    document.getElementById('submitForm').reset();
    refreshAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === Helpers ===
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
