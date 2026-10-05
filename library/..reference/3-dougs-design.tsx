import { Chapter, Synopsis, Title } from '@dna-platform/public';
import DougsDesignSynopsis from '../.design/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Dougs Design ]]</Title>
        <Synopsis>{DougsDesignSynopsis()}</Synopsis>
    </Chapter>
);
