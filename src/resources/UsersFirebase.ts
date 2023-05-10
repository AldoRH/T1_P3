import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const usersCollection = collection(db, 'users');

export const addUser = async (user: any) => {
    try {
        await addDoc(usersCollection, user);
        return true;
    } catch (error) {
        return false;
    }
};

export const getUsers = async () => {
    const result = await getDocs(usersCollection);
    return result;
}; 

export const deleteUser = async (id: any) => {
    const docRef = doc(db, 'users', id);
    await deleteDoc(docRef);
    return true;
}

export const getUserById = async (id: any) => {
    const docRef = doc(db, 'users', id);
    const result = await getDoc(docRef);
    return result.data();
}

export const updateUser = async (id: any, user: any) => {
    const docRef = doc(db, 'users', id);
    try {
        await updateDoc(docRef, user)
        return true;
    } catch (error) {
        return false;
    }
}

