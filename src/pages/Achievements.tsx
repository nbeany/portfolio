import React, { useEffect, useRef } from 'react';
import { Timeline } from 'antd';
import * as echarts from 'echarts';
import { TrophyOutlined, CodeOutlined, CalendarOutlined } from '@ant-design/icons';

const Achievements: React.FC = () => {
  const achievementsChartRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      date: "2023",
      title: "Frontend Development Training",
      description: "Completed comprehensive frontend development training at Evangadi, Ethiopia, focusing on modern web technologies and best practices."
    },
    {
      date: "2024",
      title: "Data Science Training",
      description: "Successfully completed data science training program at INSA, Ethiopia, learning key concepts in data analysis and visualization."
    }
  ];

  useEffect(() => {
    if (achievementsChartRef.current) {
      const chart = echarts.init(achievementsChartRef.current);
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#666'
          }
        },
        series: [
          {
            name: 'Achievement Categories',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 15, name: 'Frontend Development' },
              { value: 8, name: 'Backend Systems' },
              { value: 8, name: 'Database Management' },
              { value: 10, name: 'Data Visualization' },
              { value: 5, name: 'Data Processing' }
            ],
            color: ['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b']
          }
        ]
      };
      chart.setOption(option);

      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Milestones</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Key accomplishments and milestones from my professional journey, highlighting the impact of my work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div ref={achievementsChartRef} style={{ width: '100%', height: '400px' }}></div>
          </div>
          <div>
            <Timeline mode="left">
              {achievements.map((achievement, index) => (
                <Timeline.Item
                  key={index}
                  color="#6366f1"
                  label={
                    <div className="flex items-center">
                      <CalendarOutlined className="mr-2" />
                      <span className="font-semibold">{achievement.date}</span>
                    </div>
                  }
                >
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl text-indigo-500 mb-4">
              <TrophyOutlined />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">5+</h4>
            <p className="text-gray-600">Awards & Recognitions</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl text-indigo-500 mb-4">
              <CodeOutlined />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">10+</h4>
            <p className="text-gray-600">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;