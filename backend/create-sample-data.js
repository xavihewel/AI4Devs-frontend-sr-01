const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createSampleData() {
  try {
    console.log('Creating sample data...');
    
    // Create Company
    const company = await prisma.company.create({
      data: {
        name: 'LTI - Talent Solutions',
      },
    });
    console.log('Company created:', company.name);
    
    // Create Interview Flow
    const interviewFlow = await prisma.interviewFlow.create({
      data: {
        description: 'Standard development interview process',
      },
    });
    console.log('Interview flow created');
    
    // Create Position
    const position = await prisma.position.create({
      data: {
        title: 'Senior Full-Stack Engineer',
        description: 'Develop and maintain software applications.',
        status: 'Open',
        isVisible: true,
        location: 'Remote',
        jobDescription: 'Full-stack development with React and Node.js',
        companyId: company.id,
        interviewFlowId: interviewFlow.id,
        salaryMin: 50000,
        salaryMax: 80000,
        employmentType: 'Full-time',
        benefits: 'Health insurance, 401k, Paid time off',
        contactInfo: 'hr@lti.com',
        requirements: '3+ years of experience in software development, knowledge in React and Node.js',
        responsibilities: 'Develop, test, and maintain software solutions.',
        companyDescription: 'LTI is a leading HR solutions provider.',
        applicationDeadline: new Date('2024-12-31')
      },
    });
    console.log('Position created:', position.title);
    
    // Create Candidate
    const candidate = await prisma.candidate.create({
      data: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St, City, Country',
        educations: {
          create: [
            {
              institution: 'University of Technology',
              title: 'BSc Computer Science',
              startDate: new Date('2015-09-01'),
              endDate: new Date('2019-06-01'),
            },
          ],
        },
        workExperiences: {
          create: [
            {
              company: 'Tech Corp',
              position: 'Software Developer',
              description: 'Developed web applications using React and Node.js',
              startDate: new Date('2019-07-01'),
              endDate: new Date('2023-12-01'),
            },
          ],
        },
      },
    });
    console.log('Candidate created:', candidate.firstName, candidate.lastName);
    
    console.log('Sample data created successfully!');
    
  } catch (error) {
    console.error('Error creating sample data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createSampleData();
