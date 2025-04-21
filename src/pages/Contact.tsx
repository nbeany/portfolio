import React, { useState } from 'react';
import { Form, Input, Button, Tooltip } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined, SendOutlined, EnvironmentOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';

const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // Handle form submission
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { user_name, user_email, message } = values;

      // EmailJS send message
      await emailjs.send(
        'service_76hzojl',  
        'template_qsnxgqe',  
        {
          user_name,
          user_email,
          message,
        },
        'if3l5Rlta7XOLTHhd'  
      );
      
      setMessageSent(true);
      form.resetFields();  
    } catch (error) {
      console.error("Error sending message", error);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Me a Message</h3>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item label="Your Name" name="user_name" required>
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Enter your name"
                  className="py-2"
                />
              </Form.Item>
              <Form.Item label="Email Address" name="user_email" required>
                <Input
                  prefix={<MailOutlined className="text-gray-400" />}
                  placeholder="Enter your email"
                  className="py-2"
                />
              </Form.Item>
              <Form.Item label="Message" name="message" required>
                <TextArea
                  placeholder="Tell me about your project"
                  rows={4}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  size="large"
                  htmlType="submit"
                  className="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 border-none hover:opacity-90 w-full"
                  loading={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form.Item>
            </Form>
            {messageSent && <p className="text-green-600">Your message has been sent successfully!</p>}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <MailOutlined className="text-xl text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-700">abrehamnigus1996@gmail.com</p>
                  <p className="text-gray-600 text-sm mt-1">I typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <PhoneOutlined className="text-xl text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-700">+251 908288112</p>
                  <p className="text-gray-600 text-sm mt-1">Available Monday-Friday</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <EnvironmentOutlined className="text-xl text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Location</h4>
                  <p className="text-gray-700">Addis Ababa, Ethiopia</p>
                  <p className="text-gray-600 text-sm mt-1">Available for remote work worldwide</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <h4 className="font-bold text-gray-800 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <Tooltip title="LinkedIn">
                    <a
                      href="https://www.linkedin.com/in/abreham-nigus-377850332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
                    >
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <a
                      href="https://github.com/nbeany"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
                    >
                      <GithubOutlined className="text-xl" />
                    </a>
                  </Tooltip>
                  <Tooltip title="Phone">
                    <a
                      href="tel:+251912345678"
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors cursor-pointer"
                    >
                      <PhoneOutlined className="text-xl" />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
