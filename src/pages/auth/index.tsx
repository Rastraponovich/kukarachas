import { AuthForm } from "entities/auth"
import { NextPage } from "next"
import { Layout } from "widgets/layout"

const HomePage: NextPage = () => {
    return (
        <Layout>
            <AuthForm />
        </Layout>
    )
}

export default HomePage
