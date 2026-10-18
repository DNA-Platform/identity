import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a resident of the Saburtalo neighborhood in Tbilisi, Georgia, seeking a highly regimented weight
            loss plan. He is 5'7" and 180 lbs, targeting aggressive fat loss of approximately 0.8–1.0 kg per week
            through a 1,500 kcal/day intake. A key constraint shaping his dietary structure is that he takes a
            wellness-related prescription that increases evening hunger, which led to building his entire eating plan
            around a late-day window rather than traditional meal timing. He also prefers fasting through most of the
            day, eating only in the final six hours before bed, with the bulk of calories (~1,000 kcal) at the start of
            that window and a slower-digesting ~500 kcal pre-bed meal to manage nighttime hunger. Claude confirmed this
            aligns with established intermittent fasting approaches such as the Warrior Diet and OMAD frameworks.
        </Paragraph>
    </Chapter>
);
