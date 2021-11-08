import { getFirestore, collection, addDoc } from 'firebase/firestore'

const clickButton = () => {
  const id = '003'
  const name = 'test'
  const uid = ''

  const db = getFirestore()
  const docRef = addDoc(collection(db, 'tasks'), {
    uid: uid,
    id: id,
    name: name
  })
  console.log('Document', docRef)
}

function FirestoreAddButton() {
  return (
    <div>
      <button onClick={clickButton}>Firestore追加</button>
    </div>
  );
}
  
export default FirestoreAddButton;
  