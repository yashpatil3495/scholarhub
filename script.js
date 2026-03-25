/* ScholarHub — script.js */

// ===== SCHOLARSHIP DATA =====
const scholarships = [
  { id:1, name:"National Merit Scholarship", type:"gov", field:"general", eligibility:"Students with 85%+ in 12th", deadline:"2026-04-05", amount:"₹50,000/year", description:"Merit-based scholarship for high-performing students across all streams.", documents:["12th Marksheet","Income Certificate","Aadhaar Card","Bank Passbook","Passport Photo"], tips:"Fill in exact marks as per marksheet. Use official name matching Aadhaar.", link:"https://scholarships.gov.in", faq:[{q:"Who can apply?",a:"Any student with 85%+ in 12th from a recognized board."},{q:"Is there an income limit?",a:"Family income must be below ₹8 lakhs per annum."}], applyTime:"30 mins", difficulty:"easy", applyTips:"Keep all documents scanned beforehand.", minMarks:85, maxIncome:"8L", categories:["general","obc","sc","st","ews"] },
  { id:2, name:"Post-Matric SC/ST Scholarship", type:"gov", field:"general", eligibility:"SC/ST students in post-matric", deadline:"2026-04-15", amount:"Full tuition + ₹10,000 stipend", description:"Government scholarship for SC/ST students pursuing post-matric education.", documents:["Caste Certificate","Income Certificate","Admission Letter","Marksheets","Aadhaar","Bank Details"], tips:"Ensure caste certificate is from the correct authority.", link:"https://scholarships.gov.in", faq:[{q:"What courses are covered?",a:"All post-matric courses in recognized institutions."},{q:"Can I apply if studying in a private college?",a:"Yes, if the college is recognized/affiliated."}], applyTime:"45 mins", difficulty:"medium", applyTips:"Caste certificate must be recent.", minMarks:0, maxIncome:"3L", categories:["sc","st"] },
  { id:3, name:"Tata Scholarship for Engineering", type:"private", field:"engineering", eligibility:"Engineering students, family income < ₹4L", deadline:"2026-04-02", amount:"₹1,00,000/year", description:"Tata Trust scholarship supporting meritorious engineering students from low-income families.", documents:["Engineering Admission Proof","Income Certificate","12th Marksheet","Recommendation Letter","SOP"], tips:"Highlight engineering projects and career goals in SOP.", link:"https://www.tatatrusts.org", faq:[{q:"Which branches are eligible?",a:"All branches of B.Tech/B.E."},{q:"Is hostel fee covered?",a:"Yes, covers tuition and hostel fees."}], applyTime:"60 mins", difficulty:"hard", applyTips:"SOP is critical. Get it reviewed.", minMarks:70, maxIncome:"4L", categories:["general","obc","sc","st","ews"] },
  { id:4, name:"INSPIRE Scholarship (DST)", type:"gov", field:"science", eligibility:"Students in B.Sc/M.Sc with top 1% board", deadline:"2026-05-10", amount:"₹80,000/year", description:"DST INSPIRE scholarship for students pursuing basic and natural sciences.", documents:["Board Marksheet","University Admission","Aadhaar Card","Bank Account","Photograph"], tips:"Apply through the INSPIRE portal. Ensure board rank certificate is ready.", link:"https://online-inspire.gov.in", faq:[{q:"What subjects qualify?",a:"Physics, Chemistry, Mathematics, Biology."},{q:"Is M.Sc covered?",a:"Yes, extends to M.Sc."}], applyTime:"40 mins", difficulty:"medium", applyTips:"Board rank certificate is mandatory.", minMarks:90, maxIncome:"99L", categories:["general","obc","sc","st","ews"] },
  { id:5, name:"Reliance Foundation Scholarship", type:"private", field:"engineering", eligibility:"UG students in top engineering colleges", deadline:"2026-04-20", amount:"₹2,00,000/year", description:"Prestigious scholarship by Reliance Foundation for top engineering talent.", documents:["College ID","Marksheets","Income Proof","SOP","Resume","2 Recommendation Letters"], tips:"Focus on innovation and leadership in your SOP.", link:"https://www.reliancefoundation.org", faq:[{q:"Which colleges are eligible?",a:"Top NIRF-ranked engineering colleges."},{q:"Is there an interview?",a:"Yes, shortlisted candidates will be interviewed."}], applyTime:"90 mins", difficulty:"hard", applyTips:"Prepare for interview. Mention research work.", minMarks:80, maxIncome:"99L", categories:["general","obc","sc","st","ews"] },
  { id:6, name:"AICTE Pragati Scholarship (Girls)", type:"gov", field:"engineering", eligibility:"Girl students in AICTE-approved colleges", deadline:"2026-04-30", amount:"₹50,000/year", description:"AICTE scheme to support girl students in technical education.", documents:["Admission Letter","10th & 12th Marksheets","Income Certificate","Aadhaar Card","Bank Passbook"], tips:"Only one girl per family can avail. Apply early.", link:"https://www.aicte-pragati.gov.in", faq:[{q:"Is this only for engineering?",a:"Covers all AICTE-approved technical courses."},{q:"Income limit?",a:"Family income below ₹8 lakhs."}], applyTime:"35 mins", difficulty:"easy", applyTips:"Straightforward process. Keep documents ready.", minMarks:60, maxIncome:"8L", categories:["general","obc","sc","st","ews"] },
  { id:7, name:"Kotak Kanya Scholarship", type:"private", field:"general", eligibility:"Girl students from economically weaker sections", deadline:"2026-04-25", amount:"₹1,50,000/year", description:"Kotak Education Foundation scholarship empowering meritorious girls.", documents:["12th Marksheet","Income Proof","Aadhaar","College Admission Proof","Bank Details","Photograph"], tips:"Academic consistency is key. Maintain above 70%.", link:"https://www.kotakeducation.org", faq:[{q:"GPA requirement?",a:"Minimum 60% in 12th."},{q:"Professional courses?",a:"Yes — engineering, medical, law eligible."}], applyTime:"45 mins", difficulty:"medium", applyTips:"Maintain consistent grades throughout.", minMarks:60, maxIncome:"3L", categories:["general","obc","sc","st","ews"] },
  { id:8, name:"Central Sector Scholarship (CSS)", type:"gov", field:"general", eligibility:"Top 20 percentile in 12th board", deadline:"2026-04-10", amount:"₹20,000/year (UG), ₹36,000 (PG)", description:"MHRD scholarship for college students from non-wealthy families.", documents:["12th Marksheet with percentile","College Admission","Income Certificate","Aadhaar","Bank Details","Caste Cert (if applicable)"], tips:"Check your board's percentile cutoff. Apply on NSP.", link:"https://scholarships.gov.in", faq:[{q:"Income limit?",a:"Below ₹6 lakhs."},{q:"Renewable?",a:"Yes, annually based on progress."}], applyTime:"30 mins", difficulty:"easy", applyTips:"Apply through National Scholarship Portal.", minMarks:80, maxIncome:"6L", categories:["general","obc","sc","st","ews"] },
  { id:9, name:"Sitaram Jindal Foundation Scholarship", type:"private", field:"medical", eligibility:"Medical students (MBBS/BDS), income < ₹3L", deadline:"2026-05-01", amount:"₹30,000/year", description:"Foundation scholarship for deserving medical students.", documents:["Medical Admission Proof","Income Certificate","Marksheets","Aadhaar","Bank Account"], tips:"Attach NEET scorecard.", link:"https://www.sitaramjindalfoundation.org", faq:[{q:"AYUSH courses?",a:"Yes, BAMS and BHMS eligible."},{q:"PG students?",a:"Primarily for UG."}], applyTime:"40 mins", difficulty:"medium", applyTips:"NEET scorecard is important.", minMarks:60, maxIncome:"3L", categories:["general","obc","sc","st","ews"] },
  { id:10, name:"KVPY Fellowship", type:"gov", field:"science", eligibility:"Students pursuing basic sciences (11th to 1st year B.Sc)", deadline:"2026-05-15", amount:"₹5,000-7,000/month + contingency", description:"Prestigious fellowship by DST for aptitude in basic sciences.", documents:["Board Marksheet","KVPY Admit Card","Aadhaar","College ID","Bank Account"], tips:"Study NCERT thoroughly for aptitude test.", link:"https://kvpy.iisc.ernet.in", faq:[{q:"Is there an exam?",a:"Yes, national aptitude test + interview."},{q:"Duration?",a:"Through B.Sc, M.Sc, up to PhD."}], applyTime:"30 mins", difficulty:"hard", applyTips:"Aptitude test is competitive. Prepare well.", minMarks:75, maxIncome:"99L", categories:["general","obc","sc","st","ews"] },
  { id:11, name:"Begum Hazrat Mahal Scholarship", type:"gov", field:"general", eligibility:"Minority girl students (9th-12th)", deadline:"2026-04-08", amount:"₹5,000-6,000", description:"Scholarship for meritorious girls from minority communities.", documents:["School Certificate","Minority Certificate","Income Proof","Aadhaar","Bank Account","Photo"], tips:"Apply through NSP. Keep minority certificate ready.", link:"https://scholarships.gov.in", faq:[{q:"Which minorities?",a:"Muslims, Christians, Sikhs, Buddhists, Jains, Parsis."},{q:"Income limit?",a:"Below ₹2 lakhs."}], applyTime:"25 mins", difficulty:"easy", applyTips:"Simple process via NSP.", minMarks:50, maxIncome:"2L", categories:["general","obc"] },
  { id:12, name:"Wipro Earthian Scholarship", type:"private", field:"science", eligibility:"Top 3 teams in Wipro Earthian contest", deadline:"2026-06-01", amount:"₹5,00,000 grant + mentorship", description:"Sustainability-focused scholarship for innovative environmental projects.", documents:["Project Report","Team Details","School/College ID","Mentor Recommendation"], tips:"Focus on real-world sustainability. Include data.", link:"https://www.wipro.com/earthian", faq:[{q:"Individuals?",a:"No, team-based (3-5 members)."},{q:"School students?",a:"Yes, separate categories."}], applyTime:"120 mins", difficulty:"hard", applyTips:"Strong project report with impact metrics needed.", minMarks:0, maxIncome:"99L", categories:["general","obc","sc","st","ews"] }
];

