import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { Button, Col, Form, Input, Row, Select, Space, Table, TablePaginationConfig} from 'antd';
import { title } from "process";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

  // table数据
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    }
   
  ];
  // table 表头
  const COLUMNS = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '封面',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '作者',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '分类',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '描述',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '库存',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '创建时间',
      dataIndex: 'address',
      key: 'address',
    },
  ];

export default function Home() {

  
  const [form] = Form.useForm()
  const router = useRouter()

  const [total, setTotal] = useState(0);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    showSizeChanger: true,
    total: 0
  });

  

  const hanlerTableChange= (pagination:TablePaginationConfig) =>{
    console.log(pagination)
  }

  // 表单提交
  const onFinish = (values: any) => {
    console.log(values);
  };

  // 清空
  const handleSearchReset= () =>{
    form.resetFields()
  }
  //编辑 
  const handleBookEdit =()=>{
    router.push('/book/edit')
  }

  // 操作
  const columns = [...COLUMNS,
    {title:'操作',key:"action", render: (_:any,row: any ) =>{
        return <Space>
          <Button type="link" onClick={handleBookEdit}>编辑</Button>
          <Button type="link" danger>删除</Button>
        </Space>
    }}
  ]

  return <> 
  <Form
    name="search"
    form={form}
    layout="inline"
    onFinish={onFinish}
    initialValues={{
      name:'', author:'',category:''
    }}
  >
  <Row gutter={24}>
    <Col span={6}>
      <Form.Item name="name" label="名称:">
        <Input placeholder="请输入" allowClear/>
      </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item name="author" label="作者:">
        <Input placeholder="请输入"  allowClear/>
      </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item name="category" label="分类:"> 
        <Select 
          allowClear
          showSearch
          placeholder = "请选择"
          // style={{width: 100}}
          options={[
            {value: 'jack', label:'Jack'},
            {value: 'lucy', label:'lucy'},
            {value: 'alias', label:'alias'},
        ]} />
      </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button htmlType="submit" onClick={handleSearchReset}>
            清空
          </Button>
        </Space>
      </Form.Item>
    </Col>
  </Row>
</Form>
<Table 
  dataSource={dataSource} 
  columns={columns} 
  scroll={{x: 2000}} 
  onChange={hanlerTableChange}
  pagination={{...pagination,total:total,showTotal:() => `共 ${total} 条`}}
/>
</>
}