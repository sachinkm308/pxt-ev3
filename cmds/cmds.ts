/// <reference path="../node_modules/pxt-core/typings/globals/node/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />

require("./editor")

declare namespace pxt.editor {
    function deployCoreAsync(resp: pxtc.CompileResult, disconnect?: boolean): Promise<void>;
}

export function deployCoreAsync(resp: pxtc.CompileResult) {
    return pxt.editor.deployCoreAsync(resp, process.env["PXT_SERIAL"] ? false : true)
}