import * as vscode from 'vscode';

export const detectExtension = (context: vscode.ExtensionContext, entryPoint: string): void => {
    const extensionHost = typeof navigator !== 'undefined' ? 'web'
        : context.extension.extensionKind === vscode.ExtensionKind.UI ? 'local'
            : 'remote';
    const message = `Running ${entryPoint} entrypoint in ${extensionHost} extensionHost`;

    console.log(message);
    vscode.window.showInformationMessage(message);
};
