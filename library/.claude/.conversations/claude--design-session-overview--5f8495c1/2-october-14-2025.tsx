import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 October 2025](2025-10-14)</Date>
        </Dated>
        <Title>[[ 14 October 2025 ]]</Title>
        <Message
            at="2025-10-14T16:28:45.438438Z"
        >
            <Origin>16a4682d-09b3-40e0-b70c-94436274f52c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Great, everything is good. Now how to we prevent that fragment problem. Is it part of a broader problem with
                arg checking in bond constructors? Or is it the bond orchestrator failing to remove fragments?
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T16:29:14.505182Z"
        >
            <Origin>ec1dae4a-e986-47e7-9d43-3653cace02d2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The fragment problem is a specific issue with how Chemistry processes children. When a React fragment is
                created outside the component tree and reused, Chemistry can't properly instantiate Chemical instances from
                it. This is actually two related problems:
            </Paragraph>
            <Heading>1. The Fragment Problem</Heading>
            <Paragraph>
                React fragments created in variables contain React elements, not Chemical instances. When Chemistry's <Word>
                    <Verbatim />
                    $BondOrchestrator
                </Word> processes them, it expects to create new Chemical instances from fresh JSX, but instead gets reused
                React elements that can't be properly bound.
            </Paragraph>
            <Heading>2. The Constructor Type Mismatch</Heading>
            <Paragraph>
                The Book constructor expects <Word>
                    <Verbatim />
                    (cover: $Cover, title: $Title, ...chapters: $Chapter&#91;&#93;)
                </Word> but when fragments are passed, it might receive React elements or improperly processed children.
            </Paragraph>
            <Paragraph>
                The core issue is that Chemistry needs to intercept JSX at creation time to create Chemical instances. When
                JSX is stored in a variable, that interception moment is lost.
            </Paragraph>
            <Heading>Solution in $BondOrchestrator</Heading>
            <Paragraph>
                Add fragment detection in the <Word>
                    <Verbatim />
                    processElement
                </Word> method:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    // Detect fragments that might cause issues
    if (element.type === React.Fragment && !element.key?.toString().startsWith('chem-')) {
        console.warn(\`Chemistry Warning: Fragment detected in \${this._chemical.__getType().name}. Fragments should be defined inline, not stored in variables.\`);
        // Still try to process it, but warn about potential issues
    }
    
    let type = element.type as any;
    // ... rest of method
}`}
            </CodeBox>
            <Heading>Better: Add validation when constructor is called</Heading>
            <Paragraph>
                In the <Word>
                    <Verbatim />
                    bond
                </Word> method where the constructor is called:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}if (this._bondConstructor && context.argsValid) {
    // Validate argument types match constructor expectations
    const args = context.arguments.values;
    const className = this._chemical.__getType().name;
    
    // Check each argument
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) continue;
        
        // If it's not a Chemical instance but should be
        if (!(args[i] instanceof $Chemical) && this._parameters[i]) {
            console.error(\`Chemistry Error: \${className} constructor expected Chemical instance at position \${i}, got:\`, args[i]);
            return props; // Don't call constructor with bad args
        }
    }
    
    this._bondConstructor!.apply(this._chemical, context.arguments.values);
}`}
            </CodeBox>
            <Paragraph>
                The real solution is that Chemistry requires children to be defined inline so it can properly process them.
                This is a fundamental architectural constraint - Chemistry needs to intercept JSX creation to build the
                Chemical instance graph.
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:20:52.692790Z"
        >
            <Origin>bc1030f4-7bab-4d57-b086-4a94a4caecf9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                A fragment isn't really something that is meant to be used. Though it occurs to me I can drop $ and just use
                fragments for arrays. That might work. But we can do that later. Is a fragment just a problematic element
                that we can use to conclude it simply isn't a valid input to a chemistry component, which either needs to to
                be chemistry component, a function component that we turn into one, a rendered chemistry component, an
                array, a $ delimited array... anything else is an error
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:21:19.412438Z"
        >
            <Origin>efe71161-8dd7-4163-92d3-0b24f06e1d91</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right - fragments are not meant to be used as input to Chemistry components. They're just a React
                construct for grouping without a wrapper element, and Chemistry needs actual components or valid inputs it
                can process.
            </Paragraph>
            <Heading>Valid inputs for Chemistry components:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Chemical instances
                    </Word> - Other Chemistry components
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Function components
                    </Word> - That Chemistry converts via <Word>
                        <Verbatim />
                        $$Function
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Arrays
                    </Word> - Either native arrays or wrapped in <Word>
                        <Verbatim />
                        $
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Primitives
                    </Word> - strings, numbers, etc.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Intrinsic elements
                    </Word> - HTML elements like <Word>
                        <Verbatim />
                        &lt;div&gt;
                    </Word>, <Word>
                        <Verbatim />
                        &lt;span&gt;
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Invalid inputs:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Fragments
                    </Word> - Can't be properly processed into Chemical instances
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        React elements stored in variables
                    </Word> - Lost the instantiation moment
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Non-Chemistry class components
                    </Word> - Can't be converted
                </Line>
            </Paragraph>
            <Heading>Add validation in $BondOrchestrator's processElement:</Heading>
            <CodeBox
                language="typescript"
            >
                {`private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    let type = element.type as any;
    
    // Handle Chemistry's special fragment marker
    if (type === React.Fragment && element.key?.toString().startsWith('chem-')) {
        // This is Chemistry's own fragment - process it
        const cid = parseInt(element.key.toString().replace('chem-', ''));
        const chemical = $chemicalRegistry.get(cid)!;
        context.args.push(chemical);
        context.children.push({ type: chemical.Component, props: {}, key: element.key })
        this._rendered.set(chemical.Component, element);
        return;
    }
    
    // Reject regular React fragments
    if (type === React.Fragment) {
        console.error(\`Chemistry Error: React fragments cannot be used as children in \${this._chemical.__getType().name}. Use $ for arrays or define children inline.\`);
        return; // Skip processing this fragment
    }
    
    // ... rest of existing processing
}`}
            </CodeBox>
            <Paragraph>
                This makes Chemistry's constraints clear: fragments are simply not valid input. If users need to group
                children, they should use <Word>
                    <Verbatim />
                    $
                </Word> for arrays or define the structure inline. This prevents the infinite loop and gives a clear error
                message about what went wrong.
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:23:42.131234Z"
        >
            <Origin>9c279bb9-c6d8-4f95-8682-57c7751c58e6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But is fragment the only thing in the ReactNode type to reject? And by reject I mean throwing errors, which
                for some reason you hate but shouldn't cause it's terrible programming. The children need to match a
                signature. You can'y just return and say all is okay: type ReactNode = | ReactElement | string | number |
                bigint | Iterable&lt;ReactNode&gt; | ReactPortal | boolean | null | undefined |
                DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES&#91; keyof
                DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES &#93; | Promise&lt;AwaitedReactNode&gt;;
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {``}
            </CodeBox>
        </Message>
        <Message
            at="2025-10-14T19:24:08.158277Z"
        >
            <Origin>7a318544-91f4-40d4-961a-90bc04627285</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're absolutely right - returning silently is terrible programming. We should throw errors for invalid
                inputs. Looking at the ReactNode type, here's what Chemistry should accept and reject:
            </Paragraph>
            <Heading>Valid ReactNode types for Chemistry:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        ReactElement
                    </Word> - Can be processed (Chemical components, function components, intrinsic elements)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        string, number, bigint
                    </Word> - Primitive values are fine
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Iterable&lt;ReactNode&gt;
                    </Word> - Arrays are OK, Chemistry processes them
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        null, undefined
                    </Word> - Empty values are acceptable
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        boolean
                    </Word> - Usually renders as nothing, that's fine
                </Line>
            </Paragraph>
            <Heading>Must REJECT with errors:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        React.Fragment
                    </Word> - Can't be properly processed
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ReactPortal
                    </Word> - Portals break Chemistry's parent-child model
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Promise&lt;AwaitedReactNode&gt;
                    </Word> - Async components aren't supported
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        DO_NOT_USE...
                    </Word> - Experimental React features
                </Line>
            </Paragraph>
            <Heading>Add proper validation in processElement:</Heading>
            <CodeBox
                language="typescript"
            >
                {`private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    let type = element.type as any;
    
    // Reject fragments (except Chemistry's own)
    if (type === React.Fragment && !element.key?.toString().startsWith('chem-')) {
        throw new Error(
            \`Chemistry Error: React fragments cannot be used as children in \${this._chemical.__getType().name}. \` +
            \`Fragments must be defined inline, not stored in variables. Use $ for arrays.\`
        );
    }
    
    // Reject portals
    if (element.type === Symbol.for('react.portal')) {
        throw new Error(
            \`Chemistry Error: React portals are not supported as children in \${this._chemical.__getType().name}. \` +
            \`Portals break Chemistry's parent-child binding model.\`
        );
    }
    
    // Continue with valid element processing...
}`}
            </CodeBox>
            <Heading>And validate constructor arguments:</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}if (this._bondConstructor && context.argsValid) {
    const args = context.arguments.values;
    const className = this._chemical.__getType().name;
    
    // Validate each argument matches constructor expectations
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const param = this._parameters[i];
        
        if (!param) continue;
        
        // Constructor expects Chemical instances
        if (arg && !(arg instanceof $Chemical) && !Array.isArray(arg)) {
            throw new Error(
                \`\${className} constructor parameter \${i} expected Chemical instance or array, \` +
                \`got \${typeof arg}. Children must be Chemistry components.\`
            );
        }
    }
    
    this._bondConstructor!.apply(this._chemical, context.arguments.values);
}`}
            </CodeBox>
            <Paragraph>
                Throwing errors is the right approach - it gives developers immediate, clear feedback about what's wrong
                instead of silently failing and causing confusion later.
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:26:15.457078Z"
        >
            <Origin>d350bf51-c4f0-4b49-998e-5e6bc7a93e84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don't think we process iterables yet! We process arrays. An iterable itself is a sign something is
                partically rendered
            </Paragraph>
            <Paragraph>
                Hey we can use fragments for arrays and use &lt;$ /&gt; as undefined or default: &lt;$ default=&#123;info
                about the default&#125;&gt; do that the constructor can make one
            </Paragraph>
            <Paragraph>Again, we'll do later</Paragraph>
            <Paragraph>But for now, what can we exclude</Paragraph>
            <Paragraph>I think we reject these an iterables: Must REJECT with errors:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>React.Fragment - Can't be properly processed</Line>
                <Line>ReactPortal - Portals break Chemistry's parent-child model</Line>
                <Line>Promise&lt;AwaitedReactNode&gt; - Async components aren't supported</Line>
                <Line>DO_NOT_USE...</Line>
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:26:34.352080Z"
        >
            <Origin>5effe18a-22ec-4522-82be-2188a125b817</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right - we process arrays specifically, not general iterables. And yes, those are exactly the types
                we should reject with errors.
            </Paragraph>
            <Heading>What to reject in processElement:</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    let type = element.type as any;
    
    // Check for Fragment (except Chemistry's own marked fragments)
    if (type === React.Fragment && !element.key?.toString().startsWith('chem-')) {
        throw new Error(
            \`Chemistry Error: React fragments cannot be used as children in \${this._chemical.__getType().name}. \` +
            \`Use $ for arrays or define children inline.\`
        );
    }
    
    // Check for Portal (React.createPortal creates elements with $$typeof: REACT_PORTAL_TYPE)
    if ((element as any).$$typeof === Symbol.for('react.portal')) {
        throw new Error(
            \`Chemistry Error: React portals are not supported in \${this._chemical.__getType().name}. \` +
            \`Portals break Chemistry's parent-child binding model.\`
        );
    }
    
    // Check for Promise/Suspense elements
    if (type && (type.$$typeof === Symbol.for('react.lazy') || type.name === 'Lazy')) {
        throw new Error(
            \`Chemistry Error: Async/lazy components are not supported in \${this._chemical.__getType().name}. \` +
            \`All components must be synchronously available.\`
        );
    }
    
    // Check for iterables that aren't arrays
    if (element && typeof element[Symbol.iterator] === 'function' && !Array.isArray(element)) {
        throw new Error(
            \`Chemistry Error: Iterables (other than arrays) are not supported in \${this._chemical.__getType().name}. \` +
            \`Convert to array or use $ for collections.\`
        );
    }
    
    // Continue with valid processing...
}`}
            </CodeBox>
            <Paragraph>
                Your idea about <Word>
                    <Verbatim />
                    &lt;$ default=&#123;...&#125; /&gt;
                </Word> for constructor defaults is interesting - it would let the constructor know to create a default
                instance when that position is empty. That's a clever use of the $ component beyond just arrays.
            </Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:27:23.857834Z"
        >
            <Origin>9b7430ee-3582-4438-85e6-9c171a0555c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How about you condense this to one if statement - set things like this to consts to do an and. ANd in that
                one error message, say the type of thing you found. This is too wordy:
            </Paragraph>
            <Paragraph>(element as any).$$typeof === Symbol.for('react.portal')</Paragraph>
        </Message>
        <Message
            at="2025-10-14T19:27:38.232125Z"
        >
            <Origin>c1b7d3ee-81b9-47e9-8473-5a65380a64ab</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the condensed validation:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    let type = element.type as any;
    
    // Check for invalid element types
    const isFragment = type === React.Fragment && !element.key?.toString().startsWith('chem-');
    const isPortal = (element as any).$$typeof === Symbol.for('react.portal');
    const isLazy = type && type.$$typeof === Symbol.for('react.lazy');
    const isIterable = element && typeof element[Symbol.iterator] === 'function' && !Array.isArray(element);
    
    if (isFragment || isPortal || isLazy || isIterable) {
        const invalidType = isFragment ? 'React Fragment' : 
                          isPortal ? 'React Portal' : 
                          isLazy ? 'Lazy/Async Component' : 
                          'Iterable (non-array)';
        throw new Error(
            \`Chemistry Error: \${invalidType} cannot be used as child in \${this._chemical.__getType().name}. \` +
            \`Only Chemistry components, function components, arrays, and primitives are supported.\`
        );
    }
    
    // Continue with valid processing...
}`}
            </CodeBox>
            <Paragraph>Clean, clear, and tells you exactly what invalid type was found.</Paragraph>
        </Message>
    </Chapter>
);
