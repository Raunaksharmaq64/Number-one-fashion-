/* ==========================================================================
   PRODUCT DATABASE
   ========================================================================== */
const products = [
    {
        id: 1,
        name: "Vanguard Multi-Pocket Cargo Trousers",
        category: "cargo-denim",
        categoryLabel: "Cargo & Denim",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        sizes: ["M", "L", "XL", "XXL"],
        drop: "NEW DROP",
        status: "IN STOCK",
        images: [
            "assets/images/SaveInta.com_670956093_17962271523082949_3063192840129996949_n.jpg",
            "assets/images/SaveInta.com_671072517_17962271532082949_7906765343355774544_n.jpg",
            "assets/images/SaveInta.com_671807304_17962271541082949_5467553914263678297_n.jpg"
        ],
        description: "Engineered from heavyweight cotton canvas, the Vanguard Multi-Pocket Cargos represent streetwear functionality at its peak. Featuring signature 3D side cargo pockets, adjustable straps, and reinforced knee panelling for ultimate durability and comfort."
    },
    {
        id: 2,
        name: "Aero-Relaxed Distressed Denim",
        category: "cargo-denim",
        categoryLabel: "Cargo & Denim",
        price: 1899,
        originalPrice: 2999,
        discount: 36,
        sizes: ["M", "L", "XL", "XXL"],
        drop: "BESTSELLER",
        status: "LIMITED",
        images: [
            "assets/images/SaveInta.com_671833987_17962271553082949_1567463567887626009_n.jpg",
            "assets/images/SaveInta.com_684750472_17962271514082949_639199271433731092_n.jpg",
            "assets/images/SaveInta.com_703473563_17963364639082949_6772340609937882291_n.jpg"
        ],
        description: "Designed for a relaxed, baggier aesthetic, these premium washed-blue denims offer custom hand-distressed detailing, custom embroidery on back pockets, and heavy-duty 14oz denim fabric designed to age beautifully with wear."
    },
    {
        id: 3,
        name: "Tech-Utility Windbreaker Jacket",
        category: "utility-jackets",
        categoryLabel: "Utility & Jackets",
        price: 2199,
        originalPrice: 3499,
        discount: 37,
        sizes: ["M", "L", "XL", "XXL"],
        drop: "LIMITED RUN",
        status: "IN STOCK",
        images: [
            "assets/images/SaveInta.com_703545594_17963364621082949_7502238751991363016_n.jpg",
            "assets/images/SaveInta.com_703621259_17963364558082949_2610546269875473625_n.jpg",
            "assets/images/SaveInta.com_703633046_17963364594082949_4177270626678116818_n.jpg"
        ],
        description: "A versatile weatherproof streetwear staple. Features a high-collar hood, zippered utility pockets, adjustable wrist cuffs, and micro-mesh inner lining for breathability. Windproof exterior with sharp solid black trims."
    },
    {
        id: 4,
        name: "Retro Varsity Wool Jacket",
        category: "utility-jackets",
        categoryLabel: "Utility & Jackets",
        price: 2499,
        originalPrice: 3999,
        discount: 37,
        sizes: ["M", "L", "XL", "XXL"],
        drop: "VINTAGE DROP",
        status: "LIMITED",
        images: [
            "assets/images/SaveInta.com_704097780_17963364585082949_2711452807904197488_n.jpg",
            "assets/images/SaveInta.com_705729498_17963364603082949_6273495953437308791_n.jpg",
            "assets/images/SaveInta.com_705988810_17963364534082949_4915213281351651375_n.jpg"
        ],
        description: "Inspired by collegiate heritage styling, this varsity jacket combines a premium wool-blend body with contrasting leatherette sleeves. Adorned with high-density chenille patches and elasticated ribbed hems for a timeless look."
    },
    {
        id: 5,
        name: "Luxury Knitted Street Polo",
        category: "tees-polos",
        categoryLabel: "Tees & Polos",
        price: 1199,
        originalPrice: 1999,
        discount: 40,
        sizes: ["M", "L", "XL", "XXL"],
        drop: "PREMIUM ESSENTIAL",
        status: "IN STOCK",
        images: [
            "assets/images/SaveInta.com_706236967_17963364576082949_5402352213410461514_n.jpg",
            "assets/images/SaveInta.com_706397177_17963364612082949_1560431766581464519_n.jpg",
            "assets/images/SaveInta.com_706417455_17963364630082949_3423708602324839110_n.jpg"
        ],
        description: "Elevating the casual polo to high-fashion streetwear. Knitted from premium ultra-soft long-staple cotton, featuring a modern boxy silhouette, structured ribbed collar, and drop-shoulder drape."
    },
    {
        id: 6,
        name: "Heavyweight Boxy Graphic Tee",
        category: "tees-polos",
        categoryLabel: "Tees & Polos",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        sizes: ["M", "L", "XL", "XXL"],
        drop: "GRAPHIC DROP",
        status: "IN STOCK",
        images: [
            "assets/images/SaveInta.com_706504607_17963364549082949_148392870123267973_n.jpg",
            "assets/images/SaveInta.com_706704850_17963364525082949_524575168351612108_n.jpg",
            "assets/images/SaveInta.com_706794098_17963364567082949_207715613660825292_n.jpg"
        ],
        description: "Crafted from 240GSM heavyweight cotton jersey for the ultimate boxy streetwear fit. Features a high-rib crewneck, retro high-density screen print front graphics, and enzyme washing for an authentic vintage hand-feel."
    }
];

