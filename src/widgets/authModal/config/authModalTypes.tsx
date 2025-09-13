import { AuthForm } from "features/authForm/index.js";
import { RegForm } from "features/regForm/index.js";
import type { ModalTypes } from "../model/types.js";

export const types: ModalTypes = {
    sign: AuthForm,
    reg: RegForm
};
