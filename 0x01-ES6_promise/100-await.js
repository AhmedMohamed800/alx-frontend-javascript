import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = {
    photo: await uploadPhoto().then((photoName) => photoName),
    user: await createUser().then((userInfo) => userInfo),
  };
  return data;
}
