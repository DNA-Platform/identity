import { Append, Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 January 2025](2025-01-12)</Date>
        </Dated>
        <Title>[[ 12 January 2025 ]]</Title>
        <Message
            at="2025-01-12T23:07:47.108244Z"
        >
            <Origin>cea593cf-7086-4b79-a9c6-d3e95d7c858c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am coding with ExtendScript. This is a TypeScript wrapper around the object model. It is broken I am
                getting this crazy PARM error when accessing the parent functon in the code below. But the execution
                platform doesn't enter the function. Could it be a problem that I am storing references on an item that
                might be deleted? Could it be something like that?
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-01-12T23:08:03.553592Z"
        >
            <Origin>d98e80fa-475a-4830-99fb-016d21f13a03</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Based on the code shown, particularly in the QueryItem class, I see a potential issue that could cause
                reference/parent-related errors. Let me analyze the problematic areas:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The main concern is indeed about storing references on items that might be deleted. In the QueryItem
                    class, there's this pattern:
                </Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`constructor(item: any = EmptyItem.empty()) {
    this._item = item;
    this._item.q = this;  // Storing reference on the item itself
    // ...
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>The parent() function in QueryItem that's causing issues:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}parent(): QueryItem { 
    if (!this._item.parent) QueryItem.empty() as any; 
    var parent = q(this._item.parent) as any;
    var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
    if (parent[collection])
        parent = parent[collection]();
    return parent;
}`}
            </CodeBox>
            <Paragraph>The likely problems are:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Circular References
                    </Word>: You're storing the query object (<Word>
                        <Verbatim />
                        q
                    </Word>) on the item itself while the query object holds a reference to the item. This can create
                    circular references.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Deleted Object References
                    </Word>: When an item is deleted, its parent reference might become invalid but you're still storing the
                    query object on it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Missing Return Statement
                    </Word>: In the parent() function, there's a conditional that creates an empty query item but doesn't
                    return it: <Word>
                        <Verbatim />
                        if (!this._item.parent) QueryItem.empty() as any;
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Here's how I would fix this:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class QueryItem {
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
}`}
            </CodeBox>
            <Paragraph>Key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Added proper return for the empty parent case</Line>
                <Line>Added try/catch to handle potential invalid references</Line>
                <Line>Added reference cleanup in remove()</Line>
                <Line>Added null checking with optional chaining</Line>
                <Line>Properly returning empty query item instead of just creating one</Line>
            </Paragraph>
            <Paragraph>Additionally, you might want to consider:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Using WeakMap instead of storing references directly on items:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private static itemToQuery = new WeakMap<Item, QueryItem>();

constructor(item: any = EmptyItem.empty()) {
    this._item = item;
    QueryItem.itemToQuery.set(item, this);
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Adding a cleanup method to handle reference management:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`cleanup() {
    if (this._item) {
        QueryItem.itemToQuery.delete(this._item);
        this._item = null;
    }
}`}
            </CodeBox>
            <Paragraph>
                The PARM error you're seeing is likely because you're trying to access properties on an invalid or deleted
                object reference. The above changes should help prevent this by properly handling cleanup and invalid
                references.
            </Paragraph>
            <Paragraph>
                Let me know if you need any clarification or would like to explore other potential solutions!
            </Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:09:52.515517Z"
        >
            <Origin>7124244e-96d8-4e31-bd8a-83e85d63687f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The error looks like this in vscode on the compiled jsx, but seriously, it is something deep because I can't
                put console logs before that statement. Something deep is going wrong
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-01-12T23:10:12.258239Z"
        >
            <Origin>b6970dc8-197e-435d-bdee-2443ca110208</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, this is a deeper problem - the fact that you can't even hit console.log statements before that line
                indicates it's an initialization/early execution issue. Looking at the code more carefully now:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The key issue might be that the error is happening during prototype initialization itself, before any
                    function execution. This would explain why you can't hit console.logs.
                </Line>
                <Line>
                    The parent prototype function is being defined and the error occurs on first property access, suggesting
                    a problem with the class initialization chain.
                </Line>
            </Paragraph>
            <Paragraph>Here's what I suspect is happening:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>QueryItem is trying to access properties during class initialization</Line>
                <Line>The prototype chain isn't fully set up yet</Line>
                <Line>The ExtendScript engine is choking on accessing properties that don't exist yet</Line>
            </Paragraph>
            <Paragraph>Try restructuring the parent function like this:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}QueryItem.prototype.parent = function () {
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
};`}
            </CodeBox>
            <Paragraph>Also check these potential issues:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Ensure QueryItem.empty() is defined before any prototype methods:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class QueryItem {
    private static _empty: QueryItem;
    
    static empty(): QueryItem {
        if (!QueryItem._empty) {
            QueryItem._empty = new QueryItem(EmptyItem.empty());
            QueryItem._empty._item.q = QueryItem._empty;
        }
        return QueryItem._empty;
    }
    
    // ... rest of class
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Make sure the initialization order is correct:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Order matters!
1. EmptyItem class definition
2. QueryItem class definition
3. QueryItem.empty static method
4. QueryItem prototype methods
5. Instance creation`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Consider lazy initialization of properties:</Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`QueryItem.prototype.parent = function () {
    if (!this._parentGetter) {
        this._parentGetter = function() {
            // ... parent logic ...
        };
    }
    return this._parentGetter();
};`}
            </CodeBox>
            <Paragraph>
                The PARM error in ExtendScript often indicates a parameter or property access issue, but in this case, it
                seems to be happening during initialization which suggests a deeper structural problem with how the objects
                and prototypes are being set up. Let me know if you'd like me to dig deeper into any of these potential
                solutions!
            </Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:13:26.177938Z"
        >
            <Origin>7f07d761-2523-4b54-9436-f816d4b92f18</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here's the TypeScript. Find it please</Paragraph>
            <Attachment
                identifier="paste-2"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-01-12T23:13:35.783042Z"
        >
            <Origin>3e38e00f-198d-4aac-ad1c-827ae43aea8a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looking at the code more carefully, I found the issue in the <Word>
                    <Verbatim />
                    parent()
                </Word> method of <Word>
                    <Verbatim />
                    QueryItem
                </Word>. There's a critical bug in this implementation:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}parent(): QueryItem { 
    // BUG: This line creates but doesn't return the empty item
    if (!this._item.parent) QueryItem.empty() as any; 
    var parent = q(this._item.parent) as any;
    var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
    if (parent[collection])
        parent = parent[collection]();
    return parent;
}`}
            </CodeBox>
            <Paragraph>
                The bug is in the first line: <Word>
                    <Verbatim />
                    if (!this._item.parent) QueryItem.empty() as any;
                </Word>
            </Paragraph>
            <Paragraph>
                This line creates an empty item but doesn't return it! It just falls through to the next line which then
                tries to access <Word>
                    <Verbatim />
                    .parent
                </Word> on a null reference. This would explain why you can't even hit console logs - the code is failing on
                the very next line after the if statement.
            </Paragraph>
            <Paragraph>Here's the fixed version:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}parent(): QueryItem { 
    // Fixed: Now properly returns the empty item
    if (!this._item.parent) return QueryItem.empty() as any; 
    var parent = q(this._item.parent) as any;
    var collection = this.itemType.charAt(0).toLowerCase() + this.itemType.slice(1) + "s";
    if (parent[collection])
        parent = parent[collection]();
    return parent;
}`}
            </CodeBox>
            <Paragraph>This was causing the PARM error because:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    When <Word>
                        <Verbatim />
                        this._item.parent
                    </Word> is null/undefined
                </Line>
                <Line>The code wouldn't return but continue to the next line</Line>
                <Line>
                    It would then try to access properties on <Word>
                        <Verbatim />
                        this._item.parent
                    </Word> which is undefined
                </Line>
                <Line>This would cause the ExtendScript engine to throw the PARM error</Line>
            </Paragraph>
            <Paragraph>
                The fix is simple - just add the <Word>
                    <Verbatim />
                    return
                </Word> statement. This ensures that when there's no parent, we properly return an empty QueryItem instead
                of trying to access properties on undefined.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:14:32.344787Z"
        >
            <Origin>af3a3115-33e9-4122-ba79-ee63dfa42e4b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That is critical but foillow your heart about prototype initialization. Fixing that does nothing. It's not
                IN the method
            </Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:14:45.271717Z"
        >
            <Origin>70159202-b694-43fb-80d7-d6873e704950</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, you're right - if we can't even hit the code inside the method, then the issue must be with the
                prototype initialization itself. Looking at the parent property definition in the compiled code:
            </Paragraph>
            <Paragraph>
                The error is occurring during the initial property setup on the prototype, before any method execution.
                Here's how I'd restructure the prototype initialization:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// First, define base QueryItem without prototype methods
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

// And so on for other prototype methods`}
            </CodeBox>
            <Paragraph>The key points:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Separate the class definition from its prototype method definitions</Line>
                <Line>Ensure static methods (especially empty()) are defined before any prototype methods</Line>
                <Line>
                    Add proper typing to the prototype methods with <Word>
                        <Verbatim />
                        this: QueryItem
                    </Word>
                </Line>
                <Line>Make all property accesses defensive</Line>
            </Paragraph>
            <Paragraph>Or alternatively, create a safe initialization pattern:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`const initializeQueryItemPrototype = () => {
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
initializeQueryItemPrototype();`}
            </CodeBox>
            <Paragraph>This way, we ensure:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The empty() method exists before any prototype methods try to use it</Line>
                <Line>The prototype chain is properly established</Line>
                <Line>Methods have proper this binding</Line>
                <Line>Property access is safe</Line>
            </Paragraph>
            <Paragraph>
                This should prevent the initialization-time PARM error since we're controlling the order of definition and
                ensuring all dependencies exist before they're used.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:15:20.065958Z"
        >
            <Origin>19ebc712-3d04-440d-a7bd-d1f68ef26866</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I'm wiritng TypeScript. it's the one doing that</Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:15:29.591457Z"
        >
            <Origin>65867c28-317c-49a7-a7fd-39c4b4830b43</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, I understand better now - the issue is with how TypeScript is compiling the class methods to prototype
                assignments. Let's look at the class definition itself:
            </Paragraph>
            <Paragraph>Instead of:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class QueryItem {
    parent(): QueryItem { 
        if (!this._item.parent) QueryItem.empty() as any; 
        // ...
    }
}`}
            </CodeBox>
            <Paragraph>Try structuring it as:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class QueryItem {
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
}`}
            </CodeBox>
            <Paragraph>The key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Cache the parent result to avoid repeated access issues</Line>
                <Line>Use optional chaining for safer property access</Line>
                <Line>Ensure all property access happens after null checks</Line>
            </Paragraph>
            <Paragraph>
                This should help TypeScript generate better prototype assignments. The issue isn't with the runtime code but
                with how TypeScript is generating the JavaScript prototype assignments during compilation.
            </Paragraph>
            <Paragraph>
                Also consider marking some of these methods with TypeScript decorators to control how they're compiled:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class QueryItem {
    @enumerable(false)  // Prevents enumeration during prototype setup
    parent(): QueryItem {
        // ...
    }
}`}
            </CodeBox>
            <Paragraph>This might help avoid some of the initialization issues you're seeing.</Paragraph>
        </Message>
        <Message
            at="2025-01-12T23:19:35.963647Z"
        >
            <Origin>36d9c3a2-3db3-4a30-8d2d-3b20b116da7f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is what TypeScript redners. Do yo usee the issue that we can translate to TyepScript?
            </Paragraph>
            <Attachment
                identifier="paste-3"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-01-12T23:19:46.044856Z"
        >
            <Origin>50ceab61-2835-4ce4-b699-d6d6f485677a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes! Looking at the compiled output, I can see the critical issue. The problem lies in the initialization
                order. Looking at the QueryItem class definition, the crucial part is:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class QueryItem {
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
}`}
            </CodeBox>
            <Paragraph>
                The issue is that <Word>
                    <Verbatim />
                    QueryItem.empty()
                </Word> is trying to create a new <Word>
                    <Verbatim />
                    Queryable
                </Word> instance before the <Word>
                    <Verbatim />
                    Queryable
                </Word> class is actually defined! In the compiled output, this creates a reference before initialization
                error.
            </Paragraph>
            <Paragraph>Here's how to fix it in TypeScript:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// 1. First, define a base empty item type
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
}`}
            </CodeBox>
            <Paragraph>Or alternatively:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class QueryItem {
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
}`}
            </CodeBox>
            <Paragraph>
                This way we avoid the circular dependency/initialization order problem that's causing the PARM error. The
                key is to not reference <Word>
                    <Verbatim />
                    Queryable
                </Word> in <Word>
                    <Verbatim />
                    QueryItem
                </Word> until after both classes are fully defined.
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
        <Append
            identifier="paste-2"
            type=".txt"
        >
            ![[ paste-2.txt ]]
        </Append>
        <Append
            identifier="paste-3"
            type=".txt"
        >
            ![[ paste-3.txt ]]
        </Append>
    </Chapter>
);
