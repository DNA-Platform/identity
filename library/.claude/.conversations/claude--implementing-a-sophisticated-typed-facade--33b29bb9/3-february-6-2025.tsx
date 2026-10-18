import { Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 February 2025](2025-02-06)</Date>
        </Dated>
        <Title>[[ 6 February 2025 ]]</Title>
        <Message
            at="2025-02-06T16:16:57.210178Z"
        >
            <Origin>d8a848cb-91bd-43f7-abce-30b271d2e35f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why am I getting a PARM for running intersect? Is there a way to fix this?</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-02-06T16:17:21.110461Z"
        >
            <Origin>03554ae8-d5de-452c-972c-cae75c2d974d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The PARM error occurs because Illustrator requires both objects to be selected before running the intersect
                command. Try this fix:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}run(function () {
    var doc = api.activeDocument();
    var mask = doc.activeLayer().c().rectangle();
    doc.pathItems().do(function (pathItem, i) {
        if (pathItem.hidden())
            return;
        if (i > 1)
            return;
            
        app.selection = [mask.item(), pathItem.item()]; // Select both objects
        app.executeMenuCommand('intersect');
    });
});`}
            </CodeBox>
            <Paragraph>
                The key change is selecting both the mask and the path item before executing the intersect command.
            </Paragraph>
        </Message>
        <Message
            at="2025-02-06T16:18:12.473382Z"
        >
            <Origin>d4a00266-5fd7-46bb-9c18-93432b82888a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am selecting them. My select code works. Are you sure I can just write the selection array?
            </Paragraph>
        </Message>
        <Message
            at="2025-02-06T16:18:17.737063Z"
        >
            <Origin>76f60576-e735-45c8-937f-757da65992e5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, you're right - we need to use the proper selection mechanism. The issue may be with the selection order.
                Try reversing the order of your selection:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`pathItem.set().selected(true);
mask.set().selected(true);`}
            </CodeBox>
            <Paragraph>Or try clearing the selection first:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`app.selection = undefined;
mask.set().selected(true);
pathItem.set().selected(true);`}
            </CodeBox>
            <Paragraph>
                If those don't work, we might need to add a small delay between the selection and the intersect command
                using ExtendScript's delay function.
            </Paragraph>
        </Message>
        <Message
            at="2025-02-06T16:19:06.104296Z"
        >
            <Origin>d18f9796-b382-4be6-a5af-ab745c571ffc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>run(() =&gt; &#123; var doc = api.activeDocument();</Paragraph>
            <Paragraph>
                var mask = doc.activeLayer().c().rectangle(); doc.pathItems().do((pathItem, i) =&gt; &#123; if
                (pathItem.hidden()) return; if (i &gt; 1) return;
            </Paragraph>
            <Paragraph>
                app.selection = undefined; mask.set().selected(true); pathItem.set().selected(true);
                app.executeMenuCommand('intersect'); alert("Finished!") &#125;); &#125;);
            </Paragraph>
            <Paragraph>My code does that</Paragraph>
        </Message>
        <Message
            at="2025-02-06T16:19:10.169802Z"
        >
            <Origin>f24af354-d90a-4fdd-a3d4-8b9636835262</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Try adding <Word>
                    <Verbatim />
                    api.redraw()
                </Word> after each selection to ensure Illustrator registers the selections before executing the command:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`app.selection = undefined;
mask.set().selected(true);
api.redraw();
pathItem.set().selected(true);
api.redraw();
app.executeMenuCommand('intersect');`}
            </CodeBox>
        </Message>
        <Message
            at="2025-02-06T16:19:40.444565Z"
        >
            <Origin>c84a24a6-2557-4a1b-8f97-7dc6fdc9fe20</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are yiou sure "intersect" expists? What does parm usually mean?</Paragraph>
        </Message>
        <Message
            at="2025-02-06T16:19:45.666980Z"
        >
            <Origin>672d20f2-fc56-468a-9eda-c09c64b2f06c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                PARM usually means parameter error - Illustrator is saying the command isn't getting valid parameters.
                Looking at Illustrator's menu commands, I believe it's "pathfinder" rather than "intersect". Try:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`app.executeMenuCommand('pathfinder');`}
            </CodeBox>
            <Paragraph>Or for specific pathfinder operations:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`app.executeMenuCommand('intersectEff');
// or
app.executeMenuCommand('intersectPath');`}
            </CodeBox>
        </Message>
    </Chapter>
);
