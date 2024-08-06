import type {
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  Path,
  FieldValues,
} from "react-hook-form";
import type { AnyObjectSchema } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

type ServerErrors<T> = {
  [Property in keyof T]: string;
};

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: AnyObjectSchema;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?: any | null;
  className?: string;
  [key: string]: unknown;
};

export const Form = <TFormValues extends FieldValues = Record<string, any>>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  serverError,
  resetValues,
  ...props
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    ...useFormProps,
  });

  useEffect(() => {
    if (serverError) {
      Object.entries(serverError).forEach(([key, value]) => {
        methods.setError(key as Path<TFormValues>, {
          type: "manual",
          message: value,
        });
      });
    }
  }, [serverError, methods]);

  console.log("resetValues", resetValues);

  useEffect(() => {
    if (resetValues) {
      methods.reset(resetValues);
    }
  }, [resetValues, methods]);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} noValidate {...props}>
      {children(methods)}
    </form>
  );
};
