import { Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Answer, Decision, Question, Strip } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>The story</Part>
        <Title>[[ Choosing by number ]]</Title>
        <Section>
            <Heading>One for each type of book</Heading>
            <Paragraph>
                This is where the design of each type of book in my library is decided, this book among them.
                Under each type is what I come to the book to do, the concepts that could be its design, what I
                have said, and the decision. A press on a concept opens its card
                across <Means>$[[ the gallery ]]( ./Every Concept )</Means>, with its photographs and its code. The two days of choosing are told
                in <Means>$[[ Choosing a Design ]]( Dougs Story / Choosing a Design )</Means>; the fact check of
                the whole page, by number, was done on 6 October.
            </Paragraph>
            <Paragraph>
                A design is a page from the concepts, inside the frame below. Where a book needs a view no
                concept draws, it is sketched in this book first, as a new concept with a number, and decided
                here before anything is built. The numbers are for speaking of the concepts; nothing in the
                code is labelled by a number, because similar concepts have to be shown together and a number
                says nothing of what a thing is.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The frame on every screen ]]]</Heading>
            <Paragraph>
                <Question />
                The frame is on every screen: the library's own bar, and under it the open book's cover and
                table of contents. Which arrangement is it, and in which tone?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means>,
                concept <Means>$[[ 16 ]]( ./A White Top Bar and an Opal Side Bar )</Means> and
                concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>; sketched after
                the answer, concept <Means>$[[ 26 ]]( ./A White Top Bar and a Black Side Bar )</Means> and
                concept <Means>$[[ 27 ]]( ./A Black Top Bar and a Black Side Bar )</Means>. The other frames:
                concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 12 ]]( ./A Light Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means>,
                concept <Means>$[[ 14 ]]( ./A White Top Bar )</Means>,
                concept <Means>$[[ 17 ]]( ./A Black Rail and a Blue Top )</Means>,
                concept <Means>$[[ 18 ]]( ./An Opal Rail and a White Top )</Means>,
                concept <Means>$[[ 19 ]]( ./Two Top Bars: Black, then Sky )</Means>,
                concept <Means>$[[ 20 ]]( ./Two Top Bars: White, then Opal )</Means>,
                concept <Means>$[[ 21 ]]( ./No Bars: White Cards )</Means> and
                concept <Means>$[[ 22 ]]( ./No Bars: White Cards on Black )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I think we always want a top bar on every screen and probably a sidebar on most, and then will
                often represent the cover and table of contents. I like 15 / 16 and 23, but 23 perhaps with a
                white bar. Since we are going to be color fluid, we have to support all of these easily, because
                we will be augmenting the color palette. Each book will have a color. I think you can make the
                dark sidebar the default, but we don't know how to integrate the top with the dark sidebar yet.
                Shown 26 and 27: we need this to be color fluid. So we can try black and black, and white and
                black, but make it configurable. We need the logo too, and we need that color configurable as
                well.
            </Paragraph>
            <Paragraph>
                <Decision />
                A top bar on every screen and a side bar on most: the arrangements
                of <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means> and <Means>$[[ 16 ]]( ./A White Top Bar and an Opal Side Bar )</Means>,
                and of <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means> with
                perhaps a white bar, all supported, with the dark side bar as the default. The colors of the top
                bar, the side bar and the logo are values a book sets, so 26 and 27 are two settings of them and
                not a choice between them. Each book has a color of its own. Where it
                is: <Means>$[[ every book wears the frame as both bars, drawn once by the base ]]( Dougs Reference Manual / The Book )</Means>, <Means>$[[ the one grid of the frame, the top bar over the side bar ]]( Dougs Reference Manual / The Layout )</Means>, <Means>$[[ the three tones, dark by default ]]( Dougs Reference Manual / The Tone )</Means>, and <Means>$[[ each book's colour, said on the shelf and in its theme ]]( Dougs Reference Manual / The Colour )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The library catalogue ]]]</Heading>
            <Paragraph>
                <Question />
                The library's own page, where everything I keep is found from. Which one of these is it?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 1 ]]( ./The Shelf )</Means>,
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>,
                concept <Means>$[[ 3 ]]( ./The Wall )</Means>,
                concept <Means>$[[ 4 ]]( ./The Command Line )</Means> and
                concept <Means>$[[ 5 ]]( ./The Front Page )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I liked the shelf from the start: the book view, with the cover as the landmark that grounds a book.
                I want to switch the view on the page, because many ways to view the same thing will be important.
                So 1, with support for things that feel more like 2 and 3. But we also have to figure out our top
                bar and side bar, and we will be changing the color scheme for different books. It is important
                that we standardize the look. Those are the high level designs. The shelf of 1 under the two bars
                of 19 was built once, and I never approved a two-bar design.
            </Paragraph>
            <Paragraph>
                <Decision />
                The shelf of <Means>$[[ 1 ]]( ./The Shelf )</Means>, inside the frame, with views that feel like 2 and 3 to come. Where it
                is: <Means>$[[ the catalogue shows 1's shelf of covers in each book's colour, inside the frame, with the list as its second view ]]( Dougs Library )</Means>;
                the views of 2 and 3 are not built.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The reference manual ]]]</Heading>
            <Paragraph>
                <Question />
                A chapter and the file it is about, seen together, and a way among the parts. Which one of these is
                it?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 6 ]]( ./Side by Side )</Means>,
                concept <Means>$[[ 7 ]]( ./The Notebook )</Means> and
                concept <Means>$[[ 8 ]]( ./The Workbench )</Means>; sketched after the answer,
                concept <Means>$[[ 28 ]]( ./The Code in Front )</Means> and
                concept <Means>$[[ 31 ]]( ./The Words in Front )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                6 for most of it, but we need an interaction where the code is in front and the documentation is
                around it, and perhaps some ability to toggle to the documentation, with the ability to expand
                out the code again. When the code is showing, it needs to look like the thing being viewed. Code
                as a sidebar doesn't look right to anyone. So yes, this design, but we have to fix problems first.
                Shown 28: we need the code in the top to be different to the text you see when you collapse the
                code. We need someone to be able to write something substantive, because the reference manual
                is more than just a code reader. It is the thing you read to learn how to use the code. Seen
                full size: yes, 28 and 31, and make a nice transition between the code view and the writing
                view if it can be expressed annotatively and elegantly. All writing in the code view is
                different, with a much smaller synopsis.
            </Paragraph>
            <Paragraph>
                <Decision />
                <Means>$[[ 6 ]]( ./Side by Side )</Means>, read two ways as <Means>$[[ 28 ]]( ./The Code in Front )</Means> and <Means>$[[ 31 ]]( ./The Words in Front )</Means>:
                the code in front with a much smaller synopsis of its own above
                it, and the words in front as a substantive write-up with the file folded to a strip, with a
                transition between them. Where it
                is: <Means>$[[ the manual reads as 28 and 31, code first or words first, switched at its head ]]( Dougs Reference Manual / The Manual )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The design book ]]]</Heading>
            <Paragraph>
                <Question />
                This book, where I look at the concepts and decide. Its page is the gallery I am reading now.
                Which frame is it in, and in which tone?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 12 ]]( ./A Light Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means>,
                concept <Means>$[[ 17 ]]( ./A Black Rail and a Blue Top )</Means> and
                concept <Means>$[[ 21 ]]( ./No Bars: White Cards )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I think we liked the idea of the white theme as the default, and maybe white will be the color of
                the design book, but then the black sidebar and the blue with the black top are other options. We
                need to get these basic views.
            </Paragraph>
            <Paragraph>
                <Decision />
                White is this book's color, in the frame; the black side bar and the blue with the black top are
                its other options. Where it
                is: <Means>$[[ this book wears the frame in the light tone, with the cards of 21 in its gallery and every arrangement and tone as a tab ]]( Dougs Reference Manual / The Portfolio )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ My autobiography ]]]</Heading>
            <Paragraph>
                <Question />
                A story about me and what I create, read a chapter at a time. Which one of these is it?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 25 ]]( ./The Reading View )</Means>,
                concept <Means>$[[ 24 ]]( ./The Title Page )</Means>,
                concept <Means>$[[ 5 ]]( ./The Front Page )</Means> and
                concept <Means>$[[ 7 ]]( ./The Notebook )</Means>; sketched after the answer,
                concept <Means>$[[ 29 ]]( ./The Reading View, in the Frame, with the Chapters at the Side )</Means> and
                concept <Means>$[[ 30 ]]( ./The Reading View, in the Frame, with the Chapters at the Foot )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                Yeah, 25, but the idea was that it would be integrated, likely with a top bar, probably with
                different options. These things need to be unified into one style, and that is some of the work
                left to be done. I would need to see options. Is the table in the sidebar? Definitely a top bar.
                We need to find a solution to navigate the book. Shown 29 and 30 as cards: you need to show me
                designs, and I need to click on a design and see it full screen; I can barely see these. Seen
                full size: 29 is nice.
            </Paragraph>
            <Paragraph>
                <Decision />
                <Means>$[[ 29 ]]( ./The Reading View, in the Frame, with the Chapters at the Side )</Means>: the reading view of 25 under the frame's top bar, the chapters down the side bar with the
                open one lit, the papers above the sheet, the turn at its foot. It is a story about
                me and what I create, a narrative slice of the library that helps to navigate everything we have
                built, so that it is the most relevant place to begin from. Its chapters are annotated by date and
                time, and it is to have a view that sorts them for recency. It is
                for my story. Where it
                is: <Means>$[[ my story reads as 29, the sheet of 25 under the white bar over the black side, its chapters at the side ]]( Dougs Story / The Sheet )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The Claude project catalogue ]]]</Heading>
            <Paragraph>
                <Question />
                My Claude projects, across all of them. Which one of these is it?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 9 ]]( ./The Database )</Means>,
                concept <Means>$[[ 10 ]]( ./The Map )</Means>,
                concept <Means>$[[ 20 ]]( ./Two Top Bars: White, then Opal )</Means> and
                concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                9 under white and opal. The white and then opal of 20 looks really good, and it made me think I may
                not want quite so much of the dark. The opal is to be used carefully, as a sort of annotation, and
                a splash of the Claude theme says that this view is Claude's projects.
            </Paragraph>
            <Paragraph>
                <Decision />
                The table of <Means>$[[ 9 ]]( ./The Database )</Means>, with a splash of the Claude theme, inside the frame. No book of mine holds this
                yet.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A project's conversation catalogue ]]]</Heading>
            <Paragraph>
                <Question />
                One for each project, and the one to think hard about. Which one of these is nearest to begin
                from?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 9 ]]( ./The Database )</Means>,
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>,
                concept <Means>$[[ 1 ]]( ./The Shelf )</Means> and
                concept <Means>$[[ 10 ]]( ./The Map )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I think we want to start with a multi-view. We will have to write an importer, and we will likely
                have to add annotations. In Claude, the simplest way is just a downward list of conversations. Of
                what the first version needs: the views by recency and size, and each one's synopsis. Let's
                annotate like we will create a search and need some form of indexing, but not do it in version 1.
            </Paragraph>
            <Paragraph>
                <Decision />
                A multi-view that begins as a plain list downward, with views by recency and by size and each
                conversation's synopsis. It is not drawn yet, and no book of mine holds it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ A Claude conversation ]]]</Heading>
            <Paragraph>
                <Question />
                One conversation, in the form of the application it comes from. Is 23 it?
            </Paragraph>
            <Paragraph>
                <Strip />
                Concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                Yes, 23, though we might vary the color scheme based on project, but start assuming the dark
                sidebar. That theme looks nice.
            </Paragraph>
            <Paragraph>
                <Decision />
                <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>: the conversation in the black side bar, in the form of the application it comes from. The
                artifacts and the code blocks come from there. No book of mine holds this yet.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Still asked</Heading>
            <Paragraph>
                The questions below were put to me by letter in the same days and have no decision yet; what I said
                stands under each.
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
                <Strip />
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
                <Strip />
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
                <Strip />
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
                <Strip />
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means> and
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
