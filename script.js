/* ScholarHub — Script */

// ── DATA ───────────────────────────────────
const scholarships = [
  {id:1,name:"National Scholarship Portal (NSP)",type:"government",field:"general",eligibility:"Indian students Class 1–Ph.D., family income < ₹2.5 lakh/yr.",deadline:"2026-04-15",link:"https://scholarships.gov.in",minMarks:50,maxIncome:250000,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Register on NSP"},{icon:"📄",label:"Fill Application"},{icon:"📎",label:"Upload Documents"},{icon:"✅",label:"Institute Verifies"},{icon:"🏛️",label:"Dept. Approval"},{icon:"💰",label:"Disbursement"}],documents:["Aadhaar Card","Income Certificate","Previous Year Mark Sheet","Bank Passbook","Passport Photo","Caste Certificate (if applicable)"]},
  {id:2,name:"INSPIRE Scholarship (DST)",type:"government",field:"science",eligibility:"Top 1% in Class 12 boards, pursuing BSc/BS/Int.MSc in natural & basic sciences.",deadline:"2026-05-31",link:"https://online-inspire.gov.in",minMarks:90,maxIncome:Infinity,categories:["general","obc","sc","st","ews"],steps:[{icon:"🏅",label:"Check Eligibility"},{icon:"📝",label:"Online Registration"},{icon:"📄",label:"Fill Details"},{icon:"📎",label:"Upload Documents"},{icon:"✅",label:"Submit & Verify"},{icon:"💰",label:"Receive ₹80,000/yr"}],documents:["Class 12 Mark Sheet","Board Merit Proof","College Admission Letter","Aadhaar Card","Bank Details","Passport Photo"]},
  {id:3,name:"Pragati Scholarship (AICTE)",type:"government",field:"science",eligibility:"Girl students in AICTE-approved colleges, family income ≤ ₹8 lakh/yr.",deadline:"2026-03-30",link:"https://www.aicte-india.org/schemes/students-development-schemes/pragati-scholarship",minMarks:50,maxIncome:800000,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Apply on AICTE Portal"},{icon:"📄",label:"Fill Form"},{icon:"📎",label:"Upload Docs"},{icon:"🏫",label:"Institute Approval"},{icon:"✅",label:"AICTE Verification"},{icon:"💰",label:"₹50,000/yr Grant"}],documents:["10th & 12th Mark Sheet","Income Certificate","Admission Letter","Aadhaar Card","Bank Details","Passport Photo"]},
  {id:4,name:"Tata Trusts Scholarship",type:"private",field:"general",eligibility:"Students from low-income families pursuing graduation or post-graduation.",deadline:"2026-06-15",link:"https://www.tatatrusts.org",minMarks:55,maxIncome:400000,categories:["general","obc","sc","st","ews"],steps:[{icon:"🔍",label:"Check Eligibility"},{icon:"📝",label:"Register Online"},{icon:"📄",label:"Submit Application"},{icon:"📎",label:"Upload Documents"},{icon:"📞",label:"Interview"},{icon:"💰",label:"Scholarship Awarded"}],documents:["Income Certificate","Academic Transcripts","Admission Proof","ID Proof","Bank Account Details","Passport Photo"]},
  {id:5,name:"Reliance Foundation Scholarship",type:"private",field:"science",eligibility:"UG students in STEM, humanities, or commerce with strong academics.",deadline:"2026-04-10",link:"https://www.reliancefoundation.org",minMarks:60,maxIncome:Infinity,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Online Application"},{icon:"📄",label:"Academic Details"},{icon:"🎯",label:"Aptitude Test"},{icon:"📞",label:"Personal Interview"},{icon:"✅",label:"Selection"},{icon:"💰",label:"Up to ₹2 Lakh/yr"}],documents:["10th & 12th Mark Sheet","College ID","Income Proof","Aadhaar Card","Bank Details","Recommendation Letter"]},
  {id:6,name:"Post-Matric Scholarship (MoSJE)",type:"government",field:"general",eligibility:"SC/ST/OBC students post-matric, family income ≤ ₹2.5 lakh/yr.",deadline:"2026-04-01",link:"https://scholarships.gov.in",minMarks:40,maxIncome:250000,categories:["obc","sc","st"],steps:[{icon:"📝",label:"Register on NSP"},{icon:"📄",label:"Fill Application"},{icon:"📎",label:"Upload Documents"},{icon:"🏫",label:"Institute Verifies"},{icon:"🏛️",label:"State Review"},{icon:"💰",label:"Fee Reimbursement"}],documents:["Caste Certificate","Income Certificate","Last Year Mark Sheet","Fee Receipt","Bank Details","Passport Photo"]},
  {id:7,name:"Sitaram Jindal Foundation Scholarship",type:"private",field:"general",eligibility:"Meritorious students with financial need, Class 11 onwards.",deadline:"2026-07-31",link:"https://www.sitaramjindalfoundation.org",minMarks:65,maxIncome:500000,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Download Form"},{icon:"📄",label:"Fill & Attach Docs"},{icon:"📮",label:"Post Application"},{icon:"🔍",label:"Foundation Reviews"},{icon:"✅",label:"Selection"},{icon:"💰",label:"Monthly Stipend"}],documents:["Academic Records","Income Certificate","ID Proof","Bank Details","Passport Photo","Recommendation from Institute"]},
  {id:8,name:"KVPY Fellowship (IISc)",type:"government",field:"science",eligibility:"Class 11/12 or 1st yr UG in basic sciences with strong aptitude.",deadline:"2026-08-20",link:"https://kvpy.iisc.ac.in",minMarks:75,maxIncome:Infinity,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Online Registration"},{icon:"🎯",label:"Aptitude Test"},{icon:"📞",label:"Interview"},{icon:"✅",label:"Merit List"},{icon:"🎓",label:"Fellowship"},{icon:"💰",label:"₹5,000–7,000/mo"}],documents:["Class 10 & 12 Mark Sheets","School ID","Aadhaar Card","Passport Photo","Bank Details"]},
  {id:9,name:"Wipro Education Fellowship",type:"private",field:"general",eligibility:"Engineering graduates interested in education leadership; 2-yr program.",deadline:"2026-03-27",link:"https://www.wipro.com",minMarks:60,maxIncome:Infinity,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Apply Online"},{icon:"📄",label:"Submit Resume & SOP"},{icon:"🎯",label:"Assessment Round"},{icon:"📞",label:"Panel Interview"},{icon:"✅",label:"Offer"},{icon:"🎓",label:"Join Fellowship"}],documents:["Degree Certificate","Resume/CV","Statement of Purpose","ID Proof","References","Passport Photo"]},
  {id:10,name:"HDFC Vidyanidhi Scholarship",type:"private",field:"commerce",eligibility:"Students in Class 1–postgrad, family income < ₹2.5 lakh/yr, merit-based.",deadline:"2026-05-10",link:"https://www.hdfcbank.com",minMarks:55,maxIncome:250000,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Register"},{icon:"📄",label:"Fill Form"},{icon:"📎",label:"Upload Docs"},{icon:"🔍",label:"HDFC Reviews"},{icon:"✅",label:"Approval"},{icon:"💰",label:"₹15,000–75,000"}],documents:["Academic Mark Sheets","Income Certificate","ID Proof","Bank Details","Passport Photo","Fee Receipt"]},
  {id:11,name:"Maulana Azad National Fellowship",type:"government",field:"general",eligibility:"Minority community students for M.Phil/Ph.D., NET-JRF qualified.",deadline:"2026-06-30",link:"https://scholarships.gov.in",minMarks:55,maxIncome:Infinity,categories:["general","obc"],steps:[{icon:"📝",label:"Apply on NSP"},{icon:"📄",label:"Fill Details"},{icon:"📎",label:"Upload NET Certificate"},{icon:"🏫",label:"University Verifies"},{icon:"🏛️",label:"UGC Approval"},{icon:"💰",label:"₹31,000/mo Fellowship"}],documents:["NET-JRF Certificate","Minority Certificate","University Admission","Aadhaar Card","Bank Details","Passport Photo"]},
  {id:12,name:"L&T Build India Scholarship",type:"private",field:"science",eligibility:"Engineering students (B.Tech/BE) with 60%+ in first year; financial need.",deadline:"2026-04-25",link:"https://www.lntecc.com",minMarks:60,maxIncome:600000,categories:["general","obc","sc","st","ews"],steps:[{icon:"📝",label:"Online Application"},{icon:"📄",label:"Academic Proof"},{icon:"📎",label:"Income Docs"},{icon:"📞",label:"Interview"},{icon:"✅",label:"Selection"},{icon:"💰",label:"₹Tuition Paid"}],documents:["1st Year Mark Sheet","Income Certificate","Admission Letter","Aadhaar Card","Bank Details","Passport Photo"]}
];

// ── HELPERS ────────────────────────────────
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const TODAY=new Date(); TODAY.setHours(0,0,0,0);
const daysUntil=d=>{const x=new Date(d);x.setHours(0,0,0,0);return Math.ceil((x-TODAY)/864e5)};
const fmtDate=d=>new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
const STORE=k=>{try{return JSON.parse(localStorage.getItem(k))||[]}catch{return[]}};
const SAVE=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const SGET=k=>{try{return JSON.parse(localStorage.getItem(k))}catch{return null}};

// ── STATE ──────────────────────────────────
let activeFilter="all", fieldFilter="all";
let savedIds=STORE("sh_saved"), trackerData=STORE("sh_tracker");
let currentUser=SGET("sh_user"), searchHistory=STORE("sh_search_history"), comments=STORE("sh_comments");

const grid=$("#cardsGrid"), searchIn=$("#searchInput"), noRes=$("#noResults");
const modalOv=$("#modalOverlay"), mTitle=$("#mTitle"), mType=$("#mType");
const mElig=$("#mElig"), mDeadline=$("#mDeadline"), mFlow=$("#mFlow");
const mDocs=$("#mDocs"), mApply=$("#mApply"), mBookmark=$("#mBookmark"), mProgress=$("#mProgress");
const navbar=$("#navbar"), hamburger=$("#hamburger"), navLinks=$("#navLinks");

// ═══════════ AUTH SYSTEM ═══════════
function initAuth(){
  const overlay=$("#authOverlay"), loginForm=$("#loginForm"), signupForm=$("#signupForm");
  const switchBtn=$("#authSwitch"), closeBtn=$("#authClose"), navLoginBtn=$("#navLogin");
  let isLogin=true;
  navLoginBtn.addEventListener("click",()=>overlay.classList.add("active"));
  closeBtn.addEventListener("click",()=>overlay.classList.remove("active"));
  overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.classList.remove("active")});
  switchBtn.addEventListener("click",()=>{
    isLogin=!isLogin;
    loginForm.style.display=isLogin?"block":"none";
    signupForm.style.display=isLogin?"none":"block";
    $("#authTitle").textContent=isLogin?"Welcome Back":"Create Account";
    $("#authSubtitle").textContent=isLogin?"Sign in to your ScholarHub account":"Join ScholarHub and get personalized recommendations";
    $("#authSwitchText").textContent=isLogin?"Don't have an account?":"Already have an account?";
    switchBtn.textContent=isLogin?"Sign Up":"Sign In";
  });
  loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const users=STORE("sh_users"), email=$("#loginEmail").value, pass=$("#loginPassword").value;
    const user=users.find(u=>u.email===email&&u.password===pass);
    if(user){currentUser=user;SAVE("sh_user",user);updateAuthUI();overlay.classList.remove("active");toast("Welcome back, "+user.name+"! 🎉");renderRecommendations()}
    else toast("Invalid email or password","error");
  });
  signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const users=STORE("sh_users"), name=$("#signupName").value, email=$("#signupEmail").value, pass=$("#signupPassword").value;
    const course=$("#signupCourse").value||"", cat=$("#signupCategory").value, income=+$("#signupIncome").value||0;
    if(users.find(u=>u.email===email)){toast("Email already registered","error");return}
    const user={name,email,password:pass,course,category:cat,income};
    users.push(user);SAVE("sh_users",users);currentUser=user;SAVE("sh_user",user);
    updateAuthUI();overlay.classList.remove("active");toast("Account created! Welcome, "+name+" 🎉");renderRecommendations();
  });
  $("#navLogout").addEventListener("click",()=>{currentUser=null;localStorage.removeItem("sh_user");updateAuthUI();toast("Logged out successfully");renderRecommendations()});
  updateAuthUI();
}
function updateAuthUI(){
  const navLogin=$("#navLogin"), navUser=$("#navUser"), navAvatar=$("#navAvatar"), commentAvatar=$("#commentAvatar");
  if(currentUser){
    navLogin.style.display="none";navUser.style.display="flex";
    const initials=currentUser.name.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2);
    navAvatar.textContent=initials; commentAvatar.textContent=initials;
    if($("#dashCourse")&&currentUser.course)$("#dashCourse").value=currentUser.course;
    if($("#dashIncome")&&currentUser.income)$("#dashIncome").value=currentUser.income;
    if($("#dashCategory")&&currentUser.category)$("#dashCategory").value=currentUser.category;
  } else {navLogin.style.display="inline-flex";navUser.style.display="none";commentAvatar.textContent="?";}
}

