import en from "./en.json";

interface Script {
    [en: string]: any;
}

const ScriptIndex: Script = {
    en: en,
};

export default Object.freeze(ScriptIndex);
