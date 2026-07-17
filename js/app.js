/* ===================== Clinic CRM Prototype ===================== */
/* Mock data store */
const DB = {
  currentRole: 'Administrator',
  emergencyMode: false,
  doctors: [
    {id:'d1', name:'Dr. Sarah Coleman', specialty:'Pediatrics'},
    {id:'d2', name:'Dr. Michael Osei', specialty:'General Medicine'},
    {id:'d3', name:'Dr. Amara Singh', specialty:'Dermatology'},
    {id:'d4', name:'Dr. Liam Foster', specialty:'Orthopedics'},
  ],
  therapists: [
    {id:'t1', name:'Nina Ortiz', specialty:'Physiotherapy'},
    {id:'t2', name:'Jonas Kim', specialty:'Speech Therapy'},
  ],
  users: [
    {id:'u1', name:'Grace Hill', role:'Administrator', email:'grace.hill@clinic.com'},
    {id:'u2', name:'Dr. Sarah Coleman', role:'Doctor', email:'s.coleman@clinic.com'},
    {id:'u3', name:'Priya Nair', role:'Receptionist', email:'priya.nair@clinic.com'},
    {id:'u4', name:'Nina Ortiz', role:'Therapist', email:'nina.ortiz@clinic.com'},
  ],
  patients: [
    {id:'p1', mr:'MR-10021', name:'Emily Carter', phone:'+1 555-201-3344', email:'emily.carter@mail.com', dob:'2016-04-12', gender:'Female', guardian:'Rachel Carter', doctor:'d1', source:'Referral', treatment:'Pediatric Checkup', balance:120, lastVisit:'2026-07-10', status:'Active'},
    {id:'p2', mr:'MR-10022', name:'David Nguyen', phone:'+1 555-330-9981', email:'david.n@mail.com', dob:'1988-09-02', gender:'Male', guardian:'', doctor:'d2', source:'Walk-in', treatment:'General Consultation', balance:0, lastVisit:'2026-07-14', status:'Active'},
    {id:'p3', mr:'MR-10023', name:'Sophia Martinez', phone:'+1 555-441-2210', email:'sophia.m@mail.com', dob:'1995-01-23', gender:'Female', guardian:'', doctor:'d3', source:'Website', treatment:'Skin Consultation', balance:85.5, lastVisit:'2026-07-05', status:'Active'},
    {id:'p4', mr:'MR-10024', name:'Ben Okafor', phone:'+1 555-559-7712', email:'ben.okafor@mail.com', dob:'1979-11-30', gender:'Male', guardian:'', doctor:'d4', source:'Referral', treatment:'Knee Follow-up', balance:240, lastVisit:'2026-06-29', status:'Active'},
    {id:'p5', mr:'MR-10025', name:'Ava Thompson', phone:'+1 555-667-1290', email:'ava.t@mail.com', dob:'2019-02-17', gender:'Female', guardian:'Mark Thompson', doctor:'d1', source:'Social Media', treatment:'Vaccination', balance:0, lastVisit:'2026-07-15', status:'Active'},
    {id:'p6', mr:'MR-10026', name:'Noah Williams', phone:'+1 555-778-4432', email:'noah.w@mail.com', dob:'1966-06-08', gender:'Male', guardian:'', doctor:'d2', source:'Referral', treatment:'Diabetes Review', balance:60, lastVisit:'2026-07-01', status:'Inactive'},
  ],
  appointments: [
    {id:'a1', patient:'p1', doctor:'d1', date:'2026-07-18', time:'09:00', type:'Checkup', duration:30, status:'Confirmed', payment:'Paid'},
    {id:'a2', patient:'p2', doctor:'d2', date:'2026-07-18', time:'09:30', type:'Consultation', duration:20, status:'Checked-in', payment:'Unpaid'},
    {id:'a3', patient:'p3', doctor:'d3', date:'2026-07-18', time:'10:15', type:'Skin Review', duration:30, status:'Waiting', payment:'Paid'},
    {id:'a4', patient:'p4', doctor:'d4', date:'2026-07-18', time:'11:00', type:'Follow-up', duration:30, status:'No-show', payment:'Unpaid'},
    {id:'a5', patient:'p5', doctor:'d1', date:'2026-07-18', time:'11:30', type:'Vaccination', duration:15, status:'Confirmed', payment:'Paid'},
    {id:'a6', patient:'p6', doctor:'d2', date:'2026-07-19', time:'14:00', type:'Review', duration:30, status:'Pending', payment:'Unpaid'},
    {id:'a7', patient:'p1', doctor:'d1', date:'2026-07-20', time:'09:00', type:'Follow-up', duration:20, status:'Confirmed', payment:'Paid'},
  ],
  pipelineStages: ['Inquiry','Scheduled','Checked-in','In Consultation','Completed'],
  pipeline: [
    {id:'pl1', patient:'p2', stage:'Checked-in'},
    {id:'pl2', patient:'p3', stage:'In Consultation'},
    {id:'pl3', patient:'p6', stage:'Inquiry'},
    {id:'pl4', patient:'p4', stage:'Scheduled'},
    {id:'pl5', patient:'p5', stage:'Completed'},
  ],
  followUps: [
    {id:'f1', patient:'p4', task:'Send unpaid invoice reminder', due:'2026-07-19', priority:'High', done:false, channel:'WhatsApp'},
    {id:'f2', patient:'p6', task:'Confirm diabetes review appointment', due:'2026-07-20', priority:'Medium', done:false, channel:'Email'},
    {id:'f3', patient:'p3', task:'Share lab report once ready', due:'2026-07-22', priority:'Low', done:false, channel:'Portal'},
    {id:'f4', patient:'p1', task:'Vaccination booster reminder', due:'2026-08-01', priority:'Medium', done:true, channel:'WhatsApp'},
  ],
  invoices: [
    {id:'inv1', number:'INV-3001', patient:'p1', doctor:'d1', service:'Pediatric Checkup', amount:120, status:'Unpaid', date:'2026-07-10', reminders:1},
    {id:'inv2', number:'INV-3002', patient:'p2', doctor:'d2', service:'General Consultation', amount:75, status:'Paid', date:'2026-07-14', reminders:0},
    {id:'inv3', number:'INV-3003', patient:'p3', doctor:'d3', service:'Skin Consultation', amount:85.5, status:'Unpaid', date:'2026-07-05', reminders:2},
    {id:'inv4', number:'INV-3004', patient:'p4', doctor:'d4', service:'Knee Follow-up', amount:240, status:'Unpaid', date:'2026-06-29', reminders:0},
    {id:'inv5', number:'INV-3005', patient:'p5', doctor:'d1', service:'Vaccination', amount:45, status:'Paid', date:'2026-07-15', reminders:0},
    {id:'inv6', number:'INV-3006', patient:'p6', doctor:'d2', service:'Diabetes Review', amount:60, status:'Unpaid', date:'2026-07-01', reminders:1},
  ],
  medications: [
    {id:'m1', patient:'p1', name:'Amoxicillin 250mg', doctor:'d1', stock:'In Stock', shopify:true, status:'Active'},
    {id:'m2', patient:'p3', name:'Tretinoin Cream', doctor:'d3', stock:'Low Stock', shopify:true, status:'Active'},
    {id:'m4', patient:'p6', name:'Metformin 500mg', doctor:'d2', stock:'In Stock', shopify:true, status:'Active'},
    {id:'m5', patient:'p4', name:'Ibuprofen 400mg', doctor:'d4', stock:'Out of Stock', shopify:false, status:'Completed'},
  ],
  labTests: [
    {id:'l1', patient:'p3', test:'Skin Allergy Panel', doctor:'d3', handling:'Clinic Booking', status:'Awaiting Report', date:'2026-07-16'},
    {id:'l2', patient:'p6', test:'HbA1c Blood Test', doctor:'d2', handling:'Self-arranged', status:'Report Uploaded', date:'2026-07-08'},
    {id:'l3', patient:'p1', test:'Full Blood Count', doctor:'d1', handling:'Clinic Booking', status:'Sample Collected', date:'2026-07-17'},
  ],
  therapySessions: [
    {id:'th1', patient:'p4', therapist:'t1', type:'Physiotherapy', date:'2026-07-19', time:'10:00', payment:'Unpaid', status:'Scheduled', concern:false},
    {id:'th2', patient:'p5', therapist:'t2', type:'Speech Therapy', date:'2026-07-20', time:'13:00', payment:'Paid', status:'Scheduled', concern:true},
  ],
  products: [
    {id:'pr1', name:'Amoxicillin 250mg', variant:'30 capsules', price:12.5, stock:80, linked:true},
    {id:'pr2', name:'Tretinoin Cream', variant:'20g tube', price:24.0, stock:6, linked:true},
    {id:'pr3', name:'Multivitamin Syrup', variant:'200ml', price:9.75, stock:120, linked:false},
    {id:'pr4', name:'Metformin 500mg', variant:'60 tablets', price:8.2, stock:45, linked:true},
  ],
  resources: [
    {id:'r1', title:'Post-Vaccination Care Guide', type:'Guide', audience:'Pediatric Patients'},
    {id:'r2', title:'Home Physiotherapy Exercises', type:'Video', audience:'Therapy Patients'},
    {id:'r3', title:'Managing Diabetes: Diet Basics', type:'Article', audience:'Chronic Care'},
    {id:'r4', title:'Skin Care Routine Worksheet', type:'Worksheet', audience:'Dermatology Patients'},
  ],
  campaigns: [
    {id:'c1', name:'Summer Vaccination Drive', audience:'Pediatric Patients', status:'Sent', sent:214, opened:132, date:'2026-07-01'},
    {id:'c2', name:'Diabetes Awareness Month', audience:'Chronic Care', status:'Draft', sent:0, opened:0, date:'-'},
    {id:'c3', name:'Referral Source Follow-up', audience:'All Patients', status:'Scheduled', sent:0, opened:0, date:'2026-07-25'},
  ],
  notes: [
    {id:'n1', patient:'p1', date:'2026-07-10', doctor:'d1', symptoms:'Mild fever, cough', assessment:'Common cold', plan:'Rest, fluids, review in 1 week'},
    {id:'n2', patient:'p2', date:'2026-07-14', doctor:'d2', symptoms:'Routine check', assessment:'Healthy', plan:'Annual follow-up'},
  ],
};

