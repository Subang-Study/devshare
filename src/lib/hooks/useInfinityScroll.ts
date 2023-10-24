import { useCallback, useEffect, useState } from 'react'

const useInfinityScroll = ({
  callbackFn,
  hasNextPage,
}: {
  callbackFn: () => void
  hasNextPage: boolean | undefined
}) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null)

  const observerCallback: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        callbackFn()
      }
    },
    [callbackFn, hasNextPage],
  )

  useEffect(() => {
    if (!target) return

    let observer: IntersectionObserver

    if (target) {
      observer = new IntersectionObserver(observerCallback, { root: null, rootMargin: '0px', threshold: 1 })

      observer.observe(target)
    }
    return () => observer.unobserve(target)
  }, [target, observerCallback])

  return setTarget
}

export default useInfinityScroll
