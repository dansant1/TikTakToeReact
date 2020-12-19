import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

export const LoginForm = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const submit = e => {
        e.preventDefault()
        Meteor.loginWithPassword(username, password)
    }

    // Input defaults
    const rules = [{ required: true, message: "Por favor ingresa tus datos" }]
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    }

    const tailLayout = {
        wrapperCol: { offset: 8, span: 24 }
    }

    return (
        <Row>
            <Col span={6}>
                <Form {...layout} name="login" onSubmit={submit}>
                    <Form.Item label="username" name="username" rules={rules} >
                        <Input onChange={ e => setUsername(e.target.value) } />   
                    </Form.Item>

                    <Form.Item label="password" name="password" rules={rules}>
                        <Input.Password onChange={ e => setPassword(e.target.value) } />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit"> Ingresar </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        
    )
}

