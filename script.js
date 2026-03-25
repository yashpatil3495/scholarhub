/* ============================
   ScholarHub — script.js
   Shared logic across all pages
   ============================ */

// ===== SCHOLARSHIP DATA =====
const scholarships = [
  { id:1, name:"National Merit Scholarship", type:"gov", field:"general", eligibility:"Students with 85%+ in 12th", deadline:"2026-04-05", amount:"₹50,000/year", description:"Merit-based scholarship for high-performing students across all streams.", documents:["12th Marksheet","Income Certificate","Aadhaar Card","Bank Passbook","Passport Photo"], tips:"Fill in exact marks as per marksheet. Use official name matching Aadhaar.", link:"https://scholarships.gov.in", faq:[{q:"Who can apply?",a:"Any student with 85%+ in 12th from a recognized board."},{q:"Is there an income limit?",a:"Family income must be below ₹8 lakhs per annum."}] },
  { id:2, name:"Post-Matric SC/ST Scholarship", type:"gov", field:"general", eligibility:"SC/ST students in post-matric", deadline:"2026-04-15", amount:"Full tuition + ₹10,000 stipend", description:"Government scholarship for SC/ST students pursuing post-matric education.", documents:["Caste Certificate","Income Certificate","Admission Letter","Marksheets","Aadhaar","Bank Details"], tips:"Ensure caste certificate is from the correct authority. Income certificate should be recent.", link:"https://scholarships.gov.in", faq:[{q:"What courses are covered?",a:"All post-matric courses in recognized institutions."},{q:"Can I apply if studying in a private college?",a:"Yes, if the college is recognized/affiliated."}] },
  { id:3, name:"Tata Scholarship for Engineering", type:"private", field:"engineering", eligibility:"Engineering students, family income < ₹4L", deadline:"2026-04-02", amount:"₹1,00,000/year", description:"Tata Trust scholarship supporting meritorious engineering students from low-income families.", documents:["Engineering Admission Proof","Income Certificate","12th Marksheet","Recommendation Letter","SOP"], tips:"Highlight your engineering projects and career goals in SOP. Get recommendation from HOD.", link:"https://www.tatatrusts.org", faq:[{q:"Which engineering branches are eligible?",a:"All branches of B.Tech/B.E."},{q:"Is hostel fee covered?",a:"Yes, scholarship covers tuition and hostel fees."}] },
  { id:4, name:"INSPIRE Scholarship (DST)", type:"gov", field:"science", eligibility:"Students in B.Sc/M.Sc with top 1% board", deadline:"2026-05-10", amount:"₹80,000/year", description:"DST INSPIRE scholarship for students pursuing basic and natural sciences.", documents:["Board Marksheet","University Admission","Aadhaar Card","Bank Account","Photograph"], tips:"Apply through the INSPIRE portal. Ensure your board rank certificate is ready.", link:"https://online-inspire.gov.in", faq:[{q:"What subjects qualify?",a:"Physics, Chemistry, Mathematics, Biology, and related basic sciences."},{q:"Is M.Sc covered?",a:"Yes, the scholarship extends to M.Sc as well."}] },
  { id:5, name:"Reliance Foundation Scholarship", type:"private", field:"engineering", eligibility:"UG students in top engineering colleges", deadline:"2026-04-20", amount:"₹2,00,000/year", description:"Prestigious scholarship by Reliance Foundation for top engineering talent.", documents:["College ID","Marksheets","Income Proof","SOP","Resume","2 Recommendation Letters"], tips:"Focus on innovation and leadership in your SOP. Mention any research work.", link:"https://www.reliancefoundation.org", faq:[{q:"Which colleges are eligible?",a:"Top NIRF-ranked engineering colleges."},{q:"Is there an interview?",a:"Yes, shortlisted candidates will be interviewed."}] },
  { id:6, name:"AICTE Pragati Scholarship (Girls)", type:"gov", field:"engineering", eligibility:"Girl students in AICTE-approved colleges", deadline:"2026-04-30", amount:"₹50,000/year", description:"AICTE scheme to support girl students in technical education.", documents:["Admission Letter","10th & 12th Marksheets","Income Certificate","Aadhaar Card","Bank Passbook"], tips:"Only one girl per family can avail. Apply early to avoid deadline rush.", link:"https://www.aicte-pragati.gov.in", faq:[{q:"Is this only for engineering?",a:"It covers all AICTE-approved technical courses."},{q:"What is the income limit?",a:"Family income below ₹8 lakhs per annum."}] },
  { id:7, name:"Kotak Kanya Scholarship", type:"private", field:"general", eligibility:"Girl students from economically weaker sections", deadline:"2026-04-25", amount:"₹1,50,000/year", description:"Kotak Education Foundation scholarship empowering meritorious girls.", documents:["12th Marksheet","Income Proof","Aadhaar","College Admission Proof","Bank Details","Photograph"], tips:"Academic consistency is key. Maintain above 70% throughout.", link:"https://www.kotakeducation.org", faq:[{q:"Is there a GPA requirement?",a:"Minimum 60% in 12th standard."},{q:"Can I apply for professional courses?",a:"Yes — engineering, medical, law, etc. are all eligible."}] },
  { id:8, name:"Central Sector Scholarship (CSS)", type:"gov", field:"general", eligibility:"Top 20 percentile in 12th board", deadline:"2026-04-10", amount:"₹20,000/year (UG), ₹36,000 (PG)", description:"MHRD scholarship for college and university students from non-wealthy families.", documents:["12th Marksheet with percentile","College Admission","Income Certificate","Aadhaar","Bank Details","Caste Cert (if applicable)"], tips:"Check your board's percentile cutoff. Apply on National Scholarship Portal.", link:"https://scholarships.gov.in", faq:[{q:"What is the income limit?",a:"Family income below ₹6 lakhs per annum."},{q:"Is it renewable?",a:"Yes, renewed annually based on academic progress."}] },
  { id:9, name:"Sitaram Jindal Foundation Scholarship", type:"private", field:"medical", eligibility:"Medical students (MBBS/BDS), income < ₹3L", deadline:"2026-05-01", amount:"₹30,000/year", description:"Foundation scholarship for deserving medical students from low-income backgrounds.", documents:["Medical Admission Proof","Income Certificate","Marksheets","Aadhaar","Bank Account"], tips:"Apply via the foundation's website. Attach NEET scorecard.", link:"https://www.sitaramjindalfoundation.org", faq:[{q:"Are AYUSH courses covered?",a:"Yes, BAMS and BHMS are also eligible."},{q:"Can PG students apply?",a:"This is primarily for UG medical students."}] },
  { id:10, name:"KVPY Fellowship", type:"gov", field:"science", eligibility:"Students pursuing basic sciences (11th to 1st year B.Sc)", deadline:"2026-05-15", amount:"₹5,000-7,000/month + contingency", description:"Prestigious fellowship by DST for students showing aptitude in basic sciences.", documents:["Board Marksheet","KVPY Admit Card","Aadhaar","College ID","Bank Account"], tips:"Focus on aptitude test preparation. Study NCERT thoroughly.", link:"https://kvpy.iisc.ernet.in", faq:[{q:"Is there an exam?",a:"Yes, a national-level aptitude test followed by interview."},{q:"What is the duration?",a:"Fellowship continues through B.Sc, M.Sc, and up to PhD."}] },
  { id:11, name:"Begum Hazrat Mahal Scholarship", type:"gov", field:"general", eligibility:"Minority girl students (9th-12th)", deadline:"2026-04-08", amount:"₹5,000-6,000", description:"Scholarship for meritorious girls belonging to minority communities.", documents:["School Certificate","Minority Certificate","Income Proof","Aadhaar","Bank Account","Photo"], tips:"Apply through National Scholarship Portal. Keep minority community certificate ready.", link:"https://scholarships.gov.in", faq:[{q:"Which minorities are eligible?",a:"Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis."},{q:"What is the income limit?",a:"Family income below ₹2 lakhs per annum."}] },
  { id:12, name:"Wipro Earthian Scholarship", type:"private", field:"science", eligibility:"Top 3 teams in Wipro Earthian contest", deadline:"2026-06-01", amount:"₹5,00,000 grant + mentorship", description:"Sustainability-focused scholarship rewarding innovative environmental projects.", documents:["Project Report","Team Details","School/College ID","Mentor Recommendation"], tips:"Focus on real-world sustainability challenges. Include data and impact metrics.", link:"https://www.wipro.com/earthian", faq:[{q:"Can individuals apply?",a:"No, it's a team-based competition (3-5 members)."},{q:"Are school students eligible?",a:"Yes, separate categories for school and college."}] }
];

