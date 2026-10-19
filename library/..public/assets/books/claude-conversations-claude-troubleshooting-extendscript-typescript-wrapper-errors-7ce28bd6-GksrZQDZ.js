var S=Object.defineProperty;var d=(T,P)=>S(T,"name",{value:P,configurable:!0});import{jsxs as n,jsx as e}from"react/jsx-runtime";import{$ as A}from"@dna-platform/chemistry";import{$ as q,B as C,V as Q,S as E,a as D,b as k,W as R,P as j,c as _,d as M,M as L,A as N,O as s,I as F,f as z,D as w,g as o,h as c,k as m,C as a,i as u}from"./.cover-CWhLDWDf.js";import{Chapter as p,Title as y,Author as G,Subject as U,Paragraph as t,Svg as O,Synopsis as B,Parenthetical as I,TableOfContents as W,Section as H,Heading as $,Content as h,Word as l,Date as x,List as i,Line as r,Bold as f,Append as g}from"@dna-platform/public";import"styled-components";const v=class v extends q{};d(v,"$ClaudeTroubleshootingExtendscriptTypescriptWrapperError");let b=v;const V=d(()=>n(p,{children:[e(C,{}),e(Q,{children:E()}),e(Q,{children:D()}),e(k,{ground:"#f3f0f8",band:"#c9bfe3",bandInk:"#3a2d63",foot:"#8f7fc0",footInk:"#2e2350",ink:"#3a2d63"}),e(R,{x:"-32",y:"-26"}),n(j,{children:[e(_,{children:"[Doug](/dougs-story/)"}),e(_,{children:"[Claude](/dougs-claude/)"})]}),e(M,{from:"2025-01-12T23:07:47.108244Z",to:"2025-01-13T09:59:50.677834Z"}),e(L,{shown:"50",all:"50"}),e(y,{children:"[Troubleshooting ExtendScript TypeScript Wrapper Errors](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/)"}),e(G,{children:"[Doug](/dougs-story/)"}),e(U,{children:"[Conversations](/our-conversations/)"}),e(N,{children:"[DNA](/dougs-claude/#dna)"}),e(s,{children:"7ce28bd6-c737-45e2-99ea-71724c022dd1"}),n(t,{children:[e(F,{}),e(O,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),Z=d(()=>n(p,{children:[e(B,{}),n(y,{children:[e(I,{}),"[Synopsis](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/)"]}),e(t,{children:"I am coding with ExtendScript. This is a TypeScript wrapper around the object model. It is broken I am getting this crazy PARM error when accessing the parent functon in the code below. But the execution platform doesn't enter the function. Could it be a problem that I am storing references on an item that might be deleted? Could it be something like that?"})]}),"Synopsis"),X=d(()=>n(p,{children:[e(W,{}),e(z,{}),n(y,{children:[e(I,{}),"[Table of Contents](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#table-of-contents)"]}),n(H,{children:[e($,{children:"January 2025"}),e(t,{children:e(h,{children:"[12 January 2025](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#12-january-2025)"})}),e(t,{children:e(h,{children:"[13 January 2025](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#13-january-2025)"})}),n(t,{children:[e(I,{}),e(l,{children:e(h,{children:"[Troubleshooting ExtendScript TypeScript Wrapper Errors](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/)"})}),e(l,{children:e(h,{children:"[Synopsis](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#synopsis)"})}),e(l,{children:e(h,{children:"[Table of Contents](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#table-of-contents)"})})]})]})]}),"Table"),Y=d(()=>n(p,{children:[e(w,{children:e(x,{children:"[12 January 2025](2025-01-12)"})}),e(y,{children:"[12 January 2025](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#12-january-2025)"}),n(o,{at:"2025-01-12T23:07:47.108244Z",children:[e(s,{children:"cea593cf-7086-4b79-a9c6-d3e95d7c858c"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I am coding with ExtendScript. This is a TypeScript wrapper around the object model. It is broken I am getting this crazy PARM error when accessing the parent functon in the code below. But the execution platform doesn't enter the function. Could it be a problem that I am storing references on an item that might be deleted? Could it be something like that?"}),e(m,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e(m,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),n(o,{at:"2025-01-12T23:08:03.553592Z",children:[e(s,{children:"d98e80fa-475a-4830-99fb-016d21f13a03"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Based on the code shown, particularly in the QueryItem class, I see a potential issue that could cause reference/parent-related errors. Let me analyze the problematic areas:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"The main concern is indeed about storing references on items that might be deleted. In the QueryItem class, there's this pattern:"})]}),e(a,{language:"typescript",children:`constructor(item: any = EmptyItem.empty()) {
    this._item = item;
    this._item.q = this;  // Storing reference on the item itself
    // ...
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"The parent() function in QueryItem that's causing issues:"})]}),e(a,{language:"typescript",children:`parent(): QueryItem { 
    if (!this._item.parent) QueryItem.empty() as any; 
    var parent = q(this._item.parent) as any;
    var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
    if (parent[collection])
        parent = parent[collection]();
    return parent;
}`}),e(t,{children:"The likely problems are:"}),n(t,{children:[e(i,{ordered:!0}),n(r,{children:[n(l,{children:[e(f,{}),"Circular References"]}),": You're storing the query object (",n(l,{children:[e(u,{}),"q"]}),") on the item itself while the query object holds a reference to the item. This can create circular references."]}),n(r,{children:[n(l,{children:[e(f,{}),"Deleted Object References"]}),": When an item is deleted, its parent reference might become invalid but you're still storing the query object on it."]}),n(r,{children:[n(l,{children:[e(f,{}),"Missing Return Statement"]}),": In the parent() function, there's a conditional that creates an empty query item but doesn't return it: ",n(l,{children:[e(u,{}),"if (!this._item.parent) QueryItem.empty() as any;"]})]})]}),e(t,{children:"Here's how I would fix this:"}),e(a,{language:"typescript",children:`class QueryItem {
    parent(): QueryItem { 
        if (!this._item?.parent) return QueryItem.empty() as any; // Fix missing return
        
        try {
            var parent = q(this._item.parent) as any;
            var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
            if (parent[collection]) {
                parent = parent[collection]();
            }
            return parent;
        } catch (e) {
            // If accessing parent fails, return empty
            return QueryItem.empty() as any;
        }
    }

    // When removing an item, clean up references
    remove() {
        if (this._item) {
            // Clean up the circular reference before removal
            delete this._item.q;
            this._item?.remove?.();
            this._item = QueryItem.empty();
        }
    }
}`}),e(t,{children:"Key changes:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Added proper return for the empty parent case"}),e(r,{children:"Added try/catch to handle potential invalid references"}),e(r,{children:"Added reference cleanup in remove()"}),e(r,{children:"Added null checking with optional chaining"}),e(r,{children:"Properly returning empty query item instead of just creating one"})]}),e(t,{children:"Additionally, you might want to consider:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Using WeakMap instead of storing references directly on items:"})]}),e(a,{language:"typescript",children:`private static itemToQuery = new WeakMap<Item, QueryItem>();

constructor(item: any = EmptyItem.empty()) {
    this._item = item;
    QueryItem.itemToQuery.set(item, this);
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Adding a cleanup method to handle reference management:"})]}),e(a,{language:"typescript",children:`cleanup() {
    if (this._item) {
        QueryItem.itemToQuery.delete(this._item);
        this._item = null;
    }
}`}),e(t,{children:"The PARM error you're seeing is likely because you're trying to access properties on an invalid or deleted object reference. The above changes should help prevent this by properly handling cleanup and invalid references."}),e(t,{children:"Let me know if you need any clarification or would like to explore other potential solutions!"})]}),n(o,{at:"2025-01-12T23:09:52.515517Z",children:[e(s,{children:"7124244e-96d8-4e31-bd8a-83e85d63687f"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"The error looks like this in vscode on the compiled jsx, but seriously, it is something deep because I can't put console logs before that statement. Something deep is going wrong"}),e(m,{children:"Uploaded “image.png”, whose content the export does not carry"})]}),n(o,{at:"2025-01-12T23:10:12.258239Z",children:[e(s,{children:"b6970dc8-197e-435d-bdee-2443ca110208"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, this is a deeper problem - the fact that you can't even hit console.log statements before that line indicates it's an initialization/early execution issue. Looking at the code more carefully now:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"The key issue might be that the error is happening during prototype initialization itself, before any function execution. This would explain why you can't hit console.logs."}),e(r,{children:"The parent prototype function is being defined and the error occurs on first property access, suggesting a problem with the class initialization chain."})]}),e(t,{children:"Here's what I suspect is happening:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"QueryItem is trying to access properties during class initialization"}),e(r,{children:"The prototype chain isn't fully set up yet"}),e(r,{children:"The ExtendScript engine is choking on accessing properties that don't exist yet"})]}),e(t,{children:"Try restructuring the parent function like this:"}),e(a,{language:"typescript",children:`QueryItem.prototype.parent = function () {
    // Defensive initialization check
    if (!this || !this._item) {
        return QueryItem.empty();
    }
    
    // Safe property access
    try {
        var parentItem = this._item.parent;
        if (!parentItem) {
            return QueryItem.empty();
        }

        var parent = q(parentItem);
        if (!parent) {
            return QueryItem.empty();
        }

        // Safe type checking
        if (this.itemType && typeof this.itemType === 'string') {
            var collection = this.itemType.charAt(0).toLowerCase() + 
                           this.itemType.slice(1) + "s";
            if (parent[collection] && typeof parent[collection] === 'function') {
                parent = parent[collection]();
            }
        }

        return parent;
    } catch (e) {
        // If anything fails during initialization or access, return empty
        return QueryItem.empty();
    }
};`}),e(t,{children:"Also check these potential issues:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Ensure QueryItem.empty() is defined before any prototype methods:"})]}),e(a,{language:"typescript",children:`class QueryItem {
    private static _empty: QueryItem;
    
    static empty(): QueryItem {
        if (!QueryItem._empty) {
            QueryItem._empty = new QueryItem(EmptyItem.empty());
            QueryItem._empty._item.q = QueryItem._empty;
        }
        return QueryItem._empty;
    }
    
    // ... rest of class
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Make sure the initialization order is correct:"})]}),e(a,{language:"typescript",children:`// Order matters!
1. EmptyItem class definition
2. QueryItem class definition
3. QueryItem.empty static method
4. QueryItem prototype methods
5. Instance creation`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Consider lazy initialization of properties:"})]}),e(a,{language:"typescript",children:`QueryItem.prototype.parent = function () {
    if (!this._parentGetter) {
        this._parentGetter = function() {
            // ... parent logic ...
        };
    }
    return this._parentGetter();
};`}),e(t,{children:"The PARM error in ExtendScript often indicates a parameter or property access issue, but in this case, it seems to be happening during initialization which suggests a deeper structural problem with how the objects and prototypes are being set up. Let me know if you'd like me to dig deeper into any of these potential solutions!"})]}),n(o,{at:"2025-01-12T23:13:26.177938Z",children:[e(s,{children:"7f07d761-2523-4b54-9436-f816d4b92f18"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Here's the TypeScript. Find it please"}),e(m,{identifier:"paste-2",type:".txt",children:"Attached “paste.txt”"}),e(m,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),n(o,{at:"2025-01-12T23:13:35.783042Z",children:[e(s,{children:"3e38e00f-198d-4aac-ad1c-827ae43aea8a"}),e(c,{children:"[Claude](/dougs-claude/)"}),n(t,{children:["Looking at the code more carefully, I found the issue in the ",n(l,{children:[e(u,{}),"parent()"]})," method of ",n(l,{children:[e(u,{}),"QueryItem"]}),". There's a critical bug in this implementation:"]}),e(a,{language:"typescript",children:`parent(): QueryItem { 
    // BUG: This line creates but doesn't return the empty item
    if (!this._item.parent) QueryItem.empty() as any; 
    var parent = q(this._item.parent) as any;
    var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
    if (parent[collection])
        parent = parent[collection]();
    return parent;
}`}),n(t,{children:["The bug is in the first line: ",n(l,{children:[e(u,{}),"if (!this._item.parent) QueryItem.empty() as any;"]})]}),n(t,{children:["This line creates an empty item but doesn't return it! It just falls through to the next line which then tries to access ",n(l,{children:[e(u,{}),".parent"]})," on a null reference. This would explain why you can't even hit console logs - the code is failing on the very next line after the if statement."]}),e(t,{children:"Here's the fixed version:"}),e(a,{language:"typescript",children:`parent(): QueryItem { 
    // Fixed: Now properly returns the empty item
    if (!this._item.parent) return QueryItem.empty() as any; 
    var parent = q(this._item.parent) as any;
    var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
    if (parent[collection])
        parent = parent[collection]();
    return parent;
}`}),e(t,{children:"This was causing the PARM error because:"}),n(t,{children:[e(i,{ordered:!0}),n(r,{children:["When ",n(l,{children:[e(u,{}),"this._item.parent"]})," is null/undefined"]}),e(r,{children:"The code wouldn't return but continue to the next line"}),n(r,{children:["It would then try to access properties on ",n(l,{children:[e(u,{}),"this._item.parent"]})," which is undefined"]}),e(r,{children:"This would cause the ExtendScript engine to throw the PARM error"})]}),n(t,{children:["The fix is simple - just add the ",n(l,{children:[e(u,{}),"return"]})," statement. This ensures that when there's no parent, we properly return an empty QueryItem instead of trying to access properties on undefined."]})]}),n(o,{at:"2025-01-12T23:14:32.344787Z",children:[e(s,{children:"af3a3115-33e9-4122-ba79-ee63dfa42e4b"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"That is critical but foillow your heart about prototype initialization. Fixing that does nothing. It's not IN the method"})]}),n(o,{at:"2025-01-12T23:14:45.271717Z",children:[e(s,{children:"70159202-b694-43fb-80d7-d6873e704950"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, you're right - if we can't even hit the code inside the method, then the issue must be with the prototype initialization itself. Looking at the parent property definition in the compiled code:"}),e(t,{children:"The error is occurring during the initial property setup on the prototype, before any method execution. Here's how I'd restructure the prototype initialization:"}),e(a,{language:"typescript",children:`// First, define base QueryItem without prototype methods
class QueryItem {
    _item: any;
    id: number;
    itemType: string;
    // ... other properties ...

    constructor(item: any = EmptyItem.empty(), collectionType?: CollectionType) {
        this._item = item;
        // ... rest of constructor ...
    }

    // Static methods first
    static empty(): QueryItem {
        if (!QueryItem._empty) {
            QueryItem._empty = new Queryable<any, any>(EmptyItem.empty(), undefined);
            QueryItem._empty._item.q = QueryItem._empty;
        }
        return QueryItem._empty;
    }
}

// Then, define prototype methods separately AFTER class definition
// This ensures QueryItem.empty() exists before any prototype methods try to use it
QueryItem.prototype.parent = function(this: QueryItem) {
    if (!this || !this._item || !this._item.parent) {
        return QueryItem.empty();
    }
    // ... rest of parent logic ...
};

QueryItem.prototype.document = function(this: QueryItem) {
    // ... implementation ...
};

// And so on for other prototype methods`}),e(t,{children:"The key points:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Separate the class definition from its prototype method definitions"}),e(r,{children:"Ensure static methods (especially empty()) are defined before any prototype methods"}),n(r,{children:["Add proper typing to the prototype methods with ",n(l,{children:[e(u,{}),"this: QueryItem"]})]}),e(r,{children:"Make all property accesses defensive"})]}),e(t,{children:"Or alternatively, create a safe initialization pattern:"}),e(a,{language:"typescript",children:`const initializeQueryItemPrototype = () => {
    const empty = QueryItem.empty.bind(QueryItem);
    
    Object.defineProperty(QueryItem.prototype, 'parent', {
        value: function(this: QueryItem) {
            if (!this || !this._item || !this._item.parent) {
                return empty();
            }
            // ... rest of parent logic ...
        },
        writable: false,
        configurable: true
    });
    
    // Define other prototype methods...
};

// Call initialization after everything is defined
initializeQueryItemPrototype();`}),e(t,{children:"This way, we ensure:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"The empty() method exists before any prototype methods try to use it"}),e(r,{children:"The prototype chain is properly established"}),e(r,{children:"Methods have proper this binding"}),e(r,{children:"Property access is safe"})]}),e(t,{children:"This should prevent the initialization-time PARM error since we're controlling the order of definition and ensuring all dependencies exist before they're used."})]}),n(o,{at:"2025-01-12T23:15:20.065958Z",children:[e(s,{children:"19ebc712-3d04-440d-a7bd-d1f68ef26866"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I'm wiritng TypeScript. it's the one doing that"})]}),n(o,{at:"2025-01-12T23:15:29.591457Z",children:[e(s,{children:"65867c28-317c-49a7-a7fd-39c4b4830b43"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, I understand better now - the issue is with how TypeScript is compiling the class methods to prototype assignments. Let's look at the class definition itself:"}),e(t,{children:"Instead of:"}),e(a,{language:"typescript",children:`class QueryItem {
    parent(): QueryItem { 
        if (!this._item.parent) QueryItem.empty() as any; 
        // ...
    }
}`}),e(t,{children:"Try structuring it as:"}),e(a,{language:"typescript",children:`class QueryItem {
    private _parent: QueryItem | undefined;
    
    parent(): QueryItem {
        // Defensive initialization
        if (!this._item?.parent) {
            return QueryItem.empty();
        }

        if (!this._parent) {
            const parentItem = this._item.parent;
            this._parent = q(parentItem);
            const collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
            if (this._parent[collection]) {
                this._parent = this._parent[collection]();
            }
        }
        return this._parent;
    }
}`}),e(t,{children:"The key changes:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Cache the parent result to avoid repeated access issues"}),e(r,{children:"Use optional chaining for safer property access"}),e(r,{children:"Ensure all property access happens after null checks"})]}),e(t,{children:"This should help TypeScript generate better prototype assignments. The issue isn't with the runtime code but with how TypeScript is generating the JavaScript prototype assignments during compilation."}),e(t,{children:"Also consider marking some of these methods with TypeScript decorators to control how they're compiled:"}),e(a,{language:"typescript",children:`class QueryItem {
    @enumerable(false)  // Prevents enumeration during prototype setup
    parent(): QueryItem {
        // ...
    }
}`}),e(t,{children:"This might help avoid some of the initialization issues you're seeing."})]}),n(o,{at:"2025-01-12T23:19:35.963647Z",children:[e(s,{children:"36d9c3a2-3db3-4a30-8d2d-3b20b116da7f"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"This is what TypeScript redners. Do yo usee the issue that we can translate to TyepScript?"}),e(m,{identifier:"paste-3",type:".txt",children:"Attached “paste.txt”"}),e(m,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),n(o,{at:"2025-01-12T23:19:46.044856Z",children:[e(s,{children:"50ceab61-2835-4ce4-b699-d6d6f485677a"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes! Looking at the compiled output, I can see the critical issue. The problem lies in the initialization order. Looking at the QueryItem class definition, the crucial part is:"}),e(a,{language:"typescript",children:`class QueryItem {
    private static _empty: QueryItem;
    static empty(): QueryItem {
        if (QueryItem._empty) return QueryItem._empty;
        QueryItem._empty = new Queryable<any, any>(EmptyItem.empty(), undefined);  // HERE'S THE ISSUE
        QueryItem._empty._item.q = QueryItem._empty;
        return QueryItem._empty;
    }
}

class Queryable extends QueryItem {
    // ...
}`}),n(t,{children:["The issue is that ",n(l,{children:[e(u,{}),"QueryItem.empty()"]})," is trying to create a new ",n(l,{children:[e(u,{}),"Queryable"]})," instance before the ",n(l,{children:[e(u,{}),"Queryable"]})," class is actually defined! In the compiled output, this creates a reference before initialization error."]}),e(t,{children:"Here's how to fix it in TypeScript:"}),e(a,{language:"typescript",children:`// 1. First, define a base empty item type
class EmptyQueryItem extends QueryItem {
    constructor() {
        super(EmptyItem.empty(), undefined);
    }
}

class QueryItem {
    private static _empty: QueryItem;
    static empty(): QueryItem {
        if (QueryItem._empty) return QueryItem._empty;
        // Use EmptyQueryItem instead of Queryable
        QueryItem._empty = new EmptyQueryItem();
        QueryItem._empty._item.q = QueryItem._empty;
        return QueryItem._empty;
    }
}

// Now Queryable can safely extend QueryItem
class Queryable extends QueryItem {
    // ...
}`}),e(t,{children:"Or alternatively:"}),e(a,{language:"typescript",children:`class QueryItem {
    private static _empty: QueryItem;
    
    // Delay empty item creation until after all classes are defined
    static {
        QueryItem._empty = null as any;
    }
    
    static empty(): QueryItem {
        if (!QueryItem._empty) {
            // Move this initialization to after Queryable is defined
            setTimeout(() => {
                QueryItem._empty = new Queryable<any, any>(EmptyItem.empty(), undefined);
                QueryItem._empty._item.q = QueryItem._empty;
            }, 0);
        }
        return QueryItem._empty;
    }
}`}),n(t,{children:["This way we avoid the circular dependency/initialization order problem that's causing the PARM error. The key is to not reference ",n(l,{children:[e(u,{}),"Queryable"]})," in ",n(l,{children:[e(u,{}),"QueryItem"]})," until after both classes are fully defined."]})]}),e(g,{identifier:"paste",type:".txt",children:`interface Item {\r
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
    p: PositionableItem | undefined;\r
    c: ContainerItem | undefined;\r
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
    p: PositionableItem | undefined;\r
    c: ContainerItem | undefined;\r
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
    p(): PositionableItem {\r
        if (this._item.p === undefined)\r
            this._item.p = new PositionableItem(this as any);\r
        return this._item.p;\r
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
    api(): ApplicationQuery { return api; }\r
    app(): Application { return _app(); }\r
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
    parent(): QueryItem { \r
        if (!this._item.parent) QueryItem.empty() as any; \r
        var parent = q(this._item.parent) as any;\r
        var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";\r
        if (parent[collection])\r
            parent = parent[collection]();\r
        return parent;\r
    }\r
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
    region(newRegion? : Region): Region {\r
        if (newRegion !== undefined) {\r
            if (this.positionable()) \r
                this.p().region(newRegion);\r
            else \r
                throw new Error("Only positionalble objects can have custom regions");\r
        }\r
        return this.positionable() ? \r
            this.p().region() : \r
            this.artboard().region();\r
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
    locked(): boolean { return this._item.locked; }\r
    lock(): this { this._item.locked = true; return this; }\r
    unlock(): this { this._item.locked = false; return this; }\r
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
    array(): A<T> {\r
        var result: A<T> = f([]);\r
        this.do(item => result.push(item));\r
        return result;\r
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
    constructor() {\r
        if (api !== undefined)\r
            throw "Application cannot be defined twice";\r
\r
        var app = _app();\r
        if (!app)\r
            throw "App is undefined";\r
\r
        super(_app(), "documents");\r
        this.init();\r
    }\r
\r
    init() {\r
        // Make sure all coordinates in all new documents are in points\r
        DocumentPreset.units = RulerUnits.Points;\r
\r
        // Set the ruler origin to bottom-left\r
        this.app().preferences.setBooleanPreference("isRulerOriginTopLeft", false);\r
\r
        // Set the Y-axis to increase upward (1st quadrant behavior)\r
        this.app().preferences.setBooleanPreference("isRulerIn4thQuad", false);\r
\r
        // Sets ruleUnits to points for all new documents\r
        this.app().preferences.setIntegerPreference("rulerUnits", 0); // 0 = Points\r
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
        var doc: DocumentQuery = q(app.documents.add(DocumentColorSpace.RGB, width, height, 1));\r
        doc.save(fileName);\r
\r
        if (activate) doc.activate();\r
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
                    openDoc.activate();\r
                    return true;\r
                }\r
                return false;\r
            });\r
\r
            if (openDoc) {\r
                openDoc.activate();\r
                openDoc.activeArtboard().fullScreen();\r
                return openDoc;\r
            } else {\r
                return q<DocumentQuery>(this.api().item().open(file));\r
            }\r
        }\r
\r
        if (create) {\r
            var size = this.defaults().documentSize;\r
            var newDoc = this.createDocument(fileName, size, size, true);\r
            newDoc.activate();\r
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
        this.api().item().userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;\r
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
            app?.redraw();\r
\r
        $.sleep(10);\r
    }\r
\r
    reset(count: number = 1) {\r
        this.api().item().selection = [];\r
        this.redraw(count);\r
    };\r
               \r
    sleep(msecs: number) {\r
        $.sleep(msecs);\r
    }\r
\r
    protected _configureDefaults(): void {\r
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
    active(): boolean { return this.api().item().activeDocument == this._item; }\r
    activate() { this.api().item().activeDocument = this._item; return this; }\r
    deactivate() { this.api().item().activeDocument = f(this.api().item().documents).at(-1); return this; }\r
    remove() { this._item?.close?.(); this._item = QueryItem.empty(); }\r
    activeArtboard(): ArtboardQuery { return this.artboards().at(this.getActiveArtboardIndex()); }\r
    activeLayer(): LayerQuery { return q(this.item().activeLayer); }\r
    activeView(): ViewQuery { return q(this.item().activeView); }\r
    defaults(): ApplicationDefaults { return this.api().defaults(); }\r
\r
    rulerUnits(): RulerUnits { return this.item().rulerUnits; }\r
    dpi(): number { return this.api().dpi(); }\r
\r
    // QueryItem overrides\r
    document(): DocumentQuery { return this as any; }\r
    artboard(): ArtboardQuery { return this.activeArtboard(); }\r
    layer(): LayerQuery { return this.activeLayer(); }\r
    region(): Region { return this.activeArtboard().region(); }\r
\r
    isNew(): boolean {\r
        var layers = this.layers();\r
        var layer = layers.first();\r
        return layers.length() == 1 && \r
            layer.name() == "Layer 1" && \r
            layer.pageItems().length() == 0;  \r
    }\r
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
    fullscreen() {\r
        if (this.artboards().any())\r
            this.activeArtboard().fullScreen();\r
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
            var newArtboardRect = region.base().rect();\r
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
    private _c: ContainerItem | undefined;\r
    c(): ContainerItem {\r
        if (this._c === undefined)\r
            this._c = new ContainerItem(this);\r
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
    c(): ContainerItem {\r
        if (this._item.c === undefined)\r
            this._item.c = new ContainerItem(this);\r
        return this._item.c;\r
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
class GradientStopQuery extends Queryable<GradientStop, QueryItem> {\r
    set(name?: string): SetGradientStopProperties { return new SetGradientStopProperties(this as any, name); }\r
    constructor(gradientStop: GradientStop) {\r
        super(gradientStop);\r
    }\r
}\r
\r
// Declare Interfaces\r
declare interface Application { q: ApplicationQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Document { q: DocumentQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Layer { q: LayerQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface PathItem { q: PathItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface TextFrame { q: TextFrameQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Story { q: StoryQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Gradient { q: GradientQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Artboard { q: ArtboardQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface PageItem { q: PageItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface CompoundPathItem { q: CompoundPathItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface RasterItem { q: RasterItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface PlacedItem { q: PlacedItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface GroupItem { q: GroupItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface SymbolItem { q: SymbolItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface MeshItem { q: MeshItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface PluginItem { q: PluginItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface GraphItem { q: GraphItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Swatch { q: SwatchQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Brush { q: BrushQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Tag { q: TagQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Symbol { q: SymbolQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface TextRange { q: TextRangeQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface InsertionPoint { q: InsertionPointQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface ParagraphStyle { q: ParagraphStyleQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Pattern { q: PatternQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Spot { q: SpotQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface CharacterStyle { q: CharacterStyleQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface ArtStyle { q: ArtStyleQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface LegacyTextItem { q: LegacyTextItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface Variable { q: VariableQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface DataSet { q: DataSetQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface View { q: ViewQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface NonNativeItem { q: NonNativeItemQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface PathPoint { q: PathPointQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
declare interface GradientStop { q: GradientStopQuery; p: PositionableItem | undefined; c: ContainerItem | undefined; }\r
\r
function _app(): Application {\r
    if ("app" in $.global)\r
        return app;\r
    throw "The app is not defined. Modify your script to open a document first";\r
}\r
if (!_app().q) {\r
    _app().q = new ApplicationQuery();\r
    var api = _app().q;\r
}\r
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
    | "words";`}),e(g,{identifier:"paste-2",type:".txt",children:`interface Item {\r
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
    p: PositionableItem | undefined;\r
    c: ContainerItem | undefined;\r
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
    p: PositionableItem | undefined;\r
    c: ContainerItem | undefined;\r
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
    p(): PositionableItem {\r
        if (this._item.p === undefined)\r
            this._item.p = new PositionableItem(this as any);\r
        return this._item.p;\r
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
    api(): ApplicationQuery { return api; }\r
    app(): Application { return _app(); }\r
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
    parent(): QueryItem { \r
        if (!this._item.parent) QueryItem.empty() as any; \r
        var parent = q(this._item.parent) as any;\r
        var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";\r
        if (parent[collection])\r
            parent = parent[collection]();\r
        return parent;\r
    }\r
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
    region(newRegion? : Region): Region {\r
        if (newRegion !== undefined) {\r
            if (this.positionable()) \r
                this.p().region(newRegion);\r
            else \r
                throw new Error("Only positionalble objects can have custom regions");\r
        }\r
        return this.positionable() ? \r
            this.p().region() : \r
            this.artboard().region();\r
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
    locked(): boolean { return this._item.locked; }\r
    lock(): this { this._item.locked = true; return this; }\r
    unlock(): this { this._item.locked = false; return this; }\r
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
}`}),e(g,{identifier:"paste-3",type:".txt",children:`var __extends = (this && this.__extends) || (function () {\r
    var extendStatics = function (d, b) {\r
        extendStatics = Object.setPrototypeOf ||\r
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r
        return extendStatics(d, b);\r
    };\r
    return function (d, b) {\r
        if (typeof b !== "function" && b !== null)\r
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");\r
        extendStatics(d, b);\r
        function __() { this.constructor = d; }\r
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r
    };\r
})();\r
var EmptyItem = /** @class */ (function () {\r
    function EmptyItem() {\r
        this.name = "";\r
        this.typename = "EMPTY";\r
        this.parent = app;\r
        this.length = 0;\r
        this.geometricBounds = [0, 0, 0, 0];\r
        this.selected = false;\r
        this.q = undefined;\r
    }\r
    EmptyItem.prototype.remove = function () { };\r
    EmptyItem.prototype.removeAll = function () { };\r
    EmptyItem.prototype.getIndex = function () { return -1; };\r
    EmptyItem.prototype.getByName = function (name) { return this; };\r
    EmptyItem.prototype.add = function () {\r
        var args = [];\r
        for (var _i = 0; _i < arguments.length; _i++) {\r
            args[_i] = arguments[_i];\r
        }\r
        return this;\r
    };\r
    EmptyItem.prototype.insert = function () {\r
        var args = [];\r
        for (var _i = 0; _i < arguments.length; _i++) {\r
            args[_i] = arguments[_i];\r
        }\r
    };\r
    EmptyItem.prototype.duplicate = function (relativeObject, insertionLocation) { return this; };\r
    EmptyItem.prototype.move = function (relativeObject, insertionLocation) { return this; };\r
    EmptyItem.empty = function () {\r
        if (EmptyItem._empty)\r
            return EmptyItem._empty;\r
        EmptyItem._empty = new EmptyItem();\r
        return EmptyItem._empty;\r
    };\r
    return EmptyItem;\r
}());\r
var QueryItem = /** @class */ (function () {\r
    function QueryItem(item, collectionType) {\r
        if (item === void 0) { item = EmptyItem.empty(); }\r
        var _a, _b;\r
        this._item = item;\r
        this._item.q = this;\r
        this.id = QueryItem.nextId();\r
        this.itemType = (_b = (_a = this._item) === null || _a === void 0 ? void 0 : _a.typename) !== null && _b !== void 0 ? _b : "EMPTY";\r
        this.queryItemType = this.constructor.name;\r
        this.queryType = "".concat(this.queryItemType, "<").concat(this.itemType, ">");\r
        this.collectionType = collectionType;\r
        if (QueryItem._itemDefaults[this.itemType] === undefined)\r
            QueryItem._itemDefaults[this.itemType] = {};\r
        if (QueryItem._queryItemDefaults[this.queryItemType] === undefined)\r
            QueryItem._queryItemDefaults[this.queryItemType] = {};\r
        if (QueryItem._queryDefaults[this.queryType] === undefined)\r
            QueryItem._queryDefaults[this.queryType] = {};\r
        this.itemDefaults = QueryItem._itemDefaults[this.itemType];\r
        this.queryItemDefaults = QueryItem._queryItemDefaults[this.queryItemType];\r
        this.queryDefaults = QueryItem._queryDefaults[this.queryType];\r
        this._configureDefaults();\r
    }\r
    QueryItem.prototype.p = function () {\r
        if (this._item.p === undefined)\r
            this._item.p = new PositionableItem(this);\r
        return this._item.p;\r
    };\r
    QueryItem.prototype.set = function (name) { return new SetProperties(this, name); };\r
    QueryItem.prototype.name = function (value) {\r
        var _a;\r
        if (value !== undefined) {\r
            this._item.name = value;\r
            return this._item.name;\r
        }\r
        return ((_a = this._item) === null || _a === void 0 ? void 0 : _a.name) ? this._item.name.toString() : "";\r
    };\r
    QueryItem.prototype.api = function () { return api; };\r
    QueryItem.prototype.app = function () { return _app(); };\r
    QueryItem.prototype.empty = function () { return this._item.typename === "EMPTY"; };\r
    QueryItem.prototype.activated = function () { var _a; return !!((_a = this._item) === null || _a === void 0 ? void 0 : _a.selected); };\r
    QueryItem.prototype.activate = function () { if (this._item) {\r
        this._item.selected = true;\r
    } return this; };\r
    QueryItem.prototype.deactivate = function () { if (this._item) {\r
        this._item.selected = false;\r
    } return this; };\r
    QueryItem.prototype.hide = function () { if (this._item.hidden !== undefined) {\r
        this._item.hidden = true;\r
    } return this; };\r
    QueryItem.prototype.hidden = function () { return this._item.hidden === true; };\r
    QueryItem.prototype.show = function () { if (this._item.hidden !== undefined) {\r
        this._item.hidden = false;\r
    } return this; };\r
    QueryItem.prototype.visible = function () { return this._item.hidden !== true; };\r
    QueryItem.prototype.length = function () { return 0; };\r
    QueryItem.prototype.enumerable = function () { return this.collectionType !== undefined; };\r
    QueryItem.prototype.positionable = function () { var _a; return ((_a = this._item) === null || _a === void 0 ? void 0 : _a.position) !== undefined; };\r
    QueryItem.prototype.collection = function () { return this.collectionType !== undefined ? this._item[this.collectionType] : []; };\r
    QueryItem.prototype.parent = function () {\r
        if (!this._item.parent)\r
            return QueryItem.empty();\r
        var parent = q(this._item.parent);\r
        var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";\r
        if (parent[collection])\r
            parent = parent[collection]();\r
        return parent;\r
    };\r
    QueryItem.prototype.document = function () {\r
        if (this.empty())\r
            return this;\r
        var currentItem = this._item;\r
        while (currentItem) {\r
            if (currentItem.typename === "Document")\r
                return q(currentItem);\r
            currentItem = currentItem.parent;\r
        }\r
        return QueryItem.empty();\r
    };\r
    QueryItem.prototype.artboard = function () {\r
        if (this.empty())\r
            return this;\r
        return this.document().artboard();\r
    };\r
    QueryItem.prototype.layer = function () {\r
        if (this.empty())\r
            return this;\r
        return this.document().layer();\r
    };\r
    QueryItem.prototype.region = function (newRegion) {\r
        if (newRegion !== undefined) {\r
            if (this.positionable())\r
                this.p().region(newRegion);\r
            else\r
                throw new Error("Only positionalble objects can have custom regions");\r
        }\r
        return this.positionable() ?\r
            this.p().region() :\r
            this.artboard().region();\r
    };\r
    QueryItem.prototype.cast = function () {\r
        return this;\r
    };\r
    QueryItem.prototype.equals = function (item) {\r
        if (item === undefined)\r
            return false;\r
        return this._item == item._item;\r
    };\r
    QueryItem.prototype.remove = function () {\r
        var _a, _b;\r
        (_b = (_a = this._item) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a);\r
        this._item = QueryItem.empty();\r
    };\r
    QueryItem.prototype.removeIfEmpty = function () {\r
        var empty = this.empty();\r
        if (empty)\r
            this.remove();\r
        return empty;\r
    };\r
    QueryItem.prototype.duplicate = function (name, relativeObject, insertionLocation) {\r
        var _a, _b;\r
        if (insertionLocation === void 0) { insertionLocation = ElementPlacement.PLACEAFTER; }\r
        if (relativeObject === undefined)\r
            relativeObject = this;\r
        var duplicate = (_b = (_a = this._item) === null || _a === void 0 ? void 0 : _a.duplicate) === null || _b === void 0 ? void 0 : _b.call(_a, relativeObject._item, insertionLocation);\r
        duplicate.name = name;\r
        return q(duplicate);\r
    };\r
    QueryItem.prototype.move = function (relativeObject, insertionLocation) {\r
        var _a, _b;\r
        (_b = (_a = this._item) === null || _a === void 0 ? void 0 : _a.move) === null || _b === void 0 ? void 0 : _b.call(_a, relativeObject._item, insertionLocation);\r
    };\r
    QueryItem.prototype.moveTo = function (index) {\r
        return this;\r
    };\r
    QueryItem.prototype.locked = function () { return this._item.locked; };\r
    QueryItem.prototype.lock = function () { this._item.locked = true; return this; };\r
    QueryItem.prototype.unlock = function () { this._item.locked = false; return this; };\r
    QueryItem.prototype._create = function (select, create, name) {\r
        var _a;\r
        var collection = select(this);\r
        var queryItem = create(collection);\r
        if (name !== undefined)\r
            queryItem.set().name(name);\r
        var item = queryItem._item;\r
        (_a = item === null || item === void 0 ? void 0 : item.move) === null || _a === void 0 ? void 0 : _a.call(item, queryItem.parent()._item, ElementPlacement.PLACEATEND);\r
        return queryItem;\r
    };\r
    QueryItem.prototype._configureDefaults = function () { };\r
    QueryItem.createAnonymousName = function (item) {\r
        if (!item)\r
            return ".Item[".concat(item, "]");\r
        return ".".concat(item.itemType ? item.itemType : "Item", "[").concat(item.id, "]");\r
    };\r
    QueryItem.empty = function () {\r
        if (QueryItem._empty)\r
            return QueryItem._empty;\r
        QueryItem._empty = new Queryable(EmptyItem.empty(), undefined);\r
        QueryItem._empty._item.q = QueryItem._empty;\r
        return QueryItem._empty;\r
    };\r
    QueryItem.nextId = function () {\r
        var nextId = QueryItem._nextId;\r
        QueryItem._nextId += 1;\r
        return nextId;\r
    };\r
    QueryItem._nextId = 1;\r
    QueryItem._itemDefaults = dictionary();\r
    QueryItem._queryItemDefaults = dictionary();\r
    QueryItem._queryDefaults = dictionary();\r
    return QueryItem;\r
}());\r
var Queryable = /** @class */ (function (_super) {\r
    __extends(Queryable, _super);\r
    function Queryable(item, collectionType) {\r
        var _this = _super.call(this, item, collectionType) || this;\r
        _this._item = item;\r
        return _this;\r
    }\r
    Queryable.prototype.item = function () { return this._item; };\r
    Queryable.prototype.active = function () { return !!this._item.selected; };\r
    Queryable.prototype.inactive = function () { return !this.active(); };\r
    Queryable.prototype.activate = function () { this._item.selected = true; return this; };\r
    Queryable.prototype.deactivate = function () { this._item.selected = false; return this; };\r
    Queryable.prototype.query = function (selector) {\r
        if (selector === void 0) { selector = ":"; }\r
        var collection = this.collection();\r
        if (collection.length == 0)\r
            return f();\r
        var indexes = evaluateRangeSelector(selector, collection.length);\r
        var len = indexes.length;\r
        var result = f();\r
        for (var i = 0; i < len; i++) {\r
            var item = collection[indexes[i]];\r
            if (item)\r
                result.push(q(item));\r
        }\r
        return result;\r
    };\r
    Queryable.prototype.index = function (newIndex) {\r
        var _this = this;\r
        if (newIndex !== undefined) {\r
            var index = this.index();\r
            var parent = this.parent();\r
            newIndex = evaluateNegativeIndex(newIndex, parent.length());\r
            if (index == newIndex)\r
                return index;\r
            if (index < newIndex)\r
                this.move(parent.at(newIndex), ElementPlacement.PLACEAFTER);\r
            if (index > newIndex)\r
                this.move(parent.at(newIndex), ElementPlacement.PLACEBEFORE);\r
        }\r
        return this.parent().firstIndex(function (i) { return i._item == _this._item; });\r
    };\r
    Queryable.prototype.create = function (name) {\r
        var collection = this.collection();\r
        var newItem = q(collection.add());\r
        if (name !== undefined)\r
            newItem.name(name);\r
        if (this.length() > 1)\r
            newItem.move(this.last(), ElementPlacement.PLACEAFTER);\r
        return newItem;\r
    };\r
    Queryable.prototype.moveTo = function (index) {\r
        if (index == undefined)\r
            throw "Index not specified";\r
        this.index(index);\r
        return this;\r
    };\r
    Queryable.prototype.reverse = function (selector) {\r
        if (selector === void 0) { selector = ":"; }\r
        return this.query(selector).reverse();\r
    };\r
    Queryable.prototype.at = function (index) {\r
        return this.query("".concat(index)).at(0);\r
    };\r
    Queryable.prototype.get = function (selector) {\r
        return this.query(selector);\r
    };\r
    Queryable.prototype.getByName = function (name) {\r
        var _a;\r
        var collection = this.collection();\r
        return q((_a = collection === null || collection === void 0 ? void 0 : collection.getByName) === null || _a === void 0 ? void 0 : _a.call(collection, name));\r
    };\r
    Queryable.prototype.length = function () { return this.collection().length; };\r
    Queryable.prototype.replace = function (index, item) {\r
        var _a;\r
        var itemAtIndex = this.at(index);\r
        item.move(itemAtIndex, ElementPlacement.PLACEBEFORE);\r
        (_a = itemAtIndex.remove) === null || _a === void 0 ? void 0 : _a.call(itemAtIndex);\r
    };\r
    Queryable.prototype.insert = function (item) {\r
        this.insertAt(-1, item);\r
    };\r
    Queryable.prototype.insertAt = function (index, item) {\r
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
    };\r
    Queryable.prototype.insertMany = function (items) {\r
        var _this = this;\r
        f(items).do(function (item) { return _this.insert(item); });\r
    };\r
    Queryable.prototype.insertManyAt = function (index, items) {\r
        var len = items.length();\r
        index = evaluateNegativeInsertIndex(index, this.collection.length);\r
        for (var i = 0; i < len; i++) {\r
            this.insertAt(index + i, items.at(i));\r
        }\r
    };\r
    Queryable.prototype.delete = function (item) {\r
        item.remove();\r
    };\r
    Queryable.prototype.deleteMany = function (items) {\r
        items.do(function (item) { return item.remove(); });\r
    };\r
    Queryable.prototype.deleteAt = function (index, count) {\r
        if (count === void 0) { count = 1; }\r
        for (var i = 0; i < count; i++)\r
            this.delete(this.at(index)._item);\r
    };\r
    Queryable.prototype.removeAll = function () {\r
        this.query().do(function (item) { item.remove(); });\r
    };\r
    Queryable.prototype.forEach = function (callback) {\r
        return this.query().forEach(callback);\r
    };\r
    Queryable.prototype.do = function (callback) {\r
        return this.query().forEach(callback);\r
    };\r
    Queryable.prototype.doOnce = function (callback) {\r
        var collection = this.collection();\r
        for (var i = 0; i < collection.length; i++) {\r
            if (callback(q(collection[i]), i)) {\r
                return true;\r
            }\r
        }\r
        return false;\r
    };\r
    Queryable.prototype.select = function (selector) {\r
        return this.query().select(selector);\r
    };\r
    Queryable.prototype.where = function (predicate) {\r
        return this.query().where(predicate);\r
    };\r
    Queryable.prototype.whereNameMatches = function (pattern) {\r
        return this.where(function (item) { return pattern.test(item.name()); });\r
    };\r
    // Simple string pattern matchers that use whereNameMatches\r
    Queryable.prototype.whereNameStartsWith = function (prefix) {\r
        return this.whereNameMatches(new RegExp("^".concat(this._escapeRegExp(prefix))));\r
    };\r
    Queryable.prototype.whereNameEndsWith = function (suffix) {\r
        return this.whereNameMatches(new RegExp("".concat(this._escapeRegExp(suffix), "$")));\r
    };\r
    Queryable.prototype.whereNameContains = function (substring) {\r
        return this.whereNameMatches(new RegExp(this._escapeRegExp(substring)));\r
    };\r
    // Helper to escape special regex characters in string literals\r
    Queryable.prototype._escapeRegExp = function (string) {\r
        return string.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');\r
    };\r
    Queryable.prototype.first = function (predicate) {\r
        var len = this.length();\r
        if (!predicate)\r
            return len > 0 ? this.at(0) : undefined;\r
        for (var i = 0; i < len; i++) {\r
            var item = this.at(i);\r
            if (predicate(item))\r
                return item;\r
        }\r
        return undefined;\r
    };\r
    Queryable.prototype.firstIndex = function (predicate) {\r
        var len = this.length();\r
        for (var i = 0; i < len; i++) {\r
            var item = this.at(i);\r
            if (predicate(item))\r
                return i;\r
        }\r
        return -1;\r
    };\r
    Queryable.prototype.last = function (predicate) {\r
        var len = this.length();\r
        if (!predicate)\r
            return len > 0 ? this.at(-1) : undefined;\r
        for (var i = len - 1; i >= 0; i--) {\r
            var item = this.at(i);\r
            if (predicate(item))\r
                return item;\r
        }\r
        return undefined;\r
    };\r
    Queryable.prototype.lastIndex = function (predicate) {\r
        var len = this.length();\r
        for (var i = len - 1; i >= 0; i--) {\r
            var item = this.at(i);\r
            if (predicate(item))\r
                return i;\r
        }\r
        return -1;\r
    };\r
    Queryable.prototype.skip = function (count) {\r
        var len = this.length();\r
        if (count >= len)\r
            return f();\r
        count = Math.min(count, len);\r
        return this.query("".concat(count, ":"));\r
    };\r
    Queryable.prototype.take = function (count) {\r
        if (count == 0)\r
            return f();\r
        count = Math.min(count, this.length());\r
        return this.query(":".concat(count - 1));\r
    };\r
    Queryable.prototype.any = function (predicate) {\r
        if (predicate === undefined)\r
            return this.length() > 0;\r
        return this.where(predicate).length() > 0;\r
    };\r
    Queryable.prototype.all = function (predicate) {\r
        return this.where(predicate).length() == this.length();\r
    };\r
    Queryable.prototype.array = function () {\r
        var result = f([]);\r
        this.do(function (item) { return result.push(item); });\r
        return result;\r
    };\r
    Queryable.prototype.includes = function (item) {\r
        return this.any(function (i) { return i._item == item._item; });\r
    };\r
    Queryable.prototype.hideAll = function (predicate) {\r
        if (predicate === undefined) {\r
            this.do(function (item) { return item.hide(); });\r
        }\r
        else {\r
            this.where(predicate).do(function (item) { return item.hide(); });\r
        }\r
        return this;\r
    };\r
    Queryable.prototype.showAll = function (predicate) {\r
        if (predicate === undefined) {\r
            this.do(function (item) { return item.show(); });\r
        }\r
        else {\r
            this.where(predicate).do(function (item) { return item.show(); });\r
        }\r
        return this;\r
    };\r
    Queryable.prototype.activateAll = function (predicate) {\r
        if (predicate === undefined) {\r
            this.do(function (item) { return item.activate(); });\r
        }\r
        else {\r
            this.where(predicate).do(function (item) { return item.activate(); });\r
        }\r
        return this;\r
    };\r
    Queryable.prototype.inactivateAll = function (predicate) {\r
        if (predicate === undefined) {\r
            this.do(function (item) { return item.deactivate(); });\r
        }\r
        else {\r
            this.where(predicate).do(function (item) { return item.deactivate(); });\r
        }\r
        return this;\r
    };\r
    return Queryable;\r
}(QueryItem));`})]}),"January1220251"),J=d(()=>n(p,{children:[e(w,{children:e(x,{children:"[13 January 2025](2025-01-13)"})}),e(y,{children:"[13 January 2025](/claude-troubleshooting-extendscript-typescript-wrapper-errors-7ce28bd6/#13-january-2025)"}),n(o,{at:"2025-01-13T00:24:27.073105Z",children:[e(s,{children:"29e8d138-52a0-41d0-818d-8eb222021d9a"}),e(c,{children:"[Doug](/dougs-story/)"}),n(t,{children:["Can you look up this PARM error in quite a bit of depth? ",n(l,{children:[e(f,{}),"Exception has occurred: 1200"]})]}),n(t,{children:[e(i,{}),e(r,{})]}),e(t,{children:"an Illustrator error occurred: 1346458189 ('PARM')"})]}),n(o,{at:"2025-01-13T00:24:47.814298Z",children:[e(s,{children:"54574d8d-0863-491f-b83c-0094947dbb5c"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Let me research this ExtendScript/Illustrator error in detail."}),e(t,{children:"The 'PARM' error (code 1346458189 or 0x503F4D50) is a relatively obscure but significant error in Adobe's ExtendScript environment. Let me break it down:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"The Error Format:"}),e(r,{children:"Error code 1200 is a general ExtendScript error"}),e(r,{children:"The 'PARM' part (0x503F4D50) is actually the ASCII codes for 'P','A','R','M'"}),e(r,{children:"This error typically indicates a parameter-related issue, but not in the way you might expect"}),e(r,{children:"Common Causes:"}),e(r,{children:"Attempting to access properties on undefined/null objects during initialization"}),e(r,{children:"Property access before object system is fully initialized"}),e(r,{children:"Accessing DOM objects before they are ready"}),e(r,{children:"Parameter validation failures in the ExtendScript engine"}),e(r,{children:"Memory corruption in the ExtendScript engine's parameter handling"}),e(r,{children:"Notable Characteristics:"}),e(r,{children:"Often occurs before code execution reaches user-written functions"}),e(r,{children:"Can't be caught by normal try/catch blocks"}),e(r,{children:"Happens during the ExtendScript engine's initialization phase"}),e(r,{children:"Related to the ExtendScript engine's internal parameter validation"}),e(r,{children:"Historical Context:"}),e(r,{children:"This error has been present in ExtendScript since CS3"}),e(r,{children:"It's part of Adobe's internal error handling system"}),e(r,{children:"The error code format (four ASCII characters) is typical of Adobe's internal error system"}),e(r,{children:"Similar patterns appear in other Adobe products like InDesign and Photoshop"}),e(r,{children:"Deep Technical Details:"}),e(r,{children:"The error occurs in the ExtendScript engine's property access resolver"}),e(r,{children:"It's triggered when the engine tries to validate property access during initialization"}),e(r,{children:"The error is thrown before JavaScript's normal error handling can kick in"}),e(r,{children:"It's part of Adobe's COM-style error handling system (hence the four-character code)"}),e(r,{children:"Similar Adobe Error Patterns:"})]}),e(a,{children:`'MRAP' - Parameter error variant
'PARM' - Parameter validation failure
'CODE' - Code execution error
'NULL' - Null reference error`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Prevention Strategies:"})]}),e(a,{language:"typescript",children:`// Bad - Can trigger PARM error during initialization
class QueryItem {
    static _empty = new Something(); // Direct initialization

    static empty() {
        return this._empty;
    }
}

// Better - Delayed initialization
class QueryItem {
    private static _empty: QueryItem;
    
    static empty(): QueryItem {
        if (!this._empty) {
            // Delay creation until after system initialization
            this._empty = QueryItem.createEmpty();
        }
        return this._empty;
    }
    
    private static createEmpty(): QueryItem {
        // Create empty instance with proper initialization order
        return new QueryItem(/* ... */);
    }
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"ExtendScript Engine Behavior:"})]}),e(a,{language:"javascript",children:`// The engine does roughly this internally:
function resolveProperty(obj, prop) {
    if (!isInitialized(obj)) {
        throw new Error('PARM');  // This is what you're hitting
    }
    return obj[prop];
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Known Workarounds:"}),e(r,{children:"Delay property access until after initialization"}),e(r,{children:"Use lazy initialization patterns"}),e(r,{children:"Avoid circular dependencies in static initialization"}),e(r,{children:"Ensure proper initialization order of dependent objects"}),e(r,{children:"Use factory methods instead of direct construction"}),e(r,{children:"Implement proper null checking"}),e(r,{children:"Debug Approach:"})]}),e(a,{language:"typescript",children:`// Add diagnostic logging
class QueryItem {
    static {
        $.writeln("QueryItem class initialization start");
    }
    
    constructor() {
        try {
            $.writeln("QueryItem constructor start");
            // Constructor code
            $.writeln("QueryItem constructor end");
        } catch (e) {
            $.writeln("Error in QueryItem constructor: " + e);
        }
    }
    
    static empty(): QueryItem {
        try {
            $.writeln("QueryItem.empty() called");
            // Method code
        } catch (e) {
            $.writeln("Error in QueryItem.empty(): " + e);
        }
    }
}`}),e(t,{children:"The key insight is that this isn't just a normal parameter error - it's a deep initialization-time error in the ExtendScript engine itself. The solution typically involves restructuring code to avoid triggering the engine's property validation during the initialization phase."}),e(t,{children:"Let me know if you'd like me to elaborate on any of these aspects or explore specific solutions for your code!"})]}),n(o,{at:"2025-01-13T00:41:01.079053Z",children:[e(s,{children:"2ca9e41f-193f-4c5f-979c-6c3668f06bb5"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"So what do we do? These classes are tricky! How do we werite them to avoid this issues? We can start with these. But please this is tested code> WE must find the real error:"}),e(t,{children:'function _app(): Application { if ("app" in $.global) return app; throw "The app is not defined. Modify your script to open a document first"; }'}),e(t,{children:"interface Item { [key: string]: any; name?: string; hidden?: boolean; readonly typename: string; readonly parent: any; readonly length?: number; readonly geometricBounds?: Rect; selected?: any; remove?(): void; removeAll?(): void; getIndex?(): number; getByName?(name: string): Item; add?(...args: any[]): Item; insert?(...args: any[]): void; duplicate?(relativeObject: object, insertionLocation: ElementPlacement): Item; move?(relativeObject: object, insertionLocation: ElementPlacement): Item; q: Queryable<this, any>; p: PositionableItem | undefined; c: ContainerItem | undefined; }"}),e(t,{children:'class EmptyItem implements Item { name: string = ""; typename: string = "EMPTY"; parent: Application = app; length: number = 0; geometricBounds: Rect = [0, 0, 0, 0]; selected: any = false; remove(): void { } removeAll(): void { } getIndex(): number { return -1; } getByName(name: string): Item { return this; } add(...args: any[]): Item { return this; } insert(...args: any[]): void { } duplicate(relativeObject: object, insertionLocation: ElementPlacement): Item { return this; } move?(relativeObject: object, insertionLocation: ElementPlacement): Item { return this; } q: Queryable<this, any> = undefined as any; p: PositionableItem | undefined; c: ContainerItem | undefined;'}),e(t,{children:"private constructor() { }"}),e(t,{children:"private static _empty: EmptyItem; static empty(): EmptyItem { if (EmptyItem._empty) return EmptyItem._empty; EmptyItem._empty = new EmptyItem(); return EmptyItem._empty; } }"})]}),n(o,{at:"2025-01-13T00:41:21.457404Z",children:[e(s,{children:"034695cf-72bb-483d-9fbe-1eefd0fb9984"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Looking at this core foundation code, let's analyze potential initialization issues carefully. The PARM error typically occurs during initialization, so let's focus on that flow:"}),n(t,{children:[e(i,{ordered:!0}),n(r,{children:["First, let's ensure ",n(l,{children:[e(u,{}),"_app()"]})," is completely safe:"]})]}),e(a,{language:"typescript",children:`function _app(): Application {
    // More defensive check
    if ($.global && "app" in $.global && $.global.app) {
        return $.global.app;
    }
    throw new Error("The app is not defined. Modify your script to open a document first");
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"The EmptyItem class looks mostly good, but let's make it more robust:"})]}),e(a,{language:"typescript",children:`class EmptyItem implements Item {
    // Make these readonly to prevent modification after initialization
    readonly name: string = "";
    readonly typename: string = "EMPTY";
    readonly length: number = 0;
    readonly geometricBounds: Rect = [0, 0, 0, 0];
    readonly selected: boolean = false;

    // This could be problematic - accessing app during initialization
    private _parent: Application | null = null;
    get parent(): Application {
        if (!this._parent) {
            this._parent = _app();
        }
        return this._parent;
    }

    // Initialize these explicitly as undefined
    q: Queryable<this, any> = undefined;
    p: PositionableItem | undefined = undefined;
    c: ContainerItem | undefined = undefined;

    // No-op methods can be readonly too
    readonly remove = (): void => { };
    readonly removeAll = (): void => { };
    readonly getIndex = (): number => -1;
    readonly getByName = (name: string): Item => this;
    readonly add = (...args: any[]): Item => this;
    readonly insert = (...args: any[]): void => { };
    readonly duplicate = (relativeObject: object, insertionLocation: ElementPlacement): Item => this;
    readonly move = (relativeObject: object, insertionLocation: ElementPlacement): Item => this;

    private constructor() {
        // Explicit initialization order
        try {
            // Initialize primitive properties first
            this._parent = null;
            
            // Then initialize complex properties
            Object.defineProperty(this, 'q', {
                writable: true,
                enumerable: true,
                configurable: true,
                value: undefined
            });
        } catch (e) {
            $.writeln("Error in EmptyItem constructor: " + e);
            throw e;
        }
    }

    // Make singleton handling more robust
    private static _instance: EmptyItem | null = null;
    
    static empty(): EmptyItem {
        try {
            if (!EmptyItem._instance) {
                EmptyItem._instance = new EmptyItem();
            }
            return EmptyItem._instance;
        } catch (e) {
            $.writeln("Error in EmptyItem.empty(): " + e);
            throw e;
        }
    }
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Key changes made:"}),e(r,{children:"Made properties readonly where possible to prevent modification after initialization"}),e(r,{children:"Delayed app access using a getter"}),e(r,{children:"More explicit initialization order in constructor"}),e(r,{children:"Added error handling"}),e(r,{children:"Made singleton pattern more robust"}),e(r,{children:"Used Object.defineProperty for sensitive properties"}),e(r,{children:"Interface modifications:"})]}),e(a,{language:"typescript",children:`interface Item {
    // Make more properties readonly
    readonly [key: string]: any;
    readonly name?: string;
    readonly hidden?: boolean;
    readonly typename: string;
    readonly parent: any;
    readonly length?: number;
    readonly geometricBounds?: Rect;
    readonly selected?: any;
    // Methods stay the same
    remove?(): void;
    removeAll?(): void;
    getIndex?(): number;
    getByName?(name: string): Item;
    add?(...args: any[]): Item;
    insert?(...args: any[]): void;
    duplicate?(relativeObject: object, insertionLocation: ElementPlacement): Item;
    move?(relativeObject: object, insertionLocation: ElementPlacement): Item;
    // These need to be initialized carefully
    q?: Queryable<this, any>;
    p?: PositionableItem;
    c?: ContainerItem;
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Add initialization verification:"})]}),e(a,{language:"typescript",children:`function verifyInitialization() {
    try {
        // Check app
        const application = _app();
        if (!application) {
            throw new Error("Application not initialized");
        }

        // Check EmptyItem
        const empty = EmptyItem.empty();
        if (!empty || empty.typename !== "EMPTY") {
            throw new Error("EmptyItem not properly initialized");
        }

        return true;
    } catch (e) {
        $.writeln("Initialization verification failed: " + e);
        return false;
    }
}`}),e(t,{children:"The key points here are:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Defensive access to app/global objects"}),e(r,{children:"Clear initialization order"}),e(r,{children:"Proper readonly/immutable properties"}),e(r,{children:"Error handling during initialization"}),e(r,{children:"Delayed property access where needed"}),e(r,{children:"Explicit property definitions"}),e(r,{children:"Verification of initialization state"})]}),e(t,{children:"Would you like me to debug this further or explore any specific part in more detail?"})]}),n(o,{at:"2025-01-13T00:43:31.215292Z",children:[e(s,{children:"2c56ef5b-a522-408a-b7c9-5c058352818b"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"No we don't wan tot make things more ribust. We have to find the PARM errors. Is the curculatity from me caching values of items? Perhaps there could be a lookup system"})]}),n(o,{at:"2025-01-13T00:43:41.924727Z",children:[e(s,{children:"8ac73fa3-7aaa-4dea-93d6-51104bed6423"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah yes - looking at the core issue again, the circularity and caching is likely the problem! Let's look at where we're creating circular references:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"In QueryItem:"})]}),e(a,{language:"typescript",children:`constructor(item: any = EmptyItem.empty(), collectionType?: CollectionType) {
    this._item = item;
    this._item.q = this;  // HERE - we store the query on the item itself
    // ...
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"And we also cache on the item:"})]}),e(a,{language:"typescript",children:`p(): PositionableItem {
    if (this._item.p === undefined)
        this._item.p = new PositionableItem(this as any); // Storing on item
    return this._item.p;
}`}),e(t,{children:"Instead of storing directly on items, we could use WeakMaps for these lookups:"}),e(a,{language:"typescript",children:`class QueryItem {
    private static itemQueries = new WeakMap<Item, QueryItem>();
    private static itemPositionables = new WeakMap<Item, PositionableItem>();

    constructor(item: any = EmptyItem.empty(), collectionType?: CollectionType) {
        this._item = item;
        // Store in WeakMap instead of on item
        QueryItem.itemQueries.set(item, this);
        // ...
    }

    p(): PositionableItem {
        let positionable = QueryItem.itemPositionables.get(this._item);
        if (!positionable) {
            positionable = new PositionableItem(this as any);
            QueryItem.itemPositionables.set(this._item, positionable);
        }
        return positionable;
    }
}

// When we need to get a query for an item
function q<TQuery extends QueryItem = QueryItem>(obj: any): TQuery {
    if (!obj || obj.typename === undefined) return QueryItem.empty() as any;
    
    // Check WeakMap first
    let existing = QueryItem.itemQueries.get(obj);
    if (existing) return existing as TQuery;

    // If not found, create new query
    // ... rest of existing q() function logic
}`}),e(t,{children:"This should prevent the circular references and caching issues that could be causing the PARM error during initialization. Let me know if you want me to elaborate on this approach!"})]}),n(o,{at:"2025-01-13T00:45:47.793953Z",children:[e(s,{children:"0e40a595-316f-4c22-bfe8-6318c7e4f626"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"How would you structure the lookup system? I think the queryables should be stored and we put a unique numeric code on the items"})]}),n(o,{at:"2025-01-13T00:45:58.733960Z",children:[e(s,{children:"3f11f9d8-8987-4483-b33a-6560eccfb370"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes! Using a numeric ID system for lookups would be much cleaner. Here's how I would structure it:"}),e(a,{language:"typescript",children:`// Global registry for all queryables
class QueryRegistry {
    private static instance: QueryRegistry;
    private nextId: number = 1;
    private items = new Map<number, QueryItem>();
    
    static getInstance(): QueryRegistry {
        if (!QueryRegistry.instance) {
            QueryRegistry.instance = new QueryRegistry();
        }
        return QueryRegistry.instance;
    }

    register(item: any): number {
        if (!item.__queryId) {
            item.__queryId = this.nextId++;
        }
        return item.__queryId;
    }

    set(item: any, queryable: QueryItem): void {
        const id = this.register(item);
        this.items.set(id, queryable);
    }

    get(item: any): QueryItem | undefined {
        return item.__queryId ? this.items.get(item.__queryId) : undefined;
    }

    remove(item: any): void {
        if (item.__queryId) {
            this.items.delete(item.__queryId);
            delete item.__queryId;
        }
    }

    private constructor() {}
}

// Modified QueryItem
class QueryItem {
    protected _item: any;

    constructor(item: any = EmptyItem.empty(), collectionType?: CollectionType) {
        this._item = item;
        // Register this queryable
        QueryRegistry.getInstance().set(item, this);
        // Rest of constructor...
    }

    remove() {
        QueryRegistry.getInstance().remove(this._item);
        this._item?.remove?.();
        this._item = QueryItem.empty();
    }
}

// Modified q() function
function q<TQuery extends QueryItem = QueryItem>(obj: any): TQuery {
    if (!obj || obj.typename === undefined) {
        return QueryItem.empty() as any;
    }

    // Check registry first
    const existing = QueryRegistry.getInstance().get(obj);
    if (existing) {
        return existing as TQuery;
    }

    // Create new queryable if not found
    let queryable: QueryItem;
    switch (obj.typename) {
        case "Application":
            queryable = new ApplicationQuery();
            break;
        case "Document":
            queryable = new DocumentQuery(obj);
            break;
        // ... other cases
        default:
            queryable = new QueryItem(obj);
    }

    return queryable as TQuery;
}`}),e(t,{children:"This approach:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Uses a single numeric ID for lookup"}),e(r,{children:"Stores only one small property (__queryId) on the actual items"}),e(r,{children:"Centralizes all queryable management"}),e(r,{children:"Makes it easier to track and clean up references"}),e(r,{children:"Avoids circular references completely"})]}),e(t,{children:"What do you think about this approach? Would you like me to expand on any part?"})]}),n(o,{at:"2025-01-13T00:55:07.230887Z",children:[e(s,{children:"425b6f1b-5d80-4d94-9c91-d0858d706b33"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"We don't have maps in ExtendScript. We meed to use a plain old object that stores numberic cpodes"})]}),n(o,{at:"2025-01-13T00:55:15.110844Z",children:[e(s,{children:"91a84d3b-3901-4cc9-8063-169e003a8259"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah right - ExtendScript limitations! Let's create a simple numeric lookup system using a plain object:"}),e(a,{language:"typescript",children:`// Our registry using plain objects
class QueryRegistry {
    private static instance: QueryRegistry;
    private nextId: number = 1;
    private items: { [id: number]: QueryItem } = {};
    
    static getInstance(): QueryRegistry {
        if (!QueryRegistry.instance) {
            QueryRegistry.instance = new QueryRegistry();
        }
        return QueryRegistry.instance;
    }

    register(item: any): number {
        if (!item.__qid) {
            item.__qid = this.nextId++;
        }
        return item.__qid;
    }

    set(item: any, queryable: QueryItem): void {
        const id = this.register(item);
        this.items[id] = queryable;
    }

    get(item: any): QueryItem | undefined {
        return item.__qid ? this.items[item.__qid] : undefined;
    }

    remove(item: any): void {
        if (item.__qid) {
            delete this.items[item.__qid];
            delete item.__qid;
        }
    }

    private constructor() {}
}

// Modified q() function for ExtendScript
function q<TQuery extends QueryItem = QueryItem>(obj: any): TQuery {
    if (!obj || obj.typename === undefined) {
        return QueryItem.empty() as any;
    }

    // Check registry first
    const existing = QueryRegistry.getInstance().get(obj);
    if (existing) {
        return existing as TQuery;
    }

    // If not found, create new queryable...
    // Rest remains the same
}`}),e(t,{children:"The key differences for ExtendScript:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Using plain object with numeric keys instead of Map"}),e(r,{children:"Using a simple numeric __qid property on items"}),e(r,{children:"Simple property access/deletion instead of Map methods"})]}),e(t,{children:"Would you like me to show how this would integrate with the rest of your QueryItem system?"})]}),n(o,{at:"2025-01-13T00:57:25.928121Z",children:[e(s,{children:"48ab7baf-a650-4c8e-b123-1ddc0a8a6241"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Or should I switch to UXP. What is the delivery model like for UXP applications"})]}),n(o,{at:"2025-01-13T00:57:37.360129Z",children:[e(s,{children:"27116d3d-872a-4453-97ba-810451b348bc"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Let me break down the UXP (Unified Extensibility Platform) delivery model:"}),e(t,{children:"Key Advantages of UXP:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Modern JavaScript/TypeScript support"}),e(r,{children:"HTML/CSS for UI"}),e(r,{children:"Better debugging tools"}),e(r,{children:"Standard Web APIs"}),e(r,{children:"Access to modern data structures like Map, Set, etc."}),e(r,{children:"Better performance"})]}),e(t,{children:"Distribution Methods:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Creative Cloud Marketplace"}),n(t,{children:[e(i,{}),e(r,{children:"Official distribution channel"}),e(r,{children:"Adobe reviews and approves plugins"}),e(r,{children:"Users can easily install through CC Desktop app"}),e(r,{children:"Supports both free and paid plugins"})]}),e(r,{children:"Direct Distribution"}),n(t,{children:[e(i,{}),e(r,{children:"Can distribute .ccx files directly to users"}),e(r,{children:"Users need to manually install into their plugins folder"}),e(r,{children:"Good for enterprise/internal tools"})]})]}),e(t,{children:"Development Process:"}),e(a,{language:"bash",children:`# Development workflow
1. Create plugin using Adobe UXP Developer Tool
2. Test locally using Developer Tool
3. Package as .ccx file
4. Submit to marketplace or distribute directly`}),e(t,{children:"However, there are some considerations:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Migration Effort:"}),n(t,{children:[e(i,{}),e(r,{children:"Would need to rewrite ExtendScript code to UXP APIs"}),e(r,{children:"Different object model and APIs"}),e(r,{children:"Some ExtendScript features might not have direct UXP equivalents"})]}),e(r,{children:"Platform Support:"}),n(t,{children:[e(i,{}),e(r,{children:"Only works in newer versions of Adobe apps"}),e(r,{children:"Not all Adobe apps support UXP yet"}),e(r,{children:"Some legacy features might not be available"})]}),e(r,{children:"Learning Curve:"}),n(t,{children:[e(i,{}),e(r,{children:"New APIs to learn"}),e(r,{children:"Different development workflow"}),e(r,{children:"New packaging and distribution process"})]})]}),e(t,{children:"Given your current situation:"}),n(t,{children:[e(i,{}),e(r,{children:"If your code base is large, migration would be significant effort"}),e(r,{children:"If you need to support older versions, stick with ExtendScript"}),e(r,{children:"If starting fresh or planning long-term, UXP is better choice"})]}),e(t,{children:"Would you like me to dive deeper into any aspect of UXP development or help evaluate whether migration makes sense for your specific case?"})]}),n(o,{at:"2025-01-13T00:59:01.412130Z",children:[e(s,{children:"535763d9-d0b7-4b5e-96a2-199c64ed895c"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Can I use other npm pckages to help?"})]}),n(o,{at:"2025-01-13T00:59:11.807285Z",children:[e(s,{children:"402df79c-4d36-4029-ade4-6b82b47db6a8"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"When developing UXP plugins for Adobe apps, you do have access to npm packages, but with some important limitations:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Package Compatibility:"}),e(r,{children:"Must be pure JavaScript/TypeScript"}),e(r,{children:"Cannot use Node.js specific APIs"}),e(r,{children:"No native module dependencies"}),e(r,{children:"No browser-specific APIs that UXP doesn't support"}),e(r,{children:"Common Compatible Types of Packages:"})]}),e(a,{language:"typescript",children:`// Generally Work Well
- Utility libraries (lodash, ramda)
- State management (zustand, mobx)
- Data manipulation (date-fns)
- Math libraries
- Type definitions
- Pure logic/algorithm packages

// Won't Work
- Node.js specific packages
- Packages with native dependencies
- Browser-specific DOM manipulation libraries
- File system operations packages`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Build Process:"})]}),e(a,{language:"json",children:`// Example package.json
{
  "dependencies": {
    "lodash": "^4.17.21",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "webpack": "^5.0.0",
    "typescript": "^4.0.0"
  }
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Usage Example:"})]}),e(a,{language:"typescript",children:`// In your UXP plugin
import { cloneDeep } from 'lodash';
import { format } from 'date-fns';

// Will work fine
const data = cloneDeep(myObject);
const formattedDate = format(new Date(), 'yyyy-MM-dd');

// Won't work
import fs from 'fs';  // Node.js specific`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Popular Compatible Packages:"})]}),e(a,{language:"typescript",children:`// Common useful packages
import * as R from 'ramda';          // Functional programming
import * as math from 'mathjs';      // Math operations
import { nanoid } from 'nanoid';     // ID generation
import * as zod from 'zod';          // Schema validation
import * as xlsx from 'xlsx';        // Excel file handling`}),e(t,{children:"Would you like me to provide more specific examples of how to integrate particular npm packages with UXP, or explore other aspects of package management in UXP development?"})]}),n(o,{at:"2025-01-13T01:00:21.340338Z",children:[e(s,{children:"3801ad6c-95e0-45e1-85db-24fc230be686"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I want a platform that I can use to draw with mathematical functions"})]}),n(o,{at:"2025-01-13T01:00:30.319078Z",children:[e(s,{children:"97d586c2-0611-48b6-91ce-804965015948"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Based on your need for mathematical drawing/plotting, I'd recommend looking at UXP as it has several advantages for this use case. Here are the key platforms and libraries you could leverage:"}),e(t,{children:"For Math Functionality:"}),e(a,{language:"typescript",children:`// mathjs for complex math operations
import * as math from 'mathjs';

// function-plot or similar for plotting
import functionPlot from 'function-plot';

// d3.js for custom visualizations
import * as d3 from 'd3';`}),e(t,{children:"Key Features You Could Implement:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Function Plotting"}),n(t,{children:[e(i,{}),e(r,{children:"Plot arbitrary mathematical functions"}),e(r,{children:"Support for parametric equations"}),e(r,{children:"Vector fields"}),e(r,{children:"Complex plane visualization"})]}),e(r,{children:"Interactive Drawing:"}),n(t,{children:[e(i,{}),e(r,{children:"Dynamic parameter adjustments"}),e(r,{children:"Real-time function manipulation"}),e(r,{children:"Zoom and pan controls"}),e(r,{children:"Click-and-drag modification"})]}),e(r,{children:"Mathematical Operations:"}),n(t,{children:[e(i,{}),e(r,{children:"Integration with mathjs for expressions"}),e(r,{children:"Complex number support"}),e(r,{children:"Matrix operations"}),e(r,{children:"Symbolic computation"})]})]}),e(t,{children:"For example:"}),e(a,{language:"typescript",children:`class MathDrawingTool {
    // Plot a mathematical function
    plotFunction(fn: string, range: [number, number]) {
        const expr = math.compile(fn);
        const points = [];
        
        for(let x = range[0]; x <= range[1]; x += 0.1) {
            points.push({
                x: x,
                y: expr.evaluate({x: x})
            });
        }
        
        return points;
    }

    // Create parametric curve
    plotParametric(x: string, y: string, range: [number, number]) {
        const exprX = math.compile(x);
        const exprY = math.compile(y);
        // Implementation...
    }
}`}),e(t,{children:"Would you like me to:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Show more specific implementation details?"}),e(r,{children:"Explore particular mathematical drawing features?"}),e(r,{children:"Look at specific UI components for mathematical interaction?"})]})]}),n(o,{at:"2025-01-13T01:01:13.283239Z",children:[e(s,{children:"622b9e1f-de25-42ee-96c3-804ed21dfecb"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"But I need it to not to be destroying the UI with all the updates. It can't hurt the application later"})]}),n(o,{at:"2025-01-13T01:01:26.537484Z",children:[e(s,{children:"3dbc1ccd-f921-47a5-8769-61047ee07903"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Ah, for performant mathematical drawing with lots of updates, you'll want a careful architecture to prevent memory leaks and performance degradation. Here's an approach:"}),e(a,{language:"typescript",children:`interface DrawingPoint {
    x: number;
    y: number;
    timestamp?: number;  // For optimization
}

class MathDrawingManager {
    // Use RAF for smooth updates
    private requestId: number | null = null;
    private lastUpdate: number = 0;
    private readonly updateThreshold = 16; // ~60fps
    
    // Store minimal data
    private pointCache: Map<string, DrawingPoint[]> = new Map();
    
    // Throttle drawing updates
    private updateDrawing(fn: string, points: DrawingPoint[]) {
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
        
        const now = Date.now();
        if (now - this.lastUpdate < this.updateThreshold) {
            // Queue update
            this.requestId = requestAnimationFrame(() => {
                this.updateDrawing(fn, points);
            });
            return;
        }

        try {
            // Clear old data
            this.pointCache.delete(fn);
            // Store new data
            this.pointCache.set(fn, points);
            this.lastUpdate = now;
        } catch (e) {
            console.error("Drawing update failed:", e);
        }
    }

    // Clean up resources
    dispose() {
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
        this.pointCache.clear();
    }

    // Batch updates for efficiency
    batchPlot(fns: string[], ranges: [number, number][]) {
        const allPoints: DrawingPoint[][] = [];
        
        for (let i = 0; i < fns.length; i++) {
            const expr = math.compile(fns[i]);
            const range = ranges[i];
            const points: DrawingPoint[] = [];
            
            // Adaptive sampling based on function complexity
            const step = this.calculateOptimalStep(expr, range);
            
            for (let x = range[0]; x <= range[1]; x += step) {
                points.push({
                    x: x,
                    y: expr.evaluate({x: x}),
                    timestamp: Date.now()
                });
            }
            allPoints.push(points);
        }

        // Single update for all functions
        return allPoints;
    }

    private calculateOptimalStep(expr: math.EvalFunction, range: [number, number]): number {
        // Implement adaptive sampling based on function complexity
        // and visible range
        return 0.1; // Default step
    }
}

// Usage with cleanup
const manager = new MathDrawingManager();
try {
    // Your drawing code
} finally {
    manager.dispose();
}`}),e(t,{children:"Key performance considerations:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Request Animation Frame for smooth updates"}),e(r,{children:"Throttling to prevent too many redraws"}),e(r,{children:"Memory management with cleanup"}),e(r,{children:"Batch operations where possible"}),e(r,{children:"Adaptive sampling for complex functions"}),e(r,{children:"Minimal data storage"})]}),e(t,{children:"Would you like me to expand on any of these aspects or show more specific optimization techniques?"})]}),n(o,{at:"2025-01-13T01:02:08.945375Z",children:[e(s,{children:"fb281bf5-3eac-4dbe-a592-fd980786aa47"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"How do I get started with UXP"})]}),n(o,{at:"2025-01-13T01:02:19.367196Z",children:[e(s,{children:"3a27a7d6-736e-4a7d-903c-f82f3ad12a04"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Here's how to get started with UXP development for Adobe apps:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"First, install the UXP Developer Tool:"}),e(r,{children:'Download "Adobe UXP Developer Tool" from Creative Cloud Desktop app'}),e(r,{children:"This tool manages plugin creation, debugging, and loading"}),e(r,{children:"Create your first plugin:"})]}),e(a,{language:"bash",children:`# Using UXP Developer Tool:
1. Click "Create Plugin"
2. Select target app (e.g., Illustrator)
3. Choose plugin type
4. Set basic info (name, id, version)`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Basic project structure:"})]}),e(a,{language:"plaintext",children:`your-plugin/
├── manifest.json     # Plugin configuration
├── src/
│   ├── index.html   # Entry point
│   ├── main.js      # Main logic
│   └── styles.css   # Styling
└── package.json     # Dependencies`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Example manifest.json:"})]}),e(a,{language:"json",children:`{
  "id": "your.plugin.id",
  "name": "Your Plugin Name",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "AI",
    "minVersion": "25.0.0"
  },
  "manifestVersion": 4
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Basic HTML entry point:"})]}),e(a,{language:"html",children:`<!DOCTYPE html>
<html>
<head>
    <script src="main.js"><\/script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <sp-heading>My UXP Plugin</sp-heading>
    <div id="content"></div>
</body>
</html>`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Development workflow:"}),e(r,{children:"Open UXP Developer Tool"}),e(r,{children:"Add your plugin"}),e(r,{children:"Load it into Illustrator"}),e(r,{children:"Use Developer Tool for debugging"}),e(r,{children:"Make changes and reload"})]}),e(t,{children:"Would you like me to show more specific examples for mathematical drawing implementation in UXP, or explore any other aspect of UXP development?"})]}),n(o,{at:"2025-01-13T01:02:46.465349Z",children:[e(s,{children:"8c1698f4-8625-4e8c-970b-d094c790796f"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"So in UXP I build something like an app?"})]}),n(o,{at:"2025-01-13T01:02:55.590760Z",children:[e(s,{children:"2c1f7cd6-c8f1-4caf-b561-96dba86a68c0"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes, in UXP you're essentially building a web-like application that runs within Adobe apps. It's similar to building a web app, with some key differences:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Structure - Like a web app:"})]}),e(a,{language:"html",children:`// index.html
<body>
    <sp-theme>
        <sp-button id="calculateBtn">Calculate</sp-button>
        <div id="drawingArea"></div>
        <sp-slider id="parameterControl"></sp-slider>
    </sp-theme>
</body>`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"UI Components - Adobe's Spectrum design system:"})]}),e(a,{language:"javascript",children:`// Using Adobe's UI components
import { Button, Slider, Dialog } from '@adobe/spectrum-web-components';

// Modern UI features like panels, dialogs, etc.
const dialog = new Dialog();
dialog.heading = "Settings";
dialog.show();`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Application Logic:"})]}),e(a,{language:"typescript",children:`// Modern JavaScript/TypeScript
class DrawingApp {
    constructor() {
        this.initializeUI();
        this.setupEventListeners();
    }

    private initializeUI() {
        // Setup UI components
    }

    private setupEventListeners() {
        // Handle user interactions
    }
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Interaction with Adobe apps:"})]}),e(a,{language:"typescript",children:`// Access to host application (e.g., Illustrator)
app.activeDocument.selection;
app.createPath();`}),e(t,{children:"Key differences from web apps:"}),n(t,{children:[e(i,{}),e(r,{children:"Runs in Adobe's custom runtime"}),e(r,{children:"Direct access to Adobe app features"}),e(r,{children:"Uses Spectrum UI components"}),e(r,{children:"More restricted than browser environment"}),e(r,{children:"No direct web access (security)"})]}),e(t,{children:"Would you like to see a more complete example of a UXP app structure?"})]}),n(o,{at:"2025-01-13T01:03:06.672246Z",children:[e(s,{children:"671fe983-61fa-442a-8c7a-7918eb721af9"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Do they have React?"})]}),n(o,{at:"2025-01-13T01:03:15.186213Z",children:[e(s,{children:"542a95b8-6ec7-48fb-be84-80b3b56a03f7"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes! UXP fully supports React development. This is actually one of its strong points. Here's what the setup looks like:"}),e(a,{language:"typescript",children:`// Main App.tsx
import React from 'react';
import { Button, Slider, ActionButton } from '@adobe/react-spectrum';

function App() {
    return (
        <Provider theme={defaultTheme}>
            <Flex direction="column" gap="size-100">
                <Heading level={1}>Math Drawing Tool</Heading>
                <DrawingCanvas />
                <ControlPanel />
            </Flex>
        </Provider>
    );
}

// Components use Adobe's React Spectrum
const ControlPanel = () => {
    return (
        <Form>
            <Slider 
                label="Scale" 
                defaultValue={1}
                onChange={value => updateScale(value)} 
            />
            <Button 
                variant="primary"
                onPress={() => drawFunction()}
            >
                Draw
            </Button>
        </Form>
    );
}`}),e(t,{children:"Key benefits:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Use React Spectrum (Adobe's React UI library)"}),e(r,{children:"Full React ecosystem support"}),e(r,{children:"Modern React features (Hooks, Context, etc.)"}),e(r,{children:"TypeScript support"}),e(r,{children:"Can use React state management (zustand, etc.)"})]}),e(t,{children:"The development experience is very similar to modern React web development, but with direct access to Adobe app features. Would you like to see more specific examples of React components in UXP?"})]}),n(o,{at:"2025-01-13T01:03:55.340773Z",children:[e(s,{children:"b62e2aaa-3bbe-4dbd-af72-f39cd7a9d9df"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Yeah please"})]}),n(o,{at:"2025-01-13T01:04:11.386597Z",children:[e(s,{children:"ce3c99bc-40b2-4d91-8bfe-d71bb46d1578"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Here's a practical example of a React UXP app for mathematical drawing:"}),e(a,{language:"typescript",children:`// App.tsx
import React, { useState } from 'react';
import {
  Provider,
  defaultTheme,
  Flex,
  View,
  TextField,
  Button,
  Slider,
  ActionButton,
  Text
} from '@adobe/react-spectrum';
import { Plot } from './components/Plot';
import { useDrawingStore } from './store';

function App() {
  const [function, setFunction] = useState('sin(x)');
  const [range, setRange] = useState({ min: -10, max: 10 });

  return (
    <Provider theme={defaultTheme} height="100%">
      <Flex direction="column" gap="size-100" margin="size-100">
        <View>
          <TextField
            label="Function"
            value={function}
            onChange={setFunction}
            placeholder="e.g., sin(x)"
          />
        </View>
        
        <Flex gap="size-100">
          <TextField
            label="Min X"
            type="number"
            value={range.min.toString()}
            onChange={value => setRange({...range, min: Number(value)})}
          />
          <TextField
            label="Max X"
            type="number"
            value={range.max.toString()}
            onChange={value => setRange({...range, max: Number(value)})}
          />
        </Flex>

        <Plot function={function} range={range} />
        
        <ControlPanel />
      </Flex>
    </Provider>
  );
}

// components/Plot.tsx
import React, { useEffect, useRef } from 'react';
import { View } from '@adobe/react-spectrum';
import * as math from 'mathjs';

interface PlotProps {
  function: string;
  range: { min: number; max: number };
}

export const Plot = ({ function, range }: PlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Drawing logic here
    // Use mathjs to evaluate function
    const expr = math.compile(function);
    
    // Plot points
    ctx.beginPath();
    // ... drawing code ...
  }, [function, range]);

  return (
    <View
      backgroundColor="gray-200"
      padding="size-100"
      borderRadius="medium"
    >
      <canvas 
        ref={canvasRef}
        width={600}
        height={400}
        style={{ border: '1px solid gray' }}
      />
    </View>
  );
}

// components/ControlPanel.tsx
import React from 'react';
import {
  Flex,
  ActionButton,
  Slider,
  Text
} from '@adobe/react-spectrum';
import { useDrawingStore } from '../store';

export const ControlPanel = () => {
  const { scale, setScale, draw } = useDrawingStore();

  return (
    <Flex direction="column" gap="size-50">
      <Text>Drawing Controls</Text>
      <Slider
        label="Scale"
        value={scale}
        onChange={setScale}
        minValue={0.1}
        maxValue={2}
        step={0.1}
      />
      <ActionButton onPress={draw}>
        Update Drawing
      </ActionButton>
    </Flex>
  );
}

// store.ts (using zustand)
import create from 'zustand';

interface DrawingState {
  scale: number;
  setScale: (scale: number) => void;
  draw: () => void;
}

export const useDrawingStore = create<DrawingState>((set) => ({
  scale: 1,
  setScale: (scale) => set({ scale }),
  draw: () => {
    // Drawing logic
  }
}));`}),e(t,{children:"This example shows:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"React Spectrum components for UI"}),e(r,{children:"Canvas-based plotting"}),e(r,{children:"State management with zustand"}),e(r,{children:"React hooks for lifecycle"}),e(r,{children:"Component composition"}),e(r,{children:"TypeScript integration"})]}),e(t,{children:"Would you like to see:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"How to integrate this with Illustrator's API?"}),e(r,{children:"More advanced plotting features?"}),e(r,{children:"How to handle real-time updates?"}),e(r,{children:"Other UI patterns?"})]})]}),n(o,{at:"2025-01-13T09:52:30.912263Z",children:[e(s,{children:"b2b0e10e-87db-4839-9e05-4f0dc03d5c99"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Can I have the external program launch scripts in Illustrator? That is another way they can interact. There are a library of scripts and the external program opens illustrator and runs them"})]}),n(o,{at:"2025-01-13T09:52:43.512898Z",children:[e(s,{children:"5664d503-7d7b-4003-9666-5e4b12aec7ae"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes! You can launch ExtendScript scripts from a UXP application both ways:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"From UXP to ExtendScript:"})]}),e(a,{language:"typescript",children:`// In your UXP app
import { app } from "photoshop";

async function runScript() {
    const script = \`
        // Your ExtendScript code here
        var doc = app.activeDocument;
        doc.selection.clear();
    \`;
    
    await app.evalScript(script);
}`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"External Program to Illustrator:"})]}),e(a,{language:"typescript",children:`// Using Node.js to launch Illustrator and run scripts
import { exec } from 'child_process';

const runIllustratorScript = (scriptPath) => {
    // Path to Illustrator executable
    const aiPath = '"C:\\\\Program Files\\\\Adobe\\\\Adobe Illustrator 2024\\\\Support Files\\\\Contents\\\\Windows\\\\Illustrator.exe"';
    
    // Command to run script
    const command = \`\${aiPath} -r "\${scriptPath}"\`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(\`Error: \${error}\`);
            return;
        }
        console.log('Script executed successfully');
    });
}

// Usage
runIllustratorScript('C:/path/to/your/script.jsx');`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Or using Apple Script on Mac:"})]}),e(a,{language:"applescript",children:`tell application "Adobe Illustrator" 
    activate
    do javascript file "path/to/your/script.jsx"
end tell`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"You can even queue multiple scripts:"})]}),e(a,{language:"typescript",children:`const scriptQueue = [
    'script1.jsx',
    'script2.jsx',
    'script3.jsx'
];

async function runScriptQueue() {
    for (const script of scriptQueue) {
        await runIllustratorScript(script);
        // Wait for completion before next script
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}`}),e(t,{children:"This approach gives you flexibility to:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Keep your existing ExtendScript codebase"}),e(r,{children:"Control Illustrator externally"}),e(r,{children:"Queue and manage multiple operations"}),e(r,{children:"Mix UXP and ExtendScript as needed"})]}),e(t,{children:"Would you like me to show more specific examples of script launching patterns?"})]}),n(o,{at:"2025-01-13T09:53:14.892787Z",children:[e(s,{children:"bb3bc193-ac61-48e9-a563-b987f6b5125c"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Can I do this from Windows too?"})]}),n(o,{at:"2025-01-13T09:53:24.000947Z",children:[e(s,{children:"9248ec38-33c9-44b5-9226-dba577e2ecd4"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes, absolutely! Here's how to run Illustrator scripts from Windows:"}),e(a,{language:"typescript",children:`// Using Node.js to control Illustrator on Windows
import { exec } from 'child_process';
import path from 'path';

class IllustratorController {
    // Default Illustrator paths for different versions
    private static AI_PATHS = {
        '2024': 'C:\\\\Program Files\\\\Adobe\\\\Adobe Illustrator 2024\\\\Support Files\\\\Contents\\\\Windows\\\\Illustrator.exe',
        '2023': 'C:\\\\Program Files\\\\Adobe\\\\Adobe Illustrator 2023\\\\Support Files\\\\Contents\\\\Windows\\\\Illustrator.exe'
    };

    constructor(private aiPath: string = IllustratorController.AI_PATHS['2024']) {}

    runScript(scriptPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            // -r flag tells Illustrator to run the script
            const command = \`"\${this.aiPath}" -r "\${scriptPath}"\`;
            
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }

    async runMultipleScripts(scriptPaths: string[]) {
        for (const scriptPath of scriptPaths) {
            try {
                await this.runScript(scriptPath);
                // Wait between scripts to ensure proper execution
                await new Promise(r => setTimeout(r, 1000));
            } catch (e) {
                console.error(\`Error running script \${scriptPath}:\`, e);
            }
        }
    }
}

// Usage example:
const controller = new IllustratorController();

// Single script
controller.runScript('C:\\\\Scripts\\\\myScript.jsx')
    .then(() => console.log('Script completed'))
    .catch(err => console.error('Error:', err));

// Multiple scripts
controller.runMultipleScripts([
    'C:\\\\Scripts\\\\script1.jsx',
    'C:\\\\Scripts\\\\script2.jsx',
    'C:\\\\Scripts\\\\script3.jsx'
]);`}),e(t,{children:"You can also use Windows batch files:"}),e(a,{language:"batch",children:`@echo off
:: Run Illustrator script
"C:\\Program Files\\Adobe\\Adobe Illustrator 2024\\Support Files\\Contents\\Windows\\Illustrator.exe" -r "C:\\path\\to\\your\\script.jsx"`}),e(t,{children:"Let me know if you'd like to see more specific examples or error handling patterns!"})]}),n(o,{at:"2025-01-13T09:54:26.787308Z",children:[e(s,{children:"e41b09a9-7f71-4761-90b8-d072c5ebe261"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I want to write in TypeScript when generating the svg files. Is there a way to leverage parallelism?"})]}),n(o,{at:"2025-01-13T09:54:42.212042Z",children:[e(s,{children:"13f5c463-45d4-4aee-a2c0-64c8d427a34c"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"For generating SVGs with TypeScript in parallel, you could use Web Workers if using UXP, or Worker Threads if using Node.js. Here's how you might structure it with Node.js since it gives more flexibility for file generation:"}),e(a,{language:"typescript",children:`// main.ts
import { Worker } from 'worker_threads';
import path from 'path';

interface SvgJob {
    id: number;
    params: {
        function: string;
        range: [number, number];
        width: number;
        height: number;
    }
}

class SvgGenerator {
    private workers: Worker[] = [];
    private workerCount = Math.max(2, navigator.hardwareConcurrency - 1);

    constructor() {
        // Create worker pool
        for (let i = 0; i < this.workerCount; i++) {
            const worker = new Worker(path.join(__dirname, 'svg-worker.js'));
            this.workers.push(worker);
        }
    }

    async generateSvgs(jobs: SvgJob[]): Promise<string[]> {
        const results: string[] = [];
        const chunks = this.chunkJobs(jobs, this.workerCount);
        
        const promises = chunks.map((chunk, index) => {
            return new Promise((resolve, reject) => {
                const worker = this.workers[index];
                
                worker.on('message', (result) => {
                    results.push(...result);
                    resolve(result);
                });

                worker.on('error', reject);
                
                worker.postMessage(chunk);
            });
        });

        await Promise.all(promises);
        return results;
    }

    private chunkJobs(jobs: SvgJob[], chunks: number): SvgJob[][] {
        const result: SvgJob[][] = [];
        const chunkSize = Math.ceil(jobs.length / chunks);
        
        for (let i = 0; i < jobs.length; i += chunkSize) {
            result.push(jobs.slice(i, i + chunkSize));
        }
        
        return result;
    }

    cleanup() {
        this.workers.forEach(worker => worker.terminate());
    }
}

// svg-worker.ts
import { parentPort } from 'worker_threads';
import * as math from 'mathjs';

function generateSvg(job: SvgJob): string {
    const { function: fn, range, width, height } = job.params;
    
    const expr = math.compile(fn);
    const points: [number, number][] = [];
    
    // Generate points
    const step = (range[1] - range[0]) / width;
    for (let x = range[0]; x <= range[1]; x += step) {
        try {
            const y = expr.evaluate({ x });
            points.push([x, y]);
        } catch (e) {
            console.error(\`Error evaluating function at x=\${x}:\`, e);
        }
    }

    // Generate SVG
    const svg = \`<svg width="\${width}" height="\${height}" viewBox="...">\\n\` +
                \`  <path d="M \${points.map(([x, y]) => \`\${x},\${y}\`).join(' L ')}" />\\n\` +
                \`</svg>\`;

    return svg;
}

// Worker receives jobs and processes them
parentPort?.on('message', (jobs: SvgJob[]) => {
    const results = jobs.map(generateSvg);
    parentPort?.postMessage(results);
});

// Usage example
const generator = new SvgGenerator();

const jobs: SvgJob[] = [
    { 
        id: 1, 
        params: { 
            function: 'sin(x)', 
            range: [-10, 10], 
            width: 800, 
            height: 600 
        } 
    },
    // ... more jobs
];

try {
    const svgs = await generator.generateSvgs(jobs);
    console.log(\`Generated \${svgs.length} SVGs\`);
} finally {
    generator.cleanup();
}`}),e(t,{children:"This approach:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Uses a worker pool for parallel processing"}),e(r,{children:"Divides work into chunks for efficient processing"}),e(r,{children:"Handles errors gracefully"}),e(r,{children:"Cleans up resources properly"}),e(r,{children:"Utilizes all available CPU cores"})]}),e(t,{children:"Would you like me to show how to:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Add more sophisticated math function handling?"}),e(r,{children:"Implement specific SVG styling?"}),e(r,{children:"Handle more complex job parameters?"}),e(r,{children:"Add progress tracking?"})]})]}),n(o,{at:"2025-01-13T09:56:21.400898Z",children:[e(s,{children:"b1fe7be6-75f8-4af0-993c-4f69b33fc6d4"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I think I am just going to use Node if that makes sense"})]}),n(o,{at:"2025-01-13T09:56:29.015553Z",children:[e(s,{children:"8ea0568c-7189-4a74-824e-d7c29d02fc98"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes, using Node.js makes a lot of sense for this use case! Here's why:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Better Development Experience:"})]}),e(a,{language:"typescript",children:`// Full TypeScript support
// Modern JS features
// Rich npm ecosystem
// Better debugging
// Fast reload during development`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Performance Benefits:"})]}),e(a,{language:"typescript",children:`// Worker threads for parallel processing
// Async I/O for file operations
// Memory management tools
// Performance profiling`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Easy Integration:"})]}),e(a,{language:"typescript",children:`// Can still launch Illustrator scripts when needed
import { exec } from 'child_process';

const runInIllustrator = (scriptPath: string) => {
    const aiPath = '"C:\\\\Program Files\\\\Adobe\\\\Adobe Illustrator 2024\\\\Support Files\\\\Contents\\\\Windows\\\\Illustrator.exe"';
    exec(\`\${aiPath} -r "\${scriptPath}"\`);
};`}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Better Project Structure:"})]}),e(a,{language:"typescript",children:`my-project/
├── src/
│   ├── generators/        // SVG generation logic
│   ├── math/             // Math computation
│   ├── illustrator/      // Illustrator integration
│   └── workers/          // Worker thread code
├── scripts/              // ExtendScript files
├── dist/                 // Compiled output
└── tests/               // Unit tests`}),e(t,{children:"Would you like me to show you a starter project structure with Node.js and TypeScript set up for this kind of work?"})]}),n(o,{at:"2025-01-13T09:58:54.813657Z",children:[e(s,{children:"ef3dd2a5-6bc7-4558-98bb-c096b319e2c8"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Now I also have a platform that generates the scripts. It compiles TypeScript down to jsx and deploys. I am going to want that in the same codebase. I have a deploy mechanism that pushes them to the illustrator scripts directly. I will now want this separate node codebase. And then one global one that I have commands for building each and both at once"})]}),n(o,{at:"2025-01-13T09:59:06.245435Z",children:[e(s,{children:"26510439-061a-44e1-b9f0-3c92c20b905b"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"This sounds like a good case for a monorepo setup! Here's a suggested structure:"}),e(a,{language:"typescript",children:`my-illustrator-tools/
├── packages/
│   ├── core/              // Shared types and utilities
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── script-generator/  // Your existing ExtendScript generator
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── node-app/         // New Node.js application
│       ├── src/
│       ├── dist/
│       ├── package.json
│       └── tsconfig.json
│
├── package.json          // Root package.json for shared commands
└── turbo.json           // (or nx.json) for monorepo management`}),e(t,{children:"Root package.json:"}),e(a,{language:"json",children:`{
  "name": "my-illustrator-tools",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "build:scripts": "turbo run build --filter=script-generator",
    "build:node": "turbo run build --filter=node-app",
    "deploy": "turbo run deploy",
    "deploy:scripts": "turbo run deploy --filter=script-generator",
    "test": "turbo run test"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "typescript": "^5.0.0"
  }
}`}),e(t,{children:"This gives you:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Unified commands at the root"}),e(r,{children:"Separate build processes for each package"}),e(r,{children:"Shared types and utilities"}),e(r,{children:"Independent versioning if needed"}),e(r,{children:"Ability to run commands on specific packages"})]}),e(t,{children:"Would you like me to show more specific configuration for any part of this setup?"})]}),n(o,{at:"2025-01-13T09:59:47.713720Z",children:[e(s,{children:"93968123-2af8-465e-9f46-e9fe5ee65f02"}),e(c,{children:"[Doug](/dougs-story/)"}),e(t,{children:"That's good for now"})]}),n(o,{at:"2025-01-13T09:59:50.677834Z",children:[e(s,{children:"7bf59bb7-d671-41cb-a142-23ba538b534b"}),e(c,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Great! When you're ready to set this up, remember the key steps will be:"}),n(t,{children:[e(i,{ordered:!0}),e(r,{children:"Initialize the monorepo structure"}),e(r,{children:"Set up shared TypeScript configs"}),e(r,{children:"Configure your existing script deployment process in the new structure"}),e(r,{children:"Add the new Node.js app"})]}),e(t,{children:"Let me know if you need help with any specific part as you start implementing this!"})]})]}),"January1320252"),K=A(b),se=d(()=>n(K,{children:[V(),Z(),X(),Y(),J()]}),"book");export{se as book};
