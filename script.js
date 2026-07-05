  const titles = {
    dashboard:["Dashboard","Overview of today's institute activity"],
    students:["Students","Manage student records and academic status"],
    admissions:["Admissions","Track applications from enquiry to confirmation"],
    courses:["Courses","Programs currently offered by your institute"],
    fees:["Fees","Monitor collections, dues and payment history"],
    attendance:["Attendance","Daily and weekly attendance across classes"],
    support:["Support","Help desk tickets raised by students and staff"],
    settings:["Settings","Configure institute profile and preferences"]
  };

  function goTo(target){
    document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === target));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.target === target));
    document.getElementById('pageTitle').textContent = titles[target][0];
    document.getElementById('pageSub').textContent = titles[target][1];
  }

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.target));
  });

  
  document.querySelectorAll('.switch').forEach(sw => {
    sw.addEventListener('click', () => sw.classList.toggle('on'));
  });
