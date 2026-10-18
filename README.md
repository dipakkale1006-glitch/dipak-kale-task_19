# Task 19: (JS DOM) Service Booking Web App

## About the Project
This project is developed as part of the **MERN Stack Course**. The objective of this assignment is to create a dynamic and interactive **Service Booking Web Application** that strictly replicates the design, flow, and user interactions demonstrated in the reference video walkthrough.

---

## Exact Video Workflow & Specification

### 1. Navigation Bar
- **Logo**: Bold `"Logo"` text on the left.
- **Navigation Links**: Centered links: `"Home"`, `"Services"`, `"Contact Us"`, and `"About Us"`.
- **User Profile**: Pill badge displaying `👤 Username` with soft blue styling.
- **Logout Button**: Circular red button with a power icon (`#f43f5e`).

### 2. Left Section
- **Card 1: Added Items**
  - **Table Headers**: `S.No`, `Service Name`, and `Price`.
  - **Initial State**:
    - Info circle with `"i"`.
    - Title: `"No Items Added"`.
    - Subtitle: `"Add items to the cart from the services bar"`.
  - **Populated State**:
    - Each added service is appended as a clean row with sequential `S.No`, `Service Name`, and formatted price (e.g., `1  Dry Cleaning  ₹200.00`).
  - **Total Amount**:
    - Displays `Total Amount` on the left and dynamic sum on the right (starts at `₹ 0`, updates to `₹ 200.00`, `₹ 230.00`, `₹ 370.00`, etc.).
- **Card 2: Book Now Form**
  - Heading: `"Book Now"`.
  - Inputs:
    - `Full Name`: placeholder `"John Doe"`
    - `Email ID`: placeholder `"name@gmail.com"`
    - `Phone Number`: placeholder `"9000000000"`
  - **"Book now"** button: Styled with soft lavender/periwinkle color (`#939bf4`).
  - **Success Message**:
    - When submitted with items in the cart, a green notification banner appears:
      `✓ Thank you for contacting, we will get back to you soon`
    - After 2.5 seconds, the form inputs reset, the notification disappears, the cart resets to `"No Items Added"`, Total Amount returns to `₹ 0`, and the service showcase resets to the first service.

### 3. Right Section: Browse Our Services
- **Heading**: `"Browse Our Services"`.
- **Subtitle**: `"Click on the add to cart button to add the services to your cart or press skip"`.
- **Interactive Service Carousel**:
  - Displays one service at a time with custom SVG illustration, service name, and price in bold indigo font.
  - **"Skip Item" Button**: Bypasses the current service and advances to the next service without adding it to the cart.
  - **"Add Item" Button**: Adds the current service to the left `"Added Items"` table, updates the `"Total Amount"`, and immediately advances to the next service.
  - **Bottom Hint**: `⊕ Add the items to the cart and book now`.

---

## Services Catalog & Pricing

| S.No | Service Name | Price | Description |
| :---: | :--- | :---: | :--- |
| **1** | **Dry Cleaning** | `₹200.00` | Washing machine & laundry basket illustration |
| **2** | **Leather & Suede Cleaning** | `₹999.00` | Leather couch & yellow cleaning cloth illustration |
| **3** | **Ironing** | `₹30.00` | Ironing board, clothes & electric iron illustration |
| **4** | **Wedding Dress Cleaning** | `₹2400.00` | Bridal gown & lace cleaning illustration |
| **5** | **Wash And Fold** | `₹140.00` | Stack of neatly folded colorful clothes illustration |
| **6** | **Stain Removal** | `₹500.00` | Basin with red t-shirt, water & bubbles illustration |

---

## Technologies Used

- **HTML5**: Semantic layout, two-column grid, tables, and form inputs
- **CSS3**: Modern cards, responsive grid, rounded buttons, custom pill badges, and smooth transitions
- **JavaScript (ES6)**: DOM manipulation, event listeners, dynamic table row generation, total calculation, and state management

---

## Project Structure

Inside the `DIPAK KALE Task_19` folder:
- `index.html` – Webpage layout matching the video structure
- `style.css` – CSS styling replicating fonts, colors, and margins from the video
- `script.js` – Service catalog, Add/Skip logic, dynamic table updates, and form handler
- `README.md` – Documentation, workflow walkthrough, and testing guide

---

## How to Run & Replicate Video Walkthrough

1. Navigate to the `DIPAK KALE Task_19` directory.
2. Open `index.html` in any web browser.
3. **Step 1**: The page starts with `Dry Cleaning` (`₹200.00`) and an empty cart (`No Items Added`, `Total Amount: ₹ 0`).
4. **Step 2**: Click **"Add Item"** $\to$ `Dry Cleaning` is added to the left table (S.No 1), total becomes `₹ 200.00`, and right card switches to `Leather & Suede Cleaning` (`₹999.00`).
5. **Step 3**: Click **"Skip Item"** $\to$ `Leather & Suede Cleaning` is skipped, right card switches to `Ironing` (`₹30.00`).
6. **Step 4**: Click **"Add Item"** $\to$ `Ironing` is added to the left table (S.No 2), total becomes `₹ 230.00`, and right card switches to `Wedding Dress Cleaning` (`₹2400.00`).
7. **Step 5**: Click **"Skip Item"** $\to$ switches to `Wash And Fold` (`₹140.00`).
8. **Step 6**: Click **"Add Item"** $\to$ `Wash And Fold` is added (S.No 3), total becomes `₹ 370.00`, and right card switches to `Stain Removal` (`₹500.00`).
9. **Step 7**: Fill in the **Book Now** form:
   - Full Name: `John Doe`
   - Email ID: `name@gmail.com`
   - Phone Number: `9000000000`
10. **Step 8**: Click **"Book now"** $\to$ Green message banner appears:
    `✓ Thank you for contacting, we will get back to you soon`
    After 2.5 seconds, the cart and form automatically reset back to initial state.

---

**Author:** Dipak Kale  
**Course:** MERN Stack Course
