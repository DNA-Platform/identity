import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Kind>$[[ ./A Noun ]]</Kind>
        <Title>[[ The Switch ]]</Title>
        <Paragraph>
            <Brief />
            A word a reader presses to say one thing of the book, and one of a set.
        </Paragraph>
        <Section>
            <Heading>What a switch is</Heading>
            <Paragraph>
                A switch is a word drawn as a button. It is given one thing that can be said of a book. Pressed,
                it says that thing of the book I am reading; pressed again, it takes it back; and the button
                reports whether the thing is said by asking the book. Some switches come as a set where only one
                can hold — the paper a book is printed on, the tone of the frame, where the bars go. A tab is a
                switch for that: given its own thing and the set it belongs to, it says its own and takes back
                the others, and pressing the one that already holds changes nothing.
            </Paragraph>
            <Paragraph>
                A switch says that it is a button in its container, the one method of a piece of writing that
                draws its element, and reads whether it is pressed there, in the draw, so it redraws when the
                book changes and nothing else does. How that seam was found, and what was tried before it, is
                told in <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a switch fits the library's patterns</Heading>
            <Paragraph>
                The book I am reading is given the thing in front of what its class already says, and draws
                again; so a view I can switch to is written the same way as a view a book always has, and what a
                book shows before I press anything is said once, by its class, in one line of registration. A
                switch only adds; it cannot take away something the class says itself. And the thing a switch
                says is always an annotation that adds a class — <Means>$[[ a tone ]]( ./The Tone )</Means>, a
                reading, a paper — with the rules that read the class in a theme or a format that is always
                there, so a press changes a class on the book and redraws nothing.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a switch is used</Heading>
            <Paragraph>
                <Means>$[[ The book ]]( ./The Book )</Means> draws no switch of its own, because the
                catalogue has nothing to switch; a type that has something to choose from draws it in its
                switches: the manual its two readings, my story its three papers, the design book its two tones,
                so I can look at them. Every switch is one a reader of that book wants; the outline every book
                once carried was a developer's tool on a reader's page, and it went.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where a switch bites</Heading>
            <Paragraph>
                A Format given through a switch is a container, and a container put in front of the book
                remounts everything inside it — measured on the first tone, and then found on every paper, none
                of which anyone had counted. The rule that follows is the one above: what a
                reader presses adds a class, and the rules were always there.
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
