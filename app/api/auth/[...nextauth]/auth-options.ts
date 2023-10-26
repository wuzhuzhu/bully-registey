import db from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { DefaultSession, NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from "next-auth/providers/email";
import SlackProvider from 'next-auth/providers/slack';
import Auth0Provider from "next-auth/providers/auth0"

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID as string,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        // }),
        // Auth0Provider({
        //     clientId: process.env.AUTH0_ID,
        //     clientSecret: process.env.AUTH0_SECRET
        // }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        // SlackProvider({
        //     clientId: process.env.SLACK_CLIENT_ID as string,
        //     clientSecret: process.env.SLACK_CLIENT_SECRET as string
        // }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                },
            };
        },
    }

};

export default authOptions