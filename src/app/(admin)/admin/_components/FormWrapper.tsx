import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { ChevronLeft } from "react-feather";

interface IFormWrapperProps {
  method: "POST" | "PATCH";
  modelName: string;
}

export function FormWrapper({
  children,
  modelName,
  method,
}: PropsWithChildren<IFormWrapperProps>) {
  const router = useRouter();

  return (
    <div className="p-4 m-4">
      <div className="flex gap-4 mb-4">
        <button
          className="p-2 border-2 rounded-md w-fit"
          type="button"
          onClick={() => router.back()}
        >
          <ChevronLeft />
        </button>
        <h3>
          {method === "POST" ? "Create" : "Edit"} {modelName}
        </h3>
      </div>
      {children}
    </div>
  );
}
