export type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function createOrUpdateUser(initialValues: Partial<User>) {
  console.log("Оновлення користувача з:", initialValues);
}
