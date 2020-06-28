import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { MdInsertPhoto } from 'react-icons/md';
import PropTypes from 'prop-types';
// import api from '~/services/api';

import { Container } from './styles';

function AvatarInput({ defaultAvatar }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    /* const {
      data: { id, url },
    } = await api.post('/files', data); */
    setFile(1);
    setPreview('url');
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
