import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchDemos } from '../features/demoSlice';
import { fetchFramesByDemo } from '../features/frameSlice';

const DemoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const demos = useAppSelector((state) => state.demo.demos);
  const loading = useAppSelector((state) => state.demo.loading);

  useEffect(() => {
    dispatch(fetchDemos());
  }, [dispatch]);

  const handleDemoSelect = (demoId: number) => {
    dispatch(fetchFramesByDemo(demoId));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <ul className="space-y-2">
      {demos && demos.map((demo) => (
        <li
          key={demo.id}
          onClick={() => handleDemoSelect(demo.id)}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded"
        >
          {demo.name}
        </li>
      ))}
    </ul>
  );
};

export default DemoList;
