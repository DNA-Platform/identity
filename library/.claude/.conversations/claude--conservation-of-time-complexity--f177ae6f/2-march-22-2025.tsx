import { Append, Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 March 2025](2025-03-22)</Date>
        </Dated>
        <Title>[[ 22 March 2025 ]]</Title>
        <Message
            at="2025-03-22T00:59:09.471213Z"
        >
            <Origin>d1518404-d792-4f29-86d8-645879bc9bb7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you explain, in one paragraph to a professional programmer why any computational system can simulate
                anoother in O(N^2)
            </Paragraph>
        </Message>
        <Message
            at="2025-03-22T00:59:23.243812Z"
        >
            <Origin>88fc4289-6df7-45c0-b2d8-df7709045bb0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Any computational system can simulate another with at most O(n²) overhead because of the fundamental
                properties of universal computation. When one system (like a Turing machine) simulates another (like lambda
                calculus or a quantum computer), it needs to track the state of the simulated system and perform operations
                that mirror the original system's behavior. This translation process typically requires at most quadratic
                overhead because: 1) reading and writing the state information takes O(n) time where n is the input size,
                and 2) executing each step of the simulated system might require examining the entire state, giving another
                factor of O(n). Even with radically different computational models, this polynomial relationship holds - a
                result formalized in the Polynomial-Time Church-Turing Thesis. This is why theoretical advantages of
                specialized systems (like quantum computers) can only offer, at most, polynomial speedups when physically
                implemented, preserving fundamental complexity class boundaries.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-22T01:02:35.642948Z"
        >
            <Origin>1d6d83ee-fad5-4f54-8b41-064fc95d7741</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>HOW DOES AIT justfy its entropy measure based on simulation. Give another paragraph</Paragraph>
        </Message>
        <Message
            at="2025-03-22T01:02:41.622661Z"
        >
            <Origin>44a22bef-292b-4fac-a510-8c5a42acf18e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Algorithmic Information Theory (AIT) justifies its entropy measure based on simulation through the principle
                of invariance, which demonstrates that the Kolmogorov complexity of an object remains consistent (up to an
                additive constant) regardless of which universal computational system is used to describe it. When we
                measure the complexity of an object as the length of the shortest program that produces it, this measure
                remains stable because any universal system can simulate another with only polynomial overhead. This creates
                a robust foundation for information theory that transcends specific computational models. The simulation
                relationship establishes information as a fundamental physical quantity—the amount of information in a
                system is invariant under transformations between different universal models, just as energy is invariant
                under physical transformations. This deep connection between computational simulation, complexity, and
                physical reality provides the theoretical foundation for viewing certain complexity classes as physical
                constants of nature, unchangeable by technology or implementation details.
            </Paragraph>
        </Message>
        <Append
            identifier="quantum-computing-vs-physics-why-breaking-encryption-is-impo"
            type=".md"
        >
            ![[ quantum-computing-vs-physics-why-breaking-encryption-is-impo.md ]]
        </Append>
    </Chapter>
);