// ===== I18N =====
const translations = {
  hi: {
    hero_badge:"आपकी स्कॉलरशिप यात्रा यहाँ से शुरू होती है", hero_title:"स्कॉलरशिप खोजें और जीतें", hero_desc:"सरकारी और निजी स्कॉलरशिप खोजें, डेडलाइन ट्रैक करें, AI मार्गदर्शन प्राप्त करें।",
    explore_btn:"स्कॉलरशिप खोजें", dash_btn:"मेरा डैशबोर्ड", stat_sch:"स्कॉलरशिप", stat_stu:"छात्रों की मदद", stat_suc:"सफलता दर",
    feat_title:"सफलता के लिए सब कुछ", feat_desc:"स्कॉलरशिप खोज, आवेदन और सफलता के लिए संपूर्ण टूलकिट।",
    feat1_t:"स्मार्ट खोज", feat1_d:"150+ सरकारी और निजी स्कॉलरशिप ब्राउज़ करें।", feat_explore:"खोजें",
    feat2_t:"AI सहायक", feat2_d:"पात्रता, दस्तावेज़ और आवेदन चरणों के बारे में तुरंत जवाब पाएं।", feat_chat:"चैट करें",
    feat3_t:"प्रगति ट्रैक करें", feat3_d:"अपने आवेदनों की निगरानी करें और एनालिटिक्स देखें।", feat_dash:"डैशबोर्ड",
    feat4_t:"दस्तावेज़ केंद्र", feat4_d:"चेकलिस्ट, रिज्यूमे टेम्पलेट, SOP सैंपल एक जगह पाएं।", feat_docs:"दस्तावेज़ देखें",
    qn_title:"त्वरित पहुँच", qn_desc:"सीधे जरूरत की चीज़ पर जाएं।", qn1_t:"स्कॉलरशिप", qn1_d:"ब्राउज़ और आवेदन",
    qn2_t:"डैशबोर्ड", qn2_d:"प्रगति ट्रैक", qn3_t:"सहायक", qn3_d:"मदद पाएं", qn4_t:"दस्तावेज़", qn4_d:"टेम्पलेट और टिप्स",
    latest_t:"नवीनतम स्कॉलरशिप", urgent_t:"जरूरी डेडलाइन", rt_text:"रियल-टाइम: 42 छात्रों ने आज आवेदन किया",
    sch_title:"स्कॉलरशिप खोजें", sch_desc:"सरकारी और निजी स्रोतों से सही स्कॉलरशिप खोजें।",
    dash_title:"आपका डैशबोर्ड", dash_desc:"आवेदनों को ट्रैक करें और अनुशंसाएं देखें।",
    chat_title:"स्कॉलरबॉट", chat_sub:"AI-संचालित स्कॉलरशिप सहायक",
    chat_welcome:"👋 नमस्ते! मैं स्कॉलरबॉट हूं। स्कॉलरशिप, दस्तावेज़, आवेदन के बारे में पूछें।",
    doc_title:"दस्तावेज़ केंद्र", doc_desc:"चेकलिस्ट, टेम्पलेट और तैयारी टिप्स।",
    login_title:"वापस स्वागत है", login_sub:"लॉगिन करें", signup_title:"खाता बनाएं",
    f_pages:"पृष्ठ", f_home:"होम", f_sch:"स्कॉलरशिप", f_dash:"डैशबोर्ड", f_asst:"सहायक",
    f_resources:"संसाधन", f_docs:"दस्तावेज़", f_faq:"FAQ", f_guide:"आवेदन गाइड", f_contact:"संपर्क",
  }
};
let currentLang = localStorage.getItem('sh_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sh_lang', lang);
  const btn = document.getElementById('langToggle');
  if(btn) btn.textContent = lang === 'en' ? 'EN' : 'हि';
  if(lang === 'en') { location.reload(); return; }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
}

