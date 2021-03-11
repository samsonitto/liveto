const dateComparison = (startTime, endTime) => {
  const datetime = new Date().getTime()
  const start = new Date(startTime).getTime()
  const end = new Date(endTime).getTime()

  if(start > datetime && end > datetime) {
    return "upcoming"
  } else if (start < datetime && end > datetime) {
    return "ongoing"
  } else {
    return "past"
  }
}

export { dateComparison }