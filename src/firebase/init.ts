// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import type { FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { getFunctions } from '@firebase/functions'

const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyCPHSsraLEMa2Hu41OVACMV_nslUgJyqUU',
    authDomain: 'sait-5fd26.firebaseapp.com',
    projectId: 'sait-5fd26',
    storageBucket: 'sait-5fd26.appspot.com',
    messagingSenderId: '505856707076',
    appId: '1:505856707076:web:e5bc46d5e979c8eee94351',
    measurementId: 'G-CXPZ214N2C',
    databaseURL:
        'https://sait-5fd26-default-rtdb.asia-southeast1.firebasedatabase.app/',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)
export const database = getDatabase(app)
