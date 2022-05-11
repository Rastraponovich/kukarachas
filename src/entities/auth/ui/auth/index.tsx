import { Button } from "shared/ui/button"
import { Input } from "shared/ui/input"

export const AuthForm = () => {
    return (
        <section className="px-[393px] py-[118.5px] bg-white rounded-2xl flex flex-col items-center font-normal text-3xl">
            <h2 className="text-center  first-letter:uppercase mb-10">вход/регистрация стадиона</h2>

            <form className="flex flex-col  space-y-10 text-2xl leading-7 max-w-[290px] w-full">
                <Input caption="название Стадиона" placeholder="какой-то текст" />
                <Input caption="пароль" placeholder="какой-то текст" />
                <Button>вход</Button>
            </form>
        </section>
    )
}