/* ==========================================================================
   TESTIMONIALS DATA
   ========================================================================== */
const testimonials = [
    {
        name: "Arjun Verma",
        location: "Delhi, India",
        rating: 5,
        text: "Absolutely blown away by the quality! The cargo trousers have the best fabric I've ever seen at this price point. Delivery to Delhi was super fast. Will definitely order again!",
        initial: "A"
    },
    {
        name: "Priya Mehra",
        location: "Mumbai, India",
        rating: 5,
        text: "The varsity jacket is incredible — it looks exactly like the photos. The stitching, the patches, everything is premium. My friends keep asking where I got it from!",
        initial: "P"
    },
    {
        name: "Rohit Singh",
        location: "Bhopal, India",
        rating: 5,
        text: "I visited the store in Ashoka Garden and the vibe is amazing. Vihan and Aman are super helpful. Got three pieces and every single one is a banger!",
        initial: "R"
    },
    {
        name: "Sneha Patel",
        location: "Jaipur, India",
        rating: 5,
        text: "Ordered two graphic tees for my boyfriend. The heavyweight cotton quality is unreal at this price. WhatsApp checkout was so easy! Amazing experience.",
        initial: "S"
    },
    {
        name: "Karan Malhotra",
        location: "Pune, India",
        rating: 5,
        text: "The windbreaker jacket is my absolute favourite. Waterproof, stylish, and got so many compliments. Number One Fashion Point is my go-to now!",
        initial: "K"
    },
    {
        name: "Ananya Sharma",
        location: "Indore, India",
        rating: 4,
        text: "Great collection and reasonable prices for the quality you get. The knitted polo fits perfectly. Shipped in 4 days to Indore. Highly recommend!",
        initial: "A"
    }
];