const helpers = {
  patient: id => DB.patients.find(p=>p.id===id),
  doctor: id => DB.doctors.find(d=>d.id===id),
  therapist: id => DB.therapists.find(t=>t.id===id),
  money: n => '$'+Number(n).toFixed(2),
  date: d => { const dt=new Date(d+'T00:00:00'); return isNaN(dt)?d:dt.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); },
  genMR: () => { const nums=DB.patients.map(p=>parseInt(p.mr.split('-')[1],10)); return 'MR-'+(Math.max(...nums)+1); },
  badge(status){
    const map = {
      Confirmed:'blue', 'Checked-in':'green', Waiting:'amber', 'No-show':'red', Pending:'grey', Completed:'green',
      Paid:'green', Unpaid:'red', Active:'green', Inactive:'grey', 'In Stock':'green', 'Low Stock':'amber', 'Out of Stock':'red',
      'Awaiting Report':'amber', 'Report Uploaded':'green', 'Sample Collected':'blue', Scheduled:'blue', Draft:'grey', Sent:'green',
    };
    return map[status] || 'grey';
  }
};

/* ---------- Routing / navigation ---------- */
const ROUTES = [
  {id:'dashboard', label:'Dashboard', icon:'&#9642;', roles:['Administrator','Doctor','Receptionist','Therapist']},
  {id:'appointments', label:'All Appointments', icon:'&#128197;', roles:['Administrator','Doctor','Receptionist']},
  {id:'patients', label:'Patients', icon:'&#128100;', roles:['Administrator','Doctor','Receptionist']},
  {id:'receptionist', label:'Receptionist', icon:'&#128276;', roles:['Administrator','Receptionist']},
  {id:'pipeline', label:'Pipeline', icon:'&#128202;', roles:['Administrator','Receptionist']},
  {id:'followups', label:'Follow-Ups', icon:'&#9989;', roles:['Administrator','Receptionist','Doctor']},
  {id:'billing', label:'Billing', icon:'&#128181;', roles:['Administrator','Receptionist']},
  {id:'medications', label:'Medications', icon:'&#128138;', roles:['Administrator','Doctor']},
  {id:'labs', label:'Lab Tests', icon:'&#129514;', roles:['Administrator','Doctor']},
  {id:'therapy', label:'Therapy', icon:'&#129497;', roles:['Administrator','Therapist','Doctor']},
  {id:'products', label:'Products', icon:'&#128230;', roles:['Administrator']},
  {id:'resources', label:'Resources', icon:'&#128218;', roles:['Administrator','Doctor','Therapist']},
  {id:'campaigns', label:'Email Campaigns', icon:'&#128231;', roles:['Administrator']},
  {id:'reports', label:'Reports', icon:'&#128200;', roles:['Administrator']},
  {id:'settings', label:'Settings', icon:'&#9881;', roles:['Administrator']},
  {id:'portal', label:'Patient Portal', icon:'&#127973;', roles:['Administrator','Patient Portal User']},
  {id:'ai', label:'AI Assistant', icon:'&#10024;', roles:['Administrator','Doctor','Receptionist','Therapist']},
];

let state = { route:'dashboard', patientFileId:null, patientFileTab:'info', apptView:'list', aiHistory:[] };

function visibleRoutes(){ return ROUTES.filter(r=>r.roles.includes(DB.currentRole)); }

function navigate(routeId){
  const allowed = visibleRoutes().some(r=>r.id===routeId);
  state.route = allowed ? routeId : 'dashboard';
  render();
}

/* ---------- Root render ---------- */
function render(){
  const app = document.getElementById('app');
  app.className = DB.emergencyMode ? 'emergency' : '';
  document.getElementById('sidebar').innerHTML = renderSidebar();
  document.getElementById('bottomnav').innerHTML = renderBottomNav();
  document.getElementById('topbar-title').textContent = routeTitle();
  document.getElementById('topbar-sub').textContent = routeSub();
  document.getElementById('content').innerHTML = renderContent();
  bindGlobalEvents();
}

function routeTitle(){
  const r = ROUTES.find(r=>r.id===state.route);
  return r ? r.label : 'Dashboard';
}
function routeSub(){
  const map = {
    dashboard:'Live clinic metrics and today\u2019s activity', appointments:'List, card and calendar views of all bookings',
    patients:'Search, filter and manage every patient record', receptionist:'Front-desk queue and walk-in booking',
    pipeline:'Visual appointment stage tracking', followups:'Pending and completed tasks',
    billing:'Invoices, payments and unpaid follow-ups', medications:'Prescriptions and stock status',
    labs:'Lab requests and report tracking', therapy:'Therapy schedule and session notes',
    products:'Shopify-linked products and pricing', resources:'Patient-facing guides and worksheets',
    campaigns:'Newsletters and marketing messages', reports:'Analytics across patients, revenue and doctors',
    settings:'Users, integrations and clinic configuration', portal:'Patient-facing self-service workspace',
    ai:'Natural-language CRM questions and actions',
  };
  return map[state.route] || '';
}

