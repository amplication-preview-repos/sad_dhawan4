import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MentorTitle } from "../mentor/MentorTitle";
import { StudentTitle } from "../student/StudentTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceInput source="mentor.id" reference="Mentor" label="mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <TextInput label="summary" multiline source="summary" />
      </SimpleForm>
    </Edit>
  );
};
