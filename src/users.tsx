import {Datagrid, EmailField, List, SimpleList, TextField, UrlField} from "react-admin";
import { useMediaQuery } from "@mui/material";
import {MyUrlField} from "./MyUrlField";

export const UserList = () => {
    // @ts-ignore
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return(    <List>
            { isSmall ? (
            <SimpleList
                primaryText={(record) => record.name}
                secondaryText={(record) => record.username}
                tertiaryText={(record) => record.email}
            />): (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    )
}
