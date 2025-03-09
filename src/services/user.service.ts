import axios from "axios";

const userServiceApiUrl = "http://localhost:3000/users";
export class UserServiceApi {
  static async getUserFromUserService(username: string) {
    try {
      const response = await axios.get(
        `${userServiceApiUrl}?username=${username}`
      );
      return response.data; // Angenommen, der User-Service gibt das User-Objekt als "data" zurück
    } catch (error) {
      throw new Error("Error fetching user from User-Service");
    }
  }
}
