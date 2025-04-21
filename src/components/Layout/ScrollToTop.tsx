import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

interface ScrollToTopProps {
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollToTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className="!rounded-button whitespace-nowrap fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors z-50 cursor-pointer"
    >
      <ArrowUpOutlined className="text-xl" />
    </button>
  );
};

export default ScrollToTop;