// ═══════════ SMART RECOMMENDATIONS ═══════════
function getRecommendationScore(s){
  let score=0;
  if(currentUser){
    if(s.categories.includes(currentUser.category)) score+=25;
    if(currentUser.income&&currentUser.income<=s.maxIncome) score+=25;
    if(currentUser.course){
      const cl=currentUser.course.toLowerCase();
      if(s.field==="general") score+=10;
      else if((cl.includes("tech")||cl.includes("eng")||cl.includes("bsc"))&&s.field==="science") score+=20;
      else if((cl.includes("bcom")||cl.includes("mba"))&&s.field==="commerce") score+=20;
      else if((cl.includes("mbbs")||cl.includes("med"))&&s.field==="medical") score+=20;
      else if((cl.includes("ba ")||cl.includes("arts"))&&s.field==="arts") score+=20;
    }
  }
  if(savedIds.includes(s.id)) score+=15;
  if(searchHistory.some(q=>s.name.toLowerCase().includes(q)||s.eligibility.toLowerCase().includes(q))) score+=10;
  if(daysUntil(s.deadline)>=0&&daysUntil(s.deadline)<=30) score+=10;
  if(daysUntil(s.deadline)<0) score-=50;
  return score;
}
function renderRecommendations(){
  const recGrid=$("#recGrid"), recEmpty=$("#recEmpty");
  const scored=scholarships.filter(s=>daysUntil(s.deadline)>=0).map(s=>({...s,score:getRecommendationScore(s)})).sort((a,b)=>b.score-a.score).slice(0,4);
  if(!currentUser||scored.every(s=>s.score<10)){recGrid.innerHTML="";if(recEmpty)recGrid.appendChild(recEmpty);return}
  recGrid.innerHTML=scored.map(s=>{
    const lvl=s.score>=50?"🔥 High Match":s.score>=30?"✨ Good Match":"💡 Suggested";
    const reasons=[];
    if(currentUser.category&&s.categories.includes(currentUser.category)) reasons.push("Matches your category");
    if(currentUser.income&&currentUser.income<=s.maxIncome) reasons.push("Within income range");
    if(daysUntil(s.deadline)<=14) reasons.push("Deadline soon!");
    return `<div class="rec-card" onclick="openModal(${s.id})"><span class="rec-match">${lvl}</span><h4>${s.name}</h4><p>${s.eligibility}</p><span class="rec-reason">${reasons.join(" • ")||"Based on your profile"}</span></div>`;
  }).join("");
  observe();
}

