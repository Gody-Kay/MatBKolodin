//Product Data
const FALLBACK_IMAGE = 'images/shared/unisex-fashion-collection.jpeg';
const WHATSAPP_NUMBER = '233534821057';

const products = [
    {
        id: 1,
        name: "Sleeveless One Shoulder Top",
        price: 89.99,
        category: "category1",
        image: "images/shared/sleeveless-one-shoulder-top.jpeg",
        description: "Stylish sleeveless top for casual and evening wear"
    },
    {
        id: 2,
        name: "Unisex Fashion Collection",
        price: 125.00,
        category: "category2",
        image: "images/shared/unisex-fashion-collection.jpeg",
        description: "Trendy fashion pieces for men and women"
    },
    {
        id: 3,
        name: "Stylish Casual Shirt",
        price: 95.99,
        category: "category1",
        image: "images/shared/stylish-casual-shirt.jpeg",
        description: "Comfortable casual shirt for everyday style"
    },
    {
        id: 4,
        name: "Plus Size Elegant Maxi Dress",
        price: 250.00,
        category: "category3",
        image: "images/shared/plus-size-elegant-maxi-dress.jpeg",
        description: "Elegant maxi dress for special occasions"
    },
    {
        id: 5,
        name: "Colorful Fashion Piece",
        price: 250.00,
        category: "category2",
        image: "images/shared/colorful-fashion-piece.jpeg",
        description: "Available in multiple colors and sizes"
    },
    {
        id: 6,
        name: "Premium Fashion Piece",
        price: 199.99,
        category: "category3",
        image: "images/shared/premium-fashion-piece.jpeg",
        description: "Premium exclusive fashion piece"
    }
];

// All images available in the project — used to populate the gallery on each category page
const GALLERY_ITEMS = [
    { name: 'Ankara maternity top', price: 365, image: 'images/shared/ankara-maternity-top.jpeg', category: 'Shared' },
    { name: 'Fashion look 1', price: 245, image: 'images/shared/fashion-look-1.jpeg', category: 'Shared' },
    { name: 'Fashion look 2', price: 255, image: 'images/shared/fashion-look-2.jpeg', category: 'Shared' },
    { name: 'African dress collection', price: 400, image: 'images/shared/african-dress-collection.jpeg', category: 'Shared' },
    { name: 'Kids shoes', price: 240, image: 'images/shared/kids-shoes.jpeg', category: 'Shared' },
    { name: 'Vibrant fashion portrait', price: 470, image: 'images/shared/fashion-portrait-vibrant.jpeg', category: 'Shared' },
    { name: 'Fashion look 3', price: 260, image: 'images/shared/fashion-look-3.jpeg', category: 'Shared' },
    { name: 'Fashion look 4', price: 255, image: 'images/shared/fashion-look-4.jpeg', category: 'Shared' },
    { name: 'Dashiki set', price: 350, image: 'images/shared/dashiki-set.jpeg', category: 'Shared' },
    { name: 'Dashiki shirt', price: 645, image: 'images/shared/dashiki-shirt.jpeg', category: 'Shared' },
    { name: 'African print pant suit', price: 330, image: 'images/shared/african-print-pant-suit.jpeg', category: 'Shared' },
    { name: 'Cultural event outfit', price: 330, image: 'images/shared/cultural-event-outfit.jpeg', category: 'Shared' },
    { name: 'Tribal shirt', price: 450, image: 'images/shared/tribal-shirt.jpeg', category: 'Shared' },
    { name: 'Senator suit', price: 400, image: 'images/shared/senator-suit.jpeg', category: 'Shared' },
    { name: 'Fashion image', price: 310, image: 'images/shared/fashion-image.jpeg', category: 'Shared' },
    { name: 'Usher following Jojo', price: 335, image: 'images/shared/usher-following-jojo.jpeg', category: 'Shared' },
    { name: 'Maroon hoodie', price: 305, image: 'images/shared/maroon-hoodie.jpeg', category: 'Shared' },
    { name: 'Queens of the continent', price: 330, image: 'images/shared/queens-of-the-continent.jpeg', category: 'Shared' },
    { name: 'Patchwork tribal print', price: 330, image: 'images/shared/patchwork-tribal-print.jpeg', category: 'Shared' },
    { name: 'Dashiki wedding outfit', price: 640, image: 'images/shared/dashiki-wedding-outfit.jpeg', category: 'Shared' },
    { name: 'Fluid fashion look', price: 330, image: 'images/shared/fluid-fashion-look.jpeg', category: 'Shared' },
    { name: 'Vintage print shirt', price: 350, image: 'images/shared/vintage-print-shirt.jpeg', category: 'Shared' },
    { name: 'Off shoulder top', price: 335, image: 'images/shared/off-shoulder-top.jpeg', category: 'Shared' },
    { name: 'Child fashion', price: 215, image: 'images/shared/child.jpeg', category: 'Shared' },
    { name: 'Colorful fashion piece', price: 265, image: 'images/shared/colorful-fashion-piece.jpeg', category: 'Shared' },
    { name: 'Elegant fashion look 2', price: 265, image: 'images/shared/elegant-fashion-look-2.jpeg', category: 'Shared' },
    { name: 'Elegant fashion look', price: 260, image: 'images/shared/elegant-fashion-look.jpeg', category: 'Shared' },
    { name: 'Studio fashion portrait', price: 255, image: 'images/shared/fashion-portrait-studio.jpeg', category: 'Shared' },
    { name: 'Elegant fashion portrait', price: 255, image: 'images/shared/fashion-portrait-elegant.jpeg', category: 'Shared' },
    { name: 'Glamour fashion portrait', price: 255, image: 'images/shared/fashion-portrait-glamour.jpeg', category: 'Shared' },
    { name: 'Editorial fashion portrait', price: 245, image: 'images/shared/fashion-portrait-editorial.jpeg', category: 'Shared' },
    { name: 'Plus size elegant maxi dress', price: 285, image: 'images/shared/plus-size-elegant-maxi-dress.jpeg', category: 'Shared' },
    { name: 'Premium fashion piece', price: 260, image: 'images/shared/premium-fashion-piece.jpeg', category: 'Shared' },
    { name: 'Sleeveless one shoulder top', price: 280, image: 'images/shared/sleeveless-one-shoulder-top.jpeg', category: 'Shared' },
    { name: 'Stylish casual shirt', price: 260, image: 'images/shared/stylish-casual-shirt.jpeg', category: 'Shared' },
    { name: 'Unisex fashion collection', price: 275, image: 'images/shared/unisex-fashion-collection.jpeg', category: 'Shared' },
    { name: 'African style shirt', price: 255, image: 'images/male/african-style-shirt.jpeg', category: 'Male' },
    { name: 'Classic mens shoes', price: 255, image: 'images/male/classic-mens-shoes.jpeg', category: 'Male' },
    { name: 'Maroon hoodie', price: 240, image: 'images/male/maroon-hoodie.jpeg', category: 'Male' },
    { name: 'Wedding indo western set', price: 270, image: 'images/male/wedding-indo-western-set.jpeg', category: 'Male' },
    { name: 'Ankara fashion top 2', price: 260, image: 'images/shared/Women suit.jpg', category: 'Female' },
    { name: 'Ankara fashion top', price: 255, image: 'images/female/ankara-fashion-top.jpeg', category: 'Female' },
    { name: 'Butterfly sleeve dress', price: 265, image: 'images/female/butterfly-sleeve-dress.jpeg', category: 'Female' },
    { name: 'Elegant evening dress', price: 260, image: 'images/female/elegant-evening-dress.jpeg', category: 'Female' },
    { name: 'Graphic tee', price: 230, image: 'images/female/graphic-tee.jpeg', category: 'Female' },
    { name: 'Modern dress set', price: 245, image: 'images/female/modern-dress-set.jpeg', category: 'Female' },
    { name: 'Winter fashion look', price: 255, image: 'images/female/winter-fashion-look.jpeg', category: 'Female' },
];

