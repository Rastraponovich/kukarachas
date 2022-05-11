import { AuthForm } from "entities/auth"
import { NextPage } from "next"
import { Layout } from "widgets/layout"

const AuthPage: NextPage = () => {
    return (
        <Layout color="bg-[#00990B]">
            <AuthForm />
        </Layout>
    )
}

export default AuthPage
