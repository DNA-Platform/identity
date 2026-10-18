import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about the safety of Tbilisi tap water for both humans and cats. Claude conducted a web
            search to provide current information about water quality in Georgia's capital. The research revealed that
            while Tbilisi's tap water officially meets WHO standards and is tested hourly against 53 parameters, the
            main concern lies with aging pipe infrastructure rather than the water treatment itself. Many travelers
            report varying experiences, with some tolerating the water fine while others experience stomach issues due
            to high mineral content from old building plumbing.
        </Paragraph>
    </Chapter>
);