/* ==========================================================================
   STATE & STORAGE
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('no1_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('no1_wishlist')) || [];

/* ==========================================================================
   DOM LOADED INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Preloader
    initPreloader();

    // 2. Render
    renderProducts('all');
    renderTestimonials();
    updateCartUI();

    // 3. Custom Cursor
    initCustomCursor();

    // 4. GSAP
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        animateHero();
        initScrollAnimations();
        initMagneticButtons();

        // Refresh triggers on full load (once all images/styles are fully rendered)
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });
    }

    // 5. Header scroll
    window.addEventListener('scroll', handleScroll);

    // 6. Cart Drawer
    setupCartDrawerEvents();

    // 7. Checkout Form
    setupCheckoutForm();

    // 8. Modal close
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('productModal');
    if (modalClose) modalClose.addEventListener('click', closeQuickView);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeQuickView(); });

    // 9. Catalog Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.getAttribute('data-filter'));
        });
    });

    // 10. Mobile Menu
    initMobileMenu();

    // 11. Back to Top
    initBackToTop();

    // 12. Newsletter
    initNewsletter();

    // 13. Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                closeMobileMenu();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

/* ==========================================================================
   PRELOADER
   ========================================================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => { preloader.remove(); }, 600);
        }, 1900);
    });

    // Fallback: hide after 4s no matter what
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            setTimeout(() => { preloader.remove(); }, 600);
        }
    }, 4000);
}

/* ==========================================================================
   SCROLL HANDLER
   ========================================================================== */
function handleScroll() {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }

    // Back to top visibility
    const btn = document.getElementById('backToTop');
    if (btn) {
        btn.classList.toggle('visible', window.scrollY > 500);
    }
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    // Create overlay for mobile menu
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }


    hamburger.addEventListener('click', () => {
        const isActive = navMenu.classList.contains('active');
        if (isActive) {
            closeMobileMenu();
        } else {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            overlay.classList.add('active');
            const header = document.getElementById('mainHeader');
            if (header) header.classList.add('menu-active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close on overlay click
    overlay.addEventListener('click', closeMobileMenu);

    // Close on nav link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.querySelector('.nav-overlay');
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    const header = document.getElementById('mainHeader');
    if (header) header.classList.remove('menu-active');
    document.body.style.overflow = '';
}

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   NEWSLETTER
   ========================================================================== */
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value.trim();
        if (email) {
            showToast(`🎉 You're subscribed! Welcome to the VIP list.`);
            form.reset();
        }
    });
}

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const circle = document.querySelector('.cursor-circle');
    const dot = document.querySelector('.cursor-dot');

    if (!cursor || !circle || !dot || typeof gsap === 'undefined') return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        posX += (mouseX - posX) * 0.15;
        posY += (mouseY - posY) * 0.15;
        gsap.set(cursor, { x: mouseX - 10, y: mouseY - 10 });
        gsap.set(circle, { x: posX - mouseX, y: posY - mouseY });
    });

    setupHoverStatesForInteractive();
}

function setupHoverStatesForInteractive() {
    const interactiveElements = document.querySelectorAll(
        'a, button, .product-card, .thumb-btn, .size-radio-label, .filter-btn, .qty-btn, .social-icon-btn, .cart-item-remove, .brand-logo-img, .card-wishlist-btn, .testimonial-card'
    );
    interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });
}

function onMouseEnterInteractive(e) {
    document.body.classList.add('hover-interactive');
    const cursorText = document.querySelector('.custom-cursor .cursor-text');
    if (cursorText) {
        cursorText.textContent = e.currentTarget.classList.contains('product-card') ? 'VIEW' : 'GO';
    }
}

function onMouseLeaveInteractive() {
    document.body.classList.remove('hover-interactive');
}

/* ==========================================================================
   WISHLIST MANAGEMENT
   ========================================================================== */
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist ❤️');
    }
    localStorage.setItem('no1_wishlist', JSON.stringify(wishlist));

    // Update all wishlist buttons on page
    document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'));
        btn.classList.toggle('active', wishlist.includes(id));
        btn.innerHTML = wishlist.includes(id)
            ? '<i class="fas fa-heart"></i>'
            : '<i class="far fa-heart"></i>';
    });
}

/* ==========================================================================
   CATALOG RENDERING
   ========================================================================== */
