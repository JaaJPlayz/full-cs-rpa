const valuesVerifier = (
  username: string,
  password: string,
  email: string,
  sample_username: string,
  sample_password: string,
  sample_email: string,
) => {
  return (
    username === sample_username &&
    password === sample_password &&
    email === sample_email
  );
};

export default valuesVerifier;
