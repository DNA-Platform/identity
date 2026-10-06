import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Frame ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is laid out as the frame I answered on: a bar down the side with the way to the
                library at its head, this book's contents in the middle and me at its foot, and beside it the
                page, with the book's name and <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means> across
                its top. One chapter is open at a time. The side bar
                is <Means>$[[ the table of contents ]]( Dougs Reference Manual / The Bars )</Means> as a bar,
                and the top is the cover as a bar, both taken from the manual.
            </Paragraph>
            <Paragraph>
                The design it follows is <Means>$[[ the black side bar ]]( ./A Black Side Bar )</Means> in
                library mode and <Means>$[[ the white cards ]]( ./No Bars: White Cards )</Means> in gallery
                mode. The two modes are two themes under this book's theme, and set only the bar's colors;
                gallery mode is the one registered, so the book opens light and airy, and I pick the other with
                the switch.
            </Paragraph>
            <Paragraph>
                The class of this book writes those parts where they go, and the frame is the arrangement said
                of the book. Its theme adds the side bar's look, the head, the words, and the cards
                of <Means>$[[ the gallery ]]( ./The Gallery )</Means>.
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
