import express from "express";
// import swaggerUi from 'swagger-ui-express';
// import { swaggerSpec } from './config/swagger.config';
import authRoutes from "./routes/auth.routes";
import AppDataSource from "./config/ormconfig";
import cors from "cors";

const app = express();

/* if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
} */

// Middleware für JSON-Parsing
app.use(express.json());
app.use(cors());

// Nutze die User-Routen
app.use("/users", authRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Eigener Log: Database connected");
  })
  .catch((error) => console.log(error));

// Starte den Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft mit Updates auf Port ${PORT}`);
});