// ===== UTILITY =====
function daysUntil(dateStr) { return Math.ceil((new Date(dateStr) - new Date()) / 86400000); }
function showToast(msg, type='info') {
  const c = document.getElementById('toastContainer'); if(!c) return;
  const t = document.createElement('div'); t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas fa-${type==='success'?'check-circle':type==='warning'?'exclamation-triangle':type==='error'?'times-circle':'info-circle'}"></i> ${msg}`;
  c.appendChild(t); setTimeout(() => t.remove(), 4000);
}
function getSaved() { return JSON.parse(localStorage.getItem('sh_saved') || '[]'); }
function setSaved(arr) { localStorage.setItem('sh_saved', JSON.stringify(arr)); }
function toggleSave(id) {
  let saved = getSaved();
  if(saved.includes(id)) { saved = saved.filter(s => s !== id); showToast('Removed from saved', 'warning'); }
  else { saved.push(id); showToast('Scholarship saved! ⭐', 'success'); }
  setSaved(saved);
  if(typeof renderScholarships === 'function') renderScholarships();
  updateSaveButtons();
}
function updateSaveButtons() {
  const saved = getSaved();
  document.querySelectorAll('.save-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if(saved.includes(id)) { btn.classList.add('saved'); btn.innerHTML = '<i class="fas fa-star"></i>'; }
    else { btn.classList.remove('saved'); btn.innerHTML = '<i class="far fa-star"></i>'; }
  });
}
function getUser() { return JSON.parse(localStorage.getItem('sh_user') || 'null'); }
function getProgress() { return JSON.parse(localStorage.getItem('sh_progress') || '{}'); }
function setProgress(obj) { localStorage.setItem('sh_progress', JSON.stringify(obj)); }

// ===== NAVBAR =====
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger
  const ham = document.getElementById('hamburger');
  const navL = document.getElementById('navLinks');
  if(ham && navL) ham.addEventListener('click', () => navL.classList.toggle('open'));

  // Scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Language toggle
  const langBtn = document.getElementById('langToggle');
  if(langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'EN' : 'हि';
    langBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'hi' : 'en'));
  }
  if(currentLang !== 'en') setLanguage(currentLang);

  // User state
  updateUserUI();

  // Notification panel
  const notifBtn = document.getElementById('notifBtn');
  const notifPanel = document.getElementById('notifPanel');
  if(notifBtn && notifPanel) {
    notifBtn.addEventListener('click', (e) => { e.stopPropagation(); notifPanel.classList.toggle('open'); });
    document.addEventListener('click', () => notifPanel.classList.remove('open'));
    notifPanel.addEventListener('click', e => e.stopPropagation());
  }
  renderNotifications();

  // Page-specific init
  const page = getPageName();
  if(page === 'index') initHome();
  else if(page === 'scholarships') initScholarships();
  else if(page === 'dashboard') initDashboard();
  else if(page === 'assistant') initAssistant();
  else if(page === 'documents') initDocuments();

  // Real-time simulation
  startRealTimeSimulation();
});

function getPageName() {
  const path = window.location.pathname;
  if(path.includes('scholarships')) return 'scholarships';
  if(path.includes('dashboard')) return 'dashboard';
  if(path.includes('assistant')) return 'assistant';
  if(path.includes('documents')) return 'documents';
  if(path.includes('login')) return 'login';
  return 'index';
}

function updateUserUI() {
  const user = getUser();
  const nameEl = document.getElementById('userName');
  const avatarEl = document.getElementById('userAvatar');
  const navUser = document.getElementById('navUser');
  if(user && nameEl) {
    nameEl.textContent = user.name.split(' ')[0];
    if(avatarEl) avatarEl.innerHTML = user.name.charAt(0).toUpperCase();
    if(navUser) navUser.href = '#'; 
    if(navUser) navUser.onclick = (e) => { e.preventDefault(); if(confirm('Logout?')) { localStorage.removeItem('sh_user'); location.reload(); } };
  }
}

