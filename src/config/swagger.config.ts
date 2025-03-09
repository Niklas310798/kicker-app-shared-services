import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the User Service',
    },
  },
  apis: ['./src/controllers/*.ts'], // Pfad zu den Routen- und Controller-Dateien
};

export const swaggerSpec = swaggerJSDoc(options);
