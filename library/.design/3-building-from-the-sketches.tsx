import { Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Pain, Solution } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>The story</Part>
        <Title>[[ Building from the sketches ]]</Title>
        <Section>
            <Heading>Built from the sketches, and driven</Heading>
            <Paragraph>
                On 6 October the four books stood built in one frame, and I drove them the way a reader would:
                every page as it opens, every switch pressed alone and then with another, every entry in the
                contents pressed to see where it lands. Each page is photographed at a desk 1280 wide and on a
                phone 390 wide, and held against the HTML it was decided from — the shelf
                of <Means>$[[ 1 ]]( ./The Shelf )</Means>, the frame
                of <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means>, the manual read two ways
                in <Means>$[[ 28 ]]( ./The Code in Front )</Means> and <Means>$[[ 31 ]]( ./The Words in Front )</Means>,
                and the sheet of <Means>$[[ 29 ]]( ./The Reading View, in the Frame, with the Chapters at the Side )</Means>.
                The desk comes first by far. The phone needs a good story too.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Why it failed, and where the sketch phase ended</Heading>
            <Paragraph>
                <Image>![[ library-black.png ]]</Image>
                <Image>![[ design-cobalt.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                I hate what I see here. My brain wants to vomit looking at it. We are a long, long way from
                something usable. Those books are huge. Is there even a book selection view that tells you
                something about one? Maybe there is something useful the UI on this page can do. The black is
                not working; it is too loud. Loud cobalt is not subtle. I feel so much pain and sadness looking
                at this work.
            </Paragraph>
            <Paragraph>
                <Solution />
                Go light. Gentle. Pastels with accent colours, a little more in the blue, green and purple
                than the yellow, orange and pink, with interesting contrasts, and several colours that span
                the wheel so that no book is any one thing and no one colour occupies so much. Be thoughtful
                about font, font size and palette. And stop here: this is where the sketch phase ends, and the
                design phase begins from each book's own data in HTML, designed together, one book at a time,
                in <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> and <Means>$[[ The Manual's Page ]]( ./The Manual's Page )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
