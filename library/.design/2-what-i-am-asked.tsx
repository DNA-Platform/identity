import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Asked, Said } from './.book';

export default () => (
    <Chapter>
        <Title>[[ What I Am Asked ]]</Title>
        <Section>
            <Heading>By letter</Heading>
            <Paragraph>
                Each question here has a letter, and is about the numbered concepts linked under it. I answer by
                the letter, in my own words, and what I say is written under the question.
            </Paragraph>
        </Section>
        <Section>
            <Heading>E · Where I am</Heading>
            <Paragraph>
                <Asked />
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
                <Asked />
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
        <Section>
            <Heading>H · The library's catalogue</Heading>
            <Paragraph>
                <Asked />
                For the library's own catalogue I chose the shelf of 1, and spoke of black and sky for the library
                itself, as in 19. Is the library's page the shelf of 1 under the two bars of 19, under the white and
                opal of 20, or the shelf as it stands in 1? And what do I come to this page to do?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 1 ]]( ./The Shelf )</Means>,
                concept <Means>$[[ 19 ]]( ./Two Top Bars: Black, then Sky )</Means> and
                concept <Means>$[[ 20 ]]( ./Two Top Bars: White, then Opal )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                Yes, and I like the black and sky, though I think I want to be able to switch the view between 1 to
                3 as part of the dynamism of the page. We will talk about how to implement a book, and you will find
                that you might want to do more structurally than you expect to support many different views. Many
                ways to view the same thing will be important.
            </Paragraph>
        </Section>
        <Section>
            <Heading>I · The reference manual</Heading>
            <Paragraph>
                <Asked />
                A reference manual shows a chapter and the file it is about. Which is nearest: the words beside the
                file as in 6, the column of cells as in 7, the part on a bench with its properties as in 8? And what
                do I come to a manual to do: read it through, look up a part, copy its code?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 6 ]]( ./Side by Side )</Means>,
                concept <Means>$[[ 7 ]]( ./The Notebook )</Means> and
                concept <Means>$[[ 8 ]]( ./The Workbench )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                6 with 8 for a part, yes, though I think we want a way to toggle between code emphasized and
                documentation emphasized. Code doesn't look right unless in full view, so we might want a view where
                we show one write-up on the right side of the code and another that moves the code off to the right,
                but it's mostly there to give the visual sense that it can be expanded out again. Something like
                that.
            </Paragraph>
        </Section>
        <Section>
            <Heading>J · The design book</Heading>
            <Paragraph>
                <Asked />
                The design book is the book I am reading now: a dark rail with its index, the questions I am asked,
                the numbered concepts, a card that opens across the whole screen. Is this its design, and what would
                I change in it?
            </Paragraph>
            <Paragraph>
                <Said />
                Yeah, how about we keep design light and airy. But no, if the dark sidebar is the thing that makes
                the library memorable, then maybe we have a toggle between library and gallery mode, and gallery
                mode is more white themed with subtle variation, and library mode is more dark themed.
            </Paragraph>
        </Section>
        <Section>
            <Heading>K · My autobiography</Heading>
            <Paragraph>
                <Asked />
                My own account can be more of a bookish view. I pointed at the algebra of perspective in the
                original demo, with its dark and light theme and its simple reading view, and 25 is that view drawn
                again for my story. Is 25 it, and on which paper: the demo's book, its night, or the plain white? Or
                is the title page of 24 nearer, the front page of 5, the reading column of 7?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 25 ]]( ./The Reading View )</Means>,
                concept <Means>$[[ 24 ]]( ./The Title Page )</Means>,
                concept <Means>$[[ 5 ]]( ./The Front Page )</Means> and
                concept <Means>$[[ 7 ]]( ./The Notebook )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                I like 25, beautiful. We will likely have a bar on top also, in dark perhaps so it isn't so
                noticeable, but I really like it for bookish chapters like the autobiography.
            </Paragraph>
        </Section>
        <Section>
            <Heading>L · The Claude project catalogue</Heading>
            <Paragraph>
                <Asked />
                Conversations with Claude holds my Claude projects. I chose the table of 9 with a splash of the
                Claude theme. Does it sit under the white and opal bars of 20, beside the black side bar of 11, or
                as it stands in 9? And what is a project on this page: a row, a cover with its mark, a region as in
                10?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 9 ]]( ./The Database )</Means>,
                concept <Means>$[[ 20 ]]( ./Two Top Bars: White, then Opal )</Means>,
                concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means> and
                concept <Means>$[[ 10 ]]( ./The Map )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                9 under white and opal.
            </Paragraph>
        </Section>
        <Section>
            <Heading>M · A project's conversation catalogue</Heading>
            <Paragraph>
                <Asked />
                One for each project, and the one to think hard about. Which is nearest to begin from: the table of
                9, the light and airy list of 2, the shelf of 1, the map of 10 by size? And what do I need there
                first: a search I configure, the views by recency and by size, my annotations on each conversation,
                each conversation's synopsis?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 9 ]]( ./The Database )</Means>,
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>,
                concept <Means>$[[ 1 ]]( ./The Shelf )</Means> and
                concept <Means>$[[ 10 ]]( ./The Map )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                I think we want to start with a multi-view. We will have to write an importer, and we will likely
                have to add annotations. So let's think about the types of ways we want to enable interaction with
                the data. In Claude, the simplest way is just a downward list of conversations. And we will probably
                want to do something with importing information from the synopsis of each conversation to help give
                a sense for what it is about. Maybe we will annotate conversations by topic. So let's not think too
                much about the conversation view yet, because we will have to build the importer. Of what the first
                version needs: the views by recency and size, and each one's synopsis. The search might make more
                sense in the front of Claude. Let's annotate like we will create a search and need some form of
                indexing, but not do it in version 1.
            </Paragraph>
        </Section>
        <Section>
            <Heading>N · A Claude conversation</Heading>
            <Paragraph>
                <Asked />
                It will look a lot like a Claude conversation. Is 23 it: the black side bar holding the chapters, my
                turns in my color, what the chapter cites and my notes at the right? What is missing from it, and
                what should go?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                Yes, 23, though we might vary the color scheme based on project, but start assuming the dark
                sidebar. That theme looks nice.
            </Paragraph>
        </Section>
        <Section>
            <Heading>A · Where the frame goes</Heading>
            <Paragraph>
                <Asked />
                Where does the library's frame go: a side bar as in 11, a top bar as in 13, both as in 15, a narrow
                rail as in 17, two top bars as in 19, or none as in 21? More than one may stay, if different kinds
                of page want different frames.
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means>,
                concept <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means>,
                concept <Means>$[[ 17 ]]( ./A Black Rail and a Blue Top )</Means>,
                concept <Means>$[[ 19 ]]( ./Two Top Bars: Black, then Sky )</Means> and
                concept <Means>$[[ 21 ]]( ./No Bars: White Cards )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                The side bar, yes: we like it for this design we are converging on, though let's explore other
                options too. The top bar too, and I'd like to explore a version that has them both. Might the top
                bar be a version of the cover and the side bar be a version of the table of contents? I do want to
                explore that more, because they might be good things to think about as the meaning of the cover and
                table of contents. For the narrow rail, we might like something collapsible in cases where screen
                real estate could be useful, so let's keep them all in mind. I also want to see designs that are
                quite different before converging on exactly this. Of two top bars and the white cards, it is hard
                to say. The white and then opal looks really good. A clean white theme with the dark logo makes me
                start to think that maybe I don't want quite so much of the dark. The opal is interesting too, and
                while we would need to use that effect carefully, I like it as a type of annotation.
            </Paragraph>
        </Section>
        <Section>
            <Heading>B · Darker or lighter</Heading>
            <Paragraph>
                <Asked />
                Is the soft black the library's own, as in 11 and 13, with the lighter of each a thing I may switch
                to, as in 12 and 14? Or the other way round? Or does it depend on the page?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 12 ]]( ./A Light Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means> and
                concept <Means>$[[ 14 ]]( ./A White Top Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                It depends on the page for sure. Maybe I like the black and sky for the library itself, with its
                more bookish view, and then moving into different color themes for each cataloguing book. We do
                truly want the different parts of the app, in some ways, to feel like different apps, and that can
                even mean the top bar has different colors and an evolving logo.
            </Paragraph>
        </Section>
        <Section>
            <Heading>C · The ways to read one subject</Heading>
            <Paragraph>
                <Asked />
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
                <Said />
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
                <Asked />
                In 11 every book has a color of its own, and the color means nothing. In 1 the projects have colors
                and the covers nearly follow them. Should a cover's color say something, its project, its subject,
                who the conversation was with, or stay the book's own?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 1 ]]( ./The Shelf )</Means> and
                concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Said />
                I will choose colors based on my synaesthetic preferences. I also think we want some form of cover
                art, and the cover art perhaps for the library can be the logo of the library. Perhaps the cover art
                is simply the logo of the book, and we just have a progressive logo.
            </Paragraph>
        </Section>
    </Chapter>
);
