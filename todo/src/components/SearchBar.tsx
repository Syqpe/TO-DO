import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

export interface IProps {
  onChangeChB1: (e: React.ChangeEvent) => void;
  active: boolean;
  onChangeChB2: (e: React.ChangeEvent) => void;
  comp: boolean;
  onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  sortTop: boolean;
  onSortTime: (e: React.ChangeEvent) => void;
}

function SearchBar({
  onChangeChB1,
  active,
  onChangeChB2,
  comp,
  onSearch,
  sortTop,
  onSortTime
  } : IProps) {
  return (
    <>
     <input onKeyDown={onSearch} type="text" placeholder="Search #todo"/>
     <label htmlFor="1"><input id="1" type="checkbox" onChange={onChangeChB1} checked={active}/><span>Active</span></label>
     <label htmlFor="2"><input id="2" type="checkbox" onChange={onChangeChB2} checked={comp}/><span>Completed</span></label>
     <label htmlFor="3"><input id="3" type="checkbox" onChange={onSortTime} checked={sortTop}/><span>Sort by time</span></label>
    </>
  );
}

export default SearchBar;
