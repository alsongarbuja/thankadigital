"use client";

import { useEffect, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useFormState, useFormStatus } from "react-dom";
import { Button, Flex, Modal, Text, TextInput } from "@mantine/core";

interface IActionTdDeleteProps {
  id: string;
  deleteAction: (
    prevState: IActionState,
    paylaod: FormData
  ) => Promise<IActionState>;
}

const initialState = {
  message: "",
  ok: false,
};

export default function DeleteTd({ deleteAction, id }: IActionTdDeleteProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteState, handleDeleteAction] = useFormState(
    deleteAction,
    initialState
  );
  const { pending } = useFormStatus();
  const deleteBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!pending && deleteState.ok) {
      notifications.show({
        title: "Deleted successfully",
        message: deleteState.message,
        color: "teal",
        fz: "lg",
      });
    }
    if (!pending && !deleteState.ok && deleteState.message) {
      notifications.show({
        title: "Error",
        message: deleteState.message,
        color: "red",
        fz: "lg",
      });
    }
  }, [pending, deleteState]);

  const handleDelete = () => {
    // setConfirmDeleteModal(false);
    if (deleteBtnRef.current) {
      deleteBtnRef.current.click();
    }
  };

  return (
    <>
      <form action={handleDeleteAction}>
        <TextInput id="id" hidden name="id" value={id} />
        <Button
          disabled={pending}
          variant="transparent"
          opacity={pending ? 0.5 : 1}
          className={pending ? "cursor-not-allowed" : "p-0 font-semibold"}
          color="red"
          type="button"
          onClick={open}
        >
          Delete
        </Button>
        <button
          ref={deleteBtnRef}
          className="p-0 sr-only"
          disabled={pending}
          type="submit"
        >
          Delete
        </button>
      </form>

      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        title="Delete"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Text>Are you sure you want to delete this item?</Text>

        <Flex mt="xl" align="center" justify="end">
          <Button variant="transparent" onClick={close}>
            Cancel
          </Button>
          <Button variant="filled" bg="red" onClick={handleDelete}>
            Yes Delete
          </Button>
        </Flex>
      </Modal>
    </>
  );
}
