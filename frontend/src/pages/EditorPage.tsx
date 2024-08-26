import React from 'react';
import DemoList from '../components/DemoList';
import FrameSelector from '../components/FrameSelector';
import FrameRenderer from '../components/FrameRenderer';

const EditorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Demo Frame Editor</h1>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Demos</h2>
          <DemoList />
        </div>
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Frames</h2>
          <FrameSelector />
        </div>
        <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Editor</h2>
          <FrameRenderer />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
