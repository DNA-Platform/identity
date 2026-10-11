import { Append, Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>How this book is built</Part>
        <Spread />
        <Title>[[ The Portfolio ]]</Title>
        <Section>
            <Heading>What this book keeps for itself</Heading>
            <Paragraph>
                This book is a portfolio, the type of book that records how a library came to look the way it
                does, and its book file says that in one line. What a portfolio is made of stands in the
                reference manual so that another can be made the same way: the type of book and its look, the
                Exhibition, in <Means>$[[ The Portfolio ]]( Dougs Reference Manual / The Portfolio )</Means>;
                the vocabulary its chapters are written in, <Means>$[[ The Paragraphs ]]( Dougs Reference Manual / The Paragraphs )</Means> and <Means>$[[ The Concept ]]( Dougs Reference Manual / The Concept )</Means>;
                the views its parts are read in, <Means>$[[ The Gallery ]]( Dougs Reference Manual / The Gallery )</Means> and <Means>$[[ The Room ]]( Dougs Reference Manual / The Room )</Means>;
                and its two tools, <Means>$[[ The Camera ]]( Dougs Reference Manual / The Camera )</Means> and <Means>$[[ The Print ]]( Dougs Reference Manual / The Print )</Means>.
            </Paragraph>
            <Paragraph>
                What is only this book's is beside its chapters: its cover, with the blueprint scheme the
                Exhibition paints from and the window its mark is cut through; every concept's page with its
                three photographs; the three pages designed from prints; and the chapters themselves, which are
                mine. Its book file is one line, that this book is a portfolio, and that is the whole of its
                code.
            </Paragraph>
        </Section>
    </Chapter>
);