function renderSidebar(){
  const items = visibleRoutes().map(r => `
    <div class="nav-item ${state.route===r.id?'active':''}" data-nav="${r.id}">
      <span class="nav-icon">${r.icon}</span><span>${r.label}</span>
    </div>`).join('');
  const roleOptions = ['Administrator','Doctor','Receptionist','Therapist','Patient Portal User']
    .map(r=>`<option value="${r}" ${DB.currentRole===r?'selected':''}>${r}</option>`).join('');
  return `
    <div class="brand">Clinic<span>CRM</span></div>
    <nav>${items}</nav>
    <div class="role-box">
      <label>Viewing as</label>
      <select id="roleSelect">${roleOptions}</select>
      <label style="margin-top:8px;">
        <input type="checkbox" id="emergencyToggle" ${DB.emergencyMode?'checked':''}/> Mobile emergency mode
      </label>
    </div>`;
}

function renderBottomNav(){
  if(!DB.emergencyMode) return '';
  const quick = ['dashboard','appointments','patients','followups','ai'].filter(id=>visibleRoutes().some(r=>r.id===id));
  const labels = {dashboard:'Home',appointments:'Appts',patients:'Patients',followups:'Tasks',ai:'AI'};
  const icons = {dashboard:'&#8962;',appointments:'&#128197;',patients:'&#128100;',followups:'&#9989;',ai:'&#10024;'};
  return quick.map(id=>`
    <div class="bn-item ${state.route===id?'active':''}" data-nav="${id}">
      <span class="bn-icon">${icons[id]}</span><span>${labels[id]}</span>
    </div>`).join('') + `<div class="emergency-banner-inline"></div>`;
}

function renderContent(){
  switch(state.route){
    case 'dashboard': return renderDashboard();
    case 'appointments': return renderAppointments();
    case 'patients': return state.patientFileId ? renderPatientFile(state.patientFileId) : renderPatients();
    case 'receptionist': return renderReceptionist();
    case 'pipeline': return renderPipeline();
    case 'followups': return renderFollowUps();
    case 'billing': return renderBilling();
    case 'medications': return renderMedications();
    case 'labs': return renderLabs();
    case 'therapy': return renderTherapy();
    case 'products': return renderProducts();
    case 'resources': return renderResources();
    case 'campaigns': return renderCampaigns();
    case 'reports': return renderReports();
    case 'settings': return renderSettings();
    case 'portal': return renderPortal();
    case 'ai': return renderAI();
    default: return renderDashboard();
  }
}

/* ---------- Dashboard ---------- */
function renderDashboard(){
  const today = '2026-07-18';
  const todays = DB.appointments.filter(a=>a.date===today);
  const unpaid = DB.invoices.filter(i=>i.status==='Unpaid');
  const revenue = DB.invoices.filter(i=>i.status==='Paid').reduce((s,i)=>s+i.amount,0);
  const pendingF = DB.followUps.filter(f=>!f.done);
  return `
  <div class="grid grid-4" style="margin-bottom:20px;">
    <div class="stat"><div class="label">Today's Appointments</div><div class="value">${todays.length}</div><div class="delta">Live schedule</div></div>
    <div class="stat"><div class="label">Unpaid Invoices</div><div class="value">${unpaid.length}</div><div class="delta" style="color:var(--red)">${helpers.money(unpaid.reduce((s,i)=>s+i.amount,0))} outstanding</div></div>
    <div class="stat"><div class="label">Revenue Collected</div><div class="value">${helpers.money(revenue)}</div><div class="delta">This month</div></div>
    <div class="stat"><div class="label">Pending Follow-Ups</div><div class="value">${pendingF.length}</div><div class="delta" style="color:var(--amber)">Needs action</div></div>
  </div>
  <div class="grid grid-2">
    <div class="card">
      <div class="section-title">Today's Schedule</div>
      <div class="section-sub">${helpers.date(today)}</div>
      <div class="table-wrap" style="border:none;">
        <table>
          <thead><tr><th>Time</th><th>Patient</th><th>Doctor</th><th>Status</th></tr></thead>
          <tbody>
            ${todays.map(a=>`<tr><td>${a.time}</td><td>${helpers.patient(a.patient).name}</td><td>${helpers.doctor(a.doctor).name}</td><td><span class="badge badge-${helpers.badge(a.status)}">${a.status}</span></td></tr>`).join('') || '<tr><td colspan=4 class="muted">No appointments today.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="section-title">Pending Follow-Ups</div>
      <div class="section-sub">Sorted by priority</div>
      ${pendingF.slice(0,5).map(f=>`
        <div class="timeline-item">
          <div class="t-title">${helpers.patient(f.patient).name} &mdash; ${f.task}</div>
          <div class="t-meta">Due ${helpers.date(f.due)} &middot; <span class="badge badge-${f.priority==='High'?'red':f.priority==='Medium'?'amber':'grey'}">${f.priority}</span></div>
        </div>`).join('') || '<div class="muted">All caught up.</div>'}
    </div>
  </div>
  <div class="grid grid-2" style="margin-top:16px;">
    <div class="card">
      <div class="section-title">Doctor Load Today</div>
      ${DB.doctors.map(d=>{
        const c = todays.filter(a=>a.doctor===d.id).length;
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #eef1f5;font-size:13px;"><span>${d.name}</span><span class="badge badge-blue">${c} appt${c!==1?'s':''}</span></div>`;
      }).join('')}
    </div>
    <div class="card">
      <div class="section-title">Lead Sources (last 30 days)</div>
      ${['Referral','Walk-in','Website','Social Media'].map(src=>{
        const c = DB.patients.filter(p=>p.source===src).length;
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #eef1f5;font-size:13px;"><span>${src}</span><span>${c}</span></div>`;
      }).join('')}
    </div>
  </div>`;
}

/* ---------- Appointments ---------- */
function renderAppointments(){
  const rows = DB.appointments.slice().sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time));
  const listView = () => `
    <div class="table-wrap"><table>
      <thead><tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Type</th><th>Status</th><th>Payment</th><th></th></tr></thead>
      <tbody>${rows.map(a=>`
        <tr>
          <td>${helpers.patient(a.patient).name}<div class="muted" style="font-size:11px;">${helpers.patient(a.patient).mr}</div></td>
          <td>${helpers.doctor(a.doctor).name}</td>
          <td>${helpers.date(a.date)}</td><td>${a.time}</td><td>${a.type}</td>
          <td><span class="badge badge-${helpers.badge(a.status)}">${a.status}</span></td>
          <td><span class="badge badge-${helpers.badge(a.payment)}">${a.payment}</span></td>
          <td class="row-actions">
            <select class="btn btn-sm" onchange="updateApptStatus('${a.id}', this.value)">
              ${['Pending','Confirmed','Checked-in','Waiting','Completed','No-show','Cancelled'].map(s=>`<option ${a.status===s?'selected':''}>${s}</option>`).join('')}
            </select>
          </td>
        </tr>`).join('')}</tbody>
    </table></div>`;
  const cardView = () => `
    <div class="grid grid-3">${rows.map(a=>`
      <div class="card">
        <div style="display:flex;justify-content:space-between;"><strong>${helpers.patient(a.patient).name}</strong><span class="badge badge-${helpers.badge(a.status)}">${a.status}</span></div>
        <div class="muted" style="font-size:12.5px;margin:6px 0;">${helpers.doctor(a.doctor).name} &middot; ${a.type}</div>
        <div style="font-size:13px;">${helpers.date(a.date)} at ${a.time} &middot; ${a.duration} min</div>
        <div style="margin-top:8px;"><span class="badge badge-${helpers.badge(a.payment)}">${a.payment}</span></div>
      </div>`).join('')}</div>`;
  const calView = () => {
    const byDate = {};
    rows.forEach(a=>{ (byDate[a.date] = byDate[a.date]||[]).push(a); });
    return Object.keys(byDate).sort().map(date=>`
      <div class="card" style="margin-bottom:12px;">
        <div class="section-title" style="margin-bottom:10px;">${helpers.date(date)}</div>
        ${byDate[date].map(a=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #eef1f5;font-size:13px;">
          <span>${a.time} &middot; ${helpers.patient(a.patient).name} &middot; ${helpers.doctor(a.doctor).name}</span>
          <span class="badge badge-${helpers.badge(a.status)}">${a.status}</span></div>`).join('')}
      </div>`).join('');
  };
  return `
    <div class="toolbar">
      <input type="text" class="search" placeholder="Search by name, MR, phone, doctor">
      <div class="filters-full" style="display:flex;gap:10px;">
        <select><option>All Doctors</option>${DB.doctors.map(d=>`<option>${d.name}</option>`).join('')}</select>
        <input type="date">
        <select><option>All Status</option><option>Confirmed</option><option>Checked-in</option><option>No-show</option></select>
      </div>
      <button class="btn filter-toggle" onclick="document.querySelector('.filters-full').classList.toggle('open')">Filter</button>
      <div class="chip-group" style="margin-left:auto;">
        <div class="chip ${state.apptView==='list'?'active':''}" onclick="setApptView('list')">List</div>
        <div class="chip ${state.apptView==='card'?'active':''}" onclick="setApptView('card')">Cards</div>
        <div class="chip ${state.apptView==='calendar'?'active':''}" onclick="setApptView('calendar')">Calendar</div>
      </div>
      <button class="btn btn-primary" onclick="openModal('newAppointment')">+ New Appointment</button>
    </div>
    ${state.apptView==='list'?listView():state.apptView==='card'?cardView():calView()}
  `;
}
function setApptView(v){ state.apptView=v; render(); }
function updateApptStatus(id, status){ const a=findAppt(id); if(a){ a.status=status; render(); } }
function findAppt(id){ return DB.appointments.find(a=>a.id===id); }

