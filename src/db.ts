import firebase from "firebase/app";
import { firestore } from "./firestore";

export type Ingredient = {
  name: string;
  units: string;
  amount: number;
};

export type Recipe = {
  title: string;
  description: string;
  userId: string;
  createdAt: firebase.firestore.Timestamp | firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.Timestamp | firebase.firestore.FieldValue;
  ingredients: Ingredient[];
};

export type RecipeForm = {
  title: string;
  description: string;
  ingredients: Ingredient[];
  mainPicture: File;
};

export const createRecipe = async (recipeForm: RecipeForm, userId: string) => {
  const recipe: Recipe = {
    title: recipeForm.title,
    description: recipeForm.description,
    ingredients: recipeForm.ingredients,
    userId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };

  console.log('Recipe', recipe);
  try {
    const db = await firestore();
    console.log('DB');
    const recipeRef = await db.collection("recipes").add(recipe);
    console.log('recipeRef', recipeRef);
    const path = await uploadFile(recipeRef.id, userId, recipeForm.mainPicture);
    console.log('path', path);
    const url = await getUrl(path);
    console.log('url', url);
    recipeRef.update("picture", url);
    console.log('recipeRef', recipeRef);
    return recipeRef;
  } catch (error) {
    console.log('Error in saving recipe', error);
    throw error;
  }


};


const uploadFile = async (recipeId: string, userId: string, pic: File) => {
    const mainPicturePath = `/${userId}/${recipeId}.${pic.name.split(".").pop()}`;
    console.log('mainPicturePath', mainPicturePath);
    const storage = firebase.storage();
    console.log('storage', storage);
    const ref = storage.ref(mainPicturePath);
    console.log('ref', ref);
    await ref.put(pic);
    console.log('ref2', ref);
    return mainPicturePath;
  };

  export const getUrl = async (path: string) => {
    const storage = firebase.storage();
    return await storage.ref(path).getDownloadURL();
  };