import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Camera ]]</Title>
        <Section>
            <Heading>What the camera is</Heading>
            <Paragraph>
                A concept is a page, and its card in this book shows a photograph of it at a desk's width with
                another, at a phone's, laid over the corner. The camera takes those photographs. It is the one
                tool this book needs that the framework does not give, so it stands here, beside the chapter
                that says what it is, and nothing that builds this book stands outside it. It was once a script
                kept outside the library, and how it came to stand here is told
                in <Means>$[[ Closure ]]( Dougs Story / Closure )</Means>.
            </Paragraph>
            <Paragraph>
                It looks at every concept that stands beside a chapter of this book under its number,
                photographs the ones that are newer than their photographs, and says how many things on each
                run past the right edge of the screen. That count is how a page that does not fit a phone is
                caught before I am shown it. It writes nothing but the photographs, and the book is bound
                afterwards in the usual way.
            </Paragraph>
            <Paragraph>
                The camera photographs concepts. A page of the library itself is looked at
                with <Means>$[[ the workbench ]]( Dougs Reference Manual / Developing a Library )</Means>, which keeps
                the page open while I write it.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The camera's file</Heading>
            <Paragraph>
                <Code identifier="camera" />
            </Paragraph>
        </Section>
        <Append
            identifier="camera"
            type=".mjs"
        >
            ![[ camera.mjs ]]
        </Append>
    </Chapter>
);
