import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MENTOR_TITLE_FIELD } from "../mentor/MentorTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="grade" source="grade" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Session"
          target="studentId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="mentor"
              source="mentor.id"
              reference="Mentor"
            >
              <TextField source={MENTOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="summary" source="summary" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
