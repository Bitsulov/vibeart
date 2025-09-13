export function checkShowDate(messageDate: Date, prevMessageDate: Date | null) {
    return (
        prevMessageDate === null ||
        messageDate.getDate() - prevMessageDate.getDate() !== 0 ||
        messageDate.getFullYear() !== prevMessageDate.getFullYear()
    );
}
