import { Chapter, Synopsis, Title } from '@dna-platform/public';
import DougsStorySynopsis from '../.librarian/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Dougs Story ]]</Title>
        <Synopsis>{DougsStorySynopsis()}</Synopsis>
    </Chapter>
);