// ===== I18N =====
const translations = { hi: { hero_badge:"आपकी स्कॉलरशिप यात्रा यहाँ से शुरू होती है", hero_title:"स्कॉलरशिप खोजें और जीतें", hero_desc:"सरकारी और निजी स्कॉलरशिप खोजें, डेडलाइन ट्रैक करें।", explore_btn:"स्कॉलरशिप खोजें", dash_btn:"मेरा डैशबोर्ड", stat_sch:"स्कॉलरशिप", stat_stu:"छात्रों की मदद", stat_suc:"सफलता दर" } };
let currentLang = localStorage.getItem('sh_lang') || 'en';
function setLanguage(lang) { currentLang = lang; localStorage.setItem('sh_lang', lang); const btn = document.getElementById('langToggle'); if(btn) btn.textContent = lang==='en'?'EN':'हि'; if(lang==='en'){location.reload();return;} document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if(translations[lang]&&translations[lang][k]) el.textContent = translations[lang][k]; }); }

// ===== JOURNEY STEPS =====
const journeySteps = [
  { id:'login', label:'Login', icon:'fa-sign-in-alt', href:'login.html' },
  { id:'profile', label:'Complete Profile', icon:'fa-user-edit', href:'login.html' },
  { id:'eligibility', label:'Check Eligibility', icon:'fa-check-circle', href:'scholarships.html' },
  { id:'recommendations', label:'Get Recommendations', icon:'fa-lightbulb', href:'dashboard.html' },
  { id:'apply', label:'Apply', icon:'fa-paper-plane', href:'scholarships.html' }
];

// ===== UTILITY =====
function daysUntil(d){return Math.ceil((new Date(d)-new Date())/86400000)}
function showToast(msg,type='info'){const c=document.getElementById('toastContainer');if(!c)return;const t=document.createElement('div');t.className=`toast ${type}`;t.innerHTML=`<i class="fas fa-${type==='success'?'check-circle':type==='warning'?'exclamation-triangle':type==='error'?'times-circle':'info-circle'}"></i> ${msg}`;c.appendChild(t);setTimeout(()=>t.remove(),4000)}
function getSaved(){return JSON.parse(localStorage.getItem('sh_saved')||'[]')}
function setSaved(a){localStorage.setItem('sh_saved',JSON.stringify(a))}
function toggleSave(id){let s=getSaved();if(s.includes(id)){s=s.filter(x=>x!==id);showToast('Removed from saved','warning')}else{s.push(id);showToast('Scholarship saved! ⭐','success')}setSaved(s);if(typeof renderScholarships==='function')renderScholarships();updateSaveButtons();if(typeof renderSavedTab==='function')renderSavedTab()}
function updateSaveButtons(){const s=getSaved();document.querySelectorAll('.save-btn').forEach(b=>{const id=parseInt(b.dataset.id);if(s.includes(id)){b.classList.add('saved');b.innerHTML='<i class="fas fa-star"></i>'}else{b.classList.remove('saved');b.innerHTML='<i class="far fa-star"></i>'}})}
function getUser(){return JSON.parse(localStorage.getItem('sh_user')||'null')}
function getProgress(){return JSON.parse(localStorage.getItem('sh_progress')||'{}')}
function setProgress(o){localStorage.setItem('sh_progress',JSON.stringify(o))}

