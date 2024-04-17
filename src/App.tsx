import adan from "./assets/logo-adan.svg"
import adan_mobile from "./assets/logo-adan-mobile.svg"
import username from "./assets/username.svg"
import password from "./assets/password.svg"

export function App() {
  return (
      <div className="bg-img-adan-mobile flex flex-col w-screen h-screen md:bg-img-adan  xl:grid xl:grid-cols-2 text-branco font-sans">
        <div className="flex flex-col">
          <div className="flex flex-row items-center p-1 pt-5">
            <img src={ adan } alt="Logo Adan"  className=" ml-5 mr-4 hidden md:block"/>
            <img src={ adan_mobile } alt="Logo Adan" className="ml-2 mr-3 md:hidden"/>
            <h1 className="text-2xl text-nowrap font-bold md:text-4xl ">Adan Soluções</h1>
          </div>
          <div className="flex justify-center text-wrap md:mt-20 xl:ml-48 xl:mt-56 2xl:ml-56 2xl:mt-80">
            <p className="font-bold hidden md:block md:text-4xl xl:text-6xl 2xl:text-8xl ">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <form method="post" className="flex flex-col items-center mt-5 xl:w-[90%] xl:h-[80%]  xl:bg-preto-90 xl:rounded-[100px] 2xl:mt-14 2xl:w-[649px] 2xl:h-[861.43px]">
            <legend className="text-4xl font-bold pt-16 md:text-5xl xl:pt-10 2xl:text-6xl 2xl:pt-24">Login</legend>

            <div className="relative flex items-center mt-10 md:mt-5 2xl:mt-24">
              <img src={ username } alt="" className="w-[30px] h-[30px] absolute  ml-4 2xl:w-[50px] 2xl:h-[50px]"/>
              <input type="text" className="text-xl w-sreen h-[82.51px] rounded-[20px] bg-branco placeholder-preto-25 text-preto-90 font-medium pl-20 2xl:w-[519px] 2xl:h-[89px] 2xl:text-3xl" placeholder="Username"/>
              </div>

            <div className="relative flex items-center mt-5 2xl:mt-10">
              <img src={ password } alt="" className="w-[30px] h-[30px] absolute  ml-4 2xl:w-[50px] 2xl:h-[50px]"/>
              <input type="password" className="text-xl w-sreen h-[82.51px] rounded-[20px] bg-branco placeholder-preto-25 text-preto-90 font-medium pl-20 2xl:w-[519px] 2xl:h-[89px] 2xl:text-3xl" placeholder="Password"/>
            </div>

            <a href="" className="text-sm font-bold underline mt-10 2xl:text-2xl">Esqueci minha senha</a>

            <button className="w-[50%] h-[69px] bg-branco mt-10 rounded-[20px] font-bold text-2xl text-preto-50 flex justify-center items-center md:text-5xl 2xl:w-[343px] 2xl:h-[87px] 2xl:mt-24 2xl:text-preto-90">LOGIN</button>

          </form>
          <p className="text-sm text-nowrap font-bold mt-10 2xl:text-2xl">Não tem conta? <a href="" className="text-preto-50 underline">Registre-se aqui</a></p>
        </div>
      </div>
  )
}