import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about watching Harry Potter films with family, specifically needing Russian audio dubbing
            with English subtitles available on Amazon Prime Video. Claude explained that audio and subtitle track
            availability on Prime Video is title-specific and region-dependent rather than a blanket service feature,
            and noted that Harry Potter films are typically rent/buy titles rather than included with Prime
            subscription. Claude advised checking the title's detail page on Prime for listed audio and subtitle
            languages before relying on the platform.
        </Paragraph>
    </Chapter>
);
