import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdInsertPhoto } from 'react-icons/md';
import { Container } from './styles';

import api from '~/services/api';

function AvatarInput({ defaultAvatar }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatarId',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    try {
      const data = new FormData();
      data.append('file', e.target.files[0]);
      const {
        data: { id, url },
      } = await api.post('/files', data);
      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error('Não foi possivel adicionar uma imagem!');
    }
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {(preview && <img src={preview} alt="Avatar" />) || defaultAvatar}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  defaultAvatar: PropTypes.element,
};

AvatarInput.defaultProps = {
  defaultAvatar: (
    <div>
      <MdInsertPhoto size={44} color="#ddd" />
      <strong>Adicionar foto</strong>
    </div>
  ),
};

export default AvatarInput;
