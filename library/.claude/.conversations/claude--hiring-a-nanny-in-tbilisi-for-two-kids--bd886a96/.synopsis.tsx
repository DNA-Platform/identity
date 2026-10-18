import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved two people — Doug and Ana — working together with Claude on a practical hiring
            project: finding a household helper with nanny duties ("помощница по хозяйству с функциями няни" / ოჯახში
            დამხმარე) in Tbilisi, Georgia, for their family with two school-age children. The conversation began with
            Doug exploring general concepts around hiring a nanny in Tbilisi — pricing structures, role categories, and
            market channels — and evolved through progressive clarification of the actual need. Key realizations shaped
            the role: the children attend Happy School from 10:00 to 17:00 with homework supervised at school,
            eliminating daytime childcare needs entirely. The family lives between two apartments in the Saburtalo
            district near the school, which became a structural asset for the arrangement. The core role that emerged
            combines afternoon household management (cleaning both apartments, cooking dinner, accompanying children to
            after-school activities) with two fixed weekly overnights during which the helper stays with the children,
            makes breakfast, and walks them to school. The family also wants the option, by prior arrangement, for the
            helper to stay several days during family trips.
        </Paragraph>
    </Chapter>
);
