import { PropsWithChildren } from "react";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";

interface IFormWrapperProps {
  method: "POST" | "PATCH";
  modelName: string;
  pending: boolean;
  formAction: (values: FormData) => void;
}

export function FormWrapper({
  children,
  modelName,
  method,
  pending,
  formAction,
}: PropsWithChildren<IFormWrapperProps>) {
  const router = useRouter();

  return (
    <div className="">
      <div className="flex gap-4 mb-4">
        <button
          className="p-2 border-2 rounded-md w-fit"
          type="button"
          onClick={() => router.back()}
        >
          <ArrowLeft2 />
        </button>
        <h3>
          {method === "POST" ? "Create" : "Edit"} {modelName}
        </h3>
      </div>
      <form action={formAction} className="flex flex-col gap-4">
        {children}
        <Button
          disabled={pending}
          type="submit"
          variant="filled"
          bg="red"
          opacity={pending ? 0.5 : 1}
          w="100%"
          mt="sm"
          className={pending ? "cursor-not-allowed" : ""}
        >
          {pending
            ? method === "POST"
              ? "Creating..."
              : "Updating..."
            : method === "POST"
            ? "Create"
            : "Update"}
        </Button>
      </form>
    </div>
  );
}
