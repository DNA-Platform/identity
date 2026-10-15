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
            <Heading>The browser this library keeps open</Heading>
            <Paragraph>
                The application's pages need my sign-in, so the library opens a browser of its own, with a
                profile that keeps the sign-in once I have logged in there, and leaves it open with a port a
                later command attaches to: one command opens it on the application and keeps it open, and the
                others list its tabs, open a page, say what an element says, print its tree or its computed
                styles, photograph it, scroll to an element, hover or press one and say what changed, or name what
                runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's
                root.
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
