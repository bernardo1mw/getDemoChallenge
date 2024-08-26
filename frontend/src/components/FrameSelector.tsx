import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setSelectedFrame } from '../features/frameSlice';

const FrameSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const frames = useAppSelector((state) => state.frame.frames);

  // Ordena os frames por ID antes de renderizar
  const sortedFrames = [...frames].sort((a, b) => a.id - b.id);

  const handleFrameSelect = (frameId: number) => {
    const frame = sortedFrames.find((f) => f.id === frameId);
    if (frame) {
      dispatch(setSelectedFrame(frame));
    }
  };

  return (
    <ul className="space-y-2">
      {sortedFrames.map((frame) => (
        <li
          key={frame.id}
          onClick={() => handleFrameSelect(frame.id)}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded"
        >
          Frame {frame.id}
        </li>
      ))}
    </ul>
  );
};

export default FrameSelector;
