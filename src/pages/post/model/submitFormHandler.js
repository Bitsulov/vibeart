export function submitPostCommentsFormHandler(e, commentsList, setCommentsList, valueInput, setValueInput, defaultAddedObject) {
	e.preventDefault();
	if(valueInput !== "") {
		setCommentsList([...commentsList, defaultAddedObject]);
		setValueInput("");
	}
}
