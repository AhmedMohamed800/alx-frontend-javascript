import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto().then((photoName) => photoName);
    user = await createUser().then((userInfo) => userInfo);
  } catch (err) {
    photo = null;
    user = null;
  }
  return { photo, user };
}