// ═══════════ RENDER CARDS ═══════════
function render(){
  const q=searchIn.value.toLowerCase().trim();
  if(q&&!searchHistory.includes(q)){searchHistory.push(q);if(searchHistory.length>20)searchHistory.shift();SAVE("sh_search_history",searchHistory)}
  const list=scholarships.filter(s=>{
    const matchQ=s.name.toLowerCase().includes(q)||s.eligibility.toLowerCase().includes(q);
    if(!matchQ) return false;
    if(activeFilter==="government") return s.type==="government";
    if(activeFilter==="private") return s.type==="private";
    if(activeFilter==="upcoming") return daysUntil(s.deadline)>=0;
    if(activeFilter==="expired") return daysUntil(s.deadline)<0;
    if(activeFilter==="saved") return savedIds.includes(s.id);
    return true;
  }).filter(s=>fieldFilter==="all"||s.field===fieldFilter);
  grid.innerHTML=""; noRes.style.display=list.length?"none":"block";
  list.forEach((s,i)=>{
    const days=daysUntil(s.deadline), urg=days>=0&&days<=7, exp=days<0, saved=savedIds.includes(s.id);
    const c=document.createElement("div"); c.className=`s-card ${s.type} ${urg?"urgent":""}`;
    c.style.animationDelay=`${i*.06}s`;
    c.innerHTML=`<span class="c-type ${s.type}">${s.type}</span><span class="c-field">${fieldLabel(s.field)}</span><h3 class="c-title">${s.name}</h3><p class="c-elig">${s.eligibility}</p><div class="c-foot"><span class="c-dead ${urg||exp?"urgent-text":""}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${exp?"Expired":urg?days+"d left!":fmtDate(s.deadline)}</span><div class="c-actions"><button class="btn-save ${saved?"saved":""}" onclick="toggleSave(${s.id})" title="${saved?"Remove":"Save"}">${saved?"★":"☆"}</button><button class="btn-det" onclick="openModal(${s.id})">Details</button><a href="${s.link}" target="_blank" rel="noopener" class="btn-apl">Apply</a></div></div>`;
    grid.appendChild(c);
  });
  observe();
}
function fieldLabel(f){return{science:"Science & Tech",arts:"Arts & Humanities",commerce:"Commerce",medical:"Medical",general:"All Streams"}[f]||f}

// ═══════════ BOOKMARK ═══════════
function toggleSave(id){
  if(savedIds.includes(id)){savedIds=savedIds.filter(i=>i!==id);toast("Bookmark removed")}
  else{savedIds.push(id);toast("Scholarship saved ⭐");if(!trackerData.find(t=>t.id===id)){trackerData.push({id,status:"not_started"});SAVE("sh_tracker",trackerData)}}
  SAVE("sh_saved",savedIds);render();updateAnalytics();renderTracker();renderRecommendations();
}

