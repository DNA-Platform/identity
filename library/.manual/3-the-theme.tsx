import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Theme ]]</Keyed>
        <Title>[[ The Theme ]]</Title>
        <Paragraph>
            <Brief />
            Every value the library's rules read, declared once, and the parts that dress the frame.
        </Paragraph>
        <Section>
            <Heading>What the theme is</Heading>
            <Paragraph>
                The theme is where this library keeps its values, and the one styled component every book is
                drawn inside. The framework's own theme has no values and no rules, so everything here is mine.
                Its values are the frame's sketch's own, named as that file names them, by role: the bar and
                what is read on it — the bar, its ink, its dim ink, what is on, its line, the mark; the side bar
                and what is read on it; the paper and the ink, the soft and the line; the orange that is me, one
                serif and one sans; the width of the side bar; the faces, sizes and spaces. Five of them are the
                ones a book sets to have a colour scheme of its own — its colour, its accent, its side bar, its
                paper and its ink — and the frame reads those and nothing else, so every book not yet written
                has a scheme the moment it sets five values.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the theme fits the library's patterns</Heading>
            <Paragraph>
                Every value the library reads is declared here, so a rule anywhere reads it and a template
                anywhere is typed against one theme; a book's own theme sets values and adds parts, and declares
                nothing. The rules are parts, each a method that returns some rules for one thing on the page —
                the page, the writing, the links, the figures, the listings, the switches, the turns, the
                library's bar, the head, the holds, the tones — composed once in the field that holds the
                component, so a book's theme changes one part and keeps the rest. What a reader switches is
                never a part: <Means>$[[ a tone ]]( ./The Tone )</Means>, a reading, a paper each add a class,
                and the parts that read those classes are here, always.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the theme is used</Heading>
            <Paragraph>
                A book's theme is a class under this one, registered on the book's class in one
                line. <Means>$[[ The manual's ]]( ./The Manual )</Means> sets its measure, its spread's column
                and the teal of its sketch as its colour, accent and side bar, and adds the parts for its index
                and its words; the catalogue's keeps the base's values, which are the site's own, and adds the
                parts for its front and its covers; my story's sets its prose face, its amber on book paper and
                its three papers' values; the design book's its rose on white.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the theme bites</Heading>
            <Paragraph>
                A part of a theme must not take the name of a value the theme declares, nor of a member the
                class has, nor of a part the base already has unless it says it overrides and spreads the base's
                into its own: each of these happened once — a part named side, a part named frame, a part named
                cards, a part named head — and each broke the page somewhere else without a word. The typecheck
                in the binder's folder names the first two sorts; the third it does not, so the base's part
                names are listed in each book's chapter. A value that would be computed from another is computed
                in the template, never in a field, or a book that changes the first never reaches the second.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
