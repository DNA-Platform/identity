import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Book ]]</Title>
        <Section>
            <Heading>What a book is here</Heading>
            <Paragraph>
                Every book in this library extends one class, so what a book is here is said once. A book of mine
                holds chapters and nothing else. The class says so in its specification, and the bind holds every
                book to it.
            </Paragraph>
            <Paragraph>
                Left to itself, the class writes the chapters down the page in the order of their files. A chapter
                may append a file kept beside it, and under each chapter the class prints the files it appends,
                each as <Means>$[[ a listing ]]( ./The Listing )</Means>. A book that wants its parts somewhere else on
                the screen is a class under this one, and writes them there.
            </Paragraph>
            <Paragraph>
                This manual's book file is where every other book takes the class from.
                And <Means>$[[ the theme ]]( ./The Theme )</Means> is registered on the class, once, so every
                book gets it.
            </Paragraph>
            <Paragraph>
                For now every book also shows <Means>$[[ its outline ]]( ./The Outline )</Means>. That is there
                while the structure is being built, and it comes off when there is a switch for it.
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
