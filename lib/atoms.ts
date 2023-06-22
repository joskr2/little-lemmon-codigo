import { atom } from "recoil";

const estadoTema = atom({
  key: 'estadoTema',
  default: false,
})

// const cambiarTema = selector({
//   key: 'cambiarTema',
//   get: ({ get }) => get(estadoTema),
//   set: ({ get, set }) => set(estadoTema,
//     ((get(estadoTema) === false) ? true : false)
//   )
// })

export { estadoTema }
