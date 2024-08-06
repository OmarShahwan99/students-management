import type {
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from "react-hook-form";
import type { AnyObjectSchema } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: AnyObjectSchema;
  resetValues?: any | null;
  className?: string;
  [key: string]: unknown;
};

export const Form = <TFormValues extends FieldValues = Record<string, any>>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  resetValues,
  ...props
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    ...useFormProps,
  });

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
