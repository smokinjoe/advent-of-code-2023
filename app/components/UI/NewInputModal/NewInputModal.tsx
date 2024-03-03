import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

import { InputForm } from "../NewInputModal/InputForm";

export const NewInputModal = ({ day }: { day: number }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="New Input" centered>
        <InputForm day={day} />
      </Modal>
      <Button onClick={open}>New Input</Button>
    </>
  );
};
