var x=Object.defineProperty;var n=(v,S)=>x(v,"name",{value:S,configurable:!0});import{jsxs as t,jsx as e}from"react/jsx-runtime";import{$ as E}from"@dna-platform/chemistry";import{$ as C,B as T,V as m,S as k,a as A,b as I,W as P,P as D,c as y,d as N,M as H,A as V,O as o,I as F,e as j,D as B,f as a,g as s,h as w,C as c,i as l}from"./.cover-naQPRvK6.js";import{Chapter as d,Title as p,Author as $,Subject as R,Paragraph as i,Svg as M,Synopsis as W,Parenthetical as g,TableOfContents as q,Section as L,Heading as O,Content as h,Word as r,Date as U,List as J,Line as u,Append as X}from"@dna-platform/public";import"styled-components";const b=class b extends C{};n(b,"$ClaudeConfiguringExtendscriptDebuggerInVsCode9d78ecba");let f=b;const z=n(()=>t(d,{children:[e(T,{}),e(m,{children:k()}),e(m,{children:A()}),e(I,{ground:"#f3f0f8",band:"#c9bfe3",bandInk:"#3a2d63",foot:"#8f7fc0",footInk:"#2e2350",ink:"#3a2d63"}),e(P,{x:"-32",y:"-26"}),t(D,{children:[e(y,{children:"[Doug](/dougs-story/)"}),e(y,{children:"[Claude](/dougs-claude/)"})]}),e(N,{from:"2025-02-07T14:41:30.626238Z",to:"2025-02-07T14:43:14.960618Z"}),e(H,{shown:"4",all:"4"}),e(p,{children:"[Configuring ExtendScript Debugger in VS Code](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/)"}),e($,{children:"[Doug](/dougs-story/)"}),e(R,{children:"[Conversations](/our-conversations/)"}),e(V,{children:"[DNA](/dougs-claude/#dna)"}),e(o,{children:"9d78ecba-e2cc-479a-8205-73b032d988a8"}),t(i,{children:[e(F,{}),e(M,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),Y=n(()=>t(d,{children:[e(W,{}),t(p,{children:[e(g,{}),"[Synopsis](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/)"]}),e(i,{children:"These are the docs for a extendscript debugger. Here is the debug script:"})]}),"Synopsis"),_=n(()=>t(d,{children:[e(q,{}),e(j,{}),t(p,{children:[e(g,{}),"[Table of Contents](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/#table-of-contents)"]}),t(L,{children:[e(O,{children:"February 2025"}),e(i,{children:e(h,{children:"[7 February 2025](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/#7-february-2025)"})}),t(i,{children:[e(g,{}),e(r,{children:e(h,{children:"[Configuring ExtendScript Debugger in VS Code](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/)"})}),e(r,{children:e(h,{children:"[Synopsis](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/#synopsis)"})}),e(r,{children:e(h,{children:"[Table of Contents](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/#table-of-contents)"})})]})]})]}),"Table"),Z=n(()=>t(d,{children:[e(B,{children:e(U,{children:"[7 February 2025](2025-02-07)"})}),e(p,{children:"[7 February 2025](/claude-configuring-extendscript-debugger-in-vs-code-9d78ecba/#7-february-2025)"}),t(a,{at:"2025-02-07T14:41:30.626238Z",children:[e(o,{children:"2ab3baa3-eb12-4a99-bb28-c56d81ccb1bf"}),e(s,{children:"[Doug](/dougs-story/)"}),e(i,{children:"These are the docs for a extendscript debugger. Here is the debug script:"}),e(i,{children:'{ "version": "0.2.0", "configurations": [ { "type": "extendscript-debug", "request": "launch", "name": "Run File in Illustrator", "script": "${file}", "preLaunchTask": "npm run build", "engineName": "main", "hostAppSpecifier": "illustrator-29.064", // From Help/About Illustrator and always end with 0.64 } ] }'}),e(i,{children:"Instead of running ${file} I want it to open the equivalent jsx file in the build foler. Is there a way I can do this? I am being sent in so many directions"}),e(w,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e(w,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t(a,{at:"2025-02-07T14:41:37.319619Z",children:[e(o,{children:"f0623665-1cdf-4443-b916-c3bdc8922d70"}),e(s,{children:"[Claude](/dougs-claude/)"}),e(i,{children:`Based on the documentation and your debug configuration, you can modify the "script" field to point to the build folder by using VS Code variables. Here's how:`}),e(c,{language:"json",children:`{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "extendscript-debug",
            "request": "launch",
            "name": "Run File in Illustrator",
            "script": "\${workspaceFolder}/build/\${relativeFilename}",
            "preLaunchTask": "npm run build",
            "engineName": "main",
            "hostAppSpecifier": "illustrator-29.064"
        }
    ]
}`}),e(i,{children:"If your build folder has a different structure (e.g., if it changes the extension to .jsx), you can use:"}),e(c,{language:"json",children:'"script": "${workspaceFolder}/build/${fileBasenameNoExtension}.jsx"'}),e(i,{children:"Key VS Code variables:"}),t(i,{children:[e(J,{}),t(u,{children:[t(r,{children:[e(l,{}),"${workspaceFolder}"]}),": Path to your project root"]}),t(u,{children:[t(r,{children:[e(l,{}),"${fileBasenameNoExtension}"]}),": Current file name without extension"]}),t(u,{children:[t(r,{children:[e(l,{}),"${relativeFilename}"]}),": File name relative to workspace root"]})]}),e(i,{children:"Make sure your build task generates files in the correct location that matches this path."})]}),t(a,{at:"2025-02-07T14:43:09.157828Z",children:[e(o,{children:"4fb0ff64-5fa1-4a73-afe8-dabe61c60fdf"}),e(s,{children:"[Doug](/dougs-story/)"}),e(i,{children:"That doesn't work and fails silently so I don't know why or what file it tried to run"})]}),t(a,{at:"2025-02-07T14:43:14.960618Z",children:[e(o,{children:"c6b84bc0-9987-4b07-b01d-222418d88898"}),e(s,{children:"[Claude](/dougs-claude/)"}),t(i,{children:["Let's debug this. We can modify the configuration to log information using ",t(r,{children:[e(l,{}),"console.log()"]})," to see what path it's trying to use. Add this to your VS Code settings.json:"]}),e(c,{language:"json",children:`{
    "extendscript.advanced.debugLevel": 2
}`}),e(i,{children:"Then modify your launch configuration:"}),e(c,{language:"json",children:`{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "extendscript-debug",
            "request": "launch",
            "name": "Run File in Illustrator",
            "script": "\${command:extension.extendscript-debug.getScriptPath}",
            "preLaunchTask": "npm run build",
            "engineName": "main",
            "hostAppSpecifier": "illustrator-29.064"
        }
    ]
}`}),e(i,{children:"This will show what file path it's attempting to use. Also, can you share your project structure and build script? That would help diagnose where the path resolution is failing."})]}),e(X,{identifier:"paste",type:".txt",children:`\r
ExtendScript Debugger Extension for VS Code\r
A VS Code Extension that enables debugging ExtendScript scripts and extensions in Adobe’s ExtendScript-enabled applications.\r
\r
Warning for Apple Silicon Users (e.g. M1): The extension does not run in native builds of VS Code but it does work with Intel/universal builds using Rosetta. Please see the Known Issues below for information on how to use the extension.\r
\r
Supported features\r
Breakpoints\r
Conditional Breakpoints\r
Expression Condition\r
Hit Count\r
Exception Breakpoints\r
Caught Exceptions ¹\r
Logpoints\r
Variables View\r
Local and Global Scope\r
Modify variables\r
Watch View\r
Call Stack View\r
Debug Actions\r
Continue / Pause\r
Step Over\r
Step Into\r
Step Out\r
Restart\r
Disconnect / Stop\r
Debug Console\r
Expression Evaluation\r
Expression Evaluation of Code on Hover ²\r
Script Evaluation and Halting\r
Export ExtendScript to JSXBin\r
¹ Changes to the Caught Exceptions setting while a script is running or stopped at a breakpoint will only apply to scopes created after the setting is changed.\r
² Requires active debug session.\r
\r
Unsupported Features\r
Profiling Support\r
Object Model Viewer (OMV)\r
Auto-Completion\r
Scripts Panel\r
Getting Started\r
Installation\r
Install the extension through the usual means.\r
\r
The extension requires VS Code v1.62 or newer.\r
\r
Migration from V1 Versions\r
The ExtendScript Debugger V2 is a complete rewrite of the V1 version. The internals received a complete overhaul that substantially increased stability, performance, flexibility, and improved compatibility with native VS Code features. As a result of this overhaul, the launch configuration properties have changed. The following is a table of properties that have been renamed:\r
\r
V1	V2\r
targetSpecifier	hostAppSpecifier\r
program	script\r
excludes	hiddenTypes\r
The engineName and debugLevel properties remain unchanged. All other V1 properties have been removed and will be ignored. Please see the Advanced Configuration section for a full listing of configuration properties available in V2.\r
\r
Additionally, the manner in which the extension operates has changed dramatically. It is highly recommended that you read the following section as it provides an overview of how to use this extension with three common use cases.\r
\r
Using the Debugger\r
This extension was designed to support a wide variety of use cases. Three common use cases are outlined below to provide guidance on how certain features may be used.\r
\r
Running a Script\r
The extension supports running (evaluating) a script in a host application without an active debug session. This functionality may be triggered via the Evaluate Script in Host... command or by clicking the Eval in Adobe... button.\r
\r
Debugging a Script\r
The most direct way to debug a script in the extension is to start a debug session configured with a launch request type. Such a debug session will connect to the specified host engine, inform it that the debugger is active, and then trigger the script evaluation. Any breakpoints or uncaught exceptions will cause VS Code to show the debug state and enable interacting with the host application. Once the script evaluation is complete, the debug session will clean itself up and shut down.\r
\r
Debugging Event Callbacks\r
Debugging ExtendScript triggered via a callback (e.g. with ScriptUI or CEP) requires that the debugger be connected when that script is run. A launch debug session is only active when the originating script is processed by the host application and will therefore miss debug messages from the host application in these circumstances.\r
\r
To debug ExtendScript triggered by callbacks, start a debug session configured with an attach request type. Such a debug session will connect to the specified host engine, inform it that the debugger is active, and then wait for debug messages from the connected engine. Any breakpoints or uncaught exceptions encountered by the host engine while your attach debug session is active will cause VS Code to show the debug state and enable interacting with the host application. This debug session will remain active until explicitly disconnected or stopped.\r
\r
Additional notes:\r
\r
Scripts may also be evaluated while an attach debug session is active.\r
CEP environments in particular may benefit from a compound launch configuration to debug both scripting environments simultaneously.\r
If your scripts are loaded into an application through a symbolic link (most commonly seen in CEP workflows), the aliasPath configuration property may be required to enable debugging features.\r
Debugger Configuration\r
The ExtendScript Debugger is capable of debugging with and without a standard launch configuration.\r
\r
Zero Configuration\r
If you have not yet defined a launch.json file in your project, the Run and Debug view will show the "Run and Debug" button. If you click this button while a file recognized as "JavaScript" (.js) or "JavaScript React" (.jsx) is the active file in VS Code, you will be given the option to select "ExtendScript" in the list of debugger options in the dropdown.\r
\r
When you select "ExtendScript", you will be asked to select a Debugging Mode. Once you have made your choice, simply select your target host application and, if applicable, the target engine and the debug session will start.\r
\r
Launch Configuration\r
Setting up a launch configuration allows you to simplify and customize the process of starting a debug session. To start, please follow the standard steps to initialize a launch configuration.\r
\r
When you add a new ExtendScript configuration to your launch.json, it will contain only the minimum settings required to start debugging. Shown below is the default attach request configuration:\r
\r
{\r
    "version": "0.2.0",\r
    "configurations": [\r
        {\r
            "type": "extendscript-debug",\r
            "request": "attach",\r
            "name": "Attach to ExtendScript Engine"\r
        }\r
    ]\r
}\r
\r
With the configuration above, you can select the "Attach To ExtendScript Engine" option in VS Code's Debug and Run view and initiate a debug session. Because no host application is specified, the extension will look up installed applications and show a list from which you may select a target. If your selected application is running and supports multiple engines, the extension will then ask which engine should be debugged. Once your selections are made, the debug session will begin.\r
\r
See the "Advanced Configuration" section below for an explanation of available configuration options.\r
\r
Attach and Launch Mode Support\r
VS Code supports two debug session request types: attach and launch. Both are supported by the ExtendScript Debugger extension and have distinct meaning:\r
\r
attach Requests: Launch configurations with request type attach will connect to an ExtendScript engine running within a host application and provide it with a listing of active breakpoint information. Once this connection is established, breakpoints and debug logging will be active for any script processed by the engine, whether triggered from within the host application itself or by an Evaluation process from VS Code. The connection will remain open until it is explicitly closed using the "Disconnect" or "Stop" debug actions.\r
launch Requests: Launch configurations with request type launch will connect to an ExtendScript engine running within a host application, provide it with a listing of active breakpoint information, and then trigger the evaluation of a specified script. The resulting debug session will remain active as long as the script evaluation process does not end or until the session is explicitly closed using the "Stop" or "Disconnect" debug actions.\r
The main difference between attach and launch requests is that the life of a launch mode debug session is tied directly to the length of time it takes the host engine to process the script. For short scripts, this may result in VS Code appearing to "flash" into and out of the "debugger active" state. This does not happen for attach configurations because the debug session connection is not tied to any specific script evaluation. For this reason, it is highly recommended that attach request debug sessions be used when debugging scripts that contain asynchronous callbacks (e.g. ScriptUI or CEP).\r
\r
Recommended Configuration Names\r
VS Code currently uses a “play” button for both attach and launch mode debug configurations. This can lead to confusion as many users expect that pressing a “play” button will result in their script being run. When an attach mode configuration is selected, this will not happen. As such, we recommend that users name their attach mode configurations starting with “Attach to” and launch mode configurations starting with “Launch in” (or the like) to avoid this ambiguity.\r
\r
Compound Launch Configurations\r
The ExtendScript Debugger extension supports Compound Launch Configurations. Scenarios where this may be of interest include:\r
\r
Debugging CEP contexts. CEP extensions support two main scripting contexts: a JavaScript context and an ExtendScript context. These contexts have the ability to interact via certain message passing APIs. A compound configuration would allow you to start debug sessions in both the JavaScript and ExtendScript contexts with a single click. See:\r
{\r
    "version": "0.2.0",\r
    "configurations": [\r
        {\r
            "type": "chrome",\r
            "request": "attach",\r
            "name": "[Attach] CEP JavaScript",\r
            "port": 7777,   // <-- Whatever debug port you have configured.\r
            "webRoot": "\${workspaceRoot}",\r
            "pathMapping": {\r
                "/": "\${workspaceRoot}"\r
            }\r
        },\r
        {\r
            "type": "extendscript-debug",\r
            "request": "attach",\r
            "name": "[Attach] CEP ExtendScript",\r
            "hostAppSpecifier": "premierepro-22.0"\r
        }\r
    ],\r
    "compounds": [\r
        {\r
            "name": "[Compound] Debug CEP",\r
            "configurations": [\r
                "[Attach] CEP JavaScript",\r
                "[Attach] CEP ExtendScript"\r
            ]\r
        }\r
    ]\r
}\r
\r
Debugging Engine to Engine Messaging. When passing messages back and forth between multiple ExtendScript engines in the same or different host applications, it may be helpful to debug both engines simultaneously. Compound Launch Configurations make this easy:\r
{\r
    "version": "0.2.0",\r
    "configurations": [\r
        {\r
            "type": "extendscript-debug",\r
            "request": "attach",\r
            "name": "Attach to InDesign Coordinator",\r
            "hostAppSpecifier": "indesign-17.064",\r
            "engineName": "MyCoordinator"\r
        },\r
        {\r
            "type": "extendscript-debug",\r
            "request": "attach",\r
            "name": "Attach to Premiere Pro",\r
            "hostAppSpecifier": "premierepro-22.0"\r
        }\r
    ],\r
    "compounds": [\r
        {\r
            "name": "[Compound] Debug ID-to-PPro",\r
            "configurations": [\r
                "Attach to InDesign Coordinator",\r
                "Attach to Premiere Pro",\r
                // ...\r
            ]\r
        }\r
    ]\r
}\r
\r
Please keep in mind that the name fields in launch configurations are entirely customizable and are not used by the ExtendScript Debugger. The use of "[Attach]", "[Launch]", "[Compound]", "Attach to", and "Launch in" within the name fields is simply intended to assist with configuration disambiguation.\r
\r
Advanced Configuration\r
The following configuration options are accepted by both attach and launch debug configurations:\r
\r
Property	Type	Description	Default Value\r
hostAppSpecifier	string	The application specifier of the host application to debug.	""\r
engineName	string	The name of the engine to target.	""\r
hiddenTypes	string[]	\r
An array of data types and class names that should be hidden in the Variables view. Valid names are:\r
"undefined"\r
"null"\r
"boolean"\r
"number"\r
"string"\r
"object"\r
"this"\r
"prototype"\r
"builtin"\r
"Function"\r
any valid ExtendScript class name\r
The string "this" hides the this object. The string "prototype" hides all elements from the prototype chain, and the string "builtin" hides all elements that are part of the core ExtendScript language.\r
[]\r
aliasPath	string	\r
The absolute path to a file system alias (symbolic link) for the root directory loaded by a host application.\r
\r
If scripts are loaded into the host application through a symbolic link, then debugger features are unlikely to work by default. This is due to a mismatch between the script paths used by VS Code (actual paths) and those used by the host application (symbolic link paths). The aliasPath property enables the ExtendScript Debugger extension to rewrite paths using the symbolic link path, thereby matching the host application's view.\r
\r
For this feature to work, the root directory loaded into VS Code must be the directory targeted by the symbolic link.\r
\r
This workflow is most commonly used in CEP projects.\r
\r
""\r
registeredSpecifier	string	\r
A secondary application specifier that matches what the host application registered as its specifier during installation as opposed to the one it actually uses for BridgeTalk communication.\r
\r
NOTE: This is used only in very specific circumstances to assist in host application connections. At present, only InDesign Server connections make use of this.	""\r
The following configuration options are accepted by launch debug configurations only:\r
\r
Property	Type	Description	Default Value\r
script	string	The absolute path to the script to debug in the host application. If not specified, the contents of the active editor will be used.	""\r
bringToFront	boolean	Whether to bring the host application to front when starting the debug session or not.	false\r
debugLevel	number	The debugging level:\r
0 - No debugging.\r
1 - Break on breakpoints, errors, or exceptions.\r
2 - Stop at the first executable line.\r
1\r
Notes:\r
\r
If the script property is specified, then only the saved state of the script will be evaluated in the host application. In other words, unsaved modifications are ignored when a script is specified using this property.\r
Debugging\r
Starting an ExtendScript attach mode debug session in VS Code does not run any scripts in the connected host application - it merely informs the host application that a debugger is ready to debug. There are many ways to trigger a script to run while an attach mode debug session is active:\r
\r
Run a script in the host application directly (specifics are determined by the host application).\r
Load a CEP extension in a host application that supports debugging CEP contexts.\r
Interact with a UI element that triggers some ExtendScript to run in a host application (e.g. in a CEP extension or ScriptUI within an app that supports debugging such contexts).\r
Run the ExtendScript: Evaluate Script in Host... command.\r
Run the ExtendScript: Evaluate Script in Attached Host... command.\r
Any breakpoint, error, or exception encountered while an ExtendScript debug session is active will cause VS Code to show the debug state and enable interacting with the host application.\r
\r
The above does not apply to launch mode debug sessions because launch mode debug sessions will run a script automatically when started.\r
\r
Remote Debugging\r
The ExtendScript Debugger extension does not currently support Remote Debugging.\r
\r
Identifying Application Specifiers\r
Every Adobe application has a unique application specifier. This extension most commonly refers to them with the name hostAppSpecifier. The application specifier for a specific installed application may easily be discovered by starting a debug session without the hostAppSpecifier property set. When the resulting pick list appears, the grey text to the right of the application name is that application’s specifier.\r
\r
VS Code Commands\r
The ExtendScript Debugger extension adds the following Commands to VS Code:\r
\r
Evaluate Script in Host...\r
Evaluate Script in Attached Host...\r
Halt Script in Host...\r
Clear Error Highlights...\r
Export As Binary...\r
These commands may be triggered from the Command Palette or by custom key bindings. The key bindings approach provides access to several configuration options for the Evaluate Script in Host... and Evaluate Script in Attached Host... commands.\r
\r
Evaluate Script in Host\r
The ExtendScript Debugger extension provides an Evaluate Script in Host... command which enables VS Code to instruct a host application to evaluate a given script within a specific engine. If an attach mode debug session is active for the specified engine when the command is triggered, then any configured breakpoints may cause the script to pause. If a launch mode debug session is active for the specified engine when the command is triggered, then the command will fail as the extension allows only a single script evaluation to be active in an engine at any given time. If no attach mode debug session is active when the command is triggered, then breakpoints are ignored.\r
\r
When triggered, the command will show a list of installed host applications from which to select a target. If the host application has multiple ExtendScript engines running, a second list showing these options will appear. After the application and engine have been selected, the contents of the currently active editor will be sent to the host application for evaluation.\r
\r
Notes:\r
\r
This command will fail if the host application is not yet running. Please ensure that the desired host application is running before triggering this command.\r
Upon successful evaluation, the final result will be shown in an information message box.\r
If an error occurs during evaluation, any details regarding the error will appear in an error message box.\r
The file does not need to be saved in order to be sent to the host application for evaluation.\r
Custom Key Binding Arguments\r
The most flexible way to trigger the Evaluate Script in Host... command is to create a custom key binding. When you configure a custom key binding, you not only gain the ability to more quickly trigger the command, but you have the ability to specify the available command arguments.\r
\r
The command string is extension.extendscript-debug.evalInHost and the available command arguments include:\r
\r
Argument	Type	Description	Default Value\r
hostAppSpecifier	string	Specifier for the host application within which to evaluate the file. If not specified, a prompt will appear.	""\r
engineName	string	Name of the engine to target. Will use the default engine if not specified. If two or more engines are available, a prompt will appear.	""\r
script	string	Absolute path to the script file to evaluate. If not specified, the contents of the active editor will be used.	""\r
bringToFront	boolean	Whether to bring the host application to front when evaluating or not.	false\r
debugLevel	number	The debugging level:\r
0 - No debugging.\r
1 - Break on breakpoints, errors, or exceptions.\r
2 - Stop at the first executable line.\r
This only applies when evaluating while a debug session with the host application is active.	1\r
registeredSpecifier	string	\r
A secondary specifier that matches what the host application registered as its specifier during installation as opposed to the one it actually uses for BridgeTalk communication.\r
\r
NOTE: This is used only in very specific circumstances to assist in host application connections. At present, only InDesign Server connections make use of this.	""\r
Example of a configured key binding:\r
\r
{\r
    "key": "cmd+alt+j",\r
    "command": "extension.extendscript-debug.evalInHost",\r
    "args": {\r
        "hostAppSpecifier": "indesign-16.064",\r
        "engineName": "MyCoordinator",\r
        "debugLevel": 2,\r
    }\r
}\r
\r
When triggered, the command above would cause the contents of the currently active editor to be sent to the "MyCoordinator" engine in InDesign and, if a debug session was active, pause on the first executable line of the script.\r
\r
Notes:\r
\r
If the script argument is specified, then only the saved state of the file will be evaluated in the host application. In other words, unsaved modifications are ignored when a path is specified using this feature.\r
Evaluate Script in Attached Host\r
The Evaluate Script in Attached Host... command is very similar to the Evaluate Script in Host... command. The difference is that instead of requiring that you specify a specific host application and engine, the command will evaluate the script in an engine for which an attach mode debug session is active. How the command operates depends upon how many attach mode debug sessions are active when the command is triggered:\r
\r
Zero Active Sessions: The command will attempt to start an attach mode debug session and will ask which host application and, if applicable, engine to target. Once the debug session starts, the script evaluation will begin.\r
One Active Session: The command will immediately evaluate the script in the engine targeted by the active debug session.\r
Multiple Active Sessions: The command will present a list of the active attach mode debug sessions and allow you to select which to target for script evaluation.\r
The command string is extension.extendscript-debug.evalInAttachedHost. The command supports the same set of configurable command arguments as Evaluate Script in Host... except that the hostAppSpecifier, engineName, and registeredSpecifier fields are ignored (they are supplied directly by the debug session).\r
\r
Halt Script in Host\r
The Halt Script in Host... command enables you to halt (terminate/stop/end) any active evaluation process that was initially started with the Evaluate Script in Host... command. If there is only a single active evaluation process when this command is triggered, then that evaluation will be halted. If there are multiple active evaluation processes when the command is triggered, then the command will show a list of active evaluation processes that may be halted. Selecting one from this list will halt the selected evaluation.\r
\r
The command string is extension.extendscript-debug.haltInHost and there are no configurable command arguments.\r
\r
Clear Error Highlights\r
Triggering the Clear Error Highlights... command will clean up any active ExtendScript error highlights.\r
\r
The command string is extension.extendscript-debug.clearErrorHighlights and there are no configurable command arguments.\r
\r
Export to JSXBin\r
You can export your .js and .jsx scripts to JSXBin by right-clicking the editor window of a .js or .jsx file and selecting Export As Binary.... A file name suggestion will be provided. If you proceed with the export, the results will be saved in the same directory as your currently opened file. You can enter a complete path for the output if desired.\r
\r
The command string is extension.extendscript-debug.exportToJSXBin and there are no configurable command arguments.\r
\r
VS Code Status Bar Buttons\r
The ExtendScript Debugger extension adds two new buttons to the Status Bar that appear/disappear based on context.\r
\r
Eval in Adobe... Button\r
This button appears when a document either:\r
\r
recognized by VS Code as javascript, javascriptreact, or extendscript, or\r
has a file extension of .jsxbin\r
is focused. Clicking this button triggers the Evaluate Script in Host... command. Once a target host application/engine combination is chosen, the contents of the focused document will be evaluated within it.\r
\r
When an attach mode debug session is active, the Eval in Adobe... button changes to read Eval in Adobe [name of application] (engine).... Clicking this button will evaluate the focused script in the application being debugged.\r
\r
Halt in Adobe... Button\r
This button appears when a script evaluation is triggered from within VS Code. If only a single evaluation process is actively running, then the button will read Halt in Adobe [name of application] (engine)... and clicking it will immediately halt that evaluation process.\r
\r
If more than one evaluation process is active, then the button will read Halt in Adobe... and clicking it will open a list showing all active evaluation processes. Selecting a process from this list will cause that process to halt.\r
\r
Batch Export to JSXBin\r
By using the Export As Binary... command as described above, you can export one file at a time. However you can also batch export your .js and .jsx files to JSXBin using a script provided with the extension.\r
\r
Ensure that you have NodeJS installed.\r
Locate the script at the following location:\r
Mac:\r
$HOME/.vscode/extensions/<adobe.extendscript-debug extension directory>/public-scripts/exportToJSXBin.js\r
\r
Windows:\r
%USERPROFILE%\\.vscode\\extensions\\<adobe.extendscript-debug extension directory>\\public-scripts\\exportToJSXBin.js\r
\r
Run the following command from terminal.\r
node <Path to exportToJSXBin.js> [options] [filename/directory]\r
\r
InDesign Server (or When Host Applications Go Rogue)\r
During installation InDesign Server registers itself incorrectly for communication with other applications (including debuggers). The result is that the debugger is able to access certain information about the application but it fails to make any connections to running instances. To correct for this, the ExtendScript Debugger contains several configuration options and settings to enable the extension's features to correctly interface with InDesign Server instances.\r
\r
The ExtendScript Debugger extension supports per-configuration properties and "global" settings to work around the issue.\r
\r
The registeredSpecifier Property/Argument\r
A registeredSpecifier property may be specified in debug configurations and custom key binding arguments for the Evaluate Script in Host... command. This property refers to the specifier that the host application registers for itself during installation. When this property is present, the hostAppSpecifier is used for communicating with the host application while the registeredSpecifier is used to resolve application metadata (like it's "Display Name"). For most applications, the registered specifier is the same one used for communication so specifying the value is unnecessary.\r
\r
An example pairing might look like:\r
\r
"hostAppSpecifier": "indesignserver_myconfig-17.064",\r
"registeredSpecifier": "indesignserver-17.0",\r
\r
Properly setting the registeredSpecifier debug configuration property or key binding argument will allow only that specific configuration to work. See below for a more "global" solution.\r
\r
The "Application Specifier Overrides" Extension Setting\r
The "Application Specifier Overrides" extension setting enables full control over how the extension interprets any hostAppSpecifier value it encounters. With proper configuration, this setting will enable the default Evaluate Script in Host... command and related features to work with "default" InDesign Server instances (those started without a custom port or configuration). It also enables you to skip adding the registeredSpecifier property/argument in configurations.\r
\r
The setting expects an array of objects with the following properties:\r
\r
Property	Type	Description	Default Value\r
appSpecRegExp	string	A JavaScript regular expression value that is used to test against “Host Application Specifier” values for applicability. This applies to any custom hostAppSpecifier used in either debug configurations or custom key binding arguments. Proper declaration of the regular expression will allow custom application instances to resolve as expected.	""\r
registeredSpecifier	string	The specifier that the host application registers for itself during installation.	""\r
commsSpecifier	string	The specifier by which the "default" application instance will communicate.	""\r
Taken together, these properties constitute two “sets” of information:\r
\r
Specifying the appSpecRegExp and registeredSpecifier values will effectively add the registeredSpecifier property to any debug configuration or key binding argument where appSpecRegExp matches the hostAppSpecifier.\r
Specifying the commsSpecifier and registeredSpecifier values will enable the base Evaluate Script in Host... command and Eval in Adobe... button to work with the default instance of the specified application.\r
Example:\r
\r
"extendscript.advanced.applicationSpecifierOverrides": [\r
    {\r
        "appSpecRegExp": "indesignserver[_a-z0-9]*-17",\r
        "registeredSpecifier": "indesignserver-17.0",\r
        "commsSpecifier": "indesignserver-17.064"\r
    }\r
]\r
\r
The appSpecRegExp in the example above will successfully match against a hostAppSpecifier with value "indesignserver_myconfig-17.064" and will instruct any configuration in which it was found to use the registeredSpecifier value of "indesignserver-17.0". Additionally, if the Evaluate Script in Host... command is run without custom arguments, then the extension will match the registeredSpecifier value of "indesignserver-17.0" against the specifier it automatically uses, find that they are the same, and then use the commsSpecifier value of "indesignserver-17.064" for communication. If a "default" InDesign Server 2022 instance is running, then the script evaluation process will proceed as expected.\r
\r
Notes:\r
\r
This feature can be used to point the Eval in Adobe... button and base Evaluate Script in Host... command to a specific instance. This is only recommended if you always use the same application instance (e.g. InDesign Server port and configuration settings). In such cases, simply specify the full instance specifier for the commsSpecifier property.\r
Common Extensibility Platform (CEP)\r
CEP extensions run scripts in one of two separate contexts:\r
\r
An ExtendScript engine. This engine is provided by the host application and supports the host application's DOM.\r
A JavaScript engine. This engine is provided by CEF (which is part of the CEP runtime) and supports the HTML DOM used for the extension's UI.\r
Of these two contexts (and where supported by the host application), the ExtendScript Debugger extension can be used to debug scripts run in the ExtendScript engine context (#1 above).\r
\r
NOTE: The JavaScript engine context (#2 above) can be debugged using VS Code's built-in JavaScript debugger (see here for instructions to enable debugging this context). Once configured properly, both contexts can be debugged simultaneously using a Compound Launch Configuration.\r
\r
Unfortunately, no two host applications implement the ExtendScript engine context in the same way. Some are easy to debug, some require special configuration to work with, and some (e.g. Photoshop) simply do not support debugging CEP ExtendScript engines.\r
\r
This section describes how to use the ExtendScript Debugger extension to debug CEP ExtendScript contexts where such functionality is supported by the host application.\r
\r
General CEP Debugging Notes\r
This section outlines certain topics relevant to debugging CEP ExtendScript contexts.\r
\r
Loading Scripts\r
There are three different ways to ask a Host Application to evaluate ExtendScript scripts in CEP:\r
\r
The CSXS Manifest's <ScriptPath> Element.\r
The //@include Preprocessor Directive.\r
The $.evalFile() Function.\r
Loading a script with option #1 treats the file as an unnamed script. As suggested here:\r
\r
An unnamed script is assigned a unique name generated from a number.\r
\r
NOTE: Some host applications don't even assign a number for scripts loaded in this manner. The script's name evaluates to the empty string.\r
\r
Such scripts are effectively anonymous scripts and complicate the debugging experience. Unfortunately, when a breakpoint or exception is encountered in such a script, the ExtendScript Debugger extension has no way to connect that message to a file in the project. In such circumstances, a new unsaved file will be shown with the break state.\r
\r
Scripts loaded with either option #2 or #3 as listed above do not suffer from this issue. In these circumstances, host applications provide the ExtendScript Debugger extension with the information required to connect breakpoints or exceptions to the correct source file in the project and the debugger will operate as expected.\r
\r
Please see the following sections for examples on how to load CEP ExtendScript scripts in ways that support an improved debugging experience.\r
\r
Treating the <ScriptPath> Script as a Loader\r
In this scenario, you might create a file called "loader.jsx" and specify the file in your CSXS Manifest's <ScriptPath>. This file itself would have the same problem outlined above. However, the purpose of this script is simply to load the scripts that actually contain your business logic.\r
\r
Note that the <ScriptPath> script is not automatically invoked by the host application by default. One event that causes the evaluation of this script is when CSInterface.evalScript() is called for the first time. There may be other events that also trigger the specified script to evaluate.\r
\r
Important Note: Photoshop (amongst others?) does not support loading scripts in this manner. Attempts to process other files from the one specified within the <ScriptPath> element will fail. This appears to be documented here. Photoshop also does not support debugging CEP ExtendScript.\r
\r
There are two ways to use this approach:\r
\r
Preprocessor directives. Scripts loaded using the //@include preprocessor directive maintain all of the information necessary to communicate with the debugger. Example:\r
//@include "helloworld.jsx"\r
//@include "someotherscript.jsx"\r
\r
Using the $.evalFile() function. Scripts loaded using the $.evalFile() function maintain all of the information necessary to communicate with the debugger. Example:\r
$.evalFile($.includePath + "/helloworld.jsx");\r
$.evalFile($.includePath + "/someotherscript.jsx");\r
\r
Loading ExtendScript from the JavaScript Context\r
In this scenario, you trigger the $.evalFile() function from the browser context via CEP's CSInterface.evalScript() function. For this option, you might add the following logic to a <script> block in your extension's HTML somewhere:\r
\r
const csInterface = new CSInterface();\r
\r
// Use the extension path reported by the CSInterface.\r
const path = csInterface.getSystemPath(SystemPath.EXTENSION);\r
csInterface.evalScript(\`$.evalFile("\${path}/host/helloworld.jsx")\`);\r
csInterface.evalScript(\`$.evalFile("\${path}/host/someotherscript.jsx")\`);\r
\r
Or, alternatively (for non-Photoshop [and possibly others?] applications):\r
\r
const csInterface = new CSInterface();\r
\r
// Use the include path set for the CEP's ExtendScript context.\r
csInterface.evalScript(\`$.evalFile($.includePath + "/host/helloworld.jsx")\`);\r
csInterface.evalScript(\`$.evalFile($.includePath + "/host/someotherscript.jsx")\`);\r
\r
Important Note: Photoshop (amongst others?) does not support the second alternative. The value of $.includePath resolves to the empty string.\r
\r
Reloading CEP Extensions and ExtendScript\r
Restarting a CEP extension will also cause it to reevaluate the ExtendScript. Another way to reevaluate the ExtendScript is to use the ExtendScript Debugger extension's various methods of running a script. Note that this may cause oddities as the ExtendScript engine itself isn't reset - you're just overwriting the existing variable and function definitions. This can cause surprising issues if you're not careful.\r
\r
Manually Enabling Debugging\r
Some host applications run their CEP ExtendScript engine in a manner that constantly resets the "debug level" of the engine to "No Debugging". When this happens, an attached debug session may appear to ignore breakpoints and exceptions. Fortunately, it is possible to work around this issue by manually setting the debug level of the ExtendScript engine with the $.level property. Setting this property to either 1 or 2 will reenable the debugging features of the engine.\r
\r
There are two approaches to manually adjusting the debug level so that you can debug your CEP callback scripts. Depending upon your workflow, one of these may be more flexible for you than the other:\r
\r
Set $.level inside the ExtendScript callback function. With this approach, you simply set the value at the top of the function you wish to debug. See:\r
function DoSomething()\r
{\r
    $.level = 1;\r
\r
    // Breakpoints will work here.\r
}\r
\r
Set the $.level when calling the ExtendScript callback function. ExtendScript functions triggered from CEP browser contexts use the CSInterface.evalScript() API. We can set the $.level value from within this interface as follows:\r
csInterface.evalScript(\`$.level = 1; DoSomething();\`);\r
\r
Host Application Specific Notes\r
This section provides host application-specific details about CEP ExtendScript engines and their quirks (where possible). The list of host applications is non-exhaustive.\r
\r
Notes about the "Basic Details" in the sections below:\r
\r
The "Name of <ScriptPath> Script" detail will be either "[None]" or "[Numerical]". These are both anonymous but have distinct implications on how the files appear when encountered by the debugger.\r
The "<ScriptPath> Script Can Include Files" detail refers to whether or not the script can be used as a loader script.\r
After Effects\r
Basic Details:\r
\r
Name of <ScriptPath> Script: [Numerical]\r
Name of Engine: main\r
<ScriptPath> Script Can Include Files: Yes\r
Quirks:\r
\r
After Effects requires that you manually set $.level = 1 in order to handle debug breakpoints in callback sections.\r
Adjusting breakpoints in VS Code's interface while a debug session is attached will also cause the next breakpoint encountered to be triggered. This is temporary however: subsequent calls to the same function with the existing breakpoint will not be triggered.\r
This is due the fact that adjusting breakpoints effectively sets $.level = 1 for the next script evaluation.\r
Audition\r
Basic Details:\r
\r
Name of <ScriptPath> Script: [None]\r
Name of Engine: The value of the Id attribute of the Extension CSXS manifest element.\r
<ScriptPath> Script Can Include Files: Yes\r
Quirks:\r
\r
Specifying a custom engine with the Engine="EngineName" attribute of the <ScriptPath> CSXS manifest element will cause the CEP extension's ExtendScript context to fail to start altogether.\r
CEP Extensions in Audition are automatically assigned custom debuggable engines with a name that matches the Extension ID specified in the CSXS manifest (e.g. com.test.extension).\r
Attaching a debug session to such an engine enables all debugging capabilities.\r
These engines will shut down when the CEP extension is closed. When this happens, an attached debug session will automatically end.\r
Illustrator\r
Basic Details:\r
\r
Name of <ScriptPath> Script: [Numerical]\r
Name of Engine: Depends on time of initialization and whether or not the extension was the first to initialize an engine.\r
Welcome Screen and First to Init: transient\r
After Welcome Screen or Not First to Init: [None]\r
<ScriptPath> Script Can Include Files: Yes\r
Quirks:\r
\r
Illustrator runs CEP ExtendScript in one of two different engine contexts. Which engine context the script is run in depends upon startup timing. Specifically:\r
If the CEP extension is started before a file is opened and the "Welcome to Illustrator" window is still open, then the extension's ExtendScript will run in an engine named transient. This engine does not exist until a CEP extension is run that also triggers ExtendScript evaluation (e.g. via CSInterface.evalScript()). Once the engine exists, it is possible to connect a debug session with the ExtendScript Debugger extension. Restarting the extension will not change its association with the transient engine.\r
This only applies to the first CEP extension started. Any subsequent extension started will work as though it was started after a file is opened. As such, only a single CEP extension's ExtendScript will be debuggable during any single run of Illustrator.\r
If the CEP extension is started after a file is opened and the standard editing interface is visible, then the extension's ExtendScript will run in an engine named "" (the empty string). This is effectively a private, nameless engine and cannot be debugged.\r
Illustrator requires that you manually set $.level = 1 in order to handle debug breakpoints in callback sections.\r
InDesign\r
Basic Details:\r
\r
Name of <ScriptPath> Script: [None]\r
Name of Engine: Depends upon whether the Engine attribute of the <ScriptPath> CSXS manifest element is defined.\r
Defined: The value specified in the Engine attribute.\r
Not Defined: {EXTENSION_ID}_Engine_Id, where {EXTENSION_ID} is the value of the Id attribute of the Extension CSXS manifest element.\r
<ScriptPath> Script Can Include Files: Yes\r
Quirks:\r
\r
Debugging CEP with InDesign requires that you connect the debugger to the engine before you start your extension. This requires that you create a custom attach mode launch configuration that targets the engine that the extension will use. You would then attach to InDesign before starting up the CEP extension. If you accidentally start your CEP extension before starting the debug session, you must restart InDesign. A configuration for the engine specified above might look like:\r
{\r
  "type": "extendscript-debug",\r
  "request": "attach",\r
  "name": "Attach to My CEP Engine",\r
  "hostAppSpecifier": "indesign-17.064",\r
  // By default (where the Extension ID specified in the CSXS Manifest is "com.test.extension"):\r
  "engineName": "com.test.extension_Engine_Id",\r
  // Or if the manifest contains <ScriptPath Engine="My CEP Engine">:\r
  // "engineName": "My CEP Engine",\r
}\r
\r
Photoshop\r
Basic Details:\r
\r
Name of <ScriptPath> Script: [Numerical]\r
Name of Engine: [None]\r
<ScriptPath> Script Can Include Files: No\r
Quirks:\r
\r
Photoshop's CEP's ExtendScript context cannot be directly debugged. This is due to the fact that Photoshop runs CEP ExtendScript in private, nameless engines.\r
Due to this limitation, it is best to debug ExtendScript that will be used in CEP contexts directly in the main ExtendScript engine as you would other scripts (e.g. by using the extension's various ways to run a script).\r
Related CEP notes:\r
Photoshop does not support including files from within the script specified in the CSXS manifest's <ScriptPath>.\r
The $.includePath property is not supported (it resolves to the empty string).\r
Premiere Pro\r
Basic Details:\r
\r
Name of <ScriptPath> Script: [None]\r
Name of Engine: main or NewWorld (depends upon version of Premiere Pro)\r
<ScriptPath> Script Can Include Files: Yes\r
Quirks:\r
\r
Premiere Pro does not currently have any application-specific quirks. Simply connecting a debugger should be enough for all contexts to be debuggable out of the box.\r
\r
General Notes\r
If the ExtendScript Toolkit (ESTK) connects to a host application, then the ExtendScript Debugger extension will no longer be able to function correctly as a debugger. Restarting the host application is enough to fix this issue.\r
A single host application can only be debugged by a single VS Code window. If two or more VS Code windows attempt to maintain debug sessions with a single host application at the same time, only the last one to connect will work.\r
A single VS Code window can manage multiple debug sessions with multiple host application/engine combinations at the same time.\r
Once a VS Code Window connects to a host application, it will begin acting as the de facto debugger for all future debugging purposes (until another VS Code window connects). For host applications that support multiple engines, this may mean that an engine with no active debug session triggers a breakpoint and notifies the ExtendScript Debugger extension about the break. In these cases, the extension will attempt to notify you and offer you the ability to attach a debug session.\r
Changes to the "Caught Exceptions" breakpoint while a script is evaluating (e.g. stopped at a breakpoint) will only apply to newly created scopes (stack frames).\r
When an Evaluate Script in Host... command is run without an active debug session and fails with an error status, the extension will highlight the line of source code reported with the error. You may clear these highlights in one of the following manners:\r
Focus another source file such that the source file with a highlight becomes a background tab in VS Code.\r
Close and reopen the source file.\r
Start another script evaluation.\r
Start a debug session.\r
If the "Show Result Messages" setting is enabled, dismiss the relevant error message (if hidden, click the notification bell in the right side of the status bar).\r
Run the Clear Error Highlights... command.\r
The ExtendScript Debugger extension ignores the #target and #targetengine preprocessor directives. The extension will always use either the configured hostAppSpecifier and engineName settings or, if not otherwise specified, those dynamically chosen in the relevant UI.\r
When disconnecting from a Debug Session:\r
The host engine is instructed to unregister all VS Code breakpoints and continue evaluation.\r
Any script-based breakpoints (e.g. debugger or $.bp()) subsequently encountered by the host engine will cause the host engine to pause and await communication from a debugger. When this occurs, the extension will attempt to notify you and offer you the ability to attach a debug session to investigate the breakpoint details. If you dismiss or otherwise miss this notification, you may either halt the evaluation process or manually connect an attach mode debug session.\r
Resources\r
Official VS Code Debugging Documentation\r
Forums\r
Extensions / Add-ons Development Forum\r
Known Issues\r
The Extension fails to work on Apple devices using Apple Silicon (e.g. M1 processors). Internally, the extension interfaces with a special library that handles communication with host applications. This library is currently Intel-only. To successfully run the extension on Apple devices running Apple Silicon, VS Code itself must be run with Rosetta. Please see Apple's documentation for information on how to configure a universal build of VS Code to run using Rosetta. Alternatively, you can download the Intel-specific build of VS Code and run it directly.\r
The Extension fails to work on Windows on ARM devices. Use of the ExtendScript Debugger on Windows on ARM devices is not supported at this time.\r
Bring Target to Front does not work for certain host applications. Certain host applications on certain operating systems may ignore the extension's request to come forward. A possible workaround is to add BridgeTalk.bringToFront("host-app-specifier") to the top of the script you wish to evaluate.\r
The debugger fails to connect to InDesign Server. The ExtendScript Debugger extension fails to recognize that InDesign Server is running. This is due to a BridgeTalk registration issue in InDesign Server itself. See the InDesign Server (or When Host Applications Go Rogue) section for information on how to work around this issue.\r
The this object does not appear in the Variables view. All ExtendScript engines contain a bug that causes the implicit this variable to display incorrect contents when viewed from all but the top stack frame in a given call stack (only the implicit this for the top stack frame is ever resolved). For consistency, the implicit this variable is not listed. If you need to view the contents of the implicit this in any context, you may do so by adding var _this = this; to your script. The _this variable will appear in the Variables view and allow you to inspect the contents of the implicit this as expected.\r
This issue also affects the Debug Console. Entering this into the Debug Console will only ever refer to the implicit this resolved in the context of the top stack frame.\r
Unencoded binary values may break the underlying debugger protocol. All host applications have a known bug where attempts to send binary-encoded data to the debugger will fail. This typically results in missing Debug Console output or an empty Variables view. Scenarios where you may encounter this issue include when attempting to view the results of a binary file read() operation or when writing binary values directly in ExtendScript. The following script, for instance, will trigger this issue:\r
var x = "\\0";             // String representation of "NULL"\r
$.writeln("x is: " + x);  // Write the value of \`x\` to the Debug Console: does nothing\r
$.bp();                   // Ask the debugger to break: the Variables view will show an error\r
\r
To work around this issue and "see" the contents of the problematic variable, you may encode it using encodeURI(), toSource(), or by using a btoa() polyfill. For example:\r
var x = encodeURI("\\0");  // Encoded string representation of "NULL"\r
$.writeln("x is: " + x);  // Write the value of \`x\` to the Debug Console: prints "x is: %00"\r
$.bp();                   // Ask the debugger to break: the Variables view works as expected\r
\r
Please note that this issue is present in all ExtendScript debuggers, including the original ESTK.\r
FAQ\r
Can debug sessions or the Evaluate Script in Host... command be configured to launch the host application?\r
The ExtendScript Debugger extension does not currently support launching host applications.\r
\r
How do I halt evaluation of a script that wasn't started from VS Code?\r
There are currently two options:\r
\r
Connect an attach mode debug session to the host engine within which the script is evaluating. Once connected use the "Stop" debug action to simultaneously end the debug session and halt the script. The "Disconnect" button can be converted into a "Stop" button by holding the Alt/option key.\r
Attempt to evaluate a script (e.g. with a command or by starting a launch mode debug session) in the host engine within which the script is evaluating. The active evaluation will be detected and you will be offered the option to halt the active evaluation process and retry evaluating the script you specified.\r
Terms & Conditions\r
Your use of this application is governed by the Adobe General Terms of Use.\r
\r
© 2022 Adobe. All rights reserved. Adobe Privacy Policy.`})]}),"February720251"),G=E(f),re=n(()=>t(G,{children:[z(),Y(),_(),Z()]}),"book");export{re as book};
