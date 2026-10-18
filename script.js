// Task 19: (JS DOM) Service Booking Web App
// Exactly matches the video workflow:
// - Browse services one by one with Skip Item & Add Item
// - Add Item updates the left Added Items table and Total Amount
// - Skip Item advances to the next service without adding
// - Booking form shows green success confirmation and resets the cart

// 1. Services Catalog matching the video exactly
const services = [
    {
        id: 1,
        name: "Dry Cleaning",
        price: 200.00,
        svg: `<svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 240px;">
            <rect width="360" height="240" rx="16" fill="#F8FAFC"/>
            <!-- Washing Machine Body -->
            <rect x="110" y="30" width="140" height="180" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="4"/>
            <rect x="120" y="42" width="70" height="16" rx="4" fill="#E2E8F0"/>
            <circle cx="210" cy="50" r="6" fill="#6366F1"/>
            <circle cx="230" cy="50" r="6" fill="#A5B4FC"/>
            <!-- Door Outer Ring -->
            <circle cx="180" cy="130" r="56" fill="#EEF2FF" stroke="#C7D2FE" stroke-width="6"/>
            <!-- Door Glass with Water & Bubbles -->
            <circle cx="180" cy="130" r="42" fill="#E0E7FF"/>
            <path d="M145 145 Q160 125 180 145 T215 145 L215 170 L145 170 Z" fill="#6366F1" opacity="0.6"/>
            <circle cx="170" cy="120" r="6" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="190" cy="115" r="4" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="182" cy="135" r="5" fill="#FFFFFF" opacity="0.8"/>
            <!-- Laundry Basket on Left -->
            <path d="M50 140 L65 200 L95 200 L110 140 Z" fill="#FDE68A" stroke="#F59E0B" stroke-width="3"/>
            <path d="M60 135 C60 120 100 120 100 135 Z" fill="#F472B6"/>
            <!-- Sparkles -->
            <path d="M270 60 L275 75 L290 80 L275 85 L270 100 L265 85 L250 80 L265 75 Z" fill="#FBBF24"/>
            <circle cx="285" cy="120" r="8" fill="#F43F5E" opacity="0.2"/>
        </svg>`
    },
    {
        id: 2,
        name: "Leather & Suede Cleaning",
        price: 999.00,
        svg: `<svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 240px;">
            <rect width="360" height="240" rx="16" fill="#FEFCE8"/>
            <!-- Leather Sofa Cushion -->
            <rect x="70" y="80" width="220" height="110" rx="20" fill="#E5E7EB" stroke="#CBD5E1" stroke-width="4"/>
            <path d="M90 100 C130 90 230 90 270 100 C275 140 265 170 90 170 Z" fill="#F3F4F6"/>
            <circle cx="130" cy="135" r="4" fill="#9CA3AF"/>
            <circle cx="180" cy="135" r="4" fill="#9CA3AF"/>
            <circle cx="230" cy="135" r="4" fill="#9CA3AF"/>
            <!-- Cleaning Hand & Yellow Cloth -->
            <path d="M190 60 Q210 90 220 110 L250 105 Q240 70 205 50 Z" fill="#FDE047" stroke="#EAB308" stroke-width="3"/>
            <rect x="180" y="90" width="50" height="40" rx="8" fill="#FACC15" transform="rotate(-15 180 90)"/>
            <!-- Sparkles & Shine -->
            <path d="M140 70 L144 82 L156 86 L144 90 L140 102 L136 90 L124 86 L136 82 Z" fill="#F59E0B"/>
            <path d="M260 50 L263 60 L273 63 L263 66 L260 76 L257 66 L247 63 L257 60 Z" fill="#6366F1"/>
        </svg>`
    },
    {
        id: 3,
        name: "Ironing",
        price: 30.00,
        svg: `<svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 240px;">
            <rect width="360" height="240" rx="16" fill="#F0FDF4"/>
            <!-- Ironing Board -->
            <rect x="60" y="130" width="240" height="14" rx="7" fill="#86EFAC" stroke="#22C55E" stroke-width="3"/>
            <line x1="100" y1="144" x2="160" y2="210" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
            <line x1="260" y1="144" x2="200" y2="210" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
            <!-- Clothes on Board -->
            <path d="M110 130 C130 115 190 115 210 130 Z" fill="#93C5FD"/>
            <!-- Electric Iron -->
            <path d="M180 120 L230 120 L245 105 L210 100 Z" fill="#EF4444"/>
            <rect x="180" y="120" width="60" height="6" fill="#94A3B8"/>
            <path d="M190 100 C190 85 220 85 220 100" stroke="#DC2626" stroke-width="5" fill="none" stroke-linecap="round"/>
            <!-- Steam Puffs -->
            <circle cx="160" cy="95" r="7" fill="#E2E8F0" opacity="0.8"/>
            <circle cx="172" cy="85" r="9" fill="#E2E8F0" opacity="0.8"/>
            <circle cx="185" cy="75" r="6" fill="#E2E8F0" opacity="0.8"/>
        </svg>`
    },
    {
        id: 4,
        name: "Wedding Dress Cleaning",
        price: 2400.00,
        svg: `<svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 240px;">
            <rect width="360" height="240" rx="16" fill="#FAF5FF"/>
            <!-- Mannequin / Hanger -->
            <path d="M180 30 L160 50 L200 50 Z" stroke="#CBD5E1" stroke-width="3" fill="none"/>
            <circle cx="180" cy="24" r="6" stroke="#CBD5E1" stroke-width="3" fill="none"/>
            <!-- Bridal Gown -->
            <path d="M165 50 Q180 60 195 50 L190 90 Q180 95 170 90 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
            <path d="M170 90 L130 200 Q180 215 230 200 L190 90 Z" fill="#FFFFFF" stroke="#DDD6FE" stroke-width="3"/>
            <!-- Lace Details -->
            <path d="M140 180 Q180 195 220 180" stroke="#C4B5FD" stroke-width="2" stroke-dasharray="4 4"/>
            <path d="M148 160 Q180 175 212 160" stroke="#C4B5FD" stroke-width="2" stroke-dasharray="4 4"/>
            <!-- Sparkles -->
            <path d="M110 80 L113 90 L123 93 L113 96 L110 106 L107 96 L97 93 L107 90 Z" fill="#A855F7"/>
            <path d="M250 110 L253 120 L263 123 L253 126 L250 136 L247 126 L237 123 L247 120 Z" fill="#EC4899"/>
        </svg>`
    },
    {
        id: 5,
        name: "Wash And Fold",
        price: 140.00,
        svg: `<svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 240px;">
            <rect width="360" height="240" rx="16" fill="#FDF2F8"/>
            <!-- Stack of Folded Clothes -->
            <!-- Bottom Fold (Navy) -->
            <rect x="100" y="165" width="160" height="28" rx="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="3"/>
            <!-- Middle Fold (Teal) -->
            <rect x="105" y="135" width="150" height="28" rx="8" fill="#14B8A6" stroke="#0F766E" stroke-width="3"/>
            <!-- Next Fold (Pink/Coral) -->
            <rect x="110" y="105" width="140" height="28" rx="8" fill="#F43F5E" stroke="#BE123C" stroke-width="3"/>
            <!-- Top Fold (Cream) -->
            <rect x="115" y="75" width="130" height="28" rx="8" fill="#FDE047" stroke="#EAB308" stroke-width="3"/>
            <!-- Sparkles -->
            <path d="M80 90 L83 100 L93 103 L83 106 L80 116 L77 106 L67 103 L77 100 Z" fill="#EC4899"/>
            <path d="M280 130 L283 140 L293 143 L283 146 L280 156 L277 146 L267 143 L277 140 Z" fill="#3B82F6"/>
        </svg>`
    },
    {
        id: 6,
        name: "Stain Removal",
        price: 500.00,
        svg: `<svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 240px;">
            <rect width="360" height="240" rx="16" fill="#EFF6FF"/>
            <!-- Wash Basin / Tub -->
            <path d="M80 130 L100 200 L260 200 L280 130 Z" fill="#93C5FD" stroke="#3B82F6" stroke-width="4"/>
            <!-- Water Level -->
            <path d="M88 150 Q180 135 272 150 L256 195 L104 195 Z" fill="#BFDBFE"/>
            <!-- Red T-shirt in water -->
            <path d="M140 100 L180 115 L220 100 L210 160 L150 160 Z" fill="#EF4444" stroke="#DC2626" stroke-width="3"/>
            <!-- Bubbles -->
            <circle cx="130" cy="140" r="12" fill="#FFFFFF" opacity="0.9" stroke="#93C5FD" stroke-width="2"/>
            <circle cx="160" cy="130" r="8" fill="#FFFFFF" opacity="0.9"/>
            <circle cx="230" cy="135" r="14" fill="#FFFFFF" opacity="0.9" stroke="#93C5FD" stroke-width="2"/>
            <circle cx="245" cy="120" r="7" fill="#FFFFFF" opacity="0.9"/>
            <!-- Fresh Sparkle -->
            <path d="M180 50 L184 62 L196 66 L184 70 L180 82 L176 70 L164 66 L176 62 Z" fill="#3B82F6"/>
        </svg>`
    }
];

