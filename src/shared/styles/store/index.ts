import { registerInDevtools, Store } from "pullstate"

interface AppStoreProps {
  showModal: boolean
}

export const AppStore = new Store<AppStoreProps>({
  showModal: false,
})

export const toggleModal = () => {
  AppStore.update((store) => {
    store.showModal = !store.showModal
  })
}

registerInDevtools({
  AppStore,
})
