import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved two people: Doug, who initiated the discussion, and Ana, a Russian speaker who
            joined partway through and asked questions directly in Russian. The central topic was Russian military
            mobilization, recruitment coercion, and the legal pipeline from voluntary enlistment through active service
            — explored in significant analytical depth. Doug asked Claude to research whether another Russian draft is
            likely, how to distinguish voluntary from coerced recruitment, what the enlistment process looks like, and
            what penalties attach to non-compliance at each stage of the recruitment pipeline. Claude conducted multiple
            web searches in both English and Russian, drawing on exile outlets (Meduza, Mediazona, Verstka, Novaya
            Gazeta Europe), Russian legal-aid platforms (Pravoved, Harant, Dostupnoepravo), and anti-mobilization
            activist legal guides. Doug consistently pushed Claude to distinguish legal framework from operational
            reality, and corrected Claude twice: once for overstating that ignoring a voluntary application was
            consequence-free (the un-withdrawn application remains a live flag generating ongoing contact), and once for
            framing formal withdrawal as mere "extra caution" rather than a genuinely different and safer legal state.
            Claude acknowledged both corrections explicitly.
        </Paragraph>
    </Chapter>
);
