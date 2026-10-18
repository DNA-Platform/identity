import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is cooking chicken francese in Tbilisi, Georgia, and asked Claude to identify which ingredients
            from the recipe would be difficult to find at local supermarkets Agrohub and Carrefour, along with
            substitution recommendations. Claude analyzed the full ingredient list (chicken cutlets, flour, egg,
            parsley, lemon juice, white wine, chicken stock, garlic) and identified boxed chicken stock as the main gap,
            recommending Knorr or Maggi bouillon cubes as a substitute, and dry Georgian white wines (Rkatsiteli or
            Tsinandali) as an upgrade over typical imports. The person then asked Claude to compress the analysis into a
            simple shopping list, which Claude provided in a concise format.
        </Paragraph>
    </Chapter>
);