function renderProducts(filterCategory = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.classList.add('filtering');
    const filtered = filterCategory === 'all'
        ? products
        : products.filter(p => p.category === filterCategory);

    setTimeout(() => {
        grid.innerHTML = '';

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-secondary);font-size:16px;">No products found in this category.</div>`;
            grid.classList.remove('filtering');
            return;
        }

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';
            card.setAttribute('data-id', product.id);

            const isWished = wishlist.includes(product.id);

            card.innerHTML = `
                ${product.drop ? `<span class="card-badge-drop">${product.drop}</span>` : ''}
                <button class="card-wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" aria-label="Toggle Wishlist">
                    <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
                </button>

                <div class="product-image-container">
                    <img src="${product.images[0]}" alt="${product.name}" class="product-card-img" loading="lazy">
                    <div class="card-image-indicators">
                        ${product.images.map((img, idx) => `<span class="indicator-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`).join('')}
                    </div>
                </div>

                <div class="product-info-wrap">
                    <div class="product-meta-row">
                        <span class="product-cat">${product.categoryLabel}</span>
                        <span class="product-size-availability">Sizes: ${product.sizes.join(', ')}</span>
                    </div>
                    <h3 class="product-card-title">${product.name}</h3>
                    <div class="product-price-row">
                        <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
                        ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                        ${product.discount ? `<span class="price-discount-tag">${product.discount}% OFF</span>` : ''}
                    </div>
                    <div class="card-actions">
                        <button class="card-btn btn-add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-bag"></i> Add to Bag
                        </button>
                        <button class="card-btn btn-quick-view" data-id="${product.id}">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                </div>
            `;

            grid.appendChild(card);

            // Image switcher
            const imgContainer = card.querySelector('.product-image-container');
            const mainImg = card.querySelector('.product-card-img');
            const dots = card.querySelectorAll('.indicator-dot');

            dots.forEach(dot => {
                const switchImage = () => {
                    const idx = parseInt(dot.getAttribute('data-index'));
                    mainImg.src = product.images[idx];
                    dots.forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                };
                dot.addEventListener('mouseenter', switchImage);
                dot.addEventListener('click', switchImage);
            });

            card.addEventListener('mouseleave', () => {
                mainImg.src = product.images[0];
                dots.forEach(d => d.classList.remove('active'));
                if (dots[0]) dots[0].classList.add('active');
            });

            imgContainer.addEventListener('click', () => openQuickView(product.id));

            card.querySelector('.btn-quick-view').addEventListener('click', (e) => {
                e.stopPropagation();
                openQuickView(product.id);
            });

            card.querySelector('.btn-add-to-cart').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id, 'M', 1);
                showToast(`Added "${product.name}" (Size M) to bag!`);
            });

            card.querySelector('.card-wishlist-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                toggleWishlist(product.id);
            });
        });

        setupHoverStatesForInteractive();
        grid.classList.remove('filtering');

        // Refresh ScrollTrigger to update trigger positions since grid height changed
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 280);
}

/* ==========================================================================
   TESTIMONIALS RENDERING
   ========================================================================== */
function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;

    track.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.initial}</div>
                <div>
                    <div class="testimonial-name">${t.name}</div>
                    <div class="testimonial-location">${t.location}</div>
                </div>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   SHOPPING CART
   ========================================================================== */
function saveCart() {
    localStorage.setItem('no1_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, size = 'M', qty = 1) {
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id: productId, size, qty });
    }
    saveCart();
    openCartDrawer();
}

function updateCartUI() {
    const emptyView = document.getElementById('emptyCartView');
    const itemsList = document.getElementById('cartItemsList');
    const checkoutSection = document.getElementById('cartCheckoutSection');
    const cartCountHeader = document.getElementById('cartCountHeader');
    const cartBadge = document.querySelector('.cart-badge');
    const cartSubtotal = document.getElementById('cartSubtotal');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    if (cartCountHeader) cartCountHeader.textContent = totalItems;
    if (cartBadge) cartBadge.textContent = totalItems;

    if (totalItems === 0) {
        if (emptyView) emptyView.style.display = 'flex';
        if (itemsList) itemsList.innerHTML = '';
        if (checkoutSection) checkoutSection.style.display = 'none';
        return;
    }

    if (emptyView) emptyView.style.display = 'none';
    if (checkoutSection) checkoutSection.style.display = 'block';

    if (itemsList) {
        itemsList.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;
            const itemTotal = product.price * item.qty;
            subtotal += itemTotal;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h5>${product.name}</h5>
                    <p class="cart-item-size">Size: ${item.size}</p>
                    <div class="cart-item-qty-row">
                        <button class="qty-btn dec-qty" data-id="${item.id}" data-size="${item.size}">−</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn inc-qty" data-id="${item.id}" data-size="${item.size}">+</button>
                    </div>
                </div>
                <div class="cart-item-price-side">
                    <span class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
                    <span class="cart-item-remove" data-id="${item.id}" data-size="${item.size}">
                        <i class="fas fa-trash-alt"></i>
                    </span>
                </div>
            `;
            itemsList.appendChild(itemEl);
        });

        if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        setupCartItemEvents();
    }
}

