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
                have said so far, and the decision, or that it is not decided yet. A press on a concept opens its
                card across <Means>$[[ the gallery ]]( ./Every Concept )</Means>, with both of its photographs
                and its code. The two days of choosing are told
                in <Means>$[[ Choosing a Design ]]( Dougs Story / Choosing a Design )</Means>.
            </Paragraph>
            <Paragraph>
                A design is one concept, exactly. Some concepts are a page, with its tools in their places; some
                are a frame, the same page inside a side bar, a top bar, both, or none, each once darker and once
                lighter. Where I have paired a page with a frame, as the shelf under the two bars, that is two
                concepts and not a design, and it is decided again here.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The library's catalogue ]]]</Heading>
            <Paragraph>
                <Question />
                The library's own page, where everything I keep is found from. Which one of these is it?
            </Paragraph>
            <Paragraph>
                The pages: concept <Means>$[[ 1 ]]( ./The Shelf )</Means>,
                concept <Means>$[[ 2 ]]( ./Ask the Sources )</Means>,
                concept <Means>$[[ 3 ]]( ./The Wall )</Means>,
                concept <Means>$[[ 4 ]]( ./The Command Line )</Means> and
                concept <Means>$[[ 5 ]]( ./The Front Page )</Means>.
                The frames, each with this page inside it: concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 12 ]]( ./A Light Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means>,
                concept <Means>$[[ 14 ]]( ./A White Top Bar )</Means>,
                concept <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means>,
                concept <Means>$[[ 16 ]]( ./A White Top Bar and an Opal Side Bar )</Means>,
                concept <Means>$[[ 17 ]]( ./A Black Rail and a Blue Top )</Means>,
                concept <Means>$[[ 18 ]]( ./An Opal Rail and a White Top )</Means>,
                concept <Means>$[[ 19 ]]( ./Two Top Bars: Black, then Sky )</Means>,
                concept <Means>$[[ 20 ]]( ./Two Top Bars: White, then Opal )</Means>,
                concept <Means>$[[ 21 ]]( ./No Bars: White Cards )</Means> and
                concept <Means>$[[ 22 ]]( ./No Bars: White Cards on Black )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I liked the shelf from the start: the book view, with the cover as the landmark that grounds a book.
                When I saw the black and sky I wanted it for the library itself, with its more bookish view, and
                each cataloguing book under it moving into colors of its own. I want to switch the view among 1, 2
                and 3 on the page, because many ways to view the same thing will be important. Then the shelf of 1
                under the black and sky of 19 was built, and it looked nothing like a design: the two header sky
                and dark was never one of them.
            </Paragraph>
            <Paragraph>
                <Decision />
                Not decided. It is for <Means>$[[ Dougs Library ]]</Means>, which has the two bars, the shelf and
                the list until it is.
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
                concept <Means>$[[ 8 ]]( ./The Workbench )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                6 with 8 for a part, yes, though I think we want a way to toggle between code emphasized and
                documentation emphasized. Code doesn't look right unless in full view, so we might want a view where
                we show one write-up on the right side of the code and another that moves the code off to the right,
                but it's mostly there to give the visual sense that it can be expanded out again.
            </Paragraph>
            <Paragraph>
                <Decision />
                The words beside the file as in 6, a part opened alone on the bench as in 8, and a toggle between
                the code forward and the words forward. It is
                for <Means>$[[ Dougs Reference Manual ]]</Means>, which has the words beside the file and the
                toggle. A part opened alone on the bench is not built.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ The design book ]]]</Heading>
            <Paragraph>
                <Question />
                This book, where I look at the concepts and decide. Its page is the gallery I am reading now,
                light and airy, with a toggle between a library mode and a gallery mode. Which frame is it in, and
                in which tone?
            </Paragraph>
            <Paragraph>
                Concept <Means>$[[ 11 ]]( ./A Black Side Bar )</Means>,
                concept <Means>$[[ 12 ]]( ./A Light Side Bar )</Means>,
                concept <Means>$[[ 13 ]]( ./A Black Top Bar )</Means>,
                concept <Means>$[[ 14 ]]( ./A White Top Bar )</Means>,
                concept <Means>$[[ 21 ]]( ./No Bars: White Cards )</Means> and
                concept <Means>$[[ 22 ]]( ./No Bars: White Cards on Black )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                Yeah, how about we keep design light and airy. But no, if the dark sidebar is the thing that makes
                the library memorable, then maybe we have a toggle between library and gallery mode, and gallery
                mode is more white themed with subtle variation, and library mode is more dark themed.
            </Paragraph>
            <Paragraph>
                <Decision />
                Not decided. It is for <Means>$[[ Dougs Design ]]</Means>, which is drawn in the black side bar
                of 11 in library mode and the light side bar of 12 in gallery mode, with the cards of 21, until it
                is.
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
                concept <Means>$[[ 7 ]]( ./The Notebook )</Means>.
            </Paragraph>
            <Paragraph>
                <Answer />
                I like 25, beautiful. We will likely have a bar on top also, in dark perhaps so it isn't so
                noticeable, but I really like it for bookish chapters like the autobiography.
            </Paragraph>
            <Paragraph>
                <Decision />
                The reading view of 25: one typeset sheet, a chapter at a time, likely under a dark bar on top. It
                is a story about me and what I create, a narrative slice of the library that helps to navigate
                everything we have built, so that it is the most relevant place to begin from. Its chapters are
                annotated by date and time, and it is to have a view that sorts them for recency. It was also very
                hard to get to from another book, so every book now carries my name as a way to it. It is
                for <Means>$[[ Dougs Story ]]</Means>, which has the sheet, its type and its three papers. The view
                that sorts by recency is not built.
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
                The table of 9 under the white and opal bars of 20, with a splash of the Claude theme. No book of
                mine holds this yet.
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