// ═══════════ SUCCESS PROBABILITY ═══════════
function calcSuccess(s,marks,income,cat){
  let score=0,max=100;
  if(marks>=s.minMarks) score+=Math.min(40,((marks-s.minMarks)/(100-s.minMarks))*40);
  if(s.maxIncome!==Infinity&&income<=s.maxIncome) score+=30-(income/s.maxIncome)*15; else if(s.maxIncome===Infinity) score+=20;
  if(s.categories.includes(cat)){score+=15;if(["sc","st","ews"].includes(cat)) score+=5}
  if(daysUntil(s.deadline)>30) score+=10; else if(daysUntil(s.deadline)>7) score+=5;
  return Math.min(Math.round(score),95);
}
function getSuccessLabel(pct){return pct>=70?{text:"High Chance 🎯",cls:"high"}:pct>=40?{text:"Medium Chance ⚡",cls:"medium"}:{text:"Low Chance 📉",cls:"low"}}

// ═══════════ DYNAMIC FAQ ═══════════
function generateFAQs(s){
  const faqs=[{q:"Who can apply for "+s.name+"?",a:s.eligibility},{q:"What documents are needed?",a:"Required: "+s.documents.join(", ")+"."},{q:"What is the deadline?",a:daysUntil(s.deadline)<0?"This scholarship has expired.":"Deadline is "+fmtDate(s.deadline)+" ("+daysUntil(s.deadline)+" days left)."},{q:"How much financial aid is provided?",a:s.type==="government"?"Government scholarships typically cover tuition fees and provide monthly stipends.":"Private scholarships vary — check the official website for exact amounts."}];
  if(s.maxIncome!==Infinity) faqs.push({q:"What is the income limit?",a:"Family income must be ≤ ₹"+s.maxIncome.toLocaleString("en-IN")+"/year."});
  if(s.minMarks>50) faqs.push({q:"What are the minimum marks required?",a:"You need at least "+s.minMarks+"% to be eligible."});
  faqs.push({q:"Can I apply for multiple scholarships?",a:"Yes! We recommend applying to all scholarships you're eligible for to maximize your chances."});
  return faqs;
}

// ═══════════ FORM GUIDANCE ═══════════
function generateFormGuide(s){
  let html=`<div class="form-guide-step"><h4>📋 Step 1: Personal Information</h4><p>Enter your full name as per Aadhaar card. Double-check spelling.</p><div class="form-example">Example: Full Name → Rahul Kumar Sharma</div></div>`;
  html+=`<div class="form-guide-step"><h4>📚 Step 2: Academic Details</h4><p>Enter your exact percentage or CGPA. Use the latest mark sheet.</p><div class="form-example">Example: Percentage → 85.6% (use exact value from mark sheet)</div></div>`;
  html+=`<div class="form-guide-step"><h4>📎 Step 3: Upload Documents</h4><p>Scan documents in PDF format, under 500KB each. Ensure text is readable.</p></div>`;
  html+=`<div class="form-guide-step mistake"><h4>❌ Common Mistake 1: Name Mismatch</h4><p>Your name must match exactly across all documents — Aadhaar, mark sheets, and bank account.</p></div>`;
  html+=`<div class="form-guide-step mistake"><h4>❌ Common Mistake 2: Expired Income Certificate</h4><p>Income certificates are valid for 1 year only. Get a fresh one if yours is older.</p></div>`;
  html+=`<div class="form-guide-step mistake"><h4>❌ Common Mistake 3: Wrong Bank Details</h4><p>Ensure your bank account is linked to Aadhaar for DBT (Direct Benefit Transfer).</p></div>`;
  return html;
}

// ═══════════ APPLY GUIDE ═══════════
function generateApplyGuide(s){
  const timeEst=s.steps.length<=4?"15-20 minutes":"25-40 minutes";
  let html=`<div class="apply-meta"><div class="apply-meta-item">⏱️ Time: ${timeEst}</div><div class="apply-meta-item">📄 Docs: ${s.documents.length} required</div><div class="apply-meta-item">📅 Deadline: ${fmtDate(s.deadline)}</div></div>`;
  html+=`<div class="apply-guide-grid" style="margin-top:16px">`;
  s.steps.forEach((st,i)=>{html+=`<div class="apply-step"><div class="apply-step-num">${i+1}</div><div><h4>${st.icon} ${st.label}</h4><p>${getStepTip(st.label)}</p></div></div>`});
  html+=`</div>`;
  html+=`<div class="form-guide-step" style="margin-top:16px"><h4>💡 Tips Before Applying</h4><p>• Keep all documents ready before starting<br>• Use a laptop/desktop for better experience<br>• Take a screenshot of your application number<br>• Save the confirmation email/SMS<br>• Follow up after 2-3 weeks if no update</p></div>`;
  return html;
}
function getStepTip(label){
  const l=label.toLowerCase();
  if(l.includes("register")) return "Create your account with a valid email and mobile number.";
  if(l.includes("fill")) return "Enter all details carefully. Save as draft periodically.";
  if(l.includes("upload")) return "Scan all documents in PDF, under 500KB each.";
  if(l.includes("interview")) return "Prepare your introduction and know your application well.";
  if(l.includes("verif")) return "Your institute will verify your details. Keep originals handy.";
  if(l.includes("approv")) return "Wait for official communication. Check portal regularly.";
  return "Follow instructions on the portal carefully.";
}

