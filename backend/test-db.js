const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    const candidateCount = await prisma.candidate.count();
    console.log('Candidates count:', candidateCount);
    
    const positionCount = await prisma.position.count();
    console.log('Positions count:', positionCount);
    
    const companyCount = await prisma.company.count();
    console.log('Companies count:', companyCount);
    
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Error connecting to database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
