import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { delay, map, Observable } from 'rxjs';
import IUser from '../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = db.collection('users')
    this.isAuthenticated$ = this.auth.user.pipe(
     map(user => !!user)
    )
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )
  }
  
  async createUser({ email, password, name, age, phone }: IUser) {
    const userCred = await this.auth.createUserWithEmailAndPassword(
      email,
      password as string
    );
    if (!userCred.user) {
      throw new Error("User can't be found");
    }
    await this.usersCollection.doc(userCred.user?.uid).set({
      email,
      name,
      age,
      phone,
    });

    await userCred.user.updateProfile({
      displayName: name
    })
  }

  async getUsers() {
    return this.usersCollection.get();
  }

  async logout() {
   return await this.auth.signOut()
  }
} 