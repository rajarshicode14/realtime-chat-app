import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAiB8eJmVouf5C4D3_pwfbtpnwxDNuOHSE",
    authDomain: "frenspace.firebaseapp.com",
    projectId: "frenspace",
    storageBucket: "frenspace.appspot.com",
    messagingSenderId: "178479008296",
    appId: "1:178479008296:web:767ada2361d96dc3f1031d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;