import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about the calorie content of buckwheat and whether it qualifies as a low-calorie food
            option. Claude provided detailed nutritional information, explaining that raw buckwheat contains
            approximately 340-360 calories per 100g, which reduces to about 90-100 calories per 100g when cooked due to
            water absorption. Claude clarified that buckwheat's calorie count is comparable to other whole grains like
            rice, oats, and quinoa, making it standard rather than low-calorie among grain options. The response
            highlighted buckwheat's nutritional advantages, including high fiber and protein content (about 13g protein
            per 100g dry) and a lower glycemic index compared to many grains, which contribute to satiety and more
            stable blood sugar levels. Claude also provided alternative suggestions for genuinely low-calorie grain
            substitutes, mentioning cauliflower rice and shirataki noodles as dramatically lower-calorie options, while
            noting their different nutritional profiles. The conversation focused purely on factual nutritional
            information and practical dietary considerations.
        </Paragraph>
    </Chapter>
);
