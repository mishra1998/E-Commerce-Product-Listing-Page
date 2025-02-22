Next.js E-Commerce Product Listing Page

Project Overview

This is an E-Commerce Product Listing Page built with Next.js that includes filtering, sorting, and cart functionality using Redux. The project utilizes Server-Side Rendering (SSR) for better SEO and performance

Features
Fetch products from FakeStore API.
Display products with an image, title, price, and category.
Filtering products by category.
Sorting products by price (low to high / high to low).
Product detail page with dynamic routing.
Cart functionality using Redux (increment/decrement quantity).
Fully responsive for both desktop & mobile.
Styled using SCSS.
Next.js SSR (getServerSideProps) for better SEO & performance.

Installation & Setup
git clone https://github.com/yourusername/ecom-store.git
cd ecom-store

Install Dependencies
npm install

npm run dev

Data Fetching with SSR

This project uses Next.js Server-Side Rendering (SSR) via getServerSideProps() to fetch fresh product data on each request.

API Used
GET /products - Fetch all products
GET /products/category/{category} - Fetch products by category.
GET /products/{id} - Fetch product details.

Styling
SCSS is used for styling (styles/ folder).
Responsive design is implemented for both desktop and mobile.

Redux Store Setup (Cart Functionality)