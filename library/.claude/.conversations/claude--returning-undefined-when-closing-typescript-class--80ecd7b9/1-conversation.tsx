import { Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 January 2025](2025-01-10)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-01-10T19:03:40.595280Z"
        >
            <Origin>2a2456fb-07eb-4bef-818c-afdb551b019b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is a TypeScript class that compiles to extendScript. I pass a value of true in for closed through the
                close method and I get undefined. Why?
            </Paragraph>
            <Paragraph>
                closed(close?: boolean): boolean &#123; console.log("closed param", close) if (close !== undefined) &#123;
                this._closed = close; this.onChange().fire(this); &#125; return this._closed; &#125;
            </Paragraph>
            <Paragraph>close(): this &#123; console.log("Closing") this.closed(true); return this; &#125;</Paragraph>
            <Paragraph>open(): this &#123; this.closed(false); return this; &#125;</Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:03:47.413827Z"
        >
            <Origin>80b9ccf6-44a4-4056-a182-f685e801ca0e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The issue is in the chaining of the methods. In your <Word>
                    <Verbatim />
                    close()
                </Word> method, you're calling <Word>
                    <Verbatim />
                    this.closed(true)
                </Word> but not doing anything with the return value. ExtendScript/JavaScript functions that don't
                explicitly return a value will return <Word>
                    <Verbatim />
                    undefined
                </Word>.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    close()
                </Word> method immediately returns <Word>
                    <Verbatim />
                    this
                </Word> after calling <Word>
                    <Verbatim />
                    closed(true)
                </Word>, but since you're not capturing or using the boolean return value from the <Word>
                    <Verbatim />
                    closed()
                </Word> method, it appears as undefined in your logs.
            </Paragraph>
            <Paragraph>Here's how you could fix it:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`closed(close?: boolean): boolean {
    console.log("closed param", close);
    if (close !== undefined) {
        this._closed = close;
        this.onChange().fire(this);
    }
    return this._closed;
}

close(): this {
    console.log("Closing");
    const isClosed = this.closed(true); // capture the return value if needed
    // or just call it without capturing: this.closed(true);
    return this;
}

open(): this {
    this.closed(false);
    return this;
}`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    undefined
                </Word> you're seeing is likely because you're trying to use the return value of <Word>
                    <Verbatim />
                    close()
                </Word> as a boolean, but it returns <Word>
                    <Verbatim />
                    this
                </Word> for method chaining. If you need the boolean value, you should call the <Word>
                    <Verbatim />
                    closed()
                </Word> method directly or store its result before returning <Word>
                    <Verbatim />
                    this
                </Word>.
            </Paragraph>
            <Paragraph>If you're trying to check if something is closed, you should use:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`const isClosed = instance.closed(); // gets the current state`}
            </CodeBox>
            <Paragraph>Rather than:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`const isClosed = instance.close(); // returns 'this' for chaining`}
            </CodeBox>
        </Message>
        <Message
            at="2025-01-10T19:05:11.997313Z"
        >
            <Origin>a63bf6ee-d308-4eb6-a5c5-8892e3ed36bd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is the log I am talking about. When I call the this.close(true):</Paragraph>
            <Paragraph>
                closed(close?: boolean): boolean &#123; console.log("closed param", close); if (close !== undefined) &#123;
                this._closed = close; this.onChange().fire(this); &#125; return this._closed; &#125;
            </Paragraph>
            <Paragraph>Am I not passing in true for that parameter so its not undefined?</Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:05:16.505702Z"
        >
            <Origin>b4b02458-11b8-49fd-9850-908d8f6d641a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, I see the confusion now! The issue is that you're not actually calling <Word>
                    <Verbatim />
                    this.close(true)
                </Word> - you're calling <Word>
                    <Verbatim />
                    this.close()
                </Word> which is a different method. Let's break it down:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    When you call <Word>
                        <Verbatim />
                        this.close()
                    </Word> (with no parameters), it executes this method:
                </Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`close(): this {
    console.log("Closing")
    this.closed(true);  // This line calls the closed() method
    return this;
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>
                    Then that method calls <Word>
                        <Verbatim />
                        this.closed(true)
                    </Word>, which is correct - it does pass <Word>
                        <Verbatim />
                        true
                    </Word> as the parameter to the <Word>
                        <Verbatim />
                        closed()
                    </Word> method.
                </Line>
            </Paragraph>
            <Paragraph>
                If you're seeing <Word>
                    <Verbatim />
                    undefined
                </Word> in the "closed param" log, that would be unexpected because <Word>
                    <Verbatim />
                    true
                </Word> is definitely being passed in. Could you share the exact console output you're seeing? That would
                help me understand better what's happening.
            </Paragraph>
            <Paragraph>
                Are you perhaps calling <Word>
                    <Verbatim />
                    close
                </Word> in a different way somewhere else in your code? Or is there any inheritance or method overriding
                happening?
            </Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:06:09.387000Z"
        >
            <Origin>ac5fbc2c-5228-4af8-9efd-7b3d896a7499</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No I literally see the log from calling close() which does closed(true) and which I see as undefined.
                Something's up
            </Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:06:14.802268Z"
        >
            <Origin>52a43a62-6040-45b1-bd00-88c9ba7b1260</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                There might be a scope or binding issue happening. Let's verify the execution flow. Could you try adding
                more detailed logging to see exactly what's happening:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`closed(close?: boolean): boolean {
    console.log("In closed method");
    console.log("Type of close param:", typeof close);
    console.log("Value of close param:", close);
    console.log("this context:", this);
    if (close !== undefined) {
        this._closed = close;
        this.onChange().fire(this);
    }
    return this._closed;
}

