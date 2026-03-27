import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials!;

        // 🔥 Replace with DB check
        if (email === 'test@gmail.com' && password === '123456') {
          return { id: '1', email };
        }

        return null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
});

export { handler as GET, handler as POST };