// ===== JOURNEY SYSTEM =====
function getJourneyStep(){
  const u=getUser(); const s=getSaved(); const p=getProgress();
  if(!u) return 0;
  const hasProfile = u.income || u.marks;
  if(!hasProfile) return 1;
  if(s.length===0) return 2;
  const applied = Object.values(p).filter(v=>v!=='not-started').length;
  if(applied===0) return 3;
  return 4;
}
function renderJourney(containerId, textId){
  const container=document.getElementById(containerId); if(!container) return;
  const current=getJourneyStep();
  let html='';
  journeySteps.forEach((step,i)=>{
    const state = i<current?'completed':i===current?'active':'';
    html+=`<div class="journey-step ${state}"><div class="step-circle">${i<current?'<i class="fas fa-check"></i>':(i+1)}</div><div class="step-label">${step.label}</div></div>`;
    if(i<journeySteps.length-1) html+=`<div class="journey-connector ${i<current?'completed':''}"></div>`;
  });
  container.innerHTML=html;
  const textEl = document.getElementById(textId);
  if(textEl) textEl.innerHTML=`Step <span>${Math.min(current+1,5)} of 5</span> ${current>=5?'— All complete! 🎉':'— '+journeySteps[Math.min(current,4)].label}`;
  // Next btn
  const nextBtn=document.getElementById('journeyNextBtn');
  const nextLabel=document.getElementById('journeyNextLabel');
  if(nextBtn && current<5){nextBtn.href=journeySteps[current].href;if(nextLabel)nextLabel.textContent='Next: '+journeySteps[current].label}
  else if(nextBtn){nextBtn.href='dashboard.html';if(nextLabel)nextLabel.textContent='View Dashboard'}
}

// ===== RECOMMENDATION ENGINE =====
function getRecommendationReason(s){
  const u = getUser(); if(!u) return null;
  const reasons = [];
  if(u.field && (s.field===u.field||s.field==='general')) reasons.push(`matches your field (${u.field})`);
  if(u.category && s.categories && s.categories.includes(u.category)) reasons.push(`eligible for ${u.category.toUpperCase()} category`);
  if(u.income){
    const incomeMap = {below2:2,two2to4:4,'2to4':4,'4to6':6,'6to8':8,above8:99};
    const userInc = incomeMap[u.income]||99;
    const schInc = parseInt(s.maxIncome)||99;
    if(userInc<=schInc) reasons.push(`income within ₹${s.maxIncome} limit`);
  }
  if(u.marks && s.minMarks && parseInt(u.marks)>=s.minMarks) reasons.push(`marks (${u.marks}%) meet ${s.minMarks}% cutoff`);
  return reasons.length>0?'Recommended because: '+reasons.join(' · '):null;
}

// ===== PROFILE COMPLETION =====
function getProfileCompletion(){
  const u=getUser(); if(!u) return {percent:0,missing:['Create an account to get started']};
  let total=5, done=0, missing=[];
  if(u.name){done++}else{missing.push('Name')}
  if(u.email){done++}else{missing.push('Email')}
  if(u.field){done++}else{missing.push('Field of Study')}
  if(u.income){done++}else{missing.push('Income')}
  if(u.marks){done++}else{missing.push('12th Marks')}
  return {percent:Math.round((done/total)*100), missing};
}

// ===== NAVBAR & INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const ham=document.getElementById('hamburger');const navL=document.getElementById('navLinks');
  if(ham&&navL)ham.addEventListener('click',()=>navL.classList.toggle('open'));
  window.addEventListener('scroll',()=>{const n=document.getElementById('navbar');if(n)n.classList.toggle('scrolled',window.scrollY>20)});
  const langBtn=document.getElementById('langToggle');
  if(langBtn){langBtn.textContent=currentLang==='en'?'EN':'हि';langBtn.addEventListener('click',()=>setLanguage(currentLang==='en'?'hi':'en'))}
  if(currentLang!=='en')setLanguage(currentLang);
  updateUserUI();
  const notifBtn=document.getElementById('notifBtn');const notifPanel=document.getElementById('notifPanel');
  if(notifBtn&&notifPanel){notifBtn.addEventListener('click',e=>{e.stopPropagation();notifPanel.classList.toggle('open')});document.addEventListener('click',()=>notifPanel.classList.remove('open'));notifPanel.addEventListener('click',e=>e.stopPropagation())}
  renderNotifications();
  const page=getPageName();
  if(page==='index')initHome();
  else if(page==='scholarships')initScholarships();
  else if(page==='dashboard')initDashboard();
  else if(page==='assistant')initAssistant();
  else if(page==='documents')initDocuments();
  startRealTimeSimulation();
  initScrollAnimations();
  trackPageVisit(page);
});

function getPageName(){const p=window.location.pathname;if(p.includes('scholarships'))return'scholarships';if(p.includes('dashboard'))return'dashboard';if(p.includes('assistant'))return'assistant';if(p.includes('documents'))return'documents';if(p.includes('login'))return'login';return'index'}
function updateUserUI(){const u=getUser();const n=document.getElementById('userName');const a=document.getElementById('userAvatar');const nav=document.getElementById('navUser');if(u&&n){n.textContent=u.name.split(' ')[0];if(a)a.innerHTML=u.name.charAt(0).toUpperCase();if(nav){nav.href='#';nav.onclick=e=>{e.preventDefault();if(confirm('Logout?')){localStorage.removeItem('sh_user');location.reload()}}}}}
function trackPageVisit(page){localStorage.setItem('sh_lastPage',page);localStorage.setItem('sh_lastVisit',Date.now().toString())}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations(){
  const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
}

// ===== NOTIFICATIONS =====
function renderNotifications(){const list=document.getElementById('notifList');if(!list)return;const notifs=generateNotifications();const badge=document.getElementById('notifBadge');if(badge)badge.textContent=notifs.length;list.innerHTML=notifs.map(n=>`<div class="notif-item"><div class="ni-icon ${n.type}"><i class="fas fa-${n.icon}"></i></div><div class="ni-text"><h5>${n.title}</h5><p>${n.msg}</p></div></div>`).join('')}
function generateNotifications(){const notifs=[];scholarships.forEach(s=>{const d=daysUntil(s.deadline);if(d>=0&&d<=7)notifs.push({type:'deadline',icon:'clock',title:`⏰ ${s.name}`,msg:`Deadline in ${d} day${d!==1?'s':''}!`})});const u=getUser();if(!u)notifs.push({type:'info',icon:'user-plus',title:'Create account',msg:'Sign up for personalized recommendations!'});else{const pc=getProfileCompletion();if(pc.percent<100)notifs.push({type:'info',icon:'user-edit',title:'Complete profile',msg:`Profile ${pc.percent}% complete. Add: ${pc.missing.slice(0,2).join(', ')}`})}notifs.push({type:'success',icon:'bell',title:'New scholarship added',msg:'Wipro Earthian Scholarship is now available.'});return notifs}

