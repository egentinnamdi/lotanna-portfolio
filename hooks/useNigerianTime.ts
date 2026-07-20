import { useEffect, useState } from "react"

export function useNigerianTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const lagosTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date())

      setTime(lagosTime)
    }

    // set immediately
    updateTime()

    // update every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}
