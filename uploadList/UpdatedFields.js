import { psycologists } from "../src/utils/constants"
import db from "../src/utils/db"

const updateFields = async () => {
    try {
        // add every person { isFavourite: false, isDisfavourite: false }
        const response = await db.collection(psycologists).get();
        response.forEach((doc) => db.collection(psycologists).doc(doc.id).update({ isFavourite: false, isDisfavourite: false }))

    } catch (error) {
        console.log(error)
    }
}

updateFields()