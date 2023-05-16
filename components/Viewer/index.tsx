import dynamic from "next/dynamic";
import "@uiw/react-markdown-preview/markdown.css";

const MDViewer = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

interface MDViewerPropsType {
  source: string;
}

export const Viewer = ({ source }: MDViewerPropsType) => {
  return <MDViewer source={source} />;
};