// ===== NOTIFICATIONS =====
function renderNotifications() {
  const list = document.getElementById('notifList'); if(!list) return;
  const notifs = generateNotifications();
  const badge = document.getElementById('notifBadge');
  if(badge) badge.textContent = notifs.length;
  list.innerHTML = notifs.map(n => `
    <div class="notif-item">
      <div class="ni-icon ${n.type}"><i class="fas fa-${n.icon}"></i></div>
      <div class="ni-text"><h5>${n.title}</h5><p>${n.msg}</p></div>
    </div>`).join('');
}

function generateNotifications() {
  const notifs = [];
  scholarships.forEach(s => {
    const d = daysUntil(s.deadline);
    if(d >= 0 && d <= 7) notifs.push({ type:'deadline', icon:'clock', title:`⏰ ${s.name}`, msg:`Deadline in ${d} day${d!==1?'s':''}!` });
  });
  notifs.push({ type:'info', icon:'bell', title:'New scholarship added', msg:'Wipro Earthian Scholarship is now available.' });
  notifs.push({ type:'success', icon:'check', title:'Profile tip', msg:'Complete your profile for better recommendations.' });
  return notifs;
}

// ===== REAL-TIME SIMULATION =====
function startRealTimeSimulation() {
  const el = document.getElementById('realtimeText'); if(!el) return;
  const msgs = [
    '🔴 Live: 42 students applied today · 3 new scholarships added',
    '🟢 15 students saved scholarships in the last hour',
    '🔵 New: AICTE Pragati Scholarship applications now open!',
    '🟡 Deadline alert: Tata Scholarship closes in 3 days',
    '🟢 87 students matched with scholarships today',
    '🔴 Trending: National Merit Scholarship — 200+ applications today'
  ];
  let i = 0;
  setInterval(() => { i = (i+1) % msgs.length; el.textContent = msgs[i]; }, 5000);
  // Random toasts
  setTimeout(() => showToast('🎓 New scholarship added: Wipro Earthian!', 'success'), 8000);
  setTimeout(() => showToast('📊 25 students applied in the last 10 minutes', 'info'), 15000);
}

// ===== HOME PAGE =====
function initHome() {
  renderLatest();
  renderUrgent();
  animateCounters();
}

function renderLatest() {
  const el = document.getElementById('latestList'); if(!el) return;
  const latest = [...scholarships].sort((a,b) => new Date(b.deadline) - new Date(a.deadline)).slice(0,4);
  el.innerHTML = latest.map(s => `
    <div class="mini-card">
      <div class="mc-info"><h5>${s.name}</h5><p>${s.amount} · ${s.field}</p></div>
      <span class="mc-badge ${s.type==='gov'?'gov':'pvt'}">${s.type==='gov'?'Gov':'Private'}</span>
    </div>`).join('');
}

function renderUrgent() {
  const el = document.getElementById('urgentList'); if(!el) return;
  const urgent = scholarships.filter(s => daysUntil(s.deadline) >= 0 && daysUntil(s.deadline) <= 15).sort((a,b) => daysUntil(a.deadline) - daysUntil(b.deadline));
  el.innerHTML = urgent.length ? urgent.slice(0,4).map(s => {
    const d = daysUntil(s.deadline);
    return `<div class="mini-card"><div class="mc-info"><h5>${s.name}</h5><p>Deadline: ${s.deadline}</p></div><span class="mc-badge urgent">${d} day${d!==1?'s':''} left</span></div>`;
  }).join('') : '<p style="padding:1rem;color:var(--text-light);text-align:center">No urgent deadlines right now!</p>';
}

function animateCounters() {
  const targets = [{el:'statScholarships',val:150,suffix:'+'},{el:'statStudents',val:12,suffix:'K+'},{el:'statSuccess',val:89,suffix:'%'}];
  targets.forEach(t => {
    const el = document.getElementById(t.el); if(!el) return;
    let cur = 0; const step = t.val / 40;
    const timer = setInterval(() => { cur += step; if(cur >= t.val) { cur = t.val; clearInterval(timer); } el.textContent = Math.round(cur) + t.suffix; }, 40);
  });
}

// ===== SCHOLARSHIPS PAGE =====
function initScholarships() {
  renderScholarships();
  // Filter buttons
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); renderScholarships();
    });
  });
  // Search
  const search = document.getElementById('schSearch');
  if(search) search.addEventListener('input', () => renderScholarships());
  // Field & deadline filters
  const ff = document.getElementById('fieldFilter');
  const df = document.getElementById('deadlineFilter');
  if(ff) ff.addEventListener('change', () => renderScholarships());
  if(df) df.addEventListener('change', () => renderScholarships());
}

