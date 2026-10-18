import { Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 January 2025](2025-01-24)</Date>
        </Dated>
        <Title>[[ 24 January 2025 ]]</Title>
        <Message
            at="2025-01-24T00:00:34.318894Z"
        >
            <Origin>93b5f1bf-ab65-4100-a652-81e72dc540cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Didn't change anything. I don't get it. Are we missing something super obvious?</Paragraph>
            <Paragraph>
                What is this? function isBaseObjectMethod(methodName: string): boolean &#123; return
                Object.prototype.hasOwnProperty.call(Object.prototype, methodName); &#125;
            </Paragraph>
            <Paragraph>Why is that necessary?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:00:41.182608Z"
        >
            <Origin>8c553c0e-327e-4c1d-ab81-00382bc5485b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That function <Word>
                    <Verbatim />
                    isBaseObjectMethod
                </Word> checks if a method is one of JavaScript's built-in Object prototype methods like <Word>
                    <Verbatim />
                    toString
                </Word>, <Word>
                    <Verbatim />
                    valueOf
                </Word>, <Word>
                    <Verbatim />
                    hasOwnProperty
                </Word>, etc.
            </Paragraph>
            <Paragraph>
                Upon reflection, this check isn't actually necessary for our purpose. We're already checking that methods
                don't start with "_" to filter out private methods. The base Object methods aren't interfering with our
                inheritance issue since they're on Object.prototype, which we're explicitly stopping at.
            </Paragraph>
            <Paragraph>
                This suggests our inheritance problem lies elsewhere. Let me review the core issue again: We're trying to
                collect methods through the prototype chain to properly decorate them while preserving inheritance, but
                something is preventing the derived class methods from being called. The fact that the base methods are
                being found but not properly overridden suggests we should examine how the decoration process itself handles
                method replacement, rather than focusing on the method collection.
            </Paragraph>
            <Paragraph>Would you like to explore how the decorator is applying the collected methods?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:01:04.926873Z"
        >
            <Origin>005e34c4-3353-43e0-8cad-ec9cd9d44db9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>They are interfereing with the functionaluty. I don't want to trace object methods</Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:01:09.930111Z"
        >
            <Origin>20791907-c867-4567-9bed-7b89abb7a4f4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Now I understand - we need to exclude those base Object methods so they don't get wrapped by our tracing
                decorator. That's why <Word>
                    <Verbatim />
                    isBaseObjectMethod
                </Word> exists.
            </Paragraph>
            <Paragraph>Let's examine exactly what this check does:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`function isBaseObjectMethod(methodName: string): boolean {
    return Object.prototype.hasOwnProperty.call(Object.prototype, methodName);
}`}
            </CodeBox>
            <Paragraph>
                It checks if a method name exists on Object.prototype using the "safe" way to call hasOwnProperty. This
                excludes methods like toString, valueOf, hasOwnProperty itself, etc. from being traced.
            </Paragraph>
            <Paragraph>
                So our traversal up the prototype chain is correct, but I was wrong to suggest removing this check. It's
                essential for keeping our trace output clean and focused on the actual business logic methods we want to
                monitor.
            </Paragraph>
            <Paragraph>
                Would you like to explore other aspects of how the method collection or decoration process is working?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:03:31.835335Z"
        >
            <Origin>e201b842-967e-46ad-8893-ce1d70fd6633</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Haha wait are we just overwriting the derived with the base as we traverse?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:03:38.034210Z"
        >
            <Origin>9389d4aa-c65c-4577-8152-7bcd636aa47e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's exactly the issue! In our current implementation, as we traverse up the prototype chain, we're
                overwriting derived methods with base methods because we're storing everything in the same <Word>
                    <Verbatim />
                    methods
                </Word> object without checking if we already have an implementation.
            </Paragraph>
            <Paragraph>Here's what's happening:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Start with derived class (TaskQueueTests): store its 'init' method</Line>
                <Line>Move up to base class (TestClass): overwrite 'init' with base version</Line>
                <Line>Result: we lose the derived implementation</Line>
            </Paragraph>
            <Paragraph>
                To fix this, we should only store a method if we haven't already found an implementation for that name. This
                preserves the most derived version of each method. Here's the corrected version:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}function getAllMethods(obj: any): { [key: string]: Function } {
    const methods: { [key: string]: Function } = {};
    let proto = obj;

    while (proto && proto !== Object.prototype) {
        for (const key in proto) {
            let value = proto[key];
            if (
                typeof value === "function" &&
                !str(key).startsWith("_") && 
                !isBaseObjectMethod(key) &&
                !methods.hasOwnProperty(key)  // Only store if we don't already have it
            ) {
                methods[key] = value;
            }
        }
        proto = proto.__proto__;
    }

    return methods;
}`}
            </CodeBox>
            <Paragraph>Would you like to test this version to confirm it preserves the derived implementations?</Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:04:54.370096Z"
        >
            <Origin>d6ac2209-1a60-4585-b475-943d43bf3e33</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hilarious. I went with my version: function getAllMethods(obj: any): &#123; &#91;key: string&#93;: Function
                &#125; &#123; const methods: &#123; &#91;key: string&#93;: Function &#125; = &#123;&#125;; let proto = obj;
            </Paragraph>
            <Paragraph>
                while (proto &amp;&amp; proto !== Object.prototype) &#123; for (const key in proto) &#123; if
                (methods&#91;key&#93;) continue; if ( typeof proto&#91;key&#93; === "function" &amp;&amp;
                !str(key).startsWith("_") &amp;&amp; // Skip private methods !isBaseObjectMethod(key) ) &#123;
                console.log(proto.constructor.name, proto&#91;key&#93;) methods&#91;key&#93; = proto&#91;key&#93;; &#125;
                &#125; proto = proto.__proto__; &#125;
            </Paragraph>
            <Paragraph>return methods; &#125;</Paragraph>
        </Message>
        <Message
            at="2025-01-24T00:04:59.123066Z"
        >
            <Origin>01ccc956-cfeb-409e-9d73-4e51e7ba4497</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a great solution - moving the existence check right to the start of the loop iteration makes the
                code's intent much clearer. By checking <Word>
                    <Verbatim />
                    methods&#91;key&#93;
                </Word> immediately, we ensure we keep the first (most derived) implementation we encounter and skip any
                base class versions of the same method.
            </Paragraph>
            <Paragraph>
                The addition of logging the constructor name alongside the method provides valuable insight into exactly
                which class's implementation we're storing. This helps verify that we're preserving the correct inheritance
                hierarchy in our method collection.
            </Paragraph>
            <Paragraph>
                This approach elegantly solves both the method collection and inheritance preservation challenges while
                maintaining clean, readable code. The immediate continuation when a method is already stored makes the
                control flow very straightforward.
            </Paragraph>
            <Paragraph>
                Would you like to examine any other aspects of the decorator implementation now that we've resolved the
                method collection issue?
            </Paragraph>
        </Message>
    </Chapter>
);
