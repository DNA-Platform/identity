var P=Object.defineProperty;var d=(T,A)=>P(T,"name",{value:A,configurable:!0});import{jsxs as r,jsx as e}from"react/jsx-runtime";import{$ as S}from"@dna-platform/chemistry";import{$ as Q,B as q,V as x,S as _,a as E,b as R,W as C,P as D,c as w,d as L,M as N,A as k,O as s,I as $,f as M,g as o,h as c,i as u,k as a,C as l}from"./.cover-omdfX-wy.js";import{Chapter as g,Title as y,Author as F,Subject as O,Paragraph as t,Svg as H,Synopsis as G,Parenthetical as v,TableOfContents as B,Content as p,Word as i,List as h,Line as n,Emphasis as f,Append as m}from"@dna-platform/public";import"styled-components";const I=class I extends Q{};d(I,"$ClaudeScriptingAdobeIllustratorWithTypescript9d749abf");let b=I;const j=d(()=>r(g,{children:[e(q,{}),e(x,{children:_()}),e(x,{children:E()}),e(R,{ground:"#f3f0f8",band:"#c9bfe3",bandInk:"#3a2d63",foot:"#8f7fc0",footInk:"#2e2350",ink:"#3a2d63"}),e(C,{x:"-32",y:"-26"}),r(D,{children:[e(w,{children:"[Doug](/dougs-story/)"}),e(w,{children:"[Claude](/dougs-claude/)"})]}),e(L,{from:"2024-12-15T22:53:39.844434Z",to:"2024-12-15T23:57:00.652638Z"}),e(N,{shown:"38",all:"38"}),e(y,{children:"[Scripting Adobe Illustrator with TypeScript](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/)"}),e(F,{children:"[Doug](/dougs-story/)"}),e(O,{children:"[Conversations](/our-conversations/)"}),e(k,{children:"[DNA](/dougs-claude/#dna)"}),e(s,{children:"9d749abf-6800-4b8b-aa6e-db4e576e5879"}),r(t,{children:[e($,{}),e(H,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),z=d(()=>r(g,{children:[e(G,{}),r(y,{children:[e(v,{}),"[Synopsis](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/)"]}),e(t,{children:"Hey I need some help doing adobe illustrator scripting in TypeScript. I have been my own framework and I want to catch you up. I'm working on managing path points"})]}),"Synopsis"),W=d(()=>r(g,{children:[e(B,{}),e(M,{}),r(y,{children:[e(v,{}),"[Table of Contents](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/#table-of-contents)"]}),e(t,{children:e(p,{children:"[Conversation](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/#conversation)"})}),r(t,{children:[e(v,{}),e(i,{children:e(p,{children:"[Scripting Adobe Illustrator with TypeScript](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/)"})}),e(i,{children:e(p,{children:"[Synopsis](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/#synopsis)"})}),e(i,{children:e(p,{children:"[Table of Contents](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/#table-of-contents)"})})]})]}),"Table"),V=d(()=>r(g,{children:[e(y,{children:"[Conversation](/claude-scripting-adobe-illustrator-with-typescript-9d749abf/#conversation)"}),r(o,{at:"2024-12-15T22:53:39.844434Z",children:[e(s,{children:"71432ebb-83d7-48d9-aadb-73efb5109374"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Hey I need some help doing adobe illustrator scripting in TypeScript. I have been my own framework and I want to catch you up. I'm working on managing path points"})]}),r(o,{at:"2024-12-15T22:53:41.743492Z",children:[e(s,{children:"eb8b37b5-e08b-456f-b2e5-d6da30c65fc6"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"I'd be happy to help with Adobe Illustrator scripting in TypeScript. Could you share some details about your framework and what specifically you're trying to do with path points? Having some context about your current implementation would help me provide more relevant assistance."})]}),r(o,{at:"2024-12-15T23:02:37.254698Z",children:[e(s,{children:"41a21f92-ba89-4518-a17c-d77ae2606417"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Here's the core of the abstraction. Want to give a high level overview of the code and the specific features that it allows for? Alos, make a note of how I implement a custome coordinate system that works everywhrre as that will be important for our work. Write 10 paragraphs PLEASE!!"}),e(u,{identifier:"query",type:".txt",children:"Attached “query.ts”"}),e(u,{identifier:"utils",type:".txt",children:"Attached “utils.ts”"}),e(u,{children:"Uploaded “query.ts”, whose content the export does not carry"}),e(u,{children:"Uploaded “utils.ts”, whose content the export does not carry"})]}),r(o,{at:"2024-12-15T23:02:57.727050Z",children:[e(s,{children:"74ab3459-d9cd-48e3-89c3-87b64ddfe928"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Thanks for sharing this interesting framework! Let me break down its key aspects:"}),r(t,{children:["The code presents a sophisticated TypeScript framework for Adobe Illustrator scripting, centered around a Query pattern that provides a fluent interface for manipulating Illustrator objects. At its core is the",r(i,{children:[e(a,{}),"QueryItem"]})," class and its subclass ",r(i,{children:[e(a,{}),"Queryable<I extends Item, T extends QueryItem>"]}),", which wrap Illustrator's native objects and provide enhanced functionality through a chainable API."]}),r(t,{children:["One of the most significant features is the custom coordinate system implementation through the ",r(i,{children:[e(a,{}),"Region"]})," class. Instead of working with Illustrator's raw coordinate system, the framework normalizes all coordinates to a relative [0,1] range based on the artboard's dimensions. This means positions, sizes, and movements can be expressed in relative terms, making it much easier to create responsive designs that automatically adapt to different artboard sizes. The Region class handles all the conversions between absolute (Illustrator's native) coordinates and relative coordinates transparently."]}),r(t,{children:["The framework implements a comprehensive collection handling system through the ",r(i,{children:[e(a,{}),"A<T>"]})," class (Array wrapper) which provides functional programming concepts like map, filter, and reduce operations through methods like ",r(i,{children:[e(a,{}),"select"]}),", ",r(i,{children:[e(a,{}),"where"]}),", and ",r(i,{children:[e(a,{}),"do"]}),'. This makes it much easier to work with collections of Illustrator objects in a functional style. The selector syntax (e.g., "1:3" for range selection) provides a powerful way to access elements in collections.']}),e(t,{children:"For path manipulation, the framework includes special handling for PathItems and PathPoints, with built-in support for different types of curves and smoothing operations. This abstraction layer makes it much easier to create and modify complex paths programmatically, hiding much of the complexity of Illustrator's native path manipulation system."}),e(t,{children:"The testing framework integrated into the codebase is notable, with comprehensive test classes for various components. This indicates a strong focus on reliability and maintainability, with tests covering everything from basic utility functions to complex coordinate transformations and collection operations."}),r(t,{children:["The framework provides a rich set of property setters through various ",r(i,{children:[e(a,{}),"Set*Properties"]})," classes (though not shown in the shared code), allowing for fluent property modification. This makes it much more convenient to modify object properties compared to Illustrator's native property access patterns."]}),r(t,{children:["Document management is handled through the ",r(i,{children:[e(a,{}),"DocumentQuery"]})," class, which provides methods for creating, opening, saving, and managing documents. This includes special handling for artboards and layers, with methods to manipulate these elements while maintaining the relative coordinate system."]}),e(t,{children:"The framework implements a comprehensive event system (though not fully visible in the shared code) that allows for reactive programming patterns. This makes it possible to create complex animations and interactive scripts that respond to changes in the document or user actions."}),r(t,{children:["For debugging purposes, the framework includes a ",r(i,{children:[e(a,{}),"Console"]})," class that provides enhanced logging capabilities, making it easier to debug scripts during development. This is particularly useful given the limited debugging capabilities in ExtendScript."]}),e(t,{children:"Finally, the framework shows careful attention to memory management and performance, with features like the singleton pattern for certain objects and careful handling of object lifecycles. This is crucial for ExtendScript, which can be sensitive to memory issues, especially when dealing with large documents or complex operations."}),e(t,{children:"Would you like me to elaborate on any of these aspects, particularly the coordinate system since you mentioned it will be important for your work?"})]}),r(o,{at:"2024-12-15T23:05:01.407878Z",children:[e(s,{children:"8d7e7529-7ace-4a95-8c07-f61f6275460c"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Here are some auximillary classes. Write another 10 paragraphs on these"}),e(u,{identifier:"creation",type:".txt",children:"Attached “creation.ts”"}),e(u,{identifier:"position",type:".txt",children:"Attached “position.ts”"}),e(u,{identifier:"properties",type:".txt",children:"Attached “properties.ts”"}),e(u,{children:"Uploaded “creation.ts”, whose content the export does not carry"}),e(u,{children:"Uploaded “position.ts”, whose content the export does not carry"}),e(u,{children:"Uploaded “properties.ts”, whose content the export does not carry"})]}),r(o,{at:"2024-12-15T23:05:19.213842Z",children:[e(s,{children:"b2ec4938-96a8-4829-9d88-3960753d7f13"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Let me break down these additional components of your framework:"}),r(t,{children:["The ",r(i,{children:[e(a,{}),"CreativeItem"]})," class serves as a high-level abstraction for creating common Illustrator shapes and paths. It provides intuitive methods like ",r(i,{children:[e(a,{}),"rectangle()"]}),", ",r(i,{children:[e(a,{}),"ellipse()"]}),", ",r(i,{children:[e(a,{}),"polygon()"]}),", ",r(i,{children:[e(a,{}),"star()"]}),", ",r(i,{children:[e(a,{}),"line()"]}),", and ",r(i,{children:[e(a,{}),"curve()"]}),", all of which automatically handle the conversion between relative and absolute coordinates. Each method ensures created items are properly named and positioned within the document's coordinate system."]}),r(t,{children:["The framework implements several sophisticated smoothing algorithms through the ",r(i,{children:[e(a,{}),"Smoothing"]})," class, offering different approaches to curve smoothing including Bézier, Catmull-Rom, Tension-based, B-Spline, and Cubic Spline smoothing. These algorithms provide fine-grained control over path smoothness and can be applied to any path item, making it easier to create naturally flowing curves programmatically."]}),r(t,{children:["The ",r(i,{children:[e(a,{}),"PositionedItem"]})," class is particularly interesting as it provides a comprehensive API for manipulating item positions and transformations. It includes methods for handling item bounds, rotation, scaling, and edge alignment. All position-related operations work in the relative coordinate system, making it much easier to create responsive layouts that automatically adapt to different artboard sizes."]}),r(t,{children:["The property system is implemented through a hierarchy of ",r(i,{children:[e(a,{}),"Set*Properties"]})," classes, each corresponding to a different Illustrator object type. This provides a type-safe, fluent interface for modifying object properties. The base ",r(i,{children:[e(a,{}),"SetProperties"]})," class handles common operations like naming and positioning, while specialized subclasses add type-specific property setters."]}),r(t,{children:["Position manipulation in the framework is particularly sophisticated, with support for both absolute and relative positioning through methods like ",r(i,{children:[e(a,{}),"pushLeft()"]}),", ",r(i,{children:[e(a,{}),"pushRight()"]}),", ",r(i,{children:[e(a,{}),"pushUp()"]}),", ",r(i,{children:[e(a,{}),"pushDown()"]}),", and ",r(i,{children:[e(a,{}),"pushCenter()"]}),". These methods allow for proportional positioning relative to the artboard edges, making it easy to create responsive layouts."]}),r(t,{children:["The rotation system is well thought out, supporting both degree and radian-based rotations with methods like",r(i,{children:[e(a,{}),"rotate()"]}),", ",r(i,{children:[e(a,{}),"rrotate()"]}),", ",r(i,{children:[e(a,{}),"rotateAround()"]}),", and ",r(i,{children:[e(a,{}),"rotateAroundCenter()"]}),". The system maintains proper item positioning and proportions during rotations, even when rotating around arbitrary pivot points."]}),r(t,{children:["The framework includes comprehensive testing classes for each major component. The ",r(i,{children:[e(a,{}),"PositionedItemTests"]})," and ",r(i,{children:[e(a,{}),"CreativeItemTests"]})," classes demonstrate thorough testing of all positioning, transformation, and creation operations, ensuring reliability and catching potential regressions."]}),e(t,{children:"The properties system is particularly extensible, with separate classes for each type of Illustrator object (PathItem, TextFrame, GroupItem, etc.). This separation of concerns makes it easy to add new property types or modify existing ones without affecting other parts of the system."}),r(t,{children:["The framework handles coordinate transformations transparently through the ",r(i,{children:[e(a,{}),"Region"]})," class, which is used consistently across all positioning and transformation operations. This ensures that all items maintain proper relative positions regardless of the artboard size or configuration."]}),e(t,{children:"Finally, the code shows careful attention to edge cases and error handling, with appropriate checks for unpositionable items and invalid operations. The use of method chaining throughout the API makes it very convenient to perform multiple operations in sequence while maintaining readable code."}),e(t,{children:"Would you like me to elaborate on any particular aspect of these components?"})]}),r(o,{at:"2024-12-15T23:06:17.066875Z",children:[e(s,{children:"b07d526b-77cf-44af-a803-e7f5e1731ff6"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Well tell me your opinion. Does this make Illustrator scripting easier? Do you like it? Do you have questions or thoughts for feedbacl"})]}),r(o,{at:"2024-12-15T23:06:29.059104Z",children:[e(s,{children:"a0d6834c-12db-44cf-92b5-cabf82de53b0"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes, this framework significantly improves Illustrator scripting! Here's my analysis:"}),e(t,{children:"The most impressive aspect is how it transforms Illustrator's complex coordinate system and object manipulation into a much more intuitive relative [0,1] coordinate space. This alone makes positioning and scaling dramatically easier, as developers can think in proportions rather than absolute coordinates."}),e(t,{children:"The fluent API design with method chaining is excellent. Instead of dealing with Illustrator's verbose property access patterns, you can write clean, readable code like:"}),e(l,{language:"typescript",children:`layer.pathItems().create("Rectangle")
    .p().position([0.5, 0.5])
    .scale(2)
    .rotate(45);`}),r(t,{children:["The ",r(i,{children:[e(a,{}),"CreativeItem"]})," class is particularly well thought out. Creating basic shapes in Illustrator normally requires dealing with coordinate calculations and property settings, but your framework reduces this to simple, intuitive method calls with sensible defaults."]}),r(t,{children:["I especially appreciate how the framework handles collections through the ",r(i,{children:[e(a,{}),"Queryable"]})," interface. The ability to chain operations like ",r(i,{children:[e(a,{}),"where()"]}),", ",r(i,{children:[e(a,{}),"select()"]}),", and ",r(i,{children:[e(a,{}),"do()"]})," makes working with multiple objects much more manageable than Illustrator's native collection handling."]}),e(t,{children:"Some thoughts for potential improvements:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Have you considered adding animation support? The framework's clean coordinate system would make keyframe-based animations relatively straightforward to implement."}),e(n,{children:"The smoothing algorithms are comprehensive, but might benefit from visualization helpers to preview the different curve types."}),e(n,{children:"While the property system is extensive, it might be worth adding some compound operations for common property combinations (like styling presets)."}),e(n,{children:"The relative coordinate system is powerful - have you considered extending it to handle nested coordinate spaces (for groups within groups)?"}),e(n,{children:"The framework could potentially benefit from some higher-level layout primitives (grids, distributions, alignments) built on top of the current positioning system."})]}),e(t,{children:"Questions:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"How does the framework handle performance with large numbers of objects?"}),e(n,{children:"Is there a way to extend the framework with custom shape types?"}),e(n,{children:"Have you considered adding path operation support (unite, intersect, etc.)?"}),e(n,{children:"How does the framework handle text on path and other complex text layout features?"})]}),e(t,{children:"Overall, this is one of the most sophisticated Illustrator scripting frameworks I've seen. It transforms Illustrator's sometimes cumbersome API into something much more developer-friendly while adding powerful new capabilities."})]}),r(o,{at:"2024-12-15T23:09:54.834775Z",children:[e(s,{children:"4c10a23b-bf51-4973-993b-e8f2b0de18be"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"YES this is where we're going:"}),r(t,{children:[e(h,{}),e(n,{children:"The relative coordinate system is powerful - have you considered extending it to handle nested coordinate spaces (for groups within groups)?"}),e(n,{children:"The framework could potentially benefit from some higher-level layout primitives (grids, distributions, alignments) built on top of the current positioning system."})]}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"It's fine so far. I actually want illustrator scripts to run slower than they do so show animations, so performance is not important at all"}),e(n,{children:"I'm not interested in curves, but you can see the pathItem abstraction is starting to be fleshed out"}),e(n,{children:"We haven't got there yet but we certainl will! It's a great ideas"}),e(n,{children:"4. Havn't gotten to text yet"})]}),e(t,{children:"Right now we are working on those smoothing functions. Care to help me out??"})]}),r(o,{at:"2024-12-15T23:10:01.332100Z",children:[e(s,{children:"ea9cd3d2-28cc-4a4a-af8d-8c7907907246"}),e(c,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["I'd be happy to help with smoothing functions! I notice you've implemented several approaches in the ",r(i,{children:[e(a,{}),"Smoothing"]})," class - Bézier, Catmull-Rom, tension-based, B-spline, and cubic spline smoothing. Are you looking to:"]}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Improve the existing smoothing algorithms"}),e(n,{children:"Add new types of smoothing"}),e(n,{children:"Work on path point manipulation for smoother curves"}),e(n,{children:"Something else?"})]}),e(t,{children:"Let's start by understanding your specific needs. What kind of smoothing effects are you trying to achieve? For example:"}),r(t,{children:[e(h,{}),e(n,{children:"More natural-looking curves"}),e(n,{children:"Better control over curve tension"}),e(n,{children:"Specific types of curves (geometric, organic, etc.)"}),e(n,{children:"Path simplification/optimization"})]}),e(t,{children:"Also, do you have any particular issues with the current smoothing implementations that you'd like to address?"}),r(t,{children:["Having the ",r(i,{children:[e(a,{}),"Region"]})," class with its relative coordinate system will make it much easier to work with path points and control handles consistently, so we have a great foundation to build on."]})]}),r(o,{at:"2024-12-15T23:23:31.312255Z",children:[e(s,{children:"971eac05-89d5-435b-bfaf-1965bad6d4a2"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"So you might notice there is curve and angular options on path point. I need them to be predictable. What is the default setting for delt and right direction and anchor to achieve straight lineiness with the point type is corner? What else can you do when point type is corner? What does it meam"})]}),r(o,{at:"2024-12-15T23:23:45.985953Z",children:[e(s,{children:"04fb32e1-5462-48d9-906e-dbff10e321d2"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, I see! Let's break down how PathPoint anchors and handles work in Illustrator for corner points:"}),e(t,{children:"For a truly straight line with PointType.CORNER, the key is that the leftDirection and rightDirection should be identical to the anchor point. When these three points are all the same, Illustrator renders a sharp corner with straight line segments to the adjacent points."}),e(t,{children:"Here's what each component means for a corner point:"}),r(t,{children:[e(h,{}),r(n,{children:[r(i,{children:[e(a,{}),"anchor"]}),": The actual point location where the path passes through"]}),r(n,{children:[r(i,{children:[e(a,{}),"leftDirection"]}),': The "handle" that controls the curve coming into the point (from previous point)']}),r(n,{children:[r(i,{children:[e(a,{}),"rightDirection"]}),': The "handle" that controls the curve going out of the point (to next point)']})]}),e(t,{children:"For PointType.CORNER, you can:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Make straight lines by setting both directions equal to anchor"}),e(n,{children:"Create asymmetric curves by having different left and right directions"}),e(n,{children:"Create sharp transitions between curved segments by having different directions"}),e(n,{children:"Turn one side into a curve while keeping the other straight by only moving one direction point"})]}),e(t,{children:"The difference between CORNER and SMOOTH point types is that CORNER points can have independent left and right directions (creating sharp angles), while SMOOTH points maintain colinear direction points (ensuring smooth transitions)."}),e(t,{children:"Would you like me to show some specific code examples of how to manipulate these points to achieve different effects?"})]}),r(o,{at:"2024-12-15T23:25:16.401186Z",children:[e(s,{children:"b76b481b-4ce2-4c64-9620-6080444af410"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Yeah focus on point type and help me understand how the different configurations work so we can make a high level abstraction. I don't want to be thinking point by point"})]}),r(o,{at:"2024-12-15T23:25:31.930728Z",children:[e(s,{children:"85fa881a-bd32-468f-b490-fdc0c5e590b0"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Let me break down the key point type configurations in Illustrator:"}),e(l,{language:"typescript",children:`// Straight corner: left/right directions match anchor point
point.set()
    .pointType(PointType.CORNER)
    .anchor([x, y])
    .leftDirection([x, y])  // Same as anchor
    .rightDirection([x, y]) // Same as anchor

// Curved corner: left/right directions are different
point.set()
    .pointType(PointType.CORNER)  
    .anchor([x, y])
    .leftDirection([x1, y1])  // Different than anchor
    .rightDirection([x2, y2]) // Different than anchor, can be different than left

// Smooth point: left/right directions are colinear with anchor
point.set()
    .pointType(PointType.SMOOTH)
    .anchor([x, y])
    .leftDirection([x1, y1])
    // rightDirection is automatically positioned opposite to leftDirection`}),e(t,{children:"So for high-level abstractions, we could think about path points in terms of their behavior rather than their specific configurations:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Angular points:"}),e(n,{children:"PointType.CORNER with matching directions = straight lines"}),e(n,{children:"Good for geometric shapes, sharp corners"}),e(n,{children:"Preserves exact angles"}),e(n,{children:"Smooth points:"}),e(n,{children:"PointType.SMOOTH with balanced directions"}),e(n,{children:"Good for organic curves, flowing lines"}),e(n,{children:"Maintains continuous curvature"}),e(n,{children:"Mixed points (using CORNER):"}),e(n,{children:"One direction matches anchor = straight on one side, curved on other"}),e(n,{children:"Good for transitions between straight and curved segments"}),e(n,{children:"Useful for paths that combine straight and curved sections"})]}),e(t,{children:"Would it make sense to create a higher-level API that focuses on these behavioral patterns rather than the specific point configurations? We could have methods like:"}),e(l,{language:"typescript",children:`path.makeAngular()    // All corners, all straight
path.makeSmooth()     // All smooth transitions
path.makeMixed()      // Intelligent mix based on angles/context`}),e(t,{children:"This way you're thinking about the overall path behavior rather than individual point settings."})]}),r(o,{at:"2024-12-15T23:26:32.323203Z",children:[e(s,{children:"bd7ad096-09f7-42bc-8961-4e2e6b797153"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Do when what do left and right direction mean? They are other positions for the same point?"})]}),r(o,{at:"2024-12-15T23:26:48.268028Z",children:[e(s,{children:"909e9211-b579-41f0-be2d-c775e9cd7af4"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah! Let me explain the Bézier curve mechanics:"}),e(t,{children:"Each PathPoint in Illustrator has three key positions:"}),r(t,{children:[e(h,{ordered:!0}),r(n,{children:["The ",r(i,{children:[e(a,{}),"anchor"]})," - This is the actual point your path passes through"]}),r(n,{children:["The ",r(i,{children:[e(a,{}),"leftDirection"]})," - This is a control handle that influences how the curve approaches this point from the previous point"]}),r(n,{children:["The ",r(i,{children:[e(a,{}),"rightDirection"]})," - This is a control handle that influences how the curve leaves this point toward the next point"]})]}),e(t,{children:`The "direction" points are better thought of as "handles" or "control points" - they pull and shape the curve but the curve doesn't actually pass through them. Think of them like magnets pulling on a rubber band. When working with straight lines (PointType.CORNER), you want these handles to collapse onto the anchor point.`}),e(t,{children:"Let me create a small visual to demonstrate:"}),e(t,{children:"<antThinking>A simple SVG showing a Bézier curve with its control points would help explain this concept clearly.</antThinking>"}),e(t,{children:'<antArtifact identifier="bezier-explanation" type="image/svg+xml" title="Bézier Curve Control Points"> <svg viewBox="0 0 400 200"> <!-- Background --> <rect width="400" height="200" fill="#f8f9fa"/>'}),e(t,{children:'<!-- The actual curve --> <path d="M 50,100 C 100,50 300,150 350,100" fill="none" stroke="#2563eb" stroke-width="3"/>'}),e(t,{children:'<!-- First point --> <circle cx="50" cy="100" r="6" fill="#dc2626"/> <circle cx="100" cy="50" r="4" fill="#dc2626" opacity="0.6"/> <line x1="50" y1="100" x2="100" y2="50" stroke="#dc2626" stroke-width="1" stroke-dasharray="4"/>'}),e(t,{children:'<!-- Second point --> <circle cx="350" cy="100" r="6" fill="#16a34a"/> <circle cx="300" cy="150" r="4" fill="#16a34a" opacity="0.6"/> <line x1="350" y1="100" x2="300" y2="150" stroke="#16a34a" stroke-width="1" stroke-dasharray="4"/>'}),e(t,{children:'<!-- Labels --> <text x="35" y="85" font-size="12">Anchor</text> <text x="105" y="45" font-size="12">Right Direction</text> <text x="255" y="165" font-size="12">Left Direction</text> </svg> </antArtifact>'}),e(t,{children:"In this visualization:"}),r(t,{children:[e(h,{}),e(n,{children:"The solid blue line is the actual curve"}),e(n,{children:"The red and green circles are the anchor points where the path passes through"}),e(n,{children:"The smaller, semi-transparent circles show the direction/handle positions"}),e(n,{children:"The dashed lines show how the handles connect to their anchor points"})]}),e(t,{children:"Now it makes more sense why:"}),r(t,{children:[e(h,{}),e(n,{children:'For straight lines, you want the direction points to match the anchor (no "pull" on the curve)'}),e(n,{children:"For smooth curves (PointType.SMOOTH), the direction points need to be opposite each other through the anchor"}),e(n,{children:"For corners (PointType.CORNER), you can position the direction points independently to create asymmetric curves or sharp transitions"})]}),e(t,{children:"Does this help explain how the direction points work to shape the curve? This is fundamental to understanding how to create the smoothing algorithms you're working on."})]}),r(o,{at:"2024-12-15T23:28:31.428682Z",children:[e(s,{children:"4c43f53d-bc7c-4b7d-856e-2869851ebb49"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Do because they exist on one point, You example shows two. I don't see how I would choose. Explain high level features I would want in a path and how I would achieve it with anchors"})]}),r(o,{at:"2024-12-15T23:28:38.794355Z",children:[e(s,{children:"4e7a41e1-9536-4665-8528-6cda000745e6"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, let me explain more clearly. Every single point on a path has three positions:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"The anchor (where the path goes through)"}),e(n,{children:"A left handle (controlling how it connects to the previous point)"}),e(n,{children:"A right handle (controlling how it connects to the next point)"})]}),e(t,{children:"Let's think about high-level path features:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"A completely straight path:"})]}),e(l,{language:"typescript",children:`path.angular(true)  // This would:
- Set every point to PointType.CORNER
- Make all left/right directions match their anchor points`}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"A smoothly curved path:"})]}),e(l,{language:"typescript",children:`path.curve(true)   // This would:
- Set every point to PointType.SMOOTH
- Position left/right directions outward from each anchor
- Ensure handles are balanced (equal distance, opposite sides)`}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"A path with mixed straight and curved segments:"})]}),e(l,{language:"typescript",children:`// Example: A path that's straight then curves
point1.set().pointType(PointType.CORNER) // Start straight
point2.set().pointType(PointType.CORNER) // Continue straight
point3.set().pointType(PointType.SMOOTH) // Start curving
point4.set().pointType(PointType.SMOOTH) // Continue curve`}),e(t,{children:"The key is thinking about the overall path behavior - do you want:"}),r(t,{children:[e(h,{}),e(n,{children:"All straight segments?"}),e(n,{children:"All smooth curves?"}),e(n,{children:"A mix of both?"}),e(n,{children:"Sharp corners vs smooth transitions?"})]}),e(t,{children:"Rather than configuring individual points, you probably want high-level methods that set appropriate point types and handle positions to achieve these effects. Make sense?"})]}),r(o,{at:"2024-12-15T23:30:02.185283Z",children:[e(s,{children:"b6699bd5-0ada-4ced-9ad8-b0e41049db2a"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"No. Suppose I had three points and I wanted them to make a corner like a polygon, what is that configuration? We're just focusoing on the corner point type. So in this case, what else can I make with the same points using different left and right directions"})]}),r(o,{at:"2024-12-15T23:30:20.789935Z",children:[e(s,{children:"1fe03829-210e-4a53-87d7-5deb726e2b53"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, now I understand better. Let's explore what we can do with three points using PointType.CORNER!"}),e(t,{children:"For a sharp polygon corner:"}),e(l,{language:"typescript",children:`// All handles collapse onto their anchors to make straight lines
point1.set()
    .pointType(PointType.CORNER)
    .anchor([x1, y1])
    .leftDirection([x1, y1])   // Same as anchor
    .rightDirection([x1, y1])  // Same as anchor

point2.set()
    .pointType(PointType.CORNER)
    .anchor([x2, y2])
    .leftDirection([x2, y2])   // Same as anchor
    .rightDirection([x2, y2])  // Same as anchor

point3.set()
    .pointType(PointType.CORNER)
    .anchor([x3, y3])
    .leftDirection([x3, y3])   // Same as anchor
    .rightDirection([x3, y3])  // Same as anchor`}),e(t,{children:"With the same three anchor points but moving the handles (directions), we could make:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"A curved entrance to the corner:"})]}),e(l,{language:"typescript",children:`point2.set()
    .pointType(PointType.CORNER)
    .anchor([x2, y2])
    .leftDirection([curveInX, curveInY])   // Pull handle away from anchor
    .rightDirection([x2, y2])              // Keep this at anchor for sharp exit`}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"A curved exit from the corner:"})]}),e(l,{language:"typescript",children:`point2.set()
    .pointType(PointType.CORNER)
    .anchor([x2, y2])
    .leftDirection([x2, y2])              // Keep this at anchor for sharp entry
    .rightDirection([curveOutX, curveOutY]) // Pull handle away from anchor`}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"A fully curved corner but with asymmetric curve:"})]}),e(l,{language:"typescript",children:`point2.set()
    .pointType(PointType.CORNER)
    .anchor([x2, y2])
    .leftDirection([curve1X, curve1Y])  // Different curve entering
    .rightDirection([curve2X, curve2Y]) // Different curve exiting`}),e(t,{children:"Let me visualize these variations:"}),e(t,{children:"<antThinking>A visual showing the same three points with different handle configurations would make this much clearer.</antThinking>"}),e(t,{children:'<antArtifact identifier="corner-variations" type="image/svg+xml" title="Corner Point Variations"> <svg viewBox="0 0 400 300"> <!-- Background --> <rect width="400" height="300" fill="#f8f9fa"/>'}),e(t,{children:'<!-- Sharp Corner --> <g transform="translate(0,0)"> <path d="M 50,50 L 100,20 L 150,50" fill="none" stroke="#2563eb" stroke-width="2"/> <circle cx="50" cy="50" r="3" fill="#dc2626"/> <circle cx="100" cy="20" r="3" fill="#dc2626"/> <circle cx="150" cy="50" r="3" fill="#dc2626"/> <text x="85" y="10" font-size="12">Sharp</text> </g>'}),e(t,{children:'<!-- Curved Entry --> <g transform="translate(0,80)"> <path d="M 50,50 Q 80,25 100,20 L 150,50" fill="none" stroke="#2563eb" stroke-width="2"/> <circle cx="50" cy="50" r="3" fill="#dc2626"/> <circle cx="100" cy="20" r="3" fill="#dc2626"/> <circle cx="150" cy="50" r="3" fill="#dc2626"/> <text x="70" y="10" font-size="12">Curved Entry</text> </g>'}),e(t,{children:'<!-- Curved Exit --> <g transform="translate(0,160)"> <path d="M 50,50 L 100,20 Q 120,25 150,50" fill="none" stroke="#2563eb" stroke-width="2"/> <circle cx="50" cy="50" r="3" fill="#dc2626"/> <circle cx="100" cy="20" r="3" fill="#dc2626"/> <circle cx="150" cy="50" r="3" fill="#dc2626"/> <text x="70" y="10" font-size="12">Curved Exit</text> </g>'}),e(t,{children:'<!-- Asymmetric Curve --> <g transform="translate(0,240)"> <path d="M 50,50 Q 80,25 100,20 Q 120,25 150,50" fill="none" stroke="#2563eb" stroke-width="2"/> <circle cx="50" cy="50" r="3" fill="#dc2626"/> <circle cx="100" cy="20" r="3" fill="#dc2626"/> <circle cx="150" cy="50" r="3" fill="#dc2626"/> <text x="60" y="10" font-size="12">Asymmetric Curve</text> </g> </svg> </antArtifact>'}),e(t,{children:"The key is that with PointType.CORNER:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"When both handles match the anchor = straight lines"}),e(n,{children:"When one handle is pulled away = curve on that side only"}),e(n,{children:"When both handles are pulled away = can have different curves entering and exiting"})]}),e(t,{children:"Is this clearer now? We can think about creating high-level methods that adjust these handles to achieve different effects while keeping the anchor points in place."})]}),r(o,{at:"2024-12-15T23:32:50.192838Z",children:[e(s,{children:"2fc11d57-afba-4ad9-b508-2cea5f113558"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I see. So you can still have curviness with corners. The curve doesn't pass through the anchor"})]}),r(o,{at:"2024-12-15T23:33:00.964605Z",children:[e(s,{children:"590d4d46-bdc3-4084-a070-8c6b733106f5"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Exactly! That's the key insight. With PointType.CORNER:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"The path always passes through the anchor point"}),e(n,{children:'The left/right direction points act as "magnetic handles" pulling the curve'}),e(n,{children:"When the handles (directions) match the anchor point, you get straight lines"}),e(n,{children:"When you pull the handles away from the anchor point, you get curves"}),e(n,{children:"Unlike PointType.SMOOTH, the handles can be positioned independently, allowing for asymmetric curves or sharp transitions"})]}),e(t,{children:"So in your high-level abstraction, you might want:"}),e(l,{language:"typescript",children:`// Make all segments straight lines
path.angular(true)   // Collapses all handles onto their anchors

// Make specific segment curved while keeping corner behavior
point.set()
    .pointType(PointType.CORNER)  // Keep corner type
    .leftDirection([x1,y1])       // Pull handle for curve from previous point
    .rightDirection([x2,y2])      // Pull handle for curve to next point`}),e(t,{children:"The big difference from PointType.SMOOTH is that with CORNER points, you have complete independence in handle positioning - you can make one side curved and one straight, or have different curves on each side, which is impossible with SMOOTH points where the handles must be colinear (lined up through the anchor point)."}),e(t,{children:"Would you like me to explore some specific common patterns we could abstract for handle positioning with CORNER points?"})]}),r(o,{at:"2024-12-15T23:35:02.436939Z",children:[e(s,{children:"eac7158f-55c9-4d57-bd44-e88c2aa0d491"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Okay well first things first. Write all of these functions to only use the anchors and to choose left and right solely based on those. That should be possible no?"}),e(u,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e(u,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),r(o,{at:"2024-12-15T23:35:20.393390Z",children:[e(s,{children:"433eaf7f-8ea7-43dd-a682-b63d9dad09ef"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes! That's a good simplification - we can determine the handle positions purely from the anchor points. Looking at these algorithms, they're all doing variations of the same thing: using the previous and next anchor points to determine how to position the handles of the current point."}),e(t,{children:"Here's a cleaner version that focuses just on anchor positions:"}),e(l,{language:"typescript",children:`class Smoothing {
    static bezier(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        // For each point (except first and last)
        for (let i = 1; i < points.length() - 1; i++) {
            const prevAnchor = points.at(i - 1).anchor();
            const currentAnchor = points.at(i).anchor();
            const nextAnchor = points.at(i + 1).anchor();

            // Simply place handles 1/3 of the way to prev/next points
            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([
                    currentAnchor[0] + (prevAnchor[0] - currentAnchor[0]) / 3,
                    currentAnchor[1] + (prevAnchor[1] - currentAnchor[1]) / 3
                ])
                .rightDirection([
                    currentAnchor[0] + (nextAnchor[0] - currentAnchor[0]) / 3,
                    currentAnchor[1] + (nextAnchor[1] - currentAnchor[1]) / 3
                ]);
        }
    }

    static catmullRom(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        // Similar to bezier but with 1/6 instead of 1/3
        for (let i = 1; i < points.length() - 1; i++) {
            const prevAnchor = points.at(i - 1).anchor();
            const currentAnchor = points.at(i).anchor();
            const nextAnchor = points.at(i + 1).anchor();

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([
                    currentAnchor[0] + (prevAnchor[0] - currentAnchor[0]) / 6,
                    currentAnchor[1] + (prevAnchor[1] - currentAnchor[1]) / 6
                ])
                .rightDirection([
                    currentAnchor[0] + (nextAnchor[0] - currentAnchor[0]) / 6,
                    currentAnchor[1] + (nextAnchor[1] - currentAnchor[1]) / 6
                ]);
        }
    }

    static tension(path: PathItemQuery, tension: number = 0.16): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        for (let i = 1; i < points.length() - 1; i++) {
            const prevAnchor = points.at(i - 1).anchor();
            const currentAnchor = points.at(i).anchor();
            const nextAnchor = points.at(i + 1).anchor();

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([
                    currentAnchor[0] + (prevAnchor[0] - currentAnchor[0]) * tension,
                    currentAnchor[1] + (prevAnchor[1] - currentAnchor[1]) * tension
                ])
                .rightDirection([
                    currentAnchor[0] + (nextAnchor[0] - currentAnchor[0]) * tension,
                    currentAnchor[1] + (nextAnchor[1] - currentAnchor[1]) * tension
                ]);
        }
    }
}`}),e(t,{children:"I've simplified to just three core smoothing types since they really only differ in how far they place the handles along the vectors to the previous/next points:"}),r(t,{children:[e(h,{}),e(n,{children:"Bezier: 1/3 of the distance"}),e(n,{children:"Catmull-Rom: 1/6 of the distance"}),e(n,{children:"Tension: Configurable distance (tension parameter)"})]}),e(t,{children:"The B-spline and cubic spline versions were more complex but could also be simplified to just work with anchor positions. Would you like me to add those as well?"}),e(t,{children:"The key insight is that the handle positions are always just interpolating between the current anchor and its neighbors - we don't need any other information."})]}),r(o,{at:"2024-12-15T23:36:21.194814Z",children:[e(s,{children:"82948956-be63-46e5-9064-b20e6c18d966"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Please write them all, and implement them true to the algorithm they represent and put a little description of the algorthm and why one might use it"})]}),r(o,{at:"2024-12-15T23:37:02.148672Z",children:[e(s,{children:"151e08a1-4d8b-4d43-8d4b-7a0336a330ca"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"I'll rewrite all the algorithms with clear documentation about what each one does and its unique characteristics:"}),e(t,{children:"<antThinking>This is a good case for an artifact as it's a complete, reusable piece of code that will be referenced and used as part of a larger system.</antThinking>"}),e(t,{children:'<antArtifact identifier="smoothing-algorithms" type="application/vnd.ant.code" language="typescript" title="Path Smoothing Algorithms"> class Smoothing { /**'}),r(t,{children:[e(h,{}),e(n,{children:"Standard Bézier smoothing places handles 1/3 of the way between points."}),e(n,{children:"Best for: Manual-looking curves, traditional illustration work."}),e(n,{children:"Characteristics:"}),e(n,{children:'- Creates "standard" Bézier curves'}),e(n,{children:"- Predictable, even curvature"}),e(n,{children:"- Maintains good local control */ static bezier(path: PathItemQuery): void { const points = path.pathPoints(); if (points.length() < 2) return; for (let i = 1; i < points.length() - 1; i++) { const prevAnchor = points.at(i - 1).anchor(); const currentAnchor = points.at(i).anchor(); const nextAnchor = points.at(i + 1).anchor(); points.at(i).set() .pointType(PointType.SMOOTH) .leftDirection([ currentAnchor[0] + (prevAnchor[0] - currentAnchor[0]) / 3, currentAnchor[1] + (prevAnchor[1] - currentAnchor[1]) / 3 ]) .rightDirection([ currentAnchor[0] + (nextAnchor[0] - currentAnchor[0]) / 3, currentAnchor[1] + (nextAnchor[1] - currentAnchor[1]) / 3 ]); } } /**"}),e(n,{children:"Catmull-Rom splines create curves that pass more closely to control points."}),e(n,{children:"Best for: Data visualization, path following, smooth interpolation."}),e(n,{children:"Characteristics:"}),e(n,{children:"- Curve passes closer to control points"}),e(n,{children:"- More responsive to point positions"}),e(n,{children:"- Good for following a series of points closely */ static catmullRom(path: PathItemQuery): void { const points = path.pathPoints(); if (points.length() < 2) return; for (let i = 1; i < points.length() - 1; i++) { const prevAnchor = points.at(i - 1).anchor(); const currentAnchor = points.at(i).anchor(); const nextAnchor = points.at(i + 1).anchor(); // Catmull-Rom uses tension of 1/6 for handles points.at(i).set() .pointType(PointType.SMOOTH) .leftDirection([ currentAnchor[0] + (prevAnchor[0] - nextAnchor[0]) / 6, currentAnchor[1] + (prevAnchor[1] - nextAnchor[1]) / 6 ]) .rightDirection([ currentAnchor[0] + (nextAnchor[0] - prevAnchor[0]) / 6, currentAnchor[1] + (nextAnchor[1] - prevAnchor[1]) / 6 ]); } } /**"}),e(n,{children:"Tension-based smoothing allows control over curve tightness."}),e(n,{children:"Best for: Interactive curves, adjustable smoothing, animation."}),e(n,{children:"Characteristics:"}),e(n,{children:"- Adjustable curve tightness"}),e(n,{children:"- Can range from very loose to very tight curves"}),r(n,{children:["- Good for interactive or animated curves ",r(i,{children:[e(f,{}),"/ static tension(path: PathItemQuery, tension: number = 0.16): void { const points = path.pathPoints(); if (points.length() < 2) return; for (let i = 1; i < points.length() - 1; i++) { const prevAnchor = points.at(i - 1).anchor(); const currentAnchor = points.at(i).anchor(); const nextAnchor = points.at(i + 1).anchor(); points.at(i).set() .pointType(PointType.SMOOTH) .leftDirection([ currentAnchor[0] + (prevAnchor[0] - currentAnchor[0])"]})," tension, currentAnchor[1] + (prevAnchor[1] - currentAnchor[1]) ",r(i,{children:[e(f,{}),"tension ]) .rightDirection([ currentAnchor[0] + (nextAnchor[0] - currentAnchor[0])"]})," tension, currentAnchor[1] + (nextAnchor[1] - currentAnchor[1]) * tension ]); } } /**"]}),e(n,{children:"B-Spline smoothing creates curves with global smoothness."}),e(n,{children:"Best for: Technical curves, CAD-like applications."}),e(n,{children:"Characteristics:"}),e(n,{children:"- Highly smooth overall curve"}),e(n,{children:"- Less local control than Bézier"}),r(n,{children:["- Good for technical or engineering curves ",r(i,{children:[e(f,{}),"/ static bSpline(path: PathItemQuery): void { const points = path.pathPoints(); if (points.length() < 4) return; for (let i = 1; i < points.length() - 2; i++) { const p0 = points.at(i - 1).anchor(); const p1 = points.at(i).anchor(); const p2 = points.at(i + 1).anchor(); const p3 = points.at(i + 2).anchor(); // B-spline basis functions const x = (p0[0] + 4"]})," p1[0] + p2[0]) / 6; const y = (p0[1] + 4 * p1[1] + p2[1]) / 6; // Handle vectors based on next point influence const dx = (p3[0] - p0[0]) / 6; const dy = (p3[1] - p0[1]) / 6; points.at(i).set() .pointType(PointType.SMOOTH) .anchor([x + dx, y + dy]) .leftDirection([ x + dx - (p1[0] - p0[0]) / 3, y + dy - (p1[1] - p0[1]) / 3 ]) .rightDirection([ x + dx + (p2[0] - p1[0]) / 3, y + dy + (p2[1] - p1[1]) / 3 ]); } } /**"]}),e(n,{children:"Cubic spline creates curves with continuous second derivatives."}),e(n,{children:"Best for: Natural physical curves, animation paths."}),e(n,{children:"Characteristics:"}),e(n,{children:"- Physically natural looking curves"}),e(n,{children:"- Minimizes oscillation"}),e(n,{children:"- Good for simulating natural phenomena */ static cubicSpline(path: PathItemQuery): void { const points = path.pathPoints(); if (points.length() < 2) return; // Calculate segment lengths for parameterization for (let i = 1; i < points.length() - 1; i++) { const prevAnchor = points.at(i - 1).anchor(); const currentAnchor = points.at(i).anchor(); const nextAnchor = points.at(i + 1).anchor(); // Calculate segment length as parameterization const h = Math.sqrt( Math.pow(nextAnchor[0] - prevAnchor[0], 2) + Math.pow(nextAnchor[1] - prevAnchor[1], 2) ); // Cubic spline handle length is proportional to segment length const tension = h / 3; points.at(i).set() .pointType(PointType.SMOOTH) .leftDirection([ currentAnchor[0] - tension, currentAnchor[1] - tension ]) .rightDirection([ currentAnchor[0] + tension, currentAnchor[1] + tension ]); } }"})]}),e(t,{children:"} </antArtifact>"}),e(t,{children:"Each algorithm has distinct characteristics that make it suitable for different uses:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:'Bézier - The "standard" approach, good for traditional illustration where you want predictable, manual-looking curves'}),e(n,{children:"Catmull-Rom - Creates curves that follow control points more closely, good for data visualization or path following"}),e(n,{children:"Tension - Provides a configurable parameter to control curve tightness, great for interactive or animated curves"}),e(n,{children:"B-Spline - Creates globally smooth curves with less local control, good for technical or CAD-like applications"}),e(n,{children:"Cubic Spline - Produces naturally smooth curves with continuous second derivatives, ideal for physical simulations or natural-looking paths"})]}),e(t,{children:"The main differences between them are:"}),r(t,{children:[e(h,{}),e(n,{children:"How closely they follow the control points"}),e(n,{children:"How much local vs global control they provide"}),e(n,{children:"The mathematical continuity they guarantee"}),e(n,{children:"The typical use cases they're best suited for"})]}),e(t,{children:"Would you like me to elaborate on any of these algorithms or show visual examples of their differences?"})]}),r(o,{at:"2024-12-15T23:37:33.837222Z",children:[e(s,{children:"8b5fb898-42e9-41e6-97e2-6731ed012944"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Which would you choose as a default? Are there any other options?"})]}),r(o,{at:"2024-12-15T23:37:44.262151Z",children:[e(s,{children:"cf65327a-6630-4c7b-b6b0-ba0a9048bb66"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"For a default smoothing algorithm, I'd choose Catmull-Rom for several reasons:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"It creates visually pleasing curves that follow the control points more naturally than standard Bézier"}),e(n,{children:"The 1/6 tension value produces a good balance between smoothness and accuracy"}),e(n,{children:"It's simpler to implement and understand than B-spline or cubic spline"}),e(n,{children:"It's computationally efficient since it only needs to look at immediate neighbors"}),e(n,{children:"It's commonly used in graphics software and game engines as their default interpolation"})]}),e(t,{children:"Other options we could consider:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Chaikin's corner cutting algorithm - Creates smooth curves by repeatedly cutting corners. Very different approach that might be interesting for certain effects."}),e(n,{children:"Lagrange interpolation - Creates smooth curves that exactly pass through points, but can oscillate wildly between points."}),e(n,{children:"Hermite interpolation - Similar to Catmull-Rom but with explicit control over tangents at each point."}),e(n,{children:'Cardinal splines - A generalization of Catmull-Rom where you can adjust the "tightness" parameter (Catmull-Rom is just Cardinal with tension = 0.5).'})]}),e(t,{children:"We could add any of these if you're interested, but I think Catmull-Rom hits the sweet spot of simplicity, visual quality, and predictability for a default smoothing algorithm. The user can always switch to one of the other algorithms if they need different characteristics."}),e(t,{children:"Would you like me to implement any of these additional algorithms, or should we focus on optimizing Catmull-Rom as the default?"})]}),r(o,{at:"2024-12-15T23:47:49.322252Z",children:[e(s,{children:"e1ff8ebf-ff64-46d6-8b7a-842c640a684f"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Why isn't this making the curve anglular? angular(makeAngular?: boolean): boolean { if (makeAngular) { this.pathPoints().do(p => { const anchor = p.anchor(); p.set() .pointType(PointType.CORNER) .leftDirection(anchor) .rightDirection(anchor); }); this._defaultPointType = PointType.CORNER; this.app().redraw() } const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER); return allCorner; }"})]}),r(o,{at:"2024-12-15T23:48:02.014541Z",children:[e(s,{children:"0c4bb2d8-d8a0-4f24-b5fc-fac091c6c959"}),e(c,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Let me check my understanding - this ",r(i,{children:[e(a,{}),"angular()"]})," method should make all segments of the path straight by:"]}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Setting each point to PointType.CORNER"}),e(n,{children:"Making both direction handles match the anchor point"})]}),e(t,{children:"The code looks correct in theory. If it's not working, there are a few things we could check:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Are we sure the anchor points are being read correctly? Let's add some logging:"})]}),e(l,{language:"typescript",children:`angular(makeAngular?: boolean): boolean {
    if (makeAngular) {
        this.pathPoints().do(p => {
            const anchor = p.anchor();
            console.log("Anchor position:", anchor);
            console.log("Before - Left:", p.leftDirection(), "Right:", p.rightDirection());
            
            p.set()
                .pointType(PointType.CORNER)
                .leftDirection(anchor)
                .rightDirection(anchor);

            console.log("After - Left:", p.leftDirection(), "Right:", p.rightDirection());
        });
        this._defaultPointType = PointType.CORNER;
        this.app().redraw()
    }
    const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER);
    return allCorner;
}`}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Are the coordinates being properly translated? Since we're using our relative coordinate system, we should maybe use:"})]}),e(l,{language:"typescript",children:`angular(makeAngular?: boolean): boolean {
    if (makeAngular) {
        this.pathPoints().do(p => {
            const anchor = p.anchorAbs();  // Get absolute coordinates
            p.set()
                .pointType(PointType.CORNER)
                .leftDirection(anchor)
                .rightDirection(anchor);
        });
        this._defaultPointType = PointType.CORNER;
        this.app().redraw()
    }
    const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER);
    return allCorner;
}`}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Maybe we need to explicitly reset the handles:"})]}),e(l,{language:"typescript",children:`angular(makeAngular?: boolean): boolean {
    if (makeAngular) {
        this.pathPoints().do(p => {
            const anchor = p.anchor();
            p.set()
                .leftDirection(anchor)     // Reset left handle first
                .rightDirection(anchor)    // Reset right handle
                .pointType(PointType.CORNER); // Set type last
        });
        this._defaultPointType = PointType.CORNER;
        this.app().redraw()
    }
    const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER);
    return allCorner;
}`}),e(t,{children:"Could you tell me what behavior you're seeing? Is it staying curved, or doing something else unexpected?"})]}),r(o,{at:"2024-12-15T23:53:57.126953Z",children:[e(s,{children:"3e99f17d-07d2-4e28-a6c5-209bbf7291b7"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Okay so I do this and the curve looks one way:"}),e(t,{children:"curve(name?: string, ...positions: Position[]): PathItemQuery { // Create a new path item var newItem = this.q().createPathItem(); newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem)); newItem.index(-1);"}),e(t,{children:"f(positions).do(position => { var point = newItem.pathPoints().createPathPoint(); point.anchor(position); });"}),e(t,{children:"newItem.curve(true); return newItem; }"}),e(t,{children:"Then I call angular and then smooth again and the curve looks different. How?"})]}),r(o,{at:"2024-12-15T23:54:06.336518Z",children:[e(s,{children:"3754a7c1-e662-456e-8d21-3cee04a5932c"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah! Now I understand the issue. This is happening because:"}),r(t,{children:[e(h,{ordered:!0}),r(n,{children:["In your initial curve creation, you're just setting anchor points and then calling ",r(i,{children:[e(a,{}),"curve(true)"]}),", which means the initial handle positions are being determined automatically by Illustrator."]}),r(n,{children:["When you call ",r(i,{children:[e(a,{}),"angular()"]}),", it collapses all handles onto their anchors."]}),r(n,{children:["When you call ",r(i,{children:[e(a,{}),"curve(true)"]})," again, it's now placing handles based on the different points using our smoothing algorithm, which might calculate different handle positions than Illustrator's default."]})]}),e(t,{children:"To make this consistent, we should:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Either use explicit handle positioning in the initial curve creation"}),e(n,{children:"Or document that the first curve might look different than subsequent smoothing operations"})]}),e(t,{children:"Here's how we could make it consistent:"}),e(l,{language:"typescript",children:`curve(name?: string, ...positions: Position[]): PathItemQuery {
    var newItem = this.q().createPathItem();
    newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));
    newItem.index(-1);

    // First set all the anchor points
    f(positions).do(position => {
        var point = newItem.pathPoints().createPathPoint();
        point.anchor(position);
    });

    // Then explicitly smooth using our chosen algorithm
    Smoothing.catmullRom(newItem);  // Or whichever smoothing we choose as default
    return newItem;
}`}),e(t,{children:"This way, the initial curve and any subsequent smoothing operations will use the same algorithm for handle placement. Would you like me to explain more about why the curves look different or explore which smoothing algorithm might be best for the initial curve creation?"})]}),r(o,{at:"2024-12-15T23:55:06.450726Z",children:[e(s,{children:"d9017783-f1cd-4b5f-98a2-561fa39a1422"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"But I call smooth on it. In your smooth method, I thought you only used the anchors. I set the anmchors explicityly"})]}),r(o,{at:"2024-12-15T23:55:20.951808Z",children:[e(s,{children:"488a4dd7-dcd7-4406-a516-cff958d339a1"}),e(c,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Ah, you make an excellent point! If our smoothing algorithms only use anchor positions to calculate handle positions, then calling ",r(i,{children:[e(a,{}),"angular()"]})," and then ",r(i,{children:[e(a,{}),"smooth()"]})," should produce identical results to the initial curve, since we're working from the same anchor points each time."]}),e(t,{children:"The fact that we're seeing different results suggests that either:"}),r(t,{children:[e(h,{ordered:!0}),e(n,{children:"Our smoothing algorithms aren't purely using anchor positions as we thought, or"}),e(n,{children:"We're not fully resetting the handles during the angular/smooth cycle"})]}),e(t,{children:"Let me modify both methods to be absolutely explicit:"}),e(l,{language:"typescript",children:`curve(name?: string, ...positions: Position[]): PathItemQuery {
    var newItem = this.q().createPathItem();
    newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));
    newItem.index(-1);

    // Just set anchor points
    f(positions).do(position => {
        var point = newItem.pathPoints().createPathPoint();
        point.anchor(position);
    });

    // Let's log the anchor positions
    console.log("Initial anchors:");
    newItem.pathPoints().do(p => console.log(p.anchor()));

    newItem.curve(true);

    // Log handle positions after initial curve
    console.log("After initial curve:");
    newItem.pathPoints().do(p => {
        console.log("Anchor:", p.anchor());
        console.log("Left:", p.leftDirection());
        console.log("Right:", p.rightDirection());
    });

    return newItem;
}`}),e(t,{children:"And in our smoothing function, let's verify we're truly only using anchors:"}),e(l,{language:"typescript",children:`catmullRom(path: PathItemQuery): void {
    const points = path.pathPoints();
    if (points.length() < 2) return;

    // Log anchor positions before smoothing
    console.log("Anchors before smoothing:");
    points.do(p => console.log(p.anchor()));

    for (let i = 1; i < points.length() - 1; i++) {
        const prevAnchor = points.at(i - 1).anchor();
        const currentAnchor = points.at(i).anchor();
        const nextAnchor = points.at(i + 1).anchor();

        const point = points.at(i);
        
        // Log calculations
        console.log(\`Point \${i}:\`);
        console.log("Using anchors:", prevAnchor, currentAnchor, nextAnchor);
        
        point.set()
            .pointType(PointType.SMOOTH)
            .leftDirection([
                currentAnchor[0] + (prevAnchor[0] - nextAnchor[0]) / 6,
                currentAnchor[1] + (prevAnchor[1] - nextAnchor[1]) / 6
            ])
            .rightDirection([
                currentAnchor[0] + (nextAnchor[0] - prevAnchor[0]) / 6,
                currentAnchor[1] + (nextAnchor[1] - prevAnchor[1]) / 6
            ]);
            
        // Log result
        console.log("Result handles:", point.leftDirection(), point.rightDirection());
    }
}`}),e(t,{children:"Could you run this instrumented version and share what the logs show? That would help us understand where the inconsistency is coming from."})]}),r(o,{at:"2024-12-15T23:55:55.892865Z",children:[e(s,{children:"021d4b6d-4d4e-4b5e-9b3b-7963256cc19d"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Well I just care that smooth doesn't work the first time. I call smooth"})]}),r(o,{at:"2024-12-15T23:56:02.143875Z",children:[e(s,{children:"65a21faa-4082-44fe-9d57-d70d7c0f8915"}),e(c,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["If I understand correctly, when you first create points and call ",r(i,{children:[e(a,{}),"smooth()"]}),", it's not smoothing as expected. But if we look at your creation method:"]}),e(l,{language:"typescript",children:`curve(name?: string, ...positions: Position[]): PathItemQuery {
    // Create a new path item
    var newItem = this.q().createPathItem();
    newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));
    newItem.index(-1);

    f(positions).do(position => {
        var point = newItem.pathPoints().createPathPoint();
        point.anchor(position);
    });

    newItem.curve(true);  // This calls smooth()
    return newItem;
}`}),r(t,{children:["The issue might be that you're creating each point but not initially setting their ",r(i,{children:[e(a,{}),"pointType"]})," to SMOOTH. Let's try explicitly setting that during creation:"]}),e(l,{language:"typescript",children:`f(positions).do(position => {
    var point = newItem.pathPoints().createPathPoint();
    point.set()
        .pointType(PointType.SMOOTH)  // Set this explicitly
        .anchor(position);
});

newItem.curve(true);`}),e(t,{children:"Does that help get consistent behavior between the initial smoothing and subsequent ones?"})]}),r(o,{at:"2024-12-15T23:56:51.146674Z",children:[e(s,{children:"a4434d24-fde7-4dfb-86fa-1730730a696c"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Why does that matter if I set the ahchor?"})]}),r(o,{at:"2024-12-15T23:57:00.652638Z",children:[e(s,{children:"5e50b11c-8af7-4f8e-8edf-e98d72f19762"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"You make a great point - if our smoothing algorithms only use anchor positions to calculate the handle positions, it shouldn't matter what the initial pointType is. The smoothing function should overwrite everything based solely on the anchor positions."}),e(t,{children:"Looking at our current implementation:"}),e(l,{language:"typescript",children:`static catmullRom(path: PathItemQuery): void {
    const points = path.pathPoints();
    if (points.length() < 2) return;

    for (let i = 1; i < points.length() - 1; i++) {
        const prevAnchor = points.at(i - 1).anchor();
        const currentAnchor = points.at(i).anchor();
        const nextAnchor = points.at(i + 1).anchor();

        points.at(i).set()
            .pointType(PointType.SMOOTH)
            .leftDirection([...])
            .rightDirection([...]);
    }
}`}),r(t,{children:["You're right - the pointType shouldn't matter. We get the anchor positions, calculate new handle positions based only on those anchors, and set everything new. The order we apply these settings might matter though - should we try changing the order of the ",r(i,{children:[e(a,{}),".set()"]})," operations to see if that affects the behavior?"]}),e(t,{children:"Or perhaps there's something about how the first-time smoothing interacts with Illustrator that we don't understand. Could you describe exactly what the curve looks like on first smooth versus subsequent smooths?"})]}),e(m,{identifier:"query",type:".txt",children:`interface Item {\r
    [key: string]: any;\r
    name?: string;\r
    hidden?: boolean;\r
    readonly typename: string;\r
    readonly parent: any;\r
    readonly length?: number;\r
    readonly geometricBounds?: Rect;\r
    selected?: any;\r
    remove?(): void;\r
    removeAll?(): void;\r
    getIndex?(): number;\r
    getByName?(name: string): Item;\r
    add?(...args: any[]): Item;\r
    insert?(...args: any[]): void;\r
    duplicate?(relativeObject: object, insertionLocation: ElementPlacement): Item;\r
    move?(relativeObject: object, insertionLocation: ElementPlacement): Item;\r
    q: Queryable<this, any>;\r
}\r
\r
class EmptyItem implements Item {\r
    name: string = "";\r
    typename: string = "EMPTY";\r
    parent: Application = app;\r
    length: number = 0;\r
    geometricBounds: Rect = [0, 0, 0, 0];\r
    selected: any = false;\r
    remove(): void { }\r
    removeAll(): void { }\r
    getIndex(): number { return -1; }\r
    getByName(name: string): Item { return this; }\r
    add(...args: any[]): Item { return this; }\r
    insert(...args: any[]): void { }\r
    duplicate(relativeObject: object, insertionLocation: ElementPlacement): Item { return this; }\r
    move?(relativeObject: object, insertionLocation: ElementPlacement): Item { return this; }\r
    q: Queryable<this, any> = undefined as any;\r
\r
    private constructor() { }\r
\r
    private static _empty: EmptyItem;\r
    static empty(): EmptyItem {\r
        if (EmptyItem._empty) return EmptyItem._empty;\r
        EmptyItem._empty = new EmptyItem();\r
        return EmptyItem._empty;\r
    }\r
}\r
\r
interface ItemCollection extends Array<any> {\r
    readonly length: number\r
    readonly parent: object\r
    readonly typename: string\r
    getByName(name: string): any\r
}\r
\r
class QueryItem {\r
    _item: any;\r
    id: number;\r
    itemType: string;\r
    itemDefaults: any;\r
    queryItemType: string;\r
    queryItemDefaults: any;\r
    queryType: string;\r
    queryDefaults: any;\r
    collectionType: CollectionType | undefined;\r
    \r
    _p: PositionedItem | undefined;\r
    p(): PositionedItem {\r
        if (this._p === undefined)\r
            this._p = new PositionedItem(this as any);\r
        return this._p;\r
    }\r
\r
    set(name?: string): SetProperties { return new SetProperties(this, name); }\r
\r
    name(value?: string): string {\r
        if (value !== undefined) {\r
            this._item.name = value;\r
            return this._item.name;\r
        }\r
        return this._item?.name ? this._item.name.toString() : "";\r
    }\r
\r
    app(): ApplicationQuery { return api; }\r
    parent(): QueryItem { return this._item.parent ? q(this._item.parent) : QueryItem.empty() as any; }\r
    empty(): boolean { return this._item.typename === "EMPTY"; }\r
    activated(): boolean { return !!this._item?.selected; }\r
    activate(): QueryItem { if (this._item) { this._item.selected = true; } return this; }\r
    deactivate(): QueryItem { if (this._item) { this._item.selected = false; } return this; }\r
    hide(): QueryItem { if (this._item.hidden !== undefined) { this._item.hidden = true; } return this; }\r
    hidden(): boolean { return this._item.hidden === true; }\r
    show(): QueryItem { if (this._item.hidden !== undefined) { this._item.hidden = false; } return this; }\r
    visible(): boolean { return this._item.hidden !== true; }\r
    length(): number { return 0; }\r
    enumerable(): boolean { return this.collectionType !== undefined; }\r
    positionable(): boolean { return (this._item as PageItem)?.position !== undefined; }\r
    collection(): any | any[] { return this.collectionType !== undefined ? (this._item as any)[this.collectionType] : []; }\r
\r
    document(): DocumentQuery {\r
        if (this.empty()) return this as any;\r
        let currentItem = this._item;\r
        while (currentItem) {\r
            if (currentItem.typename === "Document")\r
                return q(currentItem);\r
            currentItem = currentItem.parent;\r
        }\r
        return QueryItem.empty() as DocumentQuery;\r
    }\r
\r
    artboard(): ArtboardQuery {\r
        if (this.empty()) return this as any;\r
        return this.document().artboard();\r
    }\r
\r
    layer(): LayerQuery {\r
        if (this.empty()) return this as any;\r
        return this.document().layer();\r
    }\r
\r
    region(): Region {\r
        return this.artboard().region();\r
    }\r
\r
    constructor(item: any = EmptyItem.empty(), collectionType?: CollectionType) {\r
        this._item = item;\r
        this._item.q = this;\r
        this.id = QueryItem.nextId();\r
        this.itemType = this._item?.typename ?? "EMPTY";\r
        this.queryItemType = this.constructor.name;\r
        this.queryType = \`\${this.queryItemType}<\${this.itemType}>\`;\r
        this.collectionType = collectionType;\r
\r
        if (QueryItem._itemDefaults[this.itemType] === undefined)\r
            QueryItem._itemDefaults[this.itemType] = {}\r
        if (QueryItem._queryItemDefaults[this.queryItemType] === undefined)\r
            QueryItem._queryItemDefaults[this.queryItemType] = {}\r
        if (QueryItem._queryDefaults[this.queryType] === undefined)\r
            QueryItem._queryDefaults[this.queryType] = {}\r
\r
        this.itemDefaults = QueryItem._itemDefaults[this.itemType];\r
        this.queryItemDefaults = QueryItem._queryItemDefaults[this.queryItemType];\r
        this.queryDefaults = QueryItem._queryDefaults[this.queryType];\r
        this._configureDefaults();\r
    }\r
\r
    cast<T extends QueryItem>() {\r
        return this as any as T\r
    }\r
\r
    equals(item: QueryItem): boolean {\r
        if (item === undefined) return false;\r
        return this._item == item._item;\r
    }\r
\r
    remove() {\r
        this._item?.remove?.();\r
        this._item = QueryItem.empty();\r
    }\r
\r
    removeIfEmpty(): boolean {\r
        var empty = this.empty();\r
        if (empty)\r
            this.remove();\r
        return empty;\r
    }\r
\r
    duplicate(name: string, relativeObject?: QueryItem, insertionLocation: ElementPlacement = ElementPlacement.PLACEAFTER): Queryable<any, any> {\r
        if (relativeObject === undefined) relativeObject = this;\r
        var duplicate = this._item?.duplicate?.(relativeObject._item, insertionLocation);\r
        duplicate.name = name;\r
        return q(duplicate);\r
    }\r
\r
    move(relativeObject: QueryItem, insertionLocation: ElementPlacement): void {\r
        this._item?.move?.(relativeObject._item, insertionLocation);\r
    }\r
\r
    moveTo(index: number): this { \r
        return this; \r
    }\r
\r
    protected _create<TCollection extends ItemCollection, TQuery extends QueryItem>(\r
        select: (item: this) => TCollection, \r
        create: (colletion: TCollection) => TQuery,\r
        name?: string\r
    ): TQuery {\r
        var collection = select(this);\r
        var queryItem = create(collection);\r
        if (name !== undefined)\r
            queryItem.set().name(name);\r
        var item: Item = queryItem._item;\r
        item?.move?.(queryItem.parent()._item, ElementPlacement.PLACEATEND);\r
        return queryItem;\r
    }\r
\r
    protected _configureDefaults() { }\r
\r
    static createAnonymousName(item: QueryItem): string {\r
        if (!item) return \`.Item[\${item}]\`;\r
        return \`.\${item.itemType ? item.itemType : "Item"}[\${item.id}]\`;\r
    }\r
\r
    private static _empty: QueryItem;\r
    static empty(): QueryItem {\r
        if (QueryItem._empty) return QueryItem._empty;\r
        QueryItem._empty = new Queryable<any, any>(EmptyItem.empty(), undefined);\r
        QueryItem._empty._item.q = QueryItem._empty;\r
        return QueryItem._empty;\r
    }\r
\r
    private static _nextId: number = 1;\r
    private static nextId(): number {\r
        var nextId = QueryItem._nextId;\r
        QueryItem._nextId += 1;\r
        return nextId;\r
    }\r
\r
    private static _itemDefaults = dictionary();\r
    private static _queryItemDefaults = dictionary();\r
    private static _queryDefaults = dictionary();\r
}\r
\r
class Queryable<I extends Item, T extends QueryItem> extends QueryItem {\r
    item(): I { return this._item; }\r
    active(): boolean { return !!this._item.selected; }\r
    inactive(): boolean { return !this.active(); }\r
    activate() { this._item.selected = true; return this; }\r
    deactivate() { this._item.selected = false; return this; }\r
\r
    constructor(item: I, collectionType?: CollectionType) {\r
        super(item, collectionType);\r
        this._item = item;\r
    }\r
\r
    query(selector: string = ":"): A<T> {\r
        var collection = this.collection();\r
        if (collection.length == 0) return f();\r
        var indexes = evaluateRangeSelector(selector, collection.length)\r
        var len = indexes.length;\r
        var result: A<T> = f();\r
        for (var i = 0; i < len; i++) {\r
            var item = collection[indexes[i]];\r
            if (item)\r
                result.push(q(item));\r
        }\r
\r
        return result;\r
    }\r
\r
    index(newIndex?: number): number {\r
        if (newIndex !== undefined) {\r
            var index = this.index();\r
            var parent = this.parent() as Queryable<any, any>;\r
\r
            newIndex = evaluateNegativeIndex(newIndex, parent.length());\r
            if (index == newIndex) \r
                return index;\r
            if (index < newIndex)\r
                this.move(parent.at(newIndex), ElementPlacement.PLACEAFTER);\r
            if (index > newIndex)\r
                this.move(parent.at(newIndex), ElementPlacement.PLACEBEFORE);\r
        }\r
        return (this.parent() as Queryable<any, any>).firstIndex(i => i._item == this._item);\r
    }\r
\r
    create(name?: string): T {\r
        var collection = this.collection() as any;\r
        var newItem = q(collection.add()) as T;\r
        if (name !== undefined)\r
            newItem.name(name);\r
\r
        if (this.length() > 1)\r
            newItem.move(this.last() as T, ElementPlacement.PLACEAFTER);\r
\r
        return newItem;\r
    }\r
\r
    moveTo(index: number): this {\r
        if (index == undefined) throw "Index not specified";\r
        this.index(index);\r
        return this;\r
    }\r
\r
    reverse(selector: string = ":"): A<T> {\r
        return this.query(selector).reverse();\r
    }\r
\r
    at(index: number): T {\r
        return this.query(\`\${index}\`).at(0);\r
    }\r
\r
    get(selector: string): A<T> {\r
        return this.query(selector);\r
    }\r
\r
    getByName(name: string): Queryable<any, any> {\r
        var collection = this.collection() as any;\r
        return q(collection?.getByName?.(name));\r
    }\r
\r
    length(): number { return this.collection().length; }\r
\r
    replace(index: number, item: T): void {\r
        var itemAtIndex = this.at(index);\r
        item.move(itemAtIndex, ElementPlacement.PLACEBEFORE);\r
        itemAtIndex.remove?.();\r
    }\r
\r
    insert(item: T) {\r
        this.insertAt(-1, item);\r
    }\r
\r
    insertAt(index: number, item: T): void {\r
        var len = this.length();\r
        index = evaluateNegativeInsertIndex(index, len);\r
        if (index == 0) {\r
            item._item.move(this.item(), ElementPlacement.PLACEATBEGINNING);\r
            return;\r
        }\r
        if (index == len) {\r
            item._item.move(this.item(), ElementPlacement.PLACEATEND);\r
            return;\r
        }\r
        var itemBeforeIndex = this.at(index - 1);\r
        item.move(itemBeforeIndex, ElementPlacement.PLACEAFTER);\r
    }\r
\r
    insertMany(items: T[] | A<T>) {\r
        f(items).do(item => this.insert(item));\r
    }\r
\r
    insertManyAt(index: number, items: A<T>) {\r
        var len = items.length();\r
        index = evaluateNegativeInsertIndex(index, this.collection.length);\r
        for (var i = 0; i < len; i++) {\r
            this.insertAt(index + i, items.at(i));\r
        }\r
    }\r
\r
    delete(item: T) {\r
        item.remove();\r
    }\r
\r
    deleteMany(items: A<T>) {\r
        items.do(item => item.remove());\r
    }\r
\r
    deleteAt(index: number, count: number = 1) {\r
        for (var i = 0; i < count; i++)\r
            this.delete(this.at(index)._item);\r
    }\r
\r
    removeAll() {\r
        this.query().do(item => { item.remove() });\r
    }\r
\r
    forEach(callback: (item: T, index?: number) => any | void): any | void {\r
        return this.query().forEach(callback);\r
    }\r
\r
    do(callback: (item: T, index?: number) => any | void): any | void {\r
        return this.query().forEach(callback);\r
    }\r
\r
    doOnce(callback: (item: T, index?: number) => boolean): boolean {\r
        var collection = this.collection();\r
        for (let i = 0; i < collection.length; i++) {\r
            if (callback(q(collection[i]), i)) {\r
                return true;\r
            }\r
        }\r
        return false;\r
    }\r
\r
    select<U>(selector: (item: T) => U): A<U> {\r
        return this.query().select(selector);\r
    }\r
\r
    where(predicate: (item: T) => boolean): A<T> {\r
        return this.query().where(predicate);\r
    }\r
\r
    whereNameMatches(pattern: RegExp): A<T> {\r
        return this.where(item => pattern.test(item.name()));\r
    }\r
\r
    // Simple string pattern matchers that use whereNameMatches\r
    whereNameStartsWith(prefix: string): A<T> {\r
        return this.whereNameMatches(new RegExp(\`^\${this._escapeRegExp(prefix)}\`));\r
    }\r
\r
    whereNameEndsWith(suffix: string): A<T> {\r
        return this.whereNameMatches(new RegExp(\`\${this._escapeRegExp(suffix)}$\`));\r
    }\r
\r
    whereNameContains(substring: string): A<T> {\r
        return this.whereNameMatches(new RegExp(this._escapeRegExp(substring)));\r
    }\r
\r
    // Helper to escape special regex characters in string literals\r
    private _escapeRegExp(string: string): string {\r
        return string.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');\r
    }\r
\r
    first(predicate?: (item: T) => boolean): T {\r
        var len = this.length();\r
        if (!predicate) return len > 0 ? this.at(0) : undefined as any as T;\r
        for (let i = 0; i < len; i++) {\r
            var item = this.at(i);\r
            if (predicate(item)) return item;\r
        }\r
        return undefined as any as T;\r
    }\r
\r
    firstIndex(predicate: (item: T) => boolean): number {\r
        var len = this.length();\r
        for (let i = 0; i < len; i++) {\r
            var item = this.at(i);\r
            if (predicate(item)) return i;\r
        }\r
        return -1;\r
    }\r
\r
    last(predicate?: (item: T) => boolean): T {\r
        var len = this.length();\r
        if (!predicate) return len > 0 ? this.at(-1) : undefined as any as T;\r
        for (let i = len - 1; i >= 0; i--) {\r
            var item = this.at(i);\r
            if (predicate(item)) return item;\r
        }\r
        return undefined as any as T;\r
    }\r
\r
    lastIndex(predicate: (item: T) => boolean): number {\r
        var len = this.length();\r
        for (let i = len - 1; i >= 0; i--) {\r
            var item = this.at(i);\r
            if (predicate(item)) return i;\r
        }\r
        return -1;\r
    }\r
\r
    skip(count: number): A<T> {\r
        var len = this.length();\r
        if (count >= len) return f() as A<T>;\r
        count = Math.min(count, len);\r
        return this.query(\`\${count}:\`);\r
    }\r
\r
    take(count: number): A<T> {\r
        if (count == 0) return f() as A<T>;\r
        count = Math.min(count, this.length());\r
        return this.query(\`:\${count - 1}\`);\r
    }\r
\r
    any(predicate?: (item: T) => boolean): boolean {\r
        if (predicate === undefined) return this.length() > 0;\r
        return this.where(predicate).length() > 0;\r
    }\r
\r
    all(predicate: (item: T) => boolean): boolean {\r
        return this.where(predicate).length() == this.length();\r
    }\r
\r
    includes(item: T): boolean {\r
        return this.any(i => i._item == item._item);\r
    }\r
\r
    hideAll(predicate?: (item: T) => boolean): this {\r
        if (predicate === undefined) {\r
            this.do(item => item.hide());\r
        } else {\r
            this.where(predicate).do(item => item.hide());\r
        }\r
        return this;\r
    }\r
\r
    showAll(predicate?: (item: T) => boolean): this {\r
        if (predicate === undefined) {\r
            this.do(item => item.show());\r
        } else {\r
            this.where(predicate).do(item => item.show());\r
        }\r
        return this;\r
    }\r
\r
    activateAll(predicate?: (item: T) => boolean): this {\r
        if (predicate === undefined) {\r
            this.do(item => item.activate());\r
        } else {\r
            this.where(predicate).do(item => item.activate());\r
        }\r
        return this;\r
    }\r
\r
    inactivateAll(predicate?: (item: T) => boolean): this {\r
        if (predicate === undefined) {\r
            this.do(item => item.deactivate());\r
        } else {\r
            this.where(predicate).do(item => item.deactivate());\r
        }\r
        return this;\r
    }\r
}\r
\r
class ApplicationQuery extends Queryable<Application, DocumentQuery<LayerQuery<PageItemQuery>>> {\r
    set(name?: string): SetApplicationProperties { return new SetApplicationProperties(this, name); }\r
    documents(): ApplicationQuery { return this; }\r
    document(): DocumentQuery { return this.activeDocument(); }\r
    defaults() { return clone<ApplicationDefaults>(this.queryDefaults); }\r
    activeDocument(): DocumentQuery<LayerQuery<PageItemQuery>> { return q(this.item().activeDocument); }\r
    dpi(): number { return RasterEffectOptions.resolution; }\r
\r
    constructor(application: Application) {\r
        if (api !== undefined)\r
            throw "Application cannot be defined twice";\r
\r
        super(application, "documents");\r
        this.init();\r
    }\r
\r
    init() {\r
        // Set the ruler origin to bottom-left\r
        app.preferences.setBooleanPreference("isRulerOriginTopLeft", false);\r
\r
        // Set the Y-axis to increase upward (1st quadrant behavior)\r
        app.preferences.setBooleanPreference("isRulerIn4thQuad", false);\r
\r
        // Sets ruleUnits to points for all new documents\r
        app.preferences.setIntegerPreference("rulerUnits", 0); // 0 = Points\r
    }\r
\r
    isOpen(fileName: string): boolean {\r
        // Check if the document exists in the currently open documents\r
        var isOpen = false;\r
        this.documents().forEach(doc => {\r
            if (doc.name() === fileName) {\r
                isOpen = true;\r
            }\r
        });\r
        return isOpen;\r
    }\r
\r
    exists(fileName: string): boolean {\r
        // Check if the document exists in the currently open documents\r
        if (this.isOpen(fileName))\r
            return true;\r
\r
        // Check if the document exists in the file system\r
        const file = new File(combinePaths(DOCUMENTS_PATH, fileName));\r
        return file.exists;\r
    }\r
\r
    createDocument(fileName: string, width: number, height: number, activate: boolean = true): DocumentQuery {\r
        var lastActiveDoc = this.app().activeDocument();\r
        var doc: DocumentQuery = q((this._item.documents as Documents).add(DocumentColorSpace.RGB, width, height, 1));\r
        doc.save(fileName);\r
\r
        if (activate) {\r
            doc.activate();\r
        } else {\r
            this.item().activeDocument = lastActiveDoc.item();\r
        }\r
\r
        return doc;\r
    }\r
\r
    openDocument(fileName: string, create: boolean = false): DocumentQuery {\r
        const file = new File(combinePaths(DOCUMENTS_PATH, fileName));\r
        var openDoc: DocumentQuery | undefined;\r
        if (this.exists(fileName)) {\r
            this.documents().doOnce(doc => {\r
                if (doc.name() === fileName) {\r
                    openDoc = doc;\r
                    return true;\r
                }\r
                return false;\r
            });\r
\r
            if (openDoc) {\r
                return openDoc;\r
            } else {\r
                return q<DocumentQuery>(this.app().item().open(file));\r
            }\r
        }\r
\r
        if (create) {\r
            var size = this.defaults().documentSize;\r
            var newDoc = this.createDocument(fileName, size, size);\r
            return newDoc;\r
        }\r
\r
        throw \`Failed to open document: \${fileName}\`;\r
    }\r
\r
    openResource(fileName: string): DocumentQuery {\r
        return this.openDocument(combinePaths("resources", fileName), false);\r
    }\r
\r
    closeDocument(doc: DocumentQuery | string) {\r
        app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;\r
        if (typeof doc == "string") {\r
            api.documents().do(d => { if (d.name() == doc) d.item().close(SaveOptions.DONOTSAVECHANGES); });\r
            return;\r
        }\r
\r
        doc?.item().close(SaveOptions.DONOTSAVECHANGES);\r
        app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;\r
    }\r
\r
    closeResource(doc: DocumentQuery | string) {\r
        this.closeDocument(doc);\r
    }\r
\r
    deleteDocument(fileName: string) {\r
        if (api.exists(fileName)) {\r
            // Try to delete through Illustrator first if it's open\r
            api.documents().doOnce(doc => {\r
                if (doc.name() === fileName) {\r
                    doc.remove();\r
                    return true;\r
                }\r
                return false;\r
            });\r
\r
            // Also try to delete the file directly\r
            const file = new File(combinePaths(DOCUMENTS_PATH, fileName));\r
            if (file.exists) {\r
                file.remove();\r
            }\r
        }\r
    }\r
\r
    redraw(count: number = 1) {\r
        if (!api.documents().any())\r
            return;\r
\r
        // Force Illustrator to redraw the canvas\r
        for (var i = 0; i < count; i++)\r
            app.redraw();\r
    }\r
\r
    reset(count: number = 1) {\r
        this.app().item().selection = [];\r
        this.redraw(count);\r
    };\r
\r
    _configureDefaults(): void {\r
        const defaults = this.queryDefaults as ApplicationDefaults;\r
        defaults.documentSize = 5 * 12 * this.dpi();\r
        defaults.layerName = "Layer 1";\r
        defaults.artboardRect = [0, 1199, 1198, 0];\r
    }\r
}\r
\r
interface ApplicationDefaults {\r
    documentSize: number;\r
    layerName: string;\r
    artboardRect: Rect;\r
}\r
\r
class DocumentQuery<T extends QueryItem = LayerQuery<PageItemQuery>> extends Queryable<Document, T> {\r
    private _layers: DocumentQuery<LayerQuery<PageItemQuery>> | undefined;\r
    private _artboards: DocumentQuery<ArtboardQuery> | undefined;\r
    private _views: DocumentQuery<ViewQuery> | undefined;\r
    private _stories: DocumentQuery<StoryQuery<TextRangeQuery>> | undefined;\r
    private _variables: DocumentQuery<VariableQuery> | undefined;\r
    private _swatches: DocumentQuery<SwatchQuery> | undefined;\r
    private _brushes: DocumentQuery<BrushQuery> | undefined;\r
    private _symbols: DocumentQuery<SymbolQuery> | undefined;\r
    private _patterns: DocumentQuery<PatternQuery> | undefined;\r
    private _spots: DocumentQuery<SpotQuery> | undefined;\r
    private _gradients: DocumentQuery<GradientQuery> | undefined;\r
    private _tags: DocumentQuery<TagQuery> | undefined;\r
\r
    set(name?: string): SetDocumentProperties { return new SetDocumentProperties(this as any, name); }\r
    active(): boolean { return this.app().item().activeDocument == this._item; }\r
    activate() { this.app().item().activeDocument = this._item; return this; }\r
    deactivate() { this.app().item().activeDocument = f(this.app().item().documents).at(-1); return this; }\r
    remove() { this._item?.close?.(); this._item = QueryItem.empty(); }\r
    activeArtboard(): ArtboardQuery { return this.artboards().at(this.getActiveArtboardIndex()); }\r
    activeLayer(): LayerQuery { return q(this.item().activeLayer); }\r
    activeView(): ViewQuery { return q(this.item().activeView); }\r
    defaults(): ApplicationDefaults { return this.app().defaults(); }\r
    dpi(): number { return this.app().dpi(); }\r
\r
    // QueryItem overrides\r
    document(): DocumentQuery { return this as any; }\r
    artboard(): ArtboardQuery { return this.activeArtboard(); }\r
    layer(): LayerQuery { return this.activeLayer(); }\r
    region(): Region { return this.activeArtboard().region(); }\r
\r
    constructor(doc: Document, collectionType: CollectionType = "layers") {\r
        super(doc, collectionType);\r
\r
        // Ensures Cartesian coordinates\r
        this.item().rulerOrigin = [0, 0];\r
    }\r
\r
    save(fileName?: string): this {\r
        try {\r
            if (fileName === undefined) {\r
                this._item.save();\r
                return this;\r
            }\r
            const file = new File(combinePaths(DOCUMENTS_PATH, fileName));\r
            this._item.saveAs(file);\r
            return api.documents().first(d => d.name() == fileName) as any;\r
        } catch (error: any) {\r
            throw new Error(\`Failed to save document '\${fileName}': \${error.message}\`);\r
        }\r
    }\r
\r
    close() {\r
        this.remove();\r
    }\r
\r
    reset() {\r
        if (this.artboards().any()) {\r
            this.layers().removeAll();\r
            this.artboards().removeAll();\r
        }\r
    }\r
\r
    create(name?: string): T {\r
        if (this.collectionType !== "artboards")\r
            return super.create(name);\r
\r
        throw "Cannot create an artbaord because it is treated as a singleston";\r
    }\r
\r
    removeAll(): void {\r
        if (this.collectionType == "artboards") {\r
            var activeArtboard = this.activeArtboard();\r
            this.where(a => a._item !== activeArtboard._item).do(a => a.remove());\r
            this.activeArtboard().reset();\r
        } else if (this.collectionType == "layers") {\r
            var defaultLayer = this.layers().length() > 0 ? this.layers().at(0) : this.layers().create();\r
            defaultLayer.name(this.defaults().layerName);\r
            defaultLayer.pageItems().removeAll();\r
            defaultLayer.activate();\r
            this.layers().skip(1).do(layer => layer.remove());\r
            this.layers().first().removeAll();\r
        } else {\r
            super.removeAll();\r
        }\r
        api.redraw();\r
    }\r
\r
    copyLayer(layer: LayerQuery, index: number = -1): LayerQuery {\r
        var differentDocuments = this.item() !== layer.document().item();\r
        if (differentDocuments) {\r
            // Match the aspect ratio of the source artboard\r
            layer.document().activate();\r
            const sourceAspectRatio = layer.document().activeArtboard().aspectRatio();\r
\r
            this.activate();\r
            this.activeArtboard().reset();\r
            this.activeArtboard().aspectRatio(sourceAspectRatio);\r
            this.rearrangeArtboards();\r
        }\r
\r
        // Activate the source document and get its artboard rect\r
        layer.document().activate();\r
        const sourceRect = layer.document().activeArtboard().rect();\r
\r
        // Pre-calculate relative centers for all items in the source layer\r
        const itemCenters = layer.pageItems().select(p => p.p().position());\r
\r
        // Activate the target document and get its artboard rect\r
        this.activate();\r
        const targetRect = this.activeArtboard().rect();\r
\r
        // Create the new layer in the target document\r
        const layers = this.layers();\r
        const newLayer = layers.create(layer.name());\r
        newLayer.replaceWith(layer);\r
        newLayer.moveTo(index);\r
\r
        if (differentDocuments) {\r
            const sourceWidth = Math.abs(sourceRect[2] - sourceRect[0]);\r
            const sourceHeight = Math.abs(sourceRect[1] - sourceRect[3]);\r
            const targetWidth = Math.abs(targetRect[2] - targetRect[0]);\r
            const targetHeight = Math.abs(targetRect[1] - targetRect[3]);\r
            const scaleFactors = { scaleX: targetWidth / sourceWidth, scaleY: targetHeight / sourceHeight }\r
\r
            // Apply scaling and translation using the pre-stored relative centers\r
            newLayer.pageItems().forEach((item, i) => {\r
                i = i as number;\r
                item.p().scale([scaleFactors.scaleX, scaleFactors.scaleY]);\r
                this.p().position(itemCenters.at(i));\r
            });\r
        }\r
\r
        return newLayer;\r
    }\r
\r
    copyArtboard(artboard: ArtboardQuery) {\r
        artboard.document().activate();\r
        this.activeArtboard().aspectRatio(artboard.aspectRatio());\r
        this.activate();\r
    }\r
\r
    getActiveArtboardIndex(): number {\r
        var artboards: Artboards = this.artboards().collection() as Artboards;\r
        var activeIndex = artboards.getActiveArtboardIndex();\r
        if (activeIndex === undefined || activeIndex === null || activeIndex < 0) {\r
            artboards.setActiveArtboardIndex(0);\r
            return 0;\r
        }\r
        return activeIndex;\r
    }\r
\r
    rearrangeArtboards(artboardLayout?: DocumentArtboardLayout, artboardRowsOrCols?: number, artboardSpacing?: number, artboardMoveArtwork?: boolean): boolean {\r
        return this.item().rearrangeArtboards(artboardLayout, artboardRowsOrCols, artboardSpacing, artboardMoveArtwork);\r
    }\r
\r
    layers() {\r
        if (this.collectionType === "layers") return this;\r
        if (this._layers) return this._layers;\r
        this._layers = new DocumentQuery<LayerQuery<PageItemQuery>>(this._item, "layers");\r
        return this._layers;\r
    }\r
\r
    artboards() {\r
        if (this.collectionType === "artboards") return this;\r
        if (this._artboards) return this._artboards;\r
        this._artboards = new DocumentQuery<ArtboardQuery>(this._item, "artboards");\r
        return this._artboards;\r
    }\r
\r
    views() {\r
        if (this.collectionType === "views") return this;\r
        if (this._views) return this._views;\r
        this._views = new DocumentQuery<ViewQuery>(this._item, "views");\r
        return this._views;\r
    }\r
\r
    stories() {\r
        if (this.collectionType === "stories") return this;\r
        if (this._stories) return this._stories;\r
        this._stories = new DocumentQuery<StoryQuery<TextRangeQuery>>(this._item, "stories");\r
        return this._stories;\r
    }\r
\r
    variables() {\r
        if (this.collectionType === "variables") return this;\r
        if (this._variables) return this._variables;\r
        this._variables = new DocumentQuery<VariableQuery>(this._item, "variables");\r
        return this._variables;\r
    }\r
\r
    swatches() {\r
        if (this.collectionType === "swatches") return this;\r
        if (this._swatches) return this._swatches;\r
        this._swatches = new DocumentQuery<SwatchQuery>(this._item, "swatches");\r
        return this._swatches;\r
    }\r
\r
    brushes() {\r
        if (this.collectionType === "brushes") return this;\r
        if (this._brushes) return this._brushes;\r
        this._brushes = new DocumentQuery<BrushQuery>(this._item, "brushes");\r
        return this._brushes;\r
    }\r
\r
    symbols() {\r
        if (this.collectionType === "symbols") return this;\r
        if (this._symbols) return this._symbols;\r
        this._symbols = new DocumentQuery<SymbolQuery>(this._item, "symbols");\r
        return this._symbols;\r
    }\r
\r
    patterns() {\r
        if (this.collectionType === "patterns") return this;\r
        if (this._patterns) return this._patterns;\r
        this._patterns = new DocumentQuery<PatternQuery>(this._item, "patterns");\r
        return this._patterns;\r
    }\r
\r
    spots() {\r
        if (this.collectionType === "spots") return this;\r
        if (this._spots) return this._spots;\r
        this._spots = new DocumentQuery<SpotQuery>(this._item, "spots");\r
        return this._spots;\r
    }\r
\r
    gradients() {\r
        if (this.collectionType === "gradients") return this;\r
        if (this._gradients) return this._gradients;\r
        this._gradients = new DocumentQuery<GradientQuery>(this._item, "gradients");\r
        return this._gradients;\r
    }\r
\r
    tags() {\r
        if (this.collectionType === "tags") return this;\r
        if (this._tags) return this._tags;\r
        this._tags = new DocumentQuery<TagQuery>(this._item, "tags");\r
        return this._tags;\r
    }\r
\r
    createLayer(name?: string): LayerQuery {\r
        return this._create(i => i.item().layers, layers => q(layers.add()), name);\r
    }\r
    \r
    createArtboard(artboardRect: Rect, name?: string): ArtboardQuery {\r
        return this._create(i => i.item().artboards, items => q(items.add(artboardRect)), name);\r
    }\r
    \r
    createStory(): StoryQuery {\r
        // Stories collection doesn't have an add method, so we can't create directly\r
        throw new Error("Stories cannot be created directly");\r
    }\r
    \r
    createVariable(name?: string): VariableQuery {\r
        return this._create(i => i.item().variables, variables => q(variables.add()), name);\r
    }\r
    \r
    createSwatch(name?: string): SwatchQuery {\r
        return this._create(i => i.item().swatches, swatches => q(swatches.add()), name);\r
    }\r
    \r
    createBrush(brushDefinition: File, brushName?: string, itemName?: string): BrushQuery {\r
        return this._create(i => i.item().brushes, items => q(items.add(brushDefinition, brushName)), itemName);\r
    }\r
    \r
    createSymbol(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint, name?: string): SymbolQuery {\r
        return this._create(i => i.item().symbols, items => q(items.add(sourceArt, registrationPoint)), name);\r
    }\r
    \r
    createPattern(name?: string): PatternQuery {\r
        return this._create(i => i.item().patterns, patterns => q(patterns.add()), name);\r
    }\r
    \r
    createSpot(name?: string): SpotQuery {\r
        return this._create(i => i.item().spots, spots => q(spots.add()), name);\r
    }\r
    \r
    createGradient(name?: string): GradientQuery {\r
        return this._create(i => i.item().gradients, gradients => q(gradients.add()), name);\r
    }\r
    \r
    createTag(name?: string): TagQuery {\r
        return this._create(i => i.item().tags, tags => q(tags.add()), name);\r
    }\r
}\r
\r
class ArtboardQuery extends Queryable<Artboard, QueryItem> {\r
    set(name?: string): SetArtboardProperties { return new SetArtboardProperties(this as any, name); }\r
    document(): DocumentQuery { return (this.parent() as DocumentQuery).artboards() as any; }\r
    index(): number { return this.document().artboards().firstIndex(i => i._item == this._item); }\r
    activate() { this.document().item().artboards.setActiveArtboardIndex(this.index()); return this; }\r
    activated(): boolean { return this.document().activeArtboard().item() === this.item(); }\r
    deactivate() { ((this.parent() as DocumentQuery).item()).artboards.setActiveArtboardIndex(0); return this; }\r
\r
    // How to change the absoluie coordinate of the Artboard\r
    region(region?: Region): Region {\r
        if (region !== undefined) {\r
            var newArtboardRect = region.floor().rectAbs();\r
            this.item().artboardRect = newArtboardRect;\r
        }\r
        return Region.fromRect(this.item().artboardRect);\r
    }\r
\r
    // Absolute bounds in document coordinates\r
    rect(): Rect { return this.item().artboardRect; }\r
\r
    center(newCenter?: Position): Position {\r
        if (newCenter) {\r
            var region = this.region();\r
            region.center(newCenter);\r
            this.region(region);\r
        }\r
        return this.region().center();\r
    }\r
\r
    width(newWidth?: number, proportional?: boolean): number {\r
        if (newWidth !== undefined) {\r
            var region = this.region();\r
            region.width(newWidth, proportional);\r
            this.region(region);\r
        }\r
        return this.region().width();\r
    }\r
\r
    height(newHeight?: number, proportional?: boolean): number {\r
        if (newHeight !== undefined) {\r
            var region = this.region();\r
            region.height(newHeight, proportional);\r
            this.region(region);\r
        }\r
        return this.region().height();\r
    }\r
\r
    size(newSize?: Size): Size {\r
        if (newSize) {\r
            var region = this.region();\r
            region.size(newSize);\r
            this.region(region);\r
        }\r
        return this.region().size();\r
    }\r
\r
    aspectRatio(widthToHeight?: number): number {\r
        if (widthToHeight !== undefined) {\r
            const width = this.width(); // Current width in relative units\r
            const height = this.height(); // Current height in relative units\r
\r
            // Calculate the new dimensions while maintaining the specified aspect ratio\r
            const newWidth = Math.min(width, height * widthToHeight);\r
            const newHeight = Math.min(height, width / widthToHeight);\r
\r
            // Set the new size centered on the current position\r
            this.size([newWidth, newHeight]);\r
        }\r
        return this.width() / this.height();\r
    }\r
\r
    constructor(artboard: Artboard) {\r
        super(artboard);\r
    }\r
\r
    reset() {\r
        var rect = this.document().defaults().artboardRect;\r
        if (f(rect).doesntEqual(f(this.item().artboardRect))) {\r
            var region = Region.fromRect(rect);\r
            this.region(region);\r
        }\r
        this.fullScreen();\r
    }\r
\r
    fullScreen(padding: number = 0.05): ArtboardQuery {\r
        if (this.isFullScreen(padding)) return this;\r
\r
        const view = this.document().item().activeView;\r
\r
        // Step 1: Reset to a known zoom level (100%)\r
        view.zoom = 1;\r
\r
        // Step 2: Calculate viewable area at this zoom\r
        const viewBounds = view.bounds; // [left, top, right, bottom]\r
        const viewWidth = viewBounds[2] - viewBounds[0];\r
        const viewHeight = viewBounds[1] - viewBounds[3];\r
\r
        // Step 3: Adjust artboard dimensions with padding\r
        const region = this.region();\r
        const paddedWidth = region.widthAbs() * (1 + padding);\r
        const paddedHeight = region.heightAbs() * (1 + padding);\r
\r
        // Step 4: Determine the scale to fit the padded artboard into the view\r
        const scale = Math.min(viewWidth / paddedWidth, viewHeight / paddedHeight);\r
        const centerPoint = region.centerAbs() as [number, number];\r
\r
        // Step 5: Apply the calculated zoom and center the view\r
        view.centerPoint = centerPoint;\r
        view.zoom = scale;\r
\r
        return this;\r
    }\r
\r
    isFullScreen(padding: number = 0.05): boolean {\r
        const view = this.document().item().activeView;\r
\r
        // Get current view bounds [left, top, right, bottom]\r
        const viewBounds = view.bounds;\r
        const viewWidth = viewBounds[2] - viewBounds[0];\r
        const viewHeight = viewBounds[1] - viewBounds[3];\r
\r
        // Get artboard region and padded dimensions\r
        const region = this.region();\r
        const paddedWidth = region.widthAbs() * (1 + padding);\r
        const paddedHeight = region.heightAbs() * (1 + padding);\r
\r
        // Define a tolerance for comparison\r
        const tolerance = 2; // Allow a difference of points\r
\r
        // Check if view dimensions approximately match the padded artboard dimensions\r
        const widthMatch = Math.abs(viewWidth - paddedWidth) <= tolerance;\r
        const heightMatch = Math.abs(viewHeight - paddedHeight) <= tolerance;\r
\r
        // Check if center points approximately align\r
        const viewCenter = view.centerPoint;\r
        const regionCenter = region.centerAbs();\r
        const centerXMatch = Math.abs(viewCenter[0] - regionCenter[0]) <= tolerance;\r
        const centerYMatch = Math.abs(viewCenter[1] - regionCenter[1]) <= tolerance;\r
\r
        // Only one dimension will be full-sized because the screen and the board have different shapes\r
        return (widthMatch || heightMatch) && centerXMatch && centerYMatch;\r
    }\r
\r
    square(): ArtboardQuery {\r
        this.aspectRatio(1);\r
        return this;\r
    }\r
}\r
\r
class LayerQuery<T extends QueryItem = PageItemQuery> extends Queryable<Layer, T> {\r
    private _pageItems: LayerQuery<PageItemQuery> | undefined;\r
    private _compoundPathItems: LayerQuery<CompoundPathItemQuery> | undefined;\r
    private _pathItems: LayerQuery<PathItemQuery> | undefined;\r
    private _rasterItems: LayerQuery<RasterItemQuery> | undefined;\r
    private _placedItems: LayerQuery<PlacedItemQuery> | undefined;\r
    private _meshItems: LayerQuery<MeshItemQuery> | undefined;\r
    private _pluginItems: LayerQuery<PluginItemQuery> | undefined;\r
    private _textFrames: LayerQuery<TextFrameQuery> | undefined;\r
    private _groupItems: LayerQuery<GroupItemQuery> | undefined;\r
    private _symbolItems: LayerQuery<SymbolItemQuery> | undefined;\r
    private _graphItems: LayerQuery<GraphItemQuery> | undefined;\r
\r
    set(name?: string): SetLayerProperties { return new SetLayerProperties(this as any, name); }\r
    document(): DocumentQuery { return (this.parent() as DocumentQuery).layers(); }\r
    hide(): QueryItem { this.item().visible = false; return this; }\r
    hidden(): boolean { return this.item().visible === false; }\r
    show(): QueryItem { this.item().visible = true; return this; }\r
    visible(): boolean { return this.item().visible === true; }\r
\r
    private _c: CreativeItem | undefined;\r
    c(): CreativeItem {\r
        if (this._c === undefined)\r
            this._c = new CreativeItem(this);\r
        return this._c;\r
    }\r
\r
    constructor(layer: Layer, collectionType: CollectionType = "pageItems") {\r
        super(layer, collectionType);\r
    }\r
\r
    group(groupName?: string, predicate?: (item: T) => boolean): GroupItemQuery {\r
        var items = predicate ? this.where(predicate as any) : this.query();\r
        var group = this.groupItems().create(groupName);\r
        items.do(item => item.move(group, ElementPlacement.PLACEATEND));\r
        return group;\r
    }\r
\r
    replaceWith(layer: LayerQuery<T>): void {\r
        this.name(layer.name());\r
        this.pageItems().removeAll();\r
        layer.pageItems().do(item => {\r
            item.duplicate(item.name(), this, ElementPlacement.PLACEATEND);\r
        });\r
    }\r
\r
    pageItems() {\r
        if (this.collectionType === "pageItems") return this;\r
        if (this._pageItems) return this._pageItems;\r
        this._pageItems = new LayerQuery<PageItemQuery>(this._item, "pageItems");\r
        return this._pageItems;\r
    }\r
\r
    compoundPathItems() {\r
        if (this.collectionType === "compoundPathItems") return this;\r
        if (this._compoundPathItems) return this._compoundPathItems;\r
        this._compoundPathItems = new LayerQuery<CompoundPathItemQuery>(this._item, "compoundPathItems");\r
        return this._compoundPathItems;\r
    }\r
\r
    pathItems() {\r
        if (this.collectionType === "pathItems") return this;\r
        if (this._pathItems) return this._pathItems;\r
        this._pathItems = new LayerQuery<PathItemQuery>(this._item, "pathItems");\r
        return this._pathItems;\r
    }\r
\r
    rasterItems() {\r
        if (this.collectionType === "rasterItems") return this;\r
        if (this._rasterItems) return this._rasterItems;\r
        this._rasterItems = new LayerQuery<RasterItemQuery>(this._item, "rasterItems");\r
        return this._rasterItems;\r
    }\r
\r
    placedItems() {\r
        if (this.collectionType === "placedItems") return this;\r
        if (this._placedItems) return this._placedItems;\r
        this._placedItems = new LayerQuery<PlacedItemQuery>(this._item, "placedItems");\r
        return this._placedItems;\r
    }\r
\r
    meshItems() {\r
        if (this.collectionType === "meshItems") return this;\r
        if (this._meshItems) return this._meshItems;\r
        this._meshItems = new LayerQuery<MeshItemQuery>(this._item, "meshItems");\r
        return this._meshItems;\r
    }\r
\r
    pluginItems() {\r
        if (this.collectionType === "pluginItems") return this;\r
        if (this._pluginItems) return this._pluginItems;\r
        this._pluginItems = new LayerQuery<PluginItemQuery>(this._item, "pluginItems");\r
        return this._pluginItems;\r
    }\r
\r
    textFrames() {\r
        if (this.collectionType === "textFrames") return this;\r
        if (this._textFrames) return this._textFrames;\r
        this._textFrames = new LayerQuery<TextFrameQuery>(this._item, "textFrames");\r
        return this._textFrames;\r
    }\r
\r
    groupItems() {\r
        if (this.collectionType === "groupItems") return this;\r
        if (this._groupItems) return this._groupItems;\r
        this._groupItems = new LayerQuery<GroupItemQuery>(this._item, "groupItems");\r
        return this._groupItems;\r
    }\r
\r
    symbolItems() {\r
        if (this.collectionType === "symbolItems") return this;\r
        if (this._symbolItems) return this._symbolItems;\r
        this._symbolItems = new LayerQuery<SymbolItemQuery>(this._item, "symbolItems");\r
        return this._symbolItems;\r
    }\r
\r
    graphItems() {\r
        if (this.collectionType === "graphItems") return this;\r
        if (this._graphItems) return this._graphItems;\r
        this._graphItems = new LayerQuery<GraphItemQuery>(this._item, "graphItems");\r
        return this._graphItems;\r
    }\r
    \r
    createCompoundPathItem(name?: string): CompoundPathItemQuery {\r
        return this._create(i => i.item().compoundPathItems, items => q(items.add()), name);\r
    }\r
    \r
    createPathItem(name?: string): PathItemQuery {\r
        return this._create(i => i.item().pathItems, items => q(items.add()), name);\r
    }\r
    \r
    createPlacedItem(name?: string): PlacedItemQuery {\r
        return this._create(i => i.item().placedItems, items => q(items.add()), name);\r
    }\r
    \r
    createTextFrame(name?: string): TextFrameQuery {\r
        return this._create(i => i.item().textFrames, items => q(items.add()), name);\r
    }\r
    \r
    createGroupItem(name?: string): GroupItemQuery {\r
        return this._create(i => i.item().groupItems, items => q(items.add()), name);\r
    }\r
    \r
    createSymbolItem(symbol: Symbol, name?: string): SymbolItemQuery {\r
        return this._create(i => i.item().symbolItems, items => q(items.add(symbol)), name);\r
    }\r
}\r
\r
class GroupItemQuery<T extends QueryItem = PageItemQuery> extends Queryable<GroupItem, T> {\r
    private _pageItems: GroupItemQuery<PageItemQuery> | undefined;\r
    private _compoundPathItems: GroupItemQuery<CompoundPathItemQuery> | undefined;\r
    private _pathItems: GroupItemQuery<PathItemQuery> | undefined;\r
    private _rasterItems: GroupItemQuery<RasterItemQuery> | undefined;\r
    private _placedItems: GroupItemQuery<PlacedItemQuery> | undefined;\r
    private _meshItems: GroupItemQuery<MeshItemQuery> | undefined;\r
    private _pluginItems: GroupItemQuery<PluginItemQuery> | undefined;\r
    private _textFrames: GroupItemQuery<TextFrameQuery> | undefined;\r
    private _groupItems: GroupItemQuery<GroupItemQuery> | undefined;\r
    private _symbolItems: GroupItemQuery<SymbolItemQuery> | undefined;\r
    private _graphItems: GroupItemQuery<GraphItemQuery> | undefined\r
\r
    set(name?: string): SetGroupItemProperties { return new SetGroupItemProperties(this as any, name); }\r
\r
    private _c: CreativeItem | undefined;\r
    c(): CreativeItem {\r
        if (this._c === undefined)\r
            this._c = new CreativeItem(this);\r
        return this._c;\r
    }\r
\r
    constructor(groupItem: GroupItem, collectionType: CollectionType = "pageItems") {\r
        super(groupItem, collectionType);\r
    }\r
\r
    group(groupName?: string, predicate?: (item: T) => boolean): GroupItemQuery {\r
        var items = predicate ? this.where(predicate as any) : this.query();\r
        var group = this.groupItems().create(groupName);\r
        items.do(item => item.move(group, ElementPlacement.PLACEATEND));\r
        return group;\r
    }\r
\r
    ungroup() {\r
        this.reverse().do(item => item.move(this, ElementPlacement.PLACEAFTER));\r
        this.remove();\r
    }\r
\r
    pageItems() {\r
        if (this.collectionType === "pageItems") return this;\r
        if (this._pageItems) return this._pageItems;\r
        this._pageItems = new GroupItemQuery<PageItemQuery>(this._item, "pageItems");\r
        return this._pageItems;\r
    }\r
\r
    compoundPathItems() {\r
        if (this.collectionType === "compoundPathItems") return this;\r
        if (this._compoundPathItems) return this._compoundPathItems;\r
        this._compoundPathItems = new GroupItemQuery<CompoundPathItemQuery>(this._item, "compoundPathItems");\r
        return this._compoundPathItems;\r
    }\r
\r
    pathItems() {\r
        if (this.collectionType === "pathItems") return this;\r
        if (this._pathItems) return this._pathItems;\r
        this._pathItems = new GroupItemQuery<PathItemQuery>(this._item, "pathItems");\r
        return this._pathItems;\r
    }\r
\r
    rasterItems() {\r
        if (this.collectionType === "rasterItems") return this;\r
        if (this._rasterItems) return this._rasterItems;\r
        this._rasterItems = new GroupItemQuery<RasterItemQuery>(this._item, "rasterItems");\r
        return this._rasterItems;\r
    }\r
\r
    placedItems() {\r
        if (this.collectionType === "placedItems") return this;\r
        if (this._placedItems) return this._placedItems;\r
        this._placedItems = new GroupItemQuery<PlacedItemQuery>(this._item, "placedItems");\r
        return this._placedItems;\r
    }\r
\r
    meshItems() {\r
        if (this.collectionType === "meshItems") return this;\r
        if (this._meshItems) return this._meshItems;\r
        this._meshItems = new GroupItemQuery<MeshItemQuery>(this._item, "meshItems");\r
        return this._meshItems;\r
    }\r
\r
    pluginItems() {\r
        if (this.collectionType === "pluginItems") return this;\r
        if (this._pluginItems) return this._pluginItems;\r
        this._pluginItems = new GroupItemQuery<PluginItemQuery>(this._item, "pluginItems");\r
        return this._pluginItems;\r
    }\r
\r
    textFrames() {\r
        if (this.collectionType === "textFrames") return this;\r
        if (this._textFrames) return this._textFrames;\r
        this._textFrames = new GroupItemQuery<TextFrameQuery>(this._item, "textFrames");\r
        return this._textFrames;\r
    }\r
\r
    groupItems() {\r
        if (this.collectionType === "groupItems") return this;\r
        if (this._groupItems) return this._groupItems;\r
        this._groupItems = new GroupItemQuery<GroupItemQuery>(this._item, "groupItems");\r
        return this._groupItems;\r
    }\r
\r
    symbolItems() {\r
        if (this.collectionType === "symbolItems") return this;\r
        if (this._symbolItems) return this._symbolItems;\r
        this._symbolItems = new GroupItemQuery<SymbolItemQuery>(this._item, "symbolItems");\r
        return this._symbolItems;\r
    }\r
\r
    graphItems() {\r
        if (this.collectionType === "graphItems") return this;\r
        if (this._graphItems) return this._graphItems;\r
        this._graphItems = new GroupItemQuery<GraphItemQuery>(this._item, "graphItems");\r
        return this._graphItems;\r
    }\r
    \r
    createCompoundPathItem(name?: string): CompoundPathItemQuery {\r
        return this._create(i => i.item().compoundPathItems, items => q(items.add()), name);\r
    }\r
    \r
    createPathItem(name?: string): PathItemQuery {\r
        return this._create(i => i.item().pathItems, items => q(items.add()), name);\r
    }\r
    \r
    createPlacedItem(name?: string): PlacedItemQuery {\r
        return this._create(i => i.item().placedItems, items => q(items.add()), name);\r
    }\r
    \r
    createTextFrame(name?: string): TextFrameQuery {\r
        return this._create(i => i.item().textFrames, items => q(items.add()), name);\r
    }\r
    \r
    createGroupItem(name?: string): GroupItemQuery {\r
        return this._create(i => i.item().groupItems, items => q(items.add()), name);\r
    }\r
    \r
    createSymbolItem(symbol: Symbol, name?: string): SymbolItemQuery {\r
        return this._create(i => i.item().symbolItems, items => q(items.add(symbol)), name);\r
    }\r
}\r
\r
type SmoothingType = "bezier" | "catmullRom" | "tension" | "bSpline" | "cubicSpline";\r
\r
class PathItemQuery extends Queryable<PathItem, PathPointQuery> {\r
    private _pathPoints: PathItemQuery | undefined;\r
    private _defaultPointType: PointType;\r
    private _defaultSmoothingFunction: SmoothingType;\r
    set(name?: string): SetPathItemProperties { return new SetPathItemProperties(this as any, name); }\r
\r
    defaultPointType(newType?: PointType): PointType {\r
        if (newType !== undefined) this._defaultPointType = newType;\r
        return this._defaultPointType;\r
    }\r
\r
    defaultSmoothingFunction(newType?: SmoothingType): SmoothingType {\r
        if (newType !== undefined) this._defaultSmoothingFunction = newType;\r
        return this._defaultSmoothingFunction;\r
    }\r
\r
    curve(makeCurve?: boolean): boolean {\r
        if (makeCurve) {\r
            this.pathPoints().do(p => p.set().pointType(PointType.SMOOTH));\r
            this._defaultPointType = PointType.SMOOTH;\r
        }\r
        this.smooth();\r
        const allSmooth = this.pathPoints().all(p => p.item().pointType === PointType.SMOOTH);\r
        return allSmooth;\r
    }\r
\r
    angular(makeAngular?: boolean): boolean {\r
        if (makeAngular) {\r
            this.pathPoints().do(p => {\r
                const anchor = p.anchor();\r
                p.set()\r
                    .pointType(PointType.CORNER)\r
                    .leftDirection(anchor)\r
                    .rightDirection(anchor);\r
            });\r
            this._defaultPointType = PointType.CORNER;\r
        }\r
        const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER);\r
        return allCorner;\r
    }\r
\r
    constructor(pathItem: PathItem) {\r
        super(pathItem, "pathPoints");\r
        this._defaultPointType = PointType.SMOOTH;\r
        this._defaultSmoothingFunction = "catmullRom";\r
    }\r
\r
    pathPoints() {\r
        if (this.collectionType === "pathPoints") return this;\r
        if (this._pathPoints) return this._pathPoints;\r
        this._pathPoints = new PathItemQuery(this._item);\r
        return this._pathPoints;\r
    }\r
\r
    createPathPoint(name?: string): PathPointQuery {\r
        return this._create(i => i.item().pathPoints, pathPoints => q(pathPoints.add()), name);\r
    }\r
\r
    smooth(type: SmoothingType = "catmullRom", tension?: number): PathItemQuery {\r
        switch (type) {\r
            case "bezier":\r
                Smoothing.bezier(this);\r
                return this;\r
            case "catmullRom":\r
                Smoothing.catmullRomSmooth(this);\r
                return this;\r
            case "tension":\r
                Smoothing.tensionSmooth(this, tension || 0.16);\r
                return this;\r
            case "bSpline":\r
                Smoothing.bSplineSmooth(this);\r
                return this;\r
            case "cubicSpline":\r
                Smoothing.cubicSplineSmooth(this);\r
                return this;\r
            default:\r
                throw new Error(\`Unknown smoothing type: \${type}\`);\r
        }\r
    }\r
}\r
\r
class StoryQuery<T extends QueryItem = TextRangeQuery> extends Queryable<Story, T> {\r
    private _textRanges: StoryQuery<TextRangeQuery> | undefined;\r
    private _characters: StoryQuery<TextRangeQuery> | undefined;\r
    private _words: StoryQuery<TextRangeQuery> | undefined;\r
    private _lines: StoryQuery<TextRangeQuery> | undefined;\r
    private _paragraphs: StoryQuery<TextRangeQuery> | undefined;\r
    private _insertionPoints: StoryQuery<InsertionPointQuery> | undefined;\r
    set(name?: string): SetStoryProperties { return new SetStoryProperties(this as any, name); }\r
\r
    constructor(story: Story, collectionType: CollectionType = "textRanges") {\r
        super(story, collectionType);\r
    }\r
\r
    textRanges() {\r
        if (this.collectionType === "textRanges") return this;\r
        if (this._textRanges) return this._textRanges;\r
        this._textRanges = new StoryQuery<TextRangeQuery>(this._item, "textRanges");\r
        return this._textRanges;\r
    }\r
\r
    characters() {\r
        if (this.collectionType === "characters") return this;\r
        if (this._characters) return this._characters;\r
        this._characters = new StoryQuery<TextRangeQuery>(this._item, "characters");\r
        return this._characters;\r
    }\r
\r
    words() {\r
        if (this.collectionType === "words") return this;\r
        if (this._words) return this._words;\r
        this._words = new StoryQuery<TextRangeQuery>(this._item, "words");\r
        return this._words;\r
    }\r
\r
    lines() {\r
        if (this.collectionType === "lines") return this;\r
        if (this._lines) return this._lines;\r
        this._lines = new StoryQuery<TextRangeQuery>(this._item, "lines");\r
        return this._lines;\r
    }\r
\r
    paragraphs() {\r
        if (this.collectionType === "paragraphs") return this;\r
        if (this._paragraphs) return this._paragraphs;\r
        this._paragraphs = new StoryQuery<TextRangeQuery>(this._item, "paragraphs");\r
        return this._paragraphs;\r
    }\r
\r
    insertionPoints() {\r
        if (this.collectionType === "insertionPoints") return this;\r
        if (this._insertionPoints) return this._insertionPoints;\r
        this._insertionPoints = new StoryQuery<InsertionPointQuery>(this._item, "insertionPoints");\r
        return this._insertionPoints;\r
    }\r
\r
    createCharacter(contents: string, name?: string): TextRangeQuery {\r
        return this._create(i => i.item().characters, items => q(items.add(contents)), name);\r
    }\r
    \r
    createWord(contents: string, name?: string): TextRangeQuery {\r
        return this._create(i => i.item().words, items => q(items.add(contents)), name);\r
    }\r
    \r
    createParagraph(contents: string, name?: string): TextRangeQuery {\r
        return this._create(i => i.item().paragraphs, items => q(items.add(contents)), name);\r
    }\r
}\r
\r
\r
class TextFrameQuery<T extends QueryItem = TextRangeQuery> extends Queryable<TextFrame, T> {\r
    private _characters: TextFrameQuery<TextRangeQuery> | undefined;\r
    private _words: TextFrameQuery<TextRangeQuery> | undefined;\r
    private _lines: TextFrameQuery<TextRangeQuery> | undefined;\r
    private _paragraphs: TextFrameQuery<TextRangeQuery> | undefined;\r
    set(name?: string): SetTextFrameProperties { return new SetTextFrameProperties(this as any, name); }\r
\r
    constructor(textFrame: TextFrame, collectionType: CollectionType = "characters") {\r
        super(textFrame, collectionType);\r
    }\r
\r
    characters() {\r
        if (this.collectionType === "characters") return this;\r
        if (this._characters) return this._characters;\r
        this._characters = new TextFrameQuery<TextRangeQuery>(this._item, "characters");\r
        return this._characters;\r
    }\r
\r
    words() {\r
        if (this.collectionType === "words") return this;\r
        if (this._words) return this._words;\r
        this._words = new TextFrameQuery<TextRangeQuery>(this._item, "words");\r
        return this._words;\r
    }\r
\r
    lines() {\r
        if (this.collectionType === "lines") return this;\r
        if (this._lines) return this._lines;\r
        this._lines = new TextFrameQuery<TextRangeQuery>(this._item, "lines");\r
        return this._lines;\r
    }\r
\r
    paragraphs() {\r
        if (this.collectionType === "paragraphs") return this;\r
        if (this._paragraphs) return this._paragraphs;\r
        this._paragraphs = new TextFrameQuery<TextRangeQuery>(this._item, "paragraphs");\r
        return this._paragraphs;\r
    }\r
\r
    createCharacter(contents: string, name?: string): TextRangeQuery {\r
        return this._create(i => i.item().characters, items => q(items.add(contents)), name);\r
    }\r
    \r
    createWord(contents: string, name?: string): TextRangeQuery {\r
        return this._create(i => i.item().words, items => q(items.add(contents)), name);\r
    }\r
    \r
    createParagraph(contents: string, name?: string): TextRangeQuery {\r
        return this._create(i => i.item().paragraphs, items => q(items.add(contents)), name);\r
    }\r
}\r
\r
class GradientQuery extends Queryable<Gradient, GradientStopQuery> {\r
    private _gradientStops: GradientQuery | undefined;\r
    set(name?: string): SetGradientProperties { return new SetGradientProperties(this as any, name); }\r
\r
    constructor(gradient: Gradient) {\r
        super(gradient, "gradientStops");\r
    }\r
\r
    gradientStops() {\r
        if (this.collectionType === "gradientStops") return this;\r
        if (this._gradientStops) return this._gradientStops;\r
        this._gradientStops = new GradientQuery(this._item);\r
        return this._gradientStops;\r
    }\r
\r
    createGradientStops(name?: string): GradientStopQuery {\r
        return this._create(i => i.item().gradientStops, gradientStops => q(gradientStops.add()), name);\r
    }\r
}\r
\r
class PageItemQuery extends Queryable<PageItem, QueryItem> {\r
    set(name?: string): SetPageItemProperties { return new SetPageItemProperties(this as any, name); }\r
    constructor(pageItem: PageItem) {\r
        super(pageItem);\r
    }\r
}\r
\r
class CompoundPathItemQuery extends Queryable<CompoundPathItem, QueryItem> {\r
    set(name?: string): SetCompoundPathItemProperties { return new SetCompoundPathItemProperties(this as any, name); }\r
    constructor(compoundPathItem: CompoundPathItem) {\r
        super(compoundPathItem);\r
    }\r
}\r
\r
class RasterItemQuery extends Queryable<RasterItem, QueryItem> {\r
    set(name?: string): SetRasterItemProperties { return new SetRasterItemProperties(this as any, name); }\r
    constructor(rasterItem: RasterItem) {\r
        super(rasterItem);\r
    }\r
}\r
\r
class PlacedItemQuery extends Queryable<PlacedItem, QueryItem> {\r
    set(name?: string): SetPlacedItemProperties { return new SetPlacedItemProperties(this as any, name); }\r
    constructor(placedItem: PlacedItem) {\r
        super(placedItem);\r
    }\r
}\r
\r
class SymbolItemQuery extends Queryable<SymbolItem, QueryItem> {\r
    set(name?: string): SetSymbolItemProperties { return new SetSymbolItemProperties(this as any, name); }\r
    constructor(symbolItem: SymbolItem) {\r
        super(symbolItem);\r
    }\r
}\r
\r
class MeshItemQuery extends Queryable<MeshItem, QueryItem> {\r
    set(name?: string): SetMeshItemProperties { return new SetMeshItemProperties(this as any, name); }\r
    constructor(meshItem: MeshItem) {\r
        super(meshItem);\r
    }\r
}\r
\r
class PluginItemQuery extends Queryable<PluginItem, QueryItem> {\r
    set(name?: string): SetPluginItemProperties { return new SetPluginItemProperties(this as any, name); }\r
    constructor(pluginItem: PluginItem) {\r
        super(pluginItem);\r
    }\r
}\r
\r
class GraphItemQuery extends Queryable<GraphItem, QueryItem> {\r
    set(name?: string): SetGraphItemProperties { return new SetGraphItemProperties(this as any, name); }\r
    constructor(graphItem: GraphItem) {\r
        super(graphItem);\r
    }\r
}\r
\r
class LegacyTextItemQuery extends Queryable<LegacyTextItem, QueryItem> {\r
    set(name?: string): SetLegacyTextItemProperties { return new SetLegacyTextItemProperties(this as any, name); }\r
    constructor(legacyTextItem: LegacyTextItem) {\r
        super(legacyTextItem);\r
    }\r
}\r
\r
class NonNativeItemQuery extends Queryable<NonNativeItem, QueryItem> {\r
    set(name?: string): SetNonNativeItemProperties { return new SetNonNativeItemProperties(this as any, name); }\r
    constructor(nonNativeItem: NonNativeItem) {\r
        super(nonNativeItem);\r
    }\r
}\r
\r
class SwatchQuery extends Queryable<Swatch, QueryItem> {\r
    set(name?: string): SetSwatchProperties { return new SetSwatchProperties(this as any, name); }\r
    constructor(swatch: Swatch) {\r
        super(swatch);\r
    }\r
}\r
\r
class BrushQuery extends Queryable<Brush, QueryItem> {\r
    set(name?: string): SetBrushProperties { return new SetBrushProperties(this as any, name); }\r
    constructor(brush: Brush) {\r
        super(brush);\r
    }\r
}\r
\r
class TagQuery extends Queryable<Tag, QueryItem> {\r
    set(name?: string): SetTagProperties { return new SetTagProperties(this as any, name); }\r
    constructor(tag: Tag) {\r
        super(tag);\r
    }\r
}\r
\r
class SymbolQuery extends Queryable<Symbol, QueryItem> {\r
    set(name?: string): SetSymbolProperties { return new SetSymbolProperties(this as any, name); }\r
    constructor(symbol: Symbol) {\r
        super(symbol);\r
    }\r
}\r
\r
class TextRangeQuery extends Queryable<TextRange, QueryItem> {\r
    set(name?: string): SetTextRangeProperties { return new SetTextRangeProperties(this as any, name); }\r
    constructor(textRange: TextRange) {\r
        super(textRange);\r
    }\r
}\r
\r
class InsertionPointQuery extends Queryable<InsertionPoint, QueryItem> {\r
    set(name?: string): SetInsertionPointProperties { return new SetInsertionPointProperties(this as any, name); }\r
    constructor(insertionPoint: InsertionPoint) {\r
        super(insertionPoint);\r
    }\r
}\r
\r
class ParagraphStyleQuery extends Queryable<ParagraphStyle, QueryItem> {\r
    set(name?: string): SetParagraphStyleProperties { return new SetParagraphStyleProperties(this as any, name); }\r
    constructor(paragraphStyle: ParagraphStyle) {\r
        super(paragraphStyle);\r
    }\r
}\r
\r
class PatternQuery extends Queryable<Pattern, QueryItem> {\r
    set(name?: string): SetPatternProperties { return new SetPatternProperties(this as any, name); }\r
    constructor(pattern: Pattern) {\r
        super(pattern);\r
    }\r
}\r
\r
class SpotQuery extends Queryable<Spot, QueryItem> {\r
    set(name?: string): SetSpotProperties { return new SetSpotProperties(this as any, name); }\r
    constructor(spot: Spot) {\r
        super(spot);\r
    }\r
}\r
\r
class CharacterStyleQuery extends Queryable<CharacterStyle, QueryItem> {\r
    set(name?: string): SetCharacterStyleProperties { return new SetCharacterStyleProperties(this as any, name); }\r
    constructor(characterStyle: CharacterStyle) {\r
        super(characterStyle);\r
    }\r
}\r
\r
class ArtStyleQuery extends Queryable<ArtStyle, QueryItem> {\r
    set(name?: string): SetArtStyleProperties { return new SetArtStyleProperties(this as any, name); }\r
    constructor(artStyle: ArtStyle) {\r
        super(artStyle);\r
    }\r
}\r
\r
class VariableQuery extends Queryable<Variable, QueryItem> {\r
    set(name?: string): SetVariableProperties { return new SetVariableProperties(this as any, name); }\r
    constructor(variable: Variable) {\r
        super(variable);\r
    }\r
}\r
\r
class DataSetQuery extends Queryable<DataSet, QueryItem> {\r
    set(name?: string): SetDataSetProperties { return new SetDataSetProperties(this as any, name); }\r
    constructor(dataSet: DataSet) {\r
        super(dataSet);\r
    }\r
}\r
\r
class ViewQuery extends Queryable<View, QueryItem> {\r
    set(name?: string): SetViewProperties { return new SetViewProperties(this as any, name); }\r
    constructor(view: View) {\r
        super(view);\r
    }\r
}\r
\r
class PathPointQuery extends Queryable<PathPoint, QueryItem> {\r
    set(name?: string): SetPathPointProperties { return new SetPathPointProperties(this as any, name); }\r
    \r
    constructor(pathPoint: PathPoint) {\r
        super(pathPoint);\r
    }\r
\r
    // Anchor in absolute units\r
    anchorAbs(): Position {\r
        return this.item().anchor;\r
    }\r
\r
    // Anchor in relative units (settable)\r
    anchor(newAnchor?: Position): Position {\r
        const region = this.region();\r
        if (newAnchor) {\r
            this.item().anchor = region.toAbsolutePosition(newAnchor) as Point;\r
        }\r
        return region.toRelativePosition(this.item().anchor);\r
    }\r
\r
    // Left direction in absolute units\r
    leftDirectionAbs(): Position {\r
        return this.item().leftDirection;\r
    }\r
\r
    // Left direction in relative units (settable)\r
    leftDirection(newLeftDirection?: Position): Position {\r
        const region = this.region();\r
        if (newLeftDirection) {\r
            this.item().leftDirection = region.toAbsolutePosition(newLeftDirection) as Point;\r
        }\r
        return region.toRelativePosition(this.item().leftDirection);\r
    }\r
\r
    // Right direction in absolute units\r
    rightDirectionAbs(): Position {\r
        return this.item().rightDirection;\r
    }\r
\r
    // Right direction in relative units (settable)\r
    rightDirection(newRightDirection?: Position): Position {\r
        const region = this.region();\r
        if (newRightDirection) {\r
            this.item().rightDirection = region.toAbsolutePosition(newRightDirection) as Point;\r
        }\r
        return region.toRelativePosition(this.item().rightDirection);\r
    }\r
}\r
\r
class GradientStopQuery extends Queryable<GradientStop, QueryItem> {\r
    set(name?: string): SetGradientStopProperties { return new SetGradientStopProperties(this as any, name); }\r
    constructor(gradientStop: GradientStop) {\r
        super(gradientStop);\r
    }\r
}\r
\r
// Declare Interfaces\r
declare interface Application { q: ApplicationQuery; }\r
declare interface Document { q: DocumentQuery; }\r
declare interface Layer { q: LayerQuery; }\r
declare interface PathItem { q: PathItemQuery; }\r
declare interface TextFrame { q: TextFrameQuery; }\r
declare interface Story { q: StoryQuery; }\r
declare interface Gradient { q: GradientQuery; }\r
declare interface Artboard { q: ArtboardQuery; }\r
declare interface PageItem { q: PageItemQuery; }\r
declare interface CompoundPathItem { q: CompoundPathItemQuery; }\r
declare interface RasterItem { q: RasterItemQuery; }\r
declare interface PlacedItem { q: PlacedItemQuery; }\r
declare interface GroupItem { q: GroupItemQuery; }\r
declare interface SymbolItem { q: SymbolItemQuery; }\r
declare interface MeshItem { q: MeshItemQuery; }\r
declare interface PluginItem { q: PluginItemQuery; }\r
declare interface GraphItem { q: GraphItemQuery; }\r
declare interface Swatch { q: SwatchQuery; }\r
declare interface Brush { q: BrushQuery; }\r
declare interface Tag { q: TagQuery; }\r
declare interface Symbol { q: SymbolQuery; }\r
declare interface TextRange { q: TextRangeQuery; }\r
declare interface InsertionPoint { q: InsertionPointQuery; }\r
declare interface ParagraphStyle { q: ParagraphStyleQuery; }\r
declare interface Pattern { q: PatternQuery; }\r
declare interface Spot { q: SpotQuery; }\r
declare interface CharacterStyle { q: CharacterStyleQuery; }\r
declare interface ArtStyle { q: ArtStyleQuery; }\r
declare interface LegacyTextItem { q: LegacyTextItemQuery; }\r
declare interface Variable { q: VariableQuery; }\r
declare interface DataSet { q: DataSetQuery; }\r
declare interface View { q: ViewQuery; }\r
declare interface NonNativeItem { q: NonNativeItemQuery; }\r
declare interface PathPoint { q: PathPointQuery; }\r
declare interface GradientStop { q: GradientStopQuery; }\r
\r
app.q = new ApplicationQuery(app);\r
var api = app.q;\r
\r
function q<TQuery extends QueryItem = QueryItem>(obj: any): TQuery {\r
    if (obj && obj.q) return obj.q;\r
    if (!obj || obj.typename === undefined) return QueryItem.empty() as any;\r
\r
    // Switch based on the typename and create the appropriate query instance\r
    var q: any = undefined;;\r
    switch (obj.typename) {\r
        case "Application":\r
            return api as any;\r
        case "Document":\r
            q = new DocumentQuery(obj as Document);\r
            break;\r
        case "Layer":\r
            q = new LayerQuery(obj as Layer);\r
            break;\r
        case "PathItem":\r
            q = new PathItemQuery(obj as PathItem);\r
            break;\r
        case "TextFrame":\r
            q = new TextFrameQuery(obj as TextFrame);\r
            break;\r
        case "Story":\r
            q = new StoryQuery(obj as Story);\r
            break;\r
        case "Gradient":\r
            q = new GradientQuery(obj as Gradient);\r
            break;\r
        case "Artboard":\r
            q = new ArtboardQuery(obj as Artboard);\r
            break;\r
        case "PageItem":\r
            q = new PageItemQuery(obj as PageItem);\r
            break;\r
        case "CompoundPathItem":\r
            q = new CompoundPathItemQuery(obj as CompoundPathItem);\r
            break;\r
        case "RasterItem":\r
            q = new RasterItemQuery(obj as RasterItem);\r
            break;\r
        case "PlacedItem":\r
            q = new PlacedItemQuery(obj as PlacedItem);\r
            break;\r
        case "GroupItem":\r
            q = new GroupItemQuery(obj as GroupItem);\r
            break;\r
        case "SymbolItem":\r
            q = new SymbolItemQuery(obj as SymbolItem);\r
            break;\r
        case "MeshItem":\r
            q = new MeshItemQuery(obj as MeshItem);\r
            break;\r
        case "PluginItem":\r
            q = new PluginItemQuery(obj as PluginItem);\r
            break;\r
        case "GraphItem":\r
            q = new GraphItemQuery(obj as GraphItem);\r
            break;\r
        case "Swatch":\r
            q = new SwatchQuery(obj as Swatch);\r
            break;\r
        case "Brush":\r
            q = new BrushQuery(obj as Brush);\r
            break;\r
        case "Tag":\r
            q = new TagQuery(obj as Tag);\r
            break;\r
        case "Symbol":\r
            q = new SymbolQuery(obj as Symbol);\r
            break;\r
        case "TextRange":\r
            q = new TextRangeQuery(obj as TextRange);\r
            break;\r
        case "InsertionPoint":\r
            q = new InsertionPointQuery(obj as InsertionPoint);\r
            break;\r
        case "CharacterStyle":\r
            q = new CharacterStyleQuery(obj as CharacterStyle);\r
            break;\r
        case "ParagraphStyle":\r
            q = new ParagraphStyleQuery(obj as ParagraphStyle);\r
            break;\r
        case "Pattern":\r
            q = new PatternQuery(obj as Pattern);\r
            break;\r
        case "Spot":\r
            q = new SpotQuery(obj as Spot);\r
            break;\r
        case "ArtStyle":\r
            q = new ArtStyleQuery(obj as ArtStyle);\r
            break;\r
        case "LegacyTextItem":\r
            q = new LegacyTextItemQuery(obj as LegacyTextItem);\r
            break;\r
        case "Vari":\r
            q = new VariableQuery(obj as Variable);\r
            break;\r
        case "DataSet":\r
            q = new DataSetQuery(obj as DataSet);\r
            break;\r
        case "View":\r
            q = new ViewQuery(obj as View);\r
            break;\r
        case "NonNativeItem":\r
            q = new NonNativeItemQuery(obj as NonNativeItem);\r
            break;\r
        case "PathPoint":\r
            q = new PathPointQuery(obj as PathPoint);\r
            break;\r
        default:\r
            // Handle unsupported or unknown typenames\r
            obj.q = Queryable.empty;\r
            q = obj.q;\r
            break;\r
    }\r
    return q;\r
};\r
\r
type CollectionType =\r
    | "artboards"\r
    | "brushes"\r
    | "characters"\r
    | "compoundPathItems"\r
    | "documents"\r
    | "gradientStops"\r
    | "gradients"\r
    | "graphItems"\r
    | "groupItems"\r
    | "insertionPoints"\r
    | "layers"\r
    | "legacyTextItems"\r
    | "lines"\r
    | "meshItems"\r
    | "nonNativeItems"\r
    | "pageItems"\r
    | "paragraphs"\r
    | "pathItems"\r
    | "pathPoints"\r
    | "patterns"\r
    | "placedItems"\r
    | "pluginItems"\r
    | "rasterItems"\r
    | "spots"\r
    | "stories"\r
    | "swatches"\r
    | "symbolItems"\r
    | "symbols"\r
    | "tags"\r
    | "textFrames"\r
    | "textRanges"\r
    | "variables"\r
    | "views"\r
    | "words";\r
\r
class AppTestClass extends TestClass {\r
    api: ApplicationQuery = api;\r
    document(): DocumentQuery { return this.api.activeDocument(); }\r
    layer(): LayerQuery { return this.document().activeLayer(); }\r
    artboard(): ArtboardQuery { return this.document().activeArtboard(); }\r
    region(): Region { return this.artboard().region(); }\r
\r
    init() {\r
        this.api.openDocument("Test.ai", true);\r
        this.document().reset();\r
    }\r
}\r
\r
class QueryableTests extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    // Helper method to create test items\r
    createTestPageItems(): LayerQuery {\r
        const layer = api.activeDocument().layers().at(0);\r
        const rect1 = layer.pathItems().create();\r
        rect1.name("Rect 1");\r
        const rect2 = layer.pathItems().create();\r
        rect2.name("Rect 2");\r
        const rect3 = layer.pathItems().create();\r
        rect3.name("Rect 3");\r
        return layer;\r
    }\r
\r
    testTypes() {\r
        var layer = api.activeDocument().layers().at(0);\r
        var pathItem = layer.pathItems().create();\r
\r
        // Test Layer types\r
        if (layer.itemDefaults === undefined || layer.queryItemDefaults === undefined || layer.queryDefaults === undefined)\r
            throw "Layer default values are unassigned";\r
\r
        var expectedItemType = "Layer";\r
        var expectedQueryItemType = "LayerQuery";\r
        var expectedQueryType = "LayerQuery<Layer>";\r
        var actualItemType = layer.itemType;\r
        var actualQueryItemType = layer.queryItemType;\r
        var actualQueryType = layer.queryType;\r
\r
        if (expectedItemType !== actualItemType)\r
            throw \`Layer itemType: expected \${expectedItemType}, got \${actualItemType}\`;\r
        if (expectedQueryItemType !== actualQueryItemType)\r
            throw \`Layer queryItemType: expected \${expectedQueryItemType}, got \${actualQueryItemType}\`;\r
        if (expectedQueryType !== actualQueryType)\r
            throw \`Layer queryType: expected \${expectedQueryType}, got \${actualQueryType}\`;\r
\r
        // Test PathItem types\r
        if (pathItem.itemDefaults === undefined || pathItem.queryItemDefaults === undefined || pathItem.queryDefaults === undefined)\r
            throw "PathItem default values are unassigned";\r
\r
        expectedItemType = "PathItem";\r
        expectedQueryItemType = "PathItemQuery";\r
        expectedQueryType = "PathItemQuery<PathItem>";\r
        actualItemType = pathItem.itemType;\r
        actualQueryItemType = pathItem.queryItemType;\r
        actualQueryType = pathItem.queryType;\r
\r
        if (expectedItemType !== actualItemType)\r
            throw \`PathItem itemType: expected \${expectedItemType}, got \${actualItemType}\`;\r
        if (expectedQueryItemType !== actualQueryItemType)\r
            throw \`PathItem queryItemType: expected \${expectedQueryItemType}, got \${actualQueryItemType}\`;\r
        if (expectedQueryType !== actualQueryType)\r
            throw \`PathItem queryType: expected \${expectedQueryType}, got \${actualQueryType}\`;\r
    }\r
\r
    testParent() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const pathItem = layer.pathItems().create();\r
\r
        const parent = pathItem.parent();\r
        const expectedParentType = "Layer";\r
        const actualParentType = parent.itemType;\r
        if (actualParentType !== expectedParentType)\r
            throw \`Parent type: expected \${expectedParentType}, got \${actualParentType}\`;\r
    }\r
\r
    testEmpty() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const pathItem = layer.pathItems().create();\r
\r
        const expectedEmpty = false;\r
        const actualEmpty = pathItem.empty();\r
        if (actualEmpty !== expectedEmpty)\r
            throw \`Empty state: expected \${expectedEmpty}, got \${actualEmpty}\`;\r
\r
        // Test empty item\r
        const emptyItem = QueryItem.empty();\r
        const expectedEmptyState = true;\r
        const actualEmptyState = emptyItem.empty();\r
        if (actualEmptyState !== expectedEmptyState)\r
            throw \`Empty item state: expected \${expectedEmptyState}, got \${actualEmptyState}\`;\r
    }\r
\r
    testActivation() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const pathItem = layer.pathItems().create();\r
\r
        // Test initial state\r
        const expectedInitialState = false;\r
        const actualInitialState = pathItem.activated();\r
        if (actualInitialState !== expectedInitialState)\r
            throw \`Initial activation: expected \${expectedInitialState}, got \${actualInitialState}\`;\r
\r
        // Test activation\r
        pathItem.activate();\r
        const expectedActivated = true;\r
        const actualActivated = pathItem.activated();\r
        if (actualActivated !== expectedActivated)\r
            throw \`After activation: expected \${expectedActivated}, got \${actualActivated}\`;\r
\r
        // Test deactivation\r
        pathItem.deactivate();\r
        const expectedDeactivated = false;\r
        const actualDeactivated = pathItem.activated();\r
        if (actualDeactivated !== expectedDeactivated)\r
            throw \`After deactivation: expected \${expectedDeactivated}, got \${actualDeactivated}\`;\r
    }\r
\r
    testName() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const pathItem = layer.pathItems().create();\r
\r
        // Test setting name\r
        pathItem.name("Test Item");\r
        const expectedName = "Test Item";\r
        const actualName = pathItem.name();\r
        if (actualName !== expectedName)\r
            throw \`Item name: expected \${expectedName}, got \${actualName}\`;\r
\r
        // Test getting existing name\r
        const retrievedName = pathItem.name();\r
        if (retrievedName !== expectedName)\r
            throw \`Retrieved name: expected \${expectedName}, got \${retrievedName}\`;\r
    }\r
\r
    testRemove() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const pathItem = layer.pathItems().create();\r
\r
        const initialCount = layer.pathItems().length();\r
        pathItem.remove();\r
\r
        const expectedFinalCount = initialCount - 1;\r
        const actualFinalCount = layer.pathItems().length();\r
        if (actualFinalCount !== expectedFinalCount)\r
            throw \`Items after remove: expected \${expectedFinalCount}, got \${actualFinalCount}\`;\r
    }\r
\r
    testDeleteAll() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const group = layer.groupItems().create();\r
        group.pathItems().create();\r
        group.pathItems().create();\r
\r
        const initialCount = group.pathItems().length();\r
        if (initialCount !== 2)\r
            throw \`Initial group items: expected 2, got \${initialCount}\`;\r
\r
        group.removeAll();\r
\r
        const expectedFinalCount = 0;\r
        const actualFinalCount = group.pathItems().length();\r
        if (actualFinalCount !== expectedFinalCount)\r
            throw \`Items after removeAll: expected \${expectedFinalCount}, got \${actualFinalCount}\`;\r
    }\r
\r
    testGetByName() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const item = layer.pathItems().create();\r
        item.name("FindMe");\r
\r
        const foundItem = layer.getByName("FindMe");\r
        const expectedName = "FindMe";\r
        const actualName = foundItem.name();\r
        if (actualName !== expectedName)\r
            throw \`Found item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testInsert() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const group = layer.groupItems().create();\r
        const item1 = layer.pathItems().create();\r
        const item2 = layer.pathItems().create();\r
\r
        group.insertMany([item1, item2]);\r
\r
        const expectedCount = 2;\r
        const actualCount = group.pathItems().length();\r
        if (actualCount !== expectedCount)\r
            throw \`Group items after insert: expected \${expectedCount}, got \${actualCount}\`;\r
    }\r
\r
    testDuplicate() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const original = layer.pathItems().create();\r
        original.name("Original");\r
\r
        const duplicate = original.duplicate("New", layer, ElementPlacement.PLACEATEND);\r
\r
        const expectedName = "New";\r
        const actualName = duplicate.name();\r
        if (actualName !== expectedName)\r
            throw \`Duplicate name: expected \${expectedName}, got \${actualName}\`;\r
\r
        const expectedCount = 2;\r
        const actualCount = layer.pathItems().length();\r
        if (actualCount !== expectedCount)\r
            throw \`Items after duplicate: expected \${expectedCount}, got \${actualCount}\`;\r
    }\r
\r
    testMove() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const group1 = layer.groupItems().create();\r
        const group2 = layer.groupItems().create();\r
        const item = group1.pathItems().create();\r
\r
        item.move(group2, ElementPlacement.PLACEATEND);\r
\r
        const expectedSourceCount = 0;\r
        const actualSourceCount = group1.pathItems().length();\r
        if (actualSourceCount !== expectedSourceCount)\r
            throw \`Source group items: expected \${expectedSourceCount}, got \${actualSourceCount}\`;\r
\r
        const expectedTargetCount = 1;\r
        const actualTargetCount = group2.pathItems().length();\r
        if (actualTargetCount !== expectedTargetCount)\r
            throw \`Target group items: expected \${expectedTargetCount}, got \${actualTargetCount}\`;\r
    }\r
\r
    testMoveTo() {\r
        const layer = api.activeDocument().layers().at(0);\r
        const item0 = layer.pathItems().create("0");\r
        const item1 = layer.pathItems().create("1");\r
        const item2 = layer.pathItems().create("2");\r
\r
        item2.moveTo(-1);\r
        var expectSameItem = layer.pageItems().at(2);\r
        if (!expectSameItem.equals(item2))\r
            throw \`Expected item \${expectSameItem.name()} at index 2 to be \${item2.name()}\`;\r
\r
        item2.moveTo(2);\r
        var expectSameItem = layer.pageItems().at(2);\r
        if (!expectSameItem.equals(item2))\r
            throw \`Expected item \${expectSameItem.name()} at index 2 to be \${item2.name()}\`;\r
\r
        item2.moveTo(0);\r
        var expectSameItem = layer.pageItems().at(0);\r
        if (!expectSameItem.equals(item2))\r
            throw \`Expected item \${expectSameItem.name()} at index 0 to be \${item2.name()}\`;\r
\r
        item2.moveTo(1);\r
        var expectSameItem = layer.pageItems().at(1);\r
        if (!expectSameItem.equals(item2))\r
            throw \`Expected item \${expectSameItem.name()} at index 1 to be \${item2.name()}\`;\r
    }\r
\r
    testCollectionAccess() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test length\r
        const expectedLength = 3;\r
        const actualLength = layer.pageItems().length();\r
        if (actualLength !== expectedLength)\r
            throw \`Collection length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        // Test at() positive index\r
        const expectedName = "Rect 1";\r
        const actualName = layer.pageItems().at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`First item name: expected \${expectedName}, got \${actualName}\`;\r
\r
        // Test at() negative index\r
        const expectedLastName = "Rect 3";\r
        const actualLastName = layer.pageItems().at(-1).name();\r
        if (actualLastName !== expectedLastName)\r
            throw \`Last item name: expected \${expectedLastName}, got \${actualLastName}\`;\r
    }\r
\r
    testIndex() {\r
        const layer = this.createTestPageItems();\r
        if (layer.at(0).index() != 0 || layer.at(1).index() != 1 || layer.at(2).index() != 2)\r
            throw \`Index is returning the wrong number\`;\r
    }\r
\r
    testQuery() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test default query (all items)\r
        const expectedFullLength = 3;\r
        const actualFullLength = layer.pageItems().query().length();\r
        if (actualFullLength !== expectedFullLength)\r
            throw \`Full query length: expected \${expectedFullLength}, got \${actualFullLength}\`;\r
\r
        // Test range query\r
        const expectedRangeLength = 2;\r
        const actualRangeLength = layer.pageItems().query("0:1").length();\r
        if (actualRangeLength !== expectedRangeLength)\r
            throw \`Range query length: expected \${expectedRangeLength}, got \${actualRangeLength}\`;\r
    }\r
\r
    testGet() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test get with range\r
        const items = layer.pageItems().get("0:1");\r
        const expectedLength = 2;\r
        const actualLength = items.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Get range length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        // Verify items are in correct order\r
        const expectedFirstName = "Rect 1";\r
        const actualFirstName = items.at(0).name();\r
        if (actualFirstName !== expectedFirstName)\r
            throw \`First item in range: expected \${expectedFirstName}, got \${actualFirstName}\`;\r
    }\r
\r
    testCreate() {\r
        const layer = api.activeDocument().layers().at(0);\r
\r
        // Test create with name\r
        const item = layer.pathItems().create("New Rect");\r
        const expectedName = "New Rect";\r
        const actualName = item.name();\r
        if (actualName !== expectedName)\r
            throw \`Created item name: expected \${expectedName}, got \${actualName}\`;\r
\r
        // Test position after creation with existing items\r
        const item2 = layer.pathItems().create("Another Rect");\r
        const lastIndex = layer.pathItems().length() - 1;\r
        const actualLastItem = layer.pathItems().at(lastIndex);\r
        if (actualLastItem.name() !== "Another Rect")\r
            throw \`Last item name: expected Another Rect, got \${actualLastItem.name()}\`;\r
    }\r
\r
    testReplace() {\r
        const layer = this.createTestPageItems();\r
        const newItem = layer.pathItems().create("Replacement");\r
\r
        // Replace second item\r
        layer.pageItems().replace(1, newItem);\r
\r
        const expectedName = "Replacement";\r
        const actualName = layer.pageItems().at(1).name();\r
        if (actualName !== expectedName)\r
            throw \`Replaced item name: expected \${expectedName}, got \${actualName}\`;\r
\r
        const expectedLength = 3;\r
        const actualLength = layer.pageItems().length();\r
        if (actualLength !== expectedLength)\r
            throw \`Collection length after replace: expected \${expectedLength}, got \${actualLength}\`;\r
    }\r
\r
    testDelete() {\r
        const layer = this.createTestPageItems();\r
        const itemToDelete = layer.pageItems().at(1);\r
\r
        // Delete middle item\r
        layer.pageItems().delete(itemToDelete);\r
\r
        const expectedLength = 2;\r
        const actualLength = layer.pageItems().length();\r
        if (actualLength !== expectedLength)\r
            throw \`Collection length after delete: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        // Verify remaining items\r
        const expectedSecondName = "Rect 3";\r
        const actualSecondName = layer.pageItems().at(1).name();\r
        if (actualSecondName !== expectedSecondName)\r
            throw \`Second item after delete: expected \${expectedSecondName}, got \${actualSecondName}\`;\r
    }\r
\r
    testDeleteMany() {\r
        const layer = this.createTestPageItems();\r
        const itemsToDelete = layer.pageItems().get("0:1");\r
\r
        layer.pageItems().deleteMany(itemsToDelete);\r
\r
        const expectedLength = 1;\r
        const actualLength = layer.pageItems().length();\r
        if (actualLength !== expectedLength)\r
            throw \`Collection length after deleteMany: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedName = "Rect 3";\r
        const actualName = layer.pageItems().at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`Remaining item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testSelect() {\r
        const layer = this.createTestPageItems();\r
\r
        // Select names of items\r
        const names = layer.pageItems().select(item => item.name());\r
        const expectedLength = 3;\r
        const actualLength = names.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Selected names length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedFirstName = "Rect 1";\r
        const actualFirstName = names.at(0);\r
        if (actualFirstName !== expectedFirstName)\r
            throw \`First selected name: expected \${expectedFirstName}, got \${actualFirstName}\`;\r
    }\r
\r
    testWhere() {\r
        const layer = this.createTestPageItems();\r
\r
        // Filter items by name\r
        const filtered = layer.pageItems().where(item => stringContains(item.name(), "2"));\r
        const expectedLength = 1;\r
        const actualLength = filtered.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Filtered length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedName = "Rect 2";\r
        const actualName = filtered.at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`Filtered item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testWhereNameMatches() {\r
        const layer = this.createTestPageItems();\r
\r
        // Filter items by regex pattern - match specifically "Rect 2"\r
        const filtered = layer.pageItems().whereNameMatches(/Rect 2$/);\r
        const expectedLength = 1;\r
        const actualLength = filtered.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Regex filtered length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedName = "Rect 2";\r
        const actualName = filtered.at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`Regex filtered item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testWhereNameStartsWith() {\r
        const layer = this.createTestPageItems();\r
        layer.pathItems().create("Unmatched");\r
\r
        // Filter items starting with "Rect"\r
        const filtered = layer.pageItems().whereNameStartsWith("Rect");\r
        const expectedLength = 3;\r
        const actualLength = filtered.length();\r
        if (actualLength !== expectedLength)\r
            throw \`StartsWith filtered length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedName = "Rect 1";\r
        const actualName = filtered.at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`StartsWith filtered first item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testWhereNameEndsWith() {\r
        const layer = this.createTestPageItems();\r
\r
        // Filter items ending with "2"\r
        const filtered = layer.pageItems().whereNameEndsWith("2");\r
        const expectedLength = 1;\r
        const actualLength = filtered.length();\r
        if (actualLength !== expectedLength)\r
            throw \`EndsWith filtered length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedName = "Rect 2";\r
        const actualName = filtered.at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`EndsWith filtered item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testWhereNameContains() {\r
        const layer = this.createTestPageItems();\r
        layer.pathItems().create("Unmatched");\r
\r
        // Filter items containing "ct"\r
        const filtered = layer.pageItems().whereNameContains("ct");\r
        const expectedLength = 3;\r
        const actualLength = filtered.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Contains filtered length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedName = "Rect 1";\r
        const actualName = filtered.at(0).name();\r
        if (actualName !== expectedName)\r
            throw \`Contains filtered first item name: expected \${expectedName}, got \${actualName}\`;\r
    }\r
\r
    testFirst() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test first without predicate\r
        const first = layer.pageItems().first();\r
        const expectedFirstName = "Rect 1";\r
        const actualFirstName = first?.name();\r
        if (actualFirstName !== expectedFirstName)\r
            throw \`First item name: expected \${expectedFirstName}, got \${actualFirstName}\`;\r
\r
        // Test first with predicate\r
        const firstMatching = layer.pageItems().first(item => stringContains(item.name(), "2"));\r
        const expectedMatchingName = "Rect 2";\r
        const actualMatchingName = firstMatching?.name();\r
        if (actualMatchingName !== expectedMatchingName)\r
            throw \`First matching item: expected \${expectedMatchingName}, got \${actualMatchingName}\`;\r
\r
        // Test first with no matches\r
        const noMatch = layer.pageItems().first(item => stringContains(item.name(), "NonExistent"));\r
        if (noMatch !== undefined)\r
            throw \`No match should return undefined, got \${noMatch}\`;\r
    }\r
\r
    testFirstIndex() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test finding existing item\r
        const index = layer.pageItems().firstIndex(item => stringContains(item.name(), "2"));\r
        const expectedIndex = 1;\r
        if (index !== expectedIndex)\r
            throw \`First index: expected \${expectedIndex}, got \${index}\`;\r
\r
        // Test no match\r
        const noMatchIndex = layer.pageItems().firstIndex(item => stringContains(item.name(), "NonExistent"));\r
        const expectedNoMatch = -1;\r
        if (noMatchIndex !== expectedNoMatch)\r
            throw \`No match index: expected \${expectedNoMatch}, got \${noMatchIndex}\`;\r
    }\r
\r
    testLast() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test last without predicate\r
        const last = layer.pageItems().last();\r
        const expectedLastName = "Rect 3";\r
        const actualLastName = last?.name();\r
        if (actualLastName !== expectedLastName)\r
            throw \`Last item name: expected \${expectedLastName}, got \${actualLastName}\`;\r
\r
        // Test last with predicate\r
        const lastMatching = layer.pageItems().last(item => stringContains(item.name(), "Rect"));\r
        const expectedMatchingName = "Rect 3";\r
        const actualMatchingName = lastMatching?.name();\r
        if (actualMatchingName !== expectedMatchingName)\r
            throw \`Last matching item: expected \${expectedMatchingName}, got \${actualMatchingName}\`;\r
    }\r
\r
    testLastIndex() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test finding existing item\r
        const index = layer.pageItems().lastIndex(item => stringContains(item.name(), "Rect"));\r
        const expectedIndex = 2;\r
        if (index !== expectedIndex)\r
            throw \`Last index: expected \${expectedIndex}, got \${index}\`;\r
\r
        // Test no match\r
        const noMatchIndex = layer.pageItems().lastIndex(item => stringContains(item.name(), "NonExistent"));\r
        const expectedNoMatch = -1;\r
        if (noMatchIndex !== expectedNoMatch)\r
            throw \`No match last index: expected \${expectedNoMatch}, got \${noMatchIndex}\`;\r
    }\r
\r
    testSkip() {\r
        const layer = this.createTestPageItems();\r
\r
        const skipped = layer.pageItems().skip(1);\r
        const expectedLength = 2;\r
        const actualLength = skipped.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Skipped length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedFirstName = "Rect 2";\r
        const actualFirstName = skipped.at(0).name();\r
        if (actualFirstName !== expectedFirstName)\r
            throw \`First skipped item: expected \${expectedFirstName}, got \${actualFirstName}\`;\r
    }\r
\r
    testTake() {\r
        const layer = this.createTestPageItems();\r
\r
        const taken = layer.pageItems().take(2);\r
        const expectedLength = 2;\r
        const actualLength = taken.length();\r
        if (actualLength !== expectedLength)\r
            throw \`Taken length: expected \${expectedLength}, got \${actualLength}\`;\r
\r
        const expectedLastName = "Rect 2";\r
        const actualLastName = taken.at(-1).name();\r
        if (actualLastName !== expectedLastName)\r
            throw \`Last taken item: expected \${expectedLastName}, got \${actualLastName}\`;\r
    }\r
\r
    testAny() {\r
        const layer = this.createTestPageItems();\r
\r
        // Test without predicate\r
        const hasAny = layer.pageItems().any();\r
        if (!hasAny)\r
            throw \`Any without predicate should be true\`;\r
\r
        // Test with matching predicate\r
        const hasMatch = layer.pageItems().any(item => stringContains(item.name(), "2"));\r
        if (!hasMatch)\r
            throw \`Any with matching predicate should be true\`;\r
\r
        // Test with non-matching predicate\r
        const hasNoMatch = layer.pageItems().any(item => stringContains(item.name(), "NonExistent"));\r
        if (hasNoMatch)\r
            throw \`Any with non-matching predicate should be false\`;\r
    }\r
\r
    testIncludes() {\r
        const layer = this.createTestPageItems();\r
        const item = layer.pageItems().at(1);\r
\r
        const doesInclude = layer.pageItems().includes(item);\r
        if (!doesInclude)\r
            throw \`Includes should find existing item\`;\r
\r
        const otherLayer = api.activeDocument().layers().create();\r
        const otherItem = otherLayer.pathItems().create();\r
        const doesNotInclude = layer.pageItems().includes(otherItem);\r
        if (doesNotInclude)\r
            throw \`Includes should not find item from other layer\`;\r
    }\r
\r
    testForEach() {\r
        const layer = this.createTestPageItems();\r
        let count = 0;\r
        let names: string[] = [];\r
\r
        layer.pageItems().forEach((item, index) => {\r
            count++;\r
            names.push(item.name());\r
        });\r
\r
        const expectedCount = 3;\r
        if (count !== expectedCount)\r
            throw \`ForEach count: expected \${expectedCount}, got \${count}\`;\r
\r
        const expectedFirstName = "Rect 1";\r
        if (names[0] !== expectedFirstName)\r
            throw \`ForEach first name: expected \${expectedFirstName}, got \${names[0]}\`;\r
    }\r
\r
    testDo() {\r
        const layer = this.createTestPageItems();\r
        let count = 0;\r
        let names: string[] = [];\r
\r
        layer.pageItems().do(item => {\r
            count++;\r
            names.push(item.name());\r
        });\r
\r
        const expectedCount = 3;\r
        if (count !== expectedCount)\r
            throw \`ForEach count: expected \${expectedCount}, got \${count}\`;\r
\r
        const expectedFirstName = "Rect 1";\r
        if (names[0] !== expectedFirstName)\r
            throw \`ForEach first name: expected \${expectedFirstName}, got \${names[0]}\`;\r
    }\r
\r
    testDoOnce() {\r
        const layer = this.createTestPageItems();\r
        let count = 0;\r
\r
        // Should stop after finding match\r
        layer.pageItems().doOnce(item => {\r
            count++;\r
            return stringContains(item.name(), "2");\r
        });\r
\r
        const expectedCount = 2;\r
        if (count !== expectedCount)\r
            throw \`DoOnce count: expected \${expectedCount}, got \${count}\`;\r
    }\r
\r
    testHide() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        // Initial visibility check\r
        const expectedVisible = true;\r
        const actualVisible = rect.visible();\r
        if (actualVisible !== expectedVisible)\r
            throw \`1. Expected visible: \${expectedVisible}, got: \${actualVisible}\`;\r
\r
        // Hide the item\r
        rect.hide();\r
\r
        // Verify hidden state\r
        const expectedHidden = true;\r
        const actualHidden = rect.hidden();\r
        if (actualHidden !== expectedHidden)\r
            throw \`2. Expected hidden: \${expectedHidden}, got: \${actualHidden}\`;\r
    }\r
\r
    testShow() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        // Hide the item\r
        rect.hide();\r
\r
        // Show the item\r
        rect.show();\r
\r
        // Verify visibility\r
        const expectedVisible = true;\r
        const actualVisible = rect.visible();\r
        if (actualVisible !== expectedVisible)\r
            throw \`3. Expected visible: \${expectedVisible}, got: \${actualVisible}\`;\r
    }\r
\r
    testHidden() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        // Verify initial hidden state\r
        const expectedHidden = false;\r
        const actualHidden = rect.hidden();\r
        if (actualHidden !== expectedHidden)\r
            throw \`4. Expected hidden: \${expectedHidden}, got: \${actualHidden}\`;\r
\r
        // Hide the item\r
        rect.hide();\r
\r
        // Verify it reports as hidden\r
        const expectedHiddenAfterHide = true;\r
        const actualHiddenAfterHide = rect.hidden();\r
        if (actualHiddenAfterHide !== expectedHiddenAfterHide)\r
            throw \`5. Expected hidden after hide: \${expectedHiddenAfterHide}, got: \${actualHiddenAfterHide}\`;\r
    }\r
\r
    testVisible() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        // Verify initial visibility\r
        const expectedVisible = true;\r
        const actualVisible = rect.visible();\r
        if (actualVisible !== expectedVisible)\r
            throw \`6. Expected visible: \${expectedVisible}, got: \${actualVisible}\`;\r
\r
        // Hide the item\r
        rect.hide();\r
\r
        // Verify not visible\r
        const expectedVisibleAfterHide = false;\r
        const actualVisibleAfterHide = rect.visible();\r
        if (actualVisibleAfterHide !== expectedVisibleAfterHide)\r
            throw \`7. Expected visible after hide: \${expectedVisibleAfterHide}, got: \${actualVisibleAfterHide}\`;\r
    }\r
\r
    testHideAll() {\r
        const layer = this.createTestPageItems();\r
\r
        // Hide all items\r
        layer.pathItems().hideAll();\r
\r
        // Verify all items are hidden\r
        layer.pathItems().do(item => {\r
            const expectedHidden = true;\r
            const actualHidden = item.hidden();\r
            if (actualHidden !== expectedHidden)\r
                throw \`8. Expected hideAll hidden: \${expectedHidden}, got: \${actualHidden}\`;\r
        });\r
\r
        // Hide all with a predicate\r
        const rect2 = layer.pathItems().at(1);\r
        layer.pathItems().showAll(); // Reset visibility\r
\r
        layer.pathItems().hideAll(item => item.name() === rect2.name());\r
        const expectedHiddenPredicate = true;\r
        const actualHiddenPredicate = rect2.hidden();\r
        if (actualHiddenPredicate !== expectedHiddenPredicate)\r
            throw \`9. Expected hideAll rect2 hidden after predicate hideAll: \${expectedHiddenPredicate}, got: \${actualHiddenPredicate}\`;\r
    }\r
\r
    testShowAll() {\r
        const layer = this.createTestPageItems();\r
\r
        // Hide all items first\r
        layer.pathItems().hideAll();\r
\r
        // Show all items\r
        layer.pathItems().showAll();\r
\r
        // Verify all items are visible\r
        layer.pathItems().do(item => {\r
            const expectedVisible = true;\r
            const actualVisible = item.visible();\r
            if (actualVisible !== expectedVisible)\r
                throw \`10. Expected visible: \${expectedVisible}, got: \${actualVisible}\`;\r
        })\r
\r
        // Show all with a predicate\r
        const rect2 = layer.pathItems().at(1);\r
        layer.pathItems().hideAll(); // Reset visibility\r
\r
        layer.pathItems().showAll(item => item.name() === rect2.name());\r
        const expectedVisiblePredicate = true;\r
        const actualVisiblePredicate = rect2.visible();\r
        if (actualVisiblePredicate !== expectedVisiblePredicate)\r
            throw \`11. Expected rect2 visible after predicate showAll: \${expectedVisiblePredicate}, got: \${actualVisiblePredicate}\`;\r
    }\r
\r
    testDefaultHide() {\r
        const doc = api.activeDocument();\r
\r
        // Ensure hide/show operations do not throw errors\r
        doc.hide()\r
        doc.show()\r
\r
        // Ensure hidden() returns false and visible() returns true\r
        const expectedHidden = false;\r
        const actualHidden = doc.hidden();\r
        if (actualHidden !== expectedHidden)\r
            throw \`Expected document hidden: \${expectedHidden}, got: \${actualHidden}\`;\r
\r
        const expectedVisible = true;\r
        const actualVisible = doc.visible();\r
        if (actualVisible !== expectedVisible)\r
            throw \`Expected document visible: \${expectedVisible}, got: \${actualVisible}\`;\r
    }\r
\r
    testActivate() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        // Inactivate the item\r
        rect.deactivate();\r
\r
        // Activate the item\r
        rect.activate();\r
\r
        // Verify activation state\r
        const expectedActive = true;\r
        const actualActive = rect.active();\r
        if (actualActive !== expectedActive)\r
            throw \`3. Expected active: \${expectedActive}, got: \${actualActive}\`;\r
    }\r
\r
    testInactive() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        // Verify initial inactive state\r
        const expectedInactive = true;\r
        const actualInactive = rect.inactive();\r
        if (actualInactive !== expectedInactive)\r
            throw \`4. Expected inactive: \${expectedInactive}, got: \${actualInactive}\`;\r
\r
        // Inactivate the item\r
        rect.deactivate();\r
\r
        // Verify it reports as inactive\r
        const expectedInactiveAfterDeactivate = false;\r
        const actualInactiveAfterDeactivate = rect.active();\r
        if (actualInactiveAfterDeactivate !== expectedInactiveAfterDeactivate)\r
            throw \`5. Expected inactive after deactivate: \${expectedInactiveAfterDeactivate}, got: \${actualInactiveAfterDeactivate}\`;\r
    }\r
\r
    testActive() {\r
        const layer = this.createTestPageItems();\r
        const rect = layer.pathItems().at(0);\r
\r
        rect.activate();\r
\r
        // Verify initial active state\r
        const expectedActive = true;\r
        const actualActive = rect.active();\r
        if (actualActive !== expectedActive)\r
            throw \`6. Expected active: \${expectedActive}, got: \${actualActive}\`;\r
\r
        // Inactivate the item\r
        rect.deactivate();\r
\r
        // Verify not active\r
        const expectedActiveAfterInactivate = false;\r
        const actualActiveAfterInactivate = rect.active();\r
        if (actualActiveAfterInactivate !== expectedActiveAfterInactivate)\r
            throw \`7. Expected active after inactivate: \${expectedActiveAfterInactivate}, got: \${actualActiveAfterInactivate}\`;\r
    }\r
\r
    testInactivateAll() {\r
        const layer = this.createTestPageItems();\r
\r
        // Inactivate all items\r
        layer.pathItems().inactivateAll();\r
\r
        // Verify all items are inactive\r
        layer.pathItems().do(item => {\r
            const expectedInactive = true;\r
            const actualInactive = item.inactive();\r
            if (actualInactive !== expectedInactive)\r
                throw \`8. Expected inactivateAll inactive: \${expectedInactive}, got: \${actualInactive}\`;\r
        });\r
\r
        // Inactivate all with a predicate\r
        const rect2 = layer.pathItems().at(1);\r
        layer.pathItems().activateAll();\r
\r
        layer.pathItems().inactivateAll(item => item.name() === rect2.name());\r
        const expectedPredicate = false;\r
        const actualPredicate = rect2.active();\r
        if (actualPredicate !== expectedPredicate)\r
            throw \`9. Expected inactivateAll rect2 inactive after predicate inactivateAll: \${expectedPredicate}, got: \${actualPredicate}\`;\r
    }\r
}\r
\r
class DocumentQueryTests extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    _testDocumentDelete() {\r
        // Test deleting non-existent document\r
        const nonExistentFile = "NonExistent.ai";\r
        api.deleteDocument(nonExistentFile); // Should not throw\r
\r
        // Test deleting existing file\r
        const testFile = "TestDelete.ai";\r
        api.createDocument(testFile, 1000, 1000);\r
\r
        const expectedExistsBefore = true;\r
        const actualExistsBefore = api.exists(testFile);\r
        if (actualExistsBefore !== expectedExistsBefore)\r
            throw \`Before delete: expected exists=\${expectedExistsBefore}, got \${actualExistsBefore}\`;\r
\r
        api.deleteDocument(testFile);\r
\r
        const expectedExistsAfter = false;\r
        const actualExistsAfter = api.exists(testFile);\r
        if (actualExistsAfter !== expectedExistsAfter)\r
            throw \`After delete: expected exists=\${expectedExistsAfter}, got \${actualExistsAfter}\`;\r
\r
        // Test deleting open document\r
        const openFile = "TestDeleteOpen.ai";\r
        const openDoc = api.createDocument(openFile, 1000, 1000);\r
        openDoc.save();\r
\r
        api.deleteDocument(openFile);\r
\r
        const expectedExistsAfterOpen = false;\r
        const actualExistsAfterOpen = api.exists(openFile);\r
        if (actualExistsAfterOpen !== expectedExistsAfterOpen)\r
            throw \`After delete open: expected exists=\${expectedExistsAfterOpen}, got \${actualExistsAfterOpen}\`;\r
    }\r
\r
    _testDocumentCreate() {\r
        const testFile = "TestCreate.ai";\r
        api.deleteDocument(testFile);  // Cleanup any existing file\r
\r
        // Test basic creation\r
        const doc = api.createDocument(testFile, 1000, 1000);\r
        const expectedName = testFile;\r
        const actualName = doc.name();\r
        if (actualName !== expectedName)\r
            throw \`Document name mismatch: expected '\${expectedName}', got '\${actualName}'\`;\r
\r
        // Test creation sets active document\r
        const expectedActiveDoc = doc._item;\r
        const actualActiveDoc = app.activeDocument;\r
        if (actualActiveDoc !== expectedActiveDoc)\r
            throw \`Active document mismatch: expected \${expectedActiveDoc.q.name()}, got \${actualActiveDoc.q.name()}\`;\r
\r
        // Test creation with activation false\r
        const inactiveFile = "TestCreateInactive.ai";\r
        api.deleteDocument(inactiveFile);  // Cleanup\r
\r
        api.createDocument(inactiveFile, 1000, 1000, false);\r
        const expectedActive = doc._item;\r
        const actualActive = app.activeDocument;\r
        if (actualActive !== expectedActive)\r
            throw \`Active document after inactive creation: expected \${expectedActive.q.name()}, got \${actualActive.q.name()}\`;\r
\r
        // Cleanup\r
        api.deleteDocument(testFile);\r
        api.deleteDocument(inactiveFile);\r
    }\r
\r
    _testDocumentOpen() {\r
        const testFile = "TestOpen.ai";\r
        api.deleteDocument(testFile);  // Cleanup\r
\r
        // Create and save a test document\r
        const originalDoc = api.createDocument(testFile, 1000, 1000);\r
        originalDoc.save();\r
\r
        // Test basic opening\r
        const openedDoc = api.openDocument(testFile);\r
        const expectedName = testFile;\r
        const actualName = openedDoc.name();\r
        if (actualName !== expectedName)\r
            throw \`Opened document name: expected '\${expectedName}', got '\${actualName}'\`;\r
\r
        // Test opening with creation disabled\r
        const nonExistentFile = "NonExistent.ai";\r
        api.deleteDocument(nonExistentFile);  // Cleanup\r
\r
        this.assertThrows(\r
            () => api.openDocument(nonExistentFile, false),\r
            \`Opening non-existent file '\${nonExistentFile}' should throw\`\r
        );\r
\r
        // Test opening with creation enabled\r
        const newFile = "CreateNew.ai";\r
        api.deleteDocument(newFile);  // Cleanup\r
\r
        const createdDoc = api.openDocument(newFile, true);\r
        const expectedNewName = newFile;\r
        const actualNewName = createdDoc.name();\r
        if (actualNewName !== expectedNewName)\r
            throw \`Created document name: expected '\${expectedNewName}', got '\${actualNewName}'\`;\r
\r
        // Cleanup\r
        api.deleteDocument(testFile);\r
        api.deleteDocument(newFile);\r
        api.deleteDocument(nonExistentFile);\r
    }\r
\r
    testCopyLayer() {\r
        var layer = api.activeDocument().activeLayer();\r
        layer.pathItems().create("0");\r
        layer.pathItems().create("1");\r
        layer.pathItems().create("2");\r
        layer.pathItems().create("3");\r
\r
        var newLayer = api.activeDocument().copyLayer(layer);\r
\r
        if (newLayer.name() != layer.name() || newLayer.length() != layer.length())\r
            throw \`Expected copyLayer to copy the name and items of the specified later\`;\r
    }\r
}\r
\r
class LayerQueryTests extends AppTestClass {\r
    testCreate() {\r
        const doc = api.activeDocument();\r
\r
        // Test initial state (should be empty from init)\r
        const expectedInitialCount = 1;\r
        const actualInitialCount = doc.layers().length();\r
        if (actualInitialCount !== expectedInitialCount)\r
            throw \`Initial layer count: expected \${expectedInitialCount}, got \${actualInitialCount}\`;\r
\r
        // Test adding a new layer\r
        doc.layers().create();\r
        const expectedCountAfterAdd = 2;\r
        const actualCountAfterAdd = doc.layers().length();\r
        if (actualCountAfterAdd !== expectedCountAfterAdd)\r
            throw \`Layer count after add: expected \${expectedCountAfterAdd}, got \${actualCountAfterAdd}\`;\r
    }\r
\r
    testNaming() {\r
        const doc = api.activeDocument();\r
        const layer = doc.layers().at(0);\r
\r
        // Test default layer name\r
        const expectedDefaultName = "Layer 1";\r
        const actualDefaultName = layer.name();\r
        if (actualDefaultName !== expectedDefaultName)\r
            throw \`Default layer name: expected '\${expectedDefaultName}', got '\${actualDefaultName}'\`;\r
\r
        // Test setting layer name\r
        const newName = "Test Layer";\r
        layer.name(newName);\r
        const actualNewName = layer.name();\r
        if (actualNewName !== newName)\r
            throw \`Set layer name: expected '\${newName}', got '\${actualNewName}'\`;\r
    }\r
\r
    testSelection() {\r
        const doc = api.activeDocument();\r
        const layer1 = doc.layers().create();\r
        const layer2 = doc.layers().create();\r
        doc.layers().at(0).remove(); // Remove initial layer\r
\r
        // Test initial selection state\r
        const expectedInitialSelection = false;\r
        const actualInitialSelection = layer1.activated();\r
        if (actualInitialSelection !== expectedInitialSelection)\r
            throw \`Initial selection state: expected \${expectedInitialSelection}, got \${actualInitialSelection}\`;\r
\r
        // Test activating layer\r
        layer1.activate();\r
        const expectedActivated = true;\r
        const actualActivated = layer1.activated();\r
        if (actualActivated !== expectedActivated)\r
            throw \`After activation: expected \${expectedActivated}, got \${actualActivated}\`;\r
\r
        // Test deactivating layer\r
        layer1.deactivate();\r
        const expectedDeactivated = false;\r
        const actualDeactivated = layer1.activated();\r
        if (actualDeactivated !== expectedDeactivated)\r
            throw \`After deactivation: expected \${expectedDeactivated}, got \${actualDeactivated}\`;\r
    }\r
\r
    testDelete() {\r
        const doc = api.activeDocument();\r
        doc.layers().create();\r
        doc.layers().create();\r
        doc.layers().create();\r
        doc.layers().at(0).remove(); // Remove initial layer\r
\r
        // Test initial count\r
        const expectedInitialCount = 3;\r
        const actualInitialCount = doc.layers().length();\r
        if (actualInitialCount !== expectedInitialCount)\r
            throw \`Initial layer count: expected \${expectedInitialCount}, got \${actualInitialCount}\`;\r
\r
        // Test deleting single layer\r
        doc.layers().at(1).remove();\r
        const expectedAfterDelete = 2;\r
        const actualAfterDelete = doc.layers().length();\r
        if (actualAfterDelete !== expectedAfterDelete)\r
            throw \`Layer count after delete: expected \${expectedAfterDelete}, got \${actualAfterDelete}\`;\r
\r
        // Test deleteAll\r
        doc.layers().removeAll();\r
        const expectedAfterDeleteAll = 1;\r
        const actualAfterDeleteAll = doc.layers().length();\r
        if (actualAfterDeleteAll !== expectedAfterDeleteAll)\r
            throw \`Layer count after deleteAll: expected \${expectedAfterDeleteAll}, got \${actualAfterDeleteAll}\`;\r
    }\r
\r
    testMove() {\r
        const doc = api.activeDocument();\r
        const layer1 = doc.layers().create();\r
        const layer2 = doc.layers().create();\r
        const layer3 = doc.layers().create();\r
        doc.layers().at(0).remove(); // Remove initial layer\r
\r
        // Test moving layer\r
        layer1.move(layer3, ElementPlacement.PLACEAFTER);\r
        const expectedIndex = 2;\r
        const actualIndex = doc.layers().firstIndex(layer => layer._item === layer1._item);\r
        if (actualIndex !== expectedIndex)\r
            throw \`Layer index after move: expected \${expectedIndex}, got \${actualIndex}\`;\r
    }\r
\r
    testItemCollection() {\r
        const doc = api.activeDocument();\r
        const layer = doc.layers().create();\r
\r
        // Add different types of items\r
        const pathItem = layer.pathItems().create();\r
        const textFrame = layer.textFrames().create();\r
        const compoundPath = layer.compoundPathItems().create();\r
\r
        // Test total pageItems count\r
        const expectedItemCount = 3;\r
        const actualItemCount = layer.pageItems().length();\r
        if (actualItemCount !== expectedItemCount)\r
            throw \`Page items count: expected \${expectedItemCount}, got \${actualItemCount}\`;\r
\r
        // Test specific collection counts\r
        const expectedPathCount = 1;\r
        const actualPathCount = layer.pathItems().length();\r
        if (actualPathCount !== expectedPathCount)\r
            throw \`Path items count: expected \${expectedPathCount}, got \${actualPathCount}\`;\r
\r
        const expectedTextCount = 1;\r
        const actualTextCount = layer.textFrames().length();\r
        if (actualTextCount !== expectedTextCount)\r
            throw \`Text frames count: expected \${expectedTextCount}, got \${actualTextCount}\`;\r
\r
        const expectedCompoundCount = 1;\r
        const actualCompoundCount = layer.compoundPathItems().length();\r
        if (actualCompoundCount !== expectedCompoundCount)\r
            throw \`Compound path count: expected \${expectedCompoundCount}, got \${actualCompoundCount}\`;\r
    }\r
\r
    testGroup() {\r
        var layer = api.activeDocument().activeLayer();\r
        layer.pathItems().create("0");\r
        layer.pathItems().create("1");\r
        layer.pathItems().create("2");\r
\r
        var group = layer.group("Group");\r
\r
        if (group.name() !== "Group")\r
            throw \`Expected name to be "Group", got \${group.name()}\`;\r
\r
        var expectedGroupLength = 3;\r
        var actualGroupLength = group.length();\r
        if (expectedGroupLength != actualGroupLength)\r
            throw \`Expected group length of \${expectedGroupLength}, get \${actualGroupLength}\`;\r
\r
        if (group.at(2).name() != "2")\r
            throw \`Expected group name of "2", get \${group.at(2).name()}\`;\r
\r
        if (layer.length() !== 1)\r
            throw \`Expected layer length of "1", get \${layer.length()}\`;\r
    }\r
\r
    testUngroup() {\r
        var layer = api.activeDocument().activeLayer();\r
        var zerothItem = layer.pathItems().create("0");\r
        layer.pathItems().create("1");\r
        layer.pathItems().create("2");\r
        layer.pathItems().create("3");\r
\r
        var group = layer.group("Group", item => item.name() == "1" || item.name() == "2");\r
        group.move(zerothItem, ElementPlacement.PLACEAFTER);\r
\r
        if (group.name() !== "Group")\r
            throw \`Expected name to be "Group", got \${group.name()}\`;\r
\r
        var expectedGroupLength = 2;\r
        var actualGroupLength = group.length();\r
        if (expectedGroupLength != actualGroupLength)\r
            throw \`Expected group length of \${expectedGroupLength}, get \${actualGroupLength}\`;\r
\r
        var expectedItemsLength = 3;\r
        var actualItemsLength = layer.length();\r
        if (expectedItemsLength != actualItemsLength)\r
            throw \`Expected layer length of \${expectedItemsLength}, get \${actualItemsLength}\`;\r
\r
        group.ungroup();\r
\r
        var expectedItemsLength = 4;\r
        var actualItemsLength = layer.length();\r
        if (expectedItemsLength != actualItemsLength)\r
            throw \`Expected after ungroup layer length of \${expectedItemsLength}, get \${actualItemsLength}\`;\r
        if (layer.at(0).name() != "0" || layer.at(1).name() != "1" || layer.at(2).name() != "2" || layer.at(3).name() != "3")\r
            throw "The later items are in the wrong order: " + layer.select(i => i.name()).a;\r
    }\r
\r
    testReplaceWith() {\r
        var layer = api.activeDocument().activeLayer();\r
        layer.pathItems().create("0");\r
        layer.pathItems().create("1");\r
        layer.pathItems().create("2");\r
        layer.pathItems().create("3");\r
\r
        var secondLayer = api.activeDocument().layers().create("New");\r
        secondLayer.pathItems().create("4");\r
        layer.replaceWith(secondLayer);\r
\r
        if (layer.name() != "New" || layer.length() != 1 || layer.pageItems().first().name() != "4")\r
            throw \`Expected original layer to be named New, have lentgth 1 and contain a single element\`;\r
    }\r
}\r
\r
class ArtboardQueryTests extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    testDocument() {\r
        const doc = api.activeDocument();\r
        const artboard = doc.artboards().at(0);\r
\r
        // Test document access\r
        const artboardDoc = artboard.document();\r
        const expectedDocName = doc.name();\r
        const actualDocName = artboardDoc.name();\r
        if (actualDocName !== expectedDocName)\r
            throw \`Document name: expected \${expectedDocName}, got \${actualDocName}\`;\r
\r
        // Verify it's configured for artboards\r
        const expectedProperty = "artboards";\r
        const actualProperty = artboardDoc.collectionType;\r
        if (actualProperty !== expectedProperty)\r
            throw \`Collection property: expected \${expectedProperty}, got \${actualProperty}\`;\r
    }\r
\r
    testIndex() {\r
        const doc = api.activeDocument();\r
        const artboard = doc.artboards().at(0);\r
\r
        // Test index of first artboard\r
        const expectedFirstIndex = 0;\r
        const actualFirstIndex = artboard.index();\r
        if (actualFirstIndex !== expectedFirstIndex)\r
            throw \`First artboard index: expected \${expectedFirstIndex}, got \${actualFirstIndex}\`;\r
\r
    }\r
\r
    testActivation() {\r
        const doc = api.activeDocument();\r
        const artboard = doc.activeArtboard();\r
        if (!artboard.activated())\r
            throw \`Second artboard should be activated\`;\r
    }\r
\r
    testCreate() {\r
        const doc = api.activeDocument();\r
        this.assertThrows(() => doc.artboards().create(), "Cannot create artboards");\r
    }\r
\r
    testReset() {\r
        const doc = api.activeDocument();\r
        const artboard = doc.activeArtboard();\r
\r
        artboard.aspectRatio(2);\r
        artboard.reset();\r
\r
        var expectedRect = api.defaults().artboardRect;\r
        var actualRect = artboard.rect();\r
\r
        this.assertEquals(expectedRect, actualRect, "2. The artboard rect is not the default rect");\r
    }\r
\r
    testWidth() {\r
        var artboard = api.activeDocument().activeArtboard();\r
        var region = artboard.region();\r
\r
        // Adjust the region virtually\r
        var width = region.width()\r
        region.width(width + 0.05, false);\r
\r
        // Adjust the artboard actually\r
        artboard.width(width + 0.05, false)\r
\r
        // Compare the new region and the old one\r
        var newRegion = artboard.region();\r
        this.assertEquals(region.leftAbs(), newRegion.leftAbs(), "width should have the same left", 1);\r
        this.assertEquals(region.rightAbs(), newRegion.rightAbs(), "width should have the same right", 1);\r
        this.assertEquals(region.topAbs(), newRegion.topAbs(), "width should have the same top", 1);\r
        this.assertEquals(region.bottomAbs(), newRegion.bottomAbs(), "width should have the same bottom", 1);\r
\r
        region = artboard.region();\r
        width = region.width()\r
        region.width(width + 0.05, true);\r
\r
        // Adjust the artboard actually\r
        artboard.width(width + 0.05, true)\r
\r
        // Compare the new region and the old one\r
        var newRegion = artboard.region();\r
        this.assertEquals(region.leftAbs(), newRegion.leftAbs(), "width should have the same left", 1);\r
        this.assertEquals(region.rightAbs(), newRegion.rightAbs(), "width should have the same right", 1);\r
        this.assertEquals(region.topAbs(), newRegion.topAbs(), "width should have the same top", 1);\r
        this.assertEquals(region.bottomAbs(), newRegion.bottomAbs(), "width should have the same bottom", 1);\r
    }\r
\r
    testHeight() {\r
        var artboard = api.activeDocument().activeArtboard();\r
        var region = artboard.region();\r
\r
        // Adjust the region virtually\r
        var height = region.height()\r
        region.height(height + 0.05, false);\r
\r
        // Adjust the artboard actually\r
        artboard.height(height + 0.05, false)\r
\r
        // Compare the new region and the old one\r
        var newRegion = artboard.region();\r
        this.assertEquals(region.leftAbs(), newRegion.leftAbs(), "height should have the same left", 1);\r
        this.assertEquals(region.rightAbs(), newRegion.rightAbs(), "height should have the same right", 1);\r
        this.assertEquals(region.topAbs(), newRegion.topAbs(), "height should have the same top", 1);\r
        this.assertEquals(region.bottomAbs(), newRegion.bottomAbs(), "height should have the same bottom", 1);\r
\r
        region = artboard.region();\r
        height = region.height()\r
        region.height(height + 0.05, true);\r
\r
        // Adjust the artboard actually\r
        artboard.height(height + 0.05, true)\r
\r
        // Compare the new region and the old one\r
        var newRegion = artboard.region();\r
        this.assertEquals(region.leftAbs(), newRegion.leftAbs(), "height should have the same left", 1);\r
        this.assertEquals(region.rightAbs(), newRegion.rightAbs(), "height should have the same right", 1);\r
        this.assertEquals(region.topAbs(), newRegion.topAbs(), "height should have the same top", 1);\r
        this.assertEquals(region.bottomAbs(), newRegion.bottomAbs(), "height should have the same bottom", 1);\r
    }\r
\r
    testCenter() {\r
        var artboard = api.activeDocument().activeArtboard();\r
        var region = artboard.region();\r
\r
        // Adjust the region virtually\r
        var currentCenter = region.center();\r
        region.center([currentCenter[0] + 0.01, currentCenter[1] + 0.01]);\r
\r
        // Adjust the artboard actually\r
        artboard.center([currentCenter[0] + 0.01, currentCenter[1] + 0.01])\r
\r
        // Compare the new region and the old one\r
        var newRegion = artboard.region();\r
        this.assertEquals(region.leftAbs(), newRegion.leftAbs(), "center should have the same left", 1);\r
        this.assertEquals(region.rightAbs(), newRegion.rightAbs(), "center should have the same right", 1);\r
        this.assertEquals(region.topAbs(), newRegion.topAbs(), "center should have the same top", 1);\r
        this.assertEquals(region.bottomAbs(), newRegion.bottomAbs(), "center should have the same bottom", 1);\r
    }\r
\r
    testSize() {\r
        var artboard = api.activeDocument().activeArtboard();\r
        var region = artboard.region();\r
\r
        // Adjust the region virtually\r
        var currentSize = region.size();\r
        region.size([currentSize[0] + 0.01, currentSize[1] + 0.01]);\r
\r
        // Adjust the artboard actually\r
        artboard.size([currentSize[0] + 0.01, currentSize[1] + 0.01])\r
\r
        // Compare the new region and the old one\r
        var newRegion = artboard.region();\r
        this.assertEquals(region.leftAbs(), newRegion.leftAbs(), "size should have the same left", 1);\r
        this.assertEquals(region.rightAbs(), newRegion.rightAbs(), "size should have the same right", 1);\r
        this.assertEquals(region.topAbs(), newRegion.topAbs(), "size should have the same top", 1);\r
        this.assertEquals(region.bottomAbs(), newRegion.bottomAbs(), "size should have the same bottom", 1);\r
    }\r
}`}),e(m,{identifier:"utils",type:".txt",children:`// Defines the places where we save and load documents from as specified in .env and added by the build\r
var SCRIPTS_PATH = "";\r
var DOCUMENTS_PATH: string = "";\r
\r
type Reference = string | number;\r
type Selector = Reference | string[] | number[];\r
type Position = [number, number] | number[];\r
type Scale = number | [number, number] | number[];\r
type Delta = [number, number] | number[];\r
type Size = [number, number] | number[];\r
type Direction = "c" | "cc"; \r
\r
declare enum ElementPlacement {\r
  PLACEATBEGINNING = 1,\r
  PLACEATEND = 2,\r
  PLACEAFTER = 3,\r
  PLACEBEFORE = 4\r
}\r
\r
class Console {\r
    private _on: boolean = false;\r
    on(): this { this._on = true; return this; }\r
    off(): this {  this._on = false; return this; }\r
    active(): boolean { return this._on; }\r
\r
    log(...args: any[]) {\r
        var turnOff = false;\r
        if (args && args.length > 0 && args[0] == "on") {\r
            this.on();\r
            args = f(args).skip(1).a;\r
        }\r
        if (args && args.length > 0 && args[0] == "off") {\r
            turnOff = true;\r
            args = f(args).skip(1).a;\r
        }\r
        args = args ? args : [];\r
        args.unshift("debug:");\r
        this.show(false, ...args);\r
        if (turnOff) this.off();\r
    }\r
\r
    break(...args: any[]) {\r
        var turnOff = false;\r
        if (args && args.length > 0 && args[0] == "on") {\r
            this.on();\r
            args = f(args).skip(1).a;\r
        }\r
        if (args && args.length > 0 && args[0] == "off") {\r
            turnOff = true;\r
            args = f(args).skip(1).a;\r
        }\r
        args = args ? args : [];\r
        args.unshift("debug:");\r
        this.show(true, ...args);\r
        if (turnOff) this.off();\r
    }\r
\r
    private show(halt: boolean, ...args: any[]) {\r
        if (!this._on) return;\r
        app.redraw();\r
        args = args ? args : [];\r
        var result = "";\r
        var arr = f(args).select(s => \`\${s}\`).where(s => s.length > 0)\r
        arr.do((s, i) => {\r
            i = i as number;\r
            result += (i < arr.length()-1 ? \`\${s}\\n \` : s);\r
        })\r
        if (halt) throw result;\r
        else alert(result);\r
    }\r
}\r
\r
var console = new Console();\r
\r
/**\r
 * Utility function to check if a string starts with a specific prefix\r
 * @param str - The main string to check\r
 * @param prefix - The prefix to look for\r
 * @returns True if the string starts with the prefix, otherwise false\r
 */\r
function stringStartsWith(str: string, prefix: string): boolean {\r
    return str.slice(0, prefix.length) === prefix;\r
}\r
\r
/**\r
 * Utility function to check if a string ends with a specific suffix\r
 * @param str - The main string to check\r
 * @param suffix - The suffix to look for\r
 * @returns True if the string ends with the suffix, otherwise false\r
 */\r
function stringEndsWith(str: string, suffix: string): boolean {\r
    return str.slice(-suffix.length) === suffix;\r
}\r
\r
/**\r
 * Utility function to join an array of strings with a specified separator\r
 * @param array - The array of strings to join\r
 * @param separator - The separator to use between strings\r
 * @returns A single string formed by joining the array elements\r
 */\r
function stringJoin(array: string[], separator: string): string {\r
    var result = "";\r
    for (var i = 0; i < array.length; i++) {\r
        result += array[i];\r
        if (i < array.length - 1) {\r
            result += separator; // Add separator only between elements\r
        }\r
    }\r
    return result;\r
}\r
\r
/**\r
 * Utility function to check if a string contains a specific substring\r
 * @param str - The main string to check\r
 * @param search - The substring to look for\r
 * @returns True if the string contains the substring, otherwise false\r
 */\r
function stringIncludes(str: string, search: string): boolean { return stringContains(str, search) }\r
function stringContains(str: string, search: string): boolean {\r
    if (str === undefined || str === null) return false;\r
    if (search === "") return true;\r
    \r
    var index = 0;\r
    var len = str.length;\r
    var searchLen = search.length;\r
    \r
    while (index + searchLen <= len) {\r
        if (str.slice(index, index + searchLen) === search) {\r
            return true;\r
        }\r
        index++;\r
    }\r
    return false;\r
}\r
\r
/**\r
 * Utility function to compare two arrays for equality\r
 * @param first - The first array to compare\r
 * @param second - The second array to compare\r
 * @returns True if the arrays are equal (same length and elements), otherwise false\r
 */\r
function arrayEquals(first: any[], second: any[]): boolean {\r
    if (!first && !second) return true;\r
    if (!first || !second) return false;\r
    if (first.length !== second.length) return false;\r
\r
    for (let i = 0; i < first.length; i++) {\r
        if (first[i] !== second[i]) return false;\r
    }\r
\r
    return true; \r
}\r
\r
interface Dictionary {\r
    [key: string]: any\r
}\r
\r
function dictionary(): Dictionary {\r
    return {};\r
}\r
\r
/**\r
 * Deep clones an object in ExtendScript, handling arrays, objects, and common edge cases.\r
 * @param source - The object to clone.\r
 * @param seen - A record of already-seen objects to handle circular references.\r
 * @returns The deep-cloned object.\r
 */\r
function clone<T>(obj: T): T {\r
    // Handle null, undefined, or primitive types directly\r
    var source: any = obj;\r
    function isPrimitive(value: any): boolean {\r
        return value === null || \r
            value === undefined || \r
            Object.prototype.toString.call(value) === "[object Boolean]" || \r
            Object.prototype.toString.call(value) === "[object Number]" || \r
            Object.prototype.toString.call(value) === "[object String]" || \r
            Object.prototype.toString.call(value) === "[object Function]" || \r
            Object.prototype.toString.call(value) === "[object Date]" || \r
            Object.prototype.toString.call(value) === "[object RegExp]";\r
    }\r
\r
    if (isPrimitive(source))\r
        return obj;\r
\r
    // Detect arrays (primitive approach for ES3/ES5)\r
    if (Object.prototype.toString.call(source) === "[object Array]") {\r
        var copy: any = [];\r
        for (var i = 0; i < (source as any[]).length; i++) {\r
            copy[i] = clone((source as any[])[i]);\r
        }\r
    }\r
    // Handle objects with no prototype (created via Object.create(null))\r
    else {\r
        var copy: any = {};\r
        for (var key in source) {\r
            if (Object.prototype.hasOwnProperty.call(source, key) && key != "parent") {\r
                try {\r
                    copy[key] = clone(source[key]);\r
                } catch (e) {\r
                    throw "key " + key + ", source " + source;\r
                }\r
            }\r
        }\r
    }\r
\r
    return copy as T;\r
}\r
\r
/**\r
 * Rounds a number to a specific number of decimals\r
 * @param value - The number to round\r
 * @param decimals - The number of decimals of precision\r
 * @returns The rounded value\r
 */\r
function roundPrecisely(value: number, decimals: number = 6): number {\r
    const factor = Math.pow(10, decimals);\r
    return Math.round(value * factor) / factor;\r
}\r
\r
/**\r
 * Normalizes file path separators to Windows style (backslashes)\r
 * and ensures no double separators\r
 * @param path - The file path to normalize\r
 * @returns Normalized path with proper separators\r
 */\r
function normalizePath(path: string): string {\r
    return path.replace(/[\\/\\\\]+/g, '\\\\');\r
}\r
\r
/**\r
 * Combines two paths, ensuring proper separator handling\r
 * @param path1 - First path\r
 * @param path2 - Second path\r
 * @returns Combined path with proper separators\r
 * \r
 * @example\r
 * // Returns "C:\\\\Scripts\\\\documents\\\\test.ai"\r
 * combinePaths("C:\\\\Scripts", "documents/test.ai")\r
 * \r
 * @example\r
 * // Returns "C:\\\\Scripts\\\\documents\\\\test.ai"\r
 * combinePaths("C:\\\\Scripts\\\\", "\\\\documents\\\\test.ai")\r
 */\r
function combinePaths(path1: string, path2: string): string {\r
    const normalized1 = normalizePath(path1);\r
    const normalized2 = normalizePath(path2);\r
\r
    // Remove trailing slash from first path and leading slash from second path\r
    const clean1 = stringEndsWith(normalized1, '\\\\') ? normalized1.slice(0, -1) : normalized1;\r
    const clean2 = stringStartsWith(normalized2, '\\\\') ? normalized2.slice(1) : normalized2;\r
\r
    return clean1 + '\\\\' + clean2;\r
}\r
\r
/**\r
 * Converts a negative index to a positive index within the bounds of the collection length.\r
 *\r
 * @param index - The index to evaluate (can be negative)\r
 * @param collectionLength - The length of the collection\r
 * @returns A valid positive index within the collection bounds\r
 * @throws Error if the evaluated index is out of bounds\r
 */\r
function evaluateNegativeIndex(index: number, collectionLength: number): number {\r
    var evaluatedIndex = index < 0 ? collectionLength + index : index;\r
    if (evaluatedIndex < 0 || evaluatedIndex >= collectionLength) {\r
        throw "Index " + index + " out of bounds for collection of length " + collectionLength;\r
    }\r
    return evaluatedIndex;\r
}\r
\r
/**\r
 * Converts a negative index to a positive index within the bounds of the collection length but maps -1 to the length of the array so the item gets inserted at the end.\r
 *\r
 * @param index - The index to evaluate (can be negative)\r
 * @param collectionLength - The length of the collection\r
 * @returns A valid positive index within the collection bounds\r
 * @throws Error if the evaluated index is out of bounds\r
 */\r
function evaluateNegativeInsertIndex(index: number, collectionLength: number): number {\r
    var evaluatedIndex = index < 0 ? collectionLength + index + 1 : index;\r
    if (evaluatedIndex < 0 || evaluatedIndex > collectionLength) {\r
        throw "Index " + index + " out of insert bounds for collection of length " + collectionLength;\r
    }\r
    return evaluatedIndex;\r
}\r
\r
/**\r
 * Evaluates a selector against a collection length and returns either:\r
 * - A string (when selector is a name)\r
 * - An array of indices (for all other valid selectors)\r
 * All indices are guaranteed to be within bounds [0, collectionLength-1]\r
 * \r
 * @param selector - The selector to evaluate\r
 * @param collectionLength - Length of the collection being indexed\r
 * @returns String name or array of valid indices\r
 * @throws Error for invalid selectors or out of bounds indices\r
 * \r
 * @example\r
 * evaluateSelector("MyName", 5)      // returns "MyName"\r
 * evaluateSelector(1, 5)             // returns [1]\r
 * evaluateSelector(-1, 5)            // returns [4]\r
 * evaluateSelector("1:3", 5)         // returns [1, 2, 3]\r
 * evaluateSelector("-2:", 5)         // returns [3, 4]\r
 * evaluateSelector([0, -1], 5)       // returns [0, 4]\r
 * evaluateSelector(["a", "b"], 5)    // returns ["a", "b"]\r
 */\r
function evaluateSelector(selector: Selector, collectionLength: number): string[] | number[] {\r
    // Handle undefined case\r
    if (selector === undefined) {\r
        return [0];  // Default to first item\r
    }\r
\r
    // Handle single number\r
    if (typeof selector === "number") {\r
        return [evaluateNegativeIndex(selector, collectionLength)];\r
    }\r
\r
    // Handle arrays\r
    if (selector instanceof Array) {\r
        // If it's a string array, return as is\r
        if (typeof selector[0] === "string") {\r
            return selector as string[];\r
        }\r
\r
        // Convert number array with negative index handling\r
        var resolvedIndices = [];\r
        for (var i = 0; i < selector.length; i++) {\r
            resolvedIndices.push(evaluateNegativeIndex(selector[i] as number, collectionLength));\r
        }\r
        return resolvedIndices;\r
    }\r
\r
    // Handle string\r
    if (typeof selector === "string") {\r
        // If doesn't start with number or :, it's a name\r
        if (!/^[0-9:-]/.test(selector)) {\r
            return [selector];\r
        }\r
\r
        // Handle empty string\r
        if (selector.length === 0) {\r
            throw "Empty selector";\r
        }\r
\r
        return evaluateRangeSelector(selector, collectionLength);\r
    }\r
\r
    throw "Invalid selector type";\r
}\r
\r
function evaluateRangeSelector(selector: string, collectionLength?: number): number[] {\r
    if (!selector) return []; // Empty selector returns an empty array\r
    if (collectionLength === 0 && selector == ":") return [];\r
\r
    // Split the selector by ":" and parse parts into numbers\r
    var parts: any[] = selector.split(":");\r
    if (parts.length == 0 || parts.length > 3) {\r
        "Selector has the wrong number of parts"\r
    }\r
    if (collectionLength !== undefined) {\r
        if (parts.length >= 1 && parts[0] == "")\r
            parts[0] = "0";\r
        if (parts.length == 2 && parts[1] == "")\r
            parts[1] = \`\${collectionLength-1}\`;\r
        if (parts.length == 3 && parts[1] == "")\r
            parts[1] = "1";\r
        if (parts.length == 3 && parts[2] == "")\r
            parts[2] = \`\${collectionLength-1}\`;\r
    }\r
    for (var i = 0; i < parts.length; i++) {\r
        parts[i] = parseInt(parts[i], 10);\r
        if (isNaN(parts[i])) {\r
            throw "Selector contains invalid numbers";\r
        }\r
    }\r
\r
    var len = parts.length;\r
    if (len === 1) {\r
        // Single number, return it as an array\r
        return [\r
            collectionLength !== undefined ? \r
            evaluateNegativeIndex(parts[0], collectionLength) : \r
            parts[0]\r
        ];\r
    } else if (len === 2) {\r
        // Range with a single step (inclusive range)\r
        var start: number = parts[0];\r
        var end: number = parts[1];\r
        if (collectionLength !== undefined) {\r
            start = evaluateNegativeIndex(start, collectionLength);\r
            end = evaluateNegativeIndex(end, collectionLength);\r
        }\r
        var range = [];\r
        if (start <= end) {\r
            for (var i = start; i <= end; i++) {\r
                range.push(i);\r
            }\r
        } else {\r
            // Decreasing range\r
            for (var i = start; i >= end; i--) {\r
                range.push(i);\r
            }\r
        }\r
        return range;\r
    } else if (len === 3) {\r
        // Range with custom step\r
        var start: number = parts[0];\r
        var step: number = parts[1];\r
        var end: number = parts[2];\r
\r
        if (collectionLength !== undefined) {\r
            start = evaluateNegativeIndex(start, collectionLength);\r
            end = evaluateNegativeIndex(end, collectionLength);\r
        }\r
        if (step === 0 || (start < end && step < 0) || (start > end && step > 0)) {\r
            throw new Error("Invalid step value in the range!");\r
        }\r
\r
        var range = [];\r
        if (start < end) {\r
            for (var i = start; i <= end; i += step) {\r
                range.push(i);\r
            }\r
        } else {\r
            for (var i = start; i >= end; i += step) {\r
                range.push(i);\r
            }\r
        }\r
        return range;\r
    } else {\r
        throw new Error("Invalid range selector format!");\r
    }\r
}\r
\r
class A<T> {\r
    a: T[];\r
\r
    constructor(array?: T[]) {\r
        if (array === undefined) array = []; \r
        this.a = array;\r
    }\r
\r
    equals(other: T[] | A<T>): boolean {\r
        if (!other) return false;\r
        var that = other instanceof Array ? other : other.a\r
        return arrayEquals(this.a, that);\r
    }\r
\r
    doesntEqual(other: T[] | A<T>): boolean {\r
        return !this.equals(other);\r
    }\r
\r
    at(index: number): T {\r
        index = evaluateNegativeIndex(index, this.a.length);\r
        return this.a[index];\r
    }\r
\r
    get(selector: string): A<T> {\r
        var indexes = evaluateRangeSelector(selector, this.a.length);\r
        var result = new A<T>();\r
        for (var i = 0; i < indexes.length; i++) {\r
            result.push(this.a[indexes[i]]);\r
        }\r
        return result;\r
    }\r
\r
    set(index: number, item: T): A<T> {\r
        index = evaluateNegativeIndex(index, this.a.length);\r
        this.a[index] = item;\r
        return this;\r
    }\r
\r
    length(): number { return this.a.length; }\r
\r
    insertAt(index: number, item: T): A<T> {\r
        const insertAt = evaluateNegativeInsertIndex(index, this.a.length);\r
        this.a.splice(insertAt, 0, item);\r
        return this;\r
    }\r
\r
    insertManyAt(index: number, items: T[]): A<T> {\r
        const insertAt = evaluateNegativeInsertIndex(index, this.a.length);\r
        this.a.splice(insertAt, 0, ...items);\r
        return this;\r
    }\r
\r
    delete(item: T): A<T> {\r
        for (let i = 0; i < this.a.length; i++) {\r
            if (this.a[i] === item) {\r
                this.a.splice(i, 1);\r
                break;\r
            }\r
        }\r
        return this;\r
    }\r
\r
    deleteMany(items: T[]): A<T> {\r
        f(items).forEach(item => this.delete(item));\r
        return this;\r
    }\r
\r
    deleteAt(index: number, count: number = 1): A<T> {\r
        const removeFrom = evaluateNegativeIndex(index, this.a.length);\r
        this.a.splice(removeFrom, count);\r
        return this;\r
    }\r
\r
    deleteAll(): A<T> {\r
        this.a.length = 0;\r
        return this;\r
    }\r
\r
    forEach(callback: (item: T, index?: number) => any | void): any | void {\r
        let result: any;\r
        for (let i = 0; i < this.a.length; i++) {\r
            result = callback(this.a[i], i);\r
        }\r
        return result;\r
    }\r
\r
    do(callback: (item: T, index?: number) => any | void): A<T> {\r
        this.forEach(callback);\r
        return this;\r
    }\r
\r
    doOnce(callback: (item: T, index?: number) => boolean): boolean {\r
        for (let i = 0; i < this.a.length; i++) {\r
            if (callback(this.a[i], i)) {\r
                return true;\r
            }\r
        }\r
        return false;\r
    }\r
\r
    select<U>(selector: (element: T) => U): A<U> {\r
        const result = new A<U>();\r
        for (let i = 0; i < this.a.length; i++) {\r
            result.push(selector(this.a[i]));\r
        }\r
        return result;\r
    }\r
\r
    where(predicate: (element: T) => boolean): A<T> {\r
        const result = new A<T>();\r
        for (let i = 0; i < this.a.length; i++) {\r
            if (predicate(this.a[i])) {\r
                result.push(this.a[i]);\r
            }\r
        }\r
        return result;\r
    }\r
\r
    first(predicate?: (element: T) => boolean): T {\r
        if (!predicate) return this.a.length > 0 ? this.a[0] : undefined as any as T;\r
        for (let i = 0; i < this.a.length; i++) {\r
            if (predicate(this.a[i])) return this.a[i];\r
        }\r
        return undefined as any as T;\r
    }\r
\r
    firstIndex(predicate?: (element: T) => boolean): number {\r
        if (!predicate) return this.a.length > 0 ? 0 : -1;\r
        for (let i = 0; i < this.a.length; i++) {\r
            if (predicate(this.a[i])) return i;\r
        }\r
        return -1;\r
    }\r
\r
    last(predicate?: (element: T) => boolean): T | undefined {\r
        if (!predicate) return this.a.length > 0 ? this.a[this.a.length - 1] : undefined;\r
        for (let i = this.a.length - 1; i >= 0; i--) {\r
            if (predicate(this.a[i])) return this.a[i];\r
        }\r
        return undefined;\r
    }\r
\r
    lastIndex(predicate?: (element: T) => boolean): number {\r
        if (!predicate) return this.a.length > 0 ? this.a.length - 1 : -1;\r
        for (let i = this.a.length - 1; i >= 0; i--) {\r
            if (predicate(this.a[i])) return i;\r
        }\r
        return -1;\r
    }\r
\r
    any(predicate?: (element: T) => boolean): boolean {\r
        if (!predicate) return this.a.length > 0;\r
        for (let i = 0; i < this.a.length; i++) {\r
            if (predicate(this.a[i])) return true;\r
        }\r
        return false;\r
    }\r
\r
    all(predicate: (element: T) => boolean): boolean {\r
        return this.length() == this.where(predicate).length();\r
    }\r
\r
    includes(item: T): boolean {\r
        return this.any(i => i == item);\r
    }\r
\r
    // Array methods\r
    push(...items: T[]): A<T> {\r
        this.a.push(...items);\r
        return this;\r
    }\r
\r
    pop(): T | undefined {\r
        return this.a.pop();\r
    }\r
\r
    splice(start: number, deleteCount?: number, ...items: T[]): A<T> {\r
        this.a.splice(start, deleteCount, ...items);\r
        return this;\r
    }\r
\r
    slice(start?: number, end?: number): A<T> {\r
        return new A(this.a.slice(start, end));\r
    }\r
\r
    shift(): T | undefined {\r
        return this.a.shift();\r
    }\r
\r
    unshift(...items: T[]): A<T> {\r
        this.a.unshift(...items);\r
        return this;\r
    }\r
\r
    reverse(): A<T> {\r
        this.a.reverse();\r
        return this;\r
    }\r
\r
    sort(compareFunction?: (a: T, b: T) => number): A<T> {\r
        this.a.sort(compareFunction);\r
        return this;\r
    }\r
\r
    join(separator: string): string {\r
        return stringJoin(this.select(x => x + "").a, separator);\r
    }\r
\r
    skip(count: number): A<T> {\r
        if (count >= this.length()) return f([]);\r
        return this.get(\`\${count}:\`)\r
    }\r
\r
    take(count: number): A<T> {\r
        count = Math.min(count, this.length());\r
        return this.get(\`0:\${count-1}\`);\r
    }\r
\r
    toString() {\r
        if (this.a === undefined) return "[undefined]";\r
        return this.a.toString();\r
    }\r
\r
    static empty(): A<any> { return new A<any>([]) };\r
}\r
\r
function f<T>(array: T[] | A<T> = A.empty()): A<T> {\r
    if (array instanceof A) return array as A<T>;\r
    return new A(array);\r
}\r
\r
function r(selector: string, length?: number): A<number> {\r
    return f(evaluateRangeSelector(selector, length));\r
}\r
\r
class Region {\r
    private _leftAbs: number;\r
    private _topAbs: number;\r
    private _rightAbs: number;\r
    private _bottomAbs: number;\r
\r
    // Measure\r
    unit(): number { return this._rightAbs - this._leftAbs; }\r
\r
    // Absolute positions\r
    boundsAbs(): [number, number, number, number] { return [this.leftAbs(), this.topAbs(), this.rightAbs(), this.bottomAbs()]; }\r
    rectAbs(): Rect { return this.boundsAbs(); }\r
    topAbs() { return this._topAbs; }\r
    leftAbs() { return this._leftAbs; }\r
    rightAbs() { return this._rightAbs; }\r
    bottomAbs() { return this._bottomAbs; }\r
    centerAbs(): Position { return [(this._rightAbs + this._leftAbs) / 2, (this._topAbs + this._bottomAbs) / 2]; }\r
    widthAbs() { return this.rightAbs() - this.leftAbs(); }\r
    heightAbs() { return this.topAbs() - this.bottomAbs(); }\r
\r
    // Relative positions\r
    bounds(): [number, number, number, number] { return [this.left(), this.top(), this.right(), this.bottom()]; }\r
    rect(): Rect { return this.bounds(); }\r
    left() { return this.toRelativeLocation(this.leftAbs(), "x"); }\r
    right() { return this.toRelativeLocation(this.rightAbs(), "x"); }\r
    top() { return this.toRelativeLocation(this.topAbs(), "y"); }\r
    bottom() { return this.toRelativeLocation(this.bottomAbs(), "y"); }\r
    center(newCenter?: Position) {\r
        if (newCenter) this.moveTo(this.toAbsolutePosition(newCenter));\r
        return this.toRelativePosition(this.centerAbs());\r
    }\r
\r
    // Width and height with optional resizing\r
    width(newWidth?: number, proportional = true) {\r
        if (newWidth) {\r
            const scaleFactor = newWidth / this.width();\r
            this.size([newWidth, proportional ? this.height() * scaleFactor : this.height()]);\r
        }\r
        return Math.abs(this.left() - this.right());\r
    }\r
\r
    height(newHeight?: number, proportional = true) {\r
        if (newHeight) {\r
            const scaleFactor = newHeight / this.height();\r
            this.size([proportional ? this.width() * scaleFactor : this.width(), newHeight]);\r
        }\r
        return Math.abs(this.top() - this.bottom());\r
    }\r
\r
    // Set new size\r
    size(newSize?: Size) {\r
        if (newSize) {\r
            const center = this.centerAbs();\r
            const newWidth = this.toAbsoluteUnits(newSize[0]);\r
            const newHeight = this.toAbsoluteUnits(newSize[1]);\r
\r
            this._leftAbs = center[0] - newWidth / 2;\r
            this._rightAbs = center[0] + newWidth / 2;\r
            this._topAbs = center[1] + newHeight / 2;\r
            this._bottomAbs = center[1] - newHeight / 2;\r
        }\r
        return [this.width(), this.height()];\r
    }\r
\r
    constructor(left: number, top: number, right: number, bottom: number) {\r
        if (left > right || bottom > top) \r
            throw \`Invalid Region: \${[left, top, right, bottom]}\`;\r
        this._leftAbs = left;\r
        this._topAbs = top;\r
        this._bottomAbs = bottom;\r
        this._rightAbs = right;\r
    }\r
\r
    floor(): Region {\r
        this._leftAbs = Math.floor(this._leftAbs);\r
        this._topAbs = Math.floor(this._topAbs);\r
        this._rightAbs = Math.floor(this._rightAbs);\r
        this._bottomAbs = Math.floor(this._bottomAbs);\r
        return this;\r
    }\r
\r
    moveTo(newCenter: Position) {\r
        const deltaX = newCenter[0] - this.centerAbs()[0];\r
        const deltaY = newCenter[1] - this.centerAbs()[1];\r
        this._leftAbs += deltaX;\r
        this._rightAbs += deltaX;\r
        this._topAbs += deltaY;\r
        this._bottomAbs += deltaY;\r
    }\r
\r
    toRelativeUnits(length: number): number {\r
        // Normalize length based on width (unit becomes total width for scaling)\r
        return this.round(length / this.widthAbs());\r
    }\r
    \r
    toRelativeLocation(location: number, axis: "x" | "y"): number {\r
        const left = this.leftAbs();\r
        const bottom = this.bottomAbs();\r
        const unit = this.unit();\r
    \r
        return this.round\r
        (\r
            axis === "x"\r
                ? (location - left) / unit // Normalize x-axis [0, 1]\r
                : (location - bottom) / unit // Normalize y-axis proportional to width\r
        );\r
    }\r
    \r
    toRelativePosition(position: Position): Position {\r
        const x = this.toRelativeLocation(position[0], "x");\r
        const y = this.toRelativeLocation(position[1], "y");\r
        return [\r
            this.round(x), \r
            this.round(y)\r
        ];\r
    }\r
    \r
    toAbsoluteUnits(length: number): number {\r
        // Scale relative length back to absolute based on width\r
        return roundPrecisely(length * this.widthAbs());\r
    }\r
    \r
    toAbsoluteLocation(location: number, axis: "x" | "y"): number {\r
        const left = this.leftAbs();\r
        const bottom = this.bottomAbs();\r
        const unit = this.unit();\r
    \r
        return this.round(\r
            axis === "x"\r
                ? left + location * unit // Convert back to absolute x\r
                : bottom + location * unit // Convert back to absolute y (proportional to width)\r
        );\r
    }\r
    \r
    toAbsolutePosition(position: Position): Position {\r
        const x = this.toAbsoluteLocation(position[0], "x");\r
        const y = this.toAbsoluteLocation(position[1], "y");\r
        return [this.round(x), this.round(y)];\r
    }\r
\r
    angle(position: Position, units: "degrees" | "radians" = "degrees"): number {\r
        const center = this.center();\r
        const deltaX = position[0] - center[0];\r
        const deltaY = position[1] - center[1];\r
        const radians = Math.atan2(deltaY, deltaX); // Returns angle in radians\r
    \r
        // Normalize and convert based on units\r
        if (units === "degrees") return Region.to360(Region.toDegrees(radians));\r
        return Region.to2Pi(radians);\r
    }\r
    \r
    // Returns the radius (distance from the center) in relative units\r
    radius(position: Position): number {\r
        const center = this.center();\r
        const deltaX = position[0] - center[0];\r
        const deltaY = position[1] - center[1];\r
        return Math.sqrt(deltaX ** 2 + deltaY ** 2);\r
    }\r
\r
    round(value: number) {\r
        return roundPrecisely(value, 3);\r
    }\r
\r
    toString() {\r
        return \`[\${this.bounds()}], [\${this.boundsAbs()}]\`;\r
    }\r
\r
    static fromRect(rect: Rect): Region {\r
        return new Region(rect[0], rect[1], rect[2], rect[3]);\r
    }\r
\r
    static fromArray(rect: [number, number, number, number]): Region {\r
        return Region.fromRect(rect);\r
    }\r
\r
    static toRadians(degrees: number): number {\r
        return Region.to2Pi((degrees * Math.PI) / 180);\r
    }\r
    \r
    // Converts radians to degrees\r
    static toDegrees(radians: number): number {\r
        return Region.to360((radians * 180) / Math.PI);\r
    }\r
\r
    static to2Pi(radians: number): number {\r
        const twoPi = 2 * Math.PI;\r
        return ((radians % twoPi) + twoPi) % twoPi;\r
    }\r
    \r
    // Normalizes degrees to the range [0, 360)\r
    static to360(degrees: number): number {\r
        const fullCircle = 360;\r
        return ((degrees % fullCircle) + fullCircle) % fullCircle;\r
    }\r
}\r
\r
class TestClass {\r
    decorateExceptions: boolean = true;\r
    init() {}\r
\r
    runTests(): void {\r
        var self = this as any;\r
        const className = this.constructor.name;\r
\r
        for (var key in self) {\r
            if (stringStartsWith(key, "test") && typeof self[key] === "function") {\r
                if (this.decorateExceptions) {\r
                    try {\r
                        this.init();\r
                        self[key]();\r
                    } catch (e) {\r
                        throw \`\${className}.\${key}: \${e}\`;\r
                    }\r
                } else {\r
                    this.init();\r
                    self[key]();\r
                }\r
            }\r
        }\r
    }\r
\r
    assertEquals(actual: any, expected: any, message: string = "", tolerance: number = 0.0001): void {\r
        const areNumbers = typeof actual === "number" && typeof expected === "number";\r
        const areArrays = actual instanceof Array && expected instanceof Array;\r
\r
        if (areNumbers) {\r
            // Compare numbers within tolerance\r
            if (Math.abs(actual - expected) > tolerance) {\r
                throw this.formatError(message, actual, expected);\r
            }\r
        } else if (areArrays) {\r
            // Compare arrays deeply\r
            if (actual.length !== expected.length) {\r
                throw this.formatError(message, actual, expected);\r
            }\r
            for (let i = 0; i < actual.length; i++) {\r
                this.assertEquals(actual[i], expected[i], \`\${message} (index \${i})\`, tolerance);\r
            }\r
        } else if (actual != expected) { // Use '!=' for type coercion if necessary\r
            throw this.formatError(message, actual, expected);\r
        }\r
    }\r
\r
    assertThrows(test: () => void, error: string) {\r
        try {\r
            test()\r
        } catch {\r
            return;\r
        }\r
        throw error;\r
    }\r
\r
    formatError(message: string, actual: any, expected: any): string {\r
        const formattedMessage = message ? \`\${message} - \` : "";\r
        return \`\${formattedMessage}Expected: \${this.toString(expected)}, but got: \${this.toString(actual)}\`;\r
    }\r
\r
    toString(value: any): string {\r
        if (value instanceof Array) {\r
            return "[" + f(value).select(x => x?.toString()).join(", ") + "]";\r
        } else if (typeof value === "object" && value !== null) {\r
            const result = [];\r
            for (var key in value) {\r
                if (value.hasOwnProperty(key)) {\r
                    result.push(key + ": " + value[key]?.toString());\r
                }\r
            }\r
            return "{" + result.join(", ") + "}";\r
        } else {\r
            return value !== undefined ? value.toString() : "undefined";\r
        }\r
    }\r
}\r
\r
class UtilTests extends TestClass {\r
    testEvaluateNegativeIndex() {\r
        // Standard positive indices\r
        if (evaluateNegativeIndex(0, 5) !== 0) throw "1: Expected 0 for index 0";\r
        if (evaluateNegativeIndex(3, 5) !== 3) throw "2: Expected 3 for index 3";\r
\r
        // Negative indices\r
        if (evaluateNegativeIndex(-1, 5) !== 4) throw "3: Expected 4 for index -1";\r
        if (evaluateNegativeIndex(-5, 5) !== 0) throw "4: Expected 0 for index -5";\r
\r
        // Out-of-bounds indices\r
        this.assertThrows(() => evaluateNegativeIndex(5, 5), "5: Expected out-of-bounds index to throw");\r
        this.assertThrows(() => evaluateNegativeIndex(-6, 5), "6: Expected out-of-bounds index to throw");\r
    }\r
\r
    testEvaluateNegativeInsertIndex() {\r
        // Standard positive indices\r
        if (evaluateNegativeInsertIndex(0, 5) !== 0) throw "7: Expected 0 for insert index 0";\r
        if (evaluateNegativeInsertIndex(5, 5) !== 5) throw "8: Expected 5 for insert index 5";\r
\r
        // Negative indices\r
        if (evaluateNegativeInsertIndex(-1, 5) !== 5) throw "9: Expected 5 for insert index -1";\r
        if (evaluateNegativeInsertIndex(-5, 5) !== 1) throw "10: Expected 1 for insert index -5";\r
\r
        // Out-of-bounds indices\r
        this.assertThrows(() => evaluateNegativeInsertIndex(-7, 5), "11: Expected out-of-bounds index to throw");\r
        this.assertThrows(() => evaluateNegativeInsertIndex(6, 5), "12: Expected out-of-bounds index to throw");\r
    }\r
\r
    testEvaluateSelector() {\r
        // Single number\r
        if (evaluateSelector(1, 5).toString() !== [1].toString())\r
            throw "13: Expected [1] for selector 1";\r
        if (evaluateSelector(-1, 5).toString() !== [4].toString())\r
            throw "14: Expected [4] for selector -1";\r
\r
        // Array of numbers\r
        if (evaluateSelector([0, -1], 5).toString() !== [0, 4].toString())\r
            throw "15: Expected [0, 4] for selector [0, -1]";\r
\r
        // Array of strings\r
        const stringSelector = ["a", "b"];\r
        if (evaluateSelector(stringSelector, 5).toString() !== stringSelector.toString())\r
            throw "16: Expected [\\"a\\", \\"b\\"] for string selector";\r
\r
        // Range selectors\r
        if (evaluateSelector("1:3", 5).toString() !== [1, 2, 3].toString())\r
            throw "17: Expected [1, 2, 3] for selector '1:3'";\r
        if (evaluateSelector("-2:", 5).toString() !== [3, 4].toString())\r
            throw "18: Expected [3, 4] for selector '-2:'";\r
\r
        // Invalid selectors\r
        if (evaluateSelector("test", 5)[0] != "test")\r
            throw "19: Expected a non-reange selector to be ['test']";\r
\r
    }\r
\r
    testEvaluateRangeSelector() {\r
        // Single number\r
        if (evaluateRangeSelector("1").toString() !== [1].toString())\r
            throw "20: Expected [1] for selector '1'";\r
        if (evaluateRangeSelector("-1", 5).toString() !== [4].toString())\r
            throw "21: Expected [4] for selector '-1'";\r
\r
        // Inclusive range\r
        if (evaluateRangeSelector("1:3", 5).toString() !== [1, 2, 3].toString())\r
            throw "22: Expected [1, 2, 3] for selector '1:3'";\r
\r
        // Custom step\r
        if (evaluateRangeSelector("1:2:5", 6).toString() !== [1, 3, 5].toString())\r
            throw "23: Expected [1, 3, 5] for selector '1:2:5'";\r
\r
        // Decreasing range\r
        if (evaluateRangeSelector("3:1", 5).toString() !== [3, 2, 1].toString())\r
            throw "24: Expected [3, 2, 1] for selector '3:1'";\r
\r
        // Invalid selectors\r
        this.assertThrows(() => evaluateRangeSelector("1:-1:3", 5), "25: Expected invalid step to throw");\r
        this.assertThrows(() => evaluateRangeSelector("invalid", 5), "26: Expected invalid selector to throw");\r
    }\r
}\r
\r
class ArrayTests extends TestClass {\r
    testAt() {\r
        const arr = f([10, 20, 30, 40]);\r
\r
        if (arr.at(0) !== 10) throw "1: Expected 10 at index 0";\r
        if (arr.at(2) !== 30) throw "2: Expected 30 at index 2";\r
        if (arr.at(3) !== 40) throw "3: Expected 40 at index 3";\r
        if (arr.at(-1) !== 40) throw "4: Expected 40 at negative index -1";\r
        if (arr.at(-4) !== 10) throw "5: Expected 10 at negative index -4";\r
\r
        this.assertThrows(() => arr.at(10), "6: Expected out-of-bounds index to throw");\r
        this.assertThrows(() => arr.at(-10), "7: Expected out-of-bounds negative index to throw");\r
    }\r
\r
    testGet() {\r
        const arr = f([10, 20, 30, 40, 50]);\r
\r
        const result = arr.get("1:3");\r
        if (result.a.length !== 3 || result.a[0] !== 20 || result.a[1] !== 30 || result.a[2] !== 40)\r
            throw "8: Expected to get elements at indices 1, 2, and 3";\r
\r
        const single = arr.get("2");\r
        if (single.a.length !== 1 || single.a[0] !== 30)\r
            throw "9: Expected to get a single element at index 2";\r
\r
        const emptyResult = arr.get("");\r
        if (emptyResult.a.length !== 0)\r
            throw "10: Expected empty result for empty selector";\r
\r
        const weird = arr.get("3:-1");\r
        if (weird.length() != 2 || weird.at(0) != 40 || weird.at(1) != 50)\r
            throw "11: Expected -1 to map to 4";\r
\r
        this.assertThrows(() => arr.get("3:5"), "12: Expected 5 out of bounds");\r
    }\r
\r
    testInsertAt() {\r
        var arr = f([1, 2, 3]);\r
\r
        arr.insertAt(1, 10);\r
        if (arr.a[0] !== 1 || arr.a[1] !== 10 || arr.a[2] !== 2) \r
            throw "13: Expected 10 to be inserted at index 1";\r
\r
        arr = f([1, 2, 3]);\r
\r
        arr.insertAt(-1, 20);\r
        if (arr.a.length != 4 || arr.a[3] != 20)\r
            throw "14: Expected 20 to be inserted as the last element";\r
\r
        arr = f([1, 2, 3]);\r
\r
        this.assertThrows(() => arr.insertAt(4, 20), "15: Expected 4 to be out of bounds");\r
\r
        arr = f([1, 2, 3]);\r
\r
        arr.insertAt(0, 100);\r
        if (arr.length() !== 4 || arr.at(0) !== 100 || arr.at(1) !== 1)\r
            throw "16: Expected 100 to be inserted at the start of the array";\r
    }\r
\r
    testInsertManyAt() {\r
        var arr = f([1, 2, 3]);\r
\r
        arr.insertManyAt(1, [10, 20]);\r
        if (arr.a[0] !== 1 || arr.a[1] !== 10 || arr.a[2] !== 20 || arr.a[3] !== 2)\r
            throw "17: Expected 10 and 20 to be inserted at index 1";\r
\r
        var arr = f([1, 2, 3]);\r
\r
        arr.insertManyAt(-1, [30, 40]);\r
        if (arr.at(3) !== 30 || arr.at(4) !== 40)\r
            throw "18: Expected 30 and 40 to be inserted before the last element";\r
\r
        var arr = f([1, 2, 3]);\r
\r
        arr.insertManyAt(3, [50, 60]);\r
        if (arr.at(3) !== 50 || arr.at(4) !== 60)\r
            throw "19: Expected 50 and 60 to be inserted at the end of the array";\r
\r
        var arr = f([1, 2, 3]);\r
\r
        arr.insertManyAt(1, []);\r
        if (arr.a.length !== 3)\r
            throw "20: Expected no change when inserting an empty array";\r
    }\r
\r
    testDelete() {\r
        const arr = f([1, 2, 3]);\r
\r
        arr.delete(2);\r
        if (arr.a.length !== 2) throw "21: Expected length to be 2 after delete";\r
        if (arr.includes(2)) throw "22: Expected element 2 to be deleted";\r
\r
        arr.delete(4);\r
        if (arr.a.length !== 2) throw "23: Expected no change when deleting non-existent element";\r
    }\r
\r
    testDeleteMany() {\r
        const arr = f([1, 2, 3, 4]);\r
\r
        arr.deleteMany([2, 4]);\r
        if (arr.a.length !== 2 || arr.includes(2) || arr.includes(4))\r
            throw "24: Expected elements 2 and 4 to be deleted";\r
\r
        arr.deleteMany([]);\r
        if (arr.a.length !== 2)\r
            throw "25: Expected no change when deleting an empty list of items";\r
\r
        arr.deleteMany([5]);\r
        if (arr.a.length !== 2)\r
            throw "26: Expected no change when deleting a non-existent element";\r
    }\r
\r
    testDeleteAt() {\r
        var arr = f([1, 2, 3, 4]);\r
\r
        arr.deleteAt(1, 2);\r
        if (arr.a.length !== 2 || arr.a[0] !== 1 || arr.a[1] !== 4)\r
            throw "27: Expected elements at indices 1 and 2 to be deleted";\r
\r
        arr.deleteAt(-1);\r
        if (arr.length() !== 1 || arr.a[0] !== 1)\r
            throw "28: Expected last element to be deleted for negative index";\r
\r
        this.assertThrows(() => arr.deleteAt(1), "29: Expected 1 to be out of bounds");\r
    }\r
\r
    testSelect() {\r
        const arr = f([1, 2, 3]);\r
\r
        const doubled = arr.select(num => num * 2);\r
        if (doubled.a.length !== 3 || doubled.a[0] !== 2 || doubled.a[1] !== 4 || doubled.a[2] !== 6)\r
            throw "30: Expected elements to be doubled";\r
\r
        const emptyArr = f<number>([]);\r
        const emptyResult = emptyArr.select(num => num * 2);\r
        if (emptyResult.a.length !== 0) throw "31: Expected select to return empty array for empty input";\r
    }\r
\r
    testDoOnce() {\r
        const arr = f([1, 2, 3]);\r
\r
        const foundEven = arr.doOnce(num => num % 2 === 0);\r
        if (!foundEven) throw "32: Expected doOnce to find the first even number";\r
\r
        const noMatch = arr.doOnce(num => num > 10);\r
        if (noMatch) throw "33: Expected doOnce to return false when no elements match";\r
\r
        const emptyArr = f<number>([]);\r
        const emptyDoOnce = emptyArr.doOnce(() => true);\r
        if (emptyDoOnce) throw "34: Expected doOnce to return false for an empty array";\r
    }\r
\r
    testFirst() {\r
        const arr = f([1, 2, 3]);\r
\r
        const first = arr.first();\r
        if (first !== 1) throw "35: Expected first element to be 1";\r
\r
        const firstEven = arr.first(num => num % 2 === 0);\r
        if (firstEven !== 2) throw "36: Expected first even element to be 2";\r
\r
        const noMatch = arr.first(num => num > 10);\r
        if (noMatch !== undefined)\r
            throw "37: Expected undefined when no element matches the predicate";\r
\r
        const emptyArr = f<number>([]);\r
        const firstFromEmpty = emptyArr.first();\r
        if (firstFromEmpty !== undefined)\r
            throw "38: Expected undefined when calling first on an empty array";\r
    }\r
\r
    testLast() {\r
        const arr = f([1, 2, 3]);\r
\r
        const last = arr.last();\r
        if (last !== 3) throw "39: Expected last element to be 3";\r
\r
        const lastEven = arr.last(num => num % 2 === 0);\r
        if (lastEven !== 2) throw "40: Expected last even element to be 2";\r
\r
        const noMatch = arr.last(num => num > 10);\r
        if (noMatch !== undefined)\r
            throw "41: Expected undefined when no element matches the predicate";\r
\r
        const emptyArr = f<number>([]);\r
        const lastFromEmpty = emptyArr.last();\r
        if (lastFromEmpty !== undefined)\r
            throw "42: Expected undefined when calling last on an empty array";\r
    }\r
\r
    testFirstIndex() {\r
        const arr = f([1, 2, 3]);\r
\r
        const firstEvenIndex = arr.firstIndex(num => num % 2 === 0);\r
        if (firstEvenIndex !== 1) throw "43: Expected first even index to be 1";\r
\r
        const noMatch = arr.firstIndex(num => num > 10);\r
        if (noMatch !== -1)\r
            throw "44: Expected firstIndex to return -1 for no match";\r
\r
        const emptyArr = f<number>([]);\r
        const fromEmpty = emptyArr.firstIndex(num => true);\r
        if (fromEmpty !== -1)\r
            throw "45: Expected firstIndex to return -1 for empty array";\r
    }\r
\r
    testLastIndex() {\r
        const arr = f([1, 2, 3]);\r
\r
        const lastEvenIndex = arr.lastIndex(num => num % 2 === 0);\r
        if (lastEvenIndex !== 1) throw "46: Expected last even index to be 1";\r
\r
        const noMatch = arr.lastIndex(num => num > 10);\r
        if (noMatch !== -1)\r
            throw "47: Expected lastIndex to return -1 for no match";\r
\r
        const emptyArr = f<number>([]);\r
        const fromEmpty = emptyArr.lastIndex(num => true);\r
        if (fromEmpty !== -1)\r
            throw "48: Expected lastIndex to return -1 for empty array";\r
    }\r
\r
    testWhere() {\r
        const arr = f([1, 2, 3, 4]);\r
\r
        const evens = arr.where(num => num % 2 === 0);\r
        if (evens.a.length !== 2 || evens.a[0] !== 2 || evens.a[1] !== 4)\r
            throw "49: Expected where to filter even numbers";\r
\r
        const noMatch = arr.where(num => num > 10);\r
        if (noMatch.a.length !== 0)\r
            throw "50: Expected where to return empty array for no matches";\r
\r
        const emptyArr = f<number>([]);\r
        const fromEmpty = emptyArr.where(num => num % 2 === 0);\r
        if (fromEmpty.a.length !== 0)\r
            throw "51: Expected where to return empty array for empty input";\r
    }\r
\r
    testAny() {\r
        const arr = f([1, 2, 3]);\r
\r
        const hasEven = arr.any(num => num % 2 === 0);\r
        if (!hasEven) throw "52: Expected any to return true for even numbers";\r
\r
        const noMatch = arr.any(num => num > 10);\r
        if (noMatch)\r
            throw "53: Expected any to return false for no matching elements";\r
\r
        const emptyArr = f<number>([]);\r
        const anyFromEmpty = emptyArr.any();\r
        if (anyFromEmpty)\r
            throw "54: Expected any to return false for empty array";\r
    }\r
}\r
\r
class RegionTests extends TestClass {\r
    testRegionInitialization() {\r
        const region = new Region(50, 100, 150, 0); // left, top, right, bottom\r
        this.assertEquals(region.boundsAbs(), [50, 100, 150, 0], "Region absolute bounds incorrect");\r
    }\r
\r
    testToRelativeLocation() {\r
        const region = new Region(50, 100, 150, 0); // Width = 100\r
        this.assertEquals(region.toRelativeLocation(50, "x"), 0, "Left boundary should map to 0");\r
        this.assertEquals(region.toRelativeLocation(150, "x"), 1, "Right boundary should map to 1");\r
        this.assertEquals(region.toRelativeLocation(0, "y"), 0, "Bottom boundary should map to 0");\r
        this.assertEquals(region.toRelativeLocation(100, "y"), 1, "Top boundary should map proportionally to 1");\r
    }\r
\r
    testToRelativePosition() {\r
        const region = new Region(50, 100, 150, 0); // left, top, right, bottom\r
        this.assertEquals(region.toRelativePosition([50, 0]), [0, 0], "Relative position for bottom-left incorrect");\r
        this.assertEquals(region.toRelativePosition([150, 100]), [1, 1], "Relative position for top-right incorrect");\r
    }\r
\r
    testWidthAndHeight() {\r
        const region = new Region(50, 100, 150, 0); // Width = 100, Height = 100\r
        this.assertEquals(region.width(), 1, "Normalized width should be 1");\r
        this.assertEquals(region.height(), 1, "Normalized height should be 1 (proportional to width)");\r
    }\r
\r
    testToAbsoluteLocation() {\r
        const region = new Region(50, 100, 150, 0); // Width = 100\r
        this.assertEquals(region.toAbsoluteLocation(0, "x"), 50, "Relative x=0 should map to left boundary");\r
        this.assertEquals(region.toAbsoluteLocation(1, "x"), 150, "Relative x=1 should map to right boundary");\r
        this.assertEquals(region.toAbsoluteLocation(0, "y"), 0, "Relative y=0 should map to bottom boundary");\r
        this.assertEquals(region.toAbsoluteLocation(1, "y"), 100, "Relative y=1 should map to top boundary");\r
    }\r
\r
    testAngle() {\r
        const region = new Region(50, 100, 150, 0); // Region in normalized coordinates\r
        this.assertEquals(region.angle([0.5, 1]), 90, "Angle at top center should be 90 degrees");\r
        this.assertEquals(region.angle([1, 0.5]), 0, "Angle at right center should be 0 degrees");\r
        this.assertEquals(region.angle([0.5, 0]), 270, "Angle at bottom center should be 270 degrees");\r
        this.assertEquals(region.angle([0, 0.5]), 180, "Angle at left center should be 180 degrees");\r
\r
        this.assertEquals(region.angle([0.5, 1], "radians"), Math.PI / 2, "Angle in radians at top center should be π/2");\r
        this.assertEquals(region.angle([1, 0.5], "radians"), 0, "Angle in radians at right center should be 0");\r
    }\r
\r
    testRadius() {\r
        const region = new Region(50, 100, 150, 0);\r
        this.assertEquals(region.radius([0.5, 1]), 0.5, "Radius at top center should be 0.5");\r
        this.assertEquals(region.radius([1, 0.5]), 0.5, "Radius at right center should be 0.5");\r
        this.assertEquals(region.radius([0.5, 0]), 0.5, "Radius at bottom center should be 0.5");\r
        this.assertEquals(region.radius([0, 0.5]), 0.5, "Radius at left center should be 0.5");\r
    }\r
\r
    testToRadians() {\r
        this.assertEquals(Region.toRadians(0), 0, "0 degrees should be 0 radians", 0.0001);\r
        this.assertEquals(Region.toRadians(180), Math.PI, "180 degrees should be π radians", 0.0001);\r
        this.assertEquals(Region.toRadians(-180), Math.PI, "180 degrees should be π radians", 0.0001);\r
        this.assertEquals(Region.toRadians(360), 0, "360 degrees should be 2π radians", 0.0001);\r
    }\r
\r
    testToDegrees() {\r
        this.assertEquals(Region.toDegrees(0), 0, "0 radians should be 0 degrees");\r
        this.assertEquals(Region.toDegrees(Math.PI), 180, "π radians should be 180 degrees");\r
        this.assertEquals(Region.toDegrees(2 * Math.PI), 0, "2π radians should be 360 degrees");\r
    }\r
\r
    testTo2Pi() {\r
        this.assertEquals(Region.to2Pi(-Math.PI), Math.PI, "Negative π radians should map to π radians", 0.0001);\r
        this.assertEquals(Region.to2Pi(3 * Math.PI), Math.PI, "3π radians should map to π radians", 0.0001);\r
        this.assertEquals(Region.to2Pi(0), 0, "0 radians should remain 0", 0.0001);\r
    }\r
\r
    testTo360() {\r
        this.assertEquals(Region.to360(-90), 270, "-90 degrees should map to 270 degrees");\r
        this.assertEquals(Region.to360(450), 90, "450 degrees should map to 90 degrees");\r
        this.assertEquals(Region.to360(0), 0, "0 degrees should remain 0");\r
    }\r
}`}),e(m,{identifier:"creation",type:".txt",children:`class CreativeItem {\r
    private _q: LayerQuery;\r
    private q(): LayerQuery { return this._q; }\r
    private item(): Layer { return this.q().item(); }\r
    private pathItems(): PathItems { return this.q().collection(); }\r
    app(): ApplicationQuery { return this.q().app(); }\r
    document(): DocumentQuery { return this.q().document(); }\r
    artboard(): ArtboardQuery { return this.q().artboard(); }\r
    region(): Region { return this.artboard().region(); }\r
\r
    constructor(queryItem: Queryable<Layer, any> | Queryable<GroupItem, any>) {\r
        if (queryItem.queryItemType === "LayerQuery")\r
            this._q = (queryItem as LayerQuery).pathItems();\r
        else if (queryItem.queryItemType === "GroupItemQuery")\r
            this._q = (queryItem as GroupItemQuery).pathItems() as any;\r
        else\r
            throw \`queryType \${queryItem?.queryType} not supported\`;\r
    }\r
\r
    rectangle(name?: string, center?: Position, width?: number, height?: number): PathItemQuery {\r
        var region = this.region();\r
        if (center === undefined) center = region.center();\r
        if (width === undefined) width = Math.min(region.width(), region.height()) / 2;\r
        if (height === undefined) height = width;\r
\r
        center = region.toAbsolutePosition(center);\r
        width = region.toAbsoluteUnits(width);\r
        height = region.toAbsoluteUnits(height);\r
        var top = center[1] + height / 2;\r
        var left = center[0] - width / 2;\r
\r
        var newItem = q<PathItemQuery>(this.pathItems().rectangle(top, left, width, height));\r
        newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));\r
        newItem.index(-1);\r
\r
        return newItem;\r
    }\r
\r
    ellipse(name?: string, center?: Position, width?: number, height?: number): PathItemQuery {\r
        var region = this.region();\r
        if (center === undefined) center = region.center();\r
        if (width === undefined) width = Math.min(region.width(), region.height()) / 2;\r
        if (height === undefined) height = width;\r
    \r
        center = region.toAbsolutePosition(center);\r
        width = region.toAbsoluteUnits(width);\r
        height = region.toAbsoluteUnits(height);\r
    \r
        var top = center[1] + height / 2;\r
        var left = center[0] - width / 2;\r
    \r
        var newItem = q<PathItemQuery>(this.pathItems().ellipse(top, left, width, height));\r
        newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));\r
        newItem.index(-1);\r
\r
        return newItem;\r
    }\r
\r
    polygon(name?: string, center?: Position, radius?: number, sides: number = 6): PathItemQuery {\r
        var region = this.region();\r
        if (center === undefined) center = region.center();\r
        if (radius === undefined) radius = Math.min(region.width(), region.height()) / 4;\r
    \r
        center = region.toAbsolutePosition(center);\r
        radius = region.toAbsoluteUnits(radius);\r
    \r
        var newItem = q<PathItemQuery>(this.pathItems().polygon(center[0], center[1], radius, sides));\r
        newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));\r
        newItem.index(-1);\r
\r
        return newItem;\r
    }\r
\r
    star(name?: string, center?: Position, radius?: number, innerRadius?: number, points: number = 5, reversed = false): PathItemQuery {\r
        var region = this.region();\r
        if (center === undefined) center = region.center();\r
        if (radius === undefined) radius = Math.min(region.width(), region.height()) / 4;\r
        if (innerRadius === undefined) innerRadius = radius / 2;\r
    \r
        var centerAbs = region.toAbsolutePosition(center);\r
        var radiusAbs = region.toAbsoluteUnits(radius);\r
        var innerRadiusAbs = region.toAbsoluteUnits(innerRadius);\r
    \r
        var newItem = q<PathItemQuery>(this.pathItems().star(centerAbs[0], centerAbs[1], radiusAbs, innerRadiusAbs, points, reversed));\r
        newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));\r
        newItem.p().position(center);\r
        newItem.index(-1);\r
\r
        return newItem;\r
    }\r
\r
    line(name?: string, start?: Position, end?: Position): PathItemQuery {\r
        var region = this.region();\r
    \r
        // Default line: horizontally centered across the region\r
        var center = region.center();\r
        if (start === undefined) start = [(center[0] + region.left()) / 2, center[1]];\r
        if (end === undefined) end = [(center[0] + region.right()) / 2, center[1]];\r
    \r
        // Convert start and end to absolute positions\r
        start = region.toAbsolutePosition(start);\r
        end = region.toAbsolutePosition(end);\r
    \r
        // Create a new path item\r
        var newItem = this.q().createPathItem();\r
        newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));\r
        newItem.index(-1);\r
\r
        newItem.item().setEntirePath([\r
            [start[0], start[1]], // Start point\r
            [end[0], end[1]]      // End point\r
        ]);\r
\r
        newItem.angular(true);\r
        newItem.set().closed(false)\r
    \r
        return newItem;\r
    }\r
\r
    curve(name?: string, ...positions: Position[]): PathItemQuery {\r
        // Create a new path item\r
        var newItem = this.q().createPathItem();\r
        newItem.name(name !== undefined ? name : QueryItem.createAnonymousName(newItem));\r
        newItem.index(-1);\r
\r
        f(positions).do(position => {\r
            var point = newItem.pathPoints().createPathPoint();\r
            point.anchor(position);\r
        });\r
\r
        newItem.curve(true);\r
        newItem.smooth();\r
        return newItem;\r
    }\r
}\r
\r
class Smoothing {\r
    // Bézier handle averaging\r
    static bezier(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) / 3;\r
            const deltaY = (next[1] - prev[1]) / 3;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // Catmull-Rom Spline smoothing\r
    static catmullRomSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) / 6;\r
            const deltaY = (next[1] - prev[1]) / 6;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // Tension-Based Smoothing\r
    static tensionSmooth(path: PathItemQuery, tension: number = 0.16): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) * tension;\r
            const deltaY = (next[1] - prev[1]) * tension;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // B-Spline Smoothing\r
    static bSplineSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 4) return; // B-splines require at least 4 control points\r
\r
        const smoothedAnchors: Position[] = [];\r
\r
        for (let i = 1; i < points.length() - 2; i++) {\r
            const p0 = points.at(i - 1).anchor();\r
            const p1 = points.at(i).anchor();\r
            const p2 = points.at(i + 1).anchor();\r
            const p3 = points.at(i + 2).anchor();\r
\r
            // Calculate smooth anchor position (weighted average)\r
            const smoothX = (p0[0] + 4 * p1[0] + p2[0]) / 6;\r
            const smoothY = (p0[1] + 4 * p1[1] + p2[1]) / 6;\r
\r
            // Influence outgoing direction using p3\r
            const deltaX = (p3[0] - p0[0]) / 6;\r
            const deltaY = (p3[1] - p0[1]) / 6;\r
\r
            const adjustedX = smoothX + deltaX;\r
            const adjustedY = smoothY + deltaY;\r
\r
            smoothedAnchors.push([adjustedX, adjustedY]);\r
        }\r
\r
        // Update path points with the smoothed anchors\r
        for (let i = 1; i < points.length() - 2; i++) {\r
            points.at(i).set()\r
                .pointType(PointType.SMOOTH)\r
                .anchor(smoothedAnchors[i - 1]);\r
        }\r
    }\r
\r
    // Cubic Spline Smoothing\r
    static cubicSplineSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        const n = points.length();\r
        const h = Array(n - 1);\r
        const a = Array(n);\r
\r
        for (let i = 0; i < n - 1; i++) {\r
            const p1 = points.at(i).anchor();\r
            const p2 = points.at(i + 1).anchor();\r
            h[i] = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);\r
            a[i] = p1;\r
        }\r
\r
        for (let i = 1; i < n - 1; i++) {\r
            points.at(i).set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([\r
                    a[i][0] - h[i - 1] / 3,\r
                    a[i][1] - h[i - 1] / 3\r
                ])\r
                .rightDirection([\r
                    a[i][0] + h[i] / 3,\r
                    a[i][1] + h[i] / 3\r
                ]);\r
        }\r
    }\r
}\r
\r
class CreativeItemTests extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    createGroup(): GroupItemQuery {\r
        return this.layer().createGroupItem("Group");\r
    }\r
\r
    testRectangle() {\r
        var layer = this.layer();\r
\r
        var rect = layer.c().rectangle();\r
        this.assertEquals(rect.name()[0], ".", "1. rectangle anonymous name should start with period");\r
        this.assertEquals(rect.p().position(), [0.5, 0.5], "1. rectangle should have region center");\r
        this.assertEquals(rect.p().width(), 0.5, "1. rectangle should have half the width of the region");\r
        this.assertEquals(rect.p().height(), 0.5, "1. rectangle should have height equal width");\r
        this.assertEquals(rect.index(), 0, "1. rectangle should be the first element");\r
\r
        var rect = layer.c().rectangle("Rect", [0.3, 0.7], 0.2, 0.44);\r
        this.assertEquals(rect.name(), "Rect", "2. rectangle name should be set");\r
        this.assertEquals(rect.p().position(), [0.3, 0.7], "2. rectangle position should be its center");\r
        this.assertEquals(rect.p().width(), 0.2, "2. rectangle width should be set");\r
        this.assertEquals(rect.p().height(), 0.44, "2. rectangle height should be set");\r
        this.assertEquals(rect.index(), 1, "2. rectangle should be the second element");\r
\r
        var group = this.createGroup();\r
        var rect = group.c().rectangle();\r
        this.assertEquals(rect.name()[0], ".", "3. rectangle anonymous name should start with period");\r
        this.assertEquals(rect.p().position(), [0.5, 0.5], "3. rectangle should have region center");\r
        this.assertEquals(rect.p().width(), 0.5, "3. rectangle should have half the width of the region");\r
        this.assertEquals(rect.p().height(), 0.5, "3. rectangle should have height equal width");\r
        this.assertEquals(rect.index(), 0, "3. rectangle should be the first group element");\r
\r
        var rect = group.c().rectangle();\r
        this.assertEquals(rect.index(), 1, "4. rectangle should be the second group element");\r
    }\r
\r
    testEllispe() {\r
        var layer = this.layer();\r
\r
        var ellipse = layer.c().ellipse();\r
        this.assertEquals(ellipse.name()[0], ".", "1. ellipse anonymous name should start with period");\r
        this.assertEquals(ellipse.p().position(), [0.5, 0.5], "1. ellipse should have region center");\r
        this.assertEquals(ellipse.p().width(), 0.5, "1. ellipse should have half the width of the region");\r
        this.assertEquals(ellipse.p().height(), 0.5, "1. ellipse should have height equal width");\r
        this.assertEquals(ellipse.index(), 0, "1. ellipse should be the first element");\r
\r
        var ellipse = layer.c().ellipse("Ellipse", [0.3, 0.7], 0.2, 0.44);\r
        this.assertEquals(ellipse.name(), "Ellipse", "2. ellipse name should be set");\r
        this.assertEquals(ellipse.p().position(), [0.3, 0.7], "2. ellipse position should be its center");\r
        this.assertEquals(ellipse.p().width(), 0.2, "2. ellipse width should be set");\r
        this.assertEquals(ellipse.p().height(), 0.44, "2. ellipse height should be set");\r
        this.assertEquals(ellipse.index(), 1, "2. ellipse should be the second element");\r
\r
        var group = this.createGroup();\r
        var ellipse = group.c().ellipse("Group Ellipse", [0.2, 0.2]);\r
        this.assertEquals(ellipse.name(), "Group Ellipse", "3. ellipse should have the right name");\r
        this.assertEquals(ellipse.p().position(), [0.2, 0.2], "3. ellipse should have region center");\r
        this.assertEquals(ellipse.p().width(), 0.5, "3. ellipse should have half the width of the region");\r
        this.assertEquals(ellipse.p().height(), 0.5, "3. ellipse should have height equal width");\r
        this.assertEquals(ellipse.index(), 0, "3. ellipse should be the third element");\r
\r
        var rect = group.c().ellipse("Group Ellipse 2", [0.8, 0.8]);\r
        this.assertEquals(rect.index(), 1, "4. ellipse should be the second group element");\r
    }\r
\r
    testPolygon() {\r
        var layer = this.layer();\r
\r
        var polygon = layer.c().polygon();\r
        this.assertEquals(polygon.name()[0], ".", "1. polygon anonymous name should start with period");\r
        this.assertEquals(polygon.p().position(), [0.5, 0.5], "1. polygon should have region center");\r
        this.assertEquals(polygon.index(), 0, "1. polygon should be the first element");\r
\r
        var polygon = layer.c().polygon();\r
        this.assertEquals(polygon.index(), 1, "2. polygon should be the second element");\r
\r
        var group = this.createGroup();\r
        var polygon = group.c().polygon("Polygon", [0.2, 0.8], 0.1, 10);\r
        this.assertEquals(polygon.name(), "Polygon", "3. polygon name should be set");\r
        this.assertEquals(polygon.p().position(), [0.2, 0.8], "3. polygon should have region center");\r
        this.assertEquals(polygon.index(), 0, "3. polygon should be the first element");\r
    }\r
\r
    testStar() {\r
        var layer = this.layer();\r
\r
        var star = layer.c().star();\r
        this.assertEquals(star.name()[0], ".", "1. star anonymous name should start with period");\r
        this.assertEquals(star.p().position(), [0.5, 0.5], "1. star should have region center");\r
        this.assertEquals(star.index(), 0, "1. star should be the first element");\r
\r
        var star = layer.c().star("star", [0.4, 0.4]);\r
        this.assertEquals(star.index(), 1, "2. star should be the second element");\r
\r
        var group = this.createGroup();\r
        var star = group.c().star("star", [0.2, 0.8], 0.1, 0.08, 10);\r
        this.assertEquals(star.name(), "star", "3. star name should be set");\r
        this.assertEquals(star.p().position(), [0.2, 0.8], "3. star should have region center");\r
        this.assertEquals(star.index(), 0, "3. star should be the first element");\r
    }\r
\r
    testLine() {\r
        var layer = this.layer();\r
\r
        var line = layer.c().line();\r
        this.assertEquals(line.name()[0], ".", "1. line anonymous name should start with period");\r
        this.assertEquals(line.p().position(), [0.5, 0.5], "1. line should have region center");\r
        this.assertEquals(line.index(), 0, "1. line should be the first element");\r
\r
        var line = layer.c().line("Line", [0, 0], [1, 1]);\r
        this.assertEquals(line.name(), "Line", "2. line name should be set");\r
        this.assertEquals(line.p().position(), [0.5, 0.5], "2. line name should be set");\r
        this.assertEquals(line.index(), 1, "1. line should be the second element");\r
    }\r
\r
    testCurve() {\r
        var layer = this.layer();\r
\r
        var line = layer.c().curve("Curve 1", [0.3, 0.3], [0.4, 0.6], [0.6, 0.7], [0.8, 0.8]);\r
        this.assertEquals(line.name(), "Curve 1", "1. curve should have name set");\r
        this.assertEquals(line.pathPoints().length(), 4, "1. there should be four path points");\r
        this.assertEquals(line.index(), 0, "1. curve should be the first element");\r
\r
        line.angular(true);\r
        line.curve(true);\r
    }\r
}`}),e(m,{identifier:"position",type:".txt",children:`class PositionedItem {\r
    private _q: Queryable<PageItem, any>;\r
    private q(): Queryable<PageItem, any> { return this._q; }\r
    private item(): PageItem { return this.q().item(); }\r
    app(): ApplicationQuery { return this.q().app(); }\r
    document(): DocumentQuery { return this.q().document(); }\r
    artboard(): ArtboardQuery { return this.q().artboard(); }\r
    region(): Region { return this.artboard().region(); }\r
    positionable() { return this.q().positionable(); }\r
    unpositionable() { return !this.q().positionable(); }\r
\r
    positionTopLeftAbs(): Position { return this.positionable() ? this.item().position : [0, 0]; }\r
    geometricBoundsAbs(): Rect { return this.positionable() ? this.item().geometricBounds : [0, 0, 0, 0]; }\r
    visibleBoundsAbs(): Rect { return this.positionable() ? this.item().visibleBounds : [0, 0, 0, 0]; }\r
    controlBoundsAbs(): Rect { return this.positionable() ? this.item().controlBounds : [0, 0, 0, 0]; }\r
\r
    left(newLeft?: number): number { \r
        if (newLeft !== undefined) \r
            this.translate(newLeft - this.left(), 0);\r
        return this.bounds()[0]; \r
    }\r
    \r
    top(newTop?: number): number { \r
        if (newTop !== undefined)\r
            this.translate(0, newTop - this.top());\r
        return this.bounds()[1];\r
    }\r
    \r
    right(newRight?: number): number { \r
        if (newRight !== undefined)\r
            this.translate(newRight - this.right(), 0);\r
        return this.bounds()[2];\r
    }\r
    \r
    bottom(newBottom?: number): number { \r
        if (newBottom !== undefined)\r
            this.translate(0, newBottom - this.bottom());\r
        return this.bounds()[3];\r
    }\r
\r
    positionAbs(): Position { \r
        if (this.unpositionable()) return [0, 0];\r
        var bounds = this.geometricBoundsAbs();\r
        return [Math.round((bounds[0] + bounds[2]) / 2), Math.round((bounds[1] + bounds[3]) / 2)];\r
    }\r
\r
    position(newPosition?: Position): Position { \r
        if (this.unpositionable()) return [0, 0];\r
        if (newPosition) {\r
            var newTop = newPosition[1] + this.height() / 2\r
            var newLeft = newPosition[0] - this.width() / 2\r
            api.redraw();\r
            this.item().position = this.region().toAbsolutePosition([newLeft, newTop]) as Point;\r
            api.redraw();\r
        }\r
\r
        var bounds = this.bounds();\r
        return [(bounds[0] + bounds[2]) / 2, (bounds[1] + bounds[3]) / 2];\r
    }\r
\r
    width(newWidth?: number, proportional = true): number {\r
        if (this.unpositionable()) return 0;\r
    \r
        if (newWidth !== undefined) {\r
            const newWidthScale = newWidth / this.width();\r
            const newHeightScale = proportional ? newWidthScale : 1;\r
            this.scale([newWidthScale, newHeightScale]);\r
        }\r
    \r
        const bounds = this.geometricBounds();\r
        return Math.abs(bounds[2] - bounds[0]); // Right - Left\r
    }\r
    \r
    height(newHeight?: number, proportional = true): number {\r
        if (this.unpositionable()) return 0;\r
        if (newHeight !== undefined) {\r
            const newHeightScale = newHeight / this.height(); \r
            const newWidthScale = proportional ? newHeightScale : 1;\r
            this.scale([newWidthScale, newHeightScale]);\r
        }\r
    \r
        const bounds = this.geometricBounds();\r
        return Math.abs(bounds[1] - bounds[3]); // Top - Bottom\r
    }\r
\r
    size(newSize?: Size): Size {\r
        if (this.unpositionable()) return [0, 0];\r
        if (newSize) {\r
            const newWidthScale = newSize[0] / this.width(); \r
            const newHeightScale = newSize[1] / this.height(); \r
            this.scale([newWidthScale, newHeightScale]);\r
        }\r
\r
        return [this.width(), this.height()];\r
    }\r
\r
    bounds(): Rect { return this.geometricBounds(); }\r
\r
    geometricBounds(): Rect {\r
        if (this.unpositionable()) return [0, 0, 0, 0];\r
        const bounds = this.geometricBoundsAbs();\r
        return [\r
            this.region().toRelativeLocation(bounds[0], "x"),\r
            this.region().toRelativeLocation(bounds[1], "y"),\r
            this.region().toRelativeLocation(bounds[2], "x"),\r
            this.region().toRelativeLocation(bounds[3], "y")\r
        ];\r
    }\r
\r
    visibleBounds(): Rect {\r
        if (this.unpositionable()) return [0, 0, 0, 0];\r
        const bounds = this.visibleBoundsAbs();\r
        return [\r
            this.region().toRelativeLocation(bounds[0], "x"),\r
            this.region().toRelativeLocation(bounds[1], "y"),\r
            this.region().toRelativeLocation(bounds[2], "x"),\r
            this.region().toRelativeLocation(bounds[3], "y")\r
        ];\r
    }\r
\r
    controlBounds(): Rect {\r
        if (this.unpositionable()) return [0, 0, 0, 0];\r
        const bounds = this.controlBoundsAbs();\r
        return [\r
            this.region().toRelativeLocation(bounds[0], "x"),\r
            this.region().toRelativeLocation(bounds[1], "y"),\r
            this.region().toRelativeLocation(bounds[2], "x"),\r
            this.region().toRelativeLocation(bounds[3], "y")\r
        ];\r
    }\r
\r
    constructor(queryItem: Queryable<PageItem, any>) {\r
        this._q = queryItem;\r
    }\r
\r
    center(newCenter?: Position): Position {\r
        if (newCenter !== undefined)\r
            this.position(newCenter);\r
        return this.position();\r
    }\r
\r
    rotate(degrees: number, direction: Direction = "c", transformation: Transformation = Transformation.CENTER): this {\r
        if (this.unpositionable()) return this;\r
        if (direction == "c") degrees = -degrees;\r
        api.redraw();\r
        this.item().rotate(degrees, true, true, true, true, transformation);\r
        api.redraw();\r
        return this;\r
    }\r
\r
    rrotate(radians: number, direction: Direction = "c", transformation: Transformation = Transformation.CENTER): this {\r
        return this.rotate(Region.toDegrees(radians), direction, transformation);\r
    }\r
\r
    rotateAround(pivot: Position, degrees: number, direction: Direction = "c"): this {\r
        if (this.unpositionable()) return this;\r
        if (direction === "cc") degrees = -degrees;\r
\r
        // 1. Get current position in relative coordinates (center)\r
        const position = this.position();\r
        const deltaX = position[0] - pivot[0];\r
        const deltaY = position[1] - pivot[1];\r
\r
        // 2. Calculate radius and current angle relative to pivot\r
        const radius = Math.sqrt(deltaX ** 2 + deltaY ** 2);\r
        const currentAngle = Region.to2Pi(Math.atan2(deltaY, deltaX)); // Radians normalized to [0, 2π)\r
\r
        // 3. Compute new angle after rotation\r
        const radians = Region.to2Pi(degrees * (Math.PI / 180));\r
        const newAngle = Region.to2Pi(currentAngle + radians);\r
\r
        // 4. Compute new relative position\r
        const newX = pivot[0] + radius * Math.cos(newAngle);\r
        const newY = pivot[1] + radius * Math.sin(newAngle);\r
\r
        // 5. Translate to the new relative position\r
        api.redraw();\r
        this.translate(newX - position[0], newY - position[1]);\r
        api.redraw();\r
        this.rotate(degrees, direction);\r
        api.redraw();\r
\r
        return this;\r
    }\r
\r
    rrotateAround(pivot: Position, radians: number, direction: Direction = "c"): this {\r
        return this.rotateAround(pivot, Region.toDegrees(radians), direction);\r
    }\r
\r
    rotateAroundCenter(degrees: number, direction: Direction = "c"): this {\r
        this.rotateAround(this.region().center(), degrees, direction);\r
        return this;\r
    }\r
\r
    rrotateAroundCenter(radians: number, direction: Direction = "c"): this {\r
        return this.rrotateAroundCenter(radians, direction);\r
    }\r
\r
    translate(deltaX: number, deltaY: number): this {\r
        if (this.unpositionable()) return this;\r
        var artboard = this.artboard();\r
        var region = artboard.region();\r
        deltaX = region.toAbsoluteUnits(deltaX);\r
        deltaY = region.toAbsoluteUnits(deltaY);\r
        api.redraw();\r
        this.item().translate(deltaX, deltaY);\r
        api.redraw();\r
        return this;\r
    }\r
\r
    scale(scale: Scale): this {\r
        if (this.unpositionable()) return this;\r
        if (scale instanceof Array) var [ scaleX, scaleY ] = scale; \r
        else var [ scaleX, scaleY ] = [scale, scale]; \r
\r
        const position = this.position();\r
        this.item().resize(100* scaleX, 100 * scaleY);\r
        this.position(position);\r
        return this;\r
    }\r
\r
    // Moves the item proportionally so its left edge aligns with the region's left edge\r
    pushLeft(proportion: number = 1): this {\r
        if (this.unpositionable()) return this;\r
        const targetLeft = this.region().left() * proportion + this.left() * (1 - proportion);\r
        this.left(targetLeft);\r
        return this;\r
    }\r
\r
    // Moves the item proportionally so its right edge aligns with the region's right edge\r
    pushRight(proportion: number = 1): this {\r
        if (this.unpositionable()) return this;\r
        const targetRight = this.region().right() * proportion + this.right() * (1 - proportion);\r
        this.right(targetRight);\r
        return this;\r
    }\r
\r
    // Moves the item proportionally so its top edge aligns with the region's top edge\r
    pushUp(proportion: number = 1): this {\r
        if (this.unpositionable()) return this;\r
        const targetTop = this.region().top() * proportion + this.top() * (1 - proportion);\r
        this.top(targetTop);\r
        return this;\r
    }\r
\r
    // Moves the item proportionally so its bottom edge aligns with the region's bottom edge\r
    pushDown(proportion: number = 1): this {\r
        if (this.unpositionable()) return this;\r
        const targetBottom = this.region().bottom() * proportion + this.bottom() * (1 - proportion);\r
        this.bottom(targetBottom);\r
        return this;\r
    }\r
\r
    // Moves the item proportionally towards the center of the region\r
    pushCenter(proportion: number = 1): this {\r
        if (this.unpositionable()) return this;\r
        const regionCenter = this.region().center();\r
        const targetX = regionCenter[0] * proportion + this.position()[0] * (1 - proportion);\r
        const targetY = regionCenter[1] * proportion + this.position()[1] * (1 - proportion);\r
        this.position([targetX, targetY]);\r
        return this;\r
    }\r
}\r
\r
class PositionedItemTests extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    init(): void {\r
        super.init();\r
        api.activeDocument().activeArtboard().square();\r
    }\r
\r
    createItem(position: Position = [0.5, 0.5], width: number = 0.05, height?: number): PathItemQuery {\r
        if (height === undefined) height = width;\r
        var layer = api.activeDocument().activeLayer();\r
        var region = layer.artboard().region();\r
        var [x, y] = region.toAbsolutePosition(position);\r
        var widthAbs = region.toAbsoluteUnits(width);\r
        var heightAbs = region.toAbsoluteUnits(height);\r
        var item = (layer.pathItems().collection() as PathItems).rectangle(\r
            y + heightAbs/2,\r
            x - widthAbs/2,\r
            widthAbs,\r
            heightAbs\r
        );\r
        return q(item);\r
    }\r
\r
    testPosition() {\r
        var item = this.createItem([0.5, 0.5]);\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "1. Unexpected position");\r
\r
        item.p().position([0.75, 0.25]);\r
        this.assertEquals(item.p().position(), [0.75, 0.25], "2. Unexpected position change");\r
    }\r
\r
    testWidth() {\r
        var item = this.createItem([0.5, 0.5], 0.1);\r
        this.assertEquals(item.p().width(), 0.1, "3. Unexpected width");\r
\r
        item.p().width(0.2);\r
        this.assertEquals(item.p().width(), 0.2, "4. Unexpected width change");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "4. Unexpected position change after width");\r
\r
        var existingHeight = item.p().height();\r
\r
        item.p().width(0.3, false);\r
        this.assertEquals(item.p().width(), 0.3, "5. Unexpected width change");\r
        this.assertEquals(item.p().height(), existingHeight, "6. Unexpected width change");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "6. Unexpected position change after width");\r
    }\r
\r
    testHeight() {\r
        var item = this.createItem([0.5, 0.5], 0.1, 0.05);\r
        this.assertEquals(item.p().height(), 0.05, "7. Unexpected height");\r
\r
        item.p().height(0.2);\r
        this.assertEquals(item.p().height(), 0.2, "8. Unexpected height change");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "8. Unexpected position change after height");\r
\r
        var existingWidth = item.p().width();\r
\r
        item.p().height(0.3, false);\r
        this.assertEquals(item.p().height(), 0.3, "9. Unexpected height change");\r
        this.assertEquals(item.p().width(), existingWidth, "10. Unexpected height change");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "10. Unexpected position change after height");\r
    }\r
\r
    testSize() {\r
        var item = this.createItem([0.5, 0.5], 0.1, 0.05);\r
        this.assertEquals(item.p().height(), 0.05, "7. Unexpected height");\r
\r
        item.p().height(0.2);\r
        this.assertEquals(item.p().height(), 0.2, "8. Unexpected height change");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "8. Unexpected position change after height");\r
\r
        var existingWidth = item.p().width();\r
\r
        item.p().height(0.3, false);\r
        this.assertEquals(item.p().height(), 0.3, "9. Unexpected height change");\r
        this.assertEquals(item.p().width(), existingWidth, "10. Unexpected height change");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "10. Unexpected position change after height");\r
    }\r
\r
    testTranslate() {\r
        var item = this.createItem([0.5, 0.5], 0.1, 0.05);\r
\r
        item.p().translate(0.1, -0.1);\r
        this.assertEquals(item.p().position(), [0.6, 0.4], "11. Unexpected position after translation");\r
    }\r
\r
    testEdges() {\r
        var item = this.createItem([0.5, 0.5], 0.2, 0.2);\r
\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "12. Unexpected center");\r
        this.assertEquals(item.p().left(), 0.4, "12. Unexpected left");\r
        this.assertEquals(item.p().right(), 0.6, "12. Unexpected right");\r
        this.assertEquals(item.p().top(), 0.6, "12. Unexpected top");\r
        this.assertEquals(item.p().bottom(), 0.4, "12. Unexpected bottom");\r
\r
        item.p().left(0.7)\r
        this.assertEquals(item.p().left(), 0.7, "13. Unexpected left after setting");\r
\r
        item.p().right(0.8)\r
        this.assertEquals(item.p().right(), 0.8, "13. Unexpected right after setting");\r
\r
        item.p().top(0.2)\r
        this.assertEquals(item.p().top(), 0.2, "13. Unexpected top after setting");\r
\r
        item.p().bottom(0.1)\r
        this.assertEquals(item.p().bottom(), 0.1, "13. Unexpected bottom after setting");\r
    }\r
\r
    testScale() {\r
        var item = this.createItem([0.4, 0.4], 0.1, 0.1);\r
\r
        item.p().scale([2, 0.5]);\r
        this.assertEquals(item.p().size(), [0.2, 0.05], "14. Unexpected position after translation");\r
        this.assertEquals(item.p().position(), [0.4, 0.4], "14. Unexpected position after translation");\r
    }\r
\r
    testRotate() {\r
        // Create item with unequal width and height\r
        var item = this.createItem([0.5, 0.5], 0.2, 0.1);\r
\r
        // Clockwise rotation by 90 degrees\r
        item.p().rotate(90);\r
        this.assertEquals(item.p().width(), 0.1, "1. Width and height should swap after 90-degree clockwise rotation");\r
        this.assertEquals(item.p().height(), 0.2, "2. Height and width should swap after 90-degree clockwise rotation");\r
\r
        // Counterclockwise rotation by -90 degrees\r
        item.p().rotate(-90);\r
        this.assertEquals(item.p().width(), 0.2, "3. Width should revert after -90-degree counterclockwise rotation");\r
        this.assertEquals(item.p().height(), 0.1, "4. Height should revert after -90-degree counterclockwise rotation");\r
    }\r
\r
    testRRotate() {\r
        // Create item with unequal width and height\r
        var item = this.createItem([0.5, 0.5], 0.2, 0.1);\r
\r
        // Clockwise rotation by 90 degrees in radians\r
        item.p().rrotate(Region.toRadians(90));\r
        this.assertEquals(item.p().width(), 0.1, "5. Width and height should swap after 90-degree clockwise rrotate");\r
        this.assertEquals(item.p().height(), 0.2, "6. Height and width should swap after 90-degree clockwise rrotate");\r
\r
        // Counterclockwise rotation by -90 degrees in radians\r
        item.p().rrotate(Region.toRadians(-90));\r
        this.assertEquals(item.p().width(), 0.2, "7. Width should revert after -90-degree counterclockwise rrotate");\r
        this.assertEquals(item.p().height(), 0.1, "8. Height should revert after -90-degree counterclockwise rrotate");\r
    }\r
\r
    testRotateAround() {\r
        // Create item centered at [0.5, 0.5] with unequal width and height\r
        var item = this.createItem([0.5, 0.5], 0.2, 0.1);\r
        var region = item.p().region();\r
    \r
        // Rotate 90 degrees clockwise around [0.5, 0.5] (center)\r
        item.p().rotateAround([0.5, 0.5], 90);\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "9. Position should remain at center after rotation around itself");\r
    \r
        // Translate item for off-center test\r
        item.p().translate(-0.25, 0);\r
        region = item.p().region();\r
        var originalPosition = item.p().position();\r
    \r
        // Rotate 90 counter-clockwise around [0.5, 0.5]\r
        item.p().rotateAround([0.5, 0.5], 90, "cc");\r
        this.assertEquals(region.angle(item.p().position()), 90, "10. Angle from pivot should be 90 after rotation", 0.0001);\r
        this.assertEquals(region.radius(item.p().position()), 0.25, "11. Radius should remain constant after rotation around pivot", 0.0001);\r
    \r
        // Rotate 90 clockwise back around [0.5, 0.5]\r
        item.p().rotateAround([0.5, 0.5], 90, "c");\r
        this.assertEquals(item.p().position(), originalPosition, "12. Position should return to original position after inverse rotation", 0.0001);\r
    \r
        // Additional test: Rotate 180 degrees clockwise\r
        item.p().position([0.5, 0.5]);\r
        item.p().rotateAround([0.6, 0.5], 180, "c");\r
        this.assertEquals(item.p().position(), [0.7, 0.5], "13. The position should have flipped horizontally", 0.0001);\r
\r
        item.p().rotateAround([0.6, 0.5], 180, "cc");\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "14. The position should have returned to center", 0.0001);\r
    }\r
    \r
    testRRotateAround() {\r
        // Create item centered at [0.5, 0.5] with unequal width and height\r
        var item = this.createItem([0.5, 0.5], 0.2, 0.1);\r
        var region = item.p().region();\r
    \r
        // Rotate 90 degrees clockwise around [0.5, 0.5] (center)\r
        item.p().rrotateAround([0.5, 0.5], Region.toRadians(90));\r
        this.assertEquals(item.p().position(), [0.5, 0.5], "9. Position should remain at center after rotation around itself");\r
    \r
        // Translate item for off-center test\r
        item.p().translate(-0.25, 0);\r
        region = item.p().region();\r
    \r
        // Rotate 90 counter-clockwise around [0.5, 0.5]\r
        item.p().rrotateAround([0.5, 0.5], Region.toRadians(90), "cc");\r
        this.assertEquals(region.angle(item.p().position()), 90, "10. Angle from pivot should be 90 after rotation", 0.0001);\r
        this.assertEquals(region.radius(item.p().position()), 0.25, "11. Radius should remain constant after rotation around pivot", 0.0001);\r
    }\r
\r
    testPushEdges() {\r
        var item = this.createItem([0.5, 0.5], 0.2, 0.2);\r
\r
        item.p().pushRight(0.5);\r
        this.assertEquals(item.p().right(), 0.8, "12. Unexpected right after pushing 0.5");\r
\r
        item.p().pushRight();\r
        this.assertEquals(item.p().right(), 1, "12. Unexpected right after pushing 1.0");\r
\r
        item.p().pushCenter();\r
\r
        item.p().pushLeft(0.5);\r
        this.assertEquals(item.p().left(), 0.2, "13. Unexpected left after pushing 0.5");\r
\r
        item.p().pushLeft();\r
        this.assertEquals(item.p().left(), 0, "13. Unexpected left after pushing 1.0");\r
\r
        item.p().pushCenter();\r
\r
        item.p().pushUp(0.5);\r
        this.assertEquals(item.p().top(), 0.8, "14. Unexpected top after pushing 0.5");\r
\r
        item.p().pushUp();\r
        this.assertEquals(item.p().top(), 1, "14. Unexpected top after pushing 1.0");\r
\r
        item.p().pushCenter();\r
\r
        item.p().pushDown(0.5);\r
        this.assertEquals(item.p().bottom(), 0.2, "15. Unexpected bottom after pushing 0.5");\r
\r
        item.p().pushDown();\r
        this.assertEquals(item.p().bottom(), 0, "15. Unexpected bottom after pushing 1.0");\r
\r
        item.p().position([0.7, 0.5])\r
        item.p().pushCenter(0.5);\r
        this.assertEquals(item.p().position(), [0.6, 0.5], "16. Unexpected position after pushing 0.5");\r
    }\r
}`}),e(m,{identifier:"properties",type:".txt",children:`class SetProperties<TQueryItem extends QueryItem = QueryItem> {\r
    protected _query: TQueryItem;\r
    \r
    constructor(query: TQueryItem, queryName?: string) {\r
        if (query === undefined) throw "queryItem undefined";\r
        this._query = query;\r
        if (query !== undefined)\r
            this._query.name(queryName);\r
    }\r
\r
    name(name: string): this { this._query.name(name); return this; }\r
    index(newIndex: number): this { this._query.moveTo(newIndex); return this; }\r
    locationToFront(): this { this._query.moveTo(0); return this; }\r
    locationToBack(): this { this._query.moveTo(-1); return this; }\r
    locationBefore(referenceItem: QueryItem) { this._query.move(referenceItem, ElementPlacement.PLACEBEFORE); }\r
    locationAfter(referenceItem: QueryItem) { this._query.move(referenceItem, ElementPlacement.PLACEAFTER); }\r
    q():QueryItem { return this._query; }\r
}\r
\r
class SetPageItemProperties<TQueryItem extends QueryItem = PageItemQuery> extends SetProperties<PageItemQuery> {\r
    protected _pageItemQuery(): TQueryItem { return this._query as any; }\r
    URL(value: string): this { this._query.item().URL = value; return this; }\r
    artworkKnockout(value: KnockoutState): this { this._query.item().artworkKnockout = value; return this; }\r
    blendingMode(value: BlendModes): this { this._query.item().blendingMode = value; return this; }\r
    height(value: number): this { this._query.item().height = value; return this; }\r
    hidden(value: boolean): this { this._query.item().hidden = value; return this; }\r
    isIsolated(value: boolean): this { this._query.item().isIsolated = value; return this; }\r
    left(value: number): this { this._query.item().left = value; return this; }\r
    locked(value: boolean): this { this._query.item().locked = value; return this; }\r
    note(value: string): this { this._query.item().note = value; return this; }\r
    opacity(value: number): this { this._query.item().opacity = value; return this; }\r
    pixelAligned(value: boolean): this { this._query.item().pixelAligned = value; return this; }\r
    position(value: Point | [number, number]): this { this._query.item().position = value; return this; }\r
    selected(value: boolean): this { this._query.item().selected = value; return this; }\r
    sliced(value: boolean): this { this._query.item().sliced = value; return this; }\r
    top(value: number): this { this._query.item().top = value; return this; }\r
    width(value: number): this { this._query.item().width = value; return this; }\r
    wrapInside(value: boolean): this { this._query.item().wrapInside = value; return this; }\r
    wrapOffset(value: number): this { this._query.item().wrapOffset = value; return this; }\r
    wrapped(value: boolean): this { this._query.item().wrapped = value; return this; }\r
    q():PageItemQuery { return this._query as any; }\r
}\r
\r
class SetApplicationProperties extends SetProperties<ApplicationQuery> {\r
    pasteRemembersLayers(value: boolean): this { this._query.item().pasteRemembersLayers = value; return this; }\r
    coordinateSystem(value: CoordinateSystem): this { this._query.item().coordinateSystem = value; return this; }\r
    userInteractionLevel(value: UserInteractionLevel): this { this._query.item().userInteractionLevel = value; return this; }\r
    q():ApplicationQuery { return this._query as any; }\r
}\r
\r
class SetDocumentProperties extends SetProperties<DocumentQuery> {\r
    XMPString(value: string): this { this._query.item().XMPString = value; return this; }\r
    activeDataSet(value: DataSet): this { this._query.item().activeDataSet = value; return this; }\r
    activeLayer(value: LayerQuery): this { this._query.item().activeLayer = value.item(); return this; }\r
    cropBox(value: Rect): this { this._query.item().cropBox = value; return this; }\r
    cropStyle(value: CropOptions): this { this._query.item().cropStyle = value; return this; }\r
    defaultFillColor(value: Color): this { this._query.item().defaultFillColor = value; return this; }\r
    defaultFillOverprint(value: boolean): this { this._query.item().defaultFillOverprint = value; return this; }\r
    defaultFilled(value: boolean): this { this._query.item().defaultFilled = value; return this; }\r
    defaultStrokeCap(value: StrokeCap): this { this._query.item().defaultStrokeCap = value; return this; }\r
    defaultStrokeColor(value: Color): this { this._query.item().defaultStrokeColor = value; return this; }\r
    defaultStrokeDashOffset(value: number): this { this._query.item().defaultStrokeDashOffset = value; return this; }\r
    defaultStrokeDashes(value: number[]): this { this._query.item().defaultStrokeDashes = value; return this; }\r
    defaultStrokeJoin(value: StrokeJoin): this { this._query.item().defaultStrokeJoin = value; return this; }\r
    defaultStrokeMiterLimit(value: number): this { this._query.item().defaultStrokeMiterLimit = value; return this; }\r
    defaultStrokeOverprint(value: boolean): this { this._query.item().defaultStrokeOverprint = value; return this; }\r
    defaultStrokeWidth(value: number): this { this._query.item().defaultStrokeWidth = value; return this; }\r
    defaultStroked(value: boolean): this { this._query.item().defaultStroked = value; return this; }\r
    pageOrigin(value: Point | [number, number]): this { this._query.item().pageOrigin = value; return this; }\r
    rasterEffectSettings(value: RasterEffectOptions): this { this._query.item().rasterEffectSettings = value; return this; }\r
    rulerOrigin(value: Point | [number, number]): this { this._query.item().rulerOrigin = value; return this; }\r
    saved(value: boolean): this { this._query.item().saved = value; return this; }\r
    selection(value: any): this { this._query.item().selection = value; return this; }\r
    variablesLocked(value: boolean): this { this._query.item().variablesLocked = value; return this; }\r
    q():DocumentQuery { return this._query as any; }\r
}\r
\r
class SetArtboardProperties extends SetProperties<ArtboardQuery> {\r
    artboardRect(value: Rect): this { this._query.item().artboardRect = value; return this; }\r
    rulerOrigin(value: Point | [number, number]): this { this._query.item().rulerOrigin = value; return this; }\r
    rulerPAR(value: number): this { this._query.item().rulerPAR = value; return this; }\r
    showCenter(value: boolean): this { this._query.item().showCenter = value; return this; }\r
    showCrossHairs(value: boolean): this { this._query.item().showCrossHairs = value; return this; }\r
    showSafeAreas(value: boolean): this { this._query.item().showSafeAreas = value; return this; }\r
    q():ArtboardQuery { return this._query as any; }\r
}\r
\r
class SetLayerProperties extends SetProperties<LayerQuery> {\r
    artworkKnockout(value: KnockoutState): this { this._query.item().artworkKnockout = value; return this; }\r
    blendingMode(value: BlendModes): this { this._query.item().blendingMode = value; return this; }\r
    color(value: RGBColor): this { this._query.item().color = value; return this; }\r
    dimPlacedImages(value: boolean): this { this._query.item().dimPlacedImages = value; return this; }\r
    hasSelectedArtwork(value: boolean): this { this._query.item().hasSelectedArtwork = value; return this; }\r
    isIsolated(value: boolean): this { this._query.item().isIsolated = value; return this; }\r
    locked(value: boolean): this { this._query.item().locked = value; return this; }\r
    opacity(value: number): this { this._query.item().opacity = value; return this; }\r
    preview(value: boolean): this { this._query.item().preview = value; return this; }\r
    printable(value: boolean): this { this._query.item().printable = value; return this; }\r
    sliced(value: boolean): this { this._query.item().sliced = value; return this; }\r
    visible(value: boolean): this { this._query.item().visible = value; return this; }\r
    q():LayerQuery { return this._query as any; }\r
}\r
\r
class SetStoryProperties extends SetProperties<StoryQuery> {\r
    q():StoryQuery { return this._query as any; }\r
}\r
\r
class SetGroupItemProperties extends SetPageItemProperties<GroupItemQuery> {\r
    clipped(value: boolean): this { this._pageItemQuery().item().clipped = value; return this; }\r
    q():GroupItemQuery { return this._query as any; }\r
}\r
\r
class SetPathItemProperties extends SetPageItemProperties<PathItemQuery> {\r
    clipping(value: boolean): this { this._pageItemQuery().item().clipping = value; return this; }\r
    closed(value: boolean): this { this._pageItemQuery().item().closed = value; return this; }\r
    evenodd(value: boolean): this { this._pageItemQuery().item().evenodd = value; return this; }\r
    fillColor(value: Color): this { this._pageItemQuery().item().fillColor = value; return this; }\r
    fillOverprint(value: boolean): this { this._pageItemQuery().item().fillOverprint = value; return this; }\r
    filled(value: boolean): this { this._pageItemQuery().item().filled = value; return this; }\r
    guides(value: boolean): this { this._pageItemQuery().item().guides = value; return this; }\r
    polarity(value: PolarityValues): this { this._pageItemQuery().item().polarity = value; return this; }\r
    resolution(value: number): this { this._pageItemQuery().item().resolution = value; return this; }\r
    strokeCap(value: StrokeCap): this { this._pageItemQuery().item().strokeCap = value; return this; }\r
    strokeColor(value: Color): this { this._pageItemQuery().item().strokeColor = value; return this; }\r
    strokeDashOffset(value: number): this { this._pageItemQuery().item().strokeDashOffset = value; return this; }\r
    strokeDashes(value: number[]): this { this._pageItemQuery().item().strokeDashes = value; return this; }\r
    strokeJoin(value: StrokeJoin): this { this._pageItemQuery().item().strokeJoin = value; return this; }\r
    strokeMiterLimit(value: number): this { this._pageItemQuery().item().strokeMiterLimit = value; return this; }\r
    strokeOverprint(value: boolean): this { this._pageItemQuery().item().strokeOverprint = value; return this; }\r
    strokeWidth(value: number): this { this._pageItemQuery().item().strokeWidth = value; return this; }\r
    stroked(value: boolean): this { this._pageItemQuery().item().stroked = value; return this; }\r
    q():PathItemQuery { return this._query as any; }\r
}\r
\r
class SetTextFrameProperties extends SetPageItemProperties<TextFrameQuery> {\r
    anchor(value: Point | [number, number]): this { this._pageItemQuery().item().anchor = value; return this; }\r
    antialias(value: TextAntialias): this { this._pageItemQuery().item().antialias = value; return this; }\r
    columnCount(value: number): this { this._pageItemQuery().item().columnCount = value; return this; }\r
    columnGutter(value: number): this { this._pageItemQuery().item().columnGutter = value; return this; }\r
    contents(value: string): this { this._pageItemQuery().item().contents = value; return this; }\r
    endTValue(value: number): this { this._pageItemQuery().item().endTValue = value; return this; }\r
    firstBaseline(value: FirstBaselineType): this { this._pageItemQuery().item().firstBaseline = value; return this; }\r
    firstBaselineMin(value: number): this { this._pageItemQuery().item().firstBaselineMin = value; return this; }\r
    flowLinksHorizontally(value: boolean): this { this._pageItemQuery().item().flowLinksHorizontally = value; return this; }\r
    orientation(value: TextOrientation): this { this._pageItemQuery().item().orientation = value; return this; }\r
    rowCount(value: number): this { this._pageItemQuery().item().rowCount = value; return this; }\r
    rowGutter(value: number): this { this._pageItemQuery().item().rowGutter = value; return this; }\r
    spacing(value: number): this { this._pageItemQuery().item().spacing = value; return this; }\r
    startTValue(value: number): this { this._pageItemQuery().item().startTValue = value; return this; }\r
    q():TextFrameQuery { return this._query as any; }\r
}\r
\r
class SetGradientProperties extends SetProperties<GradientQuery> {\r
    name(value: string): this { this._query.item().name = value; return this; }\r
    type(value: GradientType): this { this._query.item().type = value; return this; }\r
    q():GradientQuery { return this._query as any; }\r
}\r
\r
class SetCompoundPathItemProperties extends SetPageItemProperties<CompoundPathItemQuery> {\r
    q():CompoundPathItemQuery { return this._query as any; }\r
}\r
\r
class SetRasterItemProperties extends SetPageItemProperties<RasterItemQuery> {\r
    boundingBox(value: Rect): this { this._pageItemQuery().item().boundingBox = value; return this; }\r
    embedded(value: boolean): this { this._pageItemQuery().item().embedded = value; return this; }\r
    matrix(value: Matrix): this { this._pageItemQuery().item().matrix = value; return this; }\r
    overprint(value: boolean): this { this._pageItemQuery().item().overprint = value; return this; }\r
    q():RasterItemQuery { return this._query as any; }\r
}\r
\r
class SetPlacedItemProperties extends SetPageItemProperties<PlacedItemQuery> {\r
    file(value: File): this { this._pageItemQuery().item().file = value; return this; }\r
    matrix(value: Matrix): this { this._pageItemQuery().item().matrix = value; return this; }\r
    q():PlacedItemQuery { return this._query as any; }\r
}\r
\r
class SetSymbolItemProperties extends SetPageItemProperties<SymbolItemQuery> {\r
    symbol(value: Symbol): this { this._pageItemQuery().item().symbol = value; return this; }\r
    q():SymbolItemQuery { return this._query as any; }\r
}\r
\r
class SetMeshItemProperties extends SetPageItemProperties<MeshItemQuery> {\r
    q():MeshItemQuery { return this._query as any; }\r
}\r
\r
class SetPluginItemProperties extends SetPageItemProperties<PluginItemQuery> {\r
    q():PluginItemQuery { return this._query as any; }\r
}\r
\r
class SetGraphItemProperties extends SetPageItemProperties<GraphItemQuery> {\r
    contentVariable(value: any): this { this._pageItemQuery().item().contentVariable = value; return this; }\r
    q():GraphItemQuery { return this._query as any; }\r
}\r
\r
class SetLegacyTextItemProperties extends SetPageItemProperties<LegacyTextItemQuery> {\r
    q():LegacyTextItemQuery { return this._query as any; }\r
}\r
\r
class SetNonNativeItemProperties extends SetPageItemProperties<NonNativeItemQuery> {\r
    q():NonNativeItemQuery { return this._query as any; }\r
}\r
\r
class SetSwatchProperties extends SetProperties<SwatchQuery> {\r
    color(value: Color): this { this.q().item().color = value; return this; }\r
    name(value: string): this { this.q().item().name = value; return this; }\r
    q():SwatchQuery { return this._query as any; }\r
}\r
\r
class SetBrushProperties extends SetProperties<BrushQuery> {\r
    name(value: string): this { this.q().item().name = value; return this; }\r
    q():BrushQuery { return this._query as any; }\r
}\r
\r
class SetTagProperties extends SetProperties<TagQuery> {\r
    name(value: string): this { this.q().item().name = value; return this; }\r
    value(value: string): this { this.q().item().value = value; return this; }\r
    q():TagQuery { return this._query as any; }\r
}\r
\r
class SetSymbolProperties extends SetProperties<SymbolQuery> {\r
    name(value: string): this { this.q().item().name = value; return this; }\r
    q():SymbolQuery { return this._query as any; }\r
}\r
\r
class SetTextRangeProperties extends SetProperties<TextRangeQuery> {\r
    characterOffset(value: number): this { this.q().item().characterOffset = value; return this; }\r
    contents(value: string): this { this.q().item().contents = value; return this; }\r
    kerning(value: number): this { this.q().item().kerning = value; return this; }\r
    length(value: number): this { this.q().item().length = value; return this; }\r
    q():TextRangeQuery { return this._query as any; }\r
}\r
\r
class SetInsertionPointProperties extends SetProperties<InsertionPointQuery> {\r
    q():InsertionPointQuery { return this._query as any; }\r
}\r
\r
class SetParagraphStyleProperties extends SetProperties<ParagraphStyleQuery> {\r
    q():ParagraphStyleQuery { return this._query as any; }\r
}\r
\r
class SetPatternProperties extends SetProperties<PatternQuery> {\r
    q():PatternQuery { return this._query as any; }\r
}\r
\r
class SetSpotProperties extends SetProperties<SpotQuery> {\r
    color(value: Color): this { this.q().item().color = value; return this; }\r
    colorType(value: ColorModel): this { this.q().item().colorType = value; return this; }\r
    q():SpotQuery { return this._query as any; }\r
}\r
\r
class SetCharacterStyleProperties extends SetProperties<CharacterStyleQuery> {\r
    q():CharacterStyleQuery { return this._query as any; }\r
}\r
\r
class SetArtStyleProperties extends SetProperties<ArtStyleQuery> {\r
    q():ArtStyleQuery { return this._query as any; }\r
}\r
\r
class SetVariableProperties extends SetProperties<VariableQuery> {\r
    kind(value: VariableKind): this { this.q().item().kind = value; return this; }\r
    q():VariableQuery { return this._query as any; }\r
}\r
\r
class SetDataSetProperties extends SetProperties<DataSetQuery> {\r
    q():DataSetQuery { return this._query as any; }\r
}\r
\r
class SetViewProperties extends SetProperties<ViewQuery> {\r
    centerPoint(value: Point | [number, number]): this { this.q().item().centerPoint = value; return this; }\r
    screenMode(value: ScreenMode): this { this.q().item().screenMode = value; return this; }\r
    zoom(value: number): this { this.q().item().zoom = value; return this; }\r
    q():ViewQuery { return this._query as any; }\r
}\r
\r
class SetPathPointProperties extends SetProperties<PathPointQuery> {\r
    anchor(value: Position): this { this.q().anchor(value); return this; }\r
    leftDirection(value: Position): this { this.q().leftDirection(value); return this; }\r
    pointType(value: PointType): this { this.q().item().pointType = value; return this; }\r
    rightDirection(value: Position): this { this.q().rightDirection(value); return this; }\r
    selected(value: PathPointSelection): this { this.q().item().selected = value; return this; }\r
    q():PathPointQuery { return this._query as any; }\r
}\r
\r
class SetGradientStopProperties extends SetProperties<GradientStopQuery> {\r
    color(value: Color): this { this.q().item().color = value; return this; }\r
    midPoint(value: number): this { this.q().item().midPoint = value; return this; }\r
    opacity(value: number): this { this.q().item().opacity = value; return this; }\r
    rampPoint(value: number): this { this.q().item().rampPoint = value; return this; }\r
    q():GradientStopQuery { return this._query as any; }\r
}\r
\r
class SetPropertiesTests extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    testIndex(): void {\r
        var doc = api.activeDocument();\r
        var layer = doc.activeLayer();\r
\r
        // Test moving in empty layer\r
        const path1 = layer.pathItems().createPathItem("Path 1");\r
        path1.set().index(0);\r
        this.assertEquals(path1.index(), 0, "Single item should stay at index 0");\r
\r
        // Test moving with multiple items\r
        const path2 = layer.pathItems().createPathItem("Path 2");\r
        const path3 = layer.pathItems().createPathItem("Path 3");\r
        const path4 = layer.pathItems().createPathItem("Path 4");\r
        \r
        path4.set().index(1);  // Move to middle\r
        this.assertEquals(path4.index(), 1, "Path4 should be at index 1");\r
        \r
        path2.set().index(0);  // Move to front\r
        this.assertEquals(path2.index(), 0, "Path2 should be at index 0");\r
        \r
        path3.set().index(3);  // Move to end\r
        this.assertEquals(path3.index(), 3, "Path3 should be at back");\r
\r
        // Test with new layer\r
        const layer2 = doc.layers().create();\r
        layer2.set().index(0);\r
        this.assertEquals(layer2.index(), 0, "New layer should move to front");\r
        \r
        // Cleanup\r
        layer.pathItems().removeAll();\r
        layer2.remove();\r
    }\r
\r
    testLocationToFront(): void {\r
        var doc = api.activeDocument();\r
        var layer = doc.activeLayer();\r
\r
        // Test with single item\r
        const single = layer.pathItems().create("Single").set().q();\r
        single.set().locationToFront();\r
        this.assertEquals(single.index(), 0, "Single item should stay at front");\r
\r
        // Test with three items\r
        const back = layer.pathItems().create().set("Back").q();\r
        const middle = layer.pathItems().create("Middle").set().q();\r
        const front = layer.pathItems().createPathItem("Front");\r
        \r
        back.set().locationToFront();\r
        this.assertEquals(back.index(), 0, "Back item should move to front");\r
        this.assertEquals(middle.index(), 2, "Middle item should shift back");\r
        \r
        middle.set().locationToFront();\r
        this.assertEquals(middle.index(), 0, "Middle item should move to front");\r
        this.assertEquals(back.index(), 1, "Previous front item should shift back");\r
\r
        // Test with layers\r
        const newLayer = doc.layers().create();\r
        newLayer.set().locationToFront();\r
        this.assertEquals(newLayer.index(), 0, "New layer should move to front");\r
        \r
        // Cleanup\r
        layer.pathItems().removeAll();\r
        newLayer.remove();\r
    }\r
\r
    testLocationToBack(): void {\r
        var doc = api.activeDocument();\r
        var layer = doc.activeLayer();\r
\r
        // Create several items in known positions\r
        const items = [\r
            layer.pathItems().create("Item 1"),\r
            layer.pathItems().create("Item 2"),\r
            layer.pathItems().create("Item 3"),\r
            layer.pathItems().create("Item 4"),\r
            layer.pathItems().create("Item 5")\r
        ];\r
\r
        // Test moving front item to back\r
        items[0].set().locationToBack();\r
        this.assertEquals(items[0].index(), 4, "Front item should move to back");\r
        \r
        // Test moving middle item to back\r
        items[2].set().locationToBack();\r
        this.assertEquals(items[2].index(), 4, "Middle item should move to back");\r
        this.assertEquals(items[0].index(), 3, "Previous back item should shift up");\r
\r
        // Test with layers\r
        const newLayer = doc.layers().create();\r
        const newLayer2 = doc.layers().create();\r
        newLayer.set().locationToBack();\r
        this.assertEquals(newLayer.index(), doc.layers().length() - 1, "Layer should move to back");\r
\r
        // Cleanup\r
        layer.pathItems().removeAll();\r
        newLayer.remove();\r
        newLayer2.remove();\r
    }\r
\r
    testLocationBefore(): void {\r
        var doc = api.activeDocument();\r
        var layer = doc.activeLayer();\r
\r
        // Create test items\r
        const items = [\r
            layer.pathItems().create("Item 1"),\r
            layer.pathItems().create("Item 2"),\r
            layer.pathItems().create("Item 3"),\r
            layer.pathItems().create("Item 4")\r
        ];\r
\r
        // Test moving to before first item\r
        items[3].set().locationBefore(items[0]);\r
        this.assertEquals(items[3].index(), 0, "Should move before first item");\r
\r
        // Test moving to middle\r
        items[1].set().locationBefore(items[3]);\r
        this.assertEquals(items[1].index(), items[3].index() - 1, "Should move before target item");\r
\r
        // Test with adjacent items\r
        items[2].set().locationBefore(items[1]);\r
        this.assertEquals(items[2].index(), items[1].index() - 1, "Should move before adjacent item");\r
\r
        // Test with layers\r
        const newLayer = doc.layers().create();\r
        const targetLayer = doc.layers().create();\r
        newLayer.set().locationBefore(targetLayer);\r
        this.assertEquals(newLayer.index(), targetLayer.index() - 1, "Layer should move before target");\r
\r
        // Cleanup\r
        layer.pathItems().removeAll();\r
        newLayer.remove();\r
        targetLayer.remove();\r
    }\r
\r
    testLocationAfter(): void {\r
        var doc = api.activeDocument();\r
        var layer = doc.activeLayer();\r
\r
        // Create test items\r
        const items = [\r
            layer.pathItems().create("First"),\r
            layer.pathItems().create("Second"),\r
            layer.pathItems().create("Third"),\r
            layer.pathItems().create("Fourth")\r
        ];\r
\r
        // Test moving to after last item\r
        items[0].set().locationAfter(items[3]);\r
        this.assertEquals(items[0].index(), 3, "Should move after last item");\r
\r
        // Test moving to middle\r
        items[2].set().locationAfter(items[1]);\r
        this.assertEquals(items[2].index(), items[1].index() + 1, "Should move after middle item");\r
\r
        // Test moving adjacent items\r
        items[1].set().locationAfter(items[2]);\r
        this.assertEquals(items[1].index(), items[2].index() + 1, "Should move after adjacent item");\r
\r
        // Test moving multiple times\r
        items[3].set().locationAfter(items[0]);\r
        items[3].set().locationAfter(items[2]);\r
        this.assertEquals(items[3].index(), items[2].index() + 1, "Should handle multiple moves");\r
\r
        // Test with layers\r
        const newLayer = doc.layers().create();\r
        const referenceLayer = doc.layers().create();\r
        newLayer.set().locationAfter(referenceLayer);\r
        this.assertEquals(newLayer.index(), referenceLayer.index() + 1, "Layer should move after reference");\r
\r
        // Cleanup\r
        layer.pathItems().removeAll();\r
        newLayer.remove();\r
        referenceLayer.remove();\r
    }\r
}`}),e(m,{identifier:"paste",type:".txt",children:`class Smoothing {\r
    // Bézier handle averaging\r
    static bezier(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) / 3;\r
            const deltaY = (next[1] - prev[1]) / 3;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // Catmull-Rom Spline smoothing\r
    static catmullRomSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) / 6;\r
            const deltaY = (next[1] - prev[1]) / 6;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // Tension-Based Smoothing\r
    static tensionSmooth(path: PathItemQuery, tension: number = 0.16): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) * tension;\r
            const deltaY = (next[1] - prev[1]) * tension;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // B-Spline Smoothing\r
    static bSplineSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 4) return; // B-splines require at least 4 control points\r
\r
        const smoothedAnchors: Position[] = [];\r
\r
        for (let i = 1; i < points.length() - 2; i++) {\r
            const p0 = points.at(i - 1).anchor();\r
            const p1 = points.at(i).anchor();\r
            const p2 = points.at(i + 1).anchor();\r
            const p3 = points.at(i + 2).anchor();\r
\r
            // Calculate smooth anchor position (weighted average)\r
            const smoothX = (p0[0] + 4 * p1[0] + p2[0]) / 6;\r
            const smoothY = (p0[1] + 4 * p1[1] + p2[1]) / 6;\r
\r
            // Influence outgoing direction using p3\r
            const deltaX = (p3[0] - p0[0]) / 6;\r
            const deltaY = (p3[1] - p0[1]) / 6;\r
\r
            const adjustedX = smoothX + deltaX;\r
            const adjustedY = smoothY + deltaY;\r
\r
            smoothedAnchors.push([adjustedX, adjustedY]);\r
        }\r
\r
        // Update path points with the smoothed anchors\r
        for (let i = 1; i < points.length() - 2; i++) {\r
            points.at(i).set()\r
                .pointType(PointType.SMOOTH)\r
                .anchor(smoothedAnchors[i - 1]);\r
        }\r
    }\r
\r
    // Cubic Spline Smoothing\r
    static cubicSplineSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        const n = points.length();\r
        const h = Array(n - 1);\r
        const a = Array(n);\r
\r
        for (let i = 0; i < n - 1; i++) {\r
            const p1 = points.at(i).anchor();\r
            const p2 = points.at(i + 1).anchor();\r
            h[i] = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);\r
            a[i] = p1;\r
        }\r
\r
        for (let i = 1; i < n - 1; i++) {\r
            points.at(i).set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([\r
                    a[i][0] - h[i - 1] / 3,\r
                    a[i][1] - h[i - 1] / 3\r
                ])\r
                .rightDirection([\r
                    a[i][0] + h[i] / 3,\r
                    a[i][1] + h[i] / 3\r
                ]);\r
        }\r
    }\r
}\r
`})]}),"Conversation1"),U=S(b),te=d(()=>r(U,{children:[j(),z(),W(),V()]}),"book");export{te as book};
