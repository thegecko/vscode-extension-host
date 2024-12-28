import * as vscode from 'vscode';
import { detectExtension } from '../utils';

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
    detectExtension(context, 'main');
};

export const deactivate = async (): Promise<void> => {
    // Do nothing for now
};
