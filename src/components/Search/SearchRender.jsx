// ** SEARCH JSX FILE **
import React from "react";
// ant design
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

export const RenderSearch = () => {
  return (
    <div className="renderSearch">
      <label htmlFor="searchInput">Movie Title</label>
      
      <Space direction="vertical">
      <Search id= 'searchInput' placeholder="Search" onSearch={onSearch} />
      </Space>

    </div>
  );
};
