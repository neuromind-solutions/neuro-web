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
     2. FULL POS TERMINAL PLAYGROUND DEMO
     ========================================================================== */
  let cart = [
    { id: 1, name: "Wireless Optical Mouse", price: 450, taxRate: 18, qty: 1 },
    { id: 2, name: "Mechanical Keyboard", price: 1200, taxRate: 18, qty: 1 }
  ];

  const productSelect = document.getElementById('productSelect');
  const addItemBtn = document.getElementById('addItemBtn');
  const cartTableBody = document.getElementById('cartTableBody');
  const demoSubtotal = document.getElementById('demoSubtotal');
  const demoTax = document.getElementById('demoTax');
  const demoGrandTotal = document.getElementById('demoGrandTotal');
  const generateReceiptBtn = document.getElementById('generateReceiptBtn');
  const receiptModal = document.getElementById('receiptModal');
  const closeReceiptModal = document.getElementById('closeReceiptModal');
  const thermalReceiptContent = document.getElementById('thermalReceiptContent');

  const productsDatabase = {
    "1": { name: "Wireless Optical Mouse", price: 450, taxRate: 18 },
    "2": { name: "Mechanical Keyboard", price: 1200, taxRate: 18 },
    "3": { name: "Thermal Receipt Paper 10pk", price: 250, taxRate: 5 },
    "4": { name: "Barcode Laser Scanner", price: 850, taxRate: 12 }
  };

  const renderCart = () => {
    cartTableBody.innerHTML = '';
    let subtotal = 0;
    let totalTax = 0;

    if (cart.length === 0) {
      cartTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#888; padding: 1rem;">No items in cart. Add items above!</td></tr>`;
      demoSubtotal.textContent = "₹0.00";
      demoTax.textContent = "₹0.00";
      demoGrandTotal.textContent = "₹0.00";
      return;
    }

    cart.forEach((item, index) => {
      const itemSubtotal = item.price * item.qty;
      const itemTax = (itemSubtotal * item.taxRate) / 100;
      subtotal += itemSubtotal;
      totalTax += itemTax;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
        <td>${item.qty}</td>
        <td>₹${item.price}</td>
        <td>₹${itemSubtotal}</td>
        <td><button class="del-btn" data-index="${index}">&times;</button></td>
      `;
      cartTableBody.appendChild(tr);
    });

    const grandTotal = subtotal + totalTax;
    demoSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    demoTax.textContent = `₹${totalTax.toFixed(2)}`;
    demoGrandTotal.textContent = `₹${grandTotal.toFixed(2)}`;
  };

  if (addItemBtn) {
    addItemBtn.addEventListener('click', () => {
      const selectedVal = productSelect.value;
      const prod = productsDatabase[selectedVal];
      if (!prod) return;

      const existing = cart.find(i => i.name === prod.name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ ...prod, qty: 1 });
      }
      renderCart();
    });
  }

  if (cartTableBody) {
    cartTableBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('del-btn')) {
        const index = parseInt(e.target.getAttribute('data-index'), 10);
        cart.splice(index, 1);
        renderCart();
      }
    });
  }

  renderCart();

  if (generateReceiptBtn) {
    generateReceiptBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Please add at least one item to generate a receipt.");
        return;
      }

      const billNumber = `NM-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      let itemsHtml = '';
      let subtotal = 0;
      let totalTax = 0;

      cart.forEach(item => {
        const itemSubtotal = item.price * item.qty;
        const itemTax = (itemSubtotal * item.taxRate) / 100;
        subtotal += itemSubtotal;
        totalTax += itemTax;

        itemsHtml += `
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>${item.qty}x ${item.name}</span>
            <span>₹${itemSubtotal}</span>
          </div>
        `;
      });

      const grandTotal = subtotal + totalTax;

      thermalReceiptContent.innerHTML = `
        <div style="text-align:center; margin-bottom: 8px;">
          <h3 style="margin:0; font-size: 1.1rem; font-weight:900;">NEUROMIND RETAIL STORE</h3>
          <p style="margin:2px 0; font-size:0.75rem;">GSTIN: 08AABCN1234F1Z5</p>
          <p style="margin:2px 0; font-size:0.75rem;">Bill No: ${billNumber} | ${dateStr} ${timeStr}</p>
        </div>
        <div style="border-top:1px dashed #000; border-bottom:1px dashed #000; padding:6px 0; margin: 6px 0;">
          ${itemsHtml}
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
          <span>Subtotal:</span>
          <span>₹${subtotal.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
          <span>GST (CGST+SGST):</span>
          <span>₹${totalTax.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:900; font-size:0.95rem; border-top:1px solid #000; margin-top:4px; padding-top:4px;">
          <span>GRAND TOTAL:</span>
          <span>₹${grandTotal.toFixed(2)}</span>
        </div>
        <div style="text-align:center; margin-top:10px; font-size:0.7rem; color:#555;">
          *** POWERED BY NEUROMIND POS ***<br>
          Thank You! Visit Again
        </div>
      `;

      receiptModal.classList.add('active');
    });
  }

  if (closeReceiptModal) {
    closeReceiptModal.addEventListener('click', () => {
      receiptModal.classList.remove('active');
    });
  }

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

  [quoteModal, receiptModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

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
        `*Contact:* ${encodeURIComponent(clientContact)}`;

      const whatsappUrl = `https://wa.me/?text=${message}`;
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

  // Language Switcher (Marathi / English)
  const agriLangToggleBtn = document.getElementById('agriLangToggleBtn');
  const agriLangLabel = document.getElementById('agriLangLabel');
  const agriHeaderTitle = document.getElementById('agriHeaderTitle');
  const agriHeaderSub = document.getElementById('agriHeaderSub');
  let currentAgriLang = 'en';

  if (agriLangToggleBtn) {
    agriLangToggleBtn.addEventListener('click', () => {
      currentAgriLang = currentAgriLang === 'en' ? 'mr' : 'en';

      const translatableElements = agriBillModal ? agriBillModal.querySelectorAll('[data-en][data-mr]') : [];
      translatableElements.forEach(el => {
        el.textContent = currentAgriLang === 'mr' ? el.getAttribute('data-mr') : el.getAttribute('data-en');
      });

      if (agriLangLabel) {
        agriLangLabel.textContent = currentAgriLang === 'mr' ? 'English' : 'मराठी';
      }

      if (agriHeaderTitle) {
        agriHeaderTitle.textContent = currentAgriLang === 'mr' ? 'डॅशबोर्ड' : 'Dashboard';
      }
      if (agriHeaderSub) {
        agriHeaderSub.textContent = currentAgriLang === 'mr' 
          ? 'स्वागत आहे! तुमच्या कृषी दुकानाची स्थिती पहा.' 
          : "Welcome back! Here's your store overview.";
      }
    });
  }

  // Sidebar item tab switching
  const agriNavItems = document.querySelectorAll('.agri-nav-item');
  agriNavItems.forEach(item => {
    item.addEventListener('click', () => {
      agriNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      const labelEl = item.querySelector('.agri-nav-text');
      if (labelEl && agriHeaderTitle) {
        agriHeaderTitle.textContent = labelEl.textContent;
      }
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

});


