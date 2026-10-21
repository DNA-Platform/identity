import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/1-conversation';
import NewProjectStructureV1o1 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o1-new-project-structure-v1';
import AppTsxWithRoutingV1o2 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o2-app-tsx-with-routing-v1';
import AuthenticationServiceV1o3 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o3-authentication-service-v1';
import ProtectedrouteComponentV1o4 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o4-protectedroute-component-v1';
import LoginComponentV1o5 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o5-login-component-v1';
import HomepageComponentV1o6 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o6-homepage-component-v1';
import InternaltoolpageComponentV1o7 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o7-internaltoolpage-component-v1';
import RobotsTxtV1o8 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o8-robots-txt-v1';
import InternaltoolpageComponentV2o9 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o9-internaltoolpage-component-v2';
import InternaltoolpageComponentV3o10 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o10-internaltoolpage-component-v3';
import StaticwebappConfigJsonV1o11 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o11-staticwebapp-config-json-v1';
import InstallDependenciesV1o12 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o12-install-dependencies-v1';
import EnvFileV1o13 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o13-env-file-v1';
import LoginPageCssV1o14 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o14-login-page-css-v1';
import IndexTsxMainRoutingSetupV1o15 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o15-index-tsx-main-routing-setup-v1';
import ComponentsSharedProtectedrouteTsxV2o16 from '../../../../../../.claude/.conversations/claude--configuring-a-react-app-as-an-internal-tool--7949712c/o16-components-shared-protectedroute-tsx-v2';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {NewProjectStructureV1o1()}
        {AppTsxWithRoutingV1o2()}
        {AuthenticationServiceV1o3()}
        {ProtectedrouteComponentV1o4()}
        {LoginComponentV1o5()}
        {HomepageComponentV1o6()}
        {InternaltoolpageComponentV1o7()}
        {RobotsTxtV1o8()}
        {InternaltoolpageComponentV2o9()}
        {InternaltoolpageComponentV3o10()}
        {StaticwebappConfigJsonV1o11()}
        {InstallDependenciesV1o12()}
        {EnvFileV1o13()}
        {LoginPageCssV1o14()}
        {IndexTsxMainRoutingSetupV1o15()}
        {ComponentsSharedProtectedrouteTsxV2o16()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
