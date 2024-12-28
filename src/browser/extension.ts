import * as vscode from 'vscode';
import { detectExtension } from '../utils';

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
    detectExtension(context, 'browser');
};

export const deactivate = async (): Promise<void> => {
    // Do nothing for now
};
