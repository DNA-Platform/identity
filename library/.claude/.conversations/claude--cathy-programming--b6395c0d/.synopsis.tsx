import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is working on a React component library built on styled-components v6 that prerenders pages to
            static HTML and hydrates them with the same components. The system uses semantic classes (pd- for element
            types like pd-paragraph and pd-code; pa- for annotation marks like pa-table and pa-reference), a Format
            abstraction (an annotation that is itself a styled component and may replace the element it annotates, such
            as a Table replacing a section's element with a CSS grid), and a single Theme component that renders one
            global stylesheet keyed on those classes while providing eight design tokens (font, size, leading, measure,
            space, ink, paper, link) through ThemeProvider.
        </Paragraph>
    </Chapter>
);
