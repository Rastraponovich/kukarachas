import { GameBoard } from "entities/game/ui"
import { NextPage } from "next"
import { Layout } from "widgets/layout"

const HomePage: NextPage = () => {
    return (
        <Layout title={"набор участников"}>
            <GameBoard />
        </Layout>
    )
}

export default HomePage
