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
