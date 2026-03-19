export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function signup({ name, email, password }) {
  const users = getUsers();

  const exists = users.find((u) => u.email === email);
  if (exists) throw new Error("User already exists");

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  saveUsers([...users, newUser]);

  localStorage.setItem("currentUser", JSON.stringify(newUser));

  return newUser;
}

export function login({ email, password }) {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) throw new Error("Invalid credentials");

  localStorage.setItem("currentUser", JSON.stringify(user));

  return user;
}

export function logout() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}