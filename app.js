/**
 * NEUROMIND SOLUTIONS — CONTROLLER & INTERACTIVE HARDWARE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. HERO HARDWARE DOCK 3-PILLAR CONTROLLER
     ========================================================================== */
  const dockTabs = document.querySelectorAll('.dock-tab');
  const dockScreenPOS = document.getElementById('dockScreenPOS');
  const dockScreenInventory = document.getElementById('dockScreenInventory');
  const dockScreenWhatsapp = document.getElementById('dockScreenWhatsapp');

  const screens = {
    pos: dockScreenPOS,
    inventory: dockScreenInventory,
    whatsapp: dockScreenWhatsapp
  };

  dockTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetMode = tab.getAttribute('data-mode');

      dockTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      Object.values(screens).forEach(s => {
        if (s) s.classList.remove('active');
      });

      if (screens[targetMode]) {
        screens[targetMode].classList.add('active');
      }
    });
  });

  // Hero POS Scan Button Interaction
  const heroScanItemBtn = document.getElementById('heroScanItemBtn');
  const heroMiniCart = document.getElementById('heroMiniCart');
  const heroDockTotal = document.getElementById('heroDockTotal');

  const sampleScanItems = [
    { name: "Thermal Paper Roll 10pk", price: 250 },
    { name: "USB Barcode Stand", price: 380 },
    { name: "Receipt Printer Ribbon", price: 190 }
  ];
  let scanIndex = 0;
  let heroTotal = 1300;

  if (heroScanItemBtn) {
    heroScanItemBtn.addEventListener('click', () => {
      const item = sampleScanItems[scanIndex % sampleScanItems.length];
      scanIndex++;
      heroTotal += item.price;

      const newRow = document.createElement('div');
      newRow.className = 'mini-cart-row';
      newRow.innerHTML = `<span>1x ${item.name} (₹${item.price})</span><span class="text-forest">OK ✓</span>`;
      heroMiniCart.appendChild(newRow);
      heroMiniCart.scrollTop = heroMiniCart.scrollHeight;

      heroDockTotal.textContent = `₹${heroTotal.toLocaleString('en-IN')}.00`;
      heroScanItemBtn.textContent = "✓ SCANNED (0.04s)";
      setTimeout(() => {
        heroScanItemBtn.textContent = "⚡ CLICK TO SCAN ITEM";
      }, 1000);
    });
  }

  // Hero Inventory Simulate Stock
  const heroSimulateStockBtn = document.getElementById('heroSimulateStockBtn');
  const godownStockA = document.getElementById('godownStockA');
  let stockCountA = 142;

  if (heroSimulateStockBtn) {
    heroSimulateStockBtn.addEventListener('click', () => {
      if (stockCountA > 5) {
        stockCountA -= 3;
        godownStockA.textContent = `${stockCountA} in stock`;
        heroSimulateStockBtn.textContent = "✓ SALE RECORDED (-3)";
        setTimeout(() => {
          heroSimulateStockBtn.textContent = "🔄 SIMULATE SALE DEDUCTION";
        }, 1000);
      }
    });
  }

  // Hero WhatsApp Bot Test Message
  const heroSendTestMsgBtn = document.getElementById('heroSendTestMsgBtn');
  const miniWhatsappChat = document.querySelector('.mini-whatsapp-chat');

  if (heroSendTestMsgBtn && miniWhatsappChat) {
    heroSendTestMsgBtn.addEventListener('click', () => {
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-msg client-msg';
      userMsg.innerHTML = `"Send latest price list for barcodes"<span class="msg-time">Just now</span>`;
      miniWhatsappChat.appendChild(userMsg);

      setTimeout(() => {
        const botReply = document.createElement('div');
        botReply.className = 'chat-msg bot-msg';
        botReply.innerHTML = `"📋 Catalog &amp; wholesale rates sent (PDF). Order link active."<span class="msg-time">Just now (0.4s)</span>`;
        miniWhatsappChat.appendChild(botReply);
        miniWhatsappChat.scrollTop = miniWhatsappChat.scrollHeight;
      }, 400);
    });
  }

  /* ==========================================================================
     2. METRICS COUNTER ANIMATION ("0+" to "50+")
     ========================================================================== */
  function initMetricsCounter() {
    const counterEl = document.getElementById('metricCounter50');
    if (!counterEl) return;

    const target = parseInt(counterEl.getAttribute('data-target') || '50', 10);
    const suffix = counterEl.getAttribute('data-suffix') || '+';
    const duration = 1600; // ms
    let hasAnimated = false;

    // Respect user's reduced motion setting
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      counterEl.textContent = `${target}${suffix}`;
      return;
    }

    function animateCount() {
      if (hasAnimated) return;
      hasAnimated = true;

      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out cubic curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);

        counterEl.textContent = `${currentCount}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counterEl.textContent = `${target}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    }

    // Trigger smoothly via IntersectionObserver when viewed or on page load
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      observer.observe(counterEl);
    } else {
      animateCount();
    }
  }

  initMetricsCounter();

  /* ==========================================================================
     3. 3-STEP INSTANT QUOTE MODAL CONTROLLER
     ========================================================================== */
  const quoteModal = document.getElementById('quoteModal');
  const openModalBtns = [
    document.getElementById('openQuoteModalBtn'),
    document.getElementById('heroStartProjectBtn'),
    document.getElementById('ctaStartProjectBtn'),
    document.getElementById('mobileStartProjectBtn')
  ];
  const closeQuoteModal = document.getElementById('closeQuoteModal');
  const quoteForm = document.getElementById('quoteForm');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');
  const formSteps = document.querySelectorAll('.form-step');

  let currentStep = 1;

  const updateStepUI = () => {
    formSteps.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'), 10);
      step.classList.toggle('active', stepNum === currentStep);
    });

    if (modalPrevBtn) modalPrevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    if (currentStep === 3) {
      if (modalNextBtn) modalNextBtn.style.display = 'none';
      if (modalSubmitBtn) modalSubmitBtn.style.display = 'inline-flex';
    } else {
      if (modalNextBtn) modalNextBtn.style.display = 'inline-flex';
      if (modalSubmitBtn) modalSubmitBtn.style.display = 'none';
    }
  };

  openModalBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        currentStep = 1;
        updateStepUI();
        quoteModal.classList.add('active');
      });
    }
  });

  if (closeQuoteModal) {
    closeQuoteModal.addEventListener('click', () => {
      quoteModal.classList.remove('active');
    });
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        quoteModal.classList.remove('active');
      }
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => {
      if (currentStep === 2) {
        const bName = document.getElementById('businessName').value.trim();
        if (!bName) {
          alert("Please enter your business name.");
          return;
        }
      }
      if (currentStep < 3) {
        currentStep++;
        updateStepUI();
      }
    });
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepUI();
      }
    });
  }

  // Official Company WhatsApp / Inquiry Mobile: +91 96891 59776
  const COMPANY_WHATSAPP_NUMBER = '919689159776'; 

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedType = document.querySelector('input[name="projectType"]:checked').value;
      const businessName = document.getElementById('businessName').value.trim();
      const businessDetails = document.getElementById('businessDetails').value.trim();
      const clientContact = document.getElementById('clientContact').value.trim();

      const message = `*New Project Inquiry — Neuromind Solutions*%0A%0A` +
        `*Service Required:* ${encodeURIComponent(selectedType)}%0A` +
        `*Business Name:* ${encodeURIComponent(businessName)}%0A` +
        `*Requirements:* ${encodeURIComponent(businessDetails || 'None specified')}%0A` +
        `*Client Contact:* ${encodeURIComponent(clientContact)}`;

      const phoneTarget = COMPANY_WHATSAPP_NUMBER ? COMPANY_WHATSAPP_NUMBER.replace(/\D/g, '') : '';
      const whatsappUrl = `https://wa.me/${phoneTarget}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      quoteModal.classList.remove('active');
      quoteForm.reset();
    });
  }

  /* ==========================================================================
     4. AGRIBILL INTERACTIVE DESKTOP MODAL & MULTI-LINGUAL CONTROLLER
     ========================================================================== */
  const agriBillModal = document.getElementById('agriBillModal');
  const closeAgriBillModal = document.getElementById('closeAgriBillModal');
  const agriBillWorkBtn = document.getElementById('openAgriBillFromWork');
  const agriBillFeaturedCard = document.querySelector('.agribill-featured-card');

  const openAgriModal = (e) => {
    if (e) e.preventDefault();
    if (agriBillModal) {
      agriBillModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  if (agriBillWorkBtn) {
    agriBillWorkBtn.addEventListener('click', openAgriModal);
  }
  if (agriBillFeaturedCard) {
    agriBillFeaturedCard.addEventListener('click', (e) => {
      // Avoid duplicate trigger if button was directly clicked
      if (e.target !== agriBillWorkBtn && !agriBillWorkBtn.contains(e.target)) {
        openAgriModal(e);
      }
    });
  }

  const closeAgriModal = () => {
    if (agriBillModal) {
      agriBillModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (closeAgriBillModal) {
    closeAgriBillModal.addEventListener('click', closeAgriModal);
  }

  if (agriBillModal) {
    agriBillModal.addEventListener('click', (e) => {
      if (e.target === agriBillModal) {
        closeAgriModal();
      }
    });
  }

  // Keyboard escape listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && agriBillModal && agriBillModal.classList.contains('active')) {
      closeAgriModal();
    }
  });

  // AgriBill Multi-View Screen Switcher & Controller
  const agriNavItems = document.querySelectorAll('.agri-nav-item');
  const agriViewPanels = document.querySelectorAll('.agribill-view-panel');
  const agriHeaderTitle = document.getElementById('agriHeaderTitle');
  const agriHeaderSub = document.getElementById('agriHeaderSub');

  const viewTitles = {
    dashboard: {
      en: { title: "Dashboard", sub: "Welcome back! Here's your store overview." },
      mr: { title: "डॅशबोर्ड", sub: "स्वागत आहे! तुमच्या कृषी दुकानाची स्थिती पहा." }
    },
    newbill: {
      en: { title: "New Bill", sub: "Create a new invoice for a customer" },
      mr: { title: "नवीन बिल", sub: "ग्राहकासाठी नवीन इनव्हॉइस/बिल तयार करा" }
    },
    invoices: {
      en: { title: "Invoices", sub: "Manage, view, print, and export all customer invoices" },
      mr: { title: "इनव्हॉइसेस", sub: "सर्व ग्राहक इनव्हॉइसेस व्यवस्थापित करा, पहा आणि प्रिंट करा" }
    },
    udhar: {
      en: { title: "Udhar Ledger", sub: "Track customer credit, collect dues, and send WhatsApp reminders" },
      mr: { title: "उधार खतावणी", sub: "ग्राहकांची उधारी नोंदवा, वसुली करा आणि व्हॉट्सॲप स्मरणपत्रे पाठवा" }
    },
    dealers: {
      en: { title: "Dealers & Distributors", sub: "Manage khatabook ledgers for your suppliers" },
      mr: { title: "डीलर्स आणि पुरवठादार", sub: "तुमच्या पुरवठादार डीलर्सची खातावणी व्यवस्थापित करा" }
    }
  };

  let activeAgriTab = 'dashboard';
  let currentAgriLang = 'en';

  const switchAgriTab = (tabName) => {
    if (!tabName) return;
    activeAgriTab = tabName;

    // Update Sidebar
    const navItems = document.querySelectorAll('.agri-nav-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update View Panels directly
    const panels = document.querySelectorAll('.agribill-view-panel');
    panels.forEach(panel => {
      const match = (panel.getAttribute('data-panel') === tabName);
      if (match) {
        panel.classList.add('active');
        panel.style.setProperty('display', 'flex', 'important');
      } else {
        panel.classList.remove('active');
        panel.style.setProperty('display', 'none', 'important');
      }
    });

    // Update Header Titles
    const tData = viewTitles[tabName] || {
      en: { title: tabName.toUpperCase(), sub: "AgriBill ERP Management" },
      mr: { title: tabName, sub: "अॅग्रीबिल व्यवस्थापन" }
    };
    if (agriHeaderTitle) {
      agriHeaderTitle.textContent = tData[currentAgriLang].title;
    }
    if (agriHeaderSub) {
      agriHeaderSub.textContent = tData[currentAgriLang].sub;
    }
  };

  agriNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = item.getAttribute('data-tab');
      switchAgriTab(tab);
    });
  });

  // Shortcut / Cross-tab switchers
  const quickBillBtn = document.getElementById('agriQuickBillBtn');
  const quickUdharBtn = document.getElementById('agriQuickUdharBtn');
  if (quickBillBtn) quickBillBtn.addEventListener('click', () => switchAgriTab('newbill'));
  if (quickUdharBtn) quickUdharBtn.addEventListener('click', () => switchAgriTab('udhar'));

  document.querySelectorAll('.agri-switch-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      switchAgriTab(target);
    });
  });

  // Language Switcher (Marathi / English)
  const agriLangToggleBtn = document.getElementById('agriLangToggleBtn');
  const agriLangLabel = document.getElementById('agriLangLabel');

  if (agriLangToggleBtn) {
    agriLangToggleBtn.addEventListener('click', () => {
      currentAgriLang = currentAgriLang === 'en' ? 'mr' : 'en';

      const translatableElements = agriBillModal ? agriBillModal.querySelectorAll('[data-en][data-mr]') : [];
      translatableElements.forEach(el => {
        el.textContent = currentAgriLang === 'mr' ? el.getAttribute('data-mr') : el.getAttribute('data-en');
      });

      // Update placeholders
      const translatablePlaceholders = agriBillModal ? agriBillModal.querySelectorAll('[data-en-ph][data-mr-ph]') : [];
      translatablePlaceholders.forEach(el => {
        el.placeholder = currentAgriLang === 'mr' ? el.getAttribute('data-mr-ph') : el.getAttribute('data-en-ph');
      });

      if (agriLangLabel) {
        agriLangLabel.textContent = currentAgriLang === 'mr' ? 'English' : 'मराठी';
      }

      // Re-apply current tab title
      switchAgriTab(activeAgriTab);
    });
  }

  // Keyboard Shortcuts for AgriBill window
  document.addEventListener('keydown', (e) => {
    if (!agriBillModal || !agriBillModal.classList.contains('active')) return;

    if (e.altKey) {
      if (e.key === '1') { e.preventDefault(); switchAgriTab('dashboard'); }
      else if (e.key === '2' || e.key === 'n' || e.key === 'N') { e.preventDefault(); switchAgriTab('newbill'); }
      else if (e.key === '3') { e.preventDefault(); switchAgriTab('invoices'); }
      else if (e.key === '4') { e.preventDefault(); switchAgriTab('udhar'); }
      else if (e.key === '5') { e.preventDefault(); switchAgriTab('dealers'); }
      else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        if (agriLangToggleBtn) agriLangToggleBtn.click();
      }
    }
  });

  /* --------------------------------------------------------------------------
     NEW BILL: LIVE PRODUCT CATALOG & INVOICE CALCULATOR
     -------------------------------------------------------------------------- */
  let billItems = [];
  const agriProductsGrid = document.getElementById('agriProductsGrid');
  const agriBillItemsBox = document.getElementById('agriBillItemsBox');
  const agriEmptyBillMsg = document.getElementById('agriEmptyBillMsg');
  const agriBillTableWrap = document.getElementById('agriBillTableWrap');
  const agriBillTableBody = document.getElementById('agriBillTableBody');
  const agriBillCount = document.getElementById('agriBillCount');
  const agriBillSubtotal = document.getElementById('agriBillSubtotal');
  const agriBillGST = document.getElementById('agriBillGST');
  const agriBillGrandTotal = document.getElementById('agriBillGrandTotal');
  const agriClearBillBtn = document.getElementById('agriClearBillBtn');
  const agriSaveBillBtn = document.getElementById('agriSaveBillBtn');
  const agriToggleGST = document.getElementById('agriToggleGST');

  const recalculateBill = () => {
    let subtotal = 0;
    let totalTax = 0;
    const isGstEnabled = agriToggleGST ? agriToggleGST.checked : true;

    billItems.forEach(item => {
      const itemSubtotal = item.price * item.qty;
      const itemTax = isGstEnabled ? (itemSubtotal * (item.taxRate / 100)) : 0;
      subtotal += itemSubtotal;
      totalTax += itemTax;
    });

    const grandTotal = subtotal + totalTax;

    if (agriBillCount) agriBillCount.textContent = billItems.length;
    if (agriBillSubtotal) agriBillSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}.00`;
    if (agriBillGST) agriBillGST.textContent = `₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (agriBillGrandTotal) agriBillGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    if (billItems.length === 0) {
      if (agriEmptyBillMsg) agriEmptyBillMsg.style.display = 'block';
      if (agriBillTableWrap) agriBillTableWrap.style.display = 'none';
      if (agriBillTableBody) agriBillTableBody.innerHTML = '';
    } else {
      if (agriEmptyBillMsg) agriEmptyBillMsg.style.display = 'none';
      if (agriBillTableWrap) agriBillTableWrap.style.display = 'block';

      if (agriBillTableBody) {
        agriBillTableBody.innerHTML = '';
        billItems.forEach((item, idx) => {
          const tr = document.createElement('tr');
          const itemTotal = (item.price * item.qty) + (isGstEnabled ? (item.price * item.qty * (item.taxRate / 100)) : 0);
          tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>₹${item.price}</td>
            <td>
              <div class="qty-control">
                <button class="qty-btn" data-action="dec" data-index="${idx}">−</button>
                <span>${item.qty}</span>
                <button class="qty-btn" data-action="inc" data-index="${idx}">+</button>
              </div>
            </td>
            <td>${isGstEnabled ? item.taxRate + '%' : '0%'}</td>
            <td><strong>₹${itemTotal.toFixed(2)}</strong></td>
            <td><button class="remove-item-btn" data-index="${idx}" title="Remove">×</button></td>
          `;
          agriBillTableBody.appendChild(tr);
        });

        // Add event listeners to qty buttons
        agriBillTableBody.querySelectorAll('.qty-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'));
            const action = btn.getAttribute('data-action');
            if (action === 'inc') {
              billItems[idx].qty++;
            } else if (action === 'dec') {
              billItems[idx].qty--;
              if (billItems[idx].qty <= 0) {
                billItems.splice(idx, 1);
              }
            }
            recalculateBill();
          });
        });

        // Add event listeners to remove buttons
        agriBillTableBody.querySelectorAll('.remove-item-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            billItems.splice(idx, 1);
            recalculateBill();
          });
        });
      }
    }
  };

  // Product card click to add to bill
  const prodCards = document.querySelectorAll('.agri-prod-card');
  prodCards.forEach(card => {
    card.addEventListener('click', () => {
      const prodId = card.getAttribute('data-prod-id');
      const name = card.getAttribute('data-name');
      const price = parseFloat(card.getAttribute('data-price'));
      const taxRate = parseFloat(card.getAttribute('data-tax'));

      const existing = billItems.find(i => i.id === prodId);
      if (existing) {
        existing.qty++;
      } else {
        billItems.push({ id: prodId, name, price, taxRate, qty: 1 });
      }

      // Visual click feedback on card
      card.style.transform = 'scale(0.96)';
      setTimeout(() => { card.style.transform = ''; }, 120);

      recalculateBill();
    });
  });

  if (agriClearBillBtn) {
    agriClearBillBtn.addEventListener('click', () => {
      billItems = [];
      recalculateBill();
    });
  }

  if (agriToggleGST) {
    agriToggleGST.addEventListener('change', recalculateBill);
  }

  if (agriSaveBillBtn) {
    agriSaveBillBtn.addEventListener('click', () => {
      if (billItems.length === 0) {
        alert("Please add items to bill before printing.");
        return;
      }
      agriSaveBillBtn.textContent = "✓ INVOICE SAVED & PRINTED!";
      setTimeout(() => {
        agriSaveBillBtn.textContent = "⚡ GENERATE & PRINT INVOICE";
      }, 1500);
    });
  }

  // Live Product Search Filter
  const agriProductSearch = document.getElementById('agriProductSearch');
  if (agriProductSearch) {
    agriProductSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      prodCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });
  }

  /* --------------------------------------------------------------------------
     INVOICES: SEARCH & STATUS FILTER
     -------------------------------------------------------------------------- */
  const agriInvoiceSearch = document.getElementById('agriInvoiceSearch');
  const agriStatusFilter = document.getElementById('agriStatusFilter');
  const invoiceRows = document.querySelectorAll('#agriInvoicesTable tbody tr');

  const filterInvoices = () => {
    const q = agriInvoiceSearch ? agriInvoiceSearch.value.toLowerCase().trim() : '';
    const status = agriStatusFilter ? agriStatusFilter.value : 'all';

    invoiceRows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      const rowStatus = row.getAttribute('data-status');
      const matchesSearch = rowText.includes(q);
      const matchesStatus = status === 'all' || rowStatus === status;

      row.style.display = matchesSearch && matchesStatus ? '' : 'none';
    });
  };

  if (agriInvoiceSearch) agriInvoiceSearch.addEventListener('input', filterInvoices);
  if (agriStatusFilter) agriStatusFilter.addEventListener('change', filterInvoices);

  // WhatsApp reminder actions inside Invoices & Udhar
  document.querySelectorAll('.agri-icon-btn.whatsapp, #sendWhatsappReminderBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const original = btn.innerHTML;
      btn.innerHTML = '✓ Sent!';
      btn.style.backgroundColor = '#dcfce7';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.backgroundColor = '';
      }, 1200);
    });
  });

  /* ==========================================================================
     5. SCROLL PROGRESS BAR CONTROLLER
     ========================================================================== */
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const updateScrollProgress = () => {
    if (!scrollProgressBar) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
    scrollProgressBar.style.transform = `scaleX(${progress})`;
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ==========================================================================
     6. SCROLL-TRIGGERED INTERSECTION OBSERVER
     ========================================================================== */
  const revealElements = document.querySelectorAll('[data-scroll-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  /* ==========================================================================
     7. CO-FOUNDER CARDS 3D PERSPECTIVE TILT PHYSICS
     ========================================================================== */
  const tiltCards = document.querySelectorAll('.founder-card[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within element
      const y = e.clientY - rect.top;  // y position within element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg
      const rotateY = ((x - centerX) / centerX) * 7;  // max 7 deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  /* ==========================================================================
     SERVICE DETAIL MODALS — click any of the 3 service cards to expand
     Frontend Developer agent: slide-up animation, keyboard accessible, theme-matched
     ========================================================================== */

  const svcModalMap = {
    erp:    document.getElementById('svcModal-erp'),
    mobile: document.getElementById('svcModal-mobile'),
    ai:     document.getElementById('svcModal-ai'),
  };

  function openSvcModal(key) {
    const overlay = svcModalMap[key];
    if (!overlay) return;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    // Focus the close button for keyboard users
    const closeBtn = overlay.querySelector('.svc-modal-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
  }

  function closeSvcModal(overlay) {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Wire service cards to open their matching modal
  document.querySelectorAll('.service-card[data-service]').forEach(card => {
    const key = card.dataset.service;

    card.addEventListener('click', () => openSvcModal(key));

    // Keyboard: Enter or Space
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSvcModal(key);
      }
    });
  });

  // Wire close buttons & backdrop clicks for all modals
  Object.values(svcModalMap).forEach(overlay => {
    if (!overlay) return;

    const closeBtn = overlay.querySelector('.svc-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeSvcModal(overlay));
    }

    // Click on the darkened backdrop (not on the modal card itself)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSvcModal(overlay);
    });
  });

  // Wire CTA buttons inside each modal to open the global quote modal
  ['svcErpCta', 'svcMobileCta', 'svcAiCta'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      // Close the service modal first
      Object.values(svcModalMap).forEach(o => o && o.classList.remove('is-open'));
      document.body.style.overflow = '';
      // Open the quote modal
      const quoteModal = document.getElementById('quoteModal');
      if (quoteModal) quoteModal.classList.add('active');
    });
  });

  // Escape key closes whichever modal is open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      Object.values(svcModalMap).forEach(overlay => {
        if (overlay && overlay.classList.contains('is-open')) {
          closeSvcModal(overlay);
        }
      });
    }
  });

});





