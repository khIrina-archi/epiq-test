import axios from 'axios'
import type { AxiosRequestConfig, Method } from 'axios'

// params for crudFetcher
interface CrudOptions {
  method?: Method
  data?: any
}

// fetcher for React Query
export const crudFetcher = async <T = any>(
  url: string,
  options: CrudOptions = {}
): Promise<T> => {
  const { method = 'get', data = null } = options
  const res = await axios<T>({ url, method, data } as AxiosRequestConfig)
  return res.data
}

type MutationFn<Payload, Result = any> = (payload?: Payload) => Promise<Result>

// helper for useMutation
export const mutationFetcher =
  <Payload = any, Result = any>(
    url: string,
    method: Method
  ): MutationFn<Payload, Result> =>
  (payload?: Payload) =>
    crudFetcher<Result>(url, { method, data: payload })
