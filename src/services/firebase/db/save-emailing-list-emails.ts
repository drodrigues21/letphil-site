import { db } from "../../../main";
import FIRESTORE_COLLECTIONS from "../../../constants/firestore-collections";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default async function saveEmailingListEmail(email: string) {
  try {
    const collectionRef = collection(
      db,
      FIRESTORE_COLLECTIONS.EMAILING_LIST_EMAILS
    );

    const q = query(collectionRef, where("email", "==", email));

    console.log("querySnapshot.docs =", q);
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length !== 0)
      throw new Error("email already exists");

    const now = new Date();
    const docRef = await addDoc(collectionRef, {
      email,
      createdAt: now,
      updatedAt: now,
    });

    return docRef;
  } catch (error) {
    console.error(
      "src/services/firebase/db/save-emailing-list-emails: error =",
      error
    );
    return null;
  }
}
