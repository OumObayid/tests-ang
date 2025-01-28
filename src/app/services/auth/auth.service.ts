// Importation des modules nécessaires
import { Injectable } from '@angular/core'; // Décorateur pour déclarer un service Angular
import axios from 'axios'; // Axios pour effectuer les requêtes HTTP
import { environment } from '../../../environments/environment'; // Variables d'environnement pour configurer l'URL de base

// Décorateur @Injectable permettant de rendre ce service accessible partout dans l'application
@Injectable({
  providedIn: 'root', // Enregistrement au niveau global (singleton)
})
export class AuthService {
  // Constructeur du service
  constructor() {}

  /**
   * Fonction pour gérer la connexion (login) de l'utilisateur
   * @param data - Objet contenant les données nécessaires pour la connexion (email, mot de passe, etc.)
   * @returns Une promesse avec la réponse de l'API (succès ou échec)
   */
  async login(data: any): Promise<any> {
    try {
      // Requête POST vers l'endpoint de connexion de l'API
      const response = await axios.post(`${environment.apiURL}/auth/login.php`, data, {
        headers: { 'Content-Type': 'application/json' }, // Définition des en-têtes HTTP
      });
      return response; // Retourne la réponse à l'appelant
    } catch (error) {
      console.error('Erreur lors du login :', error); // Log de l'erreur si une exception est levée
      throw error; // Propagation de l'erreur pour permettre à l'appelant de la gérer
    }
  }

  /**
   * Fonction pour gérer l'inscription (register) de l'utilisateur
   * @param data - Objet contenant les données nécessaires pour l'inscription (nom, email, mot de passe, etc.)
   * @returns Une promesse avec la réponse de l'API (succès ou échec)
   */
  async register(data: any): Promise<any> {
    // console.log('Données envoyées pour l\'inscription:', data);
    try {
      // Requête POST vers l'endpoint d'inscription de l'API
      const response = await axios.post(`${environment.apiURL}/auth/register.php`, data, {
        headers: { 'Content-Type': 'application/json' }, // Définition des en-têtes HTTP
      });
      // console.log('Réponse du serveur pour l\'inscription:', response);
      return response; // Retourne la réponse à l'appelant
    } catch (error) {
      // console.error('Erreur lors de l\'inscription :', error);
      throw error; // Propagation de l'erreur pour permettre à l'appelant de la gérer
    }
  }
}
