import CredentialsProvider from "next-auth/providers/credentials";

const provider_credentials = CredentialsProvider({
  name: "Credentials",
  credentials: {
    login: {
      label: "login",
      type: "string",
      placeholder: "Login",
    },
    password: {
      label: "password",
      type: "password",
      placeholder: "***",
    },
  },
  async authorize(credentials, req) {
    console.log("trying connect");
    if (!credentials || !credentials?.login || !credentials?.password)
      return null;
    const user = {
      id: "0",
      name: "username",
      email: "email@email.com.br",
      password: "123456",
      anotherProperty: "any",
    };

    if (credentials.login === "test" && credentials.password === "123")
      user.name = "usuário";
    if (credentials.login === "admin" && credentials.password === "123456")
      user.name = "admin";

    const { password, ...userSafe } = user;

    return userSafe; // null or object with id:string
  },
});

export { provider_credentials };
