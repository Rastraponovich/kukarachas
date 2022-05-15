import { useEvent } from "effector-react/scope"
import { raceModel } from "entities/game"
import { GameInfo } from "features/game-ifno/ui"
import { Tracks } from "features/track"
import { NextPage } from "next"
import { memo } from "react"
import { Button } from "shared/ui/button"
import { MegaphoneIcon } from "shared/ui/icons"
import { Layout } from "widgets/layout"

const GamePage: NextPage = () => {
    const handleStart = useEvent(raceModel.events.startedRaceButtonClicked)

    return (
        <Layout color="bg-[#E1BC73]">
            <div className="flex">
                <MegaphoneIcon className="w-[73px] h-[77px] mr-7" />

                <p className="p-2.5 bg-white rounded-xl text-xl leading-[23px] font-normal">
                    В предыдущем раунде победу разделили между собой Усач и Строгач, к сожалению
                    Спринтер вышел из гонки. Он повредил ногу и не сможет заверщить сегодняшние
                    соревнования.
                </p>
            </div>
            <section className="mt-2.5 bg-white rounded-2xl pl-10 pr-2.5 py-10 text-2xl leading-7">
                <Tracks />
                <div className="flex justify-between">
                    <div className="flex flex-col text-sm mt-3 space-y-3">
                        <div>
                            <h2 className="first-letter:uppercase text-xl leading-6 mb-3">
                                лайв стрим
                            </h2>
                            <table className="table-auto">
                                <tbody>
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                </tbody>
                            </table>
                        </div>

                        <Button onClick={handleStart}>start</Button>
                    </div>

                    <GameInfo />
                    <div className="flex flex-col space-y-2.5 px-10 justify-center text-2xl leading-7">
                        <Button
                            disabled
                            className="w-full px-10 py-2.5 first-letter:uppercase rounded-lg"
                        >
                            повторить забег
                        </Button>
                        <Button
                            disabled
                            className="w-full px-10 py-2.5 first-letter:uppercase rounded-lg"
                        >
                            поменять состав
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GamePage

const TableRow = memo(() => {
    return (
        <tr className="">
            <td className="px-1">Усач</td>

            <td className="px-1">
                <span>позиция в гонке : 1</span>
            </td>
            <td className="px-1">
                <span>средняя скорость: 2px</span>
            </td>
            <td className="px-1">
                <span>пикселей с секунду 1.2px</span>
            </td>
        </tr>
    )
})

TableRow.displayName = "TableRow"
