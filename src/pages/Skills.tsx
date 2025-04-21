import React, { useEffect, useRef } from 'react';
import { Progress} from 'antd';
import * as echarts from 'echarts';
import { CodeOutlined, BugOutlined, TeamOutlined, BookOutlined } from '@ant-design/icons';

const Skills: React.FC = () => {
  const skillsChartRef = useRef<HTMLDivElement>(null);
  const growthChartRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 }
  ];

  // Initialize skills chart
  useEffect(() => {
    if (skillsChartRef.current) {
      const chart = echarts.init(skillsChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max: 100,
          axisLabel: {
            color: '#666'
          }
        },
        yAxis: {
          type: 'category',
          data: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'PostgreSQL', 'HDFS',  'Apache Kafka', 'Apache Spark'],
          axisLabel: {
            color: '#666'
          }
        },
        series: [
          {
            name: 'Skill Level',
            type: 'bar',
            data: [95, 90, 85, 80, 85, 82, 78, 75, 76],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#6366f1' },
                { offset: 1, color: '#8b5cf6' }
              ])
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{c}%'
            }
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

  // Initialize growth chart
  useEffect(() => {
    if (growthChartRef.current) {
      const chart = echarts.init(growthChartRef.current);
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Projects Completed', 'Skills Mastered'],
          textStyle: {
            color: '#666'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2023', '2024', '2025'],
          axisLabel: {
            color: '#666'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#666'
          }
        },
        series: [
          {
            name: 'Projects Completed',
            type: 'line',
            data: [5, 12,15],
            smooth: true,
            lineStyle: {
              width: 4,
              color: '#6366f1'
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#6366f1'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(99, 102, 241, 0.5)' },
                { offset: 1, color: 'rgba(99, 102, 241, 0.1)' }
              ])
            }
          },
          {
            name: 'Skills Mastered',
            type: 'line',
            data: [3, 8, 15,],
            smooth: true,
            lineStyle: {
              width: 4,
              color: '#8b5cf6'
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#8b5cf6'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(139, 92, 246, 0.5)' },
                { offset: 1, color: 'rgba(139, 92, 246, 0.1)' }
              ])
            }
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in Frontend Development, Backend Development, Web Application Design, and Big Data Processing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h3>
            <div ref={skillsChartRef} style={{ width: '100%', height: '400px' }}></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Growth</h3>
            <div ref={growthChartRef} style={{ width: '100%', height: '400px' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Progress
                  type="circle"
                  percent={skill.level}
                  strokeColor={{
                    '0%': '#6366f1',
                    '100%': '#8b5cf6'
                  }}
                  width={120}
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800">{skill.name}</h4>
              <p className="text-gray-600 mt-2">{skill.level}% Proficiency</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CodeOutlined className="text-xl text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Frontend Expertise</h4>
                <p className="text-gray-700">Expertise in React and frontend technologies to build scalable, responsive web applications.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <BugOutlined className="text-xl text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Problem Solving</h4>
                <p className="text-gray-700">Strong problem-solving and debugging skills with attention to detail.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <TeamOutlined className="text-xl text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Team Collaboration</h4>
                <p className="text-gray-700">Ability to collaborate with cross-functional teams to deliver high-quality results.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <BookOutlined className="text-xl text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Continuous Learning</h4>
                <p className="text-gray-700">Passionate about learning new tools and frameworks to enhance web development skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;