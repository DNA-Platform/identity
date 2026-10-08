import { Append, Chapter, Heading, Image, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Manual's Page ]]</Title>
        <Section>
            <Heading>What I come to the manual for</Heading>
            <Paragraph>
                The reference manual is the book I build the library with: one chapter to a part, the code that
                is the part beside the chapter that says what it is and how it is used. I come to its page to
                find a part, read what it is, and read its code without leaving the words — or to read the
                code first and the words beside it, which is the other way round. So the page is a chapter and
                its files, read two ways: words forward, where the chapter is the page and its files stand by;
                and code forward, where the file is the page and the chapter is a brief beside it. I decided
                that in the sketch phase — <Means>$[[ the manual read two ways ]]( ./The Designs I Am Going With )</Means> —
                and the switch between them is a thing said of the book, already built; what the page decides
                is how each reading looks and how one becomes the other.
            </Paragraph>
            <Paragraph>
                The page beside this chapter is the manual's own print — every chapter, every brief, every
                file, the framework's names on every element — made by <Means>$[[ The Print ]]( ./The Print )</Means> and
                opened from the file. It begins as the manual looks today, set in the frame
                that <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> decided: the bar is the cover, with
                the library's mark as the subject I am filed under, my mark and my name, and my author; the
                contents stand down the side. From there it is changed one thing at a time, and what I decide
                is written here in my words, as it was for the bookshelf.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What I decided on the page, in order</Heading>
            <Paragraph>
                The two marks stand next to each other, almost like characters, a small space between; resting on
                the subject's mark shows the logo of the page a press will go to — the library's mark alone and
                its name in its ink — with a transition worth watching. The form is utilitarian, a code
                documentation platform's: the words run wide, the index is a file tree with collapsible levels and
                marks that help a reader understand, tight enough to scale to a codebase, and the fonts blend the
                bookshelf's into it — the serif where the library's identity lives, the sans where the manual works.
                Clicking the code expands it; most of a desk's screen was wasted, so the code and the words now share it.
            </Paragraph>
            <Paragraph>
                The transitions of colour, subtle; the moments of drop shadow, pulled back; little moments of nuance
                at the edge of perception, while the highest-level percept stays elegant and ordinary, the magic a
                slight feeling. The near-white bars relate differently on different sides of the page, and that
                stays. The code shows its black on the right; a press docks it as a tab left against the side bar,
                as in an editor, and if the words are anywhere they are on the right. Three states, and one toggle is
                the affordance each time, with a hint of the thing it expands. Syntax highlighting for as many
                languages as possible, and options for how code is viewed.
            </Paragraph>
            <Paragraph>
                Every piece of code has a mark that grounds it in a design and a colour: one of seven kinds, each a
                shape and a colour, so related code looks related, with a key. The marks have the same square feel as
                the site's, as if of a type — a statement about what it means for something to have a visual
                representation — slightly utilitarian, somewhat abstract, always at the left. The mark belongs to the
                chapter as well as to its files. The groups of the contents no longer read as sentences foreign to a
                tree: a folder's mark and its own words.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The page, built</Heading>
            <Paragraph>
                <Image>![[ built-words.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The manual on 4242 the same day, carried from this page in the order the page's own script does
                things, each piece measured as it landed. The bar first, as every book's: a cover holds the cover
                of the book it is filed under, and the base book draws the logo from the two, the subject's mark,
                the book's own mark and the two names, one waiting under the other; it is
                in <Means>$[[ The Cover ]]( Dougs Reference Manual / The Cover )</Means>, and the catalogue gave
                back what it had drawn alone. Then the index as a tree: a folder is said of each section of the
                table by the manual at bind, its layer drawing the twist and the folder's mark before the heading;
                a twist is a switch whose press folds the section or the chapter's row it stands on, and the key
                is said folded in the table itself; a chapter's files stand beneath it as presses, each a file,
                which opens the chapter and the file in the split. All of that is
                in <Means>$[[ The Entry ]]( Dougs Reference Manual / The Entry )</Means> and <Means>$[[ The Listing ]]( Dougs Reference Manual / The Listing )</Means>.
            </Paragraph>
            <Paragraph>
                <Image>![[ built-split.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The leaf's three states are the manual's three readings, words forward, split and code forward,
                annotations of one kind on the book that a press switches, and the spread lays the leaf as a grid
                in each: the words wide with the rail at the edge; the words beside the panel with the editor's
                tab bar at its head, the file's tabs, the words tab, the dock and the options; and the panel across
                the page with the grip at the edge. The open file is the book's, named by whichever press chose
                it, and the opened listing wears it. The options, light code, wrapping and line numbers, are three
                more things said of the book, each a switch. It is all
                in <Means>$[[ The Manual ]]( Dougs Reference Manual / The Manual )</Means>, the type of book another
                subject's manual extends in one line.
            </Paragraph>
            <Paragraph>
                <Image>![[ built-full.png ]]</Image>
            </Paragraph>
            <Paragraph>
                What the port found, measured, and changed. A hover written as a state on the logo blocked the
                page for 1,794 milliseconds, because a child's state redraws the whole book and the book's redraw
                re-walked every chapter for every entry and icon; the book now indexes its places once at bind,
                the redraw is 767 milliseconds, the same as any press, and the hover is a field on the logo, written true when the
                pointer enters the subject's mark and false when it leaves the logo, by handlers the logo says in its
                container, and said as a class by an annotation, so the subject stays unfolded while the pointer
                crosses to its name and the name is its link, with nothing in the logo that is React's. A press that compared what an earlier press had put into the book with the reading
                it had imported worked once and then never, because the imported component is a factory and the
                component a press passes is the instance's own, one object per instance; so every press in the
                manual is a noun that compares what came through its props with what came through its props, as
                the tab always did, and the rule is written down. Then the audit, on my word that the marks were
                pressed together and the gradients and the nuance were missing: one probe read the same forty
                properties on this page and on the built manual, and every difference had a cause in the
                sheet, a rule of the port losing to a base rule that came later or bound tighter, a selector
                naming the wrong sibling, the wash on the page's body and on nothing of the book; mended, the bar,
                the side bar and the words measure as the page's. And the fold's slowness, profiled: a press on a
                folder's twist makes the whole book render again from its root, three seconds in the dev serve
                and three quarters of one in the build, most of it React and the framework redrawing what did not
                change and the code figure highlighting every file again. That is a finding about the framework,
                written up for the pitch list, not something the page can fix, and the framework fixed it the next day; what that uncovered is
                under the switch, below. The names changed with the port: the marks and the name in the bar
                are the logo, since a masthead is a part of a boat. What is not carried: the presses for a chapter's
                files under its title, which wait on a face for the title. The chapters themselves did not change
                beyond the one line that says their kind.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The key, built</Heading>
            <Paragraph>
                <Image>![[ key-table.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The marks were the first thing carried from the page into the manual, the same day, on my
                word that there might be a pattern for them: a resource file in the appendix that a chapter
                imports as a reference. There is, and it is the cover's pattern turned on kinds. The page's
                seven glyphs and its lookup from a chapter's name to its kind became an appendix section of
                the manual's table, the key, with one chapter per kind holding its drawing and its colour,
                and a kind said in each chapter as a reference to its entry. It is built
                in <Means>$[[ The Key ]]( Dougs Reference Manual / The Key )</Means>, with the code beside
                that chapter, and the entries are its seven neighbours,
                from <Means>$[[ A Type of Book ]]( Dougs Reference Manual / A Type of Book )</Means> to <Means>$[[ A Tool ]]( Dougs Reference Manual / A Tool )</Means>;
                how a new chapter or a new kind joins is said there, under how the key scales.
            </Paragraph>
            <Paragraph>
                <Image>![[ key-entry.png ]]</Image>
            </Paragraph>
            <Paragraph>
                An entry opened: the drawing large under its title, and the words for what the kind is. The
                rest of the page, the tree with its chevrons, the rail and the split, the file's thin-line
                icon and the colour on a file's press, is carried under the page, built, above, and what the
                carrying uncovered is under the switch, built, below; this chapter is where the team reads what
                was decided and follows a mention to where it is built.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The switch, built</Heading>
            <Paragraph>
                The day after the key, the framework under the library changed: a piece of writing now draws
                when its own state, its props, its theme or something it read while drawing changed, and
                otherwise answers what it drew last. The fold that took three seconds in the dev serve fell to a
                fifth of one, and every switch, tab, chevron and file press in the manual stopped reading its
                pressed state. The reason was the container. A piece of writing chooses the element it draws
                through inside its own draw and hands it an id, its classes and its children; React then calls
                that element after the draw, with nothing watching, so an element that reads at draw time reads
                something no one will answer. The switch's button had read the book's annotations through its
                pressed attribute, and it had looked alive only because every write redrew the whole book. What
                we had been relying on was the cascade.
            </Paragraph>
            <Paragraph>
                The seam that fixes it is one method on every piece of writing, its container, which draws the
                element with what the view hands it, and which a kind overrides to say its own attributes, typed
                by the browser's own, and hand the rest through: a switch says it is a button with a click; a
                chevron says a click that leaves the link under it alone; a file's press says its colour. The
                element had been the only place an attribute could be said, so every kind that needed one had
                made a component of its own and read outside the draw; now none does. It is built
                in <Means>$[[ The Switch ]]( Dougs Reference Manual / The Switch )</Means>, and the chevrons
                and the file presses that use it are
                in <Means>$[[ The Entry ]]( Dougs Reference Manual / The Entry )</Means> and <Means>$[[ The Listing ]]( Dougs Reference Manual / The Listing )</Means>.
            </Paragraph>
            <Paragraph>
                Two things found on the way. The folders in the manual's tree had stopped folding, and that was
                the theme, not the framework: the row rule that says the book first, from the audit, weighed the
                same as the fold's rule and came later in the sheet, so the fold's rules say the book first too.
                And the logo's hover was a hook of React's, which this library does not use; it is a field on
                the logo now, written by the logo's own methods from the handlers its container says, and said
                as a class by an annotation, so the subject stays unfolded while the pointer crosses to its
                name. That is in <Means>$[[ The Cover ]]( Dougs Reference Manual / The Cover )</Means>. What
                was tried and refused on the way is kept where the team reads: an off switch for the framework's
                memory, a lift of the button into a draw of its own, a hover held by the sheet alone, which
                cannot remember, and a second note before a text, which would have walked the annotations twice.
            </Paragraph>
            <Paragraph>
                What a press costs now, measured like with like: one task of about seven tenths of a second on a
                page of twenty thousand nodes, the same for a tab, an option, a fold and the hover, and the
                profile leads with the framework's own readings of the open chapter, each a walk of the book
                re-run by every row that read it. That is the next thing, and it belongs to the framework.
            </Paragraph>
        </Section>
        <Append
            identifier="035"
            type=".html"
        >
            ![[ 035.html ]]
        </Append>
    </Chapter>
);
