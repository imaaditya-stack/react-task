const storeUserSession = (data) => {
  const USER_SESSION = JSON.stringify({
    is_authenticated: true,
    ...data,
  });
  localStorage.setItem("AUTH", USER_SESSION);
};

const retrieveUserSession = () => {
  try {
    const USER_SESSION = JSON.parse(localStorage?.AUTH);
    if (
      USER_SESSION?.username &&
      USER_SESSION?.password &&
      USER_SESSION?.is_authenticated === true
    ) {
      return USER_SESSION;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const updatePassword = (USER_SESSION, newPassword) => {
  localStorage.setItem(
    "AUTH",
    JSON.stringify({ ...USER_SESSION, password: newPassword })
  );
};

export { storeUserSession, retrieveUserSession, updatePassword };
