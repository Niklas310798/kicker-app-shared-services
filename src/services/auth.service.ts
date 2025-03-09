import * as bcrypt from 'bcrypt';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';

export class AuthenticationService {
  private readonly userServiceUrl = 'http://user-service-url/users';  // URL zu deinem User-Service

  async login(username: string, password: string) {
    // Schritt 1: Hole den User aus dem User-Service
    const user = await this.getUserFromUserService(username);
    if (!user) {
      throw new Error('User not found');
    }

    // Schritt 2: Vergleiche das Passwort mit bcrypt
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new Error('Invalid password');
    }

    // Schritt 3: Generiere ein JWT-Token
    const payload = { username: user.username, sub: user.id };
    const token = this.generateJwtToken(payload);

    return {
      access_token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }

  private async getUserFromUserService(username: string) {
    try {
      const response = await axios.get(`${this.userServiceUrl}?username=${username}`);
      return response.data;  // Angenommen, der User-Service gibt das User-Objekt als "data" zurück
    } catch (error) {
      throw new Error('Error fetching user from User-Service');
    }
  }

  private generateJwtToken(payload: object): string {
    const secretKey = 'your-jwt-secret-key';  // Setze deinen geheimen Schlüssel hier
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });  // Gültigkeit des Tokens (hier 1 Stunde)
  }
}