// ═══════════ MODAL ═══════════
let currentModalId=null;
function openModal(id){
  currentModalId=id;
  const s=scholarships.find(x=>x.id===id); if(!s) return;
  mTitle.textContent=s.name; mType.textContent=s.type; mType.className=`mbadge ${s.type}`;
  mElig.textContent=s.eligibility;
  const days=daysUntil(s.deadline), urg=days>=0&&days<=7;
  mDeadline.textContent=days<0?`Expired (${fmtDate(s.deadline)})`:`Deadline: ${fmtDate(s.deadline)} (${days}d left)`;
  mDeadline.className=`mdeadline ${urg?"urgent":""}`;
  mFlow.innerHTML=s.steps.map((st,i)=>`<div class="flow-step"><div class="flow-box"><span>${st.icon}</span>${st.label}</div>${i<s.steps.length-1?'<span class="flow-arrow">→</span>':""}</div>`).join("");
  mDocs.innerHTML=s.documents.map(d=>`<li><span class="chk">✓</span>${d}</li>`).join("");
  const statuses=["not_started","in_progress","submitted","approved"], labels=["Not Started","In Progress","Submitted","Approved"];
  const tracker=trackerData.find(t=>t.id===id), curIdx=tracker?statuses.indexOf(tracker.status):0;
  mProgress.innerHTML=statuses.map((st,i)=>{const done=i<curIdx,active=i===curIdx;return `<div class="pstep ${done?"done-line":""}"><div class="pdot ${done?"done":active?"active":""}" onclick="setTrackerStatus(${id},'${st}')">${done?"✓":i+1}</div><span class="plbl">${labels[i]}</span></div>`}).join("");
  // Form Guide
  $("#formGuideContent").innerHTML=generateFormGuide(s);
  // FAQ
  const faqs=generateFAQs(s);
  $("#faqContent").innerHTML=faqs.map(f=>`<div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('open')">${f.q}</div><div class="faq-a"><p>${f.a}</p></div></div>`).join("");
  // Apply Guide
  $("#applyGuideContent").innerHTML=generateApplyGuide(s);
  // Success Meter
  const box=$("#successMeterBox");
  if(currentUser&&currentUser.income){
    box.style.display="block";
    const pct=calcSuccess(s,80,currentUser.income,currentUser.category);
    const info=getSuccessLabel(pct);
    setTimeout(()=>{$("#meterFill").style.width=pct+"%"},100);
    $("#meterPct").textContent=pct+"%"; $("#meterLabel").textContent=info.text; $("#meterLabel").className="meter-label "+info.cls;
    $("#meterTip").textContent=pct>=70?"Great match! You have a strong chance.":pct>=40?"Decent chance. Make sure all documents are perfect.":"Consider strengthening your profile or exploring other options.";
  } else box.style.display="none";
  // Tabs reset
  $$(".mtab").forEach(t=>t.classList.remove("active")); $$(".tab-content").forEach(t=>t.classList.remove("active"));
  $(".mtab").classList.add("active"); $("#tabProcess").classList.add("active");
  const saved=savedIds.includes(id);
  mBookmark.textContent=saved?"★ Saved":"☆ Save"; mBookmark.onclick=()=>{toggleSave(id);openModal(id)};
  mApply.href=s.link; modalOv.classList.add("active"); document.body.style.overflow="hidden";
}
function closeModal(){modalOv.classList.remove("active");document.body.style.overflow="";$("#meterFill").style.width="0%"}
$("#modalClose").addEventListener("click",closeModal);
modalOv.addEventListener("click",e=>{if(e.target===modalOv)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

// Modal tabs
$$(".mtab").forEach(tab=>tab.addEventListener("click",()=>{
  $$(".mtab").forEach(t=>t.classList.remove("active")); $$(".tab-content").forEach(t=>t.classList.remove("active"));
  tab.classList.add("active"); $("#tab"+tab.dataset.tab.charAt(0).toUpperCase()+tab.dataset.tab.slice(1)).classList.add("active");
}));

// ═══════════ TRACKER ═══════════
function setTrackerStatus(id,status){
  trackerData=trackerData.map(t=>t.id===id?{...t,status}:t);
  if(!trackerData.find(t=>t.id===id)) trackerData.push({id,status});
  SAVE("sh_tracker",trackerData);openModal(id);renderTracker();toast("Status updated");
}
function renderTracker(){
  const el=$("#trackerList"),empty=$("#trackerEmpty"),items=trackerData.filter(t=>savedIds.includes(t.id));
  if(!items.length){el.innerHTML="";empty.style.display="block";return}
  empty.style.display="none";
  const statuses=["not_started","in_progress","submitted","approved"], labels=["Not Started","In Progress","Submitted","Approved"];
  el.innerHTML=items.map(t=>{const s=scholarships.find(x=>x.id===t.id);if(!s) return "";const idx=statuses.indexOf(t.status);return `<div class="tracker-item"><span class="tracker-name">${s.name}</span><div class="tracker-status">${statuses.map((st,i)=>{const cls=i<=idx?(i===3?"approved":i===2?"submitted":"filled"):"";return `<span class="ts ${cls}" onclick="setTrackerStatus(${t.id},'${st}')" title="${labels[i]}"></span>`}).join("")}</div><span class="tracker-lbl">${labels[idx]}</span></div>`}).join("");
}

// ═══════════ SEARCH & FILTERS ═══════════
searchIn.addEventListener("input",render);
$$(".fbtn").forEach(b=>b.addEventListener("click",()=>{$$(".fbtn").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeFilter=b.dataset.filter;render()}));
$("#fieldFilter").addEventListener("change",e=>{fieldFilter=e.target.value;render()});

// ═══════════ ELIGIBILITY CHECKER ═══════════
$("#eligForm").addEventListener("submit",e=>{
  e.preventDefault();
  const marks=+$("#eligMarks").value, income=+$("#eligIncome").value, cat=$("#eligCategory").value, field=$("#eligField").value;
  const results=scholarships.filter(s=>{
    if(marks<s.minMarks) return false; if(income>s.maxIncome) return false;
    if(!s.categories.includes(cat)) return false;
    if(field!=="general"&&s.field!=="general"&&s.field!==field) return false;
    if(daysUntil(s.deadline)<0) return false; return true;
  });
  const box=$("#eligResults"), ul=$("#eligList"); box.style.display="block";
  if(!results.length){ul.innerHTML="<li>No matching scholarships found. Try adjusting your filters.</li>";$("#successOverview").style.display="none";return}
  ul.innerHTML=results.map(s=>`<li onclick="openModal(${s.id})"><span class="e-icon">${s.type==="government"?"🏛️":"🏢"}</span><span><strong>${s.name}</strong> — ${fmtDate(s.deadline)}</span></li>`).join("");
  // Success bars
  const overview=$("#successOverview"); overview.style.display="block";
  $("#successBars").innerHTML=results.map(s=>{const pct=calcSuccess(s,marks,income,cat);const info=getSuccessLabel(pct);return `<div class="success-bar-item"><h4>${s.name}<span>${pct}% — ${info.text}</span></h4><div class="bar-wrap"><div class="bar-fill ${info.cls}" style="width:0%"></div></div></div>`}).join("");
  setTimeout(()=>{$$(".bar-fill").forEach(b=>{b.style.width=b.closest(".success-bar-item").querySelector("h4 span").textContent.split("%")[0]+"%"})},100);
});

// ═══════════ DASHBOARD ═══════════
$("#dashRecommend").addEventListener("click",()=>{
  const income=+$("#dashIncome").value||Infinity, cat=$("#dashCategory").value;
  const results=scholarships.filter(s=>{if(income>s.maxIncome&&s.maxIncome!==Infinity) return false;if(!s.categories.includes(cat)) return false;if(daysUntil(s.deadline)<0) return false;return true});
  const box=$("#dashResults"); box.style.display="block";
  if(!results.length){box.innerHTML="<h4>No recommendations found.</h4><p>Try different criteria.</p>";return}
  box.innerHTML=`<h4>Recommended for you (${results.length})</h4><ul>${results.map(s=>`<li onclick="openModal(${s.id})" style="cursor:pointer">${s.type==="government"?"🏛️":"🏢"} <strong>${s.name}</strong> — Deadline: ${fmtDate(s.deadline)}</li>`).join("")}</ul>`;
});

// ═══════════ ANALYTICS ═══════════
function updateAnalytics(){
  const total=scholarships.length, upcoming=scholarships.filter(s=>daysUntil(s.deadline)>=0).length;
  const urgent=scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=7}).length;
  animNum($("#anTotal"),total);animNum($("#anUpcoming"),upcoming);animNum($("#anSaved"),savedIds.length);animNum($("#anUrgent"),urgent);
  animNum($("#statTotal"),total,800);animNum($("#statGov"),scholarships.filter(s=>s.type==="government").length,800);
  animNum($("#statPvt"),scholarships.filter(s=>s.type==="private").length,800);animNum($("#statSaved"),savedIds.length,800);
}
function animNum(el,target,dur=600){let s=0;const step=ts=>{if(!s)s=ts;const p=Math.min((ts-s)/dur,1);el.textContent=Math.floor(p*target);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}

// ═══════════ AI CHAT ═══════════
const chatMessages=$("#chatMessages"), chatForm=$("#chatForm"), chatInput=$("#chatInput");
chatForm.addEventListener("submit",e=>{e.preventDefault();const q=chatInput.value.trim();if(!q) return;addMsg(q,"user");chatInput.value="";setTimeout(()=>addMsg(botReply(q),"bot"),500)});
function addMsg(text,type){const d=document.createElement("div");d.className=`chat-msg ${type}`;d.innerHTML=`<div class="msg-bubble">${text}</div>`;chatMessages.appendChild(d);chatMessages.scrollTop=chatMessages.scrollHeight}
function botReply(q){
  const ql=q.toLowerCase();
  if(ql.includes("government")){const g=scholarships.filter(s=>s.type==="government"&&daysUntil(s.deadline)>=0);return `Found ${g.length} government scholarships:<br>${g.map(s=>`• <strong>${s.name}</strong> — ${fmtDate(s.deadline)}`).join("<br>")}`}
  if(ql.includes("private")){const p=scholarships.filter(s=>s.type==="private"&&daysUntil(s.deadline)>=0);return `Found ${p.length} private scholarships:<br>${p.map(s=>`• <strong>${s.name}</strong> — ${fmtDate(s.deadline)}`).join("<br>")}`}
  if(ql.includes("document")||ql.includes("docs")) return `Common documents needed:<br>• Aadhaar Card / ID Proof<br>• Income Certificate<br>• Academic Mark Sheets<br>• Bank Passbook<br>• Passport Photo<br>• Caste Certificate (if applicable)<br><br>Check individual scholarships for specific requirements!`;
  if(ql.includes("deadline")||ql.includes("urgent")){const u=scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=30});if(!u.length) return "No deadlines in the next 30 days. 🎉";return `Upcoming deadlines:<br>${u.map(s=>`• <strong>${s.name}</strong> — ${fmtDate(s.deadline)} (${daysUntil(s.deadline)}d left)`).join("<br>")}`}
  if(ql.includes("predict")||ql.includes("success")||ql.includes("chance")){if(!currentUser) return "Please login first so I can predict your success based on your profile!";const top=scholarships.filter(s=>daysUntil(s.deadline)>=0).map(s=>({name:s.name,pct:calcSuccess(s,80,currentUser.income,currentUser.category)})).sort((a,b)=>b.pct-a.pct).slice(0,5);return `Your success predictions:<br>${top.map(s=>`• <strong>${s.name}</strong> — ${s.pct}% ${getSuccessLabel(s.pct).text}`).join("<br>")}`}
  if(ql.includes("eligib")||ql.includes("apply for")||ql.includes("which")) return `Go to the <strong>Eligibility Checker</strong> section to find matches, or tell me your details like "I have 85% marks and ₹2 lakh income"`;
  const marksMatch=ql.match(/(\d+)\s*(%|marks|percent)/), incomeMatch=ql.match(/(\d+)\s*(lakh|lac|k|income)/);
  if(marksMatch||incomeMatch){const marks=marksMatch?+marksMatch[1]:50;const income=incomeMatch?+incomeMatch[1]*(ql.includes("lakh")||ql.includes("lac")?100000:ql.includes("k")?1000:1):Infinity;const matches=scholarships.filter(s=>marks>=s.minMarks&&income<=s.maxIncome&&daysUntil(s.deadline)>=0);if(!matches.length) return "No exact matches. Try the Eligibility Checker!";return `You may qualify for:<br>${matches.map(s=>`• <strong>${s.name}</strong>`).join("<br>")}`}
  if(ql.includes("how")||ql.includes("process")||ql.includes("steps")) return `General process:<br>1️⃣ Register on portal<br>2️⃣ Fill application form<br>3️⃣ Upload documents<br>4️⃣ Submit before deadline<br>5️⃣ Wait for verification<br><br>Click "Details" on any scholarship for specifics!`;
  if(ql.includes("saved")||ql.includes("bookmark")){if(!savedIds.length) return "No saved scholarships yet. Click ☆ to save!";return `Saved:<br>${scholarships.filter(x=>savedIds.includes(x.id)).map(x=>`• <strong>${x.name}</strong>`).join("<br>")}`}
  if(ql.includes("hello")||ql.includes("hi ")||ql==="hi"||ql.includes("hey")) return "Hello! 👋 Ask me about scholarships, predictions, documents, or deadlines!";
  if(ql.includes("help")) return `I can help with:<br>• "Show government scholarships"<br>• "Predict my success"<br>• "Upcoming deadlines"<br>• "I have 80% and 3 lakh income"<br>• "How to apply?"`;
  if(ql.includes("thank")) return "You're welcome! 😊 Good luck!";
  return `Try asking about:<br>• Government/Private scholarships<br>• Documents needed<br>• Deadlines<br>• Success predictions<br>• Application process<br><br>Type <strong>"help"</strong> for more!`;
}

