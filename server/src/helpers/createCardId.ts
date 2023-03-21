import User from "../models/user";

export const createCardId = async (library: string, name: string) => {
  let cardId = "";
  for (let i = 0; i < 5; i++) {
    cardId += library[i].toLowerCase().charCodeAt(0) - 97 + 1;
  }
  for (let i = 0; i < 5; i++) {
    cardId += name[i].toLowerCase().charCodeAt(0) - 97 + 1;
  }
  for (let i = 0; i < 5; i++) {
    cardId += Math.floor(Math.random() * 9);
  }
  const cardExists = await User.findOne({ cardId });
  if (cardExists) {
    createCardId(library, name);
  } else {
    console.log(cardId);
    return cardId.toString();
  }
};