// ===== REAL-TIME SIMULATION =====
function startRealTimeSimulation(){const el=document.getElementById('realtimeText');if(!el)return;const msgs=['🔴 Live: 42 students applied today · 3 new scholarships added','🟢 15 students saved scholarships in the last hour','🔵 New: AICTE Pragati Scholarship applications open!','🟡 Deadline alert: Tata Scholarship closes in 3 days','🟢 87 students matched with scholarships today','🔴 Trending: National Merit — 200+ applications today','🟣 500+ students applied this week'];let i=0;setInterval(()=>{i=(i+1)%msgs.length;el.style.opacity='0';setTimeout(()=>{el.textContent=msgs[i];el.style.opacity='1'},300)},5000);setTimeout(()=>showToast('🎓 New scholarship added: Wipro Earthian!','success'),8000);setTimeout(()=>showToast('📊 500+ students applied this week','info'),15000)}

// ===== HOME PAGE =====
function initHome(){renderLatest();renderUrgent();animateCounters();renderJourney('journeyStepper','journeyProgressText')}
function renderLatest(){const el=document.getElementById('latestList');if(!el)return;const latest=[...scholarships].sort((a,b)=>new Date(b.deadline)-new Date(a.deadline)).slice(0,4);el.innerHTML=latest.map(s=>`<div class="mini-card"><div class="mc-info"><h5>${s.name}</h5><p>${s.amount} · ${s.field}</p></div><span class="mc-badge ${s.type==='gov'?'gov':'pvt'}">${s.type==='gov'?'Gov':'Private'}</span></div>`).join('')}
function renderUrgent(){const el=document.getElementById('urgentList');if(!el)return;const urgent=scholarships.filter(s=>daysUntil(s.deadline)>=0&&daysUntil(s.deadline)<=15).sort((a,b)=>daysUntil(a.deadline)-daysUntil(b.deadline));el.innerHTML=urgent.length?urgent.slice(0,4).map(s=>{const d=daysUntil(s.deadline);return`<div class="mini-card"><div class="mc-info"><h5>${s.name}</h5><p>Deadline: ${s.deadline}</p></div><span class="mc-badge urgent">${d} day${d!==1?'s':''} left</span></div>`}).join(''):'<p style="padding:1rem;color:var(--text-light);text-align:center">No urgent deadlines right now!</p>'}
function animateCounters(){[{el:'statScholarships',val:150,s:'+'},{el:'statStudents',val:12,s:'K+'},{el:'statSuccess',val:89,s:'%'}].forEach(t=>{const el=document.getElementById(t.el);if(!el)return;let c=0;const step=t.val/40;const timer=setInterval(()=>{c+=step;if(c>=t.val){c=t.val;clearInterval(timer)}el.textContent=Math.round(c)+t.s},40)})}

// ===== SCHOLARSHIPS PAGE =====
function initScholarships(){
  renderScholarships();
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderScholarships()})});
  const search=document.getElementById('schSearch');if(search)search.addEventListener('input',()=>renderScholarships());
  const ff=document.getElementById('fieldFilter');const df=document.getElementById('deadlineFilter');
  if(ff)ff.addEventListener('change',()=>renderScholarships());
  if(df)df.addEventListener('change',()=>renderScholarships());
  // Deep link: auto-scroll
  const hash=window.location.hash;if(hash)setTimeout(()=>{const target=document.querySelector(hash);if(target)target.scrollIntoView({behavior:'smooth'})},500);
}

function renderScholarships(){
  const grid=document.getElementById('schGrid');if(!grid)return;
  const sv=(document.getElementById('schSearch')?.value||'').toLowerCase();
  const tf=document.querySelector('.filter-btn[data-filter].active')?.dataset.filter||'all';
  const ff=document.getElementById('fieldFilter')?.value||'all';
  const df=document.getElementById('deadlineFilter')?.value||'all';
  const saved=getSaved();
  let filtered=scholarships.filter(s=>{
    if(sv&&!s.name.toLowerCase().includes(sv)&&!s.field.toLowerCase().includes(sv)&&!s.eligibility.toLowerCase().includes(sv))return false;
    if(tf!=='all'&&s.type!==tf)return false;
    if(ff!=='all'&&s.field!==ff)return false;
    if(df!=='all'){const d=daysUntil(s.deadline);if(d<0||d>parseInt(df))return false}
    return true;
  });
  // Sort: urgent first
  filtered.sort((a,b)=>daysUntil(a.deadline)-daysUntil(b.deadline));
  const countEl=document.getElementById('resultsCount');
  if(countEl) countEl.textContent=`Showing ${filtered.length} of ${scholarships.length} scholarships`;
  grid.innerHTML=filtered.length?filtered.map(s=>{
    const d=daysUntil(s.deadline);const isUr=d>=0&&d<=7;const isSv=saved.includes(s.id);
    const reason=getRecommendationReason(s);
    return`<div class="sch-card ${isUr?'urgent-border':''} fade-in visible">
      <div class="sch-card-header"><span class="sch-type ${s.type}">${s.type==='gov'?'Government':'Private'}</span>
        <button class="btn-icon save-btn ${isSv?'saved':''}" data-id="${s.id}" onclick="toggleSave(${s.id})"><i class="${isSv?'fas':'far'} fa-star"></i></button></div>
      <div class="sch-card-body"><h3>${s.name}</h3>
        <div class="sch-meta">
          <span><i class="fas fa-user-check"></i> ${s.eligibility}</span>
          <span class="${isUr?'deadline-urgent':''}"><i class="fas fa-calendar"></i> ${s.deadline} ${isUr?'('+d+'d left!)':''}</span>
          <span><i class="fas fa-coins"></i> ${s.amount}</span>
          <span><i class="fas fa-book"></i> ${s.field}</span>
        </div>
        <div class="apply-guide">
          <span class="guide-badge time"><i class="fas fa-clock"></i> ${s.applyTime}</span>
          <span class="guide-badge difficulty-${s.difficulty}"><i class="fas fa-signal"></i> ${s.difficulty}</span>
        </div>
      </div>
      ${reason?`<div class="rec-reason"><i class="fas fa-magic"></i> ${reason}</div>`:''}
      <div class="sch-card-footer">
        <button class="btn btn-secondary btn-sm" onclick="openModal(${s.id})"><i class="fas fa-info-circle"></i> Details</button>
        <a href="${s.link}" target="_blank" class="btn btn-primary btn-sm"><i class="fas fa-external-link-alt"></i> Apply</a>
      </div></div>`}).join(''):'<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h4>No scholarships found</h4><p>Try adjusting your search or filters.</p></div>';
}

