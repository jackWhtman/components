import OpenSeadragon from "openseadragon";
import { useEffect, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "../../FallbackComponent";
import "./index.css";

const OpenSeaDragonViewer = ({ imageBlobURL, previewPath }) => {
  const viewerRef = useRef(null);
  const viewerInstanceRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && !viewerInstanceRef.current) {
      viewerInstanceRef.current = OpenSeadragon({
        element: viewerRef.current,
        maxZoomLevel: 10,
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      });

      viewerInstanceRef.current.open({
        type: "image",
        url: imageBlobURL,
      });
    }

    return () => {
      if (viewerInstanceRef.current) {
        viewerInstanceRef.current.destroy();
        viewerInstanceRef.current = null;
      }
    };
  }, [imageBlobURL]);

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <div>
        <div className="previewer" ref={viewerRef} />
        <div>{previewPath}</div>
      </div>
    </ErrorBoundary>
  );
};

export default OpenSeaDragonViewer;
