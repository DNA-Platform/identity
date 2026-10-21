import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T17:47:02.377706Z"
        >
            <Origin>019ed18b-344b-77c5-963a-c4da4d095fdf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Given that Playwright Electron support is experimental but stable, and that _electron.launch needs the
                inspect fuse enabled, what is the specific procedure to connect to an already-running MSIX Electron app
                using connectOverCDP? Give me the exact Node.js code.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:48:00.028894Z"
        >
            <Origin>019ed18b-344b-7141-9687-c2377042386d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I want to verify the current state of Playwright's Electron API before handing you code, since there's a
                real question embedded in your premise about whether the workflow you're describing is actually supported.
                Let me check.
            </Paragraph>
            <Action>Searched the web for “Playwright _electron connectOverCDP attach already running Electron app”</Action>
            <Paragraph>
                Let me verify the fuse detail and the MSIX-specific wrinkle, since that's where the real gotchas are.
            </Paragraph>
            <Action>
                Searched the web for “Electron remote-debugging-port MSIX packaged app command line arguments CDP”
            </Action>
        </Message>
    </Chapter>
);
