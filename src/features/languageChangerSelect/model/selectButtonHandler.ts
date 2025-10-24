export function selectButtonHandler(
    e: React.MouseEvent,
    setIsSelectOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
	setIsSelectOpen(state => !state);
}
