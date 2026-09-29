export const formatTripDates = (startDate, endDate) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const startMonth = start.toLocaleString('default', { month: 'long' })
  const endMonth = end.toLocaleString('default', { month: 'long' })
  
  if (startMonth === endMonth) {
    return `${startMonth} ${start.getDate()}-${end.getDate()}`
  }
  return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}`
}

export const calculateTripDuration = (startDate, endDate) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end - start)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export const generateDayTabs = (startDate, endDate) => {
  const start = new Date(startDate)
  const duration = calculateTripDuration(startDate, endDate)
  const days = []
  
  for (let i = 0; i < duration; i++) {
    const currentDate = new Date(start)
    currentDate.setDate(start.getDate() + i)
    days.push({
      key: `day${String(i + 1).padStart(2, '0')}`,
      label: `Day ${String(i + 1).padStart(2, '0')}`,
      date: currentDate.toLocaleDateString()
    })
  }
  
  return days
}