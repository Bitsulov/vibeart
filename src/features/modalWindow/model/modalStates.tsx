import { useState } from "react";

const ModalStates = () => {
    const [showModal, setShowModal] = useState(false);
    const [typeModal, setTypeModal] = useState("sign");

    return { showModal, setShowModal, typeModal, setTypeModal };
};

export default ModalStates;
