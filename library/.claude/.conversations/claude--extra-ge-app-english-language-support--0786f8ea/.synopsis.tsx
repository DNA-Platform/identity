import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about language support for the Extra.ge mobile app, specifically whether it supports
            English, and requested web searches in Georgian. Claude conducted searches using Georgian language queries
            and examined the Google Play store listing to investigate the app's language capabilities. The research
            revealed that the main Extra.ge app does not support English, with multiple user reviews confirming it's
            entirely in Georgian with no language switching option.
        </Paragraph>
    </Chapter>
);
