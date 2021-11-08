import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore'

function FirestoreList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const auth = getAuth()
  
    // login状態が変更されたら
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore()
        // loginしてたら
        let tasks = []
        const q = query(collection(db, 'tasks'), where('uid', '==', `${user.uid}`))
        onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              console.log('added: ', change.doc.data())
              tasks.push({
                id: change.doc.id,
                name: change.doc.data().name
              })
              console.log(tasks)
            }
          })
          setTasks(tasks)
        })
      }
    })
  }, []);

  return (
    <div>
      {tasks.map(val => (
        <div key={val.name}>{val.name}</div>
      ))}
    </div>
  );
}
  
export default FirestoreList;
