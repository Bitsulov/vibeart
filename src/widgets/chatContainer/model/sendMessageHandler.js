import classes from "../ui/chatContainer.module.css";

export function sendMessageHandler(e, inputValue, setInputValue, messages, setMessages, chatRef) {
	e.preventDefault();
	if(inputValue.trim() !== "") {
		setMessages([...messages, {
			id: Date.now(),
			type: "outgoing",
			status: "unread",
			text: inputValue,
			time: new Date().toISOString(),
			new: true /* Не отправлять в БД */
		}]);
		setInputValue("");
		chatRef.current.classList.add(classes.newMessageAnim);
		setTimeout(() => {
			chatRef.current.classList.remove(classes.newMessageAnim);
		}, 150);
	}
}
