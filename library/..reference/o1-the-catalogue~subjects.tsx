import { Means, Paragraph, Section } from '@dna-platform/public';
import { Coloured } from '../.manual/18-the-colour~code.tsx';

export const Logo = () => (
    <Paragraph>
        <Means>$[[ Dougs Library ]]</Means>
    </Paragraph>
);

export const Subjects = () => (
    <Section>
        <Paragraph>
            <Coloured>#d9a05b</Coloured>
            <Means>$[[ Dougs Story ]]</Means>
        </Paragraph>
        <Paragraph>
            <Coloured>#3b6cf0</Coloured>
            <Means>$[[ Dougs Design ]]</Means>
        </Paragraph>
        <Paragraph>
            <Coloured>#4fb3a8</Coloured>
            <Means>$[[ Dougs Reference Manual ]]</Means>
        </Paragraph>
    </Section>
);
