
---

# Cool Cart

Cool Cart is a modern e-commerce application built with React, Styled Components, TypeScript, and Next.js. It provides a seamless shopping experience with features for browsing products and managing a shopping cart.

![image](https://github.com/KikatoIV/cool-cart/assets/39209669/33749af2-c1fc-4169-a78d-899722552215)

## Features

- **Product Management**
  - Fetches and displays products from a remote API.
  - Supports dynamic addition and removal of products to/from the shopping cart.
  
- **Persistent Shopping Cart**
  - Utilizes local storage to persist the user's shopping cart across sessions.
  
- **Responsive Design**
  - Implements a responsive UI using Styled Components.
  
- **Error Handling**
  - Provides robust error handling for scenarios like failed product fetches.

## Technologies Used

- **Frontend:**
  - React
  - Styled Components
  - TypeScript
  
- **Framework:**
  - Next.js

## Code Snippets
This code saves the cart to localStorage by converting the cart array to a JSON string.

  ![image](https://github.com/KikatoIV/cool-cart/assets/39209669/332baa56-3d08-4807-86cc-3bd18f468424)

This is the searchbar it makes use of debounce which should delay users from typing for about 300ms.

  ![image](https://github.com/KikatoIV/cool-cart/assets/39209669/8b0a003b-c1d2-43b5-ba4a-8e5db9f54ebb)



## Getting Started

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/KikatoIV/cool-cart.git
   cd cool-cart
   ```

2. Install dependencies:

   ```
   npm install
   ```

### Usage

1. Start the development server:

   ```
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Acknowledgments

- Inspired by the need for a simple yet effective e-commerce solution.
- Built with passion and dedication to modern web development practices.

---