/* ---------- Patients ---------- */
function renderPatients(){
  const rows = DB.patients;
  return `
    <div class="toolbar">
      <input type="text" class="search" placeholder="Search by name, MR, phone, email">
      <div class="filters-full" style="display:flex;gap:10px;">
        <select><option>All Doctors</option>${DB.doctors.map(d=>`<option>${d.name}</option>`).join('')}</select>
        <select><option>All Sources</option><option>Referral</option><option>Walk-in</option><option>Website</option><option>Social Media</option></select>
      </div>
      <button class="btn filter-toggle" onclick="document.querySelector('.filters-full').classList.toggle('open')">Filter</button>
      <button class="btn" style="margin-left:auto;">Export</button>
      <button class="btn btn-primary" onclick="openModal('newPatient')">+ Add Patient</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>MR</th><th>Name</th><th>Phone</th><th>Doctor</th><th>Balance</th><th>Last Visit</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows.map(p=>`
        <tr>
          <td>${p.mr}</td><td>${p.name}</td><td>${p.phone}</td><td>${helpers.doctor(p.doctor).name}</td>
          <td>${p.balance>0?`<span class="badge badge-red">${helpers.money(p.balance)}</span>`:`<span class="badge badge-green">$0.00</span>`}</td>
          <td>${helpers.date(p.lastVisit)}</td>
          <td><span class="badge badge-${helpers.badge(p.status)}">${p.status}</span></td>
          <td><button class="btn btn-sm btn-primary" onclick="openPatientFile('${p.id}')">File</button></td>
        </tr>`).join('')}</tbody>
    </table></div>
  `;
}
function openPatientFile(id){ state.patientFileId=id; state.patientFileTab='info'; render(); }
function closePatientFile(){ state.patientFileId=null; render(); }

