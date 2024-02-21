import FacebookProvider from "next-auth/providers/facebook";
9
export default NextAuth({
    pages: {
        signIn: '/connect-fb',
      },
      session:{
        stratrgy:'jwt'
      },
    providers: [
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
          authorization:{
            params:{
                prompt:"consent",
                access_type:"offline",
                response_type:"code"
            }
          }
        })
      ],
    //   callbacks: {
    //     async session({ token, session }) {
    //       if (token) {
    //         session.user.id = token.id
    //         session.user.name = token.name
    //         session.user.email = token.email
    //         session.user.image = token.picture
    //         session.user.username = token.username
    //       }
    
    //       return session
    //     },
    //     redirect() {
    //         return "/";
    //       },
    // },
    
})