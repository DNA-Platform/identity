import { Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-27T17:09:38.511713Z"
        >
            <Origin>019e6a69-c661-74e9-9fa2-d94284504ee9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do you have the ability to read this, and convert the conversation into an artifact or project document?
                Just curious if you can access it verbatim:
            </Paragraph>
            <Paragraph>https://chatgpt.com/share/6a131e1f-6a3c-83eb-99ec-24f91fa08b99</Paragraph>
            <Paragraph>If not, I'll have Claude Code pull it out</Paragraph>
        </Message>
        <Message
            at="2026-05-27T17:09:56.692247Z"
        >
            <Origin>019e6a69-c661-79e3-8fc7-937f838235ef</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://chatgpt.com/share/6a131e1f-6a3c-83eb-99ec-24f91fa08b99</Action>
            <Paragraph>
                No — I can only get the page shell. ChatGPT's shared conversations render client-side, so what comes back
                through <Word>
                    <Verbatim />
                    web_fetch
                </Word> is just the login wall and meta tags. The title is visible ("Chalmers vs Dennett Ideas") but none of
                the actual turns.
            </Paragraph>
            <Paragraph>
                Claude Code with a headless browser (Playwright or Puppeteer) should be able to pull it. Worth knowing that
                ChatGPT share pages sometimes lazy-load further messages on scroll, so whatever script runs may need to
                scroll to the bottom before grabbing the DOM.
            </Paragraph>
            <Paragraph>Send it over when you have it and I'll convert it into a project document.</Paragraph>
        </Message>
    </Chapter>
);
