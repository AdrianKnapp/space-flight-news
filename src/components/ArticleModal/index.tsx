import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { Article } from '../../types/Article';
import { ArticleItem } from '../ArticleItem';

type ArticleModalProps = {
  article: Article;
  // eslint-disable-next-line no-unused-vars
  handleModalIsOpen: (isOpen: boolean) => void;
  modalIsOpen: boolean;
};

export function ArticleModal({
  article,
  handleModalIsOpen,
  modalIsOpen,
}: ArticleModalProps) {
  const { onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => {
          handleModalIsOpen(false);
          onClose();
        }}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={0}
          border="2px"
          borderColor="gray.200"
          display="flex"
          mx={5}
        >
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <ArticleItem article={article} isInModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
