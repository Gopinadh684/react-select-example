import React from 'react';
import Select from 'react-select';
import style from './StyledSelection.module.scss';

const StyledSelection = (props) => {
  const {
    placeholder,
    onChange,
    onBlur,
    value,
    defaultvalue,
    title,
    name,
    options,
    label,
    errorMessage,
  } = props;
  return (
    <div className={style['selection-list--container']}>
      <div className={style['selection-list']}>
        <Select
          options={options}
          value={value}
          defaultvalue={defaultvalue}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          title={title}
        />
        <label className={style.filled} htmlFor={name}>
          {label}
        </label>
      </div>
      <span>{errorMessage}</span>
    </div>
  );
};

export default StyledSelection;
