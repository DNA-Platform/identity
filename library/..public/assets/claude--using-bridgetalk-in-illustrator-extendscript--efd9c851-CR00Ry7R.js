var f=Object.defineProperty;var c=(b,m)=>f(b,"name",{value:m,configurable:!0});import{j as e,C as g,b as y,T as j,P as p,c as T,H as k,a as s,d as l,W as t,D as v,L as x,k as r,$ as w}from"./index-BOhJW7Po.js";import{I as B,D as I,M as n,h as i,n as o,i as d}from"./.cover-BMDPxuW_.js";import{$ as C,O as a}from"./3-the-project~code-BWfSNv7l.js";import{C as S,S as Z}from"./.synopsis-Bh072bcM.js";import"./.cover-BbnrpMZm.js";import"./.cover-DCdXIqoN.js";const u=class u extends C{};c(u,"$ClaudeUsingBridgetalkInIllustratorExtendscriptEfd9c851");let h=u;const D=c(()=>e.jsxs(g,{children:[e.jsx(y,{}),e.jsx(B,{}),e.jsxs(j,{children:[e.jsx(p,{}),"[Table of Contents](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#table-of-contents)"]}),e.jsxs(T,{children:[e.jsx(k,{children:"January 2025"}),e.jsx(s,{children:e.jsx(l,{children:"[24 January 2025](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#24-january-2025)"})}),e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(t,{children:e.jsx(l,{children:"[Using BridgeTalk in Illustrator ExtendScript](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/)"})}),e.jsx(t,{children:e.jsx(l,{children:"[Synopsis](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#synopsis)"})}),e.jsx(t,{children:e.jsx(l,{children:"[Table of Contents](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#table-of-contents)"})})]})]})]}),"Table"),F=c(()=>e.jsxs(g,{children:[e.jsx(I,{children:e.jsx(v,{children:"[24 January 2025](2025-01-24)"})}),e.jsx(j,{children:"[24 January 2025](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#24-january-2025)"}),e.jsxs(n,{at:"2025-01-24T14:36:33.081130Z",children:[e.jsx(a,{children:"3c741db1-0ea6-445c-b53d-b3d85df184dd"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"I am working with ExtendScript in Illustrator and I need to build an abstraction around BridgeTalk. Can you teel me how to to use BridgeTalk?"})]}),e.jsxs(n,{at:"2025-01-24T14:36:39.446881Z",children:[e.jsx(a,{children:"6f2846ad-4870-4f70-ab38-fc91f9c0d5c9"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsx(s,{children:"Here's how to use BridgeTalk in ExtendScript for Illustrator:"}),e.jsx(o,{language:"javascript",children:`// Send message to Photoshop
var bt = new BridgeTalk();
bt.target = "photoshop";
bt.body = "alert('Hello from Illustrator')";
bt.send();

// Handle response
bt.onResult = function(response) {
    alert(response.body);
};

// Check if application is running
var isRunning = BridgeTalk.isRunning("photoshop");

// Get available applications
var apps = BridgeTalk.getSpecifiers();

// Wait for response
bt.timeout = 30; // seconds
bt.onTimeout = function() {
    alert("Request timed out");
};`}),e.jsx(s,{children:"Key specifications:"}),e.jsxs(s,{children:[e.jsx(x,{}),e.jsx(r,{children:'Target applications use lowercase names: "photoshop", "illustrator", "indesign"'}),e.jsx(r,{children:"Body contains JavaScript code as string"}),e.jsx(r,{children:"Response handling is asynchronous"}),e.jsx(r,{children:"Timeout defaults to 10 seconds"}),e.jsxs(r,{children:["Can check app status with ",e.jsxs(t,{children:[e.jsx(d,{}),"isRunning()"]})," before sending"]}),e.jsxs(r,{children:["Error handling via ",e.jsxs(t,{children:[e.jsx(d,{}),"onError"]})," callback"]})]}),e.jsx(s,{children:"Let me know if you need specific implementation examples."})]}),e.jsxs(n,{at:"2025-01-24T14:37:07.134133Z",children:[e.jsx(a,{children:"0c6edc57-46bc-4b4a-92f4-56e1677cb77a"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"Good. I can use bridgetalk to send script to illusrtator too right?"})]}),e.jsxs(n,{at:"2025-01-24T14:37:10.698737Z",children:[e.jsx(a,{children:"8d1717e6-5daf-432c-870d-382361196c2a"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsx(s,{children:"Yes. You can send scripts to Illustrator from other Adobe apps or even from Illustrator itself:"}),e.jsx(o,{language:"javascript",children:`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()"; // Create new document
bt.send();

// Handle response
bt.onResult = function(response) {
    alert("Command executed");
};`}),e.jsx(s,{children:"This is useful for automation across Adobe applications or executing scripts in separate Illustrator instances."})]}),e.jsxs(n,{at:"2025-01-24T14:37:58.452850Z",children:[e.jsx(a,{children:"2aaf9659-f78a-4a36-b933-cb8056af9e0b"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"How does bridgetalk know to execute that command?? Doesn't it just run files?"})]}),e.jsxs(n,{at:"2025-01-24T14:38:02.555981Z",children:[e.jsx(a,{children:"65deebea-fc26-45d8-897b-272ac9d7769b"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsxs(s,{children:["BridgeTalk executes JavaScript code that's passed as a string in the ",e.jsxs(t,{children:[e.jsx(d,{}),"body"]})," property. It doesn't only run files - it can execute any valid ExtendScript code. The receiving application (Illustrator in this case) interprets and runs this code in its scripting engine."]}),e.jsx(s,{children:"Example of different ways to send commands:"}),e.jsx(o,{language:"javascript",children:`// Direct command
bt.body = "app.documents.add()";

// Multiple commands
bt.body = "app.documents.add(); \\
           var doc = app.activeDocument; \\
           doc.artboards[0].name = 'New Board';";

// Can also run file content
var scriptContent = File("path/to/script.jsx").read();
bt.body = scriptContent;`})]}),e.jsxs(n,{at:"2025-01-24T14:38:36.880346Z",children:[e.jsx(a,{children:"5e39b692-a78d-4cf3-a362-a7db52f35ca5"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"You are sire?"})]}),e.jsxs(n,{at:"2025-01-24T14:38:40.035563Z",children:[e.jsx(a,{children:"be8924b6-3646-478b-b7dd-c5e0f4b2258c"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsxs(s,{children:["Yes, I'm sure. BridgeTalk executes JavaScript code strings directly in the target application's scripting engine. While it can run file content, it doesn't require files - any valid ExtendScript code in the ",e.jsxs(t,{children:[e.jsx(d,{}),"body"]})," property will execute."]}),e.jsx(s,{children:"Let me know if you'd like me to demonstrate with more examples."})]}),e.jsxs(n,{at:"2025-01-24T14:39:44.822865Z",children:[e.jsx(a,{children:"246dd539-7690-4477-adaf-8dac111a96cb"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"Wow, so running another script isn't even the primary function? Or is there an easy way to do that too?"})]}),e.jsxs(n,{at:"2025-01-24T14:39:53.399153Z",children:[e.jsx(a,{children:"8fddd886-cc6f-476c-88e2-b6f024609f25"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsx(s,{children:"The primary purpose of BridgeTalk is actually inter-application communication and script execution in Adobe applications. It can handle both direct code execution and script file execution effectively."}),e.jsx(s,{children:"For running external script files, here are the standard approaches:"}),e.jsx(o,{language:"javascript",children:`// Method 1: Read and execute script file
var scriptFile = File("path/to/script.jsx");
var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = scriptFile.read();
bt.send();

// Method 2: Use $.evalFile
bt.body = '$.evalFile("path/to/script.jsx")';
bt.send();`}),e.jsxs(s,{children:["The second method using ",e.jsxs(t,{children:[e.jsx(d,{}),"$.evalFile"]})," is often preferred when running script files as it maintains proper file paths and scope. This approach is particularly useful when your script needs to reference external files or resources."]}),e.jsx(s,{children:"Would you like me to explain more about how BridgeTalk handles different types of script execution?"})]}),e.jsxs(n,{at:"2025-01-24T14:40:50.763436Z",children:[e.jsx(a,{children:"48b765a8-d971-4ffb-84b9-e634a9df41f4"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"Huh I thought it was a way of executing other scripts. Like you gave the script path"})]}),e.jsxs(n,{at:"2025-01-24T14:40:57.473441Z",children:[e.jsx(a,{children:"e1b96c24-9321-4c1b-a3b7-6f205ebbd350"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsx(s,{children:"I understand your surprise. Let me clarify the fundamental purpose of BridgeTalk: it's primarily a communication system between Adobe applications that can execute JavaScript code. While executing external script files is one common use case, BridgeTalk's core functionality is broader."}),e.jsx(s,{children:"Think of BridgeTalk like a messenger that can:"}),e.jsxs(s,{children:[e.jsx(x,{ordered:!0}),e.jsx(r,{children:"Send direct JavaScript commands to be executed"}),e.jsx(r,{children:"Send the contents of script files to be executed"}),e.jsx(r,{children:"Facilitate communication between Adobe applications"})]}),e.jsxs(s,{children:["When I mentioned ",e.jsxs(t,{children:[e.jsx(d,{}),"$.evalFile()"]})," earlier, that's actually a separate ExtendScript function being executed through BridgeTalk, rather than a native BridgeTalk feature. BridgeTalk itself simply delivers and executes whatever JavaScript code is in its ",e.jsxs(t,{children:[e.jsx(d,{}),"body"]})," property."]}),e.jsx(s,{children:"Would you like me to demonstrate some practical examples of how BridgeTalk can be used for both direct code execution and script file handling? This might help illustrate the distinction more clearly."})]}),e.jsxs(n,{at:"2025-01-24T14:42:51.977717Z",children:[e.jsx(a,{children:"59b919ea-b671-4fda-aa34-f652a086a542"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"No it's good. I am doing this so as not to freeze the UI. My hope is that the UI updates in between commands when executed with BridgeTalk even within adobe. But my understanding is I can send with or without waiting for the command to finish. Is that true?"})]}),e.jsxs(n,{at:"2025-01-24T14:42:59.495110Z",children:[e.jsx(a,{children:"303702b9-025d-42bb-bbd5-9789b13bc739"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsx(s,{children:"Yes, BridgeTalk offers both synchronous and asynchronous execution options for managing UI responsiveness."}),e.jsx(s,{children:"For asynchronous execution (non-blocking):"}),e.jsx(o,{language:"javascript",children:`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()";
bt.send();
// Code here runs immediately without waiting

// Optional callback when command completes
bt.onResult = function(response) {
    // Handle completion
};`}),e.jsx(s,{children:"For synchronous execution (blocking):"}),e.jsx(o,{language:"javascript",children:`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()";
bt.send(true); // true parameter forces synchronous execution
// Code here waits for completion`}),e.jsx(s,{children:"The asynchronous approach is generally preferred for maintaining UI responsiveness. You can chain commands using the onResult callback if you need sequential execution while keeping the UI responsive:"}),e.jsx(o,{language:"javascript",children:`bt.onResult = function(response) {
    // Send next command here
    var nextBt = new BridgeTalk();
    nextBt.target = "illustrator";
    nextBt.body = "// next command";
    nextBt.send();
};`}),e.jsx(s,{children:"Would you like me to explain more about managing command sequencing while maintaining UI responsiveness?"})]}),e.jsxs(n,{at:"2025-01-24T14:43:46.291668Z",children:[e.jsx(a,{children:"ccddffda-a3d4-4af2-a21a-37163383b16a"}),e.jsx(i,{children:"[Doug](/dougs-story/)"}),e.jsx(s,{children:"Now, this is weird right? Can I even send a blocking command to illustrator from illustrator??"})]}),e.jsxs(n,{at:"2025-01-24T14:43:54.551098Z",children:[e.jsx(a,{children:"d1e15bc8-126e-4cf4-8acb-080704e03bb1"}),e.jsx(i,{children:"[Claude](/dougs-claude/)"}),e.jsx(s,{children:`That's a perceptive question about BridgeTalk's behavior within the same application. When sending commands from Illustrator to Illustrator, BridgeTalk actually creates a separate thread for execution. This means that while you can technically send a "blocking" command using send(true), it won't behave the same way as synchronous code executed directly in your script.`}),e.jsx(s,{children:"The primary purpose of BridgeTalk is inter-application communication, so using it for same-application execution can be considered a non-standard usage. For managing UI responsiveness within Illustrator, there are more conventional approaches:"}),e.jsx(o,{language:"javascript",children:`// Standard approach for non-blocking operations
app.scheduleTask("app.documents.add()", 100, false);

// Or using setTimeout
$.sleep(0); // Allows UI to update`}),e.jsx(s,{children:"If you need to ensure sequential execution while maintaining UI responsiveness, I recommend using app.scheduleTask() or carefully placed $.sleep() calls rather than relying on BridgeTalk for same-application communication. Would you like me to explain more about these alternative approaches?"})]})]}),"January2420251"),R=w(h),A=c(()=>e.jsxs(R,{children:[S(),Z(),D(),F()]}),"book");export{A as book};