function getFeatured(category) {
    const categoryItems = GALLERY_ITEMS.filter((item) => item.category === category);
    const sharedItems = GALLERY_ITEMS.filter((item) => item.category === 'Shared');
    return categoryItems.concat(sharedItems).slice(0, 8);
}

const FEATURED_ITEMS = {
    male: getFeatured('Male'),
    female: getFeatured('Female'),
    children: getFeatured('Children')
};

function setImageWithFallback(img, src, alt = '') {
    if (!img) return;

    img.src = src || FALLBACK_IMAGE;
    img.alt = alt || 'Fashion item';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = () => {
        if (img.dataset.fallbackApplied !== 'true') {
            img.dataset.fallbackApplied = 'true';
            img.src = FALLBACK_IMAGE;
        }
    };
}

function populateGallery() {
    const featuredContainers = document.querySelectorAll('[data-featured-collection]');
    featuredContainers.forEach((container) => {
        const key = container.dataset.featuredCollection;
        populateGalleryCards(container, FEATURED_ITEMS[key] || GALLERY_ITEMS.slice(0, 8));
    });

    const gallery = document.getElementById('gallery-page-grid');
    if (gallery) {
        populateGalleryCards(gallery, GALLERY_ITEMS);
    }
}

function populateGalleryCards(container, items) {
    if (!container) return;

    container.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'gallery-card';
        card.style.animationDelay = `${index * 0.06}s`;

        const imageWrap = document.createElement('div');
        imageWrap.className = 'gallery-card-image';

        const img = document.createElement('img');
        img.className = 'clickable-image';
        setImageWithFallback(img, item.image, item.name);
        img.addEventListener('click', () => openImageModal(img));

        const content = document.createElement('div');
        content.className = 'gallery-card-content';
        content.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">₵${item.price.toFixed(2)}</p>
            <span class="gallery-tag">${item.category}</span>
        `;

        imageWrap.appendChild(img);
        card.appendChild(imageWrap);
        card.appendChild(content);
        container.appendChild(card);
    });
}

// ===== Shopping Cart State =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===== DOM Elements =====
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const closeBtn = document.querySelector('.close-btn');
const contactForm = document.getElementById('contact-form');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const imageModal = document.getElementById('image-modal');
const imageModalImage = document.getElementById('image-modal-image');
const imageModalClose = document.querySelector('.image-modal-close');

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    if (productGrid && searchInput && categoryFilter) {
        displayProducts(products);
        setupEventListeners();
    }

    if (document.getElementById('cart-count')) {
        updateCartCount();
    }

    document.addEventListener('click', (event) => {
        const img = event.target.closest('img.clickable-image');
        if (!img) return;

        event.preventDefault();
        openWhatsAppOrderForImage(img);
    });

    document.querySelectorAll('img').forEach((img) => {
        if (!img.dataset.fallbackApplied) {
            setImageWithFallback(img, img.getAttribute('src') || '', img.getAttribute('alt') || 'Fashion item');
        }
    });

    // populate the gallery section (if present) with all available images
    populateGallery();

    if (imageModalClose) {
        imageModalClose.addEventListener('click', closeImageModal);
    }

    if (imageModal) {
        imageModal.addEventListener('click', (event) => {
            if (event.target === imageModal) {
                closeImageModal();
            }
        });
    }
});

// ===== Display Products =====
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No products found</p>';
        return;
    }

    productsToDisplay.forEach((product, index) => {
        const categoryLabel = product.category === 'category1' ? 'Female' : product.category === 'category2' ? 'Featured' : 'Featured';
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <img class="product-card-image clickable-image" src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/shared/unisex-fashion-collection.jpeg';">
            <div class="product-card-info">
                <span class="product-card-category">${categoryLabel}</span>
                <h3>${product.name}</h3>
                <p class="product-card-price">₵${product.price.toFixed(2)}</p>
                <button class="btn btn-small btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// ===== Filter Products =====
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

// ===== Shopping Cart Functions =====
function getOrderDetailsFromImage(img) {
    const fallbackName = img.getAttribute('alt')?.trim() || 'Fashion item';
    const card = img.closest('.product-card, .gallery-card, .category-card');
    const nameElement = card?.querySelector('h3, .product-name');
    const name = nameElement?.textContent?.trim() || fallbackName;
    const priceElement = card?.querySelector('.product-card-price, .price, [data-price]');
    const priceText = priceElement?.textContent?.trim() || img.getAttribute('data-price') || '';
    const priceValue = priceText.replace(/[^\d.]/g, '');
    const imageUrl = img.currentSrc || img.src || '';

    return {
        name,
        price: priceValue,
        image: imageUrl
    };
}

function openWhatsAppOrderForImage(img) {
    const details = getOrderDetailsFromImage(img);
    const priceText = details.price ? `Price: ₵${details.price}` : 'Price: Please confirm';
    const message = `Hello! I would like to order ${details.name}. ${priceText}. Image: ${details.image}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    showNotification(`Opening WhatsApp for ${details.name}...`);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        showNotification('Product not found.');
        return;
    }

    const imageUrl = new URL(product.image, window.location.href).href;
    const message = `Hello! I would like to order ${product.name}. Price: ₵${product.price.toFixed(2)}. Image: ${imageUrl}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification('Opening WhatsApp with your order details...');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCart();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        document.getElementById('cart-total').textContent = '0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e0e0e0;">
            <div>
                <h4>${item.name}</h4>
                <p>₵${item.price.toFixed(2)} x 
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="updateQuantity(${item.id}, this.value)"
                           style="width: 50px; padding: 0.3rem;">
                </p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="btn btn-small" style="background: #e74c3c; color: white;">Remove</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
    updateCartCount();
}

// ===== Modal Functions =====
function openCart() {
    updateCart();
    cartModal.style.display = 'block';
}

function closeCart() {
    cartModal.style.display = 'none';
}

// ===== Contact Form =====
function handleContactSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const whatsappNumber = '233534821057';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello MAT.B KLODDIN. My name is ${name}. Email: ${email}. Message: ${message}`)}`;

    const openedWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!openedWindow) {
        window.location.href = whatsappUrl;
    }

    showNotification('WhatsApp opened with your message.');
    contactForm.reset();
}

// ===== Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideInUp 0.4s ease-out;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== Hamburger Menu =====
function toggleMobileMenu() {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// ===== Event Listeners =====
function openImageModal(img) {
    if (!imageModal || !imageModalImage) return;
    imageModalImage.src = img.src;
    imageModalImage.alt = img.alt || 'Product image';
    imageModal.style.display = 'flex';
}

function closeImageModal() {
    if (imageModal) {
        imageModal.style.display = 'none';
    }
}

function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeCart);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (cartModal) {
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                closeCart();
            }
        });
    }

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });
}

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