function renderPatientFile(id){
  const p = helpers.patient(id);
  const tabs = ['info','history','billing','medications','labs','therapy','communications'];
  const tabLabel = {info:'Information',history:'History',billing:'Billing',medications:'Medications',labs:'Labs',therapy:'Therapy',communications:'Communications'};
  const appts = DB.appointments.filter(a=>a.patient===id);
  const invs = DB.invoices.filter(i=>i.patient===id);
  const meds = DB.medications.filter(m=>m.patient===id);
  const labs = DB.labTests.filter(l=>l.patient===id);
  const th = DB.therapySessions.filter(t=>t.patient===id);
  const notes = DB.notes.filter(n=>n.patient===id);

  const tabContent = () => {
    switch(state.patientFileTab){
      case 'info': return `
        <div class="grid grid-2">
          <div><label class="muted" style="font-size:11.5px;">Full Name</label><div>${p.name}</div></div>
          <div><label class="muted" style="font-size:11.5px;">MR Number</label><div>${p.mr}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Phone</label><div>${p.phone}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Email</label><div>${p.email}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Date of Birth</label><div>${helpers.date(p.dob)}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Gender</label><div>${p.gender}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Guardian</label><div>${p.guardian||'&mdash;'}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Source</label><div>${p.source}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Assigned Doctor</label><div>${helpers.doctor(p.doctor).name}</div></div>
          <div><label class="muted" style="font-size:11.5px;">Treatment</label><div>${p.treatment}</div></div>
        </div>
        <div style="margin-top:16px;"><button class="btn btn-primary btn-sm">Save Changes</button></div>`;
      case 'history': return notes.map(n=>`
        <div class="timeline-item">
          <div class="t-title">Consultation with ${helpers.doctor(n.doctor).name}</div>
          <div class="t-meta">${helpers.date(n.date)}</div>
          <div style="margin-top:6px;font-size:13px;"><strong>Symptoms:</strong> ${n.symptoms}<br><strong>Assessment:</strong> ${n.assessment}<br><strong>Plan:</strong> ${n.plan}</div>
        </div>`).join('') + appts.map(a=>`
        <div class="timeline-item"><div class="t-title">Appointment &mdash; ${a.type}</div><div class="t-meta">${helpers.date(a.date)} at ${a.time} &middot; ${a.status}</div></div>
        `).join('') || '<div class="muted">No history recorded.</div>';
      case 'billing': return `<div class="table-wrap"><table><thead><tr><th>Invoice</th><th>Service</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>${invs.map(i=>`<tr><td>${i.number}</td><td>${i.service}</td><td>${helpers.money(i.amount)}</td><td><span class="badge badge-${helpers.badge(i.status)}">${i.status}</span></td><td>${helpers.date(i.date)}</td></tr>`).join('') || '<tr><td colspan=5 class="muted">No invoices.</td></tr>'}</tbody></table></div>`;
      case 'medications': return `<div class="table-wrap"><table><thead><tr><th>Medication</th><th>Doctor</th><th>Stock</th><th>Status</th></tr></thead>
        <tbody>${meds.map(m=>`<tr><td>${m.name}</td><td>${helpers.doctor(m.doctor).name}</td><td><span class="badge badge-${helpers.badge(m.stock)}">${m.stock}</span></td><td>${m.status}</td></tr>`).join('') || '<tr><td colspan=4 class="muted">No medications.</td></tr>'}</tbody></table></div>`;
      case 'labs': return `<div class="table-wrap"><table><thead><tr><th>Test</th><th>Doctor</th><th>Handling</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>${labs.map(l=>`<tr><td>${l.test}</td><td>${helpers.doctor(l.doctor).name}</td><td>${l.handling}</td><td><span class="badge badge-${helpers.badge(l.status)}">${l.status}</span></td><td>${helpers.date(l.date)}</td></tr>`).join('') || '<tr><td colspan=5 class="muted">No lab tests.</td></tr>'}</tbody></table></div>`;
      case 'therapy': return `<div class="table-wrap"><table><thead><tr><th>Type</th><th>Therapist</th><th>Date</th><th>Payment</th><th>Status</th></tr></thead>
        <tbody>${th.map(t=>`<tr><td>${t.type}</td><td>${helpers.therapist(t.therapist).name}</td><td>${helpers.date(t.date)} ${t.time}</td><td><span class="badge badge-${helpers.badge(t.payment)}">${t.payment}</span></td><td>${t.status}</td></tr>`).join('') || '<tr><td colspan=5 class="muted">No therapy sessions.</td></tr>'}</tbody></table></div>`;
      case 'communications': return `
        <div class="timeline-item"><div class="t-title">Appointment confirmation email sent</div><div class="t-meta">${helpers.date(p.lastVisit)}</div></div>
        <div class="timeline-item"><div class="t-title">WhatsApp reminder delivered</div><div class="t-meta">${helpers.date(p.lastVisit)}</div></div>
        <div style="margin-top:10px;"><button class="btn btn-sm">Send Email</button> <button class="btn btn-sm">Send WhatsApp</button></div>`;
      default: return '';
    }
  };

  return `
    <button class="btn btn-sm" style="margin-bottom:14px;" onclick="closePatientFile()">&larr; Back to Patients</button>
    <div class="patient-file">
      <div class="side">
        <div class="card">
          <div style="font-weight:700;font-size:16px;">${p.name}</div>
          <div class="muted" style="font-size:12.5px;">${p.mr}</div>
          <div style="margin-top:10px;font-size:13px;">${p.phone}<br>${p.email}</div>
          <div style="margin-top:10px;"><span class="badge badge-${helpers.badge(p.status)}">${p.status}</span></div>
        </div>
        <div class="card">
          <div class="section-title" style="font-size:13px;">Outstanding Balance</div>
          <div style="font-size:22px;font-weight:700;color:${p.balance>0?'var(--red)':'var(--green)'};">${helpers.money(p.balance)}</div>
          ${p.balance>0?'<button class="btn btn-sm btn-primary" style="margin-top:8px;">Send Reminder</button>':''}
        </div>
      </div>
      <div>
        <div class="tabs">${tabs.map(t=>`<div class="tab ${state.patientFileTab===t?'active':''}" onclick="setPatientTab('${t}')">${tabLabel[t]}</div>`).join('')}</div>
        <div class="card">${tabContent()}</div>
      </div>
    </div>`;
}
function setPatientTab(t){ state.patientFileTab=t; render(); }

/* ---------- Receptionist ---------- */
function renderReceptionist(){
  const today='2026-07-18';
  const todays = DB.appointments.filter(a=>a.date===today);
  const cols = [
    {label:'Waiting', filter:a=>a.status==='Waiting'||a.status==='Checked-in'},
    {label:'Confirmed', filter:a=>a.status==='Confirmed'},
    {label:'No-show', filter:a=>a.status==='No-show'},
  ];
  return `
    <div class="toolbar">
      <select><option>All Doctors</option>${DB.doctors.map(d=>`<option>${d.name}</option>`).join('')}</select>
      <button class="btn btn-primary" style="margin-left:auto;" onclick="openModal('newAppointment')">+ Walk-in Booking</button>
    </div>
    <div class="grid grid-3">
      ${cols.map(c=>`
        <div class="card">
          <div class="section-title">${c.label}</div>
          ${todays.filter(c.filter).map(a=>`
            <div class="kanban-card">
              <div class="name">${helpers.patient(a.patient).name}</div>
              <div class="muted">${a.time} &middot; ${helpers.doctor(a.doctor).name}</div>
            </div>`).join('') || '<div class="muted" style="font-size:12.5px;">Empty</div>'}
        </div>`).join('')}
    </div>`;
}

/* ---------- Pipeline ---------- */
function renderPipeline(){
  return `
    <div class="kanban">
      ${DB.pipelineStages.map(stage=>`
        <div class="kanban-col">
          <h4>${stage}</h4>
          ${DB.pipeline.filter(c=>c.stage===stage).map(c=>`
            <div class="kanban-card">
              <div class="name">${helpers.patient(c.patient).name}</div>
              <div class="muted">${helpers.patient(c.patient).mr}</div>
              <select onchange="movePipeline('${c.id}', this.value)">
                ${DB.pipelineStages.map(s=>`<option ${s===stage?'selected':''}>${s}</option>`).join('')}
              </select>
            </div>`).join('')}
        </div>`).join('')}
    </div>`;
}
function movePipeline(id, stage){ const c=DB.pipeline.find(c=>c.id===id); if(c){ c.stage=stage; render(); } }

/* ---------- Follow-ups ---------- */
function renderFollowUps(){
  const items = DB.followUps;
  return `
    <div class="toolbar">
      <div class="chip-group">
        <div class="chip active">All</div><div class="chip">Pending</div><div class="chip">Completed</div>
      </div>
      <button class="btn btn-primary" style="margin-left:auto;">+ New Task</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th></th><th>Patient</th><th>Task</th><th>Due</th><th>Priority</th><th>Channel</th><th></th></tr></thead>
      <tbody>${items.map(f=>`
        <tr>
          <td><input type="checkbox" ${f.done?'checked':''} onchange="toggleFollowUp('${f.id}')"></td>
          <td>${helpers.patient(f.patient).name}</td>
          <td style="${f.done?'text-decoration:line-through;color:var(--muted);':''}">${f.task}</td>
          <td>${helpers.date(f.due)}</td>
          <td><span class="badge badge-${f.priority==='High'?'red':f.priority==='Medium'?'amber':'grey'}">${f.priority}</span></td>
          <td>${f.channel}</td>
          <td><button class="btn btn-sm">Send</button></td>
        </tr>`).join('')}</tbody>
    </table></div>`;
}
function toggleFollowUp(id){ const f=DB.followUps.find(f=>f.id===id); if(f){ f.done=!f.done; render(); } }