function renderScholarships() {
  const grid = document.getElementById('schGrid'); if(!grid) return;
  const searchVal = (document.getElementById('schSearch')?.value || '').toLowerCase();
  const typeFilter = document.querySelector('.filter-btn[data-filter].active')?.dataset.filter || 'all';
  const fieldFilter = document.getElementById('fieldFilter')?.value || 'all';
  const dlFilter = document.getElementById('deadlineFilter')?.value || 'all';
  const saved = getSaved();

  let filtered = scholarships.filter(s => {
    if(searchVal && !s.name.toLowerCase().includes(searchVal) && !s.field.toLowerCase().includes(searchVal)) return false;
    if(typeFilter !== 'all' && s.type !== typeFilter) return false;
    if(fieldFilter !== 'all' && s.field !== fieldFilter) return false;
    if(dlFilter !== 'all') { const d = daysUntil(s.deadline); if(d < 0 || d > parseInt(dlFilter)) return false; }
    return true;
  });

  grid.innerHTML = filtered.length ? filtered.map(s => {
    const d = daysUntil(s.deadline);
    const isUrgent = d >= 0 && d <= 7;
    const isSaved = saved.includes(s.id);
    return `
    <div class="sch-card ${isUrgent ? 'urgent-border' : ''} fade-in">
      <div class="sch-card-header">
        <span class="sch-type ${s.type}">${s.type === 'gov' ? 'Government' : 'Private'}</span>
        <button class="btn-icon save-btn ${isSaved?'saved':''}" data-id="${s.id}" onclick="toggleSave(${s.id})">
          <i class="${isSaved?'fas':'far'} fa-star"></i>
        </button>
      </div>
      <div class="sch-card-body">
        <h3>${s.name}</h3>
        <div class="sch-meta">
          <span><i class="fas fa-user-check"></i> ${s.eligibility}</span>
          <span class="${isUrgent?'deadline-urgent':''}"><i class="fas fa-calendar"></i> ${s.deadline} ${isUrgent?'('+d+'d left!)':''}</span>
          <span><i class="fas fa-coins"></i> ${s.amount}</span>
          <span><i class="fas fa-book"></i> ${s.field}</span>
        </div>
      </div>
      <div class="sch-card-footer">
        <button class="btn btn-secondary btn-sm" onclick="openModal(${s.id})"><i class="fas fa-info-circle"></i> Details</button>
        <a href="${s.link}" target="_blank" class="btn btn-primary btn-sm"><i class="fas fa-external-link-alt"></i> Apply</a>
      </div>
    </div>`;
  }).join('') : '<p style="text-align:center;color:var(--text-light);padding:3rem;grid-column:1/-1">No scholarships match your filters. Try adjusting your search.</p>';
}

