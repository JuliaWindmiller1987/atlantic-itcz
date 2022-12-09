import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    List,
    ReferenceField,
    ReferenceInput,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext
} from "react-admin";

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"`: ''}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users"/>
];

export const PostList = () => (
  <List filters={postFilters}>
      <Datagrid rowClick="edit">
          <ReferenceField reference="users" source="userId"/>
          <TextField source="id"/>
          <TextField source="title"/>
          <EditButton />
      </Datagrid>
  </List>
);


export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput reference="users" source="userId" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput reference="users" source="userId" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);