import React, { useRef, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateFrame } from '../features/frameSlice';

const FrameRenderer: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedFrame = useAppSelector((state) => state.frame.selectedFrame);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [frameHtml, setFrameHtml] = useState<string>('');

  useEffect(() => {
    setFrameHtml(selectedFrame?.frame_html || '');
  }, [selectedFrame]);

  const handleDoubleClick = () => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        iframeDocument.designMode = 'on';
        setIsEditing(true);
      }
    }
  };

  const handleSave = async () => {
    if (selectedFrame) {
      const updatedHtml = iframeRef.current?.contentDocument?.documentElement.outerHTML || '';
      const updatedFrame = { ...selectedFrame, frame_html: updatedHtml };

      // Atualiza o frame no backend e no estado global
      await dispatch(updateFrame(updatedFrame));

      // Atualiza o estado de edição
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFrameHtml(selectedFrame?.frame_html || '');
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {selectedFrame && (
        <>
          <iframe
            title={selectedFrame.id.toString()}
            ref={iframeRef}
            srcDoc={frameHtml}
            className="w-full h-96 border border-gray-300 rounded-lg"
            onLoad={handleDoubleClick}
          />
          <div className="flex space-x-4 mt-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Edit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FrameRenderer;