// ===== MODAL =====
function openModal(id){
  const s=scholarships.find(sc=>sc.id===id);if(!s)return;
  const overlay=document.getElementById('schModal');
  document.getElementById('modalTitle').textContent=s.name;
  document.getElementById('modalBody').innerHTML=`
    <div class="modal-section"><h4><i class="fas fa-info-circle"></i> Overview</h4>
      <p style="font-size:0.9rem;color:var(--text-light)">${s.description}</p>
      <div class="sch-meta" style="margin-top:0.8rem"><span><i class="fas fa-coins"></i> ${s.amount}</span><span><i class="fas fa-calendar"></i> Deadline: ${s.deadline}</span><span><i class="fas fa-book"></i> ${s.field}</span><span class="sch-type ${s.type}" style="font-size:0.75rem">${s.type==='gov'?'Government':'Private'}</span></div>
      <div class="apply-guide" style="margin-top:0.8rem"><span class="guide-badge time"><i class="fas fa-clock"></i> Time: ${s.applyTime}</span><span class="guide-badge difficulty-${s.difficulty}"><i class="fas fa-signal"></i> Difficulty: ${s.difficulty}</span></div>
      ${s.applyTips?`<p style="font-size:0.8rem;color:var(--info);margin-top:0.5rem"><i class="fas fa-info-circle"></i> ${s.applyTips}</p>`:''}
    </div>
    <div class="modal-section"><h4><i class="fas fa-project-diagram"></i> Application Flow</h4>
      <div class="flowchart">
        <div class="flow-step"><i class="fas fa-user-plus"></i>Register</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-edit"></i>Fill Form</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-upload"></i>Upload Docs</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-paper-plane"></i>Submit</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-search"></i>Verification</div><span class="flow-arrow">→</span>
        <div class="flow-step"><i class="fas fa-check-circle"></i>Approval</div>
      </div></div>
    <div class="modal-section"><h4><i class="fas fa-file-alt"></i> Required Documents</h4>
      ${s.documents.map(doc=>`<div class="checklist-item"><i class="fas fa-check-circle"></i> ${doc}</div>`).join('')}</div>
    <div class="modal-section"><h4><i class="fas fa-lightbulb"></i> Form Filling Tips</h4>
      <p style="font-size:0.85rem;color:var(--text-light);background:var(--bg);padding:1rem;border-radius:var(--radius-sm)">${s.tips}</p></div>
    <div class="modal-section"><h4><i class="fas fa-question-circle"></i> Smart FAQ</h4>
      ${s.faq.map(f=>`<div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('open')">${f.q} <i class="fas fa-chevron-down"></i></div><div class="faq-a">${f.a}</div></div>`).join('')}</div>
    <div style="margin-top:1.5rem;display:flex;gap:0.8rem;flex-wrap:wrap">
      <a href="${s.link}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Apply Now</a>
      <button class="btn btn-secondary" onclick="toggleSave(${s.id});closeModal()"><i class="fas fa-star"></i> Save</button>
      <a href="assistant.html?q=Tell me about ${encodeURIComponent(s.name)}" class="btn btn-outline" style="color:var(--primary);border-color:var(--primary)"><i class="fas fa-robot"></i> Ask Assistant</a>
      <a href="documents.html#checklist-section" class="btn btn-outline" style="color:var(--primary);border-color:var(--primary)"><i class="fas fa-file-alt"></i> View Docs</a>
    </div>`;
  overlay.classList.add('open');
}
function closeModal(){document.getElementById('schModal')?.classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// ===== DASHBOARD =====
function initDashboard(){
  updateDashStats();renderRecommendations();renderSavedTab();renderProgressTab();initCalendar();updateProbMeter();
  renderJourney('dashJourneyStepper','dashJourneyText');
  updateProfileCompletion();updateAnalytics();updateCompletionCircle();showContinueCard();
  document.querySelectorAll('.tab-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-content').forEach(c=>c.style.display='none');btn.classList.add('active');document.getElementById('tab-'+btn.dataset.tab).style.display='block'})});
}

function updateProfileCompletion(){
  const pc=getProfileCompletion();
  const bar=document.getElementById('profileBarFill');const pct=document.getElementById('profilePercent');const miss=document.getElementById('profileMissing');
  if(bar)setTimeout(()=>{bar.style.width=pc.percent+'%'},300);
  if(pct)pct.textContent=pc.percent+'%';
  if(miss)miss.textContent=pc.percent===100?'✅ Profile complete!':'Missing: '+pc.missing.join(', ');
}

function showContinueCard(){
  const card=document.getElementById('continueCard');if(!card)return;
  const lastPage=localStorage.getItem('sh_lastPage');
  if(lastPage&&lastPage!=='dashboard'&&lastPage!=='login'){
    card.style.display='flex';
    const text=document.getElementById('continueText');const link=document.getElementById('continueLink');
    const pageNames={index:'Home',scholarships:'Scholarships',assistant:'AI Assistant',documents:'Documents'};
    if(text)text.textContent=`You were last on ${pageNames[lastPage]||lastPage}. Continue where you left off!`;
    if(link)link.href=lastPage+'.html';
  }
}

function updateAnalytics(){
  const chart=document.getElementById('analyticsChart');if(!chart)return;
  const saved=getSaved().length;const progress=getProgress();
  const applied=Object.values(progress).filter(v=>v!=='not-started').length;
  const submitted=Object.values(progress).filter(v=>v==='submitted'||v==='approved').length;
  const data=[{label:'Total',val:scholarships.length,max:15},{label:'Saved',val:saved,max:15},{label:'Applied',val:applied,max:15},{label:'Done',val:submitted,max:15}];
  chart.innerHTML=data.map(d=>`<div class="bar-item"><div class="bar-fill" style="height:${Math.max((d.val/d.max)*100,5)}%"></div><div class="bar-label">${d.label}<br><strong>${d.val}</strong></div></div>`).join('');
}

function updateCompletionCircle(){
  const circle=document.getElementById('completionCircle');const val=document.getElementById('completionValue');const tip=document.getElementById('completionTip');
  if(!circle||!val)return;
  const progress=getProgress();const total=Math.max(getSaved().length,1);
  const done=Object.values(progress).filter(v=>v==='submitted'||v==='approved').length;
  const pct=Math.round((done/total)*100)||0;
  const deg=(pct/100)*360;
  circle.style.background=`conic-gradient(var(--accent) 0deg, var(--accent) ${deg}deg, var(--border) ${deg}deg)`;
  val.textContent=pct+'%';
  if(tip)tip.textContent=pct===0?'Start applying to build your rate!':pct<50?'Keep going! You\'re making progress.':'Great work! Almost there!';
}

function updateDashStats(){
  const saved=getSaved();const progress=getProgress();
  const applied=Object.values(progress).filter(v=>v!=='not-started').length;
  const upcoming=scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=30}).length;
  const e=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v};
  e('totalSch',scholarships.length);e('savedCount',saved.length);e('appliedCount',applied);e('upcomingDl',upcoming);
}

function renderRecommendations(){
  const grid=document.getElementById('recGrid');if(!grid)return;
  const user=getUser();let recs=[...scholarships];
  if(user&&user.field)recs.sort((a,b)=>(a.field===user.field?-1:1)-(b.field===user.field?-1:1));
  else recs.sort((a,b)=>daysUntil(a.deadline)-daysUntil(b.deadline));
  const saved=getSaved();
  grid.innerHTML=recs.slice(0,6).map(s=>{
    const d=daysUntil(s.deadline);const isUr=d>=0&&d<=7;const isSv=saved.includes(s.id);
    const reason=getRecommendationReason(s);
    return`<div class="sch-card fade-in visible">
      <div class="sch-card-header"><span class="sch-type ${s.type}">${s.type==='gov'?'Gov':'Private'}</span>
        <button class="btn-icon save-btn ${isSv?'saved':''}" data-id="${s.id}" onclick="toggleSave(${s.id})"><i class="${isSv?'fas':'far'} fa-star"></i></button></div>
      <div class="sch-card-body"><h3>${s.name}</h3>
        <div class="sch-meta"><span class="${isUr?'deadline-urgent':''}"><i class="fas fa-calendar"></i> ${s.deadline}</span><span><i class="fas fa-coins"></i> ${s.amount}</span></div></div>
      ${reason?`<div class="rec-reason"><i class="fas fa-magic"></i> ${reason}</div>`:''}
      <div class="sch-card-footer"><button class="btn btn-secondary btn-sm" onclick="window.location='scholarships.html'"><i class="fas fa-eye"></i> View</button></div></div>`}).join('');
}

function renderSavedTab(){
  const grid=document.getElementById('savedGrid');const noSaved=document.getElementById('noSaved');if(!grid)return;
  const saved=getSaved();const savedSch=scholarships.filter(s=>saved.includes(s.id));
  if(!savedSch.length){grid.innerHTML='';if(noSaved)noSaved.style.display='block';return}
  if(noSaved)noSaved.style.display='none';
  grid.innerHTML=savedSch.map(s=>`<div class="sch-card fade-in visible">
    <div class="sch-card-header"><span class="sch-type ${s.type}">${s.type==='gov'?'Gov':'Private'}</span>
      <button class="btn-icon save-btn saved" data-id="${s.id}" onclick="toggleSave(${s.id})"><i class="fas fa-star"></i></button></div>
    <div class="sch-card-body"><h3>${s.name}</h3>
      <div class="sch-meta"><span><i class="fas fa-calendar"></i> ${s.deadline}</span><span><i class="fas fa-coins"></i> ${s.amount}</span></div></div>
    <div class="sch-card-footer"><button class="btn btn-secondary btn-sm" onclick="window.location='scholarships.html'"><i class="fas fa-eye"></i> View</button></div></div>`).join('');
}

function renderProgressTab(){
  const list=document.getElementById('progressList');if(!list)return;
  const progress=getProgress();const statuses=['not-started','in-progress','submitted','approved'];
  const labels={'not-started':'Not Started','in-progress':'In Progress','submitted':'Submitted','approved':'Approved'};
  const tracked=getSaved().length?scholarships.filter(s=>getSaved().includes(s.id)):scholarships.slice(0,5);
  list.innerHTML=tracked.map(s=>{
    const st=progress[s.id]||'not-started';const ni=Math.min(statuses.indexOf(st)+1,statuses.length-1);const ns=statuses[ni];
    return`<div class="progress-item"><div class="progress-dot ${st}"></div>
      <div class="progress-info"><h5>${s.name}</h5><p>${s.deadline}</p></div>
      <span class="progress-status ${st}">${labels[st]}</span>
      ${st!=='approved'?`<button class="btn btn-sm btn-secondary" onclick="advanceProgress(${s.id},'${ns}')" style="margin-left:0.5rem;padding:4px 10px;font-size:0.7rem">Next →</button>`:''}</div>`}).join('');
}

function advanceProgress(id,status){const p=getProgress();p[id]=status;setProgress(p);renderProgressTab();updateDashStats();updateProbMeter();updateAnalytics();updateCompletionCircle();showToast(`Status updated to: ${status.replace('-',' ')}`,'success')}

// ===== CALENDAR =====
let calDate=new Date();
function initCalendar(){renderCalendar()}
function changeMonth(dir){calDate.setMonth(calDate.getMonth()+dir);renderCalendar()}
function renderCalendar(){
  const monthEl=document.getElementById('calMonth');const grid=document.getElementById('calGrid');if(!grid)return;
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const y=calDate.getFullYear(),m=calDate.getMonth();if(monthEl)monthEl.textContent=`${months[m]} ${y}`;
  const firstDay=new Date(y,m,1).getDay();const daysInMonth=new Date(y,m+1,0).getDate();const today=new Date();
  const deadlineDays=scholarships.filter(s=>{const dd=new Date(s.deadline);return dd.getMonth()===m&&dd.getFullYear()===y}).map(s=>new Date(s.deadline).getDate());
  let html=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div class="cal-day-name">${d}</div>`).join('');
  for(let i=0;i<firstDay;i++)html+='<div class="cal-day empty"></div>';
  for(let d=1;d<=daysInMonth;d++){
    const isToday=d===today.getDate()&&m===today.getMonth()&&y===today.getFullYear();
    const hasEvent=deadlineDays.includes(d);
    html+=`<div class="cal-day ${isToday?'today':''} ${hasEvent?'has-event':''}">${d}</div>`;
  }
  grid.innerHTML=html;
}

