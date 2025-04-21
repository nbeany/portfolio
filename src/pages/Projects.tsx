import React from 'react';
import { Tabs, Card, Tag, Button } from 'antd';
import restaurantImg from './re.jfif';
import ec from './ec.jfif';
import app from './app.jfif';


const { TabPane } = Tabs;

const projects = [
  {
    id: 8,
    title: "Hotel Booking Website",
    category: "Frontend",
    description:
      "Developed a modern and responsive website for a hotel booking system with user-friendly interface to manage room bookings, availability, and customer details.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image:
      "https://public.readdy.ai/ai/img_res/883c03feea7e900c4245bc103240ebdf.jpg",
  },
  {
    id: 9,
    title: "Bitcoin Real-Time Dashboard",
    category: "Data",
    description:
      "Created an interactive dashboard for real-time Bitcoin price monitoring with historical data analysis, trend visualization, and predictive analytics features.",
    technologies: ["React", "Node.js", "D3.js", "WebSocket API"],
    image:
      "https://public.readdy.ai/ai/img_res/8c91ca6d48996cbfa611f98596961e2e.jpg",
  },
  {
    id: 10,
    title: "Apple Stock Market Data Dashboard",
    category: "Data",
    description:
      "Developed a comprehensive dashboard for Apple stock market data analysis with interactive charts, historical performance metrics, and comparison tools.",
    technologies: ["React", "ECharts", "REST API", "Redux"],
    image:
      "https://public.readdy.ai/ai/img_res/9fad9a2cf916cc2502f88475ba84d74b.jpg",
  },
  {
    id: 11,
    title: "Big Data Fraud Detection System",
    category: "Data",
    description:
      "Built a scalable fraud detection system using big data technologies to analyze transaction patterns and identify suspicious activities in real-time.",
    technologies: ["Apache Spark", "Hadoop", "Machine Learning", "Python"],
    image:
      "https://public.readdy.ai/ai/img_res/c34fb0d8e88ceb3d22f1112ac8811106.jpg",
  },
  {
    id: 12,
    title: "E-commerce website",
    category: "Frontend",
    description:
      "Designed and developed a fully responsive e-commerce website with modern UI/UX, featuring product listings, shopping cart functionality, and seamless checkout integration.",
    technologies: ["html", "css3", "Bootstrap", "javascript"],
    image: ec,
  },
  
  {
    id: 13,
    title: "Apple website clone",
    category: "Frontend",
    description:
      "Cloned the official Apple website with pixel-perfect design, smooth animations, and responsive layout using modern frontend technologies to mimic the original user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: app,
  },
  
  {
    id: 14,
    title: "Small Restaurant Website",
    category: "Frontend",
    description:
      "Created a responsive restaurant website with an elegant design, digital menu, reservation form, and interactive user interface to enhance the customer experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: restaurantImg,
  },
  
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            A selection of my most impactful projects, showcasing my skills in design, development, and problem-solving.
          </p>
        </div>
        <Tabs defaultActiveKey="all" centered className="mb-12">
          {['all', 'Frontend', 'Fullstack', 'Data'].map((categoryKey) => (
            <TabPane
              tab={categoryKey === 'all' ? 'All Projects' : categoryKey}
              key={categoryKey}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => categoryKey === 'all' || project.category === categoryKey)
                  .map((project) => (
                    <Card
                      key={project.id}
                      hoverable
                      className="overflow-hidden rounded-lg"
                      cover={
                        <div className="h-56 overflow-hidden">
                          <img
                            alt={project.title}
                            src={project.image}
                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      }
                    >
                      <div className="mb-2">
                        <Tag color="blue" className="mr-1">
                          {project.category}
                        </Tag>
                      </div>
                      <Card.Meta
                        title={<span className="text-xl font-bold">{project.title}</span>}
                        description={project.description}
                      />
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Tag key={index} color="purple" className="px-2 py-0.5">
                            {tech}
                          </Tag>
                        ))}
                      </div>
                      {/* <Button
                        type="primary"
                        className="!rounded-button whitespace-nowrap mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 border-none hover:opacity-90"
                      >
                        View Details
                      </Button> */}
                    </Card>
                  ))}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
