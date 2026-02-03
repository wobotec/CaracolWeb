export const logger =
  (config) =>
  (set, get, api) =>
    config(
      (...args) => {
        if (import.meta.env.DEV) {
          console.log('Zustand update:', args) //Mostrar a versao do Zustand
        }
        set(...args)
      },
      get,
      api
    )