// ===== MODAL =====
function openModal(id) {
  const s = scholarships.find(sc => sc.id === id); if(!s) return;
  const overlay = document.getElementById('schModal');
  document.getElementById('modalTitle').textContent = s.name;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-section">
      <h4><i class="fas fa-info-circle"></i> Overview</h4>
      <p style="font-size:0.9rem;color:var(--text-light)">${s.description}</p>
      <div class="sch-meta" style="margin-top:0.8rem">
        <span><i class="fas fa-coins"></i> ${s.amount}</span>
        <span><i class="fas fa-calendar"></i> Deadline: ${s.deadline}</span>
        <span><i class="fas fa-book"></i> ${s.field}</span>
        <span class="sch-type ${s.type}" style="font-size:0.75rem">${s.type==='gov'?'Government':'Private'}</span>
      </div>
    </div>
    <div class="modal-section">
      <h4><i class="fas fa-project-diagram"></i> Application Flow</h4>
      <div class="flowchart">
        <div class="flow-step"><i class="fas fa-user-plus"></i>Register</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-edit"></i>Fill Form</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-upload"></i>Upload Docs</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-paper-plane"></i>Submit</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-search"></i>Verification</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-check-circle"></i>Approval</div>
      </div>
    </div>
    <div class="modal-section">
      <h4><i class="fas fa-file-alt"></i> Required Documents</h4>
      ${s.documents.map(doc => `<div class="checklist-item"><i class="fas fa-check-circle"></i> ${doc}</div>`).join('')}
    </div>
    <div class="modal-section">
      <h4><i class="fas fa-lightbulb"></i> Form Filling Tips</h4>
      <p style="font-size:0.85rem;color:var(--text-light);background:var(--bg);padding:1rem;border-radius:var(--radius-sm)">${s.tips}</p>
    </div>
    <div class="modal-section">
      <h4><i class="fas fa-question-circle"></i> Smart FAQ</h4>
      ${s.faq.map(f => `<div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('open')">${f.q} <i class="fas fa-chevron-down"></i></div><div class="faq-a">${f.a}</div></div>`).join('')}
    </div>
    <div style="margin-top:1.5rem;display:flex;gap:0.8rem">
      <a href="${s.link}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Apply Now</a>
      <button class="btn btn-secondary" onclick="toggleSave(${s.id});closeModal()"><i class="fas fa-star"></i> Save</button>
    </div>`;
  overlay.classList.add('open');
}

function closeModal() { document.getElementById('schModal')?.classList.remove('open'); }
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

// ===== DASHBOARD =====
function initDashboard() {
  updateDashStats();
  renderRecommendations();
  renderSavedTab();
  renderProgressTab();
  initCalendar();
  updateProbMeter();

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).style.display = 'block';
    });
  });
}

function updateDashStats() {
  const saved = getSaved();
  const progress = getProgress();
  const applied = Object.values(progress).filter(v => v !== 'not-started').length;
  const upcoming = scholarships.filter(s => { const d = daysUntil(s.deadline); return d >= 0 && d <= 30; }).length;
  const el1 = document.getElementById('totalSch'); if(el1) el1.textContent = scholarships.length;
  const el2 = document.getElementById('savedCount'); if(el2) el2.textContent = saved.length;
  const el3 = document.getElementById('appliedCount'); if(el3) el3.textContent = applied;
  const el4 = document.getElementById('upcomingDl'); if(el4) el4.textContent = upcoming;
}

function renderRecommendations() {
  const grid = document.getElementById('recGrid'); if(!grid) return;
  const user = getUser();
  let recs = [...scholarships];
  if(user && user.field) recs.sort((a,b) => (a.field === user.field ? -1 : 1) - (b.field === user.field ? -1 : 1));
  else recs.sort((a,b) => daysUntil(a.deadline) - daysUntil(b.deadline));
  const saved = getSaved();
  grid.innerHTML = recs.slice(0,6).map(s => {
    const d = daysUntil(s.deadline); const isUrgent = d>=0 && d<=7; const isSaved = saved.includes(s.id);
    return `<div class="sch-card fade-in">
      <div class="sch-card-header"><span class="sch-type ${s.type}">${s.type==='gov'?'Gov':'Private'}</span>
        <button class="btn-icon save-btn ${isSaved?'saved':''}" data-id="${s.id}" onclick="toggleSave(${s.id})"><i class="${isSaved?'fas':'far'} fa-star"></i></button></div>
      <div class="sch-card-body"><h3>${s.name}</h3>
        <div class="sch-meta"><span class="${isUrgent?'deadline-urgent':''}"><i class="fas fa-calendar"></i> ${s.deadline}</span><span><i class="fas fa-coins"></i> ${s.amount}</span></div></div>
      <div class="sch-card-footer"><button class="btn btn-secondary btn-sm" onclick="window.location='scholarships.html'"><i class="fas fa-eye"></i> View</button></div></div>`;
  }).join('');
}

function renderSavedTab() {
  const grid = document.getElementById('savedGrid');
  const noSaved = document.getElementById('noSaved');
  if(!grid) return;
  const saved = getSaved();
  const savedSch = scholarships.filter(s => saved.includes(s.id));
  if(savedSch.length === 0) { grid.innerHTML = ''; if(noSaved) noSaved.style.display = 'block'; return; }
  if(noSaved) noSaved.style.display = 'none';
  grid.innerHTML = savedSch.map(s => `<div class="sch-card fade-in">
    <div class="sch-card-header"><span class="sch-type ${s.type}">${s.type==='gov'?'Gov':'Private'}</span>
      <button class="btn-icon save-btn saved" data-id="${s.id}" onclick="toggleSave(${s.id})"><i class="fas fa-star"></i></button></div>
    <div class="sch-card-body"><h3>${s.name}</h3>
      <div class="sch-meta"><span><i class="fas fa-calendar"></i> ${s.deadline}</span><span><i class="fas fa-coins"></i> ${s.amount}</span></div></div>
    <div class="sch-card-footer"><button class="btn btn-secondary btn-sm" onclick="window.location='scholarships.html'"><i class="fas fa-eye"></i> View</button></div></div>`).join('');
}

function renderProgressTab() {
  const list = document.getElementById('progressList'); if(!list) return;
  const progress = getProgress();
  const statuses = ['not-started','in-progress','submitted','approved'];
  const statusLabels = {
    'not-started':'Not Started','in-progress':'In Progress','submitted':'Submitted','approved':'Approved'
  };
  // Use saved or all scholarships
  const tracked = getSaved().length ? scholarships.filter(s => getSaved().includes(s.id)) : scholarships.slice(0,5);
  list.innerHTML = tracked.map(s => {
    const st = progress[s.id] || 'not-started';
    const nextIdx = Math.min(statuses.indexOf(st)+1, statuses.length-1);
    const nextSt = statuses[nextIdx];
    return `<div class="progress-item">
      <div class="progress-dot ${st}"></div>
      <div class="progress-info"><h5>${s.name}</h5><p>${s.deadline}</p></div>
      <span class="progress-status ${st}">${statusLabels[st]}</span>
      ${st!=='approved'?`<button class="btn btn-sm btn-secondary" onclick="advanceProgress(${s.id},'${nextSt}')" style="margin-left:0.5rem;padding:4px 10px;font-size:0.7rem">Next →</button>`:''}
    </div>`;
  }).join('');
}

function advanceProgress(id, status) {
  const p = getProgress(); p[id] = status; setProgress(p);
  renderProgressTab(); updateDashStats(); updateProbMeter();
  showToast(`Status updated to: ${status.replace('-',' ')}`, 'success');
}

// ===== CALENDAR =====
let calDate = new Date();
function initCalendar() { renderCalendar(); }
function changeMonth(dir) { calDate.setMonth(calDate.getMonth() + dir); renderCalendar(); }
function renderCalendar() {
  const monthEl = document.getElementById('calMonth');
  const grid = document.getElementById('calGrid'); if(!grid) return;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const y = calDate.getFullYear(), m = calDate.getMonth();
  if(monthEl) monthEl.textContent = `${months[m]} ${y}`;
  const firstDay = new Date(y,m,1).getDay();
  const daysInMonth = new Date(y,m+1,0).getDate();
  const today = new Date();
  // Deadlines this month
  const deadlineDays = scholarships.filter(s => { const dd = new Date(s.deadline); return dd.getMonth()===m && dd.getFullYear()===y; }).map(s => new Date(s.deadline).getDate());
  let html = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => `<div class="cal-day-name">${d}</div>`).join('');
  for(let i=0;i<firstDay;i++) html += '<div class="cal-day empty"></div>';
  for(let d=1;d<=daysInMonth;d++) {
    const isToday = d===today.getDate() && m===today.getMonth() && y===today.getFullYear();
    const hasEvent = deadlineDays.includes(d);
    html += `<div class="cal-day ${isToday?'today':''} ${hasEvent?'has-event':''}">${d}</div>`;
  }
  grid.innerHTML = html;
}

// ===== PROBABILITY METER =====
function updateProbMeter() {
  const circle = document.getElementById('probCircle');
  const valueEl = document.getElementById('probValue');
  const tipEl = document.getElementById('probTip');
  if(!circle || !valueEl) return;
  const user = getUser();
  const saved = getSaved();
  const progress = getProgress();
  let score = 20; // base
  if(user) score += 25;
  if(saved.length > 0) score += Math.min(saved.length * 5, 20);
  if(Object.keys(progress).length > 0) score += 15;
  const submitted = Object.values(progress).filter(v => v === 'submitted' || v === 'approved').length;
  score += Math.min(submitted * 5, 20);
  score = Math.min(score, 98);
  const deg = (score / 100) * 360;
  circle.style.background = `conic-gradient(var(--success) 0deg, var(--success) ${deg}deg, var(--border) ${deg}deg)`;
  valueEl.textContent = score + '%';
  if(score < 40) tipEl.textContent = '💡 Create an account and save scholarships to improve!';
  else if(score < 70) tipEl.textContent = '📈 Great start! Apply to more scholarships to boost your chances.';
  else tipEl.textContent = '🌟 Excellent! You\'re on track for success!';
}

// ===== CHAT ASSISTANT =====
function initAssistant() {}

const chatResponses = [
  { keywords:['scholarship','apply','which','what scholarships','eligible'], response: () => {
    const user = getUser();
    let recs = user?.field ? scholarships.filter(s => s.field === user.field || s.field === 'general') : scholarships.slice(0,5);
    return `Based on ${user?'your profile':'available data'}, here are some scholarships you can apply for:\n\n${recs.slice(0,4).map(s => `📌 **${s.name}** — ${s.amount} (Deadline: ${s.deadline})`).join('\n')}\n\n👉 Visit the <a href="scholarships.html" style="color:var(--accent)">Scholarships page</a> for the full list!`;
  }},
  { keywords:['document','documents','required','need','papers'], response: () => 'Here are the commonly required documents:\n\n📄 10th & 12th Marksheets\n📄 Income Certificate\n📄 Aadhaar Card\n📄 Caste Certificate (if applicable)\n📄 College Admission Letter\n📄 Bank Passbook\n📄 Passport Photos\n📄 SOP & Resume\n\n👉 Check the <a href="documents.html" style="color:var(--accent)">Documents page</a> for full checklists and templates!' },
  { keywords:['sop','statement of purpose','write','how to write'], response: () => '✍️ Tips for writing a great SOP:\n\n1. Keep it 500-800 words\n2. Start with a compelling personal story\n3. Highlight your academic achievements\n4. Explain why you deserve the scholarship\n5. Mention your career goals\n6. Proofread multiple times!\n\n📥 Download our SOP template from the <a href="documents.html" style="color:var(--accent)">Documents page</a>!' },
  { keywords:['deadline','urgent','soon','closing','last date'], response: () => {
    const urgent = scholarships.filter(s => { const d = daysUntil(s.deadline); return d >= 0 && d <= 15; }).sort((a,b) => daysUntil(a.deadline) - daysUntil(b.deadline));
    return urgent.length ? `⏰ Upcoming deadlines:\n\n${urgent.map(s => `🔴 **${s.name}** — ${daysUntil(s.deadline)} days left (${s.deadline})`).join('\n')}\n\nDon't miss out! Apply now.` : '✅ No urgent deadlines in the next 15 days. Keep preparing!';
  }},
  { keywords:['interview','tips','prepare','preparation'], response: () => '🎤 Scholarship Interview Tips:\n\n1. Research the scholarship organization\n2. Prepare your elevator pitch (30 seconds)\n3. Know your SOP inside-out\n4. Be ready to discuss career goals\n5. Dress formally and arrive early\n6. Prepare 2-3 questions to ask\n7. Practice with a friend or mentor\n\nYou\'ve got this! 💪' },
  { keywords:['save','bookmark','saved'], response: () => { const s = getSaved(); return s.length ? `You have ${s.length} saved scholarship${s.length>1?'s':''}. View them on your <a href="dashboard.html" style="color:var(--accent)">Dashboard</a>!` : 'You haven\'t saved any scholarships yet. Browse the <a href="scholarships.html" style="color:var(--accent)">Scholarships page</a> and tap ⭐ to save!'; }},
  { keywords:['hello','hi','hey','help','start'], response: () => '👋 Hello! I can help you with:\n\n🎓 Finding scholarships\n📄 Document requirements\n✍️ SOP writing tips\n⏰ Deadline alerts\n🎤 Interview preparation\n📊 Application tracking\n\nJust ask away!' },
  { keywords:['income','certificate','proof'], response: () => '📄 Income Certificate Guide:\n\n1. Visit your local Tehsildar/SDM office\n2. Required: Aadhaar, ration card, salary slip\n3. Processing time: 7-15 days\n4. Can also apply online via state e-district portal\n5. Valid for 1 year typically\n\n💡 Apply early to avoid last-minute rush!' },
];

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim(); if(!msg) return;
  addChatMsg(msg, 'user'); input.value = '';
  setTimeout(() => {
    const response = getChatResponse(msg);
    addChatMsg(response, 'bot');
  }, 800);
}

