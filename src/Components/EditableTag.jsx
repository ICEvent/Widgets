import React, { useState, useEffect, useRef } from 'react';
import { Tag, Input } from 'antd';


const EditableTag = (props) => {
  const [tags, setTags] = useState(props.tags)
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const mountedRef = useRef(true);

  const { handleTags, filterwithTag } = props;

  useEffect(() => {
    props.readOnly && setIsReadOnly(props.readOnly);
    handleTags && handleTags(tags);
    return () => { mountedRef.current = false; }
  }, [tags])


  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
  }

  const handleInputChange = e => {
    setInputValue(e.target.value);
  }

  const handleInputConfirm = () => {
    inputValue && tags.indexOf(inputValue) === -1 && setTags([...tags, inputValue]);
    setInputValue('');
  }

  const handleEditInputChange = e => {
    setEditInputValue(e.target.value);
  }

  const handleEditInputConfirm = () => {
    tags[editInputIndex] = editInputValue;
    setTags([...tags]);
    setEditInputValue('');
    setEditInputIndex(-1);
  }

  const handleDoubleClick = (e, tag, index) => {
    setEditInputIndex(index);
    setEditInputValue(tag);
    e.preventDefault();
  }

  const inputFocus = inputEl => {
    inputEl?.focus();
  }

  const handleCheckChange = (tag) => {
    filterwithTag(tag);
  }

  return (
    <>
      {tags.map((tag, index) => {
        const tagItem = (editInputIndex === index) ? (
          <Input
            ref={inputFocus}
            key={tag}
            size="small"
            value={editInputValue}
            onChange={handleEditInputChange}
            onBlur={handleEditInputConfirm}
            onPressEnter={handleEditInputConfirm}
          />
        ) : (
          <Tag
            key={tag}
            closable={!isReadOnly}
            onClose={() => handleClose(tag)}
            onDoubleClick={e => { !isReadOnly && handleDoubleClick(e, tag, index) }}
          >
            <Tag.CheckableTag
              onChange={() => { isReadOnly && handleCheckChange(tag) }}
            >
              {tag}
            </Tag.CheckableTag>
          </Tag>
        );
        return tagItem;

      })}

      {!isReadOnly && <Input
        type="text"
        size="small"
        placeholder='new tag'
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />}
    </>
  );
}

export default EditableTag;