# PROMPTS

## Prompt 1

Create development steps in `Scratchpad` of `.cursorrules` to create an ecommerce website with admin dashboard like amazon using TypeScript, Next.js 15, Shadcn, Lucide, Zod, Zustand, Recharts, Resend, Uploadthing, Prisma, PostgreSQL, next-auth@beta, Stripe.

## Prompt 2

We already done these steps:

- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Set up project structure and folders
- [ ] Configure ESLint and Prettier

Make them done and Start from this step:
Install and configure dependencies

## Prompt 3

we already set DATABASE_URL in .env, Make this step done

- [ ] Set up PostgreSQL database

Start from this step

- [ ] Configure Prisma schema:
  - User model
  - Product model
  - Category model
  - Order model
  - Review model
  - Cart model

## Prompt 4

- [ ] Implement NextAuth.js authentication:
  - Email/Password
  - OAuth providers (Google, GitHub)
  - JWT handling
  - Protected routes

## Prompt 5

Implement core features start from home layout.

## Scratchpad

### 1. Project Setup and Configuration [ ]

[X] Initialize Next.js 15 project with TypeScript
[X] Set up project structure and folders
[X] Configure ESLint and Prettier
[ ] Install and configure dependencies:
  [ ] Shadcn UI components
  [ ] Lucide icons
  [ ] Zod for validation
  [ ] Zustand for state management
  [ ] Recharts for analytics
  [ ] Resend for emails
  [ ] Uploadthing for file uploads
  [ ] Prisma ORM
  [ ] PostgreSQL database
  [ ] NextAuth.js beta for authentication
  [ ] Stripe for payments

### 2. Database and Authentication [ ]

[ ] Set up PostgreSQL database
[ ] Configure Prisma schema:
  [ ] User model
  [ ] Product model
  [ ] Category model
  [ ] Order model
  [ ] Review model
  [ ] Cart model
[ ] Implement NextAuth.js authentication:
  [ ] Email/Password
  [ ] OAuth providers (Google, GitHub)
  [ ] JWT handling
  [ ] Protected routes

### 3. Core Features - Customer Side [ ]

[ ] Home Layout:
  [ ] Create `(home)` folder in `app` directory
  [ ] Header with logo, search bar, and navigation
  [ ] Footer with links and social media
[ ] Homepage:
  [ ] banner carousel
  [ ] latest products
[ ] Products Catalog:
  [ ] Sidebar with categories and filters
  [ ] Search results
  [ ] Product grid
  [ ] Pagination
[ ] Product pages:
  [ ] Create product detail page layout
  [ ] Implement image gallery with thumbnails
  [ ] Add product information section:
    [ ] Title, price, description
    [ ] Stock status
    [ ] Add to cart button
  [ ] Reviews and ratings section:
    [ ] Display existing reviews
    [ ] Add review form for authenticated users
    [ ] Star rating component
  [ ] Related products section:
    [ ] Show products from same category
    [ ] Product card carousel
[ ] Shopping cart:
  [ ] Add/remove items
  [ ] Update quantities
  [ ] Cart persistence
[ ] Checkout process:
  [ ] Shipping information
  [ ] Payment integration (Stripe)
  [ ] Order confirmation
[ ] User dashboard:
  [ ] Order history
  [ ] Profile management
  [ ] Saved addresses
  [ ] Wishlist

### 4. Admin Dashboard [ ]

[ ] Admin authentication and authorization
[ ] Dashboard overview:
  [ ] Layout and Structure:
    [ ] Create admin dashboard layout with sidebar navigation
    [ ] Implement responsive grid for dashboard widgets
    [ ] Add loading states and error boundaries
  [ ] Key Metrics Cards:
    [ ] Total revenue widget with real data
    [ ] Total orders widget with real data
    [ ] Total customers widget with real data
    [ ] Average order value widget with real data
  [ ] Sales Analytics:
    [ ] Revenue Chart:
      [ ] Implement line chart using Recharts
      [ ] Add daily/weekly/monthly/yearly filters
      [ ] Show revenue trends over time
      [ ] Add tooltip with detailed information
    [ ] Order Statistics:
      [ ] Bar chart for order volume
      [ ] Order status distribution
      [ ] Peak ordering times
  [ ] Recent Orders Table:
    [ ] Implement data table with columns:
      [ ] Order ID
      [ ] Customer name
      [ ] Order total
      [ ] Status
      [ ] Date
    [ ] Add sorting and filtering
    [ ] Quick actions (view, process, update status)
  [ ] Low Stock Alerts:
    [ ] Products with stock below threshold
    [ ] Quick restock actions
    [ ] Stock level indicators
  [ ] Top Products:
    [ ] Best-selling products list
    [ ] Revenue by product
    [ ] Stock status
  [ ] Customer Insights:
    [ ] New vs returning customers
    [ ] Customer acquisition chart
    [ ] Top customers by revenue
  [ ] Real-time Updates:
    [ ] Implement WebSocket connection
    [ ] Live order notifications
    [ ] Stock level updates
  [ ] Export and Reports:
    [ ] CSV/PDF export functionality
    [ ] Custom date range selection
    [ ] Report generation
[ ] Product management:
  [ ] CRUD operations
  [ ] Bulk actions
  [ ] Image upload (Uploadthing)
[ ] Order management:
  [ ] Order processing
  [ ] Status updates
  [ ] Refund handling
[ ] User management:
  [ ] Customer list
  [ ] Admin privileges
  [ ] User actions

### 5. Advanced Features [ ]

[ ] Real-time notifications
[ ] Email system (Resend):
  [ ] Order confirmations
  [ ] Shipping updates
  [ ] Password reset
[ ] Search optimization
[ ] Performance optimization:
  [ ] Image optimization
  [ ] Caching strategies
  [ ] API optimization
[ ] Analytics and reporting

### 6. Testing and Deployment [ ]

[ ] Unit testing
[ ] Integration testing
[ ] E2E testing
[ ] Security audit
[ ] Production deployment:
  [ ] Environment setup
  [ ] CI/CD pipeline
  [ ] Monitoring
  [ ] Backup strategy

### 7. Documentation [ ]

[ ] API documentation
[ ] User guide
[ ] Admin documentation
[ ] Deployment guide
