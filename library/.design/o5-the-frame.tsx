import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Frame ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book stands in the frame every book of mine stands in, drawn
                by <Means>$[[ the base book ]]( Dougs Reference Manual / The Book )</Means>: the library's bar across
                the top with the library's subjects and me, this book's contents down the side, its name and its
                switches at the head, and the page beside. It wears the frame in the light tone, white, which is
                this book's colour, and offers its two tones as tabs at its head — white, and the black side
                bar, two of <Means>$[[ the three tones ]]( Dougs Reference Manual / The Tone )</Means> — because
                this is the book I look at them in. The six arrangements it once offered as tabs are gone: an
                arrangement is a book's, fixed where the book is registered, and every book of mine wears the
                same one. Its own colour, the rose the frame's sketch gives it, is on its index and its pressed
                tabs.
            </Paragraph>
            <Paragraph>
                The design it follows is <Means>$[[ the white top bar and the opal side bar ]]( ./A White Top Bar and an Opal Side Bar )</Means> in
                the light tone, with <Means>$[[ the white cards ]]( ./No Bars: White Cards )</Means> in its
                gallery; the black side bar is its other option, one tab away, and the blue with the black top is
                sketched before it is a tab.
            </Paragraph>
            <Paragraph>
                The class of this book overrides what the base draws in two places only: which chapter opens
                when none is named, the gallery, and its switches. Its theme sets its colour and adds the look of
                the cards and the words. Its cover and its table of contents are the framework's own.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="faces"
            type=".tsx"
        >
            ![[ faces.tsx ]]
        </Append>
    </Chapter>
);
