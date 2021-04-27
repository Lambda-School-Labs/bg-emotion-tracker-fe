import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 16,
    span: 1,
  },
};

export const AddIndividual = props => {
  const { inputData, setInputData } = props;

  const onFinish = values => {
    const newList = inputData.individual;
    newList.push(values.clubName);
    setInputData({
      ...inputData,
      individual: newList,
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="addIndividual"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Club Name"
        name="clubName"
        rules={[{ required: true, message: 'Please a valid club Name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddIndividual;
