import firestore from '@react-native-firebase/firestore';

export async function getUsers(){
    var userList = [];
    const users = await firestore()
    .collection('users')
    .get();
    users.forEach((doc) => {
        console.log(doc.data());

    })
}