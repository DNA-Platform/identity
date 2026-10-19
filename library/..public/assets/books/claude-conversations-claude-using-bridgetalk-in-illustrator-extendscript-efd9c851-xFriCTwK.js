var x=Object.defineProperty;var c=(v,T)=>x(v,"name",{value:T,configurable:!0});import{jsxs as n,jsx as e}from"react/jsx-runtime";import{$ as w}from"@dna-platform/chemistry";import{$ as B,B as I,V as m,S as C,a as S,b as j,W as Z,P as D,c as y,d as H,M,A as F,O as t,I as W,e as J,D as R,f as a,g as r,C as s,k as l}from"./.cover-COAgTGOO.js";import{Chapter as u,Title as p,Author as A,Subject as U,Paragraph as i,Svg as $,Synopsis as E,Parenthetical as g,TableOfContents as P,Section as q,Heading as L,Content as h,Word as o,Date as O,List as k,Line as d}from"@dna-platform/public";import"styled-components";const f=class f extends B{};c(f,"$ClaudeUsingBridgetalkInIllustratorExtendscriptEfd9c851");let b=f;const Y=c(()=>n(u,{children:[e(I,{}),e(m,{children:C()}),e(m,{children:S()}),e(j,{ground:"#f3f0f8",band:"#c9bfe3",bandInk:"#3a2d63",foot:"#8f7fc0",footInk:"#2e2350",ink:"#3a2d63"}),e(Z,{x:"-32",y:"-26"}),n(D,{children:[e(y,{children:"[Doug](/dougs-story/)"}),e(y,{children:"[Claude](/dougs-claude/)"})]}),e(H,{from:"2025-01-24T14:36:33.081130Z",to:"2025-01-24T14:43:54.551098Z"}),e(M,{shown:"16",all:"16"}),e(p,{children:"[Using BridgeTalk in Illustrator ExtendScript](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/)"}),e(A,{children:"[Doug](/dougs-story/)"}),e(U,{children:"[Conversations](/our-conversations/)"}),e(F,{children:"[DNA](/dougs-claude/#dna)"}),e(t,{children:"efd9c851-25f2-4076-ae23-07759a0333d8"}),n(i,{children:[e(W,{}),e($,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),z=c(()=>n(u,{children:[e(E,{}),n(p,{children:[e(g,{}),"[Synopsis](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/)"]}),e(i,{children:"I am working with ExtendScript in Illustrator and I need to build an abstraction around BridgeTalk. Can you teel me how to to use BridgeTalk?"})]}),"Synopsis"),N=c(()=>n(u,{children:[e(P,{}),e(J,{}),n(p,{children:[e(g,{}),"[Table of Contents](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#table-of-contents)"]}),n(q,{children:[e(L,{children:"January 2025"}),e(i,{children:e(h,{children:"[24 January 2025](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#24-january-2025)"})}),n(i,{children:[e(g,{}),e(o,{children:e(h,{children:"[Using BridgeTalk in Illustrator ExtendScript](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/)"})}),e(o,{children:e(h,{children:"[Synopsis](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#synopsis)"})}),e(o,{children:e(h,{children:"[Table of Contents](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#table-of-contents)"})})]})]})]}),"Table"),V=c(()=>n(u,{children:[e(R,{children:e(O,{children:"[24 January 2025](2025-01-24)"})}),e(p,{children:"[24 January 2025](/claude-using-bridgetalk-in-illustrator-extendscript-efd9c851/#24-january-2025)"}),n(a,{at:"2025-01-24T14:36:33.081130Z",children:[e(t,{children:"3c741db1-0ea6-445c-b53d-b3d85df184dd"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"I am working with ExtendScript in Illustrator and I need to build an abstraction around BridgeTalk. Can you teel me how to to use BridgeTalk?"})]}),n(a,{at:"2025-01-24T14:36:39.446881Z",children:[e(t,{children:"6f2846ad-4870-4f70-ab38-fc91f9c0d5c9"}),e(r,{children:"[Claude](/dougs-claude/)"}),e(i,{children:"Here's how to use BridgeTalk in ExtendScript for Illustrator:"}),e(s,{language:"javascript",children:`// Send message to Photoshop
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
};`}),e(i,{children:"Key specifications:"}),n(i,{children:[e(k,{}),e(d,{children:'Target applications use lowercase names: "photoshop", "illustrator", "indesign"'}),e(d,{children:"Body contains JavaScript code as string"}),e(d,{children:"Response handling is asynchronous"}),e(d,{children:"Timeout defaults to 10 seconds"}),n(d,{children:["Can check app status with ",n(o,{children:[e(l,{}),"isRunning()"]})," before sending"]}),n(d,{children:["Error handling via ",n(o,{children:[e(l,{}),"onError"]})," callback"]})]}),e(i,{children:"Let me know if you need specific implementation examples."})]}),n(a,{at:"2025-01-24T14:37:07.134133Z",children:[e(t,{children:"0c6edc57-46bc-4b4a-92f4-56e1677cb77a"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"Good. I can use bridgetalk to send script to illusrtator too right?"})]}),n(a,{at:"2025-01-24T14:37:10.698737Z",children:[e(t,{children:"8d1717e6-5daf-432c-870d-382361196c2a"}),e(r,{children:"[Claude](/dougs-claude/)"}),e(i,{children:"Yes. You can send scripts to Illustrator from other Adobe apps or even from Illustrator itself:"}),e(s,{language:"javascript",children:`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()"; // Create new document
bt.send();

// Handle response
bt.onResult = function(response) {
    alert("Command executed");
};`}),e(i,{children:"This is useful for automation across Adobe applications or executing scripts in separate Illustrator instances."})]}),n(a,{at:"2025-01-24T14:37:58.452850Z",children:[e(t,{children:"2aaf9659-f78a-4a36-b933-cb8056af9e0b"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"How does bridgetalk know to execute that command?? Doesn't it just run files?"})]}),n(a,{at:"2025-01-24T14:38:02.555981Z",children:[e(t,{children:"65deebea-fc26-45d8-897b-272ac9d7769b"}),e(r,{children:"[Claude](/dougs-claude/)"}),n(i,{children:["BridgeTalk executes JavaScript code that's passed as a string in the ",n(o,{children:[e(l,{}),"body"]})," property. It doesn't only run files - it can execute any valid ExtendScript code. The receiving application (Illustrator in this case) interprets and runs this code in its scripting engine."]}),e(i,{children:"Example of different ways to send commands:"}),e(s,{language:"javascript",children:`// Direct command
bt.body = "app.documents.add()";

// Multiple commands
bt.body = "app.documents.add(); \\
           var doc = app.activeDocument; \\
           doc.artboards[0].name = 'New Board';";

// Can also run file content
var scriptContent = File("path/to/script.jsx").read();
bt.body = scriptContent;`})]}),n(a,{at:"2025-01-24T14:38:36.880346Z",children:[e(t,{children:"5e39b692-a78d-4cf3-a362-a7db52f35ca5"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"You are sire?"})]}),n(a,{at:"2025-01-24T14:38:40.035563Z",children:[e(t,{children:"be8924b6-3646-478b-b7dd-c5e0f4b2258c"}),e(r,{children:"[Claude](/dougs-claude/)"}),n(i,{children:["Yes, I'm sure. BridgeTalk executes JavaScript code strings directly in the target application's scripting engine. While it can run file content, it doesn't require files - any valid ExtendScript code in the ",n(o,{children:[e(l,{}),"body"]})," property will execute."]}),e(i,{children:"Let me know if you'd like me to demonstrate with more examples."})]}),n(a,{at:"2025-01-24T14:39:44.822865Z",children:[e(t,{children:"246dd539-7690-4477-adaf-8dac111a96cb"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"Wow, so running another script isn't even the primary function? Or is there an easy way to do that too?"})]}),n(a,{at:"2025-01-24T14:39:53.399153Z",children:[e(t,{children:"8fddd886-cc6f-476c-88e2-b6f024609f25"}),e(r,{children:"[Claude](/dougs-claude/)"}),e(i,{children:"The primary purpose of BridgeTalk is actually inter-application communication and script execution in Adobe applications. It can handle both direct code execution and script file execution effectively."}),e(i,{children:"For running external script files, here are the standard approaches:"}),e(s,{language:"javascript",children:`// Method 1: Read and execute script file
var scriptFile = File("path/to/script.jsx");
var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = scriptFile.read();
bt.send();

// Method 2: Use $.evalFile
bt.body = '$.evalFile("path/to/script.jsx")';
bt.send();`}),n(i,{children:["The second method using ",n(o,{children:[e(l,{}),"$.evalFile"]})," is often preferred when running script files as it maintains proper file paths and scope. This approach is particularly useful when your script needs to reference external files or resources."]}),e(i,{children:"Would you like me to explain more about how BridgeTalk handles different types of script execution?"})]}),n(a,{at:"2025-01-24T14:40:50.763436Z",children:[e(t,{children:"48b765a8-d971-4ffb-84b9-e634a9df41f4"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"Huh I thought it was a way of executing other scripts. Like you gave the script path"})]}),n(a,{at:"2025-01-24T14:40:57.473441Z",children:[e(t,{children:"e1b96c24-9321-4c1b-a3b7-6f205ebbd350"}),e(r,{children:"[Claude](/dougs-claude/)"}),e(i,{children:"I understand your surprise. Let me clarify the fundamental purpose of BridgeTalk: it's primarily a communication system between Adobe applications that can execute JavaScript code. While executing external script files is one common use case, BridgeTalk's core functionality is broader."}),e(i,{children:"Think of BridgeTalk like a messenger that can:"}),n(i,{children:[e(k,{ordered:!0}),e(d,{children:"Send direct JavaScript commands to be executed"}),e(d,{children:"Send the contents of script files to be executed"}),e(d,{children:"Facilitate communication between Adobe applications"})]}),n(i,{children:["When I mentioned ",n(o,{children:[e(l,{}),"$.evalFile()"]})," earlier, that's actually a separate ExtendScript function being executed through BridgeTalk, rather than a native BridgeTalk feature. BridgeTalk itself simply delivers and executes whatever JavaScript code is in its ",n(o,{children:[e(l,{}),"body"]})," property."]}),e(i,{children:"Would you like me to demonstrate some practical examples of how BridgeTalk can be used for both direct code execution and script file handling? This might help illustrate the distinction more clearly."})]}),n(a,{at:"2025-01-24T14:42:51.977717Z",children:[e(t,{children:"59b919ea-b671-4fda-aa34-f652a086a542"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"No it's good. I am doing this so as not to freeze the UI. My hope is that the UI updates in between commands when executed with BridgeTalk even within adobe. But my understanding is I can send with or without waiting for the command to finish. Is that true?"})]}),n(a,{at:"2025-01-24T14:42:59.495110Z",children:[e(t,{children:"303702b9-025d-42bb-bbd5-9789b13bc739"}),e(r,{children:"[Claude](/dougs-claude/)"}),e(i,{children:"Yes, BridgeTalk offers both synchronous and asynchronous execution options for managing UI responsiveness."}),e(i,{children:"For asynchronous execution (non-blocking):"}),e(s,{language:"javascript",children:`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()";
bt.send();
// Code here runs immediately without waiting

// Optional callback when command completes
bt.onResult = function(response) {
    // Handle completion
};`}),e(i,{children:"For synchronous execution (blocking):"}),e(s,{language:"javascript",children:`var bt = new BridgeTalk();
bt.target = "illustrator";
bt.body = "app.documents.add()";
bt.send(true); // true parameter forces synchronous execution
// Code here waits for completion`}),e(i,{children:"The asynchronous approach is generally preferred for maintaining UI responsiveness. You can chain commands using the onResult callback if you need sequential execution while keeping the UI responsive:"}),e(s,{language:"javascript",children:`bt.onResult = function(response) {
    // Send next command here
    var nextBt = new BridgeTalk();
    nextBt.target = "illustrator";
    nextBt.body = "// next command";
    nextBt.send();
};`}),e(i,{children:"Would you like me to explain more about managing command sequencing while maintaining UI responsiveness?"})]}),n(a,{at:"2025-01-24T14:43:46.291668Z",children:[e(t,{children:"ccddffda-a3d4-4af2-a21a-37163383b16a"}),e(r,{children:"[Doug](/dougs-story/)"}),e(i,{children:"Now, this is weird right? Can I even send a blocking command to illustrator from illustrator??"})]}),n(a,{at:"2025-01-24T14:43:54.551098Z",children:[e(t,{children:"d1e15bc8-126e-4cf4-8acb-080704e03bb1"}),e(r,{children:"[Claude](/dougs-claude/)"}),e(i,{children:`That's a perceptive question about BridgeTalk's behavior within the same application. When sending commands from Illustrator to Illustrator, BridgeTalk actually creates a separate thread for execution. This means that while you can technically send a "blocking" command using send(true), it won't behave the same way as synchronous code executed directly in your script.`}),e(i,{children:"The primary purpose of BridgeTalk is inter-application communication, so using it for same-application execution can be considered a non-standard usage. For managing UI responsiveness within Illustrator, there are more conventional approaches:"}),e(s,{language:"javascript",children:`// Standard approach for non-blocking operations
app.scheduleTask("app.documents.add()", 100, false);

// Or using setTimeout
$.sleep(0); // Allows UI to update`}),e(i,{children:"If you need to ensure sequential execution while maintaining UI responsiveness, I recommend using app.scheduleTask() or carefully placed $.sleep() calls rather than relying on BridgeTalk for same-application communication. Would you like me to explain more about these alternative approaches?"})]})]}),"January2420251"),G=w(b),ie=c(()=>n(G,{children:[Y(),z(),N(),V()]}),"book");export{ie as book};