close(): this {
    console.log("In close method");
    console.log("this context:", this);
    const result = this.closed(true);
    console.log("Result of closed call:", result);
    return this;
}`}
            </CodeBox>
            <Paragraph>
                Since ExtendScript can sometimes behave differently from standard JavaScript/TypeScript when it comes to
                scope and <Word>
                    <Verbatim />
                    this
                </Word> binding, there might be something going wrong with how the method call is being bound. The
                additional logging should help us pinpoint exactly where the value is getting lost.
            </Paragraph>
            <Paragraph>
                Also, could you verify that <Word>
                    <Verbatim />
                    this._closed
                </Word> is properly initialized somewhere in your class? If it's not initialized, that could also cause
                unexpected behavior.
            </Paragraph>
            <Paragraph>
                Could you share the full class definition including the constructor and any relevant initialization code?
                That might help us spot the issue.
            </Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:08:21.203431Z"
        >
            <Origin>711aad93-b464-47f7-8b0a-f1b8f5f04364</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am calling it in an apply method: pathFunction.apply(p =&gt; &#123; p.fx((p, x, fx) =&gt; x.times(2 <Word>
                    <Emphasis />
                     Math.PI).cos()); p.fy((p, y, fy) =&gt; y.times(2 
                </Word> Math.PI).sin()); p.f((p, x, y, f) =&gt; f.norm(&#91;0.2, 0.8&#93;)); console.log("About to close")
                p.close(); console.log("About to closed") p.strokeWidth(0.005); p.strokeColor(WebColor.DarkOrchid);
                p.fillColor(color(WebColor.HotPink, WebColor.Turquoise)) &#125;);
            </Paragraph>
            <Paragraph>
                Here's the method: apply(update: (p: PathFunction) =&gt; void | any) &#123; try &#123;
                this.onChange().off(); this._building = true; update(this); &#125; finally &#123; this._building = false;
                this.onChange().on(); &#125; this.build(); &#125;
            </Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:08:28.354133Z"
        >
            <Origin>0805aeeb-8fdd-40fa-bcc8-085522ac8dc2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, now I see what might be happening! The issue is likely related to the event handling and building state
                in your <Word>
                    <Verbatim />
                    apply
                </Word> method. Let's break down the sequence:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    When you call <Word>
                        <Verbatim />
                        apply
                    </Word>, it turns off event handling (<Word>
                        <Verbatim />
                        this.onChange().off()
                    </Word>)
                </Line>
                <Line>
                    Sets <Word>
                        <Verbatim />
                        _building = true
                    </Word>
                </Line>
                <Line>
                    Runs your update function where <Word>
                        <Verbatim />
                        p.close()
                    </Word> is called
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        close()
                    </Word> calls <Word>
                        <Verbatim />
                        closed(true)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        closed()
                    </Word> method tries to fire an event (<Word>
                        <Verbatim />
                        this.onChange().fire(this)
                    </Word>) but events are disabled
                </Line>
                <Line>
                    Finally block runs, setting <Word>
                        <Verbatim />
                        _building = false
                    </Word> and turning events back on
                </Line>
            </Paragraph>
            <Paragraph>
                Try modifying your <Word>
                    <Verbatim />
                    closed
                </Word> method to add logging for the building state:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`closed(close?: boolean): boolean {
    console.log("closed param", close);
    console.log("building state:", this._building);
    if (close !== undefined) {
        this._closed = close;
        // Maybe check building state before firing?
        if (!this._building) {
            this.onChange().fire(this);
        }
    }
    return this._closed;
}`}
            </CodeBox>
            <Paragraph>
                The fact that this is happening within an <Word>
                    <Verbatim />
                    apply
                </Word> method with event handling turned off could be affecting how the state is being set or propagated.
                The <Word>
                    <Verbatim />
                    undefined
                </Word> might be coming from how the event system interacts with the state when events are disabled.
            </Paragraph>
            <Paragraph>
                Is there a reason you need to fire the event within the <Word>
                    <Verbatim />
                    closed
                </Word> method while in a building state? You might want to:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Either defer the event until after building is complete</Line>
                <Line>
                    Or store the changes and fire them all at once when <Word>
                        <Verbatim />
                        apply
                    </Word> finishes
                </Line>
                <Line>Or check the building state before firing events</Line>
            </Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:11:09.509645Z"
        >
            <Origin>23373874-6a45-4e15-8df0-cbc53b1810b8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No you're not getting it. The value in the closed method is undefined. These are the logs: 2 "closed
                isClosed" undefined "pathFunc.closed()" false "closed isClosed" undefined "About to close" "Closing" "closed
                isClosed" true "About to closed" 2 "closed isClosed" undefined
            </Paragraph>
            <Paragraph>
                2 "closed param" undefined "pathFunc.closed()" false "closed param" undefined "About to close" "Closing"
                "closed param" true "About to closed" 2 "closed param" undefined
            </Paragraph>
            <Paragraph>
                Maybe my logic to turn off event handling isn't working. The point of apply is that changes should fire and
                that no more builds should be triggered
            </Paragraph>
        </Message>
        <Message
            at="2025-01-10T19:11:17.535167Z"
        >
            <Origin>e2cb7b27-fc8d-4deb-8bf3-d58f654b0382</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Now I see the sequence clearly! Looking at your logs:</Paragraph>
            <CodeBox>
                {`2
