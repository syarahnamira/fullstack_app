import React, { useState, useEffect } from "react";
import { Table, Avatar, Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface User {
  name: string;
  location: string;
  email: string;
  age: number;
  phone: string;
  cell: string;
  picture: string[];
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = (value: string) => {
    setSearchText(value.toLowerCase());
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
  );

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Umur",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Alamat",
      dataIndex: "location",
      key: "location",
      render: (text: string) => <a href="#">(Alamat Detail)</a>, 
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "No. Telepon 1",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "No. Telepon 2",
      dataIndex: "cell",
      key: "cell",
    },
    {
      title: "Gambar",
      dataIndex: "picture",
      key: "picture",
      render: (images: string[]) => (  
        <Avatar src={images[0]} shape="square" size="large" />
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by name or email"
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
        <Button type="primary">+ New Data</Button>
      </Space>
      <Table columns={columns} dataSource={filteredUsers} rowKey="email" />
    </div>
  );
};
