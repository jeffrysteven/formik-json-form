import React from "react";
import {
  Formik,
  Form as FormikForm,
  useFormikContext,
  FastField,
} from "formik";
import {
  Button,
  ButtonProps,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  Input,
  InputProps,
  Label,
} from "@twilio-paste/core";

export const ComponentsMap = {
  text: TextField,
  email: TextField,
  checkbox: CheckboxField,
};

export function Form(props: any) {
  return (
    <Formik {...props}>
      <FormikForm>{props.children}</FormikForm>
    </Formik>
  );
}

export function CheckboxField(
  props: CheckboxGroupProps & {
    label: string;
    ariaDescribedBy: string;
    values: any[];
  }
): React.ReactElement {
  const { name, onChange, id, label, ariaDescribedBy, values, ...rest } = props;
  return (
    <FastField
      name={name}
      component={({ field }: any) => (
        <CheckboxGroup legend={label} name={name!} {...field}>
          {values.map((value, idx) => (
            <Checkbox id={`${idx}`} value={value} key={idx}>
              {value}
            </Checkbox>
          ))}
        </CheckboxGroup>
      )}
    />
  );
}

export function TextField(
  props: InputProps & { label: string; ariaDescribedBy: string }
): React.ReactElement {
  const {
    name,
    placeholder,
    onChange,
    type,
    id,
    label,
    ariaDescribedBy,
    ...rest
  } = props;
  return (
    <>
      <Label htmlFor={name} required>
        {label}
      </Label>
      <FastField
        name={name}
        component={({ field }: any) => (
          <Input
            aria-describedby={ariaDescribedBy}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            {...rest}
            {...field}
          />
        )}
      />
    </>
  );
}

export function SubmitButton(props: ButtonProps): React.ReactElement {
  const { isSubmitting } = useFormikContext();

  return (
    <Button {...props} disabled={isSubmitting}>
      {props.children}
    </Button>
  );
}