// ═══════════ COMMUNITY ═══════════
function renderComments(){
  const list=$("#commentsList"), empty=$("#commentsEmpty");
  if(!comments.length){list.innerHTML="";list.appendChild(empty);empty.style.display="block";return}
  empty.style.display="none";
  list.innerHTML=comments.map((c,i)=>{
    const initials=c.name.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2);
    const ago=getTimeAgo(c.time);
    return `<div class="comment-card"><div class="comment-header"><div class="c-avatar">${initials}</div><span class="c-name">${c.name}</span><span class="c-time">${ago}</span></div><div class="comment-body">${c.text}</div><div class="comment-actions"><button class="comment-btn" onclick="likeComment(${i})">👍 ${c.likes||0}</button><button class="comment-btn comment-delete" onclick="deleteComment(${i})">🗑️</button></div></div>`;
  }).join("");
  observe();
}
function getTimeAgo(ts){const diff=Date.now()-ts;if(diff<60000) return "just now";if(diff<3600000) return Math.floor(diff/60000)+"m ago";if(diff<86400000) return Math.floor(diff/3600000)+"h ago";return Math.floor(diff/86400000)+"d ago"}
$("#commentForm").addEventListener("submit",e=>{
  e.preventDefault();const text=$("#commentInput").value.trim();if(!text) return;
  const name=currentUser?currentUser.name:"Anonymous Student";
  comments.unshift({name,text,time:Date.now(),likes:0});SAVE("sh_comments",comments);
  $("#commentInput").value="";renderComments();toast("Comment posted! 💬");
});
window.likeComment=function(i){comments[i].likes=(comments[i].likes||0)+1;SAVE("sh_comments",comments);renderComments()};
window.deleteComment=function(i){comments.splice(i,1);SAVE("sh_comments",comments);renderComments();toast("Comment deleted")};

