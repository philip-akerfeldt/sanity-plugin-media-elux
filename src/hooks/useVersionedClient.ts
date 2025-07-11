import { useClient } from 'sanity'

const useVersionedClient = (): ReturnType<typeof useClient> =>
  useClient({ apiVersion: '2022-10-01' })

export default useVersionedClient
