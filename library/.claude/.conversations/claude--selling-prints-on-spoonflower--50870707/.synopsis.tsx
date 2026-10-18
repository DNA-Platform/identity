import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centered on helping Ana (who works with a business partner named Doug) research and plan a
            launch on Spoonflower, a print-on-demand marketplace. Ana is building a design catalog under the brand DNA
            Patternity, which includes city map posters (Moscow, St. Petersburg, Tehran, Chicago, and others) as well as
            geometric and abstract patterns. Doug previously created a Spoonflower account and is the US-based partner;
            Ana is currently based in Georgia (the country). The conversation covered how Spoonflower works from a
            seller's perspective, what types of designs can be sold there (including the key insight that panel designs
            like city maps work as wallpaper and fabric yardage, not just seamless repeating patterns), the platform's
            royalty structure (10–15%), upload limits (confirmed at 50 designs per week, correcting an earlier outdated
            figure of 25), and the seller verification process including the mandatory physical order requirement for
            address confirmation.
        </Paragraph>
    </Chapter>
);
