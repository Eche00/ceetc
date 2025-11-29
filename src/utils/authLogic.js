// regLogic to handle the registration process
import { auth, db } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const handleRegistration = async (formData) => {
    const {
        name,
        username,
        phone,
        email,
        password,
        gender,
        dob,
        country,
        address,

        balance,
        escrowBalance,
        totalDeposit,
        totalWithdrawal,
        totalDebit,

        cardDetails,
        escrows,
        transactions,
        notifications,

        createdAt,
    } = formData;


    try {
        // create User  in firebase
        const userCresidentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCresidentials.user;

        // Store additional user details in Firestore
        await setDoc(doc(db, "usersTournex", user.uid), {
            name,
            username,
            phone,
            email,
            gender,
            dob,
            country,
            address,

            balance,
            escrowBalance,
            totalDeposit,
            totalWithdrawal,
            totalDebit,

            cardDetails,
            escrows,
            transactions,
            notifications,

            createdAt,
        });

        console.log("User registered successfully:");
    } catch (error) {
        console.error("Registeration  failed:", error);
        throw new Error("Registeration  Failed. Please try again !!");
    }
};




