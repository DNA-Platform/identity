import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is an experienced quantitative investor and former computational neuroscientist who co-founded an
            algorithmic crypto hedge fund and ran it for four years. He is based in Tbilisi with his partner Ana, who
            has a background in Russian academic and olympiad circles and attended Saint Petersburg University during
            the same period as Pavel Durov. This conversation centered on creating continuity documents for Doug's
            investment research project as he transitions between accounts due to losing access to a domain.
        </Paragraph>
    </Chapter>
);
