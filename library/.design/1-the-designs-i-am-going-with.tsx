import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Question, Answer, Decision } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Designs I Am Going With ]]</Title>
        <Section>
            <Heading>One for each kind of book</Heading>
            <Paragraph>
                This is where the design of each kind of book in my library is decided, this book among them.
                Under each kind is what I come to the book to do, the concepts that could be its design, what I
                have said, and the decision. A press on a concept opens its card
                across <Means>$[[ the gallery ]]( ./Every Concept )</Means>, with both of its photographs and
                its code. The two days of choosing are told
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
                A top bar on every screen and a side bar on most: the arrangements of 15 and 16, and of 23 with
                perhaps a white bar, all supported, with the dark side bar as the default. The colors of the top
                bar, the side bar and the logo are values a book sets, so 26 and 27 are two settings of them and
                not a choice between them. Each book has a color of its own.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The library's catalogue ]]]</Heading>
            <Paragraph>
                <Question />
                The library's own page, where everything I keep is found from. Which one of these is it?
            </Paragraph>
            <Paragraph>
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
                The shelf of 1, inside the frame, with views that feel like 2 and 3 to come. It is
                for <Means>$[[ Dougs Library ]]</Means>, which has the two bars, the shelf and the list until it
                is rebuilt.
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
                is more than just a code reader. It is the thing you read to learn how to use the code.
            </Paragraph>
            <Paragraph>
                <Decision />
                6, with two readings of one chapter as 28 and 31 sketch them: the code in front with its own
                line above it, and the words in front as a substantive write-up with the file folded to a strip.
                Not decided until I have seen them. It is for <Means>$[[ Dougs Reference Manual ]]</Means>,
                which has the words beside the file and a toggle until then.
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
                its other options. It is for <Means>$[[ Dougs Design ]]</Means>, which is drawn in the side bar
                of 11 and 12 with the cards of 21 until the frame is built.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ My autobiography ]]]</Heading>
            <Paragraph>
                <Question />
                A story about me and what I create, read a chapter at a time. Which one of these is it?
            </Paragraph>
            <Paragraph>
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
                designs, and I need to click on a design and see it full screen; I can barely see these.
            </Paragraph>
            <Paragraph>
                <Decision />
                The reading view of 25, under the frame's top bar; how the book is navigated, with or without its
                table in the side bar, is sketched as options in this book and decided here. It is a story about
                me and what I create, a narrative slice of the library that helps to navigate everything we have
                built, so that it is the most relevant place to begin from. Its chapters are annotated by date and
                time, and it is to have a view that sorts them for recency. It is
                for <Means>$[[ Dougs Story ]]</Means>, which has the sheet, its type and its three papers.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The Claude project catalogue ]]]</Heading>
            <Paragraph>
                <Question />
                My Claude projects, across all of them. Which one of these is it?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 9 ]]( ./The Database )</Means>,
                concept <Means>$[[ 10 ]]( ./The Map )</Means>,
                concept <Means>$[[ 20 ]]( ./Two Top Bars: White, then Opal )</Means> and
                concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                9 under white and opal. The white and then opal of 20 looks really good, and it made me think I may
                not want quite so much of the dark. The opal is to be used carefully, as a kind of annotation, and
                a splash of the Claude theme says that this view is Claude's projects.
            </Paragraph>
            <Paragraph>
                <Decision />
                The table of 9, with a splash of the Claude theme, inside the frame. No book of mine holds this
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
                Concept <Means>$[[ 23 ]]( ./A Conversation, in the Black Side Bar )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                Yes, 23, though we might vary the color scheme based on project, but start assuming the dark
                sidebar. That theme looks nice.
            </Paragraph>
            <Paragraph>
                <Decision />
                23: the conversation in the black side bar, in the form of the application it comes from. The
                artifacts and the code blocks come from there. No book of mine holds this yet.
            </Paragraph>
        </Section>
    </Chapter>
);
