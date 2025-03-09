import { Request, Response } from "express";
import { AuthenticationService } from "../services/auth.service";

export class AuthenticateController {
  // Funktion zum Verifizieren der Anmeldedaten eines Users
  /**
   * @swagger
   * /auth/login:
   *   get:
   *     summary: Retrieve a user by username and verify password
   *     description: Retrieve a single user by the username and compare the provided password with the hashed password saved in the database.
   *     tags: [Users, Login]
   *     parameters:
   *       - in: path
   *         name: username
   *         required: true
   *         description: ID of the user to retrieve
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: User retrieved successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       404:
   *         description: User not found
   *       500:
   *         description: Error retrieving user
   */
  static async login(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;
      const result = await AuthenticationService.login(username, password);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Funktion zum Verifizieren der Anmeldedaten eines Users
  /**
   * @swagger
   * /auth/login:
   *   get:
   *     summary: Retrieve a user by username and verify password
   *     description: Retrieve a single user by the username and compare the provided password with the hashed password saved in the database.
   *     tags: [Users, Login]
   *     parameters:
   *       - in: path
   *         name: username
   *         required: true
   *         description: ID of the user to retrieve
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: User retrieved successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       404:
   *         description: User not found
   *       500:
   *         description: Error retrieving user
   */
  static async refreshToken(req: Request, res: Response): Promise<Response> {
    /* try {
      const { username, password } = req.body;
      const result = AuthenticationService.login(username, password);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    } */

      return
  }
}
