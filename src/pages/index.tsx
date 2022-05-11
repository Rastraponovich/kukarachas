import { CreateCommand } from "entities/game/ui/create-command"
import { NextPage } from "next"
import { Layout } from "widgets/layout"

const HomePage: NextPage = () => {
    return (
        <Layout title="набор участников" color="bg-[#A8B8E1]">
            <CreateCommand />
        </Layout>
    )
}

export default HomePage
