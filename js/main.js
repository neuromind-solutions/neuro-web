/* ============================================
   NEUROMIND SOLUTIONS — Main JavaScript
   Mobile menu, smooth scroll, header effects,
   scroll-reveal animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════════
     SCROLL PROGRESS INDICATOR BAR
     ═══════════════════════════════════════════ */

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


  /* ═══════════════════════════════════════════
     FLOATING PILL NAVBAR SCROLL STATE
     ═══════════════════════════════════════════ */

  const navbarWrapper = document.querySelector('.navbar-wrapper');
  if (navbarWrapper) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 24) {
        navbarWrapper.classList.add('is-scrolled');
      } else {
        navbarWrapper.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }


  /* ═══════════════════════════════════════════
     MOBILE NAVIGATION DRAWER
     ═══════════════════════════════════════════ */

  const mobileToggle = document.getElementById('mobileMenuToggle') || document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileNavDrawer') || document.getElementById('mobile-nav');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileDrawer.querySelectorAll('.mobile-nav-link, .mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 860 && mobileDrawer.classList.contains('is-open')) {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ═══════════════════════════════════════════
     SMOOTH SCROLLING (with header offset)
     ═══════════════════════════════════════════ */

  const headerOffset = 80;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  /* ═══════════════════════════════════════════
     SCROLL REVEAL (Intersection Observer)
     ═══════════════════════════════════════════ */

  const revealSections = document.querySelectorAll('.fade-in-section');

  if (revealSections.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealSections.forEach(section => {
      revealObserver.observe(section);
    });
  } else {
    // Fallback: show everything if IntersectionObserver not supported
    revealSections.forEach(section => {
      section.classList.add('is-visible');
    });
  }


  /* ═══════════════════════════════════════════
     CURRENT YEAR (footer copyright)
     ═══════════════════════════════════════════ */

  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ═══════════════════════════════════════════
     REVIEWS CONTINUOUS HORIZONTAL CAROUSEL
     Scrolls continuously until the user taps any card
     ═══════════════════════════════════════════ */

  const reviewsTrack = document.getElementById('reviews-track');
  const carouselStatusDot = document.getElementById('carousel-status-dot');
  const carouselStatusText = document.getElementById('carousel-status-text');
  const carouselToggleBtn = document.getElementById('carousel-toggle-btn');
  const carouselToggleIcon = document.getElementById('carousel-toggle-icon');
  const carouselToggleLabel = document.getElementById('carousel-toggle-label');

  if (reviewsTrack) {
    const cards = reviewsTrack.querySelectorAll('.review-card');
    let isPausedByTap = false;
    let activeCard = null;

    function pauseCarousel(targetCard) {
      isPausedByTap = true;
      reviewsTrack.classList.add('is-paused');

      cards.forEach(c => c.classList.remove('is-active'));
      if (targetCard) {
        targetCard.classList.add('is-active');
        activeCard = targetCard;
      }

      if (carouselStatusDot) {
        carouselStatusDot.classList.add('reviews-carousel__status-dot--paused');
        carouselStatusDot.classList.remove('pulse');
      }
      if (carouselStatusText) {
        carouselStatusText.textContent = '❚❚ PAUSED ON CARD • TAP AGAIN TO RESUME';
      }
      if (carouselToggleIcon) carouselToggleIcon.textContent = '▶';
      if (carouselToggleLabel) carouselToggleLabel.textContent = 'RESUME';
    }

    function resumeCarousel() {
      isPausedByTap = false;
      activeCard = null;
      reviewsTrack.classList.remove('is-paused');

      cards.forEach(c => c.classList.remove('is-active'));

      if (carouselStatusDot) {
        carouselStatusDot.classList.remove('reviews-carousel__status-dot--paused');
        carouselStatusDot.classList.add('pulse');
      }
      if (carouselStatusText) {
        carouselStatusText.textContent = 'TAP ANY CARD TO PAUSE';
      }
      if (carouselToggleIcon) carouselToggleIcon.textContent = '❚❚';
      if (carouselToggleLabel) carouselToggleLabel.textContent = 'PAUSE';
    }

    // Tap/Click handling on every review card
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isPausedByTap && activeCard === card) {
          resumeCarousel();
        } else {
          pauseCarousel(card);
        }
      });

      // Keyboard accessibility (Enter / Space)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (isPausedByTap && activeCard === card) {
            resumeCarousel();
          } else {
            pauseCarousel(card);
          }
        }
      });
    });

    // Toggle button click
    if (carouselToggleBtn) {
      carouselToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isPausedByTap) {
          resumeCarousel();
        } else {
          pauseCarousel(null);
        }
      });
    }

    // Tapping/Clicking outside resumes scrolling
    document.addEventListener('click', (e) => {
      if (isPausedByTap) {
        const clickedCard = e.target.closest('.review-card');
        const clickedToggle = e.target.closest('#carousel-toggle-btn');
        if (!clickedCard && !clickedToggle) {
          resumeCarousel();
        }
      }
    });
  }


  /* ═══════════════════════════════════════════
     START PROJECT MULTI-STEP MODAL CONTROLLER
     ═══════════════════════════════════════════ */

  const projectModal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const modalCloseBtn = document.getElementById('project-modal-close');
  const openModalBtns = document.querySelectorAll('.open-project-modal');

  const step1 = document.getElementById('modal-step-1');
  const step2 = document.getElementById('modal-step-2');
  const step3 = document.getElementById('modal-step-3');
  const step4 = document.getElementById('modal-step-4');
  const stepSuccess = document.getElementById('modal-step-success');
  const progressBar = document.getElementById('modal-progress-bar');

  const nameInput = document.getElementById('modal-name-input');
  const phoneInput = document.getElementById('modal-phone-input');
  const countryCodeSelect = document.getElementById('modal-country-code');
  const notesInput = document.getElementById('modal-notes-input');

  const btn1 = document.getElementById('modal-btn-1');
  const btn2 = document.getElementById('modal-btn-2');
  const btn3 = document.getElementById('modal-btn-3');
  const btn4 = document.getElementById('modal-btn-4');
  const btnCloseSuccess = document.getElementById('modal-btn-close-success');

  const error1 = document.getElementById('modal-error-1');
  const error2 = document.getElementById('modal-error-2');
  const error3 = document.getElementById('modal-error-3');

  const badgesStep2 = document.getElementById('modal-badges-step-2');
  const badgesStep3 = document.getElementById('modal-badges-step-3');
  const badgesStep4 = document.getElementById('modal-badges-step-4');

  const serviceChips = document.querySelectorAll('.project-modal__service-chip');
  const progressDots = [
    document.getElementById('modal-dot-1'),
    document.getElementById('modal-dot-2'),
    document.getElementById('modal-dot-3'),
    document.getElementById('modal-dot-4')
  ];

  let currentModalStep = 1;
  const projectData = {
    name: '',
    countryCode: '+91',
    phone: '',
    services: ['Website'],
    notes: ''
  };

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderBadges() {
    const nameBadgeHtml = projectData.name 
      ? `<button type="button" class="project-modal__badge" data-jump-step="1" title="Click to edit name">✓ NAME SAVED <span class="project-modal__badge-val">${escapeHtml(projectData.name)}</span></button>`
      : '';
    const phoneBadgeHtml = projectData.phone 
      ? `<button type="button" class="project-modal__badge" data-jump-step="2" title="Click to edit phone">✓ PHONE SAVED <span class="project-modal__badge-val">${projectData.countryCode} ${escapeHtml(projectData.phone)}</span></button>`
      : '';
    const servicesBadgeHtml = projectData.services && projectData.services.length > 0
      ? `<button type="button" class="project-modal__badge" data-jump-step="3" title="Click to edit services">✓ LOOKING FOR SAVED <span class="project-modal__badge-val">${escapeHtml(projectData.services.join(', '))}</span></button>`
      : '';

    if (badgesStep2) badgesStep2.innerHTML = nameBadgeHtml;
    if (badgesStep3) badgesStep3.innerHTML = nameBadgeHtml + phoneBadgeHtml;
    if (badgesStep4) badgesStep4.innerHTML = nameBadgeHtml + phoneBadgeHtml + servicesBadgeHtml;

    // Attach click listeners to all generated badges to jump back
    document.querySelectorAll('.project-modal__badge').forEach(badge => {
      badge.addEventListener('click', () => {
        const jumpTo = parseInt(badge.dataset.jumpStep, 10);
        if (jumpTo) goToStep(jumpTo);
      });
    });
  }

  function updateProgressDots(step) {
    if (step > 4) {
      if (progressBar) progressBar.style.display = 'none';
      return;
    }
    if (progressBar) progressBar.style.display = 'flex';

    progressDots.forEach((dot, index) => {
      if (!dot) return;
      const stepIndex = index + 1;
      dot.className = 'project-modal__step-dot';
      if (stepIndex < step) {
        dot.classList.add('is-visited');
      } else if (stepIndex === step) {
        dot.classList.add('is-active');
      }
    });
  }

  function goToStep(step) {
    currentModalStep = step;
    [step1, step2, step3, step4, stepSuccess].forEach(s => {
      if (s) s.style.display = 'none';
    });

    renderBadges();
    updateProgressDots(step);

    if (step === 1) {
      if (step1) step1.style.display = 'block';
      setTimeout(() => nameInput && nameInput.focus(), 60);
    } else if (step === 2) {
      if (step2) step2.style.display = 'block';
      setTimeout(() => phoneInput && phoneInput.focus(), 60);
    } else if (step === 3) {
      if (step3) step3.style.display = 'block';
    } else if (step === 4) {
      if (step4) step4.style.display = 'block';
      setTimeout(() => notesInput && notesInput.focus(), 60);
    } else if (step === 5) {
      if (stepSuccess) stepSuccess.style.display = 'block';
      const successDesc = document.getElementById('modal-success-desc');
      if (successDesc) {
        successDesc.innerHTML = `Thanks <strong>${escapeHtml(projectData.name)}</strong>! We've received your requirements for <strong>${escapeHtml(projectData.services.join(', '))}</strong>. Our founding team will reach out directly via WhatsApp to <strong>${projectData.countryCode} ${escapeHtml(projectData.phone)}</strong> within 2 hours.`;
      }
    }
  }

  function openProjectModal() {
    if (!projectModal) return;
    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    goToStep(currentModalStep || 1);
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function resetProjectModal() {
    currentModalStep = 1;
    projectData.name = '';
    projectData.phone = '';
    projectData.services = ['Website'];
    projectData.notes = '';
    if (nameInput) nameInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (notesInput) notesInput.value = '';
    serviceChips.forEach(chip => {
      chip.classList.toggle('is-selected', chip.dataset.service === 'Website');
    });
    goToStep(1);
  }

  // Open triggers
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const mobileNav = document.getElementById('mobile-nav');
      const hamburger = document.getElementById('hamburger');
      if (mobileNav && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        if (hamburger) hamburger.classList.remove('is-active');
      }
      openProjectModal();
    });
  });

  // Close triggers
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', () => {
      closeProjectModal();
      setTimeout(resetProjectModal, 300);
    });
  }

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('is-open')) {
      closeProjectModal();
    }
  });


  /* ═══════════════════════════════════════════
     SERVICE DETAIL MODALS (POP-UPS) CONTROLLER
     ═══════════════════════════════════════════ */

  const svcModalMap = {
    erp:    document.getElementById('svcModal-erp'),
    mobile: document.getElementById('svcModal-mobile'),
    ai:     document.getElementById('svcModal-ai')
  };

  function openSvcModal(key) {
    const overlay = svcModalMap[key];
    if (!overlay) return;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    const closeBtn = overlay.querySelector('.svc-modal-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
  }

  function closeSvcModal(overlay) {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Attach click & keyboard listeners to service cards
  document.querySelectorAll('.service-card[data-service]').forEach(card => {
    const key = card.dataset.service;
    card.addEventListener('click', () => openSvcModal(key));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSvcModal(key);
      }
    });
  });

  // Close triggers on service detail modals
  Object.values(svcModalMap).forEach(overlay => {
    if (!overlay) return;
    const closeBtn = overlay.querySelector('.svc-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSvcModal(overlay);
      });
    }
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSvcModal(overlay);
    });
  });

  // ESC key for service detail modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      Object.values(svcModalMap).forEach(overlay => {
        if (overlay && overlay.classList.contains('is-open')) {
          closeSvcModal(overlay);
        }
      });
    }
  });

  // Wire CTAs inside service modals to open the main Project Modal
  ['svcErpCta', 'svcMobileCta', 'svcAiCta'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      Object.values(svcModalMap).forEach(overlay => {
        if (overlay) overlay.classList.remove('is-open');
      });
      document.body.style.overflow = '';
      openProjectModal();
    });
  });

  // Step 1: Name
  function handleStep1Next() {
    const val = (nameInput ? nameInput.value : '').trim();
    if (!val) {
      if (error1) error1.classList.add('is-visible');
      if (nameInput) nameInput.focus();
      return;
    }
    if (error1) error1.classList.remove('is-visible');
    projectData.name = val;
    goToStep(2);
  }

  if (btn1) btn1.addEventListener('click', handleStep1Next);
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleStep1Next();
      }
    });
    nameInput.addEventListener('input', () => {
      if (error1) error1.classList.remove('is-visible');
    });
  }

  // Step 2: Phone
  function handleStep2Next() {
    const raw = (phoneInput ? phoneInput.value : '').trim();
    const cleanDigits = raw.replace(/[^\d]/g, '');
    if (!cleanDigits || cleanDigits.length < 8) {
      if (error2) error2.classList.add('is-visible');
      if (phoneInput) phoneInput.focus();
      return;
    }
    if (error2) error2.classList.remove('is-visible');
    projectData.countryCode = countryCodeSelect ? countryCodeSelect.value : '+91';
    projectData.phone = raw;
    goToStep(3);
  }

  if (btn2) btn2.addEventListener('click', handleStep2Next);
  if (phoneInput) {
    phoneInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleStep2Next();
      }
    });
    phoneInput.addEventListener('input', () => {
      if (error2) error2.classList.remove('is-visible');
    });
  }

  // Step 3: Service multi-select
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('is-selected');
      const selected = Array.from(serviceChips)
        .filter(c => c.classList.contains('is-selected'))
        .map(c => c.dataset.service);
      projectData.services = selected;
      if (error3 && selected.length > 0) {
        error3.classList.remove('is-visible');
      }
    });
  });

  function handleStep3Next() {
    const selected = Array.from(serviceChips)
      .filter(c => c.classList.contains('is-selected'))
      .map(c => c.dataset.service);

    if (selected.length === 0) {
      if (error3) error3.classList.add('is-visible');
      return;
    }
    if (error3) error3.classList.remove('is-visible');
    projectData.services = selected;
    goToStep(4);
  }

  if (btn3) btn3.addEventListener('click', handleStep3Next);

  // ═══════════════════════════════════════════
  // GOOGLE SHEETS WEB APP URL
  // Paste your Google Apps Script Web App URL below
  // ═══════════════════════════════════════════
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycby_TleWFMQmkluImLGlTqBIs3WAgPu_-WhYdZvA6vrED30KTsX3U0Gbv05PkgUALYX5Hw/exec';

  // Step 4: Notes & Send to Google Sheets
  async function handleStep4Submit() {
    projectData.notes = (notesInput ? notesInput.value : '').trim();

    const submitBtn = document.getElementById('modal-btn-4');
    const originalText = submitBtn ? submitBtn.textContent : 'SEND IT';

    if (submitBtn) {
      submitBtn.textContent = 'SAVING...';
      submitBtn.disabled = true;
    }

    // 1. Always back up the lead locally in browser storage so no lead is ever lost
    try {
      const existingLeads = JSON.parse(localStorage.getItem('neuromind_project_leads') || '[]');
      existingLeads.push({
        ...projectData,
        submittedAt: new Date().toLocaleString()
      });
      localStorage.setItem('neuromind_project_leads', JSON.stringify(existingLeads));
      console.log('Lead saved locally:', projectData);
    } catch (e) {
      console.warn('Local backup warning:', e);
    }

    // 2. Send to Google Sheets if Web App URL is configured
    if (GOOGLE_SHEET_URL && GOOGLE_SHEET_URL.trim() !== '') {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString(),
            name: projectData.name,
            phone: `${projectData.countryCode} ${projectData.phone}`,
            services: projectData.services.join(', '),
            notes: projectData.notes || 'None'
          })
        });
      } catch (err) {
        console.error('Error sending lead to Google Sheet:', err);
      }
    }

    if (submitBtn) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }

    // Show success screen
    goToStep(5);
  }

  if (btn4) btn4.addEventListener('click', handleStep4Submit);


  /* ═══════════════════════════════════════════
     CONTINUOUS METRICS COUNTER ANIMATION
     Animates counting up from 0 to target continuously
     when the user scrolls the metrics bar into view
     ═══════════════════════════════════════════ */

  const metricsBar = document.getElementById('metrics-bar');
  if (metricsBar) {
    const metricValueEls = metricsBar.querySelectorAll('.metric__value');
    let isMetricsInView = false;
    let animFrameId = null;
    let loopTimeoutId = null;

    const counters = Array.from(metricValueEls).map(el => ({
      el,
      target: parseFloat(el.getAttribute('data-target')) || 0,
      prefix: el.getAttribute('data-prefix') || '',
      suffix: el.getAttribute('data-suffix') || '',
      decimals: parseInt(el.getAttribute('data-decimals') || '0', 10)
    }));

    const ANIM_DURATION = 1800; // 1.8s smooth count-up
    const PAUSE_DURATION = 2400; // 2.4s hold before restarting continuous cycle

    function startCounting() {
      if (!isMetricsInView) return;

      const startTime = performance.now();

      function frame(now) {
        if (!isMetricsInView) return;

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / ANIM_DURATION, 1);

        // Smooth cubic ease-out for natural deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);

        counters.forEach(c => {
          const current = c.target * easeOut;
          if (c.decimals > 0) {
            c.el.textContent = `${c.prefix}${current.toFixed(c.decimals)}${c.suffix}`;
          } else {
            c.el.textContent = `${c.prefix}${Math.round(current)}${c.suffix}`;
          }
        });

        if (progress < 1) {
          animFrameId = requestAnimationFrame(frame);
        } else {
          // Snap precisely to target numbers
          counters.forEach(c => {
            if (c.decimals > 0) {
              c.el.textContent = `${c.prefix}${c.target.toFixed(c.decimals)}${c.suffix}`;
            } else {
              c.el.textContent = `${c.prefix}${c.target}${c.suffix}`;
            }
          });

          // Repeat counting cycle continuously while visible
          loopTimeoutId = setTimeout(() => {
            if (isMetricsInView) {
              startCounting();
            }
          }, PAUSE_DURATION);
        }
      }

      animFrameId = requestAnimationFrame(frame);
    }

    function stopCounting() {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (loopTimeoutId) clearTimeout(loopTimeoutId);
      counters.forEach(c => {
        if (c.decimals > 0) {
          c.el.textContent = `${c.prefix}${c.target.toFixed(c.decimals)}${c.suffix}`;
        } else {
          c.el.textContent = `${c.prefix}${c.target}${c.suffix}`;
        }
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isMetricsInView = true;
            startCounting();
          } else {
            isMetricsInView = false;
            stopCounting();
          }
        });
      }, {
        threshold: 0.25
      });

      observer.observe(metricsBar);
    } else {
      isMetricsInView = true;
      startCounting();
    }
  }


  /* ═══════════════════════════════════════════
     HERO VERTICAL TEXT CAROUSEL
     Infinite vertical slide of client quotes with zero layout shift
     ═══════════════════════════════════════════ */

  const heroRotator = document.getElementById('hero-rotator');
  const heroRotatorTrack = document.getElementById('hero-rotator-track');

  if (heroRotator && heroRotatorTrack) {
    const slides = heroRotatorTrack.querySelectorAll('.hero__rotator-slide');
    const totalSlides = slides.length; // 5 (4 unique + 1 clone)
    let currentSlideIndex = 0;
    let rotatorTimer = null;
    const SLIDE_PAUSE = 1500; // 1.5s snappy reading pause
    const TRANSITION_MS = 550; // 0.55s smooth spring glide

    function getSlideHeight() {
      const firstSlide = slides[0];
      return firstSlide ? firstSlide.offsetHeight : heroRotator.offsetHeight;
    }

    function scheduleNext(delay) {
      if (rotatorTimer) clearTimeout(rotatorTimer);
      rotatorTimer = setTimeout(advanceRotator, delay !== undefined ? delay : SLIDE_PAUSE);
    }

    function advanceRotator() {
      currentSlideIndex++;
      const slideH = getSlideHeight();

      heroRotatorTrack.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`;
      heroRotatorTrack.style.transform = `translateY(-${currentSlideIndex * slideH}px)`;

      setTimeout(() => {
        // When reaching the clone of the first slide, silently snap back to real slide 0
        if (currentSlideIndex >= totalSlides - 1) {
          heroRotatorTrack.style.transition = 'none';
          heroRotatorTrack.style.transform = 'translateY(0)';
          currentSlideIndex = 0;
          void heroRotatorTrack.offsetHeight; // Force instantaneous DOM reflow
        }

        // Schedule next advance with uniform reading pause
        scheduleNext(SLIDE_PAUSE);
      }, TRANSITION_MS);
    }

    // Start auto-rotation
    scheduleNext(SLIDE_PAUSE);

    // Pause when tab is not active to conserve battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (rotatorTimer) clearTimeout(rotatorTimer);
      } else {
        scheduleNext(1000);
      }
    });

    // Recalculate accurately on window resize
    window.addEventListener('resize', () => {
      const slideH = getSlideHeight();
      heroRotatorTrack.style.transition = 'none';
      heroRotatorTrack.style.transform = `translateY(-${currentSlideIndex * slideH}px)`;
    });
  }

});
