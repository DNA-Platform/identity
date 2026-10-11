import { Append, Chapter, Heading, Image, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Design Book's Page ]]</Title>
        <Section>
            <Heading>The third page, and the book it is in</Heading>
            <Paragraph>
                The page beside this chapter is this book's own print, every chapter and every concept in it, made
                by <Means>$[[ The Print ]]( ./The Print )</Means> and opened from the file. It is the third page
                designed from a print, after <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> and <Means>$[[ The Manual's Page ]]( ./The Manual's Page )</Means>,
                and the one that designs the book it stands in: this library contains all of its own designs, and
                this chapter is the one entry that is its own definition. What I decide on it is written here in
                my words, one thing at a time, as it was for the other two.
            </Paragraph>
            <Paragraph>
                <Image>![[ 036-desk.png ]]</Image>
                <Image>![[ 036-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The page as it stands, photographed by <Means>$[[ the camera ]]( ./The Camera )</Means> at a desk
                and on a phone, as every concept is; the photographs are of the page that holds this chapter.
            </Paragraph>
        </Section>
        <Append
            identifier="036"
            type=".html"
        >
            ![[ 036.html ]]
        </Append>
    </Chapter>
);
