const formatDate = (dateString) => {
    const date = new Date(dateString)
    const timezoneOffset = date.getTimezoneOffset() * 60000
    const localISOTime = new Date(date - timezoneOffset).toISOString().slice(0, -1)
    return `${localISOTime}-05:00`
}

export default formatDate