/* ---------- Billing ---------- */
function renderBilling(){
  const invs = DB.invoices;
  const unpaidTotal = invs.filter(i=>i.status==='Unpaid').reduce((s,i)=>s+i.amount,0);
  const paidTotal = invs.filter(i=>i.status==='Paid').reduce((s,i)=>s+i.amount,0);
  return `
    <div class="grid grid-3" style="margin-bottom:18px;">
      <div class="stat"><div class="label">Total Collected</div><div class="value">${helpers.money(paidTotal)}</div></div>
      <div class="stat"><div class="label">Outstanding Balance</div><div class="value" style="color:var(--red)">${helpers.money(unpaidTotal)}</div></div>
      <div class="stat"><div class="label">Unpaid Invoices</div><div class="value">${invs.filter(i=>i.status==='Unpaid').length}</div></div>
    </div>
    <div class="toolbar">
      <input type="text" class="search" placeholder="Search invoice, patient, doctor, service">
      <div class="filters-full" style="display:flex;gap:10px;">
        <select><option>All Status</option><option>Paid</option><option>Unpaid</option></select>
        <select><option>All Doctors</option>${DB.doctors.map(d=>`<option>${d.name}</option>`).join('')}</select>
      </div>
      <button class="btn filter-toggle" onclick="document.querySelector('.filters-full').classList.toggle('open')">Filter</button>
      <button class="btn btn-danger" style="margin-left:auto;" onclick="followUpUnpaid()">Follow Up Unpaid</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th><input type="checkbox"></th><th>Invoice</th><th>Patient</th><th>Doctor</th><th>Service</th><th>Amount</th><th>Status</th><th>Date</th><th></th></tr></thead>
      <tbody>${invs.map(i=>`
        <tr>
          <td><input type="checkbox"></td>
          <td>${i.number}</td><td>${helpers.patient(i.patient).name}</td><td>${helpers.doctor(i.doctor).name}</td>
          <td>${i.service}</td><td>${helpers.money(i.amount)}</td>
          <td><span class="badge badge-${helpers.badge(i.status)}">${i.status}</span></td>
          <td>${helpers.date(i.date)}</td>
          <td class="row-actions">
            ${i.status==='Unpaid'?`<button class="btn btn-sm btn-primary" onclick="markPaid('${i.id}')">Mark Paid</button>`:`<button class="btn btn-sm" onclick="markUnpaid('${i.id}')">Mark Unpaid</button>`}
          </td>
        </tr>`).join('')}</tbody>
    </table></div>`;
}
function markPaid(id){ const i=DB.invoices.find(i=>i.id===id); if(i){ i.status='Paid'; render(); } }
function markUnpaid(id){ const i=DB.invoices.find(i=>i.id===id); if(i){ i.status='Unpaid'; render(); } }
function followUpUnpaid(){ alert('Follow-up reminders queued for all unpaid invoices. Confirmation required before sending in production.'); }

/* ---------- Medications ---------- */
function renderMedications(){
  return `
    <div class="toolbar">
      <input type="text" class="search" placeholder="Search patient, MR, doctor, medicine">
      <select><option>All Stock</option><option>In Stock</option><option>Low Stock</option><option>Out of Stock</option></select>
      <button class="btn btn-primary" style="margin-left:auto;">+ New Prescription</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Medication</th><th>Patient</th><th>Doctor</th><th>Stock</th><th>Shopify</th><th>Status</th></tr></thead>
      <tbody>${DB.medications.map(m=>`
        <tr>
          <td>${m.name}</td><td>${helpers.patient(m.patient).name}</td><td>${helpers.doctor(m.doctor).name}</td>
          <td><span class="badge badge-${helpers.badge(m.stock)}">${m.stock}</span></td>
          <td>${m.shopify?'<span class="badge badge-blue">Linked</span>':'<span class="badge badge-grey">Not linked</span>'}</td>
          <td>${m.status}</td>
        </tr>`).join('')}</tbody>
    </table></div>`;
}

/* ---------- Labs ---------- */
function renderLabs(){
  return `
    <div class="toolbar">
      <input type="text" class="search" placeholder="Search MR number">
      <select><option>All Status</option><option>Awaiting Report</option><option>Sample Collected</option><option>Report Uploaded</option></select>
      <select><option>All Handling</option><option>Clinic Booking</option><option>Self-arranged</option></select>
      <button class="btn btn-primary" style="margin-left:auto;">+ New Lab Request</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Test</th><th>Patient</th><th>Doctor</th><th>Handling</th><th>Status</th><th>Date</th><th></th></tr></thead>
      <tbody>${DB.labTests.map(l=>`
        <tr>
          <td>${l.test}</td><td>${helpers.patient(l.patient).name}</td><td>${helpers.doctor(l.doctor).name}</td>
          <td>${l.handling}</td><td><span class="badge badge-${helpers.badge(l.status)}">${l.status}</span></td>
          <td>${helpers.date(l.date)}</td><td><button class="btn btn-sm">Upload Report</button></td>
        </tr>`).join('')}</tbody>
    </table></div>`;
}

/* ---------- Therapy ---------- */
function renderTherapy(){
  return `
    <div class="toolbar">
      <input type="text" class="search" placeholder="Search patient, therapy, doctor, therapist">
      <select><option>All Status</option><option>Scheduled</option><option>Completed</option></select>
      <button class="btn btn-primary" style="margin-left:auto;">+ Schedule Session</button>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Type</th><th>Patient</th><th>Therapist</th><th>Date</th><th>Payment</th><th>Status</th><th>Concern</th></tr></thead>
      <tbody>${DB.therapySessions.map(t=>`
        <tr>
          <td>${t.type}</td><td>${helpers.patient(t.patient).name}</td><td>${helpers.therapist(t.therapist).name}</td>
          <td>${helpers.date(t.date)} ${t.time}</td>
          <td><span class="badge badge-${helpers.badge(t.payment)}">${t.payment}</span></td>
          <td>${t.status}</td>
          <td>${t.concern?'<span class="badge badge-red">Flagged</span>':'<span class="badge badge-grey">None</span>'}</td>
        </tr>`).join('')}</tbody>
    </table></div>`;
}

/* ---------- Products ---------- */
function renderProducts(){
  return `
    <div class="toolbar"><input type="text" class="search" placeholder="Search products"><button class="btn" style="margin-left:auto;">Sync with Shopify</button></div>
    <div class="grid grid-3">${DB.products.map(p=>`
      <div class="card">
        <div style="font-weight:700;">${p.name}</div>
        <div class="muted" style="font-size:12.5px;margin:4px 0;">${p.variant}</div>
        <div style="font-size:16px;font-weight:700;">${helpers.money(p.price)}</div>
        <div style="margin-top:8px;display:flex;justify-content:space-between;">
          <span class="badge badge-${p.stock<10?'amber':'green'}">${p.stock} in stock</span>
          ${p.linked?'<span class="badge badge-blue">Rx linked</span>':'<span class="badge badge-grey">Unlinked</span>'}
        </div>
      </div>`).join('')}</div>`;
}

/* ---------- Resources ---------- */
function renderResources(){
  return `
    <div class="toolbar"><input type="text" class="search" placeholder="Search resources"><button class="btn btn-primary" style="margin-left:auto;">+ Add Resource</button></div>
    <div class="grid grid-3">${DB.resources.map(r=>`
      <div class="card">
        <span class="badge badge-blue">${r.type}</span>
        <div style="font-weight:700;margin-top:8px;">${r.title}</div>
        <div class="muted" style="font-size:12.5px;margin-top:4px;">${r.audience}</div>
      </div>`).join('')}</div>`;
}

