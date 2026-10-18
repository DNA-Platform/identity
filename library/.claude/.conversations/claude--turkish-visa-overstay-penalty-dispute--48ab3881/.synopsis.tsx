import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought help understanding Turkish visa overstay penalties for someone named Ana, who had overstayed
            her Turkish visa by 10 days while caring for the user after ankle surgery. Turkish authorities told Ana she
            couldn't return for three months, but the user questioned whether this was standard procedure or a
            miscommunication due to language barriers. Claude researched Turkish immigration law and found that the
            standard penalty for overstays under three months should only be a fine with no entry ban if the person
            voluntarily leaves and pays the fine. A three-month ban didn't align with official guidelines for a 10-day
            overstay.
        </Paragraph>
    </Chapter>
);