"closed param" undefined    // Initial check
"pathFunc.closed()" false  // Another check
"closed param" undefined   // Another check
"About to close"          // Your console.log before p.close()
"Closing"                 // From close() method
"closed param" true       // This is the actual call to closed(true) from close()
"About to closed"         // Your console.log after p.close()
2
"closed param" undefined  // Another check after`}
            </CodeBox>
            <Paragraph>
                It looks like your <Word>
                    <Verbatim />
                    closed
                </Word> method is being called multiple times, not just from your explicit <Word>
                    <Verbatim />
                    close()
                </Word> call. The <Word>
                    <Verbatim />
                    undefined
                </Word> logs are coming from other places that are checking the closed state by calling <Word>
                    <Verbatim />
                    closed()
                </Word> with no parameter.
            </Paragraph>
            <Paragraph>
                This is actually expected behavior - when <Word>
                    <Verbatim />
                    closed()
                </Word> is called with no parameter, it acts as a getter and just returns the current state. That's why you
                see several calls with <Word>
                    <Verbatim />
                    undefined
                </Word> - these are likely status checks happening during your build process.
            </Paragraph>
            <Paragraph>The sequence that matters is:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>"About to close"</Line>
                <Line>"Closing"</Line>
                <Line>"closed param" true</Line>
            </Paragraph>
            <Paragraph>
                This shows your <Word>
                    <Verbatim />
                    close()
                </Word> method is working correctly - it's passing <Word>
                    <Verbatim />
                    true
                </Word> to <Word>
                    <Verbatim />
                    closed()
                </Word> as intended. All those other <Word>
                    <Verbatim />
                    undefined
                </Word> logs are just from status checks where the method is being called without parameters.
            </Paragraph>
            <Paragraph>Try adding a stack trace to see where these additional calls are coming from:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`closed(close?: boolean): boolean {
    console.log("closed param", close);
    console.log("Stack:", new Error().stack);
    if (close !== undefined) {
        this._closed = close;
        this.onChange().fire(this);
    }
    return this._closed;
}`}
            </CodeBox>
            <Paragraph>This will help identify what parts of your code are doing these status checks.</Paragraph>
        </Message>
    </Chapter>
);