function setupCartItemEvents() {
    document.querySelectorAll('.dec-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const size = btn.getAttribute('data-size');
            const item = cart.find(i => i.id === id && i.size === size);
            if (item) {
                if (item.qty > 1) item.qty--;
                else cart = cart.filter(i => !(i.id === id && i.size === size));
                saveCart();
            }
        });
    });

    document.querySelectorAll('.inc-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const size = btn.getAttribute('data-size');
            const item = cart.find(i => i.id === id && i.size === size);
            if (item) { item.qty++; saveCart(); }
        });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const size = btn.getAttribute('data-size');
            cart = cart.filter(i => !(i.id === id && i.size === size));
            saveCart();
            showToast('Item removed from bag');
        });
    });

    setupHoverStatesForInteractive();
}

/* ==========================================================================
   CART DRAWER
   ========================================================================== */
function setupCartDrawerEvents() {
    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const continueShopping = document.getElementById('continueShopping');

    if (cartToggle) cartToggle.addEventListener('click', openCartDrawer);
    if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
    if (continueShopping) continueShopping.addEventListener('click', (e) => { e.preventDefault(); closeCartDrawer(); });
}

function openCartDrawer() {
    const d = document.getElementById('cartDrawer');
    const o = document.getElementById('cartOverlay');
    if (d && o) { d.classList.add('active'); d.setAttribute('aria-hidden', 'false'); o.classList.add('active'); document.body.style.overflow = 'hidden'; }
}

function closeCartDrawer() {
    const d = document.getElementById('cartDrawer');
    const o = document.getElementById('cartOverlay');
    if (d && o) { d.classList.remove('active'); d.setAttribute('aria-hidden', 'true'); o.classList.remove('active'); document.body.style.overflow = ''; }
}

/* ==========================================================================
   WHATSAPP CHECKOUT
   ========================================================================== */
function setupCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('custName').value.trim();
        const phone = document.getElementById('custPhone').value.trim();
        const address = document.getElementById('custAddress').value.trim();

        if (!name || !phone || !address) { showToast('Please fill out all order fields!'); return; }

        let message = `*🛍️ NUMBER ONE FASHION POINT — NEW ORDER*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `*Customer:* ${name}\n`;
        message += `*WhatsApp:* ${phone}\n`;
        message += `*Address:* ${address}\n\n`;
        message += `*📦 Order Items:*\n`;

        let subtotal = 0;
        cart.forEach((item, idx) => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const itemTotal = product.price * item.qty;
                subtotal += itemTotal;
                message += `${idx + 1}. ${product.name} (Size: ${item.size}) × ${item.qty} — ₹${itemTotal.toLocaleString('en-IN')}\n`;
            }
        });

        message += `\n*💰 Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n`;
        message += `*🚚 Delivery:* FREE (Pan India 🇮🇳)\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `Please confirm my order. Thank you! 🙏`;

        const whatsappUrl = `https://wa.me/917440415040?text=${encodeURIComponent(message)}`;
        cart = [];
        saveCart();
        closeCartDrawer();
        showToast('Redirecting to WhatsApp to complete order...');
        setTimeout(() => { window.open(whatsappUrl, '_blank'); }, 1000);
    });
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    if (!modal || !modalContent) return;

    const isWished = wishlist.includes(product.id);

    modalContent.innerHTML = `
        <div class="modal-gallery-pane">
            <div class="modal-main-img-wrap">
                <img src="${product.images[0]}" alt="${product.name}" class="modal-main-img" id="modalMainImg">
            </div>
            <div class="modal-thumbs-row">
                ${product.images.map((img, idx) => `
                    <button class="thumb-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                        <img src="${img}" alt="${product.name} angle ${idx + 1}">
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="modal-details-pane">
            <span class="modal-category">${product.categoryLabel}</span>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-price-row">
                <span class="price-current" style="font-size:24px;">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.originalPrice ? `<span class="price-original" style="font-size:17px;">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                ${product.discount ? `<span class="price-discount-tag" style="font-size:12px;">${product.discount}% OFF</span>` : ''}
            </div>
            <p class="modal-desc">${product.description}</p>
            <div class="size-selection-wrap">
                <span class="selection-title">Select Size:</span>
                <div class="size-options-row">
                    ${product.sizes.map((size, idx) => `
                        <input type="radio" name="modalSize" id="modal-size-${size}" value="${size}" class="size-radio-input" ${idx === 0 ? 'checked' : ''}>
                        <label for="modal-size-${size}" class="size-radio-label">${size}</label>
                    `).join('')}
                </div>
            </div>
            <div class="modal-meta-specs">
                <div class="spec-line status-tag limited"><i class="fas fa-exclamation-circle"></i> Availability: Limited Quantity — Order Soon</div>
                <div class="spec-line"><i class="fas fa-truck"></i> Delivery: Available across India 🇮🇳</div>
                <div class="spec-line"><i class="fas fa-phone-alt"></i> Contact: 7440415040 / 7974199259</div>
                <div class="spec-line"><i class="fas fa-tags"></i> Premium Streetwear Collection</div>
                <div class="spec-line"><i class="fas fa-ruler"></i> Sizes: M, L, XL, XXL</div>
            </div>
            <div class="modal-actions-row">
                <button class="btn btn-primary" id="modalAddToCartBtn"><i class="fas fa-shopping-bag"></i> ADD TO BAG</button>
                <button class="btn btn-gold" id="modalBuyNowBtn"><i class="fab fa-whatsapp"></i> BUY NOW</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Thumbnails
    const mainImg = document.getElementById('modalMainImg');
    modalContent.querySelectorAll('.thumb-btn').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const idx = parseInt(thumb.getAttribute('data-index'));
            mainImg.src = product.images[idx];
            modalContent.querySelectorAll('.thumb-btn').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Zoom
    setupImageZoom('.modal-main-img-wrap', '#modalMainImg');

    // Actions
    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
        const sizeInput = document.querySelector('input[name="modalSize"]:checked');
        const selectedSize = sizeInput ? sizeInput.value : 'M';
        closeQuickView();
        addToCart(product.id, selectedSize, 1);
        showToast(`Added "${product.name}" (Size ${selectedSize}) to bag!`);
    });

    document.getElementById('modalBuyNowBtn').addEventListener('click', () => {
        const sizeInput = document.querySelector('input[name="modalSize"]:checked');
        const selectedSize = sizeInput ? sizeInput.value : 'M';
        closeQuickView();
        addToCart(product.id, selectedSize, 1);
        setTimeout(() => {
            const form = document.getElementById('checkoutForm');
            if (form) form.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    });

    setupHoverStatesForInteractive();
}

function closeQuickView() {
    const modal = document.getElementById('productModal');
    if (modal) { modal.classList.remove('active'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
}

function setupImageZoom(containerSelector, imgSelector) {
    const container = document.querySelector(containerSelector);
    const img = document.querySelector(imgSelector);
    if (!container || !img) return;

    // Skip zoom on touch devices — mousemove zoom doesn't work on phones/tablets
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        img.style.transform = 'scale(2)';
    });

    container.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.transformOrigin = 'center center';
    });
}

/* ==========================================================================
   TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        Object.assign(container.style, {
            position: 'fixed', bottom: '30px', left: '30px',
            zIndex: '10005', display: 'flex', flexDirection: 'column',
            gap: '10px', pointerEvents: 'none'
        });
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-alert';
    Object.assign(toast.style, {
        backgroundColor: 'var(--bg-dark)', color: '#fff',
        padding: '16px 24px', borderRadius: '14px',
        fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '600',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        transform: 'translateY(100px)', opacity: '0',
        pointerEvents: 'auto',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        display: 'flex', alignItems: 'center', gap: '10px'
    });
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: #3D8B5E;"></i> ${message}`;

    container.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    });

    setTimeout(() => {
        toast.style.transform = 'translateY(-20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3200);
}

/* ==========================================================================
   GSAP ANIMATIONS
   ========================================================================== */
function animateHero() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.announcement-bar', { yPercent: -100, duration: 0.6 })
      .from('.header', { yPercent: -100, duration: 0.6 }, '-=0.3')
      .from('.hero-tagline', { opacity: 0, x: -30, duration: 0.6 })
      .from('.hero-title .reveal-text span', { yPercent: 110, duration: 0.9, stagger: 0.15 }, '-=0.35')
      .from('.hero-desc', { opacity: 0, y: 25, duration: 0.6 }, '-=0.4')
      .from('.hero-cta-group .btn', { opacity: 0, y: 25, duration: 0.6, stagger: 0.1 }, '-=0.4')
      .from('.hero-highlight-card', { opacity: 0, scale: 0.85, rotation: 8, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');
}

function initScrollAnimations() {
    // USP Headers
    gsap.from('.usp-section .section-tag, .usp-section .section-title', {
        scrollTrigger: { trigger: '.usp-section', start: 'top 80%', toggleActions: 'play none none none' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    });

    // USP Cards - Individual Triggering for high reliability on mobile
    gsap.utils.toArray('.usp-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power2.out'
        });
    });

    // Shop Headers
    gsap.from('.shop-section .section-tag, .shop-section .section-title, .catalog-filters', {
        scrollTrigger: { trigger: '.shop-section', start: 'top 80%', toggleActions: 'play none none none' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    });

    // Testimonials Headers
    gsap.from('.testimonials-section .section-tag, .testimonials-section .section-title', {
        scrollTrigger: { trigger: '.testimonials-section', start: 'top 80%', toggleActions: 'play none none none' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    });

    // Testimonials Cards - Individual Triggering for high reliability on mobile
    gsap.utils.toArray('.testimonial-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power2.out'
        });
    });

    // Newsletter Section
    gsap.from('.newsletter-wrapper', {
        scrollTrigger: { trigger: '.newsletter-section', start: 'top 80%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, scale: 0.96, duration: 0.8, ease: 'power3.out'
    });

    // Location Info Panel elements
    gsap.from('.location-info-panel > *', {
        scrollTrigger: { trigger: '.location-section', start: 'top 80%', toggleActions: 'play none none none' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.12, ease: 'power3.out'
    });

    // Map Iframe Container - Custom Individual Triggering
    gsap.from('.map-iframe-container', {
        scrollTrigger: { trigger: '.map-iframe-container', start: 'top 90%', toggleActions: 'play none none none' },
        opacity: 0, scale: 0.95, y: 30, duration: 0.8, ease: 'power3.out'
    });
}

function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
    });
}
