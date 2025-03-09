import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  static login(username: any, password: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = process.env.USER_SERVICE_URL;
  constructor(private readonly httpService: HttpService) {}

  // Methode, die die User-Service API aufruft
  async validateUserByUsername(username: string, password: string): Promise<any> {
    try {
      // Hier wird die URL des User-Service aufgerufen (Anpassung je nach deinem Setup)
      const response = await this.httpService
        .get(`http://localhost:3000/users/${username}`)  // Beispiel URL für den User-Service
        .toPromise();
      
      return response.data;  // Gibt die Benutzerdaten zurück
    } catch (error) {
      console.error("Error fetching user from UserService:", error);
      throw new Error("User not found or error occurred.");
    }
  }
}