import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('ログインしています。' ,uid)
    // ...
  } else {
    console.log('ログインしていません。')
    // User is signed out
    // ...
  }
});

function FirebaseAuthUserInfo() {
  return (
    <div>
      <p>user</p>
    </div>
  );
}

export default FirebaseAuthUserInfo;
  