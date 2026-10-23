import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Page ]]</Title>
        <Paragraph>
            <Brief />
            How a conversation with Claude is shown on its page: the form the application itself gives a
            conversation, read off the application, and the browser this library keeps open to read it.
        </Paragraph>
        <Section>
            <Heading>The form the application gives</Heading>
            <Paragraph>
                A conversation is shown as the application shows it, since that is the form its reader knows,
                and annotations and flourishes come on that base. The form is read off the application's own
                page in a browser, element by element and style by style, and written as the theme
                of <Means>$[[ a conversation with Claude ]]( ./The Project )</Means>, so that the message, the
                speaker, the time, the action, the artifact and the attachment are dressed as the application
                dresses them.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The side and the strip</Heading>
            <Paragraph>
                The theme dresses what the application has no form for. The side, which the layout places: the
                search's field at its head under the register's mark, the hits in place of the index while a
                word stands, what I asked under the open chapter's entry and the file tabs under it, the open
                entry marked; the page draws no side only when the index has no entry. The project's strip under
                the bar, a row of the page's grid in every form, with a side and without, with the pane and
                without, at a desk and on a phone, where the neighbours and the word give way to the name and the
                way back. And the word found, marked by the browser's highlight and not by a class, the one rule
                the highlight takes. The side's part and the strip's are parts of the page's form, said
                in <Means>$[[ The Project ]]( ./The Project )</Means> and built to concept 9 of <Means>$[[ Claudes Design / The Conversation and the Project ]]</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The browser this library keeps open</Heading>
            <Paragraph>
                The application's pages need my sign-in, so the library opens a browser of its own, with a
                profile that keeps the sign-in once I have logged in there, and leaves it open with a port a
                later command attaches to: one command opens it on the application and keeps it open, and the
                others list its tabs, open a page, say what an element says, print its tree or its computed
                styles, photograph it, scroll to an element, hover or press one and say what changed, or name what
                runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's
                root. It is an essential tool of developing this library and is opened at the start of a session, in the
                background, with <Means>$[[ the command ]]( Dougs Reference Manual / Developing a Library )</Means> said
                there: node .me/.claude/.manual/4-the-page~browser.mjs open; it stays open as a resource until I
                close it, and I log in there once. It is a browser and not an interface for calls: it keeps one tab
                per place, the application, the workbench, the built site, a file, and goes to an address in the tab
                it has rather than opening another, and what it leaves open is closed with its close command.
            </Paragraph>
        </Section>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="browser"
            type=".mjs"
        >
            ![[ browser.mjs ]]
        </Append>
    </Chapter>
);
