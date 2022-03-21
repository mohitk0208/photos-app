import { useEffect } from "react"
import useTimeout from "./useTimeout"

const useDebounceTimeout = (callback, delay, dependencies) => {

  const { reset, clear } = useTimeout(callback, delay)

  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [clear])

}

export default useDebounceTimeout