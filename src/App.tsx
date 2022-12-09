import {Admin, EditGuesser, ListGuesser, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UserList} from "./users";
import {PostCreate, PostEdit, PostList} from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import {authProvider} from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard} >
        <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon}/>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>);

export default App;