function sendSuggestion(btn) { 
  const input = document.getElementById('chatInput');
  input.value = btn.textContent; sendChat(); 
}

function addChatMsg(text, sender) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${sender}`;
  const icon = sender === 'bot' ? 'fa-robot' : 'fa-user';
  div.innerHTML = `<div class="msg-avatar"><i class="fas ${icon}"></i></div><div class="msg-bubble">${text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function getChatResponse(msg) {
  const lower = msg.toLowerCase();
  for(const r of chatResponses) {
    if(r.keywords.some(k => lower.includes(k))) {
      return typeof r.response === 'function' ? r.response() : r.response;
    }
  }
  return "🤔 I'm not sure about that. Try asking about:\n\n• Available scholarships\n• Required documents\n• Deadlines\n• SOP writing tips\n• Interview preparation\n\nOr visit our <a href='scholarships.html' style='color:var(--accent)'>Scholarships page</a> for more info!";
}

// ===== DOCUMENTS PAGE =====
function initDocuments() {}
function toggleCheck(icon) {
  if(icon.classList.contains('fa-square')) {
    icon.classList.remove('far','fa-square');
    icon.classList.add('fas','fa-check-square');
    icon.style.color = 'var(--success)';
  } else {
    icon.classList.remove('fas','fa-check-square');
    icon.classList.add('far','fa-square');
    icon.style.color = 'var(--primary)';
  }
}

function downloadTemplate(type) {
  const templates = {
    resume: { name:'Resume_Template_ScholarHub.txt', content:'RESUME TEMPLATE\n================\n\nFULL NAME\nEmail: your@email.com | Phone: +91-XXXXX-XXXXX\nLinkedIn: linkedin.com/in/yourname\n\n--- EDUCATION ---\nDegree | University | Year | CGPA/Percentage\n\n--- SKILLS ---\nTechnical: ...\nSoft Skills: ...\n\n--- PROJECTS ---\n1. Project Name — Description\n\n--- ACHIEVEMENTS ---\n- Achievement 1\n\n--- EXTRACURRICULAR ---\n- Activity 1' },
    sop: { name:'SOP_Template_ScholarHub.txt', content:'STATEMENT OF PURPOSE\n====================\n\n[Opening Paragraph]\nBegin with a compelling personal story or motivation...\n\n[Academic Background]\nDiscuss your academic journey, key subjects, and achievements...\n\n[Why This Scholarship]\nExplain why you are a suitable candidate...\n\n[Career Goals]\nOutline your short-term and long-term goals...\n\n[Conclusion]\nSummarize why you deserve this opportunity...\n\nWord Count: 500-800 words recommended' },
    form: { name:'Sample_Application_Form_ScholarHub.txt', content:'SAMPLE SCHOLARSHIP APPLICATION FORM\n====================================\n\n1. Full Name: _______________\n2. Date of Birth: DD/MM/YYYY\n3. Gender: Male/Female/Other\n4. Category: General/OBC/SC/ST/EWS\n5. Email: _______________\n6. Phone: _______________\n7. Address: _______________\n8. Father\'s Name: _______________\n9. Annual Family Income: _______________\n10. Current Course: _______________\n11. College/University: _______________\n12. Year of Study: _______________\n13. Previous Marks: _______________\n14. Achievements: _______________\n15. Why do you deserve this scholarship? (200 words)\n_______________' },
    recommendation: { name:'Recommendation_Letter_Template.txt', content:'RECOMMENDATION LETTER TEMPLATE\n===============================\n\nDate: DD/MM/YYYY\n\nTo Whom It May Concern,\n\nI am writing to recommend [Student Name] for [Scholarship Name].\n\nI have known [Student] for [duration] as their [Professor/Mentor] at [Institution].\n\n[Academic Performance Paragraph]\nDescribe the student\'s academic achievements...\n\n[Character & Skills Paragraph]\nHighlight personal qualities, leadership, teamwork...\n\n[Conclusion]\nI strongly recommend [Student] for this scholarship.\n\nSincerely,\n[Your Name]\n[Designation]\n[Institution]\n[Contact]' }
  };
  const tmpl = templates[type]; if(!tmpl) return;
  const blob = new Blob([tmpl.content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = tmpl.name; a.click();
  URL.revokeObjectURL(url);
  showToast(`📥 ${tmpl.name} downloaded!`, 'success');
}

// ===== LOGIN / AUTH =====
function toggleAuthForm(type) {
  document.getElementById('loginForm').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = type === 'signup' ? 'block' : 'none';
}

function handleLogin() {
  const email = document.getElementById('loginEmail')?.value;
  const pass = document.getElementById('loginPassword')?.value;
  if(!email || !pass) { alert('Please fill in all fields.'); return; }
  const users = JSON.parse(localStorage.getItem('sh_users') || '[]');
  const user = users.find(u => u.email === email && u.password === pass);
  if(user) {
    localStorage.setItem('sh_user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials. Please sign up first.');
  }
}

function handleSignup() {
  const name = document.getElementById('signupName')?.value;
  const email = document.getElementById('signupEmail')?.value;
  const pass = document.getElementById('signupPassword')?.value;
  const field = document.getElementById('signupField')?.value;
  const category = document.getElementById('signupCategory')?.value;
  if(!name || !email || !pass) { alert('Please fill in all required fields.'); return; }
  const users = JSON.parse(localStorage.getItem('sh_users') || '[]');
  if(users.find(u => u.email === email)) { alert('Email already registered. Please login.'); return; }
  const user = { name, email, password: pass, field, category };
  users.push(user);
  localStorage.setItem('sh_users', JSON.stringify(users));
  localStorage.setItem('sh_user', JSON.stringify(user));
  window.location.href = 'dashboard.html';
}
