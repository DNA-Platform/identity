import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Tool ]]</Keyed>
        <Title>[[ The Camera ]]</Title>
        <Paragraph>
            <Brief />
            The tool that photographs every numbered page of a book at a desk, on a phone and small, and says
            what runs past the edge of the screen.
        </Paragraph>
        <Section>
            <Heading>What it photographs</Heading>
            <Paragraph>
                Run from the repository with a book's folder, the camera finds every page kept beside a chapter
                under a number, a concept's sketch or a page designed from a print, and photographs each that is
                newer than its photographs three times: at a desk, twelve hundred and eighty wide; on a phone,
                three hundred and ninety; and small, the desk at a third of its pixels, for a card. The three
                are kept beside the page under its number, and the chapter says them as its photographs, which
                the bind holds it to. Every photograph is taken at one pixel per pixel, so its own size is its
                device's. It was this library's design book's own tool and stands here so any portfolio has it;
                the book it photographs is the argument.
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
