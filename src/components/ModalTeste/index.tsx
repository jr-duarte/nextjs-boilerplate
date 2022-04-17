import ComponentModal from '@Components/core/Modal';

import * as S from './styles';

type ModalModalMsgFormSubmitComponentProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalTeste({
  isOpen,
  onClose,
}: ModalModalMsgFormSubmitComponentProps) {
  return (
    <ComponentModal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper>
        <S.Content>
          <span>ModalTeste</span>
          <button type="button" onClick={onClose}>
            teste
          </button>
        </S.Content>
      </S.Wrapper>
    </ComponentModal>
  );
}