// ═══════════ LIVE TICKER ═══════════
function updateTicker(){
  const messages=["🔴 Live: "+Math.floor(Math.random()*2000+500)+" students applied today","✨ New: "+scholarships[Math.floor(Math.random()*scholarships.length)].name+" updated","📊 "+Math.floor(Math.random()*500+100)+" scholarships reviewed this hour","🎓 "+Math.floor(Math.random()*300+50)+" students got shortlisted today","⏰ "+scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=7}).length+" scholarships closing this week"];
  const el=$("#tickerText"); if(!el) return;
  el.style.opacity="0";
  setTimeout(()=>{el.textContent=messages[Math.floor(Math.random()*messages.length)];el.style.opacity="1"},300);
}
setInterval(updateTicker,5000);

// ═══════════ CALENDAR ═══════════
let calDate=new Date();
function renderCalendar(){
  const y=calDate.getFullYear(),m=calDate.getMonth(),calGrid=$("#calGrid"),calMonth=$("#calMonth");
  calMonth.textContent=new Date(y,m).toLocaleString("en-IN",{month:"long",year:"numeric"});
  calGrid.innerHTML="";
  ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(d=>{const h=document.createElement("div");h.className="cal-day-head";h.textContent=d;calGrid.appendChild(h)});
  const first=new Date(y,m,1).getDay(), daysInMonth=new Date(y,m+1,0).getDate(), prevDays=new Date(y,m,0).getDate();
  for(let i=first-1;i>=0;i--){const c=document.createElement("div");c.className="cal-cell other-month";c.textContent=prevDays-i;calGrid.appendChild(c)}
  for(let d=1;d<=daysInMonth;d++){
    const c=document.createElement("div");c.className="cal-cell";c.textContent=d;
    const dateStr=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    if(dateStr===TODAY.toISOString().slice(0,10)) c.classList.add("today");
    const evts=scholarships.filter(s=>s.deadline===dateStr);
    if(evts.length){c.classList.add("has-event");const days=daysUntil(dateStr);const dotColor=days>=0&&days<=7?"red":evts[0].type==="government"?"blue":"yellow";c.innerHTML=`${d}<span class="cal-dot ${dotColor}"></span>`;c.title=evts.map(s=>s.name).join(", ");c.onclick=()=>openModal(evts[0].id)}
    calGrid.appendChild(c);
  }
  const totalCells=first+daysInMonth, rem=totalCells%7===0?0:7-totalCells%7;
  for(let i=1;i<=rem;i++){const c=document.createElement("div");c.className="cal-cell other-month";c.textContent=i;calGrid.appendChild(c)}
}
$("#calPrev").addEventListener("click",()=>{calDate.setMonth(calDate.getMonth()-1);renderCalendar()});
$("#calNext").addEventListener("click",()=>{calDate.setMonth(calDate.getMonth()+1);renderCalendar()});

// ═══════════ DOCUMENT GENERATOR ═══════════
const docGenSel=$("#docGenSelect");
scholarships.forEach(s=>{const o=document.createElement("option");o.value=s.id;o.textContent=s.name;docGenSel.appendChild(o)});
docGenSel.addEventListener("change",()=>{const id=+docGenSel.value;if(!id){$("#genDocs").innerHTML="";return}const s=scholarships.find(x=>x.id===id);$("#genDocs").innerHTML=s.documents.map(d=>`<li><span class="chk">✓</span>${d}</li>`).join("")});

