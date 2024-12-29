# VS Code Extension Host

VS Code extension used to determine where an extension runs based on configuration settings for `browser` and `main` entry points and `extensionKind`.

## Findings

| EntryPoints & ExtensionKind | VS Code Desktop | VS Code Remote | vscode.dev | Codespaces | Notes |
| --- | --- | --- | --- | --- | --- |
| main | local host (main) | remote host (main) | NONE | remote host (main) ||
| browser | web host (browser) | web host (browser) | web host (browser) | web host (browser) ||
| main & browser | local host (main) | remote host (main) | web host (browser) | remote host (main) ||
| main (workspace) | local host (main) | remote host (main) | NONE | remote host (main) ||
| browser (workspace) | NONE | NONE | web host (browser) | web host (browser) | This configuration is broken on desktop |
| main & browser (workspace) | local host (main) | remote host (main) | web host (browser) | remote host (main) ||
| main (ui) | local host (main) | local host (main) | NONE | NONE | This configuration is broken on codespaces |
| browser (ui) | NONE | NONE | web host (browser) | web host (browser) | This configuration is broken on desktop |
| main & browser (ui) | local host (main) | local host (main) | web host (browser) | web host (browser) ||
| main (workspace, ui) | local host (main) | remote host (main) | NONE | remote host (main) ||
| browser (workspace, ui) | NONE | NONE | web host (browser) | web host (browser) | This configuration is broken on desktop |
| main & browser (workspace, ui) | local host (main) | remote host (main) | web host (browser) | remote host (main) ||
| main (ui, workspace) | local host (main) | local host (main) | NONE | remote host (main) ||
| browser (ui, workspace) | NONE | NONE | web host (browser) | web host (browser) | This configuration is broken on desktop |
| main & browser (ui, workspace) | local host (main) | local host (main) | web host (browser) | web host (browser) ||

https://code.visualstudio.com/api/advanced-topics/extension-host
