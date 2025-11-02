/* ==================================================================
   XYZ COMPANY - PREMIUM REDESIGN V2.3 (main.js)
   Includes: Base Init, Slider, Simple Dropdown, Auth (PHP Calls), Cart, Checkout
   ================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* --- 1. Inisialisasi Global --- */
  initThemeSwitcher();
  initMobileNav(); // Ini sekarang juga menangani dropdown mobile
  initStickyHeader();
  initScrollAnimations();
  initCopyrightYear();
  initPreloader();
  // initMegaMenu(); // HAPUS ATAU KOMENTARI INI
  initHeroSlider();
  updateCartIconCount();
  checkLoginStatus();

  /* --- 2. Router Halaman --- */
  loadPageContent();

  /* --- 3. Fungsi Inisialisasi Umum --- */
  function initThemeSwitcher() {
    const themeCheckbox = document.getElementById("checkbox");
    const body = document.body;
    if (!themeCheckbox) return;
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      body.classList.add("dark-mode");
      themeCheckbox.checked = true;
    }
    themeCheckbox.addEventListener("change", () => {
      if (themeCheckbox.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Modifikasi initMobileNav untuk handle dropdown
  function initMobileNav() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");

      // Reset state dropdown saat menu ditutup
      if (!navLinks.classList.contains("open")) {
        navLinks
          .querySelectorAll(".simple-dropdown.open")
          .forEach((li) => li.classList.remove("open"));
      } else {
        // Tambahkan event listener ke dropdown toggles *setelah* menu terbuka
        setTimeout(() => {
          // Delay kecil agar elemen siap
          navLinks
            .querySelectorAll(".simple-dropdown > a.nav-link-item")
            .forEach((toggle) => {
              // Hapus listener lama untuk cegah duplikasi jika menu dibuka-tutup cepat
              toggle.removeEventListener("click", handleMobileDropdownToggle);
              toggle.addEventListener("click", handleMobileDropdownToggle);
            });
        }, 50);
      }
    });

    // Event listener untuk SEMUA link di dalam menu (termasuk submenu)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const isInMobileMode =
          window.getComputedStyle(hamburger).display === "block";
        const parentDropdown = link.closest(".simple-dropdown");
        const isDropdownToggle =
          link.classList.contains("nav-link-item") && parentDropdown;

        // Jika link ada di DALAM dropdown menu (bukan toggle-nya)
        if (parentDropdown && link.closest(".dropdown-menu")) {
          // Biarkan default action (pindah halaman atau filter)
          // Tutup menu utama setelah klik
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");
          // Tutup juga submenu induknya
          if (parentDropdown) parentDropdown.classList.remove("open");
        }
        // Jika link adalah toggle dropdown itu sendiri di mobile
        else if (isDropdownToggle && isInMobileMode) {
          // Biarkan handleMobileDropdownToggle yang bekerja (sudah dipanggil saat menu open)
          // Jangan lakukan apa-apa di sini agar e.preventDefault() tidak terpanggil
        }
        // Jika link biasa (bukan dropdown toggle di mobile) atau di desktop
        else {
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");
          // Handle smooth scroll jika link internal
          if (link.getAttribute("href").startsWith("#")) {
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
          // Jika ini link biasa (bukan #) dan bukan dropdown toggle, biarkan pindah halaman
        }
      });
    });
  }

  // Fungsi BARU untuk handle toggle dropdown di mobile
  function handleMobileDropdownToggle(e) {
    // Hanya aktifkan di mode mobile (saat hamburger terlihat)
    const hamburger = document.querySelector(".hamburger");
    if (window.getComputedStyle(hamburger).display !== "block") {
      return; // Jangan lakukan apa-apa di desktop
    }
    e.preventDefault(); // Cegah link utama berpindah halaman di mobile
    const parentLi = e.currentTarget.parentElement;
    parentLi.classList.toggle("open");

    // Tutup dropdown lain yang mungkin terbuka
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      navLinks.querySelectorAll(".simple-dropdown").forEach((otherLi) => {
        if (otherLi !== parentLi) {
          otherLi.classList.remove("open");
        }
      });
    }
  }

  function initStickyHeader() {
    const h = document.querySelector(".header");
    if (!h) return;
    window.addEventListener("scroll", () =>
      h.classList.toggle("scrolled", window.scrollY > 50)
    );
  }
  function initScrollAnimations() {
    if (typeof ScrollReveal === "undefined") {
      console.warn("ScrollReveal library not loaded.");
      return;
    }
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "ease-out",
      reset: false,
    });
    sr.reveal(".section-title", { delay: 100 });
    sr.reveal(".feature-box", { interval: 150 });
    sr.reveal(".product-controls", { delay: 200 });
    sr.reveal(".product-card", { interval: 100 });
    sr.reveal(".blog-card", { interval: 100 });
    sr.reveal(".about-text", { origin: "left" });
    sr.reveal(".about-image", { origin: "right" });
    sr.reveal(".contact-form", { origin: "left" });
    sr.reveal(".contact-info", { origin: "right" });
    sr.reveal(".support-search-bar", { delay: 200 });
    sr.reveal(".support-card", { interval: 150 });
    sr.reveal(".faq-item", { interval: 50 });
    sr.reveal(".breadcrumbs", { origin: "top" });
    sr.reveal(".page-header h1", { origin: "top", delay: 100 });
    sr.reveal(".product-image-gallery", { origin: "left" });
    sr.reveal(".product-details", { origin: "right" });
    sr.reveal(".blog-post-featured-image", { delay: 200 });
    sr.reveal(".blog-post-content", { delay: 400 });
    sr.reveal(".auth-container", { duration: 800 });
    sr.reveal(".cart-item", { interval: 100 });
    sr.reveal(".cart-summary");
    sr.reveal(".checkout-form");
    sr.reveal(".checkout-summary", { delay: 200 });
  }
  function initCopyrightYear() {
    const y = document.getElementById("copyright-year");
    if (y) y.textContent = new Date().getFullYear();
  }
  function initPreloader() {
    const p = document.getElementById("preloader");
    if (!p) return;
    window.addEventListener("load", () => p.classList.add("hidden"));
  }
  function initHeroSlider() {
    if (typeof Swiper === "undefined") {
      console.warn("Swiper library not loaded.");
      return;
    }
    const h = document.querySelector(".hero-slider .swiper");
    if (h)
      new Swiper(h, {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect: "fade",
        fadeEffect: { crossFade: true },
      });
  }
  // HAPUS function initMegaMenu() { ... }

  /* --- 4. Fungsi Helper & Notifikasi --- */
  function hideLoadingPlaceholder() {
    const p = document.querySelector(".loading-placeholder");
    if (p) p.style.display = "none";
  }
  function getContainer() {
    return document.getElementById("main-container");
  }
  function showToast(message, type = "success") {
    const container =
      document.getElementById("toast-container") || createToastContainer();
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className = `toast-notification ${type === "error" ? "error" : ""}`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("show");
    }, 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }
  function createToastContainer() {
    const container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
    if (!document.getElementById("toast-styles")) {
      const style = document.createElement("style");
      style.id = "toast-styles";
      style.textContent = `#toast-container { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 1002; display: flex; flex-direction: column; align-items: center; gap: 10px; pointer-events: none; } .toast-notification { background-color: var(--primary-color); color: white; padding: 12px 25px; border-radius: var(--border-radius); box-shadow: var(--shadow-md); opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; font-size: 0.9rem; transform: translateY(20px); } .toast-notification.show { opacity: 1; transform: translateY(0); } .toast-notification.error { background-color: var(--error-color); } body.dark-mode .toast-notification { background-color: var(--primary-color-light); color: var(--primary-color-dark); } body.dark-mode .toast-notification.error { background-color: #ffdddd; color: var(--error-color); }`;
      document.head.appendChild(style);
    }
    return container;
  }

  /* --- 5. Logika Keranjang (Cart Logic - Frontend Simulation using localStorage) --- */
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem("xyzCart")) || [];
    } catch (e) {
      console.error("Error parsing cart:", e);
      return [];
    }
  }
  function saveCart(cart) {
    try {
      localStorage.setItem("xyzCart", JSON.stringify(cart));
      updateCartIconCount();
    } catch (e) {
      console.error("Error saving cart:", e);
    }
  }
  function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const product = products.find((p) => p.id === productId);
    if (!product) {
      console.error("Product not found:", productId);
      return;
    }
    const existingItemIndex = cart.findIndex((item) => item.id === productId);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      });
    }
    saveCart(cart);
    showToast(`${product.name} (x${quantity}) ditambahkan!`);
  }
  function updateCartQuantity(productId, quantity) {
    let cart = getCart();
    quantity = Math.max(1, parseInt(quantity) || 1);
    const i = cart.findIndex((item) => item.id === productId);
    if (i > -1) {
      cart[i].quantity = quantity;
      saveCart(cart);
      if (["cart-page", "checkout-page"].includes(document.body.id))
        loadPageContent();
    }
  }
  function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter((item) => item.id !== productId);
    saveCart(cart);
    if (["cart-page", "checkout-page"].includes(document.body.id))
      loadPageContent();
  }
  function clearCart() {
    saveCart([]);
    if (["cart-page", "checkout-page"].includes(document.body.id))
      loadPageContent();
  }
  function getCartItemCount() {
    return getCart().reduce((t, i) => t + (i.quantity || 0), 0);
  }
  function updateCartIconCount() {
    const c = document.getElementById("cart-item-count");
    if (c) c.textContent = getCartItemCount();
  }
  function calculateCartTotals() {
    const c = getCart();
    let s = 0;
    c.forEach((i) => {
      const p = parseFloat(
        String(i.price || "0")
          .replace(/\./g, "")
          .replace(/,/g, ".")
      );
      if (!isNaN(p)) s += p * (i.quantity || 0);
    });
    return { subtotal: s, total: s };
  }

  /*--- 6. Logika Autentikasi (Auth Logic - Check Status & Logout) ---*/
  function checkLoginStatus() {
    // Di aplikasi NYATA, ini akan fetch ke endpoint backend (misal /api/check_session)
    // Kita akan buat endpoint ini nanti di PHP
    fetch("backend/check_session.php") // Panggil endpoint PHP
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Network error")
      )
      .then((data) => {
        const userControlArea = document.getElementById("user-control-area");
        if (data.loggedin && userControlArea) {
          userControlArea.innerHTML = `
                      <div class="user-info">
                          <span>Halo, ${
                            data.name || data.email.split("@")[0]
                          }</span>
                          <button id="logout-btn" class="logout-btn" title="Logout"><i class="fas fa-sign-out-alt"></i></button>
                      </div>
                  `;
          document
            .getElementById("logout-btn")
            .addEventListener("click", handleLogout);
        } else if (userControlArea) {
          // Pastikan ikon login ada jika tidak login
          userControlArea.innerHTML = `<a href="login.html" class="nav-user-icon" aria-label="Akun Pengguna"><i class="fas fa-user"></i></a>`;
        }
      })
      .catch((error) => {
        console.error("Error checking session status:", error);
        // Tampilkan ikon login sebagai fallback jika ada error
        const userControlArea = document.getElementById("user-control-area");
        if (userControlArea)
          userControlArea.innerHTML = `<a href="login.html" class="nav-user-icon" aria-label="Akun Pengguna"><i class="fas fa-user"></i></a>`;
      });
  }

  function handleLogout() {
    // Panggil endpoint logout di backend
    fetch("backend/logout_process.php", { method: "POST" }) // Kirim request POST ke logout
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Network error")
      )
      .then((data) => {
        if (data.success) {
          showToast("Anda telah logout.");
          // Update UI atau redirect setelah logout
          setTimeout(() => {
            window.location.href = "index.html";
          }, 1500);
        } else {
          showToast("Gagal logout.", "error");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
        showToast("Terjadi kesalahan saat logout.", "error");
      });
  }

  /* --- 7. Router Konten Utama --- */
  function loadPageContent() {
    const bodyId = document.body.id;
    if (!bodyId) return;
    hideLoadingPlaceholder();
    switch (bodyId) {
      case "home-page":
        renderHomePage();
        initContactForm();
        break;
      case "support-page":
        renderSupportPage();
        break;
      case "product-detail-page":
        renderProductDetail();
        break;
      case "blog-post-page":
        renderBlogDetail();
        break;
      case "compare-page":
        renderComparePage();
        break;
      case "driver-page":
        renderDriverPage();
        break;
      case "warranty-page":
        renderWarrantyPage();
        break;
      case "login-page":
        initLoginForm();
        break;
      case "register-page":
        initRegisterForm();
        break;
      case "cart-page":
        renderCartPage();
        break;
      case "checkout-page":
        renderCheckoutPage();
        break;
    }
  }

  /* --- 8. Render Konten Halaman & Inisialisasi Form --- */

  // 8.1: Homepage
  function renderHomePage() {
    const gridContainer = document.getElementById("product-grid-container");
    const blogContainer = document.getElementById("blog-grid-container");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");
    if (!gridContainer || !blogContainer || !searchInput || !filterBtns) return;
    let currentCategory = "all";
    let currentSearch = "";
    let productsToCompare =
      JSON.parse(localStorage.getItem("productsToCompare")) || [];
    function renderProducts() {
      const filtered = products.filter(
        (p) =>
          (currentCategory === "all" || p.category === currentCategory) &&
          p.name.toLowerCase().includes(currentSearch)
      );
      gridContainer.innerHTML =
        filtered.length === 0
          ? '<p class="product-not-found" style="grid-column: 1 / -1; text-align: center; padding: 2rem 0;">Produk tidak ditemukan.</p>'
          : filtered
              .map((p) => {
                const i = productsToCompare.includes(p.id);
                const f = formatCurrency(p.price);
                return `<div class="product-card" data-id="${
                  p.id
                }"><a href="produk.html?id=${
                  p.id
                }" class="product-card-image-link"><div class="product-card-image"><img src="${
                  p.image
                }" alt="${
                  p.name
                }" loading="lazy"></div></a><div class="product-card-content"><h3><a href="produk.html?id=${
                  p.id
                }">${p.name}</a></h3><p class="product-specs">${
                  p.shortSpecs
                }</p><p class="product-price">${f}</p><div class="product-card-actions"><button class="btn btn-sm add-to-cart-btn" data-id="${
                  p.id
                }">+ Keranjang</button><label class="compare-checkbox"><input type="checkbox" class="compare-check" data-id="${
                  p.id
                }" ${i ? "checked" : ""}> Bandingkan</label></div></div></div>`;
              })
              .join("");
      gridContainer
        .querySelectorAll(".add-to-cart-btn")
        .forEach((b) =>
          b.addEventListener("click", (e) =>
            addToCart(parseInt(e.target.dataset.id))
          )
        );
    }
    function renderBlog() {
      const l = blogPosts.slice(0, 3);
      blogContainer.innerHTML = l
        .map(
          (p) =>
            `<a href="artikel.html?id=${p.id}" class="blog-card"><div class="blog-card-image"><img src="${p.image}" alt="${p.title}" loading="lazy"></div><div class="blog-card-content"><p class="blog-card-meta">${p.date}</p><h3>${p.title}</h3><span class="btn-read-more">Baca <i class="fas fa-arrow-right"></i></span></div></a>`
        )
        .join("");
    }
    filterBtns.forEach((b) =>
      b.addEventListener("click", () => {
        filterBtns.forEach((bt) => bt.classList.remove("active"));
        b.classList.add("active");
        currentCategory = b.dataset.category;
        renderProducts();
      })
    );
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase();
      renderProducts();
    });
    const cbBar = document.getElementById("compare-bar");
    const cbItems = document.getElementById("compare-items");
    const cbBtn = document.getElementById("compare-button");
    function updateCompareBar() {
      if (!cbBar || !cbItems || !cbBtn) return;
      cbBar.classList.toggle("visible", productsToCompare.length > 0);
      cbItems.innerHTML = productsToCompare
        .map((id) => {
          const p = products.find((pr) => pr.id === id);
          return p
            ? `<div class="compare-item"><img src="${p.image}" alt="${p.name}"><button class="compare-item-remove" data-id="${id}">×</button></div>`
            : "";
        })
        .join("");
      cbBtn.disabled = productsToCompare.length < 2;
      cbBtn.textContent = `Bandingkan (${productsToCompare.length}) ${
        productsToCompare.length < 2 ? "(Min. 2)" : ""
      }`;
    }
    gridContainer.addEventListener("change", (e) => {
      if (e.target.classList.contains("compare-check")) {
        const id = parseInt(e.target.dataset.id);
        if (e.target.checked) {
          if (productsToCompare.length < 4) productsToCompare.push(id);
          else {
            alert("Maksimal 4 produk.");
            e.target.checked = false;
          }
        } else {
          productsToCompare = productsToCompare.filter((pid) => pid !== id);
        }
        try {
          localStorage.setItem(
            "productsToCompare",
            JSON.stringify(productsToCompare)
          );
        } catch (err) {
          console.error("LS Error:", err);
        }
        updateCompareBar();
      }
    });
    cbBar?.addEventListener("click", (e) => {
      if (e.target.classList.contains("compare-item-remove")) {
        const id = parseInt(e.target.dataset.id);
        productsToCompare = productsToCompare.filter((pid) => pid !== id);
        try {
          localStorage.setItem(
            "productsToCompare",
            JSON.stringify(productsToCompare)
          );
        } catch (err) {
          console.error("LS Error:", err);
        }
        const chk = gridContainer.querySelector(
          `.compare-check[data-id="${id}"]`
        );
        if (chk) chk.checked = false;
        updateCompareBar();
      }
      if (e.target.id === "compare-button" && productsToCompare.length > 1)
        window.location.href = "bandingkan.html";
    });
    renderProducts();
    renderBlog();
    updateCompareBar();
  }

  // 8.2 s/d 8.9 (Support, Detail Produk, Blog, Compare, Driver, Warranty, Sidebar, Contact)
  /* ... (Kode fungsi renderSupportPage s/d initContactForm tetap sama seperti sebelumnya) ... */
  function renderSupportPage() {
    const faqContainer = document.getElementById("faq-accordion");
    const faqSearch = document.getElementById("faq-search-input");
    const faqNoResults = document.getElementById("faq-no-results");
    if (!faqContainer || !faqSearch || !faqNoResults) return;
    const faqs = [
      {
        q: "Bagaimana cara mendaftarkan garansi?",
        a: "Melalui halaman 'Registrasi Garansi'. Siapkan nomor seri & tanggal beli.",
      },
      {
        q: "Di mana download driver?",
        a: "Di halaman 'Download Driver & Manual'. Pilih model produk Anda.",
      },
      {
        q: "Berapa lama garansi?",
        a: "Semua laptop garansi resmi 2 tahun (24 bulan) suku cadang & perbaikan.",
      },
      {
        q: "Bisa upgrade RAM/SSD sendiri?",
        a: "Beberapa bisa, tapi disarankan di servis resmi agar garansi berlaku. Hubungi CS untuk info model.",
      },
    ];
    function renderFAQs(filter = "") {
      const f = filter.toLowerCase();
      const filtered = faqs.filter(
        (fq) => fq.q.toLowerCase().includes(f) || fq.a.toLowerCase().includes(f)
      );
      faqNoResults.style.display = filtered.length === 0 ? "block" : "none";
      faqContainer.innerHTML = filtered
        .map(
          (fq, i) =>
            `<div class="faq-item"><div class="faq-question" data-index="${i}"><span>${fq.q}</span><i class="fas fa-chevron-down"></i></div><div class="faq-answer"><p>${fq.a}</p></div></div>`
        )
        .join("");
    }
    faqContainer.addEventListener("click", (e) => {
      const q = e.target.closest(".faq-question");
      if (q) {
        const item = q.parentElement;
        const isActive = item.classList.contains("active");
        faqContainer
          .querySelectorAll(".faq-item")
          .forEach((i) => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      }
    }); // Single open accordion
    faqSearch.addEventListener("input", (e) =>
      renderFAQs(e.target.value.toLowerCase())
    );
    renderFAQs();
  }
  function renderProductDetail() {
    const container = getContainer();
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = products.find((p) => p.id === productId);
    if (product) {
      document.title = `${product.name} | XYZ Company`;
      const metaDesc =
        document.querySelector('meta[name="description"]') ||
        document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = product.description;
      document.head.appendChild(metaDesc);
      const formattedPrice = formatCurrency(product.price);
      container.innerHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="index.html#products">Produk</a> > <span>${
        product.name
      }</span></nav><h1>${
        product.name
      }</h1></div></header><section class="section"><div class="container"><div class="product-detail-layout"><div class="product-image-gallery"><img src="${
        product.image
      }" alt="${
        product.name
      }" class="product-main-image"></div><div class="product-details"><p class="product-price">${formattedPrice}</p><p class="product-short-desc">${
        product.description
      }</p><div class="add-to-cart-section"><label for="quantity">Jumlah:</label><input type="number" id="quantity" value="1" min="1" class="quantity-input"><button class="btn add-to-cart-btn-detail" data-id="${
        product.id
      }">+ Keranjang</button></div><div class="product-key-features"><h3>Fitur Unggulan</h3><ul>${product.keyFeatures
        .map((f) => `<li>${f}</li>`)
        .join(
          ""
        )}</ul></div></div></div><div class="product-tabs-container" style="margin-top: 4rem;"><nav class="product-tabs"><span class="tab-link active" data-tab="specs">Spesifikasi</span><span class="tab-link" data-tab="video">Video</span><span class="tab-link" data-tab="reviews">Ulasan</span></nav><div id="specs" class="tab-content active"><table class="specs-table"><tbody>${Object.entries(
        product.fullSpecs
      )
        .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
        .join(
          ""
        )}</tbody></table></div><div id="video" class="tab-content"><div class="video-container"><iframe src="${
        product.videoUrl
      }" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><div id="reviews" class="tab-content">${
        product.reviews && product.reviews.length > 0
          ? product.reviews
              .map(
                (r) =>
                  `<div class="review-item"><div class="review-header"><span class="review-author">${
                    r.author
                  }</span><span class="review-rating">${' <i class="fas fa-star"></i>'.repeat(
                    r.rating
                  )}${' <i class="far fa-star"></i>'.repeat(
                    5 - r.rating
                  )}</span></div><p class="review-text">${r.text}</p></div>`
              )
              .join("")
          : "<p>Belum ada ulasan.</p>"
      }</div></div></div></section>`;
      const tabLinks = container.querySelectorAll(".tab-link");
      const tabContents = container.querySelectorAll(".tab-content");
      tabLinks.forEach((link) =>
        link.addEventListener("click", () => {
          const tabId = link.dataset.tab;
          tabLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
          tabContents.forEach((c) =>
            c.classList.toggle("active", c.id === tabId)
          );
        })
      );
      const addButton = container.querySelector(".add-to-cart-btn-detail");
      const quantityInput = container.querySelector("#quantity");
      if (addButton && quantityInput)
        addButton.addEventListener("click", (e) =>
          addToCart(
            parseInt(e.target.dataset.id),
            parseInt(quantityInput.value) || 1
          )
        );
    } else {
      document.title = "Produk Tidak Ditemukan";
      container.innerHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="index.html#products">Produk</a></nav><h1>Produk Tidak Ditemukan</h1></div></header><div class="container product-not-found"><h2>Oops! Produk tidak ada.</h2><p>Kembali ke halaman produk kami.</p><a href="index.html#products" class="btn">Lihat Semua Produk</a></div>`;
    }
  }
  function renderBlogDetail() {
    const container = getContainer();
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));
    const post = blogPosts.find((p) => p.id === postId);
    if (post) {
      document.title = `${post.title} | XYZ Company`;
      const metaDesc =
        document.querySelector('meta[name="description"]') ||
        document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = post.content.substring(0, 160).replace(/<[^>]+>/g, "");
      document.head.appendChild(metaDesc);
      container.innerHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="index.html#blog">Blog</a> > <span>${post.title}</span></nav><h1>${post.title}</h1><p class="blog-post-meta">Dipublikasikan pada ${post.date}</p></div></header><section class="section"><div class="container"><article class="blog-article"><img src="${post.image}" alt="${post.title}" class="blog-post-featured-image"><div class="blog-post-content">${post.content}</div></article></div></section>`;
    } else {
      document.title = "Artikel Tidak Ditemukan";
      container.innerHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="index.html#blog">Blog</a></nav><h1>Artikel Tidak Ditemukan</h1></div></header><div class="container article-not-found"><h2>Oops! Artikel tidak ada.</h2><p>Kembali ke beranda.</p><a href="index.html" class="btn">Kembali ke Beranda</a></div>`;
    }
  }
  function renderComparePage() {
    const container = getContainer();
    const productIds = JSON.parse(localStorage.getItem("productsToCompare"));
    document.title = "Bandingkan Produk | XYZ Company";
    if (productIds && productIds.length > 1) {
      const productsToDisplay = products.filter((p) =>
        productIds.includes(p.id)
      );
      let tableHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="index.html#products">Produk</a> > <span>Bandingkan</span></nav><h1>Bandingkan Produk</h1></div></header><section class="section"><div class="container" style="overflow-x: auto;"><table class="comparison-table"><thead><tr><th>Fitur</th>`;
      productsToDisplay.forEach((p) => {
        tableHTML += `<th><img src="${p.image}" alt="${p.name}"><h3>${
          p.name
        }</h3><p class="product-price">${formatCurrency(p.price)}</p></th>`;
      });
      tableHTML += `</tr></thead><tbody>`;
      const allKeys = new Set(["Harga"]);
      productsToDisplay.forEach((p) =>
        Object.keys(p.fullSpecs).forEach((key) => allKeys.add(key))
      );
      allKeys.forEach((key) => {
        tableHTML += `<tr><td>${key}</td>`;
        productsToDisplay.forEach((p) => {
          let value =
            key === "Harga" ? formatCurrency(p.price) : p.fullSpecs[key] || "-";
          tableHTML += `<td>${value}</td>`;
        });
        tableHTML += `</tr>`;
      });
      tableHTML += `</tbody></table></div></section><div class="text-center" style="margin-bottom: 4rem;"><button class='btn' id='clear-compare'>Hapus & Kembali</button></div>`;
      container.innerHTML = tableHTML;
      document
        .getElementById("clear-compare")
        ?.addEventListener("click", () => {
          localStorage.removeItem("productsToCompare");
          window.location.href = "index.html#products";
        });
    } else {
      container.innerHTML = `<header class="page-header"><div class="container"><h1>Bandingkan Produk</h1></div></header><div class="container product-not-found"><h2>Pilih Produk</h2><p>Pilih minimal 2 produk untuk dibandingkan.</p><a href="index.html#products" class="btn">Kembali ke Produk</a></div>`;
    }
  }
  function renderDriverPage() {
    const container = getContainer();
    document.title = "Download Driver | XYZ Company";
    container.innerHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="dukungan.html">Dukungan</a> > <span>Download Driver</span></nav><h1>Download Driver & Manual</h1></div></header><section class="section"><div class="container page-content-layout"><div class="page-main-content"><h2>Pilih Produk Anda</h2><ul class="download-list">${products
      .map(
        (p) =>
          `<li><span>${p.name}</span><a href="${
            p.driverUrl
          }" class="btn btn-secondary btn-sm" ${
            p.driverUrl === "#"
              ? 'disabled title="Link belum tersedia"'
              : 'target="_blank" rel="noopener"'
          }>Download <i class="fas fa-download"></i></a></li>`
      )
      .join("")}</ul></div>${renderSupportSidebar("driver")}</div></section>`;
  }
  function renderWarrantyPage() {
    const container = getContainer();
    document.title = "Registrasi Garansi | XYZ Company";
    container.innerHTML = `<header class="page-header"><div class="container"><nav class="breadcrumbs"><a href="index.html">Beranda</a> > <a href="dukungan.html">Dukungan</a> > <span>Registrasi Garansi</span></nav><h1>Registrasi Garansi</h1></div></header><section class="section"><div class="container page-content-layout"><div class="page-main-content"><h2>Formulir Registrasi</h2><p style="margin-bottom: 2rem;">Daftarkan produk Anda.</p><form id="warranty-form"><div class="form-group"><label for="name">Nama</label><input type="text" id="name" required></div><div class="form-group"><label for="email">Email</label><input type="email" id="email" required></div><div class="form-group"><label for="product-select">Produk</label><select id="product-select" required><option value="" disabled selected>-- Pilih --</option></select></div><div class="form-group"><label for="serial-number">Nomor Seri</label><input type="text" id="serial-number" placeholder="Pilih produk dahulu" required></div><div class="form-group"><label for="purchase-date">Tgl. Beli</label><input type="date" id="purchase-date" required></div><button type="submit" class="btn">Daftarkan</button><p id="form-status" class="auth-status"></p></form></div>${renderSupportSidebar(
      "warranty"
    )}</div></section>`;
    const ps = document.getElementById("product-select");
    const sn = document.getElementById("serial-number");
    products.forEach((p) => {
      const o = document.createElement("option");
      o.value = p.serialPrefix;
      o.textContent = p.name;
      ps.appendChild(o);
    });
    ps.addEventListener("change", () => {
      sn.placeholder = `Contoh: ${ps.value}12345`;
    });
    const wf = document.getElementById("warranty-form");
    const fs = document.getElementById("form-status");
    wf.addEventListener("submit", (e) => {
      e.preventDefault();
      fs.textContent = "Mendaftarkan...";
      fs.className = "auth-status";
      setTimeout(() => {
        fs.textContent = "Garansi berhasil didaftarkan!";
        fs.classList.add("success");
        wf.reset();
        sn.placeholder = "Pilih produk dahulu";
      }, 1500);
    });
  }
  function renderSupportSidebar(activePage) {
    return `<aside class="page-sidebar"><div class="sidebar-widget"><h3>Layanan Dukungan</h3><ul><li><a href="registrasi-garansi.html" class="${
      activePage === "warranty" ? "active" : ""
    }">Registrasi Garansi</a></li><li><a href="download-driver.html" class="${
      activePage === "driver" ? "active" : ""
    }">Download Driver</a></li><li><a href="index.html#contact">Pusat Servis</a></li><li><a href="dukungan.html#faq">Pertanyaan Umum</a></li></ul></div></aside>`;
  }
  function initContactForm() {
    const f = document.getElementById("contact-form");
    const s = document.getElementById("form-status");
    if (!f || !s) return;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      s.textContent = "Mengirim...";
      s.className = "";
      setTimeout(() => {
        s.textContent = "Pesan terkirim!";
        s.classList.add("success");
        f.reset();
      }, 1500);
    });
  }

  // 8.10: Form Registrasi (Fetch ke Backend)
  function initRegisterForm() {
    const rf = document.getElementById("register-form");
    const fs = document.getElementById("auth-status");
    if (!rf || !fs) return;
    rf.addEventListener("submit", (e) => {
      e.preventDefault();
      fs.textContent = "Memproses...";
      fs.className = "auth-status";
      const fd = new FormData(rf);
      if (
        !fd.get("name") ||
        !fd.get("email") ||
        !fd.get("password") ||
        !fd.get("confirm_password")
      ) {
        fs.textContent = "Harap isi semua kolom.";
        fs.classList.add("error");
        return;
      }
      if (fd.get("password") !== fd.get("confirm_password")) {
        fs.textContent = "Konfirmasi password tidak cocok.";
        fs.classList.add("error");
        return;
      }
      if (!document.getElementById("terms")?.checked) {
        fs.textContent = "Anda harus menyetujui S&K.";
        fs.classList.add("error");
        return;
      }
      fetch("backend/register_process.php", { method: "POST", body: fd })
        .then((res) => (res.ok ? res.json() : Promise.reject("Network error")))
        .then((data) => {
          fs.textContent = data.message;
          fs.className = `auth-status ${data.success ? "success" : "error"}`;
          if (data.success) {
            rf.reset();
            setTimeout(() => {
              window.location.href = "login.html";
            }, 2000);
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          fs.textContent = "Koneksi server gagal.";
          fs.className = "auth-status error";
        });
    });
  }

  // 8.11: Form Login (Fetch ke Backend)
  function initLoginForm() {
    const lf = document.getElementById("login-form");
    const fs = document.getElementById("auth-status");
    if (!lf || !fs) return;
    lf.addEventListener("submit", (e) => {
      e.preventDefault();
      fs.textContent = "Memproses...";
      fs.className = "auth-status";
      const fd = new FormData(lf);
      if (!fd.get("email") || !fd.get("password")) {
        fs.textContent = "Email & password wajib diisi.";
        fs.classList.add("error");
        return;
      }
      fetch("backend/login_process.php", { method: "POST", body: fd })
        .then((res) => (res.ok ? res.json() : Promise.reject("Network error")))
        .then((data) => {
          fs.textContent = data.message;
          fs.className = `auth-status ${data.success ? "success" : "error"}`;
          if (data.success) {
            setTimeout(() => {
              window.location.href = "index.html";
            }, 1500);
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          fs.textContent = "Koneksi server gagal.";
          fs.className = "auth-status error";
        });
    });
  }

  // 8.12: Render Halaman Keranjang
  function renderCartPage() {
    const cont = document.getElementById("cart-items-container");
    const summ = document.getElementById("cart-summary-container");
    if (!cont || !summ) return;
    const cart = getCart();
    if (cart.length === 0) {
      cont.innerHTML = `<div class="cart-empty"><h3>Keranjang Kosong</h3><p>Anda belum menambahkan produk.</p><a href="index.html#products" class="btn">Mulai Belanja</a></div>`;
      summ.innerHTML = "";
      return;
    }
    cont.innerHTML = cart
      .map((item) => {
        const fp = formatCurrency(item.price);
        const sub =
          parseFloat(String(item.price).replace(/\./g, "").replace(/,/g, ".")) *
          item.quantity;
        const fs = formatCurrency(sub);
        return `<div class="cart-item" data-id="${item.id}"><div class="cart-item-image"><a href="produk.html?id=${item.id}"><img src="${item.image}" alt="${item.name}"></a></div><div class="cart-item-details"><h4><a href="produk.html?id=${item.id}">${item.name}</a></h4><span class="item-price">${fp}</span></div><div class="cart-item-quantity"><input type="number" value="${item.quantity}" min="1" class="quantity-input-cart" data-id="${item.id}"></div><div class="cart-item-subtotal">${fs}</div><div class="cart-item-remove"><button class="remove-from-cart-btn" data-id="${item.id}" aria-label="Hapus">×</button></div></div>`;
      })
      .join("");
    const { subtotal, total } = calculateCartTotals();
    summ.innerHTML = `<h2>Ringkasan</h2><p>Subtotal: <strong>${formatCurrency(
      subtotal
    )}</strong></p><p>Total: <strong>${formatCurrency(
      total
    )}</strong></p><a href="checkout.html" class="btn">Lanjut Checkout</a><button class="btn btn-secondary btn-sm clear-cart-btn" style="margin-left: 1rem;">Kosongkan</button>`;
    cont
      .querySelectorAll(".remove-from-cart-btn")
      .forEach((b) =>
        b.addEventListener("click", (e) =>
          removeFromCart(parseInt(e.target.dataset.id))
        )
      );
    cont
      .querySelectorAll(".quantity-input-cart")
      .forEach((i) =>
        i.addEventListener("change", (e) =>
          updateCartQuantity(
            parseInt(e.target.dataset.id),
            parseInt(e.target.value)
          )
        )
      );
    summ.querySelector(".clear-cart-btn")?.addEventListener("click", () => {
      if (confirm("Kosongkan keranjang?")) clearCart();
    });
  }

  // 8.13: Render Halaman Checkout
  function renderCheckoutPage() {
    const itemsSumm = document.getElementById("checkout-items-summary");
    const totalsSumm = document.getElementById("checkout-totals-summary");
    const form = document.getElementById("checkout-form");
    const status = document.getElementById("checkout-status");
    if (!itemsSumm || !totalsSumm || !form) return;
    const cart = getCart();
    if (cart.length === 0) {
      window.location.href = "keranjang.html";
      return;
    }
    itemsSumm.innerHTML = cart
      .map(
        (item) =>
          `<div class="checkout-item-summary"><div class="checkout-item-info"><span class="item-name">${
            item.name
          } (x${
            item.quantity
          })</span></div><span class="checkout-item-price">${formatCurrency(
            parseFloat(
              String(item.price).replace(/\./g, "").replace(/,/g, ".")
            ) * item.quantity
          )}</span></div>`
      )
      .join("");
    const { subtotal, total } = calculateCartTotals();
    totalsSumm.innerHTML = `<div><span>Subtotal</span> <span>${formatCurrency(
      subtotal
    )}</span></div><div class="total"><span>Total</span> <span>${formatCurrency(
      total
    )}</span></div>`;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Memproses (simulasi)...";
      status.className = "auth-status";
      setTimeout(() => {
        status.textContent = "Pesanan berhasil (simulasi)!";
        status.classList.add("success");
        clearCart();
        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      }, 2000); /* GANTI DENGAN FETCH KE backend/checkout_process.php */
    });
  }
}); // Akhir DOMContentLoaded
