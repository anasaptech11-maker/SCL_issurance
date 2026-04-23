
  document.getElementById('year').textContent = new Date().getFullYear();
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });
  function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }

  function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    var target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    var navEl = document.getElementById('nav-' + page);
    if (navEl) navEl.classList.add('active');
    document.getElementById('mobileMenu').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ====== PLANS PAGE: Categories with companies & tiers ====== */
  var CATEGORIES = [
   { id: 'cars',     title: 'Cars & Sedans',                sub: 'Honda Civic, Toyota Corolla, Suzuki Cultus and other family cars', img: 'cars_pk.png',
    companies: [
        { name: 'EFU General', tag: 'Pakistan\'s largest insurer', tiers: [
          { tier: 'basic', feats: 'Third-party liability + roadside', price: 'PKR 4,200/mo' },
          { tier: 'standard', feats: 'Comprehensive + theft + 24/7 RSA', price: 'PKR 8,500/mo' },
          { tier: 'premium', feats: 'Zero depreciation + new car replace', price: 'PKR 13,400/mo' }
        ]},
        { name: 'Adamjee Insurance', tag: 'Trusted since 1960', tiers: [
          { tier: 'basic', feats: 'Liability + personal accident', price: 'PKR 4,500/mo' },
          { tier: 'standard', feats: 'Full comprehensive + snatching', price: 'PKR 8,900/mo' },
          { tier: 'premium', feats: 'All-inclusive + family driver cover', price: 'PKR 14,200/mo' }
        ]},
        { name: 'Jubilee General', tag: 'Aga Khan Group', tiers: [
          { tier: 'basic', feats: 'Mandatory third-party only', price: 'PKR 4,100/mo' },
          { tier: 'standard', feats: 'Comprehensive + premium workshop', price: 'PKR 9,200/mo' },
          { tier: 'premium', feats: 'Premium full-service nationwide', price: 'PKR 13,800/mo' }
        ]},
        { name: 'TPL Direct', tag: 'Digital-first insurance', tiers: [
          { tier: 'basic', feats: 'Liability + tracking device', price: 'PKR 4,800/mo' },
          { tier: 'standard', feats: 'Comp + tracker + app claims', price: 'PKR 9,500/mo' },
          { tier: 'premium', feats: 'Concierge + tracker + zero excess', price: 'PKR 14,500/mo' }
        ]}
      ]
    },
     { id: 'suvs',     title: 'SUVs & Crossovers',            sub: 'Fortuner, Tucson, BR-V — built for our roads', img: 'Suvs.png',
    companies: [
        { name: 'EFU General', tag: 'Pakistan\'s largest insurer', tiers: [
          { tier: 'basic', feats: 'Liability + RSA', price: 'PKR 6,500/mo' },
          { tier: 'standard', feats: 'Comprehensive + off-road cover', price: 'PKR 11,200/mo' },
          { tier: 'premium', feats: 'Zero dep + new SUV replace', price: 'PKR 17,500/mo' }
        ]},
        { name: 'Adamjee Insurance', tag: 'Trusted since 1960', tiers: [
          { tier: 'basic', feats: 'Liability + accident cover', price: 'PKR 6,800/mo' },
          { tier: 'standard', feats: 'Comp + theft + snatching', price: 'PKR 11,800/mo' },
          { tier: 'premium', feats: 'All-inclusive concierge service', price: 'PKR 18,200/mo' }
        ]},
        { name: 'Jubilee General', tag: 'Aga Khan Group', tiers: [
          { tier: 'basic', feats: 'Mandatory third-party', price: 'PKR 6,300/mo' },
          { tier: 'standard', feats: 'Comp + premium workshop', price: 'PKR 11,500/mo' },
          { tier: 'premium', feats: 'Full-service + replacement', price: 'PKR 17,900/mo' }
        ]},
        { name: 'TPL Direct', tag: 'Digital-first insurance', tiers: [
          { tier: 'basic', feats: 'Liability + GPS tracker', price: 'PKR 7,000/mo' },
          { tier: 'standard', feats: 'Comp + tracker + app claims', price: 'PKR 12,300/mo' },
          { tier: 'premium', feats: 'Concierge + zero excess', price: 'PKR 18,800/mo' }
        ]}
      ]
    },
    { id: 'trucks',   title: 'Trucks & Commercial Vehicles', sub: 'Pickup, Shahzore, Hino — protect your livelihood', img: 'trucks_pk.png',
    companies: [
        { name: 'EFU General', tag: 'Pakistan\'s largest insurer', tiers: [
          { tier: 'basic', feats: 'Commercial liability', price: 'PKR 8,500/mo' },
          { tier: 'standard', feats: 'Comp + cargo cover', price: 'PKR 14,200/mo' },
          { tier: 'premium', feats: 'Fleet discount + full cargo', price: 'PKR 21,500/mo' }
        ]},
        { name: 'Adamjee Insurance', tag: 'Trusted since 1960', tiers: [
          { tier: 'basic', feats: 'Liability + driver accident', price: 'PKR 8,800/mo' },
          { tier: 'standard', feats: 'Comp + cargo + workshop', price: 'PKR 14,800/mo' },
          { tier: 'premium', feats: 'Fleet + nationwide RSA', price: 'PKR 22,400/mo' }
        ]},
        { name: 'Jubilee General', tag: 'Aga Khan Group', tiers: [
          { tier: 'basic', feats: 'Third-party only', price: 'PKR 8,200/mo' },
          { tier: 'standard', feats: 'Comp + cargo coverage', price: 'PKR 14,500/mo' },
          { tier: 'premium', feats: 'Premium fleet management', price: 'PKR 22,000/mo' }
        ]},
        { name: 'TPL Direct', tag: 'Digital-first insurance', tiers: [
          { tier: 'basic', feats: 'Liability + tracker', price: 'PKR 9,200/mo' },
          { tier: 'standard', feats: 'Comp + cargo + tracking', price: 'PKR 15,500/mo' },
          { tier: 'premium', feats: 'Full fleet + dispatcher app', price: 'PKR 23,200/mo' }
        ]}
      ]
    },
    { id: 'bikes',    title: 'Motorcycles',                  sub: 'Honda CD70, CG125, Yamaha YBR — coverage for every rider', img: 'motorcycles_pk.png',
    companies: [
        { name: 'EFU General', tag: 'Pakistan\'s largest insurer', tiers: [
          { tier: 'basic', feats: 'Third-party only', price: 'PKR 950/mo' },
          { tier: 'standard', feats: 'Comp + theft cover', price: 'PKR 1,800/mo' },
          { tier: 'premium', feats: 'Comp + rider accident + helmet', price: 'PKR 2,800/mo' }
        ]},
        { name: 'Adamjee Insurance', tag: 'Trusted since 1960', tiers: [
          { tier: 'basic', feats: 'Liability + rider PA', price: 'PKR 1,000/mo' },
          { tier: 'standard', feats: 'Comp + theft + snatching', price: 'PKR 2,000/mo' },
          { tier: 'premium', feats: 'Full cover + accessories', price: 'PKR 3,100/mo' }
        ]},
        { name: 'Jubilee General', tag: 'Aga Khan Group', tiers: [
          { tier: 'basic', feats: 'Mandatory liability', price: 'PKR 900/mo' },
          { tier: 'standard', feats: 'Comp + theft', price: 'PKR 1,900/mo' },
          { tier: 'premium', feats: 'Full + premium service', price: 'PKR 3,000/mo' }
        ]},
        { name: 'TPL Direct', tag: 'Digital-first insurance', tiers: [
          { tier: 'basic', feats: 'Liability + GPS tracker', price: 'PKR 1,150/mo' },
          { tier: 'standard', feats: 'Comp + tracker + app', price: 'PKR 2,200/mo' },
          { tier: 'premium', feats: 'Full + zero excess + RSA', price: 'PKR 3,400/mo' }
        ]}
      ]
    },
    { id: 'electric', title: 'Electric Vehicles',            sub: 'MG ZS EV, BYD, Audi e-tron — battery & charger included', img: 'Tesla car.png',
    companies: [
        { name: 'EFU General', tag: 'Pakistan\'s largest insurer', tiers: [
          { tier: 'basic', feats: 'Liability + battery basic', price: 'PKR 7,500/mo' },
          { tier: 'standard', feats: 'Comp + full battery cover', price: 'PKR 12,800/mo' },
          { tier: 'premium', feats: 'Premium + charger + RSA EV', price: 'PKR 19,500/mo' }
        ]},
        { name: 'Adamjee Insurance', tag: 'Trusted since 1960', tiers: [
          { tier: 'basic', feats: 'Liability + battery limited', price: 'PKR 7,800/mo' },
          { tier: 'standard', feats: 'Comp + battery + charger', price: 'PKR 13,200/mo' },
          { tier: 'premium', feats: 'All-inclusive EV cover', price: 'PKR 20,100/mo' }
        ]},
        { name: 'Jubilee General', tag: 'Aga Khan Group', tiers: [
          { tier: 'basic', feats: 'Liability + battery basic', price: 'PKR 7,400/mo' },
          { tier: 'standard', feats: 'Comp + battery + premium WS', price: 'PKR 13,000/mo' },
          { tier: 'premium', feats: 'Premium full EV cover', price: 'PKR 19,800/mo' }
        ]},
        { name: 'TPL Direct', tag: 'Digital-first insurance', tiers: [
          { tier: 'basic', feats: 'Liability + tracker + battery', price: 'PKR 8,200/mo' },
          { tier: 'standard', feats: 'Comp + EV RSA + tracker', price: 'PKR 13,800/mo' },
          { tier: 'premium', feats: 'Concierge + zero excess EV', price: 'PKR 20,800/mo' }
        ]}
      ]
    },
    { id: 'cycles',   title: 'Bicycles & E-Bikes',           sub: 'Road, mountain & electric bicycles — theft + accident', img: 'bikes.jpg',
    companies: [
        { name: 'EFU General', tag: 'Pakistan\'s largest insurer', tiers: [
          { tier: 'basic', feats: 'Third-party + theft basic', price: 'PKR 450/mo' },
          { tier: 'standard', feats: 'Comp + theft + accident', price: 'PKR 850/mo' },
          { tier: 'premium', feats: 'Premium + accessories cover', price: 'PKR 1,400/mo' }
        ]},
        { name: 'Adamjee Insurance', tag: 'Trusted since 1960', tiers: [
          { tier: 'basic', feats: 'Liability + theft', price: 'PKR 500/mo' },
          { tier: 'standard', feats: 'Comp + accident + helmet', price: 'PKR 900/mo' },
          { tier: 'premium', feats: 'Full + worldwide cover', price: 'PKR 1,500/mo' }
        ]},
        { name: 'Jubilee General', tag: 'Aga Khan Group', tiers: [
          { tier: 'basic', feats: 'Theft + basic accident', price: 'PKR 420/mo' },
          { tier: 'standard', feats: 'Comp + accident + RSA', price: 'PKR 880/mo' },
          { tier: 'premium', feats: 'Premium + all accessories', price: 'PKR 1,450/mo' }
        ]},
        { name: 'TPL Direct', tag: 'Digital-first insurance', tiers: [
          { tier: 'basic', feats: 'Theft + GPS tracker', price: 'PKR 550/mo' },
          { tier: 'standard', feats: 'Comp + tracker + accident', price: 'PKR 950/mo' },
          { tier: 'premium', feats: 'Full + zero excess + app', price: 'PKR 1,600/mo' }
        ]}
      ]
    }
  ];

  function renderCategories() {
    var wrap = document.getElementById('catSection');
    if (!wrap) return;
    wrap.innerHTML = CATEGORIES.map(function(c, idx) {
      var companiesHTML = c.companies.map(function(co) {
        var tiersHTML = co.tiers.map(function(t) {
          var planName = t.tier.charAt(0).toUpperCase() + t.tier.slice(1) + ' — ' + c.title;
          return '<div class="tier-row">'
            + '<span class="tier-name ' + t.tier + '">' + t.tier.toUpperCase() + '</span>'
            + '<span class="tier-feats">' + t.feats + '</span>'
            + '<span class="tier-price">' + t.price + '</span>'
            + '<button class="tier-buy" onclick="buyPlan(\'' + planName + '\',\'' + co.name + '\',\'' + t.price + '\')">Buy</button>'
            + '</div>';
        }).join('');
        var brand = { mark: 'SCL', sub: 'INS', cls: 'efu' };
        if (/EFU/i.test(co.name))      brand = { mark: 'EFU', sub: 'GENERAL', cls: 'efu' };
        else if (/Adamjee/i.test(co.name)) brand = { mark: 'Adamjee', sub: 'INSURANCE', cls: 'adamjee' };
        else if (/Jubilee/i.test(co.name)) brand = { mark: 'Jubilee', sub: 'GENERAL', cls: 'jubilee' };
        else if (/TPL/i.test(co.name))     brand = { mark: 'TPL', sub: 'DIRECT', cls: 'tpl' };
        return '<div class="company-card" data-company="' + co.name + '">'
          + '<div class="company-head">'
          + '<div class="company-logo ' + brand.cls + '"><div><div class="lg-mark">' + brand.mark + '</div><div class="lg-sub">' + brand.sub + '</div></div></div>'
          + '<div><div class="company-name">' + co.name + '</div><div class="company-tag">' + co.tag + '</div></div>'
          + '</div>' + tiersHTML + '</div>';
      }).join('');
      return '<div class="cat-card' + (idx === 0 ? ' open' : '') + '" data-id="' + c.id + '">'
        + '<div class="cat-head" onclick="toggleCat(\'' + c.id + '\')">'
        + '<img class="cat-head-pic" src="' + c.img + '" alt="">'
        + '<div class="cat-head-info"><h3>' + c.title + '</h3><p>' + c.sub + '</p></div>'
        + '<button class="cat-toggle" type="button">+</button></div>'
        + '<div class="cat-body"><p class="cat-body-intro">Compare 4 leading Pakistani insurers — Basic, Standard and Premium tiers.</p>'
        + '<div class="companies-grid">' + companiesHTML + '</div></div></div>';
    }).join('');
  }
  function toggleCat(id) {
    var card = document.querySelector('.cat-card[data-id="' + id + '"]');
    if (card) card.classList.toggle('open');
  }
  renderCategories();

  /* ====== CONTACT FORM (localStorage) ====== */
  function submitForm(e) {
    e.preventDefault();
    var form = document.getElementById('contactForm');
    var data = {
      id: Date.now(),
      type: 'contact',
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      vehicleType: form.vehicleType.value,
      message: form.message.value,
      date: new Date().toLocaleDateString('en-GB', { year:'numeric', month:'short', day:'numeric' })
    };
    var stored = JSON.parse(localStorage.getItem('scl_contacts') || '[]');
    stored.unshift(data);
    localStorage.setItem('scl_contacts', JSON.stringify(stored));
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('successState').style.display = 'flex';
  }
  function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('successState').style.display = 'none';
  }

  /* ====== QUOTE FORM (localStorage) ====== */
  function submitQuote(e) {
    e.preventDefault();
    var addons = [];
    document.querySelectorAll('#quoteForm input[type="checkbox"]:checked').forEach(function(cb) { addons.push(cb.value); });
    var plan = document.querySelector('input[name="qplan"]:checked');
    var ref = 'SCL-' + Date.now().toString().slice(-6);
    var data = {
      id: Date.now(), refNum: ref, type: 'full-quote',
      date: new Date().toLocaleDateString('en-GB', { year:'numeric', month:'short', day:'numeric' }),
      personal: {
        firstName: getVal('q-fname'), lastName: getVal('q-lname'), email: getVal('q-email'),
        phone: getVal('q-phone'), dob: getVal('q-dob'), address: getVal('q-address'),
        city: getVal('q-city'), state: getVal('q-state'), zip: getVal('q-zip')
      },
      vehicle: {
        year: getVal('q-year'), make: getVal('q-make'), model: getVal('q-model'),
        miles: getVal('q-miles'), vin: getVal('q-vin'), use: getVal('q-use')
      },
      driver: {
        license: getVal('q-license'), yearsLicensed: getVal('q-years'),
        record: getVal('q-record'), currentlyInsured: getVal('q-insured')
      },
      plan: plan ? plan.value : 'Standard — PKR 8,900/mo',
      addons: addons, notes: getVal('q-notes')
    };
    var stored = JSON.parse(localStorage.getItem('scl_quotes') || '[]');
    stored.unshift(data);
    localStorage.setItem('scl_quotes', JSON.stringify(stored));
    document.getElementById('quoteRef').textContent = '#' + ref;
    document.getElementById('quoteFormWrap').style.display = 'none';
    document.getElementById('quoteSuccess').classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function getVal(id) { var el = document.getElementById(id); return el ? el.value : ''; }
  function newQuote() {
    document.getElementById('quoteForm').reset();
    document.getElementById('quoteFormWrap').style.display = 'block';
    document.getElementById('quoteSuccess').classList.remove('show');
  }

  /* ====== BUY PLAN (localStorage) ====== */
  function parsePKR(str) {
    var m = String(str).replace(/[^0-9.]/g, '');
    return parseFloat(m) || 0;
  }
  function fmtPKR(n) {
    return 'PKR ' + Math.round(n).toLocaleString('en-PK');
  }
  function buyPlan(planName, companyName, price) {
    var basePremium = parsePKR(price);
    var serviceFee = 250;
    var subtotal = basePremium + serviceFee;
    var tax = Math.round(subtotal * 0.05);
    var total = subtotal + tax;
    sessionStorage.setItem('scl_pending_purchase', JSON.stringify({
      planName: planName, companyName: companyName, priceLabel: price,
      basePremium: basePremium, serviceFee: serviceFee, tax: tax, total: total
    }));
    document.getElementById('buy-plan-name').textContent = planName;
    document.getElementById('buy-company-name').textContent = 'Provider: ' + companyName;
    document.getElementById('buy-premium').textContent = fmtPKR(basePremium);
    document.getElementById('buy-tax').textContent = fmtPKR(tax);
    document.getElementById('buy-total').textContent = fmtPKR(total);
    document.getElementById('purchaseFormWrap').style.display = 'block';
    document.getElementById('purchaseSuccess').classList.remove('show');
    document.getElementById('buyForm').reset();
    var current = localStorage.getItem('scl_current_user');
    if (current) {
      try {
        var u = JSON.parse(current);
        document.getElementById('b-name').value = (u.firstName || '') + ' ' + (u.lastName || '');
        document.getElementById('b-email').value = u.email || '';
        document.getElementById('b-phone').value = u.phone || '';
      } catch(e){}
    }
    navigate('purchase');
  }
  function confirmPurchase(e) {
    e.preventDefault();
    var pending = JSON.parse(sessionStorage.getItem('scl_pending_purchase') || '{}');
    var pay = document.querySelector('input[name="paymethod"]:checked');
    var policy = 'POL-' + Date.now().toString().slice(-7);
    var record = {
      id: Date.now(),
      policyNumber: policy,
      planName: pending.planName,
      companyName: pending.companyName,
      priceLabel: pending.priceLabel,
      total: pending.total,
      customer: {
        name: document.getElementById('b-name').value,
        email: document.getElementById('b-email').value,
        phone: document.getElementById('b-phone').value,
        cnic: document.getElementById('b-cnic').value,
        city: document.getElementById('b-city').value
      },
      paymentMethod: pay ? pay.value : 'Card',
      purchasedAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-GB', { year:'numeric', month:'short', day:'numeric' })
    };
    var stored = JSON.parse(localStorage.getItem('scl_purchases') || '[]');
    stored.unshift(record);
    localStorage.setItem('scl_purchases', JSON.stringify(stored));
    sessionStorage.removeItem('scl_pending_purchase');

    document.getElementById('purchaseRef').textContent = '#' + policy;
    document.getElementById('ps-plan').textContent = record.planName;
    document.getElementById('ps-company').textContent = record.companyName;
    document.getElementById('ps-name').textContent = record.customer.name;
    document.getElementById('ps-pay').textContent = record.paymentMethod;
    document.getElementById('ps-total').textContent = fmtPKR(record.total);
    document.getElementById('purchaseFormWrap').style.display = 'none';
    document.getElementById('purchaseSuccess').classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ====== AUTH (localStorage) ====== */
  function togglePw(id, btn) {
    var input = document.getElementById(id);
    if (input.type === 'password') { input.type = 'text'; btn.textContent = 'Hide'; }
    else { input.type = 'password'; btn.textContent = 'Show'; }
  }
  function showLogin() {
    document.getElementById('signupCard').style.display = 'none';
    document.getElementById('loginCard').style.display = 'block';
    document.getElementById('loginError').classList.remove('show');
  }
  function showSignup() {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('signupCard').style.display = 'block';
    document.getElementById('signupError').classList.remove('show');
  }
  function handleSignup(e) {
    e.preventDefault();
    var errEl = document.getElementById('signupError');
    var sucEl = document.getElementById('signupSuccess');
    errEl.classList.remove('show'); sucEl.classList.remove('show');
    var fname = getVal('su-fname').trim();
    var lname = getVal('su-lname').trim();
    var email = getVal('su-email').trim().toLowerCase();
    var phone = getVal('su-phone').trim();
    var dob = getVal('su-dob');
    var pw = getVal('su-password');
    var pw2 = getVal('su-confirm');
    if (pw !== pw2) { errEl.textContent = 'Passwords do not match.'; errEl.classList.add('show'); return; }
    if (pw.length < 8) { errEl.textContent = 'Password must be at least 8 characters.'; errEl.classList.add('show'); return; }
    var users = JSON.parse(localStorage.getItem('scl_users') || '[]');
    if (users.find(function(u){ return u.email === email; })) {
      errEl.textContent = 'An account with this email already exists. Please log in.';
      errEl.classList.add('show'); return;
    }
    var user = { id: Date.now(), firstName: fname, lastName: lname, email: email, phone: phone, dob: dob, password: pw, created: new Date().toLocaleDateString('en-GB') };
    users.push(user);
    localStorage.setItem('scl_users', JSON.stringify(users));
    localStorage.setItem('scl_current_user', JSON.stringify(user));
    updateNavForUser(user);
    sucEl.textContent = 'Account created! Welcome, ' + fname + '!';
    sucEl.classList.add('show');
    document.getElementById('signupForm').reset();
    setTimeout(function(){ navigate('home'); }, 1500);
  }
  function handleLogin(e) {
    e.preventDefault();
    var errEl = document.getElementById('loginError');
    errEl.classList.remove('show');
    var email = getVal('li-email').trim().toLowerCase();
    var pw = getVal('li-password');
    var users = JSON.parse(localStorage.getItem('scl_users') || '[]');
    var user = users.find(function(u){ return u.email === email && u.password === pw; });
    if (!user) { errEl.textContent = 'Incorrect email or password.'; errEl.classList.add('show'); return; }
    localStorage.setItem('scl_current_user', JSON.stringify(user));
    updateNavForUser(user);
    navigate('home');
  }
  function logout() {
    localStorage.removeItem('scl_current_user');
    updateNavForUser(null);
    navigate('home');
  }
  function updateNavForUser(user) {
    var btn = document.getElementById('signupNavBtn');
    var mBtn = document.getElementById('mobileSignupBtn');
    if (user) {
      btn.textContent = ' ' + user.firstName + ' • Logout';
      btn.onclick = function(e){ e.stopPropagation(); logout(); };
      if (mBtn) { mBtn.textContent = 'Logout (' + user.firstName + ')'; mBtn.onclick = logout; }
    } else {
      btn.textContent = 'Sign Up';
      btn.onclick = function(){ navigate('signup'); };
      if (mBtn) { mBtn.textContent = 'Sign Up'; mBtn.onclick = function(){ navigate('signup'); }; }
    }
  }
  (function init() {
    var cur = localStorage.getItem('scl_current_user');
    if (cur) { try { updateNavForUser(JSON.parse(cur)); } catch(e){} }
  })();