// ===== PROBABILITY METER =====
function updateProbMeter(){
  const circle=document.getElementById('probCircle');const valueEl=document.getElementById('probValue');const tipEl=document.getElementById('probTip');
  if(!circle||!valueEl)return;
  const user=getUser();const saved=getSaved();const progress=getProgress();
  let score=15;
  if(user)score+=20;
  if(user&&user.marks)score+=Math.min(parseInt(user.marks)/10,10);
  if(user&&user.income)score+=10;
  if(saved.length>0)score+=Math.min(saved.length*4,16);
  if(Object.keys(progress).length>0)score+=12;
  const submitted=Object.values(progress).filter(v=>v==='submitted'||v==='approved').length;
  score+=Math.min(submitted*5,17);
  score=Math.min(score,98);
  const deg=(score/100)*360;
  circle.style.background=`conic-gradient(var(--success) 0deg, var(--success) ${deg}deg, var(--border) ${deg}deg)`;
  valueEl.textContent=score+'%';
  if(tipEl){if(score<35)tipEl.textContent='💡 Create an account and save scholarships to improve!';else if(score<65)tipEl.textContent='📈 Great start! Apply to more scholarships to boost chances.';else tipEl.textContent='🌟 Excellent! You\'re on track for success!'}
}

// ===== CHAT ASSISTANT =====
function initAssistant(){
  // Deep linking: auto-question from URL
  const params=new URLSearchParams(window.location.search);
  const autoQ=params.get('q');
  if(autoQ){setTimeout(()=>{document.getElementById('chatInput').value=autoQ;sendChat()},600)}
}