// App State
let currentIndex = 0;
let cart = []; // Array of added service items

// Helper to format currency exactly as seen in video (e.g. ₹200.00, ₹ 0)
function formatPrice(val) {
    return "₹" + val.toFixed(2);
}

// Log catalog
console.log("Service Booking App Initialized with", services.length, "services.");


// DOM Interactions
if (typeof document !== "undefined") {
    // Left Section Elements
    const emptyItemsView = document.getElementById("emptyItemsView");
    const itemsListView = document.getElementById("itemsListView");
    const totalAmountEl = document.getElementById("totalAmount");
    const bookingForm = document.getElementById("bookingForm");
    const successMsg = document.getElementById("successMsg");
    const logoutBtn = document.getElementById("logoutBtn");
    const displayUsername = document.getElementById("displayUsername");

    // Right Section Elements
    const serviceImageContainer = document.getElementById("serviceImageContainer");
    const serviceNameEl = document.getElementById("serviceName");
    const servicePriceEl = document.getElementById("servicePrice");
    const skipItemBtn = document.getElementById("skipItemBtn");
    const addItemBtn = document.getElementById("addItemBtn");

    // 2. Render Current Service on the Right Card
    function displayCurrentService() {
        const service = services[currentIndex];
        serviceImageContainer.innerHTML = service.svg;
        serviceNameEl.textContent = service.name;
        servicePriceEl.textContent = formatPrice(service.price);
    }

    // 3. Update Left Section (Added Items & Total Amount)
    function updateCartTable() {
        if (cart.length === 0) {
            emptyItemsView.style.display = "block";
            itemsListView.style.display = "none";
            itemsListView.innerHTML = "";
            totalAmountEl.textContent = "₹ 0";
        } else {
            emptyItemsView.style.display = "none";
            itemsListView.style.display = "flex";
            itemsListView.innerHTML = "";

            let total = 0;
            cart.forEach(function (item, index) {
                total += item.price;
                const row = document.createElement("div");
                row.className = "item-row";
                row.innerHTML = `
                    <span class="item-sno">${index + 1}</span>
                    <span class="item-name-text">${item.name}</span>
                    <span class="item-price-text">${formatPrice(item.price)}</span>
                `;
                itemsListView.appendChild(row);
            });

            // Update Total Amount (matches format: ₹ 370.00)
            totalAmountEl.textContent = "₹ " + total.toFixed(2);
        }
    }

    // 4. Handle "Add Item" Button Click
    addItemBtn.addEventListener("click", function () {
        const currentService = services[currentIndex];

        // Add to cart
        cart.push(currentService);
        console.log("Added to Cart:", currentService.name, "| Total items:", cart.length);

        // Update left table
        updateCartTable();

        // Advance to next service
        currentIndex = (currentIndex + 1) % services.length;
        displayCurrentService();
    });

    // 5. Handle "Skip Item" Button Click
    skipItemBtn.addEventListener("click", function () {
        console.log("Skipped Service:", services[currentIndex].name);

        // Advance to next service without adding
        currentIndex = (currentIndex + 1) % services.length;
        displayCurrentService();
    });

    // 6. Handle Booking Form Submission
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Check if cart has items
        if (cart.length === 0) {
            alert("No items added! Please add services to your cart before booking.");
            return;
        }

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("emailId").value.trim();
        const phone = document.getElementById("phoneNum").value.trim();

        console.log("Booking Submitted:", {
            name: fullName,
            email: email,
            phone: phone,
            services: cart.map(s => s.name),
            total: totalAmountEl.textContent
        });

        // Show green success message banner (as in video at 00:56)
        successMsg.style.display = "flex";

        // After 2.5 seconds, reset form and cart back to initial state
        setTimeout(function () {
            successMsg.style.display = "none";
            bookingForm.reset();

            // Reset cart
            cart = [];
            updateCartTable();

            // Reset right service to first item
            currentIndex = 0;
            displayCurrentService();
            console.log("Cart and form reset to initial state.");
        }, 2500);
    });

    // 7. Logout Button Click
    logoutBtn.addEventListener("click", function () {
        const confirmLogout = confirm("Do you want to log out?");
        if (confirmLogout) {
            displayUsername.textContent = "Guest";
            alert("You have logged out.");
        }
    });

    // Initial Display
    displayCurrentService();
    updateCartTable();
}
