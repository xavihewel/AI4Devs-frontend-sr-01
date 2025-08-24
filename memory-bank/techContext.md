# Contexto Técnico - LTI Talent Tracking System

## Stack Tecnológico

### Frontend
- **Framework**: React 18.3.1
- **Lenguaje**: TypeScript 4.9.5
- **UI Library**: React Bootstrap 2.10.2
- **Routing**: React Router DOM 6.23.1
- **Date Picker**: React DatePicker 6.9.0
- **Icons**: React Bootstrap Icons 1.11.4
- **Build Tool**: Create React App 5.0.1
- **Testing**: Jest + React Testing Library

### Backend
- **Runtime**: Node.js
- **Framework**: Express 4.19.2
- **Lenguaje**: TypeScript 4.9.5
- **ORM**: Prisma 5.13.0
- **Base de Datos**: PostgreSQL
- **File Upload**: Multer 1.4.5
- **API Documentation**: Swagger 6.2.8
- **Testing**: Jest 29.7.0
- **Development**: ts-node-dev 1.1.6

### Base de Datos
- **Motor**: PostgreSQL
- **Gestión**: Docker Compose
- **Migraciones**: Prisma Migrate
- **Cliente**: Prisma Client

### DevOps
- **Containerización**: Docker
- **Orquestación**: Docker Compose
- **Versionado**: Git
- **Package Manager**: npm

## Configuración del Entorno

### Variables de Entorno

#### Backend (.env)
```env
# Base de datos
DATABASE_URL="postgresql://LTIdbUser:D1ymf8wyQEGthFR1E9xhCq@localhost:5432/LTIdb"

# Servidor
PORT=3010
NODE_ENV=development

# Upload de archivos
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
```

#### Frontend (.env)
```env
# API
REACT_APP_API_URL=http://localhost:3010

# Configuración
REACT_APP_ENV=development
```

### Docker Compose
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:latest
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Estructura de Dependencias

### Backend Dependencies

#### Production Dependencies
```json
{
  "@prisma/client": "^5.13.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "multer": "^1.4.5-lts.1",
  "swagger-jsdoc": "^6.2.8",
  "swagger-ui-express": "^5.0.0"
}
```

#### Development Dependencies
```json
{
  "@types/cors": "^2.8.17",
  "@types/express": "^4.17.9",
  "@types/jest": "^29.5.12",
  "@types/multer": "^1.4.11",
  "@types/node": "^20.12.12",
  "eslint": "^9.2.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-prettier": "^5.1.3",
  "jest": "^29.7.0",
  "prettier": "^3.2.5",
  "prisma": "^5.13.0",
  "ts-jest": "^29.1.2",
  "ts-node": "^9.1.1",
  "ts-node-dev": "^1.1.6",
  "typescript": "^4.9.5"
}
```

### Frontend Dependencies

#### Production Dependencies
```json
{
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "@types/jest": "^27.5.2",
  "@types/node": "^16.18.97",
  "@types/react": "^18.3.1",
  "@types/react-dom": "^18.3.0",
  "bootstrap": "^5.3.3",
  "dotenv": "^16.4.5",
  "react": "^18.3.1",
  "react-bootstrap": "^2.10.2",
  "react-bootstrap-icons": "^1.11.4",
  "react-datepicker": "^6.9.0",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.23.1",
  "react-scripts": "5.0.1",
  "typescript": "^4.9.5",
  "web-vitals": "^2.1.4"
}
```

## Configuración de TypeScript

### Backend (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "lib": ["es2017", "esnext.asynciterable"],
    "skipLibCheck": true,
    "sourceMap": true,
    "outDir": "./dist",
    "moduleResolution": "node",
    "removeComments": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "exactOptionalPropertyTypes": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true,
    "baseUrl": "."
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Frontend (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## Scripts de Desarrollo

### Backend Scripts
```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "test": "jest",
    "prisma:init": "npx prisma init",
    "prisma:generate": "npx prisma generate",
    "start:prod": "npm run build && npm start"
  }
}
```

### Frontend Scripts
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "jest --config jest.config.js",
    "eject": "react-scripts eject"
  }
}
```

## Configuración de Prisma

### Schema (prisma/schema.prisma)
```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-3.0.x"]
}

datasource db {
  provider = "postgresql"
  url      = "postgresql://LTIdbUser:D1ymf8wyQEGthFR1E9xhCq@localhost:5432/LTIdb"
}

// Modelos de dominio...
```

### Migraciones
- Ubicación: `backend/prisma/migrations/`
- Archivos de migración versionados
- Seed data incluido

## Configuración de Testing

### Backend Testing (Jest)
```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
};
```

### Frontend Testing
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

## Configuración de ESLint y Prettier

### Backend ESLint
```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn"
  }
}
```

### Prettier
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## Configuración de Swagger

### API Documentation
```javascript
// swagger.config.js
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LTI API',
      version: '1.0.0',
      description: 'API para el sistema de gestión de talento LTI',
    },
    servers: [
      {
        url: 'http://localhost:3010',
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/presentation/controllers/*.ts'],
};
```

## Configuración de Multer

### File Upload
```javascript
// multer.config.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos PDF, DOC, DOCX e imágenes'));
    }
  }
});
```

## Configuración de CORS

### Backend CORS
```javascript
// cors.config.js
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  optionsSuccessStatus: 200
};
```

## Puertos y URLs

### Desarrollo
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3010
- **PostgreSQL**: localhost:5432
- **Swagger UI**: http://localhost:3010/api-docs

### Producción
- **Frontend**: Puerto configurable via PORT
- **Backend**: Puerto configurable via PORT
- **Base de datos**: Configurable via DATABASE_URL

## Requisitos del Sistema

### Mínimos
- **Node.js**: 16.x o superior
- **npm**: 8.x o superior
- **Docker**: 20.x o superior
- **Docker Compose**: 2.x o superior
- **RAM**: 4GB mínimo
- **Disco**: 10GB espacio libre

### Recomendados
- **Node.js**: 18.x LTS
- **npm**: 9.x o superior
- **Docker**: 23.x o superior
- **RAM**: 8GB o superior
- **Disco**: 20GB espacio libre

## Comandos de Desarrollo

### Inicialización del Proyecto
```bash
# Clonar repositorio
git clone <repository-url>
cd AI4Devs-frontend-sr-01

# Instalar dependencias
cd frontend && npm install
cd ../backend && npm install

# Configurar base de datos
docker-compose up -d
cd backend
npx prisma generate
npx prisma migrate dev
ts-node seed.ts
```

### Desarrollo
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm start

# Terminal 3: Base de datos (si no está corriendo)
docker-compose up -d
```

### Testing
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Build y Deploy
```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
```

## Consideraciones de Seguridad

### Variables de Entorno
- Nunca commitear archivos .env
- Usar diferentes configuraciones por entorno
- Rotar credenciales regularmente

### Validación de Entrada
- Validar todos los inputs del usuario
- Sanitizar datos antes de procesar
- Implementar rate limiting

### Base de Datos
- Usar conexiones seguras (SSL)
- Implementar backup automático
- Monitorear logs de acceso

### API Security
- Implementar autenticación JWT
- Validar tokens en cada request
- Usar HTTPS en producción