// ═══════════ DOWNLOADS ═══════════
function downloadTemplate(name,content){const blob=new Blob([content],{type:"text/plain"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href);toast("Template downloaded ✅")}
$("#dlResume").addEventListener("click",()=>downloadTemplate("Resume_Template.txt","═══════════════════════════════════════\n       STUDENT RESUME TEMPLATE\n═══════════════════════════════════════\n\nFULL NAME\nEmail: your.email@example.com | Phone: +91 XXXXX XXXXX\n\n───────────────────────────────────────\nOBJECTIVE\n───────────────────────────────────────\n[Write a 2-3 line objective statement]\n\nEDUCATION\n───────────────────────────────────────\nDegree — University (Year - Year)\n• CGPA: X.XX\n\nSKILLS\n───────────────────────────────────────\n• Technical: Skill 1, Skill 2\n• Soft Skills: Communication, Leadership\n\nPROJECTS\n───────────────────────────────────────\nProject Name (Month Year)\n• Description\n• Technologies used\n\nEXPERIENCE\n───────────────────────────────────────\nInternship Title — Company (Dates)\n• Responsibility\n"));
$("#dlSOP").addEventListener("click",()=>downloadTemplate("SOP_Template.txt","═══════════════════════════════════════\n   STATEMENT OF PURPOSE TEMPLATE\n═══════════════════════════════════════\n\nPARA 1 — Introduction & hook\nPARA 2 — Academic background\nPARA 3 — Achievements\nPARA 4 — Why this scholarship\nPARA 5 — Future goals\nPARA 6 — Conclusion\n\nTIPS: Keep 500-1000 words. Be genuine.\n"));
$("#dlForm").addEventListener("click",()=>downloadTemplate("Sample_Application_Form.txt","═══════════════════════════════════════\n     SAMPLE SCHOLARSHIP APPLICATION\n═══════════════════════════════════════\n\nFull Name: ____________________\nDOB: ____/____/________\nContact: +91 ___________\nEmail: ________________________\n\nCourse: ________________________\nCGPA: _____________\nIncome: ₹ __________\nCategory: [ ] General [ ] OBC [ ] SC [ ] ST\n\nDocuments: [ ] ID [ ] Income [ ] Marks [ ] Bank [ ] Photo\n\nSignature: ________________\n"));

// ═══════════ LANGUAGE ═══════════
const i18n={en:{heroBadge:"AI-Powered Student Companion",heroTitle1:"Discover.",heroTitle2:"Apply.",heroTitle3:"Succeed.",heroSub:"Smart recommendations, success prediction, community guidance, and AI assistant — all in one platform.",heroBtn1:"Explore Scholarships",heroBtn2:"Check Eligibility",statTotal:"Total",statGov:"Government",statPvt:"Private",statSaved:"Saved",schTitle:"Scholarship Hub",schDesc:"Browse, search, filter and bookmark scholarships.",fieldLabel:"Field of Study:",noResults:"No scholarships found.",eligTitle:"Eligibility & Success Checker",eligDesc:"Enter your details to find matching scholarships and predict your success.",dashTitle:"Your Dashboard",dashDesc:"Personalized recommendations & progress overview.",assistTitle:"AI Scholarship Assistant",assistDesc:"Ask questions about scholarships, documents, and eligibility.",calTitle:"Deadline Calendar",calDesc:"Visualize scholarship deadlines at a glance.",docTitle:"Document Center",docDesc:"Essential documents, preparation tips, and downloadable templates."},hi:{heroBadge:"AI-संचालित विद्यार्थी साथी",heroTitle1:"खोजें।",heroTitle2:"आवेदन करें।",heroTitle3:"सफल हों।",heroSub:"स्मार्ट अनुशंसाएँ, सफलता भविष्यवाणी, और AI सहायक — सब एक प्लेटफ़ॉर्म पर।",heroBtn1:"छात्रवृत्तियाँ देखें",heroBtn2:"पात्रता जाँचें",statTotal:"कुल",statGov:"सरकारी",statPvt:"निजी",statSaved:"सहेजा",schTitle:"छात्रवृत्ति हब",schDesc:"छात्रवृत्तियाँ ब्राउज़, खोजें और बुकमार्क करें।",fieldLabel:"अध्ययन क्षेत्र:",noResults:"कोई छात्रवृत्ति नहीं मिली।",eligTitle:"पात्रता और सफलता जाँच",eligDesc:"मिलान योग्य छात्रवृत्ति खोजें और सफलता की भविष्यवाणी करें।",dashTitle:"आपका डैशबोर्ड",dashDesc:"व्यक्तिगत अनुशंसाएँ और प्रगति।",assistTitle:"AI छात्रवृत्ति सहायक",assistDesc:"छात्रवृत्ति और पात्रता के बारे में प्रश्न पूछें।",calTitle:"समय-सीमा कैलेंडर",calDesc:"छात्रवृत्ति की तारीखें एक नज़र में देखें।",docTitle:"डॉक्यूमेंट सेंटर",docDesc:"आवश्यक दस्तावेज़ और टेम्पलेट।"}};
let currentLang="en";
$("#langToggle").addEventListener("click",()=>{currentLang=currentLang==="en"?"hi":"en";$("#langToggle").textContent=currentLang==="en"?"🌐 EN":"🌐 हिं";$$("[data-i18n]").forEach(el=>{const key=el.getAttribute("data-i18n");if(i18n[currentLang][key]) el.textContent=i18n[currentLang][key]});toast(currentLang==="en"?"Language: English":"भाषा: हिंदी")});

// ═══════════ TOAST & ALERTS ═══════════
function toast(msg,type=""){const t=document.createElement("div");t.className=`toast ${type}`;t.innerHTML=`<span>${msg}</span>`;$("#toastContainer").appendChild(t);setTimeout(()=>{t.classList.add("out");setTimeout(()=>t.remove(),300)},3500)}
function checkDeadlineAlerts(){scholarships.forEach(s=>{const d=daysUntil(s.deadline);if(d===2)toast(`⚠️ "${s.name}" deadline in 2 days!`,"warn");else if(d===1)toast(`🚨 "${s.name}" deadline TOMORROW!`,"error");else if(d===0)toast(`🔴 "${s.name}" deadline is TODAY!`,"error")});setTimeout(()=>toast("Welcome to ScholarHub! 🎓"),1000)}

// ═══════════ NAVBAR & BOTTOM NAV ═══════════
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",scrollY>30);
  let cur="";$$("section[id], header[id]").forEach(s=>{if(scrollY>=s.offsetTop-100) cur=s.id});
  $$(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("data-section")===cur));
  $$(".bnav-item").forEach(a=>a.classList.toggle("active",a.getAttribute("data-section")===cur));
});
hamburger.addEventListener("click",()=>{hamburger.classList.toggle("open");navLinks.classList.toggle("open")});
$$(".nav-link").forEach(a=>a.addEventListener("click",()=>{hamburger.classList.remove("open");navLinks.classList.remove("open")}));

// ═══════════ SCROLL REVEAL ═══════════
function observe(){const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("vis");obs.unobserve(e.target)}})},{threshold:.1});$$(".s-card,.dcard,.an-card,.tip,.dl-card,.gstep,.video-card,.rec-card,.comment-card").forEach(el=>obs.observe(el))}

// ═══════════ INIT ═══════════
document.addEventListener("DOMContentLoaded",()=>{
  initAuth();render();renderCalendar();updateAnalytics();renderTracker();renderComments();renderRecommendations();observe();checkDeadlineAlerts();updateTicker();
});
