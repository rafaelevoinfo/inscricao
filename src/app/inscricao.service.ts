import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  constructor(private firestore: AngularFirestore) { }

  async inscrever(ipJogador): Promise<boolean> {
    try {
      await this.firestore.collection('jogadores').doc(ipJogador.username).set(ipJogador);
      return true;
    } catch (error) {
      return false;
    }
  }
}
