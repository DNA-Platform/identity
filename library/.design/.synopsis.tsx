import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            How this library came to look the way it does, told as it happened, with every sketch kept beside the
            telling. The story first, in seven short chapters: <Means>$[[ ./Latitude ]]</Means>, many designs
            quickly and why choosing that way failed; <Means>$[[ ./Choosing by number ]]</Means>, the decisions
            as they were made and the questions still open; <Means>$[[ ./Building from the sketches ]]</Means>,
            and where the sketch phase ended; <Means>$[[ ./Designing together ]]</Means>, the method we use
            now; <Means>$[[ ./The bookshelf, in an evening ]]</Means>; <Means>$[[ ./The manual's page, in eight rounds ]]</Means>;
            and <Means>$[[ ./Designing this book ]]</Means>. Then the designs that were designed, one room
            each, the design as built first and the places it is built in gathered under
            it: <Means>$[[ ./The Bookshelf ]]</Means>, <Means>$[[ ./The Manual's Page ]]</Means> and <Means>$[[ ./The Design Book's Page ]]</Means>.
            Then <Means>$[[ ./Every Concept ]]</Means>, every sketch by number with its photographs and its fate.
            This book is a portfolio, the type of book that records a design process; what it is made of stands
            in the reference manual, and <Means>$[[ ./The Portfolio ]]</Means> at the back says what this one
            keeps for itself.
        </Paragraph>
    </Chapter>
);