const chatResponses=[
  {keywords:['eligible','eligibility','am i eligible','can i apply'],response:()=>{
    const u=getUser();if(!u)return'Please <a href="login.html" style="color:var(--accent)">login</a> first so I can check your eligibility!';
    let eligible=scholarships.filter(s=>{
      let match=true;
      if(u.marks&&s.minMarks&&parseInt(u.marks)<s.minMarks)match=false;
      if(u.category&&s.categories&&!s.categories.includes(u.category))match=false;
      return match&&(s.field===u.field||s.field==='general');
    });
    return eligible.length?`Based on your profile (${u.field}, ${u.marks||'N/A'}%, ${u.category?.toUpperCase()||'General'}), you're eligible for:\n\n${eligible.slice(0,5).map(s=>`✅ **${s.name}** — ${s.amount}`).join('\n')}\n\n👉 <a href="scholarships.html" style="color:var(--accent)">View all on Scholarships page</a>`:'I couldn\'t find matching scholarships. Try updating your profile with more details.'}},
  {keywords:['probability','chance','chances','success'],response:()=>{
    const u=getUser();const s=getSaved();const p=getProgress();let score=15;
    if(u)score+=20;if(u?.marks)score+=Math.min(parseInt(u.marks)/10,10);if(s.length>0)score+=Math.min(s.length*4,16);
    const sub=Object.values(p).filter(v=>v==='submitted'||v==='approved').length;score+=Math.min(sub*5,17);score=Math.min(score,98);
    return`📊 Your current success probability: **${score}%**\n\nTo improve:\n${!u?'• Create an account (+20%)':''}${s.length===0?'\n• Save some scholarships (+16%)':''}${sub===0?'\n• Submit applications (+17%)':''}\n\n👉 Check your <a href="dashboard.html" style="color:var(--accent)">Dashboard</a> for details!`}},
  {keywords:['scholarship','apply','which','what scholarships'],response:()=>{const u=getUser();let recs=u?.field?scholarships.filter(s=>s.field===u.field||s.field==='general'):scholarships.slice(0,5);return`Based on ${u?'your profile':'available data'}:\n\n${recs.slice(0,4).map(s=>`📌 **${s.name}** — ${s.amount} (Deadline: ${s.deadline})`).join('\n')}\n\n👉 <a href="scholarships.html" style="color:var(--accent)">Scholarships page</a> for full list!`}},
  {keywords:['document','documents','required','need','papers'],response:()=>'Common documents needed:\n\n📄 10th & 12th Marksheets\n📄 Income Certificate\n📄 Aadhaar Card\n📄 Caste Certificate (if applicable)\n📄 College Admission Letter\n📄 Bank Passbook\n📄 Passport Photos\n📄 SOP & Resume\n\n👉 <a href="documents.html" style="color:var(--accent)">Documents page</a> for detailed checklist!'},
  {keywords:['sop','statement of purpose','write','how to write'],response:()=>'✍️ SOP Tips:\n\n1. Keep it 500-800 words\n2. Start with a compelling personal story\n3. Highlight academic achievements\n4. Explain why you deserve it\n5. Mention career goals\n6. Proofread multiple times!\n\n📥 Download template from <a href="documents.html#downloads-section" style="color:var(--accent)">Documents page</a>!'},
  {keywords:['deadline','urgent','soon','closing'],response:()=>{const urgent=scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=15}).sort((a,b)=>daysUntil(a.deadline)-daysUntil(b.deadline));return urgent.length?`⏰ Upcoming deadlines:\n\n${urgent.map(s=>`🔴 **${s.name}** — ${daysUntil(s.deadline)} days left (${s.deadline})`).join('\n')}\n\nDon't miss out!`:'✅ No urgent deadlines in the next 15 days.'}},
  {keywords:['interview','tips','prepare'],response:()=>'🎤 Interview Tips:\n\n1. Research the organization\n2. Prepare elevator pitch (30s)\n3. Know your SOP inside-out\n4. Discuss career goals\n5. Dress formally\n6. Prepare 2-3 questions to ask\n7. Practice with a friend\n\n💪 You\'ve got this!'},
  {keywords:['save','bookmark','saved'],response:()=>{const s=getSaved();return s.length?`You have ${s.length} saved scholarship${s.length>1?'s':''}. View them on <a href="dashboard.html" style="color:var(--accent)">Dashboard</a>!`:'No saved scholarships yet. Browse <a href="scholarships.html" style="color:var(--accent)">Scholarships</a> and tap ⭐!'}},
  {keywords:['hello','hi','hey','help','start'],response:()=>'👋 Hello! I can help with:\n\n🎓 Finding scholarships\n📄 Document requirements\n✍️ SOP writing tips\n⏰ Deadline alerts\n🎤 Interview prep\n📊 Success probability\n✅ Eligibility check\n\nJust ask away!'},
  {keywords:['income','certificate','proof'],response:()=>'📄 Income Certificate Guide:\n\n1. Visit Tehsildar/SDM office\n2. Need: Aadhaar, ration card, salary slip\n3. Processing: 7-15 days\n4. Can apply online via state e-district portal\n5. Valid for 1 year\n\n💡 Apply early!'},
  {keywords:['tell me about','details about','info about'],response:()=>{const msg=document.getElementById('chatInput')?.value||'';const found=scholarships.find(s=>msg.toLowerCase().includes(s.name.toLowerCase()));if(found)return`📌 **${found.name}**\n\n${found.description}\n\n💰 Amount: ${found.amount}\n📅 Deadline: ${found.deadline}\n📋 Field: ${found.field}\n⏱ Apply Time: ${found.applyTime}\n📊 Difficulty: ${found.difficulty}\n\n👉 <a href="scholarships.html" style="color:var(--accent)">View details</a>`;return'Please specify a scholarship name. Try "Tell me about National Merit Scholarship".'}}
];

