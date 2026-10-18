var _=Object.defineProperty;var p=(C,E)=>_(C,"name",{value:E,configurable:!0});import{j as e,C as m,b as S,T as $,P as y,c as w,H as j,a as r,d as h,W as t,D as b,A as f,L as d,k as n,m as a,$ as A}from"./index-Cz0DlGTh.js";import{I,a as V,D as T,M as i,h as o,i as s,n as l}from"./.cover-De1wQYym.js";import{$ as k,O as c,b as u,c as g,V as x}from"./3-the-project~code-Dk5dYEN2.js";import{C as P,S as D}from"./.synopsis-DIpqK8mx.js";import"./.cover-VdZ33gH1.js";import"./.cover-BXjpfbxc.js";const R=class R extends k{};p(R,"$ClaudeOptimizingExtendscriptAbstractionsForIllustrator");let v=R;const O=p(()=>e.jsxs(m,{children:[e.jsx(S,{}),e.jsx(I,{}),e.jsxs($,{children:[e.jsx(y,{}),"[Table of Contents](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#table-of-contents)"]}),e.jsxs(w,{children:[e.jsx(j,{children:"February 2025"}),e.jsx(r,{children:e.jsx(h,{children:"[9 February 2025](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#9-february-2025)"})}),e.jsx(r,{children:e.jsx(h,{children:"[10 February 2025](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#10-february-2025)"})}),e.jsx(r,{children:e.jsx(h,{children:"[11 February 2025](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#11-february-2025)"})}),e.jsxs(r,{children:[e.jsx(y,{}),e.jsx(t,{children:e.jsx(h,{children:"[Optimizing ExtendScript Abstractions for Illustrator](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/)"})}),e.jsx(t,{children:e.jsx(h,{children:"[Synopsis](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#synopsis)"})}),e.jsx(t,{children:e.jsx(h,{children:"[Table of Contents](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#table-of-contents)"})})]})]}),e.jsxs(w,{children:[e.jsx(V,{}),e.jsx(j,{children:"Artifacts"}),e.jsxs(r,{children:[e.jsx(y,{}),e.jsx(h,{children:"[Command Builder Architecture v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#command-builder-architecture-v1)"})]}),e.jsxs(r,{children:[e.jsx(y,{}),e.jsx(h,{children:"[Effect and Command Architecture v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#effect-and-command-architecture-v1)"})]}),e.jsxs(r,{children:[e.jsx(y,{}),e.jsx(h,{children:"[func-implementation v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#func-implementation-v1)"})]}),e.jsxs(r,{children:[e.jsx(y,{}),e.jsx(h,{children:"[effect-reference-implementation v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#effect-reference-implementation-v1)"})]})]})]}),"Table"),L=p(()=>e.jsxs(m,{children:[e.jsx(T,{children:e.jsx(b,{children:"[9 February 2025](2025-02-09)"})}),e.jsx($,{children:"[9 February 2025](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#9-february-2025)"}),e.jsxs(i,{at:"2025-02-09T22:21:31.911857Z",children:[e.jsx(c,{children:"17ab9cc3-bfa8-4058-92a7-c869c03cb449"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Alright Claude, I need your help nailing down a tricky abstraction as fast as possible. Let's be focused. Let's get this done"}),e.jsx(r,{children:"I am coding with ExtendScript for Illustrator in TypeScript. There is no setTimeout. Everything is blocking. I need a little remoting framework that I can use in or out of illustrator, that allows me to dispatch things to illustrator if needed, using only the Type Definition file but with strongly typed code written in the node runtime"}),e.jsx(r,{children:"Here's the abstraction"}),e.jsx(r,{children:"There are commands and references. The idea is that commands have expressions. They are something to execute"}),e.jsx(r,{children:"References has addresses. They have to be assigned to a variable to execute"}),e.jsx(r,{children:"You can see that Reference has all these methods to compose. You can see the abstraction that I am sketching out, but it's not elegant enough and not clear enough. I want to be able to easily chain commands together to build up references, but to also have a list of commands that I can build up in sequences"}),e.jsx(r,{children:"It's like a monad right? Like IEnumerable / IQueryable in C#. But I need to find the pattern"}),e.jsx(r,{children:"Can you do a deep analysis of my abstraction, and with minimal changes help me come up with an architecture that allows me to implement this system quickly and elegantly?"}),e.jsx(r,{children:"Write ten paragraphs of analysis on what you think this abstraction should look like, as edits we can make to the current abstraction to make it seamless to build up and execute commands that can affect the illustrator document model remotely"}),e.jsx(u,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e.jsx(u,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),e.jsxs(i,{at:"2025-02-09T22:21:50.488487Z",children:[e.jsx(c,{children:"5cbce595-ef0f-448d-8445-2f059e925483"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Let me analyze your abstraction and propose a refined architecture that maintains type safety while enabling fluid command composition and execution."}),e.jsx(r,{children:"The core insight is that your system sits at the intersection of two patterns: the Command pattern for encapsulating operations, and the Builder pattern for fluently constructing those operations. The current architecture has the right foundational pieces but could be streamlined by more clearly separating concerns between command construction, reference management, and execution context."}),e.jsx(r,{children:"A key improvement would be to introduce a more explicit concept of an execution context or command builder that acts as the coordinator for building up command sequences. Rather than having commands manage their own steps array, this could be delegated to a dedicated CommandBuilder class that provides the fluent interface for chaining operations. This separation would make it clearer how commands are composed and would simplify the individual command classes."}),e.jsx(r,{children:"The Reference system could be simplified by making it more focused on just address resolution and property access. Currently, it's doing double duty as both a reference system and a command builder. By extracting the command building functionality into a dedicated class, References could become lighter weight and more focused on their core responsibility of representing addressable values in the runtime."}),e.jsx(r,{children:"The execution model could be enhanced by introducing a more formal concept of an ExecutionContext that manages the transition between local and remote execution. This would provide a cleaner abstraction for handling the differences between immediate local execution and queued remote execution in Illustrator. The context could manage command queuing, synchronization, and error handling in a more centralized way."}),e.jsx(r,{children:"Type safety could be improved by leveraging TypeScript's conditional types and mapped types to provide better inference across the chain of operations. For example, property access could maintain precise types through the entire chain of operations without requiring explicit type parameters at each step. This would make the API more ergonomic while maintaining type safety."}),e.jsx(r,{children:"Command composition could be made more elegant by introducing a more formal concept of command sequencing. Rather than managing arrays of steps directly, commands could be composed using combinators that specify how they should be combined (sequence, parallel, conditional, etc.). This would provide more flexibility in how commands are structured while keeping the implementation details encapsulated."}),e.jsx(r,{children:"The current $Reference.generateUniqueVariableName system could be replaced with a more structured approach to managing temporary variables. A symbol registry system could track symbol allocation and ensure proper scoping of temporary variables, making the system more robust when dealing with complex command sequences."}),e.jsx(r,{children:"Error handling could be improved by introducing a Result type that encapsulates both successful and failed command executions. This would provide a more structured way to handle errors and propagate them through command chains, while still maintaining type safety and avoiding the need for try/catch blocks in the client code."}),e.jsx(r,{children:"The system could benefit from a more formal concept of transactions or atomic command groups. This would allow for rolling back sequences of commands if any part fails, which is particularly important when working with a document model that needs to maintain consistency."}),e.jsx(r,{children:"I suggest introducing a formal Command type hierarchy that more clearly expresses the relationships between different kinds of commands (property access, method calls, assignments, etc.). This would make it easier to add new command types and ensure they integrate properly with the rest of the system."}),e.jsx(r,{children:"Would you like me to show you some concrete code examples of how these refinements could be implemented? I can focus on the specific areas you think would be most valuable to address first."})]}),e.jsx(f,{identifier:"paste",type:".txt",children:`type $Ref<T = any> = $Reference<T> | T\r
type $Arg<T = any> = $Reference<T> | T\r
type $Any = $Ref<any>\r
type $Str = $Ref<string> | Str\r
type $Num = $Ref<number>\r
type $Bool = $Ref<boolean>\r
type $Arr<T=any> = $Ref<T[]> | A<T>\r
type ExecutionMode = "Remote" | "Local"\r
\r
class $Command {\r
    _expression: string = "";\r
    _steps: A<$Command>;\r
\r
    expression(): string { return this._expression; }\r
    steps(): A<$Command> { return this._steps; }\r
\r
    constructor(expression?: string, previous?: $Command) {\r
        if (!expression) throw new Error("No expression specified");\r
        this._steps = previous ? previous.steps().copy() : f([]); \r
        previous instanceof $Reference ?\r
            this._steps.set(-1, this) :\r
            this._steps.push(this);\r
    }\r
\r
    $compile() {\r
        return this.steps().stringJoin("\\n").s();\r
    }\r
\r
    $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        var expression = this.$compile();\r
        $eval(expression, onComplete, onError);\r
    }\r
\r
    $execute<T = any>(global: boolean = false): T {\r
        var __referent__: T = undefined as any;\r
        var cmd = this instanceof $VariableReference ? this.$var("__referent__") : this;\r
        var expression = cmd.$compile();\r
        if (global) {\r
            // Explicitly run eval in the global scope\r
            eval.call($.global || globalThis, expression);\r
        } else {\r
            eval(expression);\r
        }\r
        return __referent__;\r
    }\r
\r
    toString(): string {\r
        return this.expression();\r
    }\r
}\r
\r
class $Reference<Type = any> extends $Command {\r
    _address: string;\r
    _properties = dictionary<$PropertyReference>();\r
    address(): string { return this._address; }\r
    loc(): string { return this.address(); }\r
\r
    constructor(address?: $Any, previous?: $Command) {\r
        address = \`\${address}\`;\r
        super(\`\${address};\`, previous)\r
        this._address = address;\r
    }\r
\r
    $dot<TSelection = any>(selector: string): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: (o: Type) => TSelection): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: ((o: Type) => TSelection) | string): $PropertyReference<this, TSelection> {\r
        var key = typeof selector === "function" ? selector.toString() : selector;\r
        var ref = this._properties[key];\r
        if (ref) return ref;\r
\r
        var path = typeof selector === "function" ?\r
            str(stringJoin(str(key).split(".").skip(1), ".").split(";").first()).replaceAll(" ", "").s() :\r
            selector;\r
\r
        ref = new $PropertyReference<this, TSelection>(this, path);\r
        this._properties[path] = ref;\r
        return ref;\r
    }\r
\r
    $get<TSelection = any>(selector: string, newValue?: TSelection): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: (o: Type) => TSelection, newValue?: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: ((o: Type) => TSelection) | string, newValue?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (newValue !== undefined) ref.$assign($arg(newValue));\r
        return ref;\r
    }\r
\r
    $set<TSelection = any>(selector: string, value: TSelection): void\r
    $set<TSelection = any>(selector: (o: Type) => TSelection, value: TSelection | $Any): void\r
    $set<TSelection = any>(selector: ((o: Type) => TSelection) | string, value: TSelection | $Any): void {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        ref.$assign($arg(value));\r
    }\r
\r
    $call<TResult = any>(selector: ((o: Type) => TResult) | string, ...args: $Any[]): $MethodCallReference<this, TResult> {\r
        var propertyRef = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        return new $MethodCallReference<this, TResult>(propertyRef, args);\r
    }\r
\r
    $invoke<TResult = any>(...args: $Any[]): $FunctionCallReference<TResult> {\r
        return new $FunctionCallReference<TResult>(this, args);\r
    }\r
\r
    $of<TElement = any>(index: number | string | $Num | $Str): $IndexerReference<$Reference<Type>, TElement> {\r
        return new $IndexerReference<this, TElement>(this, index);\r
    }\r
\r
    $cast<T>(): T {\r
        return this as any;\r
    }\r
\r
    $check(): this {\r
        var check = new $CheckedReference(this);\r
        this._expression = check._expression;\r
        return this;\r
    }\r
\r
    $assign(value: $Arg) {\r
        var cmd = new $Command(\`\${this} = \${$arg(value)};\`);\r
        console.log(cmd)\r
        cmd.$execute();\r
    }\r
\r
    $var(name: string): $VariableReference<Type> {\r
        var assignment = new $VariableAssignment<Type>(name, this);\r
        return assignment.variable();\r
    }\r
\r
    $equals(ref: $Reference): boolean {\r
        var thisObject = this.$resolve();\r
        var otherObj = ref.$resolve();\r
        return thisObject === otherObj;\r
    }\r
\r
    $func<T = any>(selector: (o: Type) => T): $VariableReference<T> {\r
        //Need to implement like dot\r
    }\r
\r
    $resolve(global?: boolean): Type {\r
        var _referent_: Type = undefined as any;\r
        this.$var("_referent_").$execute(global);\r
        return _referent_;\r
    }\r
\r
    toString(): string {\r
        return this.address();\r
    }\r
\r
    private static variableCounter = 1;\r
    static generateUniqueVariableName(prefix?: string) {\r
        var timestamp = new Date().getTime(); // Current time in milliseconds\r
        var randomNum = Math.floor(Math.random() * 100000); // Random number between 0 and 99999\r
        return \`____\${prefix || "var"}_\${timestamp}_\${randomNum}_\${this.variableCounter++}____\`;\r
    }\r
}\r
\r
class $CheckedReference<Type = any> extends $Reference<Type> {\r
    constructor(ref: $Any, newValue?: $Any) {\r
        super($CheckedReference.addCheck(ref, newValue));\r
    }\r
\r
    protected static addCheck(expression: $Any, newValue?: $Any): string {\r
        var varName = $Reference.generateUniqueVariableName();\r
        expression = \`\r
            (function() {\r
                var \${varName} = \${expression};\r
                if (\${varName} === null || \${varName} === undefined) {\r
                    throw new Error(\${$str(expression, "is null or undefined")});\r
                }\r
                \${newValue ? \`\${expression} = \${newValue};\` : ""}\r
                return \${varName};\r
            })()\`\r
        return expression;\r
    }\r
}\r
\r
class $VariableReference<TVariable = any> extends $Reference<TVariable> {\r
    protected _name: string;\r
    name(): string { return this._name; }\r
\r
    constructor(name: string, previous: $Command) {\r
        super(name, previous);\r
        if (name === undefined || name.length === 0)\r
            throw new Error("A variable reference must have a name");\r
        this._name = name;\r
    }\r
}\r
\r
class $VariableAssignment<TVariable = any> extends $Command {\r
    protected _name: string;\r
    protected _variable: $VariableReference<TVariable>;\r
    name(): string { return this._name; }\r
    variable(): $VariableReference<TVariable> { return this._variable;  }\r
\r
    constructor(name: string, ref: $Reference<TVariable>) {\r
        if (name === undefined || name.length === 0 || !ref)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`var \${name} = \${ref};\`;\r
        super(expression, ref);\r
        this._name = name;\r
        this._variable = new $VariableReference<TVariable>(name, this);\r
    }\r
}\r
\r
class $ClassReference<Type extends Function = any> extends $Reference<Type> {\r
    protected _ctor: Type;\r
    ctor(): Type { return this._ctor; }\r
\r
    constructor(ctor: Type) {\r
        if (!ctor) throw new Error("No class specified")\r
        super(ctor.name)\r
        this._ctor = ctor;\r
    }\r
}\r
\r
class $PropertyReference<TObject extends $Reference<any> = any, TProperty = any> extends $Reference<TProperty> {\r
    protected _object: TObject;\r
    protected _property: string;\r
    property(): string { return this._property; }\r
    object(): TObject { return this._object; }\r
\r
    constructor(object: TObject, property: string) {\r
        if (property === undefined || property.length == 0 || object === undefined)\r
            throw new Error("The object and property both need to be defined in a property reference");\r
\r
        var expression = \`\${object.address()}.\${property}\`;\r
        super(expression, object);\r
        this._object = object;\r
        this._property = property;\r
    }\r
}\r
\r
class $FunctionCallReference<TResult = any> extends $Reference<TResult> {\r
    protected _func: $Reference;\r
    protected _args: A<$Reference>;\r
    func(): $Reference { return this._func; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(func: $Reference, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (func === undefined) throw new Error("A FunctionCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${func}(\${$args.stringJoin(",")})\`;\r
        super(ref, func);\r
        this._func = func;\r
        this._args = $args;\r
    }\r
}\r
\r
class $MethodCallReference<TObject extends $Reference = any, TResult = any> extends $Reference<TResult> {\r
    protected _object: TObject;\r
    protected _method: string;\r
    protected _args: A<$Reference>\r
    method(): string { return this._method; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(method: $PropertyReference<TObject, any>, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (method === undefined) throw new Error("A MethodCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${method}(\${$args.stringJoin(",")})\`;\r
        super(ref, method);\r
        this._object = method.object();\r
        this._method = method.property();\r
        this._args = $args;\r
    }\r
}\r
\r
class $ArrayReference<TElement = any> extends $Reference<TElement[]> {\r
    constructor(array: $Reference, previous?: $Command) {\r
        super(array, previous);\r
    }\r
}\r
\r
class $IndexerReference<TArray extends $Reference = any, TElement = any> extends $Reference<TElement> {\r
    protected _array: TArray;\r
    protected _index: $Reference;\r
    array(): $Reference { return this._array; }\r
    index(): $Reference { return this._index; }\r
\r
    constructor(array: TArray, index: number | string | $Num | $Str) {\r
        var [$arrayIndex, $index] = $IndexerReference.createIndexExpression(array, index);\r
        super($arrayIndex);\r
        if (array === undefined || index == undefined)\r
            throw new Error("Index references must have an array and an index");\r
        this._array = array;\r
        this._index = $index;\r
\r
    }\r
\r
    private static createIndexExpression(array: $Reference, index: $Arg): [$Reference, $Reference] {\r
        if (typeof index === "number" && index < 0) index = $ref(\`\${array}.length + \${index}\`);\r
        else index = $arg(index);\r
        return [$ref(\`\${array}[\${index}]\`), index];\r
    }\r
}\r
\r
class $ArrayLiteralReference<TElement = any> extends $ArrayReference<TElement> {\r
    constructor(array: TElement[] | A<TElement>) {\r
        if (!array) throw new Error("Array literal undefined");\r
        super($ArrayLiteralReference.createArrayExpression(array));\r
    }\r
\r
    private static createArrayExpression(array: any[] | A<any>): $Reference {\r
        if (array instanceof A) array = array.a();\r
        if (array.length == 0) return $ref("[]");\r
        return $ref(\`[\${f(array).select(r => $arg(r)).stringJoin(",")}]\`);\r
    }\r
}\r
\r
class $StringLiteralReference extends $Reference<string> {\r
    _value: string;\r
    value(): string { return this._value; }\r
\r
    constructor(value: string | Str| $Reference, quoteType: \`"\` | \`'\` = \`"\`) {\r
        if (value === undefined) throw new Error("String literal unspecified");\r
        if (value instanceof $Reference) value = value.toString();\r
        if (value instanceof Str) value = value.s();\r
        super(\`\${quoteType}\${value}\${quoteType}\`);\r
        this._value = value;\r
    }\r
}\r
\r
class $Eval {\r
    private static _commands: CommandQueue | undefined;\r
    private static _mode: ExecutionMode = "Remote";\r
\r
    private static commands() { if (!this._commands) this._commands = new CommandQueue(); return this._commands; }\r
    private static mode(newMode?: ExecutionMode) { if (newMode !== undefined) this._mode = newMode; return this._mode; }\r
\r
    static debug: boolean = false;\r
\r
    static cmd(cmd: $Command | $Reference | string, onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.mode() === "Remote") {\r
            if (cmd instanceof $Reference) cmd = cmd.address();\r
            if (cmd instanceof $Command) cmd = cmd.expression();\r
            this.commands().enqueue(cmd, false);\r
        } else {\r
            if (!(cmd instanceof $Command)) cmd = $cmd(cmd);\r
            if (this.commands().length() > 0)\r
                this.sync(onComplete, onError);\r
\r
            var cmdExpression = cmd.expression();\r
            if (!onError) {\r
                cmd.$execute();\r
                if (onComplete) onComplete(cmdExpression, 0);\r
            } else {\r
                try {\r
                    cmd.$execute();\r
                    if (onComplete) onComplete(cmdExpression, 0);\r
                } catch (e) {\r
                    onError(cmdExpression, 0, {\r
                        body: (e as any || "Command failed").toSring() as string,\r
                        headers: { "Error-Code": -1 }\r
                    });\r
                }\r
            }\r
        }\r
    }\r
\r
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.debug) {\r
            onComplete = (cmd, i) => { console.log(\`$eval.sync \${i} complete:\`, cmd); if (onComplete) onComplete(cmd, i); }\r
            onError = (cmd, i, e) => { console.log(\`$eval.sync \${i} FAILED:\`, cmd, e?.headers?.["Error-Code"], e?.body); if (onError) onError(cmd, i, e); }\r
        }\r
        this.commands().sync(onComplete, onError);\r
    }\r
\r
    static onCompleteDefault: OnCompleteHandler | undefined;\r
    static onErrorDefault: OnErrorHandler | undefined;\r
}\r
\r
function $ref<Type = any>(expression: $Any): $Reference<Type> {\r
    if (expression === null || expression === undefined) return expression as any;\r
    if (expression instanceof $Reference) return expression;\r
    if (expression === null || expression === undefined) return undefined as any;\r
    if (expression instanceof A) expression = expression.a();\r
    if (expression instanceof Array) return $arr(expression) as any;\r
    if (typeof expression === "function") return new $ClassReference(expression);\r
    return new $Reference<Type>(expression);\r
}\r
\r
function $cmd(expression: $Any): $Command {\r
    if (expression === undefined) return undefined as any;\r
    if (expression instanceof $Command) return expression;\r
    if (expression instanceof Str) return new $Command(expression.s());\r
    if (typeof expression === "string") return new $Command(expression);\r
    return $ref(expression);\r
}\r
\r
// Like $ref but strings are treated as string literals\r
function $arg<Type = any>(arg: $Arg): $Reference<Type> {\r
    if (typeof arg === "string" || arg instanceof Str) return $str(arg) as any;\r
    return $ref(arg);\r
}\r
\r
function $str(...parts: $Any[]): $StringLiteralReference {\r
    if (parts === undefined) return undefined as any;\r
    var len = parts.length;\r
    if (len == 1) {\r
        var part = parts[0];\r
        if (typeof part === "string") return new $StringLiteralReference(part);\r
        if (part instanceof Str) return new $StringLiteralReference(part.s());\r
        if (part instanceof $StringLiteralReference) return part;\r
        return new $StringLiteralReference(\`\${part}\`);\r
    }\r
    var value = f(parts).select(s => s instanceof $StringLiteralReference ? s.value() : s).stringJoin(" ").s();\r
    return new $StringLiteralReference(value);\r
}\r
\r
function $arr<TElement = any>(array: $Arr<TElement>): $ArrayReference<TElement> {\r
    if (array === undefined) return undefined as any;\r
    if (array instanceof $Reference) return new $ArrayReference(array);\r
    if (array instanceof A) array = array.a();\r
    return new $ArrayLiteralReference(array);\r
}\r
\r
function $eval(cmd: $Command | $Reference | string, onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
    $Eval.cmd(cmd, onComplete, onError);\r
}\r
\r
function $sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
    $Eval.sync(onComplete, onError);\r
}`})]}),"February920251"),N=p(()=>e.jsxs(m,{children:[e.jsx(T,{children:e.jsx(b,{children:"[10 February 2025](2025-02-10)"})}),e.jsx($,{children:"[10 February 2025](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#10-february-2025)"}),e.jsxs(i,{at:"2025-02-10T12:38:48.411562Z",children:[e.jsx(c,{children:"524f2783-3b4a-4188-bf24-a844a12e8d8e"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Doug: The goal is to make something seamless. So that as I use the methods on Reference, the command as build up."}),e.jsx(r,{children:'I could be able to type: app.documents().add("name).pathItems()'}),e.jsx(r,{children:"As a reference, and then have an easy way"}),e.jsx(r,{children:"What if the cmd being built was a singleton - JavaScript is multithreaded. And when it is resolved or executed, it is replaced with a fresh one"})]}),e.jsxs(i,{at:"2025-02-10T12:39:07.211072Z",children:[e.jsx(c,{children:"aa992bc6-3a4a-4ea0-a45e-1b2a23a6562e"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Your insight about using a singleton for command building points to an elegant solution. This would allow us to maintain state naturally as methods are chained, without requiring explicit management of command sequences in each reference."}),e.jsx(r,{children:"Let's refine the abstraction to make it more seamless. The key is to have references automatically build up the command chain through a shared command builder singleton. Here's how we could restructure it:"}),e.jsx(r,{children:"<antThinking>This is a good candidate for a code artifact as it represents a complete architectural solution that would benefit from proper formatting and would likely be used as reference material.</antThinking>"}),e.jsx(g,{identifier:"command-builder-architecture.v1",type:".ts",artifact:"command-builder",place:"command-builder-architecture-v1",children:"Made the artifact “Command Builder Architecture”"}),e.jsx(r,{children:"This design achieves several key improvements:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"The CommandBuilder singleton maintains the state of the command chain, eliminating the need for explicit command management in each Reference instance."}),e.jsx(n,{children:"References become lighter, focusing solely on building the address chain and delegating command tracking to the CommandBuilder."}),e.jsx(n,{children:"The type system flows naturally through the chain of method calls, providing proper completion and type checking at each step."}),e.jsx(n,{children:"Execution is simplified - calling execute() on any reference in the chain will compile and execute all accumulated commands."})]}),e.jsx(r,{children:"This approach allows for natural method chaining while maintaining a clean separation between command building and execution. The singleton pattern ensures that command state is maintained properly across the entire chain without requiring explicit passing of context."}),e.jsx(r,{children:"Would you like me to expand on any particular aspect of this design, such as how to handle error cases or how to add support for more complex command patterns?"})]}),e.jsxs(i,{at:"2025-02-10T12:48:19.854390Z",children:[e.jsx(c,{children:"890e8efc-f5f6-4487-8c61-0b39950c09ea"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"How about we have my $Command be an $Effect, and then the singleton $Command class as the methods that allow aggregating the steps. In general, adding a reference should assign it to a variable, and a new variable reference can be handed back. to build on for the next $Reference"}),e.jsx(r,{children:"And the #Command class"})]}),e.jsxs(i,{at:"2025-02-10T12:48:39.017182Z",children:[e.jsx(c,{children:"e2347183-44f7-4d7b-b2f9-64d310c10304"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"I understand - you want to separate the concept of an individual effect from the command builder that aggregates them. The $Command singleton would manage the sequence building while $Effect would represent individual operations. Let me propose this refined architecture:"}),e.jsx(r,{children:"<antThinking>This architectural proposal represents a significant refactoring that would benefit from being presented as a complete, reusable code artifact.</antThinking>"}),e.jsx(g,{identifier:"effect-and-command-architecture.v1",type:".ts",artifact:"effect-command-architecture",place:"effect-and-command-architecture-v1",children:"Made the artifact “Effect and Command Architecture”"}),e.jsx(r,{children:"This architecture provides several key benefits:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"$Effect remains a simple value object that represents a single operation, focusing solely on holding and rendering its expression."}),e.jsx(n,{children:"$Command becomes the central coordinator, managing the sequence of effects and handling variable generation. Its singleton nature ensures consistent state management across the entire operation chain."}),e.jsx(n,{children:"$Reference objects now work with the $Command singleton to automatically assign intermediate results to variables, making the chain of operations both traceable and manageable."}),e.jsx(n,{children:"The variable generation system ensures that each step in a complex operation chain has its own properly scoped reference, preventing any potential naming conflicts."})]}),e.jsx(r,{children:"The flow becomes more natural: each operation on a $Reference produces a new $Reference that's already properly assigned to a variable through the $Command singleton. This allows for intuitive method chaining while maintaining a clean separation between the different responsibilities in the system."}),e.jsx(r,{children:"Would you like me to elaborate on any specific aspect of this design, such as how to handle error cases or how to add support for more complex operation patterns?"})]}),e.jsxs(i,{at:"2025-02-10T12:52:30.424498Z",children:[e.jsx(c,{children:"d54e56a6-b78c-49e2-b5f8-de75bf5e6550"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"You are rewriting my framework and not following it. Imaging changing. Do you see the $func method that I haven't implemented? That should be a strongly typed way of adding a step, and adding a step to the command - let's say it's either a $Reference, in which it is assigned to a variable. Or an Effect can or cannot have a variable associated with it, which tells us whether there will be one after the effect is run to hand back as a reference"}),e.jsx(u,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e.jsx(u,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),e.jsxs(i,{at:"2025-02-10T12:52:46.711769Z",children:[e.jsx(c,{children:"221687f6-722e-48ff-b574-96f8dcc34226"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsxs(r,{children:["I apologize for my previous responses where I tried to rewrite your framework. Let me focus on understanding and extending your existing architecture, specifically around the ",e.jsxs(t,{children:[e.jsx(s,{}),"$func"]})," method."]}),e.jsxs(r,{children:["Looking at your code, the key pattern is that steps are built up in the ",e.jsxs(t,{children:[e.jsx(s,{}),"_steps"]})," array of the ",e.jsxs(t,{children:[e.jsx(s,{}),"$Command"]})," class, with each ",e.jsxs(t,{children:[e.jsx(s,{}),"$Reference"]})," being a ",e.jsxs(t,{children:[e.jsx(s,{}),"$Command"]})," that can either be assigned to a variable or represent an effect without a return value. Let me analyze how ",e.jsxs(t,{children:[e.jsx(s,{}),"$func"]})," should work within this pattern:"]}),e.jsxs(r,{children:["The ",e.jsxs(t,{children:[e.jsx(s,{}),"$func"]})," method in ",e.jsxs(t,{children:[e.jsx(s,{}),"$Reference"]})," should follow the same pattern as ",e.jsxs(t,{children:[e.jsx(s,{}),"$dot"]}),", but handle function transformations. It should:"]}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"Take a function that operates on the current reference type"}),e.jsx(n,{children:"Parse that function to create a new reference or effect"}),e.jsx(n,{children:"Add the appropriate step to the command chain"}),e.jsx(n,{children:"Return a new reference if the operation produces a value"})]}),e.jsxs(r,{children:["Here's how I would implement ",e.jsxs(t,{children:[e.jsx(s,{}),"$func"]}),":"]}),e.jsx(g,{identifier:"func-implementation.v1",type:".ts",artifact:"func-implementation",place:"func-implementation-v1",children:"Made the artifact “func-implementation”"}),e.jsx(r,{children:"This implementation allows for strongly-typed function chaining while maintaining your existing patterns:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"Each function call gets assigned to a new variable"}),e.jsx(n,{children:"The variable reference is returned for further chaining"}),e.jsx(n,{children:"The effect is added to the command steps"}),e.jsx(n,{children:"Type information flows through the chain"})]}),e.jsx(r,{children:"So you could use it like:"}),e.jsx(l,{language:"typescript",children:`const doc = $ref<Document>('activeDocument');
const layers = doc.$func(d => d.layers)   // Creates var for layers
const items = layers.$func(l => l.items)  // Creates var for items`}),e.jsx(r,{children:"Each step in this chain would:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"Generate a unique variable name"}),e.jsx(n,{children:"Add an effect that assigns the result to that variable"}),e.jsx(n,{children:"Return a reference to that variable for further chaining"})]}),e.jsx(r,{children:"Would you like me to adjust any aspect of this implementation to better align with your framework's patterns?"})]}),e.jsxs(i,{at:"2025-02-10T12:57:50.199545Z",children:[e.jsx(c,{children:"881c8bd8-05ab-4c95-bbea-a4c697564f86"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"No you you have to toString the $func - it should just work if the func is written correctly"}),e.jsxs(r,{children:["the $Reference $assign method could add a step on the command where it is assigned to a variable and the variable is given back. The $Effect can have an optional variable assigned to it, and if it has one, a reference is given back. It could have a method called",e.jsx(a,{children:'dispatch. and perhaps if the effect has no variable, the "'}),'.global" reference is handed back']}),e.jsx(r,{children:"Does this make sense?"})]}),e.jsxs(i,{at:"2025-02-10T12:57:58.950518Z",children:[e.jsx(c,{children:"99bc6cbe-5304-4beb-a67c-d6b885523e4c"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Yes, I understand now. The design should flow naturally from the concept of effects and references, with the command building happening automatically through the method calls. Let me articulate how this should work:"}),e.jsx(r,{children:"A $Reference represents a value in the system that we can operate on. When we call $assign on a reference, it creates an effect that assigns to a variable and returns a new reference to that variable. This allows for natural chaining."}),e.jsxs(r,{children:["An $Effect represents an operation that may or may not produce a value. If the effect has an associated variable, it means the operation produces a value we want to reference later. If not, it's just an operation being performed. The",e.jsx(a,{children:"dispatch method would execute the effect, returning either a new reference to the variable (if one was specified) or defaulting to the global context ("}),".global)."]}),e.jsx(r,{children:"For the $func implementation, we don't need complex parsing - we can simply toString the function and use it directly. The function itself becomes part of the expression chain. This is more elegant than trying to parse the function body."}),e.jsx(r,{children:"Here's how I envision the core pattern:"}),e.jsx(l,{language:"typescript",children:`// A reference can be assigned to a variable
someReference.$assign(value) // Creates effect, adds to command, returns reference to variable

// An effect can optionally capture its result
new $Effect("some.operation()").$var("result") // Returns reference to 'result'
new $Effect("void.operation()").$dispatch() // Returns $.global reference

// $func just uses toString
$ref(obj).$func(x => x.property.method()) // Function becomes part of expression chain`}),e.jsx(r,{children:"Would you like me to propose specific adjustments to your existing classes to implement this pattern?"})]}),e.jsxs(i,{at:"2025-02-10T13:03:01.166194Z",children:[e.jsx(c,{children:"89fb1a4a-48b4-4a93-a3cd-583e94782854"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Right but for both reference and effect, they hand back a new reference. If the refereene we know we can assign it to a variable. For an effect, the variable could be anywhere. We trust that the effect created it"}),e.jsx(r,{children:"To generalize, as reference inherits from $Effect, the reference $Resolve method really calls ref."}),e.jsxs(r,{children:["var xref = ",e.jsx(a,{children:'ref("app.activeDocument").'}),"var(x).$dispatch();"]}),e.jsx(r,{children:'Behind the screnes "var x = app.activeDocument" was assigned to the command, and a new command: $ref("x") was returned. it is not part of the command yet. It is just handed back as a starting point'})]}),e.jsxs(i,{at:"2025-02-10T13:03:07.996288Z",children:[e.jsx(c,{children:"93c19786-1e95-4a5c-a98b-55be86de14d3"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"I understand now - the pattern is more elegant than I initially grasped. Let me articulate how this should work:"}),e.jsx(r,{children:"When an Effect is dispatched, it adds its expression to the command and returns a Reference. That Reference may point to a variable created by the Effect, or it may point to something else (like $.global). The key is that the Effect itself knows what Reference should be returned after it executes."}),e.jsx(r,{children:"For a Reference (which extends Effect), the $var method creates a variable assignment Effect and returns a new Reference pointing to that variable. This new Reference isn't part of any command yet - it's just a starting point for further operations."}),e.jsx(r,{children:"So in your example:"}),e.jsx(l,{language:"typescript",children:'var xref = $ref("app.activeDocument").$var("x").$dispatch();'}),e.jsx(r,{children:"This sequence:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:'Creates a Reference to "app.activeDocument"'}),e.jsx(n,{children:'Creates a variable assignment Effect ("var x = app.activeDocument")'}),e.jsx(n,{children:"Dispatches that Effect (adding it to the command)"}),e.jsx(n,{children:'Returns a new Reference to "x" (not yet part of any command)'})]}),e.jsx(r,{children:"This pattern is powerful because it maintains a clean separation between building expressions and managing the command chain, while still allowing for natural method chaining. Each step in the chain can decide what kind of Reference to hand back without needing to explicitly manage the command steps."}),e.jsx(r,{children:"Would you like me to help implement specific methods to realize this pattern in your existing code?"})]}),e.jsxs(i,{at:"2025-02-10T13:04:37.041787Z",children:[e.jsx(c,{children:"2224baf1-745a-44d0-b39c-d57265e0c0f9"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Yes but build off my code please"})]}),e.jsxs(i,{at:"2025-02-10T13:04:55.759544Z",children:[e.jsx(c,{children:"28dc133c-d2a1-419e-97da-f4dfbf1e01fa"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Let me help implement this pattern by building on your existing code. The key insight is that $Reference inherits from $Effect (instead of $Command as currently structured), and both classes need to handle returning references appropriately."}),e.jsx(r,{children:"<antThinking>This implementation builds directly on the existing codebase while refining the abstraction around Effects and References.</antThinking>"}),e.jsx(g,{identifier:"effect-reference-implementation.v1",type:".ts",artifact:"effect-reference-implementation",place:"effect-reference-implementation-v1",children:"Made the artifact “effect-reference-implementation”"}),e.jsx(r,{children:"This implementation maintains your existing patterns while refining the abstraction. The key changes are:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"$Effect becomes the base class, handling expression management and variable assignment."}),e.jsx(n,{children:"$Reference extends $Effect instead of $Command, simplifying the inheritance hierarchy."}),e.jsx(n,{children:"$Command becomes a singleton that manages the step collection."}),e.jsx(n,{children:"The $dispatch method on $Effect handles adding the step to the command and returning the appropriate reference."})]}),e.jsx(r,{children:"For your example:"}),e.jsx(l,{language:"typescript",children:'var xref = $ref("app.activeDocument").$var("x").$dispatch();'}),e.jsx(r,{children:"This creates a chain where:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:'$ref creates a Reference with the expression "app.activeDocument"'}),e.jsx(n,{children:'$var creates an Effect with "var x = app.activeDocument"'}),e.jsx(n,{children:'$dispatch adds the Effect to the command and returns a new Reference to "x"'})]}),e.jsx(r,{children:"Would you like me to elaborate on any part of this implementation or show how other methods from your original codebase would integrate with this refined structure?"})]}),e.jsx(f,{identifier:"command-builder-architecture.v1",type:".ts",children:`
// Singleton command builder that maintains the current command chain
class CommandBuilder {
    private static instance: CommandBuilder;
    private _steps: string[] = [];
    private _currentReference: string | null = null;

    private constructor() {}

    static get current(): CommandBuilder {
        if (!CommandBuilder.instance) {
            CommandBuilder.instance = new CommandBuilder();
        }
        return CommandBuilder.instance;
    }

    addStep(expression: string) {
        this._steps.push(expression);
        return this;
    }

    setCurrentReference(ref: string) {
        this._currentReference = ref;
        return this;
    }

    reset() {
        CommandBuilder.instance = new CommandBuilder();
    }

    compile(): string {
        return this._steps.join('\\n');
    }
}

// Simplified Reference class that works with the command builder
class Reference<T = any> {
    constructor(private address: string) {
        CommandBuilder.current.setCurrentReference(address);
    }

    dot<K extends keyof T>(property: K): Reference<T[K]> {
        const newAddress = \`\${this.address}.\${String(property)}\`;
        CommandBuilder.current.setCurrentReference(newAddress);
        return new Reference<T[K]>(newAddress);
    }

    call(...args: any[]): Reference {
        const callExpr = \`\${this.address}(\${args.map(arg => JSON.stringify(arg)).join(',')})\`;
        CommandBuilder.current.addStep(callExpr);
        return new Reference(callExpr);
    }

    assign(value: any): void {
        const assignExpr = \`\${this.address} = \${JSON.stringify(value)};\`;
        CommandBuilder.current.addStep(assignExpr);
    }

    execute(): void {
        const script = CommandBuilder.current.compile();
        // Execute the script (implementation depending on context)
        CommandBuilder.current.reset();
    }
}

// Type-safe entry points for the API
interface IllustratorApp {
    documents: () => Reference<DocumentList>;
    activeDocument: Reference<Document>;
    // ... other app properties
}

interface DocumentList {
    add: (name: string) => Reference<Document>;
    // ... other document list methods
}

// Usage example:
const app = new Reference<IllustratorApp>('app');
const newDoc = app.dot('documents').call().dot('add').call('NewDocument');
newDoc.execute();
`}),e.jsx(f,{identifier:"effect-and-command-architecture.v1",type:".ts",children:`
class $Effect {
    constructor(protected readonly expression: string) {}
    
    toString(): string {
        return this.expression;
    }
}

class $Command {
    private static instance: $Command;
    private effects: $Effect[] = [];
    private varCounter = 0;

    private constructor() {}

    static get current(): $Command {
        if (!this.instance) {
            this.instance = new $Command();
        }
        return this.instance;
    }

    addEffect(effect: $Effect): this {
        this.effects.push(effect);
        return this;
    }

    generateVar(prefix: string = 'var'): string {
        return \`$\${prefix}_\${Date.now()}_\${this.varCounter++}\`;
    }

    assignToVar(expression: string, varName?: string): $Reference {
        varName = varName || this.generateVar();
        const effect = new $Effect(\`var \${varName} = \${expression};\`);
        this.addEffect(effect);
        return new $Reference(varName);
    }

    compile(): string {
        return this.effects.map(e => e.toString()).join('\\n');
    }

    execute(): void {
        const script = this.compile();
        // Execute the script (implementation depending on context)
        $Command.reset();
    }

    static reset(): void {
        this.instance = new $Command();
    }
}

class $Reference<T = any> {
    constructor(private readonly address: string) {}

    $dot<K extends keyof T>(property: K): $Reference<T[K]> {
        const newExpr = \`\${this.address}.\${String(property)}\`;
        return $Command.current.assignToVar(newExpr);
    }

    $call(...args: any[]): $Reference {
        const argsStr = args.map(arg => 
            arg instanceof $Reference ? arg.toString() : JSON.stringify(arg)
        ).join(',');
        const callExpr = \`\${this.address}(\${argsStr})\`;
        return $Command.current.assignToVar(callExpr);
    }

    $assign(value: any): void {
        const valueStr = value instanceof $Reference ? value.toString() : JSON.stringify(value);
        const effect = new $Effect(\`\${this.address} = \${valueStr};\`);
        $Command.current.addEffect(effect);
    }

    toString(): string {
        return this.address;
    }
}

// Helper functions
function $ref<T>(address: string): $Reference<T> {
    return new $Reference<T>(address);
}

// Usage example:
const doc = $ref<IllustratorApp>('app')
    .$dot('documents')
    .$call()
    .$dot('add')
    .$call('NewDocument');

doc.$dot('pathItems').$call();
$Command.current.execute();
`}),e.jsx(f,{identifier:"paste",type:".txt",children:`type $Ref<T = any> = $Reference<T> | T\r
type $Arg<T = any> = $Reference<T> | T\r
type $Any = $Ref<any>\r
type $Str = $Ref<string> | Str\r
type $Num = $Ref<number>\r
type $Bool = $Ref<boolean>\r
type $Arr<T=any> = $Ref<T[]> | A<T>\r
type ExecutionMode = "Remote" | "Local"\r
\r
class $Command {\r
    _expression: string = "";\r
    _steps: A<$Command>;\r
\r
    expression(): string { return this._expression; }\r
    steps(): A<$Command> { return this._steps; }\r
\r
    constructor(expression?: string, previous?: $Command) {\r
        if (!expression) throw new Error("No expression specified");\r
        this._steps = previous ? previous.steps().copy() : f([]); \r
        previous instanceof $Reference ?\r
            this._steps.set(-1, this) :\r
            this._steps.push(this);\r
    }\r
\r
    $compile() {\r
        return this.steps().stringJoin("\\n").s();\r
    }\r
\r
    $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        var expression = this.$compile();\r
        $eval(expression, onComplete, onError);\r
    }\r
\r
    $execute<T = any>(global: boolean = false): T {\r
        var __referent__: T = undefined as any;\r
        var cmd = this instanceof $VariableReference ? this.$var("__referent__") : this;\r
        var expression = cmd.$compile();\r
        if (global) {\r
            // Explicitly run eval in the global scope\r
            eval.call($.global || globalThis, expression);\r
        } else {\r
            eval(expression);\r
        }\r
        return __referent__;\r
    }\r
\r
    toString(): string {\r
        return this.expression();\r
    }\r
}\r
\r
class $Reference<Type = any> extends $Command {\r
    _address: string;\r
    _properties = dictionary<$PropertyReference>();\r
    address(): string { return this._address; }\r
    loc(): string { return this.address(); }\r
\r
    constructor(address?: $Any, previous?: $Command) {\r
        address = \`\${address}\`;\r
        super(\`\${address};\`, previous)\r
        this._address = address;\r
    }\r
\r
    $dot<TSelection = any>(selector: string): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: (o: Type) => TSelection): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: ((o: Type) => TSelection) | string): $PropertyReference<this, TSelection> {\r
        var key = typeof selector === "function" ? selector.toString() : selector;\r
        var ref = this._properties[key];\r
        if (ref) return ref;\r
\r
        var path = typeof selector === "function" ?\r
            str(stringJoin(str(key).split(".").skip(1), ".").split(";").first()).replaceAll(" ", "").s() :\r
            selector;\r
\r
        ref = new $PropertyReference<this, TSelection>(this, path);\r
        this._properties[path] = ref;\r
        return ref;\r
    }\r
\r
    $get<TSelection = any>(selector: string, newValue?: TSelection): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: (o: Type) => TSelection, newValue?: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: ((o: Type) => TSelection) | string, newValue?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (newValue !== undefined) ref.$assign($arg(newValue));\r
        return ref;\r
    }\r
\r
    $set<TSelection = any>(selector: string, value: TSelection): void\r
    $set<TSelection = any>(selector: (o: Type) => TSelection, value: TSelection | $Any): void\r
    $set<TSelection = any>(selector: ((o: Type) => TSelection) | string, value: TSelection | $Any): void {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        ref.$assign($arg(value));\r
    }\r
\r
    $call<TResult = any>(selector: ((o: Type) => TResult) | string, ...args: $Any[]): $MethodCallReference<this, TResult> {\r
        var propertyRef = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        return new $MethodCallReference<this, TResult>(propertyRef, args);\r
    }\r
\r
    $invoke<TResult = any>(...args: $Any[]): $FunctionCallReference<TResult> {\r
        return new $FunctionCallReference<TResult>(this, args);\r
    }\r
\r
    $of<TElement = any>(index: number | string | $Num | $Str): $IndexerReference<$Reference<Type>, TElement> {\r
        return new $IndexerReference<this, TElement>(this, index);\r
    }\r
\r
    $cast<T>(): T {\r
        return this as any;\r
    }\r
\r
    $check(): this {\r
        var check = new $CheckedReference(this);\r
        this._expression = check._expression;\r
        return this;\r
    }\r
\r
    $assign(value: $Arg) {\r
        var cmd = new $Command(\`\${this} = \${$arg(value)};\`);\r
        console.log(cmd)\r
        cmd.$execute();\r
    }\r
\r
    $var(name: string): $VariableReference<Type> {\r
        var assignment = new $VariableAssignment<Type>(name, this);\r
        return assignment.variable();\r
    }\r
\r
    $equals(ref: $Reference): boolean {\r
        var thisObject = this.$resolve();\r
        var otherObj = ref.$resolve();\r
        return thisObject === otherObj;\r
    }\r
\r
    $func<T = any>(selector: (o: Type) => T): $VariableReference<T> {\r
        //Need to implement like dot\r
    }\r
\r
    $resolve(global?: boolean): Type {\r
        var _referent_: Type = undefined as any;\r
        this.$var("_referent_").$execute(global);\r
        return _referent_;\r
    }\r
\r
    toString(): string {\r
        return this.address();\r
    }\r
\r
    private static variableCounter = 1;\r
    static generateUniqueVariableName(prefix?: string) {\r
        var timestamp = new Date().getTime(); // Current time in milliseconds\r
        var randomNum = Math.floor(Math.random() * 100000); // Random number between 0 and 99999\r
        return \`____\${prefix || "var"}_\${timestamp}_\${randomNum}_\${this.variableCounter++}____\`;\r
    }\r
}\r
\r
class $CheckedReference<Type = any> extends $Reference<Type> {\r
    constructor(ref: $Any, newValue?: $Any) {\r
        super($CheckedReference.addCheck(ref, newValue));\r
    }\r
\r
    protected static addCheck(expression: $Any, newValue?: $Any): string {\r
        var varName = $Reference.generateUniqueVariableName();\r
        expression = \`\r
            (function() {\r
                var \${varName} = \${expression};\r
                if (\${varName} === null || \${varName} === undefined) {\r
                    throw new Error(\${$str(expression, "is null or undefined")});\r
                }\r
                \${newValue ? \`\${expression} = \${newValue};\` : ""}\r
                return \${varName};\r
            })()\`\r
        return expression;\r
    }\r
}\r
\r
class $VariableReference<TVariable = any> extends $Reference<TVariable> {\r
    protected _name: string;\r
    name(): string { return this._name; }\r
\r
    constructor(name: string, previous: $Command) {\r
        super(name, previous);\r
        if (name === undefined || name.length === 0)\r
            throw new Error("A variable reference must have a name");\r
        this._name = name;\r
    }\r
}\r
\r
class $VariableAssignment<TVariable = any> extends $Command {\r
    protected _name: string;\r
    protected _variable: $VariableReference<TVariable>;\r
    name(): string { return this._name; }\r
    variable(): $VariableReference<TVariable> { return this._variable;  }\r
\r
    constructor(name: string, ref: $Reference<TVariable>) {\r
        if (name === undefined || name.length === 0 || !ref)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`var \${name} = \${ref};\`;\r
        super(expression, ref);\r
        this._name = name;\r
        this._variable = new $VariableReference<TVariable>(name, this);\r
    }\r
}\r
\r
class $ClassReference<Type extends Function = any> extends $Reference<Type> {\r
    protected _ctor: Type;\r
    ctor(): Type { return this._ctor; }\r
\r
    constructor(ctor: Type) {\r
        if (!ctor) throw new Error("No class specified")\r
        super(ctor.name)\r
        this._ctor = ctor;\r
    }\r
}\r
\r
class $PropertyReference<TObject extends $Reference<any> = any, TProperty = any> extends $Reference<TProperty> {\r
    protected _object: TObject;\r
    protected _property: string;\r
    property(): string { return this._property; }\r
    object(): TObject { return this._object; }\r
\r
    constructor(object: TObject, property: string) {\r
        if (property === undefined || property.length == 0 || object === undefined)\r
            throw new Error("The object and property both need to be defined in a property reference");\r
\r
        var expression = \`\${object.address()}.\${property}\`;\r
        super(expression, object);\r
        this._object = object;\r
        this._property = property;\r
    }\r
}\r
\r
class $FunctionCallReference<TResult = any> extends $Reference<TResult> {\r
    protected _func: $Reference;\r
    protected _args: A<$Reference>;\r
    func(): $Reference { return this._func; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(func: $Reference, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (func === undefined) throw new Error("A FunctionCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${func}(\${$args.stringJoin(",")})\`;\r
        super(ref, func);\r
        this._func = func;\r
        this._args = $args;\r
    }\r
}\r
\r
class $MethodCallReference<TObject extends $Reference = any, TResult = any> extends $Reference<TResult> {\r
    protected _object: TObject;\r
    protected _method: string;\r
    protected _args: A<$Reference>\r
    method(): string { return this._method; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(method: $PropertyReference<TObject, any>, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (method === undefined) throw new Error("A MethodCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${method}(\${$args.stringJoin(",")})\`;\r
        super(ref, method);\r
        this._object = method.object();\r
        this._method = method.property();\r
        this._args = $args;\r
    }\r
}\r
\r
class $ArrayReference<TElement = any> extends $Reference<TElement[]> {\r
    constructor(array: $Reference, previous?: $Command) {\r
        super(array, previous);\r
    }\r
}\r
\r
class $IndexerReference<TArray extends $Reference = any, TElement = any> extends $Reference<TElement> {\r
    protected _array: TArray;\r
    protected _index: $Reference;\r
    array(): $Reference { return this._array; }\r
    index(): $Reference { return this._index; }\r
\r
    constructor(array: TArray, index: number | string | $Num | $Str) {\r
        var [$arrayIndex, $index] = $IndexerReference.createIndexExpression(array, index);\r
        super($arrayIndex);\r
        if (array === undefined || index == undefined)\r
            throw new Error("Index references must have an array and an index");\r
        this._array = array;\r
        this._index = $index;\r
\r
    }\r
\r
    private static createIndexExpression(array: $Reference, index: $Arg): [$Reference, $Reference] {\r
        if (typeof index === "number" && index < 0) index = $ref(\`\${array}.length + \${index}\`);\r
        else index = $arg(index);\r
        return [$ref(\`\${array}[\${index}]\`), index];\r
    }\r
}\r
\r
class $ArrayLiteralReference<TElement = any> extends $ArrayReference<TElement> {\r
    constructor(array: TElement[] | A<TElement>) {\r
        if (!array) throw new Error("Array literal undefined");\r
        super($ArrayLiteralReference.createArrayExpression(array));\r
    }\r
\r
    private static createArrayExpression(array: any[] | A<any>): $Reference {\r
        if (array instanceof A) array = array.a();\r
        if (array.length == 0) return $ref("[]");\r
        return $ref(\`[\${f(array).select(r => $arg(r)).stringJoin(",")}]\`);\r
    }\r
}\r
\r
class $StringLiteralReference extends $Reference<string> {\r
    _value: string;\r
    value(): string { return this._value; }\r
\r
    constructor(value: string | Str| $Reference, quoteType: \`"\` | \`'\` = \`"\`) {\r
        if (value === undefined) throw new Error("String literal unspecified");\r
        if (value instanceof $Reference) value = value.toString();\r
        if (value instanceof Str) value = value.s();\r
        super(\`\${quoteType}\${value}\${quoteType}\`);\r
        this._value = value;\r
    }\r
}\r
\r
class $Eval {\r
    private static _commands: CommandQueue | undefined;\r
    private static _mode: ExecutionMode = "Remote";\r
\r
    private static commands() { if (!this._commands) this._commands = new CommandQueue(); return this._commands; }\r
    private static mode(newMode?: ExecutionMode) { if (newMode !== undefined) this._mode = newMode; return this._mode; }\r
\r
    static debug: boolean = false;\r
\r
    static cmd(cmd: $Command | $Reference | string, onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.mode() === "Remote") {\r
            if (cmd instanceof $Reference) cmd = cmd.address();\r
            if (cmd instanceof $Command) cmd = cmd.expression();\r
            this.commands().enqueue(cmd, false);\r
        } else {\r
            if (!(cmd instanceof $Command)) cmd = $cmd(cmd);\r
            if (this.commands().length() > 0)\r
                this.sync(onComplete, onError);\r
\r
            var cmdExpression = cmd.expression();\r
            if (!onError) {\r
                cmd.$execute();\r
                if (onComplete) onComplete(cmdExpression, 0);\r
            } else {\r
                try {\r
                    cmd.$execute();\r
                    if (onComplete) onComplete(cmdExpression, 0);\r
                } catch (e) {\r
                    onError(cmdExpression, 0, {\r
                        body: (e as any || "Command failed").toSring() as string,\r
                        headers: { "Error-Code": -1 }\r
                    });\r
                }\r
            }\r
        }\r
    }\r
\r
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.debug) {\r
            onComplete = (cmd, i) => { console.log(\`$eval.sync \${i} complete:\`, cmd); if (onComplete) onComplete(cmd, i); }\r
            onError = (cmd, i, e) => { console.log(\`$eval.sync \${i} FAILED:\`, cmd, e?.headers?.["Error-Code"], e?.body); if (onError) onError(cmd, i, e); }\r
        }\r
        this.commands().sync(onComplete, onError);\r
    }\r
\r
    static onCompleteDefault: OnCompleteHandler | undefined;\r
    static onErrorDefault: OnErrorHandler | undefined;\r
}\r
\r
function $ref<Type = any>(expression: $Any): $Reference<Type> {\r
    if (expression === null || expression === undefined) return expression as any;\r
    if (expression instanceof $Reference) return expression;\r
    if (expression === null || expression === undefined) return undefined as any;\r
    if (expression instanceof A) expression = expression.a();\r
    if (expression instanceof Array) return $arr(expression) as any;\r
    if (typeof expression === "function") return new $ClassReference(expression);\r
    return new $Reference<Type>(expression);\r
}\r
\r
function $cmd(expression: $Any): $Command {\r
    if (expression === undefined) return undefined as any;\r
    if (expression instanceof $Command) return expression;\r
    if (expression instanceof Str) return new $Command(expression.s());\r
    if (typeof expression === "string") return new $Command(expression);\r
    return $ref(expression);\r
}\r
\r
// Like $ref but strings are treated as string literals\r
function $arg<Type = any>(arg: $Arg): $Reference<Type> {\r
    if (typeof arg === "string" || arg instanceof Str) return $str(arg) as any;\r
    return $ref(arg);\r
}\r
\r
function $str(...parts: $Any[]): $StringLiteralReference {\r
    if (parts === undefined) return undefined as any;\r
    var len = parts.length;\r
    if (len == 1) {\r
        var part = parts[0];\r
        if (typeof part === "string") return new $StringLiteralReference(part);\r
        if (part instanceof Str) return new $StringLiteralReference(part.s());\r
        if (part instanceof $StringLiteralReference) return part;\r
        return new $StringLiteralReference(\`\${part}\`);\r
    }\r
    var value = f(parts).select(s => s instanceof $StringLiteralReference ? s.value() : s).stringJoin(" ").s();\r
    return new $StringLiteralReference(value);\r
}\r
\r
function $arr<TElement = any>(array: $Arr<TElement>): $ArrayReference<TElement> {\r
    if (array === undefined) return undefined as any;\r
    if (array instanceof $Reference) return new $ArrayReference(array);\r
    if (array instanceof A) array = array.a();\r
    return new $ArrayLiteralReference(array);\r
}\r
\r
function $eval(cmd: $Command | $Reference | string, onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
    $Eval.cmd(cmd, onComplete, onError);\r
}\r
\r
function $sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
    $Eval.sync(onComplete, onError);\r
}`}),e.jsx(f,{identifier:"func-implementation.v1",type:".ts",children:`
class $Reference<Type = any> {
    // ... existing code ...

    $func<T = any>(selector: (o: Type) => T): $VariableReference<T> {
        // Parse the function like in $dot to get the operation
        const key = selector.toString();
        const ref = this._properties[key];
        if (ref) return ref as $VariableReference<T>;

        // Extract the operation from the function body
        const path = str(stringJoin(str(key).split(".").skip(1), ".")
            .split(";")
            .first())
            .replaceAll(" ", "")
            .s();

        // Create a new variable to hold the result
        const varName = $Reference.generateUniqueVariableName();
        
        // Create the effect that will execute the function
        const effect = new $Command(\`\${varName} = \${this.address()}.\${path};\`, this);
        
        // Create and return the variable reference for chaining
        return new $VariableReference<T>(varName, effect);
    }
}
`}),e.jsx(f,{identifier:"effect-reference-implementation.v1",type:".ts",children:`
class $Effect {
    protected _expression: string;
    protected _variable?: string;
    
    constructor(expression: string, variable?: string) {
        this._expression = expression;
        this._variable = variable;
    }

    expression(): string { 
        return this._expression; 
    }

    $var(name: string): $Effect {
        this._variable = name;
        this._expression = \`var \${name} = \${this._expression};\`;
        return this;
    }

    $dispatch(): $Reference {
        $Command.current.addStep(this);
        return this._variable ? 
            new $Reference(this._variable) : 
            new $Reference("$.global");
    }

    toString(): string {
        return this.expression();
    }
}

class $Command {
    private static _instance: $Command;
    private _steps: $Effect[] = [];

    static get current(): $Command {
        if (!this._instance) {
            this._instance = new $Command();
        }
        return this._instance;
    }

    addStep(effect: $Effect): void {
        this._steps.push(effect);
    }

    $compile(): string {
        return this._steps.map(e => e.expression()).join('\\n');
    }

    $execute<T = any>(global: boolean = false): T {
        const script = this.$compile();
        if (global) {
            return eval.call($.global || globalThis, script);
        }
        return eval(script);
    }

    static reset(): void {
        this._instance = new $Command();
    }
}

class $Reference<Type = any> extends $Effect {
    constructor(address: string) {
        super(address);
    }

    $func<T = any>(selector: (o: Type) => T): $Reference<T> {
        return new $Reference<T>(\`\${this.expression()}.\${selector.toString()}\`);
    }

    $resolve(): Type {
        const effect = new $Effect(this.expression());
        const ref = effect.$var("__temp__").$dispatch();
        return $Command.current.$execute();
    }

    $assign(value: $Arg): $Reference<Type> {
        const effect = new $Effect(\`\${this.expression()} = \${$arg(value)}\`);
        return effect.$dispatch();
    }

    $var(name: string): $Reference<Type> {
        return super.$var(name).$dispatch() as $Reference<Type>;
    }
}

// Helper functions remain largely the same
function $ref<Type = any>(expression: string): $Reference<Type> {
    return new $Reference<Type>(expression);
}
`})]}),"February1020252"),H=p(()=>e.jsxs(m,{children:[e.jsx(T,{children:e.jsx(b,{children:"[11 February 2025](2025-02-11)"})}),e.jsx($,{children:"[11 February 2025](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#11-february-2025)"}),e.jsxs(i,{at:"2025-02-11T13:43:05.945579Z",children:[e.jsx(c,{children:"b365ca6f-fc6e-4321-a908-1207061db8c0"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Okay I am making progress. What steps can we add to this to make for a seamless transaction where I can create references"}),e.jsx(r,{children:"You can see some of how this abstraction will be used in the second document. I just need an easy way to add new functions to whose wrapper classes that can themselves be dispatched easily"}),e.jsx(u,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e.jsx(u,{identifier:"paste-2",type:".txt",children:"Attached “paste-2.txt”"}),e.jsx(u,{children:"Uploaded “paste.txt”, whose content the export does not carry"}),e.jsx(u,{children:"Uploaded “paste-2.txt”, whose content the export does not carry"})]}),e.jsxs(i,{at:"2025-02-11T13:43:19.256701Z",children:[e.jsx(c,{children:"1bf24e55-20c3-4987-974b-da8563c8460b"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Looking at how you're using this in the second document, I see the pattern. You want to be able to easily create wrapper methods that build up commands and return references. Let's focus on making that seamless."}),e.jsx(r,{children:"The key things I notice:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsxs(n,{children:["Your methods in $Application like ",e.jsxs(t,{children:[e.jsx(s,{}),"document()"]})," return references that can be chained"]}),e.jsx(n,{children:"The $Effect and $Reference classes form the basis of all operations"}),e.jsx(n,{children:"When we dispatch an effect, we want to get back a reference to continue chaining"}),e.jsxs(n,{children:["Methods like ",e.jsxs(t,{children:[e.jsx(s,{}),"add()"]})," in $Documents show the pattern of taking typed arguments and returning new references"]})]}),e.jsx(r,{children:"Here's what I suggest for making this more seamless. First, let's add some helpers:"}),e.jsx(l,{language:"typescript",children:`// In $Effect
protected $wrap<T>(expression: string, varName?: string): $Reference<T> {
    const effect = new $Effect(expression, varName);
    return effect.$dispatch();
}

// Helper for methods that return references
protected $method<T>(name: string, ...args: $Any[]): $Reference<T> {
    const argsStr = args.map(arg => $arg(arg)).join(',');
    return this.$wrap<T>(\`\${this.address()}.\${name}(\${argsStr})\`);
}

// Helper for property access
protected $prop<T>(name: string, value?: $Any): $Reference<T> {
    if (value === undefined) {
        return this.$wrap<T>(\`\${this.address()}.\${name}\`);
    }
    return this.$wrap<T>(\`\${this.address()}.\${name} = \${$arg(value)}\`);
}`}),e.jsx(r,{children:"Then methods in your wrapper classes become very simple:"}),e.jsx(l,{language:"typescript",children:`class $Documents extends $ApplicationCollection<Documents, $Document, Document> {
    add(documentColorSpace?: $Arg<DocumentColorSpace>): $Document {
        return this.$method<Document>('add', documentColorSpace);
    }
    
    // Property access becomes simple
    length(): $Reference<number> {
        return this.$prop<number>('length');
    }
}`}),e.jsx(r,{children:"The $func method could then also be simplified:"}),e.jsx(l,{language:"typescript",children:"$func<T>(selector: (o: Type) => T): $Reference<T> {\n    return this.$wrap<T>(`(${selector})(${this.address()})`);\n}"}),e.jsx(r,{children:"This would allow for smooth chaining like:"}),e.jsx(l,{language:"typescript",children:`$ref(app)
    .documents()
    .add()
    .$func(d => d.pathItems.add())
    .$dispatch();`}),e.jsx(r,{children:"Would you like me to show how to implement more of these patterns in your existing codebase?"})]}),e.jsxs(i,{at:"2025-02-11T13:45:18.411058Z",children:[e.jsx(c,{children:"ac524387-eb40-40e9-9f8a-9cd783913961"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Can you please read my abstractions more carefully? I don't want any $func calls. I want to be able to add methods. Look at $Application"}),e.jsx(r,{children:"I want it to be:"}),e.jsx(r,{children:"$app.activeDocument().dougsOpenFunction()"}),e.jsx(r,{children:"And that last thing is a member I added to $Document to do something particular. Perhaps I added it by having my function toString'd and then treated like an effect and the thing that is returned is a reference"})]}),e.jsxs(i,{at:"2025-02-11T13:45:25.330042Z",children:[e.jsx(c,{children:"e104bb4e-2fbf-468d-8bd3-3141b0832383"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsxs(r,{children:["Ah I see - you want to be able to extend the classes with new methods that integrate seamlessly with your effect/reference system. Looking at how $Application is structured, with methods like ",e.jsxs(t,{children:[e.jsx(s,{}),"document()"]})," and ",e.jsxs(t,{children:[e.jsx(s,{}),"documents()"]}),", each method is effectively creating a new reference that can be chained."]}),e.jsx(r,{children:"The pattern I see in $Application is:"}),e.jsx(l,{language:"typescript",children:`document(): $Document { return this.activeDocument(); }
documents(): $Documents { return $docref(this.$get(o => o.documents), this.typename(), this.document()); }`}),e.jsxs(r,{children:["So if you wanted to add ",e.jsxs(t,{children:[e.jsx(s,{}),"dougsOpenFunction()"]})," to $Document, it would follow this pattern:"]}),e.jsx(l,{language:"typescript",children:`class $Document extends $ApplicationItem<Document> {
    // Existing methods...

    dougsOpenFunction(...args: any[]): $Reference<any> {
        // The function body becomes the effect's expression
        const functionBody = function(doc) {
            // Your custom logic here
            doc.something.doSomething();
        };
        
        // Create an effect that will execute this function
        return $eff(\`(\${functionBody})(\${this.address()})\`).$dispatch();
    }
}`}),e.jsx(r,{children:"Is this closer to what you're looking for? Where we can add methods to the wrapper classes that automatically integrate with your effect/reference system?"})]}),e.jsxs(i,{at:"2025-02-11T16:35:56.516696Z",children:[e.jsx(c,{children:"4dcc19c0-dca8-457b-9cff-e8dbb95fd6f7"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Look at these examples. Do you see how I can make it extensible? Do these work?"}),e.jsxs(r,{children:["$func<T = any>(selector: (self: T, ...args: any[]) => T, ...args: $Arg[]):",e.jsx(a,{children:"Reference<T> { var ref = this."}),'var("$$',e.jsx(a,{children:'func"); args.unshift(this); return ref.'}),"invoke(args); }"]}),e.jsxs(r,{children:["exaampleMember(name: $Str): ",e.jsx(a,{children:"Reference<string> { return this."}),'func((self, name) => { var oldName = app.activeDocument.activeLayer.name; app.activeDocument.activeLayer.name = name; return oldName; }, "Layer Name"); }']})]}),e.jsxs(i,{at:"2025-02-11T16:36:08.379838Z",children:[e.jsx(c,{children:"cd4ae653-5db3-456c-88e1-5483f23eed83"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsxs(r,{children:["Ah! Now I understand - you're using $func as a way to inject new functionality by passing in a function that will be executed in the context of the reference. The function gets ",e.jsxs(t,{children:[e.jsx(s,{}),"self"]})," as its first parameter (which is the object the reference points to) and then any additional arguments."]}),e.jsx(r,{children:"So your pattern is:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"$func takes a selector function that defines what operation to perform"}),e.jsxs(n,{children:["That function gets the current reference as its first argument (",e.jsxs(t,{children:[e.jsx(s,{}),"self"]}),")"]}),e.jsxs(n,{children:["Additional arguments are passed after ",e.jsxs(t,{children:[e.jsx(s,{}),"self"]})]}),e.jsx(n,{children:"The function body becomes part of the command chain"}),e.jsx(n,{children:"Returns a reference to allow chaining"})]}),e.jsx(r,{children:"And in your example:"}),e.jsx(l,{language:"typescript",children:`exaampleMember(name: $Str): $Reference<string> {
    return this.$func((self, name) => {
        var oldName = app.activeDocument.activeLayer.name;
        app.activeDocument.activeLayer.name = name;
        return oldName;
    }, "Layer Name");
}`}),e.jsx(r,{children:"The function body itself becomes part of the command chain, and the type system preserves the return type information."}),e.jsx(r,{children:"This is elegant because:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsx(n,{children:"It allows adding new functionality without modifying the core classes"}),e.jsx(n,{children:"The function bodies are treated as effects"}),e.jsx(n,{children:"The type system flows through naturally"}),e.jsx(n,{children:"It integrates seamlessly with your existing reference/effect system"})]}),e.jsx(r,{children:"Would you like me to show how to expand this pattern to make it even more powerful or help implement specific functionality using this approach?"})]}),e.jsxs(i,{at:"2025-02-11T18:00:29.468926Z",children:[e.jsx(c,{children:"49073034-3580-4578-9ea9-b16f293b38df"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Doug: Analyze this carefully. Why might I get a stack overflow on $VeriableReference constructor"}),e.jsx(u,{identifier:"paste-2",type:".txt",children:"Attached “paste.txt”"}),e.jsx(u,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),e.jsxs(i,{at:"2025-02-11T18:00:39.497057Z",children:[e.jsx(c,{children:"c1b84c2f-6b12-4995-916f-ef5d18b3773f"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsxs(r,{children:["Looking at the code carefully, I can see the potential stack overflow in ",e.jsxs(t,{children:[e.jsx(s,{}),"$VariableReference"]}),":"]}),e.jsx(l,{language:"typescript",children:`class $VariableReference<TVariable = any> extends $Reference<TVariable> {
    protected _name: string;
    name(): string { return this._name; }

    constructor(name: string) {
        super(name);  // This calls $Reference constructor
        if (name === undefined || name.length === 0)
            throw new Error("A variable reference must have a name");
        this._name = name;
    }
}`}),e.jsx(r,{children:"The issue is in the inheritance chain and constructor calls:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsxs(n,{children:[e.jsxs(t,{children:[e.jsx(s,{}),"$VariableReference"]})," extends ",e.jsxs(t,{children:[e.jsx(s,{}),"$Reference"]})]}),e.jsxs(n,{children:[e.jsxs(t,{children:[e.jsx(s,{}),"$Reference"]})," extends ",e.jsxs(t,{children:[e.jsx(s,{}),"$Effect"]})]}),e.jsxs(n,{children:["In ",e.jsxs(t,{children:[e.jsx(s,{}),"$Effect"]}),"'s constructor: ``",e.jsxs(t,{children:[e.jsx(s,{}),'typescript constructor(expression: string, variable?: string) { var ref = !variable ? "$.global" : variable; this._variable = new $VariableReference<T>(ref);  // Creates new $VariableReference this._expression = expression; }']}),"``"]})]}),e.jsx(r,{children:"The infinite recursion happens because:"}),e.jsxs(r,{children:[e.jsx(d,{ordered:!0}),e.jsxs(n,{children:["Create a new ",e.jsxs(t,{children:[e.jsx(s,{}),"$VariableReference"]})]}),e.jsxs(n,{children:["It calls ",e.jsxs(t,{children:[e.jsx(s,{}),"super(name)"]})," which calls ",e.jsxs(t,{children:[e.jsx(s,{}),"$Reference"]})," constructor"]}),e.jsxs(n,{children:[e.jsxs(t,{children:[e.jsx(s,{}),"$Reference"]})," calls ",e.jsxs(t,{children:[e.jsx(s,{}),"$Effect"]})," constructor"]}),e.jsxs(n,{children:[e.jsxs(t,{children:[e.jsx(s,{}),"$Effect"]})," creates a new ",e.jsxs(t,{children:[e.jsx(s,{}),"$VariableReference"]})]}),e.jsx(n,{children:"Which starts the cycle again..."})]}),e.jsxs(r,{children:["The solution would be to have ",e.jsxs(t,{children:[e.jsx(s,{}),"$Effect"]})," not create a ",e.jsxs(t,{children:[e.jsx(s,{}),"$VariableReference"]})," if it's already being constructed as part of a ",e.jsxs(t,{children:[e.jsx(s,{}),"$VariableReference"]}),". Perhaps add a flag or restructure how variable references are created in ",e.jsxs(t,{children:[e.jsx(s,{}),"$Effect"]}),"."]})]}),e.jsxs(i,{at:"2025-02-11T22:35:47.824081Z",children:[e.jsx(c,{children:"b739075d-066e-4a04-825f-dea1cdfb945d"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:"Repeat this code exactly but change them to the appropriate type names for the collection:"}),e.jsxs(r,{children:["layers(): $Layers { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.layers), this.typename(), this); } artboards(): $Artboards { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.artboards), this.typename(), this); } views(): $Views { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.views), this.typename(), this); } brushes(): $Brushes { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.brushes), this.typename(), this); } swatches(): $Swatches { return",e.jsx(a,{children:"docref(this."}),"get(o => o.swatches), this.typename(), this); } symbols(): $Symbols { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.symbols), this.typename(), this); } stories(): $Stories { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.stories), this.typename(), this); } pluginItems(): $PluginItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.pluginItems), this.typename(), this); } pageItems(): $PageItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.pageItems), this.typename(), this); } pathItems(): $PathItems { return",e.jsx(a,{children:"docref(this."}),"get(o => o.pathItems), this.typename(), this); } textFrames(): $TextFrames { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.textFrames), this.typename(), this); } groupItems(): $GroupItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.groupItems), this.typename(), this); } rasterItems(): $RasterItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.rasterItems), this.typename(), this); } compoundPathItems(): $CompoundPathItems { return",e.jsx(a,{children:"docref(this."}),"get(o => o.compoundPathItems), this.typename(), this); } legacyTextItems(): $LegacyTextItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.legacyTextItems), this.typename(), this); } nonNativeItems(): $NonNativeItems { return",e.jsx(a,{children:"docref(this."}),"get(o => o.nonNativeItems), this.typename(), this); } gradients(): $Gradients { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.gradients), this.typename(), this); } variables(): $Variables { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.variables), this.typename(), this); } patterns(): $Patterns { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.patterns), this.typename(), this); } paragraphStyles(): $ParagraphStyles { return",e.jsx(a,{children:"docref(this."}),"get(o => o.paragraphStyles), this.typename(), this); } characterStyles(): $CharacterStyles { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.characterStyles), this.typename(), this); } spots(): $Spots { return",e.jsx(a,{children:"docref(this."}),"get(o => o.spots), this.typename(), this); } datasets(): $DataSets { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.dataSets), this.typename(), this); } tags(): $Tags { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.tags), this.typename(), this); } graphicStyles(): $ArtStyles { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.graphicStyles), this.typename(), this); } placedItems(): $PlacedItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.placedItems), this.typename(), this); } embeddedItems(): $EmbeddedItems { return",e.jsx(a,{children:"docref(this."}),"get(o => o.embeddedItems), this.typename(), this); } graphItems(): $GraphItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.graphItems), this.typename(), this); } meshItems(): $MeshItems { return ",e.jsx(a,{children:"docref(this."}),"get(o => o.meshItems), this.typename(), this); }"]})]}),e.jsxs(i,{at:"2025-02-11T22:36:04.924522Z",children:[e.jsx(c,{children:"9ce1288b-5727-4441-8f7d-c4deb1456c6f"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Here are the interfaces repeated with correct collection/item type names:"}),e.jsx(l,{language:"typescript",children:`class $Document extends $ApplicationItem<Document> {
    layers(): $ApplicationCollection<Layers, $Layer, Layer> { return $docref(this.$get(o => o.layers), this.typename(), this); }
    artboards(): $ApplicationCollection<Artboards, $Artboard, Artboard> { return $docref(this.$get(o => o.artboards), this.typename(), this); }
    views(): $ApplicationCollection<Views, $View, View> { return $docref(this.$get(o => o.views), this.typename(), this); }
    brushes(): $ApplicationCollection<Brushes, $Brush, Brush> { return $docref(this.$get(o => o.brushes), this.typename(), this); }
    swatches(): $ApplicationCollection<Swatches, $Swatch, Swatch> { return $docref(this.$get(o => o.swatches), this.typename(), this); }
    symbols(): $ApplicationCollection<Symbols, $Symbol, Symbol> { return $docref(this.$get(o => o.symbols), this.typename(), this); }
    stories(): $ApplicationCollection<Stories, $Story, Story> { return $docref(this.$get(o => o.stories), this.typename(), this); }
    pluginItems(): $ApplicationCollection<PluginItems, $PluginItem, PluginItem> { return $docref(this.$get(o => o.pluginItems), this.typename(), this); }
    pageItems(): $ApplicationCollection<PageItems, $PageItem, PageItem> { return $docref(this.$get(o => o.pageItems), this.typename(), this); }
    pathItems(): $ApplicationCollection<PathItems, $PathItem, PathItem> { return $docref(this.$get(o => o.pathItems), this.typename(), this); }
    textFrames(): $ApplicationCollection<TextFrames, $TextFrame, TextFrame> { return $docref(this.$get(o => o.textFrames), this.typename(), this); }
    groupItems(): $ApplicationCollection<GroupItems, $GroupItem, GroupItem> { return $docref(this.$get(o => o.groupItems), this.typename(), this); }
    rasterItems(): $ApplicationCollection<RasterItems, $RasterItem, RasterItem> { return $docref(this.$get(o => o.rasterItems), this.typename(), this); }
    compoundPathItems(): $ApplicationCollection<CompoundPathItems, $CompoundPathItem, CompoundPathItem> { return $docref(this.$get(o => o.compoundPathItems), this.typename(), this); }
    legacyTextItems(): $ApplicationCollection<LegacyTextItems, $LegacyTextItem, LegacyTextItem> { return $docref(this.$get(o => o.legacyTextItems), this.typename(), this); }
    nonNativeItems(): $ApplicationCollection<NonNativeItems, $NonNativeItem, NonNativeItem> { return $docref(this.$get(o => o.nonNativeItems), this.typename(), this); }
    gradients(): $ApplicationCollection<Gradients, $Gradient, Gradient> { return $docref(this.$get(o => o.gradients), this.typename(), this); }
    variables(): $ApplicationCollection<Variables, $Variable, Variable> { return $docref(this.$get(o => o.variables), this.typename(), this); }
    patterns(): $ApplicationCollection<Patterns, $Pattern, Pattern> { return $docref(this.$get(o => o.patterns), this.typename(), this); }
    paragraphStyles(): $ApplicationCollection<ParagraphStyles, $ParagraphStyle, ParagraphStyle> { return $docref(this.$get(o => o.paragraphStyles), this.typename(), this); }
    characterStyles(): $ApplicationCollection<CharacterStyles, $CharacterStyle, CharacterStyle> { return $docref(this.$get(o => o.characterStyles), this.typename(), this); }
    spots(): $ApplicationCollection<Spots, $Spot, Spot> { return $docref(this.$get(o => o.spots), this.typename(), this); }
    datasets(): $ApplicationCollection<DataSets, $DataSet, DataSet> { return $docref(this.$get(o => o.dataSets), this.typename(), this); }
    tags(): $ApplicationCollection<Tags, $Tag, Tag> { return $docref(this.$get(o => o.tags), this.typename(), this); }
    graphicStyles(): $ApplicationCollection<ArtStyles, $ArtStyle, ArtStyle> { return $docref(this.$get(o => o.graphicStyles), this.typename(), this); }
    placedItems(): $ApplicationCollection<PlacedItems, $PlacedItem, PlacedItem> { return $docref(this.$get(o => o.placedItems), this.typename(), this); }
    embeddedItems(): $ApplicationCollection<EmbeddedItems, $EmbeddedItem, EmbeddedItem> { return $docref(this.$get(o => o.embeddedItems), this.typename(), this); }
    graphItems(): $ApplicationCollection<GraphItems, $GraphItem, GraphItem> { return $docref(this.$get(o => o.graphItems), this.typename(), this); }
    meshItems(): $ApplicationCollection<MeshItems, $MeshItem, MeshItem> { return $docref(this.$get(o => o.meshItems), this.typename(), this); }
}`}),e.jsx(r,{children:"Each collection and item type is now properly named according to the illustrator object model pattern, where the collection is pluralized and contains items of the singular type."})]}),e.jsxs(i,{at:"2025-02-11T22:39:58.451520Z",children:[e.jsx(c,{children:"1250bbd4-7240-4a78-9e20-46ad73b4ebee"}),e.jsx(o,{children:"[Doug](/dougs-story/)"}),e.jsx(r,{children:'Try again. It needs to be a string literal. layers() would pass in "Layers", views() would pass in "Views"'})]}),e.jsxs(i,{at:"2025-02-11T22:40:16.185319Z",children:[e.jsx(c,{children:"eee55a5d-3dd4-4055-aeaf-eca5ec55cab6"}),e.jsx(o,{children:"[Claude](/dougs-claude/)"}),e.jsx(r,{children:"Ah, now I understand - we want to pass the type name as a string literal. Here's the corrected version:"}),e.jsx(l,{language:"typescript",children:`class $Document extends $ApplicationItem<Document> {
    layers(): $ApplicationCollection<Layers, $Layer, Layer> { return $docref(this.$get(o => o.layers), "Layers", this); }
    artboards(): $ApplicationCollection<Artboards, $Artboard, Artboard> { return $docref(this.$get(o => o.artboards), "Artboards", this); }
    views(): $ApplicationCollection<Views, $View, View> { return $docref(this.$get(o => o.views), "Views", this); }
    brushes(): $ApplicationCollection<Brushes, $Brush, Brush> { return $docref(this.$get(o => o.brushes), "Brushes", this); }
    swatches(): $ApplicationCollection<Swatches, $Swatch, Swatch> { return $docref(this.$get(o => o.swatches), "Swatches", this); }
    symbols(): $ApplicationCollection<Symbols, $Symbol, Symbol> { return $docref(this.$get(o => o.symbols), "Symbols", this); }
    stories(): $ApplicationCollection<Stories, $Story, Story> { return $docref(this.$get(o => o.stories), "Stories", this); }
    pluginItems(): $ApplicationCollection<PluginItems, $PluginItem, PluginItem> { return $docref(this.$get(o => o.pluginItems), "PluginItems", this); }
    pageItems(): $ApplicationCollection<PageItems, $PageItem, PageItem> { return $docref(this.$get(o => o.pageItems), "PageItems", this); }
    pathItems(): $ApplicationCollection<PathItems, $PathItem, PathItem> { return $docref(this.$get(o => o.pathItems), "PathItems", this); }
    textFrames(): $ApplicationCollection<TextFrames, $TextFrame, TextFrame> { return $docref(this.$get(o => o.textFrames), "TextFrames", this); }
    groupItems(): $ApplicationCollection<GroupItems, $GroupItem, GroupItem> { return $docref(this.$get(o => o.groupItems), "GroupItems", this); }
    rasterItems(): $ApplicationCollection<RasterItems, $RasterItem, RasterItem> { return $docref(this.$get(o => o.rasterItems), "RasterItems", this); }
    compoundPathItems(): $ApplicationCollection<CompoundPathItems, $CompoundPathItem, CompoundPathItem> { return $docref(this.$get(o => o.compoundPathItems), "CompoundPathItems", this); }
    legacyTextItems(): $ApplicationCollection<LegacyTextItems, $LegacyTextItem, LegacyTextItem> { return $docref(this.$get(o => o.legacyTextItems), "LegacyTextItems", this); }
    nonNativeItems(): $ApplicationCollection<NonNativeItems, $NonNativeItem, NonNativeItem> { return $docref(this.$get(o => o.nonNativeItems), "NonNativeItems", this); }
    gradients(): $ApplicationCollection<Gradients, $Gradient, Gradient> { return $docref(this.$get(o => o.gradients), "Gradients", this); }
    variables(): $ApplicationCollection<Variables, $Variable, Variable> { return $docref(this.$get(o => o.variables), "Variables", this); }
    patterns(): $ApplicationCollection<Patterns, $Pattern, Pattern> { return $docref(this.$get(o => o.patterns), "Patterns", this); }
    paragraphStyles(): $ApplicationCollection<ParagraphStyles, $ParagraphStyle, ParagraphStyle> { return $docref(this.$get(o => o.paragraphStyles), "ParagraphStyles", this); }
    characterStyles(): $ApplicationCollection<CharacterStyles, $CharacterStyle, CharacterStyle> { return $docref(this.$get(o => o.characterStyles), "CharacterStyles", this); }
    spots(): $ApplicationCollection<Spots, $Spot, Spot> { return $docref(this.$get(o => o.spots), "Spots", this); }
    datasets(): $ApplicationCollection<DataSets, $DataSet, DataSet> { return $docref(this.$get(o => o.dataSets), "DataSets", this); }
    tags(): $ApplicationCollection<Tags, $Tag, Tag> { return $docref(this.$get(o => o.tags), "Tags", this); }
    graphicStyles(): $ApplicationCollection<ArtStyles, $ArtStyle, ArtStyle> { return $docref(this.$get(o => o.graphicStyles), "ArtStyles", this); }
    placedItems(): $ApplicationCollection<PlacedItems, $PlacedItem, PlacedItem> { return $docref(this.$get(o => o.placedItems), "PlacedItems", this); }
    embeddedItems(): $ApplicationCollection<EmbeddedItems, $EmbeddedItem, EmbeddedItem> { return $docref(this.$get(o => o.embeddedItems), "EmbeddedItems", this); }
    graphItems(): $ApplicationCollection<GraphItems, $GraphItem, GraphItem> { return $docref(this.$get(o => o.graphItems), "GraphItems", this); }
    meshItems(): $ApplicationCollection<MeshItems, $MeshItem, MeshItem> { return $docref(this.$get(o => o.meshItems), "MeshItems", this); }
}`}),e.jsxs(r,{children:["I replaced ",e.jsxs(t,{children:[e.jsx(s,{}),"this.typename()"]})," with the appropriate string literal type name for each collection. This should match the Illustrator object model's type names exactly."]})]}),e.jsx(f,{identifier:"paste",type:".txt",children:`type $Ref<T = any> = $Reference<T> | T\r
type $Arg<T = any> = $Reference<T> | T\r
type $Any = $Ref<any>\r
type $Str = $Ref<string> | Str\r
type $Num = $Ref<number>\r
type $Bool = $Ref<boolean>\r
type $Arr<T=any> = $Ref<T[]> | A<T>\r
type ExecutionMode = "Remote" | "Local"\r
\r
class $Command {\r
    private _expression: string = "";\r
    private steps: A<$Effect> = f([]); \r
    expression(): string { return this._expression; }\r
    lastStep() { return this.steps.last(); }\r
\r
    $addStep<T = any>(effect: $Effect<T>): $Reference<T> {\r
        this.steps.add(effect);\r
        return effect.variable();\r
    }\r
\r
    $compile() {\r
        return this.steps.stringJoin("\\n").s();\r
    }\r
\r
    $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        $eval(onComplete, onError);\r
    }\r
\r
    $execute<T = any>(global: boolean = false): T {\r
        var __referent__: T = undefined as any;\r
        var cmd = $cmd.$compile();\r
        var step = $cmd.lastStep();\r
        \r
        if (global) {\r
            // Explicitly run eval in the global scope\r
            eval.call($.global || globalThis, cmd);\r
        } else {\r
            eval(cmd);\r
        }\r
        return __referent__;\r
    }\r
\r
    toString(): string {\r
        return this.expression();\r
    }\r
}\r
\r
class $Effect<T = any> {\r
    protected _expression: string;\r
    protected _variable: $VariableReference<T>;\r
\r
    expression(): string { return this._expression; }\r
    variable(): $VariableReference<T> { return this._variable; }\r
    \r
    constructor(expression: string, variable?: string) {\r
        var ref = !variable ? "$.global" : variable; \r
        this._variable = new $VariableReference<T>(ref);\r
        this._expression = expression;\r
    }\r
\r
\r
    $dispatch(): $Reference {\r
        $cmd.$addStep(this);\r
        return this._variable ? \r
            new $Reference(this._variable) : \r
            new $Reference("$.global");\r
    }\r
\r
    toString(): string {\r
        return this.expression();\r
    }\r
}\r
\r
class $Reference<T = any> extends $Effect {\r
    _address: string;\r
    _properties = dictionary<$PropertyReference>();\r
    address(): string { return this._address; }\r
    loc(): string { return this.address(); }\r
\r
    constructor(address?: $Any) {\r
        address = \`\${address}\`;\r
        super(\`\${address};\`)\r
        this._address = address;\r
    }\r
\r
    $dot<TSelection = any>(selector: string): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: (o: T) => TSelection): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: ((o: T) => TSelection) | string): $PropertyReference<this, TSelection> {\r
        var key = typeof selector === "function" ? selector.toString() : selector;\r
        var ref = this._properties[key];\r
        if (ref) return ref;\r
\r
        var path = typeof selector === "function" ?\r
            str(stringJoin(str(key).split(".").skip(1), ".").split(";").first()).replaceAll(" ", "").s() :\r
            selector;\r
\r
        ref = new $PropertyReference<this, TSelection>(this, path);\r
        this._properties[path] = ref;\r
        return ref;\r
    }\r
\r
    $get<TSelection = any>(selector: string, newValue?: TSelection): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: (o: T) => TSelection, newValue?: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: ((o: T) => TSelection) | string, newValue?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (newValue !== undefined) ref.$assign($arg(newValue));\r
        return ref;\r
    }\r
\r
    $set<TSelection = any>(selector: string, value: TSelection): void\r
    $set<TSelection = any>(selector: (o: T) => TSelection, value: TSelection | $Any): void\r
    $set<TSelection = any>(selector: ((o: T) => TSelection) | string, value: TSelection | $Any): void {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (value !== undefined) {\r
            ref.$assign()\r
        }\r
        return eff.Variable as any;\r
    }\r
\r
    $call<TResult = any>(selector: ((o: T) => TResult) | string, ...args: $Any[]): $MethodCallReference<this, TResult> {\r
        var propertyRef = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        return new $MethodCallReference<this, TResult>(propertyRef, args);\r
    }\r
\r
    $invoke<TResult = any>(...args: $Any[]): $FunctionCallReference<TResult> {\r
        return new $FunctionCallReference<TResult>(this, args);\r
    }\r
\r
    $of<TElement = any>(index: number | string | $Num | $Str): $IndexerReference<$Reference<T>, TElement> {\r
        return new $IndexerReference<this, TElement>(this, index);\r
    }\r
\r
    $cast<T>(): T {\r
        return this as any;\r
    }\r
\r
    $assign(name: string): $Reference<T> {\r
        var eff = new $VariableAssignment($Reference.nextVar(name), this);\r
        return eff.$dispatch();\r
    }\r
\r
    $var(name?: string): $VariableReference<T> {\r
        var eff = new $VariableAssignment(name || $Reference.nextVar(name), this);\r
        eff.$dispatch();\r
        return eff.variable();\r
    }\r
\r
    $equals(ref: $Reference): boolean {\r
        var thisObject = this.$resolve();\r
        var otherObj = ref.$resolve();\r
        return thisObject === otherObj;\r
    }\r
\r
    $func<T = any>(selector: (o: T) => T): $Reference<T> {\r
        var ref = $ref(\`(\${selector})(\${this})\`).$assign("func");\r
        return ref;\r
    }\r
\r
    $resolve(global?: boolean): T {\r
        var _referent_: T = undefined as any;\r
        this.$var("_referent_").$execute(global);\r
        return _referent_;\r
    }\r
\r
    toString(): string {\r
        return this.address();\r
    }\r
\r
    private static variableCounter = 1;\r
    static nextVar(prefix?: string) {\r
        return \`$$\${prefix || "x"}\${this.variableCounter++}\`;\r
    }\r
}\r
\r
class $VariableReference<TVariable = any> extends $Reference<TVariable> {\r
    protected _name: string;\r
    name(): string { return this._name; }\r
\r
    constructor(name: string) {\r
        super(name);\r
        if (name === undefined || name.length === 0)\r
            throw new Error("A variable reference must have a name");\r
        this._name = name;\r
    }\r
}\r
\r
class $VariableAssignment<TVariable = any> extends $Effect {\r
    protected _name: string;\r
    protected _variable: $VariableReference<TVariable>;\r
    name(): string { return this._name; }\r
    variable(): $VariableReference<TVariable> { return this._variable;  }\r
\r
    constructor(name: string, ref: $Reference<TVariable>) {\r
        if (name === undefined || name.length === 0 || !ref)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`var \${name} = \${ref};\`;\r
        super(expression);\r
        this._name = name;\r
        this._variable = new $VariableReference<TVariable>(name);\r
    }\r
}\r
\r
class $ClassReference<Type extends Function = any> extends $Reference<Type> {\r
    protected _ctor: Type;\r
    ctor(): Type { return this._ctor; }\r
\r
    constructor(ctor: Type) {\r
        if (!ctor) throw new Error("No class specified")\r
        super(ctor.name)\r
        this._ctor = ctor;\r
    }\r
}\r
\r
class $PropertyReference<TObject extends $Reference<any> = any, TProperty = any> extends $Reference<TProperty> {\r
    protected _object: TObject;\r
    protected _property: string;\r
    property(): string { return this._property; }\r
    object(): TObject { return this._object; }\r
\r
    constructor(object: TObject, property: string) {\r
        if (property === undefined || property.length == 0 || object === undefined)\r
            throw new Error("The object and property both need to be defined in a property reference");\r
\r
        var expression = \`\${object.address()}.\${property}\`;\r
        super(expression, object);\r
        this._object = object;\r
        this._property = property;\r
    }\r
}\r
\r
class $FunctionCallReference<TResult = any> extends $Reference<TResult> {\r
    protected _func: $Reference;\r
    protected _args: A<$Reference>;\r
    func(): $Reference { return this._func; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(func: $Reference, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (func === undefined) throw new Error("A FunctionCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${func}(\${$args.stringJoin(",")})\`;\r
        super(ref, func);\r
        this._func = func;\r
        this._args = $args;\r
    }\r
}\r
\r
class $MethodCallReference<TObject extends $Reference = any, TResult = any> extends $Reference<TResult> {\r
    protected _object: TObject;\r
    protected _method: string;\r
    protected _args: A<$Reference>\r
    method(): string { return this._method; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(method: $PropertyReference<TObject, any>, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (method === undefined) throw new Error("A MethodCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${method}(\${$args.stringJoin(",")})\`;\r
        super(ref, method);\r
        this._object = method.object();\r
        this._method = method.property();\r
        this._args = $args;\r
    }\r
}\r
\r
class $ArrayReference<TElement = any> extends $Reference<TElement[]> {\r
    constructor(array: $Reference, previous?: $Command) {\r
        super(array, previous);\r
    }\r
}\r
\r
class $IndexerReference<TArray extends $Reference = any, TElement = any> extends $Reference<TElement> {\r
    protected _array: TArray;\r
    protected _index: $Reference;\r
    array(): $Reference { return this._array; }\r
    index(): $Reference { return this._index; }\r
\r
    constructor(array: TArray, index: number | string | $Num | $Str) {\r
        var [$arrayIndex, $index] = $IndexerReference.createIndexExpression(array, index);\r
        super($arrayIndex);\r
        if (array === undefined || index == undefined)\r
            throw new Error("Index references must have an array and an index");\r
        this._array = array;\r
        this._index = $index;\r
\r
    }\r
\r
    private static createIndexExpression(array: $Reference, index: $Arg): [$Reference, $Reference] {\r
        if (typeof index === "number" && index < 0) index = $ref(\`\${array}.length + \${index}\`);\r
        else index = $arg(index);\r
        return [$ref(\`\${array}[\${index}]\`), index];\r
    }\r
}\r
\r
class $ArrayLiteralReference<TElement = any> extends $ArrayReference<TElement> {\r
    constructor(array: TElement[] | A<TElement>) {\r
        if (!array) throw new Error("Array literal undefined");\r
        super($ArrayLiteralReference.createArrayExpression(array));\r
    }\r
\r
    private static createArrayExpression(array: any[] | A<any>): $Reference {\r
        if (array instanceof A) array = array.a();\r
        if (array.length == 0) return $ref("[]");\r
        return $ref(\`[\${f(array).select(r => $arg(r)).stringJoin(",")}]\`);\r
    }\r
}\r
\r
class $StringLiteralReference extends $Reference<string> {\r
    _value: string;\r
    value(): string { return this._value; }\r
\r
    constructor(value: string | Str| $Reference, quoteType: \`"\` | \`'\` = \`"\`) {\r
        if (value === undefined) throw new Error("String literal unspecified");\r
        if (value instanceof $Reference) value = value.toString();\r
        if (value instanceof Str) value = value.s();\r
        super(\`\${quoteType}\${value}\${quoteType}\`);\r
        this._value = value;\r
    }\r
}\r
\r
class $Eval {\r
    private static _commands: CommandQueue | undefined;\r
    private static _mode: ExecutionMode = "Remote";\r
\r
    private static commands() { if (!this._commands) this._commands = new CommandQueue(); return this._commands; }\r
    private static mode(newMode?: ExecutionMode) { if (newMode !== undefined) this._mode = newMode; return this._mode; }\r
\r
    static debug: boolean = false;\r
\r
    static cmd(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        \r
        var cmd = $cmd.$compile();\r
        if (this.mode() === "Remote") {\r
            this.commands().enqueue(cmd, false);\r
        } else {\r
            if (this.commands().length() > 0)\r
                this.sync(onComplete, onError);\r
\r
            if (!onError) {\r
                $cmd.$execute();\r
                if (onComplete) onComplete(cmd, 0);\r
            } else {\r
                try {\r
                    $cmd.$execute();\r
                    if (onComplete) onComplete(cmd, 0);\r
                } catch (e) {\r
                    onError(cmd, 0, {\r
                        body: (e as any || "Command failed").toSring() as string,\r
                        headers: { "Error-Code": -1 }\r
                    });\r
                }\r
            }\r
        }\r
    }\r
\r
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.debug) {\r
            onComplete = (cmd, i) => { console.log(\`$eval.sync \${i} complete:\`, cmd); if (onComplete) onComplete(cmd, i); }\r
            onError = (cmd, i, e) => { console.log(\`$eval.sync \${i} FAILED:\`, cmd, e?.headers?.["Error-Code"], e?.body); if (onError) onError(cmd, i, e); }\r
        }\r
        this.commands().sync(onComplete, onError);\r
    }\r
\r
    static onCompleteDefault: OnCompleteHandler | undefined;\r
    static onErrorDefault: OnErrorHandler | undefined;\r
}\r
\r
function $ref<Type = any>(expression: $Any): $Reference<Type> {\r
    if (expression === null || expression === undefined) return expression as any;\r
    if (expression instanceof $Reference) return expression;\r
    if (expression === null || expression === undefined) return undefined as any;\r
    if (expression instanceof A) expression = expression.a();\r
    if (expression instanceof Array) return $arr(expression) as any;\r
    if (typeof expression === "function") return new $ClassReference(expression);\r
    return new $Reference<Type>(expression);\r
}\r
\r
function $eff(expression: $Any, name?: string): $Effect {\r
    if (expression === undefined) return undefined as any;\r
    if (expression instanceof $Effect) return expression;\r
    if (expression instanceof Str) return new $Effect(expression.s(), name);\r
    return new $Effect(\`\${expression}\`, name);\r
}\r
\r
// Like $ref but strings are treated as string literals\r
function $arg<Type = any>(arg: $Arg): $Reference<Type> {\r
    if (typeof arg === "string" || arg instanceof Str) return $str(arg) as any;\r
    return $ref(arg);\r
}\r
\r
function $str(...parts: $Any[]): $StringLiteralReference {\r
    if (parts === undefined) return undefined as any;\r
    var len = parts.length;\r
    if (len == 1) {\r
        var part = parts[0];\r
        if (typeof part === "string") return new $StringLiteralReference(part);\r
        if (part instanceof Str) return new $StringLiteralReference(part.s());\r
        if (part instanceof $StringLiteralReference) return part;\r
        return new $StringLiteralReference(\`\${part}\`);\r
    }\r
    var value = f(parts).select(s => s instanceof $StringLiteralReference ? s.value() : s).stringJoin(" ").s();\r
    return new $StringLiteralReference(value);\r
}\r
\r
function $arr<TElement = any>(array: $Arr<TElement>): $ArrayReference<TElement> {\r
    if (array === undefined) return undefined as any;\r
    if (array instanceof $Reference) return new $ArrayReference(array);\r
    if (array instanceof A) array = array.a();\r
    return new $ArrayLiteralReference(array);\r
}\r
\r
var $cmd = new $Command();\r
\r
function $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
    var cmd = $cmd;\r
    $cmd  = new $Command();\r
    $Eval.cmd(onComplete, onError);\r
}\r
\r
function $sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
    $Eval.sync(onComplete, onError);\r
}`}),e.jsx(f,{identifier:"paste-2",type:".txt",children:`type $Ref<T = any> = $Reference<T> | T\r
type $Arg<T = any> = $Reference<T> | T\r
type $Any = $Ref<any>\r
type $Str = $Ref<string> | Str\r
type $Num = $Ref<number>\r
type $Bool = $Ref<boolean>\r
type $Arr<T=any> = $Ref<T[]> | A<T>\r
type ExecutionMode = "Remote" | "Local"\r
\r
class $Command {\r
    private steps: A<$Effect> = f([]); \r
    lastStep() { return this.steps.last(); }\r
\r
    $next<T = any>(effect: $Effect<T>): $Reference<T> {\r
        this.steps.add(effect);\r
        return effect.variable();\r
    }\r
\r
    $compile() {\r
        return this.steps.stringJoin("\\n").s();\r
    }\r
\r
    $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        $eval(onComplete, onError);\r
    }\r
\r
    $execute<T = any>(global: boolean = false): T {\r
        var $$$referent: T = undefined as any;\r
        var step = $cmd.lastStep();\r
        if (step instanceof $VariableReference)\r
            $cmd.$next(step.$var("$$$referent"));\r
        \r
        var cmd = $cmd.$compile();\r
        if (global) {\r
            // Explicitly run eval in the global scope\r
            eval.call($.global || globalThis, cmd);\r
        } else {\r
            eval(cmd);\r
        }\r
        return $$$referent;\r
    }\r
\r
    toString(): string {\r
        return this.$compile();\r
    }\r
}\r
\r
class $Effect<T = any> {\r
    protected _expression: string;\r
    protected _variable: $VariableReference<T>;\r
\r
    expression(): string { return this._expression; }\r
    variable(): $VariableReference<T> { return this._variable; }\r
    \r
    constructor(expression: string, variable?: string) {\r
        var ref = !variable ? "$.global" : variable; \r
        this._variable = new $VariableReference<T>(ref);\r
        this._expression = expression;\r
    }\r
\r
\r
    $dispatch(): $Reference {\r
        $cmd.$next(this);\r
        return this._variable ? \r
            new $Reference(this._variable) : \r
            new $Reference("$.global");\r
    }\r
\r
    toString(): string {\r
        return this.expression();\r
    }\r
}\r
\r
class $Reference<T = any> extends $Effect {\r
    _address: string;\r
    _properties = dictionary<$PropertyReference>();\r
    address(): string { return this._address; }\r
    loc(): string { return this.address(); }\r
\r
    constructor(address?: $Any) {\r
        address = \`\${address}\`;\r
        super(\`\${address};\`)\r
        this._address = address;\r
    }\r
\r
    $dot<TSelection = any>(selector: string): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: (o: T) => TSelection): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: ((o: T) => TSelection) | string): $PropertyReference<this, TSelection> {\r
        var key = typeof selector === "function" ? selector.toString() : selector;\r
        var ref = this._properties[key];\r
        if (ref) return ref;\r
\r
        var path = typeof selector === "function" ?\r
            str(stringJoin(str(key).split(".").skip(1), ".").split(";").first()).replaceAll(" ", "").s() :\r
            selector;\r
\r
        ref = new $PropertyReference<this, TSelection>(this, path);\r
        this._properties[path] = ref;\r
        return ref;\r
    }\r
\r
    $get<TSelection = any>(selector: string, newValue?: TSelection): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: (o: T) => TSelection, newValue?: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: ((o: T) => TSelection) | string, newValue?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (newValue !== undefined) ref.$assign($arg(newValue));\r
        return ref;\r
    }\r
\r
    $set<TSelection = any>(selector: string, value: TSelection): $PropertyReference<this, TSelection>\r
    $set<TSelection = any>(selector: (o: T) => TSelection, value: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $set<TSelection = any>(selector: ((o: T) => TSelection) | string, value?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (value !== undefined) ref.$assign(value);\r
        return ref;\r
    }\r
\r
    $call<TResult = any>(selector: ((o: T) => TResult) | string, ...args: $Any[]): $MethodCallReference<this, TResult> {\r
        var propertyRef = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        return new $MethodCallReference<this, TResult>(propertyRef, args);\r
    }\r
\r
    $invoke<TResult = any>(...args: $Any[]): $FunctionCallReference<TResult> {\r
        return new $FunctionCallReference<TResult>(this, args);\r
    }\r
\r
    $of<TElement = any>(index: number | string | $Num | $Str): $IndexerReference<$Reference<T>, TElement> {\r
        return new $IndexerReference<this, TElement>(this, index);\r
    }\r
\r
    $cast<T>(): T {\r
        return this as any;\r
    }\r
\r
    $assign(value: $Arg): void {\r
        var effect = new $Assignment(this, value);\r
        effect.$dispatch();\r
    }\r
\r
    $var(name?: string): $VariableReference<T> {\r
        var effect = new $VariableAssignment(name || $Reference.nextVar(name), this);\r
        effect.$dispatch();\r
        return effect.variable();\r
    }\r
\r
    $equals(ref: $Reference): boolean {\r
        var thisObject = this.$resolve();\r
        var otherObj = ref.$resolve();\r
        return thisObject === otherObj;\r
    }\r
\r
    $func<TResult = any>(selector: (self: T, ...args: any[]) => TResult, ...args: $Arg[]): $Reference<TResult> {\r
        var ref = $ref(selector).$var("$$$func")\r
        args.unshift(this);\r
        return ref.$invoke(args);\r
    }\r
\r
    $resolve(global?: boolean): T {\r
        var _referent_: T = undefined as any;\r
        this.$var("$$$referent");\r
        $cmd.$execute(global);\r
        return _referent_;\r
    }\r
\r
    toString(): string {\r
        return this.address();\r
    }\r
\r
    private static variableCounter = 1;\r
    static nextVar(prefix?: string) {\r
        return \`$$\${prefix || "x"}\${this.variableCounter++}\`;\r
    }\r
}\r
\r
class $VariableReference<TVariable = any> extends $Reference<TVariable> {\r
    protected _name: string;\r
    name(): string { return this._name; }\r
\r
    constructor(name: string) {\r
        super(name);\r
        if (name === undefined || name.length === 0)\r
            throw new Error("A variable reference must have a name");\r
        this._name = name;\r
    }\r
}\r
\r
class $Assignment extends $Effect {\r
    constructor(ref: $Reference, value: $Arg) {\r
        if (ref === undefined || value === undefined)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`\${ref} = \${$arg(value)};\`;\r
        super(expression);\r
    }\r
}\r
\r
class $VariableAssignment<TVariable = any> extends $Effect {\r
    protected _name: string;\r
    protected _variable: $VariableReference<TVariable>;\r
    name(): string { return this._name; }\r
    variable(): $VariableReference<TVariable> { return this._variable;  }\r
\r
    constructor(name: string, ref: $Reference<TVariable>) {\r
        if (name === undefined || name.length === 0 || !ref)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`var \${name} = \${ref};\`;\r
        super(expression);\r
        this._name = name;\r
        this._variable = new $VariableReference<TVariable>(name);\r
    }\r
}\r
\r
class $ClassReference<Type extends Function = any> extends $Reference<Type> {\r
    protected _ctor: Type;\r
    ctor(): Type { return this._ctor; }\r
\r
    constructor(ctor: Type) {\r
        if (!ctor) throw new Error("No class specified")\r
        super(ctor.name)\r
        this._ctor = ctor;\r
    }\r
}\r
\r
class $PropertyReference<TObject extends $Reference<any> = any, TProperty = any> extends $Reference<TProperty> {\r
    protected _object: TObject;\r
    protected _property: string;\r
    property(): string { return this._property; }\r
    object(): TObject { return this._object; }\r
\r
    constructor(object: TObject, property: string) {\r
        if (property === undefined || property.length == 0 || object === undefined)\r
            throw new Error("The object and property both need to be defined in a property reference");\r
\r
        var expression = \`\${object.address()}.\${property}\`;\r
        super(expression);\r
        this._object = object;\r
        this._property = property;\r
    }\r
}\r
\r
class $FunctionCallReference<TResult = any> extends $Reference<TResult> {\r
    protected _func: $Reference;\r
    protected _args: A<$Reference>;\r
    func(): $Reference { return this._func; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(func: $Reference, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (func === undefined) throw new Error("A FunctionCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${func}(\${$args.stringJoin(",")})\`;\r
        super(ref);\r
        this._func = func;\r
        this._args = $args;\r
    }\r
}\r
\r
class $MethodCallReference<TObject extends $Reference = any, TResult = any> extends $Reference<TResult> {\r
    protected _object: TObject;\r
    protected _method: string;\r
    protected _args: A<$Reference>\r
    method(): string { return this._method; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(method: $PropertyReference<TObject, any>, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (method === undefined) throw new Error("A MethodCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${method}(\${$args.stringJoin(",")})\`;\r
        super(ref);\r
        this._object = method.object();\r
        this._method = method.property();\r
        this._args = $args;\r
    }\r
}\r
\r
class $ArrayReference<TElement = any> extends $Reference<TElement[]> {\r
    constructor(array: $Reference) {\r
        super(array);\r
    }\r
}\r
\r
class $IndexerReference<TArray extends $Reference = any, TElement = any> extends $Reference<TElement> {\r
    protected _array: TArray;\r
    protected _index: $Reference;\r
    array(): $Reference { return this._array; }\r
    index(): $Reference { return this._index; }\r
\r
    constructor(array: TArray, index: number | string | $Num | $Str) {\r
        var [$arrayIndex, $index] = $IndexerReference.createIndexExpression(array, index);\r
        super($arrayIndex);\r
        if (array === undefined || index == undefined)\r
            throw new Error("Index references must have an array and an index");\r
        this._array = array;\r
        this._index = $index;\r
\r
    }\r
\r
    private static createIndexExpression(array: $Reference, index: $Arg): [$Reference, $Reference] {\r
        if (typeof index === "number" && index < 0) index = $ref(\`\${array}.length + \${index}\`);\r
        else index = $arg(index);\r
        return [$ref(\`\${array}[\${index}]\`), index];\r
    }\r
}\r
\r
class $ArrayLiteralReference<TElement = any> extends $ArrayReference<TElement> {\r
    constructor(array: TElement[] | A<TElement>) {\r
        if (!array) throw new Error("Array literal undefined");\r
        super($ArrayLiteralReference.createArrayExpression(array));\r
    }\r
\r
    private static createArrayExpression(array: any[] | A<any>): $Reference {\r
        if (array instanceof A) array = array.a();\r
        if (array.length == 0) return $ref("[]");\r
        return $ref(\`[\${f(array).select(r => $arg(r)).stringJoin(",")}]\`);\r
    }\r
}\r
\r
class $StringLiteralReference extends $Reference<string> {\r
    _value: string;\r
    value(): string { return this._value; }\r
\r
    constructor(value: string | Str| $Reference, quoteType: \`"\` | \`'\` = \`"\`) {\r
        if (value === undefined) throw new Error("String literal unspecified");\r
        if (value instanceof $Reference) value = value.toString();\r
        if (value instanceof Str) value = value.s();\r
        super(\`\${quoteType}\${value}\${quoteType}\`);\r
        this._value = value;\r
    }\r
}\r
\r
class $Eval {\r
    private static _commands: CommandQueue | undefined;\r
    private static _mode: ExecutionMode = "Remote";\r
\r
    private static commands() { if (!this._commands) this._commands = new CommandQueue(); return this._commands; }\r
    private static mode(newMode?: ExecutionMode) { if (newMode !== undefined) this._mode = newMode; return this._mode; }\r
\r
    static debug: boolean = false;\r
\r
    static cmd(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        \r
        var cmd = $cmd.$compile();\r
        if (this.mode() === "Remote") {\r
            this.commands().enqueue(cmd, false);\r
        } else {\r
            if (this.commands().length() > 0)\r
                this.sync(onComplete, onError);\r
\r
            if (!onError) {\r
                $cmd.$execute();\r
                if (onComplete) onComplete(cmd, 0);\r
            } else {\r
                try {\r
                    $cmd.$execute();\r
                    if (onComplete) onComplete(cmd, 0);\r
                } catch (e) {\r
                    onError(cmd, 0, {\r
                        body: (e as any || "Command failed").toSring() as string,\r
                        headers: { "Error-Code": -1 }\r
                    });\r
                }\r
            }\r
        }\r
    }\r
\r
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.debug) {\r
            onComplete = (cmd, i) => { console.log(\`$eval.sync \${i} complete:\`, cmd); if (onComplete) onComplete(cmd, i); }\r
            onError = (cmd, i, e) => { console.log(\`$eval.sync \${i} FAILED:\`, cmd, e?.headers?.["Error-Code"], e?.body); if (onError) onError(cmd, i, e); }\r
        }\r
        this.commands().sync(onComplete, onError);\r
    }\r
\r
    static onCompleteDefault: OnCompleteHandler | undefined;\r
    static onErrorDefault: OnErrorHandler | undefined;\r
}\r
\r
function $ref<Type = any>(expression: $Any): $Reference<Type> {\r
    if (expression === null || expression === undefined) return expression as any;\r
    if (expression instanceof $Reference) return expression;\r
    if (expression === null || expression === undefined) return undefined as any;\r
    if (expression instanceof A) expression = expression.a();\r
    if (expression instanceof Array) return $arr(expression) as any;\r
    if (typeof expression === "function") return new $ClassReference(expression);\r
    return new $Reference<Type>(expression);\r
}\r
\r
function $effect(expression: $Any, name?: string): $Effect {\r
    if (expression === undefined) return undefined as any;\r
    if (expression instanceof $Effect) return expression;\r
    if (expression instanceof Str) return new $Effect(expression.s(), name);\r
    return new $Effect(\`\${expression}\`, name);\r
}\r
\r
// Like $ref but strings are treated as string literals\r
function $arg<Type = any>(arg: $Arg): $Reference<Type> {\r
    if (typeof arg === "string" || arg instanceof Str) return $str(arg) as any;\r
    return $ref(arg);\r
}\r
\r
function $str(...parts: $Any[]): $StringLiteralReference {\r
    if (parts === undefined) return undefined as any;\r
    var len = parts.length;\r
    if (len == 1) {\r
        var part = parts[0];\r
        if (typeof part === "string") return new $StringLiteralReference(part);\r
        if (part instanceof Str) return new $StringLiteralReference(part.s());\r
        if (part instanceof $StringLiteralReference) return part;\r
        return new $StringLiteralReference(\`\${part}\`);\r
    }\r
    var value = f(parts).select(s => s instanceof $StringLiteralReference ? s.value() : s).stringJoin(" ").s();\r
    return new $StringLiteralReference(value);\r
}\r
\r
function $arr<TElement = any>(array: $Arr<TElement>): $ArrayReference<TElement> {\r
    if (array === undefined) return undefined as any;\r
    if (array instanceof $Reference) return new $ArrayReference(array);\r
    if (array instanceof A) array = array.a();\r
    return new $ArrayLiteralReference(array);\r
}\r
\r
var $cmd = new $Command();\r
\r
function $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
    var cmd = $cmd;\r
    $cmd  = new $Command();\r
    $Eval.cmd(onComplete, onError);\r
}\r
\r
function $sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
    $Eval.sync(onComplete, onError);\r
}`}),e.jsx(f,{identifier:"paste-2",type:".txt",children:`type $Ref<T = any> = $Reference<T> | T\r
type $Arg<T = any> = $Reference<T> | T\r
type $Any = $Ref<any>\r
type $Str = $Ref<string> | Str\r
type $Num = $Ref<number>\r
type $Bool = $Ref<boolean>\r
type $Arr<T=any> = $Ref<T[]> | A<T>\r
type ExecutionMode = "Remote" | "Local"\r
\r
class $Command {\r
    private steps: A<$Effect> = f([]); \r
    lastStep() { return this.steps.last(); }\r
\r
    $next<T = any>(effect: $Effect<T>): $Reference<T> {\r
        this.steps.add(effect);\r
        return effect.variable();\r
    }\r
\r
    $compile() {\r
        return this.steps.stringJoin("\\n").s();\r
    }\r
\r
    $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        $eval(onComplete, onError);\r
    }\r
\r
    $execute<T = any>(global: boolean = false): T {\r
        var $$$referent: T = undefined as any;\r
        var step = $cmd.lastStep();\r
        if (step instanceof $VariableReference)\r
            $cmd.$next(step.$var("$$$referent"));\r
        \r
        var cmd = $cmd.$compile();\r
        if (global) {\r
            // Explicitly run eval in the global scope\r
            eval.call($.global || globalThis, cmd);\r
        } else {\r
            eval(cmd);\r
        }\r
        return $$$referent;\r
    }\r
\r
    toString(): string {\r
        return this.$compile();\r
    }\r
}\r
\r
class $Effect<T = any> {\r
    protected _expression: string;\r
    protected _variable: $VariableReference<T>;\r
\r
    expression(): string { return this._expression; }\r
    variable(): $VariableReference<T> { return this._variable; }\r
    \r
    constructor(expression: string, variable?: string) {\r
        var ref = !variable ? "$.global" : variable; \r
        this._variable = new $VariableReference<T>(ref);\r
        this._expression = expression;\r
    }\r
\r
\r
    $dispatch(): $Reference {\r
        $cmd.$next(this);\r
        return this._variable ? \r
            new $Reference(this._variable) : \r
            new $Reference("$.global");\r
    }\r
\r
    toString(): string {\r
        return this.expression();\r
    }\r
}\r
\r
class $Reference<T = any> extends $Effect {\r
    _address: string;\r
    _properties = dictionary<$PropertyReference>();\r
    address(): string { return this._address; }\r
    loc(): string { return this.address(); }\r
\r
    constructor(address?: $Any) {\r
        address = \`\${address}\`;\r
        super(\`\${address};\`)\r
        this._address = address;\r
    }\r
\r
    $dot<TSelection = any>(selector: string): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: (o: T) => TSelection): $PropertyReference<this, TSelection>\r
    $dot<TSelection = any>(selector: ((o: T) => TSelection) | string): $PropertyReference<this, TSelection> {\r
        var key = typeof selector === "function" ? selector.toString() : selector;\r
        var ref = this._properties[key];\r
        if (ref) return ref;\r
\r
        var path = typeof selector === "function" ?\r
            str(stringJoin(str(key).split(".").skip(1), ".").split(";").first()).replaceAll(" ", "").s() :\r
            selector;\r
\r
        ref = new $PropertyReference<this, TSelection>(this, path);\r
        this._properties[path] = ref;\r
        return ref;\r
    }\r
\r
    $get<TSelection = any>(selector: string, newValue?: TSelection): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: (o: T) => TSelection, newValue?: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $get<TSelection = any>(selector: ((o: T) => TSelection) | string, newValue?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (newValue !== undefined) ref.$assign($arg(newValue));\r
        return ref;\r
    }\r
\r
    $set<TSelection = any>(selector: string, value: TSelection): $PropertyReference<this, TSelection>\r
    $set<TSelection = any>(selector: (o: T) => TSelection, value: TSelection | $Any): $PropertyReference<this, TSelection>\r
    $set<TSelection = any>(selector: ((o: T) => TSelection) | string, value?: TSelection | $Any): $PropertyReference<this, TSelection> {\r
        var ref = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        if (value !== undefined) ref.$assign(value);\r
        return ref;\r
    }\r
\r
    $call<TResult = any>(selector: ((o: T) => TResult) | string, ...args: $Any[]): $MethodCallReference<this, TResult> {\r
        var propertyRef = typeof selector === "function" ?  this.$dot(selector) : this.$dot(selector);\r
        return new $MethodCallReference<this, TResult>(propertyRef, args);\r
    }\r
\r
    $invoke<TResult = any>(...args: $Any[]): $FunctionCallReference<TResult> {\r
        return new $FunctionCallReference<TResult>(this, args);\r
    }\r
\r
    $of<TElement = any>(index: number | string | $Num | $Str): $IndexerReference<$Reference<T>, TElement> {\r
        return new $IndexerReference<this, TElement>(this, index);\r
    }\r
\r
    $cast<T>(): T {\r
        return this as any;\r
    }\r
\r
    $assign(value: $Arg): void {\r
        var effect = new $Assignment(this, value);\r
        effect.$dispatch();\r
    }\r
\r
    $var(name?: string): $VariableReference<T> {\r
        var effect = new $VariableAssignment(name || $Reference.nextVar(name), this);\r
        effect.$dispatch();\r
        return effect.variable();\r
    }\r
\r
    $equals(ref: $Reference): boolean {\r
        var thisObject = this.$resolve();\r
        var otherObj = ref.$resolve();\r
        return thisObject === otherObj;\r
    }\r
\r
    $func<TResult = any>(selector: (self: T, ...args: any[]) => TResult, ...args: $Arg[]): $Reference<TResult> {\r
        var ref = $ref(selector).$var("$$$func")\r
        args.unshift(this);\r
        return ref.$invoke(args);\r
    }\r
\r
    $resolve(global?: boolean): T {\r
        var _referent_: T = undefined as any;\r
        this.$var("$$$referent");\r
        $cmd.$execute(global);\r
        return _referent_;\r
    }\r
\r
    toString(): string {\r
        return this.address();\r
    }\r
\r
    private static variableCounter = 1;\r
    static nextVar(prefix?: string) {\r
        return \`$$\${prefix || "x"}\${this.variableCounter++}\`;\r
    }\r
}\r
\r
class $VariableReference<TVariable = any> extends $Reference<TVariable> {\r
    protected _name: string;\r
    name(): string { return this._name; }\r
\r
    constructor(name: string) {\r
        super(name);\r
        if (name === undefined || name.length === 0)\r
            throw new Error("A variable reference must have a name");\r
        this._name = name;\r
    }\r
}\r
\r
class $Assignment extends $Effect {\r
    constructor(ref: $Reference, value: $Arg) {\r
        if (ref === undefined || value === undefined)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`\${ref} = \${$arg(value)};\`;\r
        super(expression);\r
    }\r
}\r
\r
class $VariableAssignment<TVariable = any> extends $Effect {\r
    protected _name: string;\r
    protected _variable: $VariableReference<TVariable>;\r
    name(): string { return this._name; }\r
    variable(): $VariableReference<TVariable> { return this._variable;  }\r
\r
    constructor(name: string, ref: $Reference<TVariable>) {\r
        if (name === undefined || name.length === 0 || !ref)\r
            throw new Error("A variable reference must have a name and a referenec to assign");\r
        var expression = \`var \${name} = \${ref};\`;\r
        super(expression);\r
        this._name = name;\r
        this._variable = new $VariableReference<TVariable>(name);\r
    }\r
}\r
\r
class $ClassReference<Type extends Function = any> extends $Reference<Type> {\r
    protected _ctor: Type;\r
    ctor(): Type { return this._ctor; }\r
\r
    constructor(ctor: Type) {\r
        if (!ctor) throw new Error("No class specified")\r
        super(ctor.name)\r
        this._ctor = ctor;\r
    }\r
}\r
\r
class $PropertyReference<TObject extends $Reference<any> = any, TProperty = any> extends $Reference<TProperty> {\r
    protected _object: TObject;\r
    protected _property: string;\r
    property(): string { return this._property; }\r
    object(): TObject { return this._object; }\r
\r
    constructor(object: TObject, property: string) {\r
        if (property === undefined || property.length == 0 || object === undefined)\r
            throw new Error("The object and property both need to be defined in a property reference");\r
\r
        var expression = \`\${object.address()}.\${property}\`;\r
        super(expression);\r
        this._object = object;\r
        this._property = property;\r
    }\r
}\r
\r
class $FunctionCallReference<TResult = any> extends $Reference<TResult> {\r
    protected _func: $Reference;\r
    protected _args: A<$Reference>;\r
    func(): $Reference { return this._func; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(func: $Reference, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (func === undefined) throw new Error("A FunctionCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${func}(\${$args.stringJoin(",")})\`;\r
        super(ref);\r
        this._func = func;\r
        this._args = $args;\r
    }\r
}\r
\r
class $MethodCallReference<TObject extends $Reference = any, TResult = any> extends $Reference<TResult> {\r
    protected _object: TObject;\r
    protected _method: string;\r
    protected _args: A<$Reference>\r
    method(): string { return this._method; }\r
    args(): A<$Reference> { return this._args; }\r
\r
    constructor(method: $PropertyReference<TObject, any>, args: $Any[]) {\r
        if (args === undefined) args = [];\r
        if (method === undefined) throw new Error("A MethodCallReference must have an function");\r
        var $args = f(args).select(a => $arg(a));\r
        var ref = \`\${method}(\${$args.stringJoin(",")})\`;\r
        super(ref);\r
        this._object = method.object();\r
        this._method = method.property();\r
        this._args = $args;\r
    }\r
}\r
\r
class $ArrayReference<TElement = any> extends $Reference<TElement[]> {\r
    constructor(array: $Reference) {\r
        super(array);\r
    }\r
}\r
\r
class $IndexerReference<TArray extends $Reference = any, TElement = any> extends $Reference<TElement> {\r
    protected _array: TArray;\r
    protected _index: $Reference;\r
    array(): $Reference { return this._array; }\r
    index(): $Reference { return this._index; }\r
\r
    constructor(array: TArray, index: number | string | $Num | $Str) {\r
        var [$arrayIndex, $index] = $IndexerReference.createIndexExpression(array, index);\r
        super($arrayIndex);\r
        if (array === undefined || index == undefined)\r
            throw new Error("Index references must have an array and an index");\r
        this._array = array;\r
        this._index = $index;\r
\r
    }\r
\r
    private static createIndexExpression(array: $Reference, index: $Arg): [$Reference, $Reference] {\r
        if (typeof index === "number" && index < 0) index = $ref(\`\${array}.length + \${index}\`);\r
        else index = $arg(index);\r
        return [$ref(\`\${array}[\${index}]\`), index];\r
    }\r
}\r
\r
class $ArrayLiteralReference<TElement = any> extends $ArrayReference<TElement> {\r
    constructor(array: TElement[] | A<TElement>) {\r
        if (!array) throw new Error("Array literal undefined");\r
        super($ArrayLiteralReference.createArrayExpression(array));\r
    }\r
\r
    private static createArrayExpression(array: any[] | A<any>): $Reference {\r
        if (array instanceof A) array = array.a();\r
        if (array.length == 0) return $ref("[]");\r
        return $ref(\`[\${f(array).select(r => $arg(r)).stringJoin(",")}]\`);\r
    }\r
}\r
\r
class $StringLiteralReference extends $Reference<string> {\r
    _value: string;\r
    value(): string { return this._value; }\r
\r
    constructor(value: string | Str| $Reference, quoteType: \`"\` | \`'\` = \`"\`) {\r
        if (value === undefined) throw new Error("String literal unspecified");\r
        if (value instanceof $Reference) value = value.toString();\r
        if (value instanceof Str) value = value.s();\r
        super(\`\${quoteType}\${value}\${quoteType}\`);\r
        this._value = value;\r
    }\r
}\r
\r
class $Eval {\r
    private static _commands: CommandQueue | undefined;\r
    private static _mode: ExecutionMode = "Remote";\r
\r
    private static commands() { if (!this._commands) this._commands = new CommandQueue(); return this._commands; }\r
    private static mode(newMode?: ExecutionMode) { if (newMode !== undefined) this._mode = newMode; return this._mode; }\r
\r
    static debug: boolean = false;\r
\r
    static cmd(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        \r
        var cmd = $cmd.$compile();\r
        if (this.mode() === "Remote") {\r
            this.commands().enqueue(cmd, false);\r
        } else {\r
            if (this.commands().length() > 0)\r
                this.sync(onComplete, onError);\r
\r
            if (!onError) {\r
                $cmd.$execute();\r
                if (onComplete) onComplete(cmd, 0);\r
            } else {\r
                try {\r
                    $cmd.$execute();\r
                    if (onComplete) onComplete(cmd, 0);\r
                } catch (e) {\r
                    onError(cmd, 0, {\r
                        body: (e as any || "Command failed").toSring() as string,\r
                        headers: { "Error-Code": -1 }\r
                    });\r
                }\r
            }\r
        }\r
    }\r
\r
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
        onComplete = onComplete || this.onCompleteDefault;\r
        onError = onError || this.onErrorDefault;\r
        if (this.debug) {\r
            onComplete = (cmd, i) => { console.log(\`$eval.sync \${i} complete:\`, cmd); if (onComplete) onComplete(cmd, i); }\r
            onError = (cmd, i, e) => { console.log(\`$eval.sync \${i} FAILED:\`, cmd, e?.headers?.["Error-Code"], e?.body); if (onError) onError(cmd, i, e); }\r
        }\r
        this.commands().sync(onComplete, onError);\r
    }\r
\r
    static onCompleteDefault: OnCompleteHandler | undefined;\r
    static onErrorDefault: OnErrorHandler | undefined;\r
}\r
\r
function $ref<Type = any>(expression: $Any): $Reference<Type> {\r
    if (expression === null || expression === undefined) return expression as any;\r
    if (expression instanceof $Reference) return expression;\r
    if (expression === null || expression === undefined) return undefined as any;\r
    if (expression instanceof A) expression = expression.a();\r
    if (expression instanceof Array) return $arr(expression) as any;\r
    if (typeof expression === "function") return new $ClassReference(expression);\r
    return new $Reference<Type>(expression);\r
}\r
\r
function $effect(expression: $Any, name?: string): $Effect {\r
    if (expression === undefined) return undefined as any;\r
    if (expression instanceof $Effect) return expression;\r
    if (expression instanceof Str) return new $Effect(expression.s(), name);\r
    return new $Effect(\`\${expression}\`, name);\r
}\r
\r
// Like $ref but strings are treated as string literals\r
function $arg<Type = any>(arg: $Arg): $Reference<Type> {\r
    if (typeof arg === "string" || arg instanceof Str) return $str(arg) as any;\r
    return $ref(arg);\r
}\r
\r
function $str(...parts: $Any[]): $StringLiteralReference {\r
    if (parts === undefined) return undefined as any;\r
    var len = parts.length;\r
    if (len == 1) {\r
        var part = parts[0];\r
        if (typeof part === "string") return new $StringLiteralReference(part);\r
        if (part instanceof Str) return new $StringLiteralReference(part.s());\r
        if (part instanceof $StringLiteralReference) return part;\r
        return new $StringLiteralReference(\`\${part}\`);\r
    }\r
    var value = f(parts).select(s => s instanceof $StringLiteralReference ? s.value() : s).stringJoin(" ").s();\r
    return new $StringLiteralReference(value);\r
}\r
\r
function $arr<TElement = any>(array: $Arr<TElement>): $ArrayReference<TElement> {\r
    if (array === undefined) return undefined as any;\r
    if (array instanceof $Reference) return new $ArrayReference(array);\r
    if (array instanceof A) array = array.a();\r
    return new $ArrayLiteralReference(array);\r
}\r
\r
var $cmd = new $Command();\r
\r
function $eval(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void {\r
    var cmd = $cmd;\r
    $cmd  = new $Command();\r
    $Eval.cmd(onComplete, onError);\r
}\r
\r
function $sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler) {\r
    $Eval.sync(onComplete, onError);\r
}`}),e.jsx(f,{identifier:"command-builder-architecture",type:".ts",children:`
// Singleton command builder that maintains the current command chain
class CommandBuilder {
    private static instance: CommandBuilder;
    private _steps: string[] = [];
    private _currentReference: string | null = null;

    private constructor() {}

    static get current(): CommandBuilder {
        if (!CommandBuilder.instance) {
            CommandBuilder.instance = new CommandBuilder();
        }
        return CommandBuilder.instance;
    }

    addStep(expression: string) {
        this._steps.push(expression);
        return this;
    }

    setCurrentReference(ref: string) {
        this._currentReference = ref;
        return this;
    }

    reset() {
        CommandBuilder.instance = new CommandBuilder();
    }

    compile(): string {
        return this._steps.join('\\n');
    }
}

// Simplified Reference class that works with the command builder
class Reference<T = any> {
    constructor(private address: string) {
        CommandBuilder.current.setCurrentReference(address);
    }

    dot<K extends keyof T>(property: K): Reference<T[K]> {
        const newAddress = \`\${this.address}.\${String(property)}\`;
        CommandBuilder.current.setCurrentReference(newAddress);
        return new Reference<T[K]>(newAddress);
    }

    call(...args: any[]): Reference {
        const callExpr = \`\${this.address}(\${args.map(arg => JSON.stringify(arg)).join(',')})\`;
        CommandBuilder.current.addStep(callExpr);
        return new Reference(callExpr);
    }

    assign(value: any): void {
        const assignExpr = \`\${this.address} = \${JSON.stringify(value)};\`;
        CommandBuilder.current.addStep(assignExpr);
    }

    execute(): void {
        const script = CommandBuilder.current.compile();
        // Execute the script (implementation depending on context)
        CommandBuilder.current.reset();
    }
}

// Type-safe entry points for the API
interface IllustratorApp {
    documents: () => Reference<DocumentList>;
    activeDocument: Reference<Document>;
    // ... other app properties
}

interface DocumentList {
    add: (name: string) => Reference<Document>;
    // ... other document list methods
}

// Usage example:
const app = new Reference<IllustratorApp>('app');
const newDoc = app.dot('documents').call().dot('add').call('NewDocument');
newDoc.execute();
`}),e.jsx(f,{identifier:"effect-and-command-architecture",type:".ts",children:`
class $Effect {
    constructor(protected readonly expression: string) {}
    
    toString(): string {
        return this.expression;
    }
}

class $Command {
    private static instance: $Command;
    private effects: $Effect[] = [];
    private varCounter = 0;

    private constructor() {}

    static get current(): $Command {
        if (!this.instance) {
            this.instance = new $Command();
        }
        return this.instance;
    }

    addEffect(effect: $Effect): this {
        this.effects.push(effect);
        return this;
    }

    generateVar(prefix: string = 'var'): string {
        return \`$\${prefix}_\${Date.now()}_\${this.varCounter++}\`;
    }

    assignToVar(expression: string, varName?: string): $Reference {
        varName = varName || this.generateVar();
        const effect = new $Effect(\`var \${varName} = \${expression};\`);
        this.addEffect(effect);
        return new $Reference(varName);
    }

    compile(): string {
        return this.effects.map(e => e.toString()).join('\\n');
    }

    execute(): void {
        const script = this.compile();
        // Execute the script (implementation depending on context)
        $Command.reset();
    }

    static reset(): void {
        this.instance = new $Command();
    }
}

class $Reference<T = any> {
    constructor(private readonly address: string) {}

    $dot<K extends keyof T>(property: K): $Reference<T[K]> {
        const newExpr = \`\${this.address}.\${String(property)}\`;
        return $Command.current.assignToVar(newExpr);
    }

    $call(...args: any[]): $Reference {
        const argsStr = args.map(arg => 
            arg instanceof $Reference ? arg.toString() : JSON.stringify(arg)
        ).join(',');
        const callExpr = \`\${this.address}(\${argsStr})\`;
        return $Command.current.assignToVar(callExpr);
    }

    $assign(value: any): void {
        const valueStr = value instanceof $Reference ? value.toString() : JSON.stringify(value);
        const effect = new $Effect(\`\${this.address} = \${valueStr};\`);
        $Command.current.addEffect(effect);
    }

    toString(): string {
        return this.address;
    }
}

// Helper functions
function $ref<T>(address: string): $Reference<T> {
    return new $Reference<T>(address);
}

// Usage example:
const doc = $ref<IllustratorApp>('app')
    .$dot('documents')
    .$call()
    .$dot('add')
    .$call('NewDocument');

doc.$dot('pathItems').$call();
$Command.current.execute();
`}),e.jsx(f,{identifier:"func-implementation",type:".ts",children:`
class $Reference<Type = any> {
    // ... existing code ...

    $func<T = any>(selector: (o: Type) => T): $VariableReference<T> {
        // Parse the function like in $dot to get the operation
        const key = selector.toString();
        const ref = this._properties[key];
        if (ref) return ref as $VariableReference<T>;

        // Extract the operation from the function body
        const path = str(stringJoin(str(key).split(".").skip(1), ".")
            .split(";")
            .first())
            .replaceAll(" ", "")
            .s();

        // Create a new variable to hold the result
        const varName = $Reference.generateUniqueVariableName();
        
        // Create the effect that will execute the function
        const effect = new $Command(\`\${varName} = \${this.address()}.\${path};\`, this);
        
        // Create and return the variable reference for chaining
        return new $VariableReference<T>(varName, effect);
    }
}
`}),e.jsx(f,{identifier:"effect-reference-implementation",type:".ts",children:`
class $Effect {
    protected _expression: string;
    protected _variable?: string;
    
    constructor(expression: string, variable?: string) {
        this._expression = expression;
        this._variable = variable;
    }

    expression(): string { 
        return this._expression; 
    }

    $var(name: string): $Effect {
        this._variable = name;
        this._expression = \`var \${name} = \${this._expression};\`;
        return this;
    }

    $dispatch(): $Reference {
        $Command.current.addStep(this);
        return this._variable ? 
            new $Reference(this._variable) : 
            new $Reference("$.global");
    }

    toString(): string {
        return this.expression();
    }
}

class $Command {
    private static _instance: $Command;
    private _steps: $Effect[] = [];

    static get current(): $Command {
        if (!this._instance) {
            this._instance = new $Command();
        }
        return this._instance;
    }

    addStep(effect: $Effect): void {
        this._steps.push(effect);
    }

    $compile(): string {
        return this._steps.map(e => e.expression()).join('\\n');
    }

    $execute<T = any>(global: boolean = false): T {
        const script = this.$compile();
        if (global) {
            return eval.call($.global || globalThis, script);
        }
        return eval(script);
    }

    static reset(): void {
        this._instance = new $Command();
    }
}

class $Reference<Type = any> extends $Effect {
    constructor(address: string) {
        super(address);
    }

    $func<T = any>(selector: (o: Type) => T): $Reference<T> {
        return new $Reference<T>(\`\${this.expression()}.\${selector.toString()}\`);
    }

    $resolve(): Type {
        const effect = new $Effect(this.expression());
        const ref = effect.$var("__temp__").$dispatch();
        return $Command.current.$execute();
    }

    $assign(value: $Arg): $Reference<Type> {
        const effect = new $Effect(\`\${this.expression()} = \${$arg(value)}\`);
        return effect.$dispatch();
    }

    $var(name: string): $Reference<Type> {
        return super.$var(name).$dispatch() as $Reference<Type>;
    }
}

// Helper functions remain largely the same
function $ref<Type = any>(expression: string): $Reference<Type> {
    return new $Reference<Type>(expression);
}
`})]}),"February1120253"),B=p(()=>e.jsxs(m,{children:[e.jsx(x,{}),e.jsx($,{children:"[Command Builder Architecture v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#command-builder-architecture-v1)"}),e.jsx(l,{language:"typescript",children:`
// Singleton command builder that maintains the current command chain
class CommandBuilder {
    private static instance: CommandBuilder;
    private _steps: string[] = [];
    private _currentReference: string | null = null;

    private constructor() {}

    static get current(): CommandBuilder {
        if (!CommandBuilder.instance) {
            CommandBuilder.instance = new CommandBuilder();
        }
        return CommandBuilder.instance;
    }

    addStep(expression: string) {
        this._steps.push(expression);
        return this;
    }

    setCurrentReference(ref: string) {
        this._currentReference = ref;
        return this;
    }

    reset() {
        CommandBuilder.instance = new CommandBuilder();
    }

    compile(): string {
        return this._steps.join('\\n');
    }
}

// Simplified Reference class that works with the command builder
class Reference<T = any> {
    constructor(private address: string) {
        CommandBuilder.current.setCurrentReference(address);
    }

    dot<K extends keyof T>(property: K): Reference<T[K]> {
        const newAddress = \`\${this.address}.\${String(property)}\`;
        CommandBuilder.current.setCurrentReference(newAddress);
        return new Reference<T[K]>(newAddress);
    }

    call(...args: any[]): Reference {
        const callExpr = \`\${this.address}(\${args.map(arg => JSON.stringify(arg)).join(',')})\`;
        CommandBuilder.current.addStep(callExpr);
        return new Reference(callExpr);
    }

    assign(value: any): void {
        const assignExpr = \`\${this.address} = \${JSON.stringify(value)};\`;
        CommandBuilder.current.addStep(assignExpr);
    }

    execute(): void {
        const script = CommandBuilder.current.compile();
        // Execute the script (implementation depending on context)
        CommandBuilder.current.reset();
    }
}

// Type-safe entry points for the API
interface IllustratorApp {
    documents: () => Reference<DocumentList>;
    activeDocument: Reference<Document>;
    // ... other app properties
}

interface DocumentList {
    add: (name: string) => Reference<Document>;
    // ... other document list methods
}

// Usage example:
const app = new Reference<IllustratorApp>('app');
const newDoc = app.dot('documents').call().dot('add').call('NewDocument');
newDoc.execute();
`})]}),"CommandBuilderArchitectureV1o1"),M=p(()=>e.jsxs(m,{children:[e.jsx(x,{}),e.jsx($,{children:"[Effect and Command Architecture v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#effect-and-command-architecture-v1)"}),e.jsx(l,{language:"typescript",children:`
class $Effect {
    constructor(protected readonly expression: string) {}
    
    toString(): string {
        return this.expression;
    }
}

class $Command {
    private static instance: $Command;
    private effects: $Effect[] = [];
    private varCounter = 0;

    private constructor() {}

    static get current(): $Command {
        if (!this.instance) {
            this.instance = new $Command();
        }
        return this.instance;
    }

    addEffect(effect: $Effect): this {
        this.effects.push(effect);
        return this;
    }

    generateVar(prefix: string = 'var'): string {
        return \`$\${prefix}_\${Date.now()}_\${this.varCounter++}\`;
    }

    assignToVar(expression: string, varName?: string): $Reference {
        varName = varName || this.generateVar();
        const effect = new $Effect(\`var \${varName} = \${expression};\`);
        this.addEffect(effect);
        return new $Reference(varName);
    }

    compile(): string {
        return this.effects.map(e => e.toString()).join('\\n');
    }

    execute(): void {
        const script = this.compile();
        // Execute the script (implementation depending on context)
        $Command.reset();
    }

    static reset(): void {
        this.instance = new $Command();
    }
}

class $Reference<T = any> {
    constructor(private readonly address: string) {}

    $dot<K extends keyof T>(property: K): $Reference<T[K]> {
        const newExpr = \`\${this.address}.\${String(property)}\`;
        return $Command.current.assignToVar(newExpr);
    }

    $call(...args: any[]): $Reference {
        const argsStr = args.map(arg => 
            arg instanceof $Reference ? arg.toString() : JSON.stringify(arg)
        ).join(',');
        const callExpr = \`\${this.address}(\${argsStr})\`;
        return $Command.current.assignToVar(callExpr);
    }

    $assign(value: any): void {
        const valueStr = value instanceof $Reference ? value.toString() : JSON.stringify(value);
        const effect = new $Effect(\`\${this.address} = \${valueStr};\`);
        $Command.current.addEffect(effect);
    }

    toString(): string {
        return this.address;
    }
}

// Helper functions
function $ref<T>(address: string): $Reference<T> {
    return new $Reference<T>(address);
}

// Usage example:
const doc = $ref<IllustratorApp>('app')
    .$dot('documents')
    .$call()
    .$dot('add')
    .$call('NewDocument');

doc.$dot('pathItems').$call();
$Command.current.execute();
`})]}),"EffectAndCommandArchitectureV1o2"),F=p(()=>e.jsxs(m,{children:[e.jsx(x,{}),e.jsx($,{children:"[func-implementation v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#func-implementation-v1)"}),e.jsx(l,{language:"typescript",children:`
class $Reference<Type = any> {
    // ... existing code ...

    $func<T = any>(selector: (o: Type) => T): $VariableReference<T> {
        // Parse the function like in $dot to get the operation
        const key = selector.toString();
        const ref = this._properties[key];
        if (ref) return ref as $VariableReference<T>;

        // Extract the operation from the function body
        const path = str(stringJoin(str(key).split(".").skip(1), ".")
            .split(";")
            .first())
            .replaceAll(" ", "")
            .s();

        // Create a new variable to hold the result
        const varName = $Reference.generateUniqueVariableName();
        
        // Create the effect that will execute the function
        const effect = new $Command(\`\${varName} = \${this.address()}.\${path};\`, this);
        
        // Create and return the variable reference for chaining
        return new $VariableReference<T>(varName, effect);
    }
}
`})]}),"FuncImplementationV1o3"),q=p(()=>e.jsxs(m,{children:[e.jsx(x,{}),e.jsx($,{children:"[effect-reference-implementation v1](/claude-optimizing-extendscript-abstractions-for-illustrator-e5eb0991/#effect-reference-implementation-v1)"}),e.jsx(l,{language:"typescript",children:`
class $Effect {
    protected _expression: string;
    protected _variable?: string;
    
    constructor(expression: string, variable?: string) {
        this._expression = expression;
        this._variable = variable;
    }

    expression(): string { 
        return this._expression; 
    }

    $var(name: string): $Effect {
        this._variable = name;
        this._expression = \`var \${name} = \${this._expression};\`;
        return this;
    }

    $dispatch(): $Reference {
        $Command.current.addStep(this);
        return this._variable ? 
            new $Reference(this._variable) : 
            new $Reference("$.global");
    }

    toString(): string {
        return this.expression();
    }
}

class $Command {
    private static _instance: $Command;
    private _steps: $Effect[] = [];

    static get current(): $Command {
        if (!this._instance) {
            this._instance = new $Command();
        }
        return this._instance;
    }

    addStep(effect: $Effect): void {
        this._steps.push(effect);
    }

    $compile(): string {
        return this._steps.map(e => e.expression()).join('\\n');
    }

    $execute<T = any>(global: boolean = false): T {
        const script = this.$compile();
        if (global) {
            return eval.call($.global || globalThis, script);
        }
        return eval(script);
    }

    static reset(): void {
        this._instance = new $Command();
    }
}

class $Reference<Type = any> extends $Effect {
    constructor(address: string) {
        super(address);
    }

    $func<T = any>(selector: (o: Type) => T): $Reference<T> {
        return new $Reference<T>(\`\${this.expression()}.\${selector.toString()}\`);
    }

    $resolve(): Type {
        const effect = new $Effect(this.expression());
        const ref = effect.$var("__temp__").$dispatch();
        return $Command.current.$execute();
    }

    $assign(value: $Arg): $Reference<Type> {
        const effect = new $Effect(\`\${this.expression()} = \${$arg(value)}\`);
        return effect.$dispatch();
    }

    $var(name: string): $Reference<Type> {
        return super.$var(name).$dispatch() as $Reference<Type>;
    }
}

// Helper functions remain largely the same
function $ref<Type = any>(expression: string): $Reference<Type> {
    return new $Reference<Type>(expression);
}
`})]}),"EffectReferenceImplementationV1o4"),J=A(v),Y=p(()=>e.jsxs(J,{children:[P(),D(),O(),L(),N(),H(),B(),M(),F(),q()]}),"book");export{Y as book};
