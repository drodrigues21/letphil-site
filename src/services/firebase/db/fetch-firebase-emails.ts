import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../main";

const fetchEmailsFromFirestore = async (): Promise<string[]> => {
	const emails: string[] = [];
	const querySnapshot = await getDocs(collection(db, "emailing-list-emails"));
	querySnapshot.forEach((doc) => {
		emails.push(doc.data().email);
	});
	// console.log(emails);
	return emails;
};

export default fetchEmailsFromFirestore;
