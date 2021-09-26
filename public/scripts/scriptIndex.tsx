import en from "./en.json";
import jp from "./jp.json";

type Script = {
    [language: string]: any;
};

const ScriptIndex: Script = {
    en: en,
    jp: jp,
};

export default Object.freeze(ScriptIndex);
