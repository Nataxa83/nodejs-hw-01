
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {

    const contactsList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const newList = [...contactsList, ...newContacts];

    await writeContacts(newList);
    console.log(newList);

    // fs.readFile(PATH_DB, (error, data) => {
    //     console.log(data);
    //     console.log(error);
    // });
    // console.log(contactsList);
};

generateContacts(5);
