import { useEffect, useState } from 'react';

import IconComponent from '@Components/core/ReactIcons';
import type * as Stitches from '@stitches/react';

import * as S from './styles';

type InputFileComponentProps = {
  label?: string;
  description?: string;
  files?: File[];
  onChange: (value: File[]) => void;
  error?: string;
  className?: string;
  css?: Stitches.CSS;
  name: string;
  accept?: string;
};

export default function InputFileComponent({
  label = '',
  description,
  files,
  onChange,
  error = '',
  accept = '.jpeg, .jpg, .png, .pdf',
  css,
  name,
  ...props
}: InputFileComponentProps) {
  const [fileState, setFileState] = useState<File[]>(files || []);

  useEffect(() => {
    onChange(fileState);
  }, [fileState]);

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  };

  return (
    <S.Wrapper {...props} css={css}>
      <S.Label> {label} </S.Label>

      <label htmlFor={`file-${name}`}>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const format = Array.from(e.target.files).map(
                (file: File) => file,
              );
              const newFiles = [...fileState, ...format];
              setFileState(newFiles);
              onChange(fileState);

              // Reset Input File
              e.target.value = '';
            }
          }}
          name={name}
          id={`file-${name}`}
          accept={accept}
          multiple
        />

        <S.ButtonFake className="buttonFake">Procurar...</S.ButtonFake>

        {files && files?.length > 0 ? (
          <S.AmountFiles> {files.length} arquivos selecionados </S.AmountFiles>
        ) : (
          <S.AmountFiles> Nenhum arquivo selecionado.</S.AmountFiles>
        )}
      </label>

      {!!fileState &&
        fileState.map((file, index) => (
          <S.ContentFile key={`${file.name + index}`}>
            <IconComponent name="clip" size={28} color="#7E8081" />
            <S.ContentFileNameSize>
              <S.FileName>{file.name}</S.FileName>
              <S.FileSize>{formatBytes(file.size)}</S.FileSize>
            </S.ContentFileNameSize>

            <S.FileBtnRemove
              type="button"
              onClick={() => {
                const newFiles = fileState.filter((_f, i) => i !== index);
                setFileState(newFiles);
              }}
            >
              <IconComponent name="close" size={28} color="#13670B" />
            </S.FileBtnRemove>
          </S.ContentFile>
        ))}

      {!!error && <S.Error>{error}</S.Error>}

      {!!description && (
        <S.Description>
          <IconComponent size="16" name="alert" color="#6C6D6F" />
          {description}
        </S.Description>
      )}
    </S.Wrapper>
  );
}
