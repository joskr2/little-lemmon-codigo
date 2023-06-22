import { cambiarTema, estadoTema } from "@/lib/atoms"
import { useRecoilValue } from "recoil"

const useTema = () => (
  {
    tema: useRecoilValue(estadoTema),
    cambiarTema: useRecoilValue(cambiarTema
    )
  }
)

export default useTema