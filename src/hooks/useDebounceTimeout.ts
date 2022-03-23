import { useEffect, DependencyList } from "react"
import useTimeout from "./useTimeout"

const useDebounceTimeout = (callback: () => void, delay: number, dependencies: DependencyList | []) => {

  const { reset, clear } = useTimeout(callback, delay)

  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [clear])

  return { clear }

}

export default useDebounceTimeout