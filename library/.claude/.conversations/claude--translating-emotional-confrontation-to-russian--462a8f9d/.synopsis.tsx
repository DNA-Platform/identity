import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug requested Russian translation assistance for several personal messages intended for his partner, Ana.
            The messages were composed using voice-to-text software, so Doug explicitly asked Claude to perform cleanup
            passes to correct voice-to-text artifacts in addition to providing accurate translations. Claude translated
            three sets of messages from English to Russian, with one instance where Doug requested the Telegram
            timestamps be removed from the formatted output before the final clean version was presented.
        </Paragraph>
    </Chapter>
);