/* ---------- Campaigns ---------- */
function renderCampaigns(){
  return `
    <div class="toolbar"><button class="btn btn-primary" style="margin-left:auto;">+ New Campaign</button></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Campaign</th><th>Audience</th><th>Status</th><th>Sent</th><th>Opened</th><th>Date</th></tr></thead>
      <tbody>${DB.campaigns.map(c=>`
        <tr><td>${c.name}</td><td>${c.audience}</td><td><span class="badge badge-${helpers.badge(c.status)}">${c.status}</span></td>
        <td>${c.sent}</td><td>${c.opened}</td><td>${c.date}</td></tr>`).join('')}</tbody>
    </table></div>`;
}

/* ---------- Reports ---------- */
function renderReports(){
  const revenue = DB.invoices.filter(i=>i.status==='Paid').reduce((s,i)=>s+i.amount,0);
  const outstanding = DB.invoices.filter(i=>i.status==='Unpaid').reduce((s,i)=>s+i.amount,0);
  return `
    <div class="grid grid-4" style="margin-bottom:18px;">
      <div class="stat"><div class="label">Total Patients</div><div class="value">${DB.patients.length}</div></div>
      <div class="stat"><div class="label">Total Appointments</div><div class="value">${DB.appointments.length}</div></div>
      <div class="stat"><div class="label">Revenue</div><div class="value">${helpers.money(revenue)}</div></div>
      <div class="stat"><div class="label">Outstanding</div><div class="value" style="color:var(--red)">${helpers.money(outstanding)}</div></div>
    </div>
    <div class="grid grid-2">
      <div class="card">
        <div class="section-title">Doctor Load</div>
        ${DB.doctors.map(d=>{
          const c = DB.appointments.filter(a=>a.doctor===d.id).length;
          return `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #eef1f5;font-size:13px;"><span>${d.name}</span><span>${c} appointments</span></div>`;
        }).join('')}
      </div>
      <div class="card">
        <div class="section-title">Treatment Mix</div>
        ${[...new Set(DB.patients.map(p=>p.treatment))].map(t=>{
          const c = DB.patients.filter(p=>p.treatment===t).length;
          return `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #eef1f5;font-size:13px;"><span>${t}</span><span>${c}</span></div>`;
        }).join('')}
      </div>
    </div>`;
}

/* ---------- Settings ---------- */
function renderSettings(){
  return `
    <div class="tabs">
      <div class="tab active">Users</div><div class="tab">Doctors</div><div class="tab">Therapists</div>
      <div class="tab">Session Types</div><div class="tab">Integrations</div><div class="tab">Documents</div><div class="tab" style="color:var(--red)">Danger Zone</div>
    </div>
    <div class="card">
      <div class="toolbar"><button class="btn btn-primary" style="margin-left:auto;">+ Add User</button></div>
      <div class="table-wrap" style="border:none;"><table>
        <thead><tr><th>Name</th><th>Role</th><th>Email</th><th></th></tr></thead>
        <tbody>${DB.users.map(u=>`<tr><td>${u.name}</td><td><span class="badge badge-blue">${u.role}</span></td><td>${u.email}</td><td><button class="btn btn-sm">Edit</button></td></tr>`).join('')}</tbody>
      </table></div>
    </div>
    <div class="card" style="margin-top:16px;">
      <div class="section-title">Integrations</div>
      <div class="grid grid-3">
        ${['Email (SMTP)','WhatsApp API','Google Gemini','OpenAI / Claude','Shopify','Payments (Stripe)'].map(n=>`
          <div class="card"><div style="font-weight:600;font-size:13px;">${n}</div><div class="muted" style="font-size:12px;margin:6px 0;">Not configured</div><button class="btn btn-sm">Configure</button></div>`).join('')}
      </div>
    </div>`;
}

/* ---------- Patient Portal ---------- */
function renderPortal(){
  const p = DB.patients[0];
  const invs = DB.invoices.filter(i=>i.patient===p.id);
  const appts = DB.appointments.filter(a=>a.patient===p.id);
  const meds = DB.medications.filter(m=>m.patient===p.id);
  const labs = DB.labTests.filter(l=>l.patient===p.id);
  return `
    <div class="card" style="margin-bottom:16px;">
      <div style="font-size:16px;font-weight:700;">Welcome back, ${p.name.split(' ')[0]}</div>
      <div class="muted" style="font-size:12.5px;">${p.mr} &middot; ${p.email}</div>
      <div class="grid grid-3" style="margin-top:14px;">
        <div class="stat"><div class="label">Amount Due</div><div class="value" style="color:${p.balance>0?'var(--red)':'var(--green)'}">${helpers.money(p.balance)}</div></div>
        <div class="stat"><div class="label">Next Appointment</div><div class="value" style="font-size:15px;">${appts[0]?helpers.date(appts[0].date):'None'}</div></div>
        <div class="stat"><div class="label">Active Medications</div><div class="value">${meds.length}</div></div>
      </div>
    </div>
    <div class="grid grid-2">
      <div class="card">
        <div class="section-title">My Sessions</div>
        ${appts.map(a=>`<div class="timeline-item"><div class="t-title">${a.type} with ${helpers.doctor(a.doctor).name}</div><div class="t-meta">${helpers.date(a.date)} at ${a.time} &middot; ${a.status}</div></div>`).join('') || '<div class="muted">No sessions.</div>'}
      </div>
      <div class="card">
        <div class="section-title">Billing</div>
        ${invs.map(i=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #eef1f5;font-size:13px;"><span>${i.service}</span><span><span class="badge badge-${helpers.badge(i.status)}">${i.status}</span> ${helpers.money(i.amount)}</span></div>`).join('')}
        ${p.balance>0?'<button class="btn btn-primary btn-sm" style="margin-top:10px;">Pay Online</button>':''}
      </div>
      <div class="card">
        <div class="section-title">Medications</div>
        ${meds.map(m=>`<div style="padding:7px 0;border-bottom:1px solid #eef1f5;font-size:13px;">${m.name} &middot; <span class="badge badge-${helpers.badge(m.stock)}">${m.stock}</span></div>`).join('') || '<div class="muted">None</div>'}
      </div>
      <div class="card">
        <div class="section-title">Lab Reports</div>
        ${labs.map(l=>`<div style="padding:7px 0;border-bottom:1px solid #eef1f5;font-size:13px;">${l.test} &middot; <span class="badge badge-${helpers.badge(l.status)}">${l.status}</span></div>`).join('') || '<div class="muted">None</div>'}
      </div>
    </div>`;
}

/* ---------- AI Assistant ---------- */
function renderAI(){
  const msgs = state.aiHistory.map(m=>{
    if(m.type==='confirm'){
      return `<div class="ai-confirm-card">
        <h4>Confirm action</h4>
        <table>${Object.entries(m.data).map(([k,v])=>`<tr><td class="muted">${k}</td><td>${v}</td></tr>`).join('')}</table>
        <button class="btn btn-primary btn-sm" onclick="confirmAIAction(${state.aiHistory.indexOf(m)})">Confirm &amp; Save</button>
        <button class="btn btn-sm" onclick="cancelAIAction(${state.aiHistory.indexOf(m)})">Cancel</button>
      </div>`;
    }
    return `<div class="ai-msg ${m.role}">${m.text}</div>`;
  }).join('');
  return `
    <div class="ai-wrap">
      <div class="ai-suggestions">
        ${['Show today\'s appointments','How many unpaid invoices do we have?','Book Emily Carter for a follow-up','Send unpaid invoice reminders to all overdue patients'].map(s=>`<div class="chip" onclick="askAI('${s.replace(/'/g,"\\'")}')">${s}</div>`).join('')}
      </div>
      <div class="ai-messages" id="aiMessages">
        ${msgs || '<div class="empty-state">Ask a question about appointments, patients, billing or request an action.</div>'}
      </div>
      <div class="ai-input-row">
        <input type="text" id="aiInput" placeholder="Ask the CRM assistant..." onkeydown="if(event.key==='Enter'){askAI(this.value); this.value='';}">
        <button class="btn btn-primary" onclick="const i=document.getElementById('aiInput'); askAI(i.value); i.value='';">Send</button>
      </div>
    </div>`;
}
function askAI(text){
  if(!text || !text.trim()) return;
  state.aiHistory.push({role:'user', text});
  const lower = text.toLowerCase();
  if(lower.includes('today') && lower.includes('appointment')){
    const today='2026-07-18';
    const list = DB.appointments.filter(a=>a.date===today);
    state.aiHistory.push({role:'assistant', text:`There are ${list.length} appointments today: `+list.map(a=>`${helpers.patient(a.patient).name} at ${a.time} with ${helpers.doctor(a.doctor).name}`).join('; ')+'.'});
  } else if(lower.includes('unpaid')){
    const unpaid = DB.invoices.filter(i=>i.status==='Unpaid');
    const total = unpaid.reduce((s,i)=>s+i.amount,0);
    if(lower.includes('remind') || lower.includes('follow')){
      state.aiHistory.push({type:'confirm', data:{
        'Action':'Send unpaid invoice reminders',
        'Recipients': unpaid.map(i=>helpers.patient(i.patient).name).join(', '),
        'Total outstanding': helpers.money(total),
        'Channel':'Email + WhatsApp'
      }});
    } else {
      state.aiHistory.push({role:'assistant', text:`There are ${unpaid.length} unpaid invoices totaling ${helpers.money(total)}.`});
    }
  } else if(lower.includes('book') || lower.includes('appointment for') || lower.includes('follow-up')){
    const match = DB.patients.find(p=>lower.includes(p.name.toLowerCase().split(' ')[0]));
    state.aiHistory.push({type:'confirm', data:{
      'Action':'Book appointment',
      'Patient': match?match.name:'Please specify patient',
      'Doctor': match?helpers.doctor(match.doctor).name:'-',
      'Type':'Follow-up',
      'Date/Time':'Next available slot'
    }});
  } else if(lower.includes('patient') && lower.includes('how many')){
    state.aiHistory.push({role:'assistant', text:`There are ${DB.patients.length} registered patients.`});
  } else {
    state.aiHistory.push({role:'assistant', text:"I can help with appointments, patients, billing and follow-ups. Try asking about today's schedule, unpaid invoices, or request to book an appointment."});
  }
  render();
  setTimeout(()=>{ const el=document.getElementById('aiMessages'); if(el) el.scrollTop = el.scrollHeight; }, 0);
}
function confirmAIAction(idx){
  const item = state.aiHistory[idx];
  state.aiHistory[idx] = {role:'assistant', text:'Action confirmed and saved: '+item.data['Action']+'.'};
  render();
}
function cancelAIAction(idx){
  state.aiHistory[idx] = {role:'assistant', text:'Action cancelled.'};
  render();
}

/* ---------- Modals ---------- */
function openModal(type){
  const container = document.getElementById('modalRoot');
  if(type==='newPatient'){
    container.innerHTML = `
      <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
        <div class="modal">
          <h2>Add Patient</h2>
          <div class="field-row">
            <div class="field"><label>Full Name</label><input type="text" id="np_name"></div>
            <div class="field"><label>Phone</label><input type="text" id="np_phone"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>Email</label><input type="text" id="np_email"></div>
            <div class="field"><label>Date of Birth</label><input type="date" id="np_dob"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>Gender</label><select id="np_gender"><option>Female</option><option>Male</option></select></div>
            <div class="field"><label>Parent / Guardian</label><input type="text" id="np_guardian"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>Source</label><select id="np_source"><option>Referral</option><option>Walk-in</option><option>Website</option><option>Social Media</option></select></div>
            <div class="field"><label>Assigned Doctor</label><select id="np_doctor">${DB.doctors.map(d=>`<option value="${d.id}">${d.name}</option>`).join('')}</select></div>
          </div>
          <div class="field"><label>Treatment / Notes</label><textarea id="np_notes" rows="2"></textarea></div>
          <div class="modal-actions">
            <button class="btn" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveNewPatient()">Save Patient</button>
          </div>
        </div>
      </div>`;
  } else if(type==='newAppointment'){
    container.innerHTML = `
      <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
        <div class="modal">
          <h2>New Appointment</h2>
          <div class="field"><label>Patient</label><select id="na_patient">${DB.patients.map(p=>`<option value="${p.id}">${p.name} (${p.mr})</option>`).join('')}</select></div>
          <div class="field-row">
            <div class="field"><label>Doctor</label><select id="na_doctor">${DB.doctors.map(d=>`<option value="${d.id}">${d.name}</option>`).join('')}</select></div>
            <div class="field"><label>Session Type</label><input type="text" id="na_type" value="Consultation"></div>
          </div>
          <div class="field-row">
            <div class="field"><label>Date</label><input type="date" id="na_date" value="2026-07-18"></div>
            <div class="field"><label>Time</label><input type="time" id="na_time" value="09:00"></div>
          </div>
          <div class="field"><label>Payment Method</label><select id="na_payment"><option>Paid</option><option>Unpaid</option></select></div>
          <div class="modal-actions">
            <button class="btn" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveNewAppointment()">Book Appointment</button>
          </div>
        </div>
      </div>`;
  }
}
function closeModal(){ document.getElementById('modalRoot').innerHTML=''; }
function saveNewPatient(){
  const id = 'p'+(DB.patients.length+1);
  DB.patients.push({
    id, mr: helpers.genMR(), name: document.getElementById('np_name').value || 'New Patient',
    phone: document.getElementById('np_phone').value, email: document.getElementById('np_email').value,
    dob: document.getElementById('np_dob').value || '2000-01-01', gender: document.getElementById('np_gender').value,
    guardian: document.getElementById('np_guardian').value, doctor: document.getElementById('np_doctor').value,
    source: document.getElementById('np_source').value, treatment: document.getElementById('np_notes').value || 'General',
    balance: 0, lastVisit: '2026-07-18', status:'Active'
  });
  closeModal(); state.route='patients'; render();
}
function saveNewAppointment(){
  const id = 'a'+(DB.appointments.length+1);
  DB.appointments.push({
    id, patient: document.getElementById('na_patient').value, doctor: document.getElementById('na_doctor').value,
    date: document.getElementById('na_date').value, time: document.getElementById('na_time').value,
    type: document.getElementById('na_type').value, duration:30, status:'Confirmed',
    payment: document.getElementById('na_payment').value
  });
  closeModal(); state.route='appointments'; render();
}

/* ---------- Global events ---------- */
function bindGlobalEvents(){
  document.querySelectorAll('[data-nav]').forEach(el=>{
    el.addEventListener('click', ()=> navigate(el.getAttribute('data-nav')));
  });
  const roleSelect = document.getElementById('roleSelect');
  if(roleSelect){
    roleSelect.addEventListener('change', e=>{ DB.currentRole = e.target.value; state.route='dashboard'; render(); });
  }
  const emTog = document.getElementById('emergencyToggle');
  if(emTog){
    emTog.addEventListener('change', e=>{ DB.emergencyMode = e.target.checked; render(); });
  }
}

document.addEventListener('DOMContentLoaded', render);