function sendChat(){
  const input=document.getElementById('chatInput');const msg=input.value.trim();if(!msg)return;
  addChatMsg(msg,'user');input.value='';
  // Show typing indicator
  const container=document.getElementById('chatMessages');
  const typing=document.createElement('div');typing.className='chat-msg bot';typing.id='typingIndicator';
  typing.innerHTML='<div class="msg-avatar"><i class="fas fa-robot"></i></div><div class="msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
  container.appendChild(typing);container.scrollTop=container.scrollHeight;
  setTimeout(()=>{typing.remove();const response=getChatResponse(msg);addChatMsg(response,'bot')},1000);
}
function sendSuggestion(btn){document.getElementById('chatInput').value=btn.textContent;sendChat()}
function addChatMsg(text,sender){
  const container=document.getElementById('chatMessages');const div=document.createElement('div');
  div.className=`chat-msg ${sender}`;const icon=sender==='bot'?'fa-robot':'fa-user';
  div.innerHTML=`<div class="msg-avatar"><i class="fas ${icon}"></i></div><div class="msg-bubble">${text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>`;
  container.appendChild(div);container.scrollTop=container.scrollHeight;
}
function getChatResponse(msg){const lower=msg.toLowerCase();for(const r of chatResponses){if(r.keywords.some(k=>lower.includes(k)))return typeof r.response==='function'?r.response():r.response}return"🤔 I'm not sure about that. Try asking about:\n\n• Available scholarships\n• Required documents\n• Deadlines & eligibility\n• SOP writing tips\n• Interview preparation\n• Success probability\n\nOr visit <a href='scholarships.html' style='color:var(--accent)'>Scholarships page</a>!"}

// ===== DOCUMENTS PAGE =====
function initDocuments(){
  // Deep link: auto-scroll to section
  const hash=window.location.hash;
  if(hash)setTimeout(()=>{const target=document.querySelector(hash);if(target)target.scrollIntoView({behavior:'smooth'})},400);
}
function toggleCheck(icon){
  if(icon.classList.contains('fa-square')){icon.classList.remove('far','fa-square');icon.classList.add('fas','fa-check-square');icon.style.color='var(--success)'}
  else{icon.classList.remove('fas','fa-check-square');icon.classList.add('far','fa-square');icon.style.color='var(--primary)'}
}
function downloadTemplate(type){
  const templates={
    resume:{name:'Resume_Template_ScholarHub.txt',content:'RESUME TEMPLATE\n================\n\nFULL NAME\nEmail: your@email.com | Phone: +91-XXXXX-XXXXX\nLinkedIn: linkedin.com/in/yourname\n\n--- EDUCATION ---\nDegree | University | Year | CGPA/Percentage\n\n--- SKILLS ---\nTechnical: ...\nSoft Skills: ...\n\n--- PROJECTS ---\n1. Project Name — Description\n\n--- ACHIEVEMENTS ---\n- Achievement 1\n\n--- EXTRACURRICULAR ---\n- Activity 1'},
    sop:{name:'SOP_Template_ScholarHub.txt',content:'STATEMENT OF PURPOSE\n====================\n\n[Opening Paragraph]\nBegin with a compelling personal story or motivation...\n\n[Academic Background]\nDiscuss your academic journey...\n\n[Why This Scholarship]\nExplain why you are a suitable candidate...\n\n[Career Goals]\nOutline your short-term and long-term goals...\n\n[Conclusion]\nSummarize why you deserve this opportunity...\n\nWord Count: 500-800 words'},
    form:{name:'Sample_Application_Form.txt',content:'SAMPLE SCHOLARSHIP APPLICATION FORM\n====================================\n\n1. Full Name: _______________\n2. Date of Birth: DD/MM/YYYY\n3. Gender: Male/Female/Other\n4. Category: General/OBC/SC/ST/EWS\n5. Email: _______________\n6. Phone: _______________\n7. Address: _______________\n8. Father\'s Name: _______________\n9. Annual Family Income: _______________\n10. Current Course: _______________\n11. College/University: _______________\n12. Year of Study: _______________\n13. Previous Marks: _______________\n14. Achievements: _______________\n15. Why do you deserve this? (200 words)'},
    recommendation:{name:'Recommendation_Letter_Template.txt',content:'RECOMMENDATION LETTER TEMPLATE\n===============================\n\nDate: DD/MM/YYYY\n\nTo Whom It May Concern,\n\nI recommend [Student Name] for [Scholarship Name].\n\nI have known [Student] for [duration] as their [Professor] at [Institution].\n\n[Academic Performance]\n...\n\n[Character & Skills]\n...\n\nSincerely,\n[Your Name]\n[Designation]\n[Institution]'}
  };
  const tmpl=templates[type];if(!tmpl)return;
  const blob=new Blob([tmpl.content],{type:'text/plain'});const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=tmpl.name;a.click();URL.revokeObjectURL(url);
  showToast(`📥 ${tmpl.name} downloaded!`,'success');
}

// ===== LOGIN / AUTH =====
function toggleAuthForm(type){
  document.getElementById('loginForm').style.display=type==='login'?'block':'none';
  document.getElementById('signupForm').style.display=type==='signup'?'block':'none';
}
function clearErrors(){document.querySelectorAll('.form-group').forEach(g=>g.classList.remove('error'))}
function showFieldError(groupId){const g=document.getElementById(groupId);if(g)g.classList.add('error')}

function handleLogin(){
  clearErrors();
  const email=document.getElementById('loginEmail')?.value;
  const pass=document.getElementById('loginPassword')?.value;
  let valid=true;
  if(!email||!email.includes('@')){showFieldError('loginEmailGroup');valid=false}
  if(!pass){showFieldError('loginPassGroup');valid=false}
  if(!valid)return;
  const users=JSON.parse(localStorage.getItem('sh_users')||'[]');
  const user=users.find(u=>u.email===email&&u.password===pass);
  if(user){localStorage.setItem('sh_user',JSON.stringify(user));showToast('Welcome back! 🎉','success');setTimeout(()=>window.location.href='dashboard.html',500)}
  else{showToast('Invalid credentials. Please sign up first.','error')}
}

function handleSignup(){
  clearErrors();
  const name=document.getElementById('signupName')?.value;
  const email=document.getElementById('signupEmail')?.value;
  const pass=document.getElementById('signupPassword')?.value;
  const field=document.getElementById('signupField')?.value;
  const category=document.getElementById('signupCategory')?.value;
  const income=document.getElementById('signupIncome')?.value;
  const marks=document.getElementById('signupMarks')?.value;
  let valid=true;
  if(!name){showFieldError('signupNameGroup');valid=false}
  if(!email||!email.includes('@')){showFieldError('signupEmailGroup');valid=false}
  if(!pass||pass.length<6){showFieldError('signupPassGroup');valid=false}
  if(!valid)return;
  const users=JSON.parse(localStorage.getItem('sh_users')||'[]');
  if(users.find(u=>u.email===email)){showToast('Email already registered. Please login.','error');return}
  const user={name,email,password:pass,field,category,income,marks};
  users.push(user);localStorage.setItem('sh_users',JSON.stringify(users));localStorage.setItem('sh_user',JSON.stringify(user));
  showToast('Account created! 🎉','success');setTimeout(()=>window.location.href='dashboard.html',500);
}
