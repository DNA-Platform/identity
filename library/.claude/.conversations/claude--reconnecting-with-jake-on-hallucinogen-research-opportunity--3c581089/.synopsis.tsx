import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a computational neuroscientist returning to research after time away. He was ABD under Charles
            Stevens at the Salk Institute and previously published on propagating waves in the motor cortex while
            working with Nicho Hatsopoulos at UChicago. He is collaborating with Jake Reimer, a friend from UChicago who
            now runs a lab at Baylor College of Medicine, on a large-scale V1 recording dataset collected under the
            hallucinogen DOI. The project involves thousands of neurons and centers on quantifying the effect of the
            drug on neural activity, likely using MEI (Most Exciting Image) analysis and encoding models. Jake's lab has
            a close collaborative relationship with Andreas Tolias, whose computational neuroscience work is directly
            relevant to the project. Doug's goals are to get back on the radar of important researchers, secure paid
            work, accrue publications, and create a viable path to completing his PhD.
        </Paragraph>
    </Chapter>
);
