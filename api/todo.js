import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, deleteDoc, } from "firebase/firestore";

const addTodo = async ({ userId, title, description, status }) => {
    try {
        await addDoc(collection(db, "todo"), {
            user: userId,
            title: title,
            description: description,
            status: status,
            createdAt: new Date().getTime(),
        });
    } catch (err) {}
};

const toggleTodoStatus = async ({ todoId, status }) => {
    try {
        const todoRef = doc(db, "todo", todoId);
        await updateDoc(todoRef, {
            status,
        });
    } catch (err) {
        console.log(err);
    }
};

const deleteTodo = async (todoId) => {
    try {
        const todoRef = doc(db, "todo", todoId);
        await deleteDoc(todoRef);
    } catch (err) {
        console.log(err);
    }
};
export { addTodo, toggleTodoStatus, deleteTodo };