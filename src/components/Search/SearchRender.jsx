// ** SEARCH JSX FILE **
import React from "react";
// ant design
import { Input, Space } from 'antd';
const { Search } = Input;

export const RenderSearch = ({handleChange, searchTerm}) => {
  return (
    <div className="renderSearch">
      <label htmlFor="searchInput">Movie Title</label>
      
      <Space direction="vertical">
      <Search id= 'searchInput' placeholder="Search" onChange= {(e) => handleChange(e)} value= {searchTerm} enterButton/>
      </Space>

    </div>
  );
};
