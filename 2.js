function countHours(year, holidays) {
  let extra_hours = 0
  holidays.map(holiday => {
    const s_date = `${holiday} / ${year}`
    const day_in_number = new Date(s_date).getDay()
    if (day_in_number == 6 || day_in_number == 0) {
      return;
    }
    extra_hours += 2
  })
  return extra_hours
}
const year = 2020
countHours(year, holidays)