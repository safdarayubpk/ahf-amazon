import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    // Create sample users
    const adminPassword = await hash('Admin123!@#', 12);
    const userPassword = await hash('User123!@#', 12);

    await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'ADMIN',
      },
    });

    await prisma.user.create({
      data: {
        name: 'Regular User',
        email: 'user@example.com',
        password: userPassword,
        role: 'USER',
      },
    });

    // Create categories
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: 'Engine',
          description: 'Engine parts and components',
          image: '/images/categories/engine.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Brakes',
          description: 'Brake system components',
          image: '/images/categories/brakes.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Suspension',
          description: 'Suspension and steering components',
          image: '/images/categories/suspension.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Electrical',
          description: 'Electrical system components',
          image: '/images/categories/electrical.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Exterior',
          description: 'Exterior parts and accessories',
          image: '/images/categories/exterior.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Interior',
          description: 'Interior parts and accessories',
          image: '/images/categories/interior.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Tools',
          description: 'Automotive tools and equipment',
          image: '/images/categories/tools.jpg',
        },
      }),
    ]);

    // Create products for each category
    for (const category of categories) {
      await prisma.product.createMany({
        data: [
          {
            name: `${category.name} Product 1`,
            description: `High-quality ${category.name.toLowerCase()} component`,
            price: 99.99,
            images: [`/images/products/${category.name.toLowerCase()}-1.jpg`],
            stock: 50,
            sku: `${category.name.substring(0, 3).toUpperCase()}-001`,
            categoryId: category.id,
            specifications: {
              brand: 'AutoParts Pro',
              material: 'Premium Quality',
              warranty: '1 Year',
            },
          },
          {
            name: `${category.name} Product 2`,
            description: `Premium ${category.name.toLowerCase()} component`,
            price: 149.99,
            images: [`/images/products/${category.name.toLowerCase()}-2.jpg`],
            stock: 30,
            sku: `${category.name.substring(0, 3).toUpperCase()}-002`,
            categoryId: category.id,
            specifications: {
              brand: 'AutoParts Elite',
              material: 'High-Grade',
              warranty: '2 Years',
            },
          },
        ],
      });
    }

    console.log('Seed data created successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
