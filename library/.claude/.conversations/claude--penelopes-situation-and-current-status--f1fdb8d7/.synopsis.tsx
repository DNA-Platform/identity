import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a theoretical neuroscientist with biology training from the University of Chicago who is managing a
            complex veterinary case for his Bengal cat Penelope, currently in Tbilisi, Georgia under the care of a
            caregiver named Ana. Penelope has been diagnosed with chronic colitis stemming from a co-infection of
            Giardia and Tritrichomonas blagburni (T. foetus), acquired during time in Alanya, Turkey. Doug has a second
            Bengal cat named Casper, from the same Brooklyn breeder, who had Giardia, was successfully treated with
            metronidazole, and has fully recovered. Doug explicitly noted that Claude incorrectly called Casper
            "Leopold" and corrected this. Doug's approach throughout is to synthesize veterinary literature with his
            scientific training to develop frameworks he can pitch credibly to vets who may not be current on the
            specific co-infection literature.
        </Paragraph>
    </Chapter>
);
