export function ModifyDate(date) {
    const dateStr = new Date(date);

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][dateStr.getMonth()];
    const year = dateStr.getFullYear();

    return `${month} ${dateStr.getDate()}, ${year}`
}