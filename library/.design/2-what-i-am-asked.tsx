import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Question, Answer } from './.book';

export default () => (
    <Chapter>
        <Title>[[ What I Am Asked ]]</Title>
        <Section>
            <Heading>By letter</Heading>
            <Paragraph>
                Each question here has a letter, and is about the numbered concepts linked under it. I answer by
                the letter, in my own words, and what I say is written under the question. The questions whose
                answers became a decision are closed, and the decision stands
                in <Means>$[[ The Designs I Am Going With ]]( ./The Designs I Am Going With )</Means>; what is
                left here is what I have answered and not yet decided.
            </Paragraph>
        </Section>
        <Section>
            <Heading>C · The ways to read one subject</Heading>
            <Paragraph>
                <Question />
                A subject's page can be read many ways. Which of these become views I switch between on one subject,
                and which go: the shelf of covers in 1, the list of sources in 2, the wall in 3, the front page in
                5, the table in 9, the map in 10?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 1 ]]( ./The Shelf )</Means>,
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>,
                concept <Means>$[[ 3 ]]( ./The Wall )</Means>,
                concept <Means>$[[ 5 ]]( ./The Front Page )</Means>,
                concept <Means>$[[ 9 ]]( ./The Database )</Means> and
                concept <Means>$[[ 10 ]]( ./The Map )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                The shelf, the table and the map are all good for different catalogues. We have the across Claude
                projects catalogue, and then we have the conversations per project catalogue, and we have the
                library catalogue. These should all look like different things, and I am inclined to choose between
                them. I really like the UI of the checked version in 2, the light and airy feel. But so much of that
                user interface is interactive, where one selects their books. I want those features, but we need to
                imagine things based on the set of features we want in each interaction. For the library's own
                catalogue I like the shelf, but can we consider implementing it in a way where we can dynamically
                change the view? Dynamic view change is proof that we are coding the semantics and annotating the
                semantic structure with what is necessary for the view. For the catalogue across projects I like 9
                the best, and I might even like a splash of the Claude theme to delineate that this view is Claude
                projects. And I think we need to think hard about the project view. This is where we might even want
                to have some form of search that we configure. We will also want some color and icon-based theming
                to indicate what project we are on. I like the different views to comprehend the conversations, by
                recency, by conversation size, and maybe others, and perhaps we can annotate the conversations and
                this can help us build the view. A good use for the synopsis of a conversation might be surfacing
                the information that the project catalogue needs.
            </Paragraph>
        </Section>
        <Section>
            <Heading>D · What a cover's color says</Heading>
            <Paragraph>
                <Question />
                In 11 every book has a color of its own, and the color means nothing. In 1 the projects have colors
                and the covers nearly follow them. Should a cover's color say something, its project, its subject,
                who the conversation was with, or stay the book's own?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 1 ]]( ./The Shelf )</Means> and
                concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I will choose colors based on my synaesthetic preferences. I also think we want some form of cover
                art, and the cover art perhaps for the library can be the logo of the library. Perhaps the cover art
                is simply the logo of the book, and we just have a progressive logo.
            </Paragraph>
        </Section>
        <Section>
            <Heading>E · Where I am</Heading>
            <Paragraph>
                <Question />
                Where am I on the screen: a card at the foot of the bar as in 11, the end of the top bar as in 13,
                or only a face as in 17? And is the orange right for me, under my name and on my turns in 23?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means>,
                concept <Means>$[[ 17 ]]( ./A Black Rail and a Blue Top )</Means> and
                concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>F · What stands at the right</Heading>
            <Paragraph>
                <Question />
                In 11 and 23 the right side holds what the page cites, what cites it and my notes. In 2 it holds
                what was made from the sources. Is that column always there or opened when wanted, and what belongs
                in it?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means> and
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
